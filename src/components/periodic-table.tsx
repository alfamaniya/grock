import { useMemo, type CSSProperties } from "react";
import {
  CATEGORY_LABEL,
  CATEGORY_ORDER,
  COLOR_MODE_LABEL,
  ELEMENTS,
  HEAT_RANGE,
  heatValue,
  matchesQuery,
  phaseAt,
  type Category,
  type ChemElement,
  type ColorMode,
  type Phase,
} from "@/lib/elements";
import { useTable } from "@/lib/store";
import { Slider } from "@/components/ui/slider";
import { cn } from "@/lib/utils";

const COLOR_MODES: ColorMode[] = [
  "category",
  "block",
  "state",
  "electronegativity",
  "mass",
  "density",
  "year",
];

function tileTone(el: ChemElement, mode: ColorMode, kelvin: number): {
  className?: string;
  style?: CSSProperties;
} {
  if (mode === "category") {
    const bar = `var(--color-cat-${el.category})`;
    return {
      style: {
        background: `color-mix(in oklab, ${bar} 22%, var(--color-surface))`,
      },
    };
  }
  if (mode === "block") {
    const map: Record<string, string> = {
      s: "var(--color-cat-alkali-metal)",
      p: "var(--color-cat-nonmetal)",
      d: "var(--color-cat-transition)",
      f: "var(--color-cat-lanthanide)",
    };
    const bar = map[el.block];
    return {
      style: {
        background: `color-mix(in oklab, ${bar} 22%, var(--color-surface))`,
      },
    };
  }
  if (mode === "state") {
    const phase = phaseAt(el, kelvin);
    const bar =
      phase === "solid"
        ? "var(--color-phase-solid)"
        : phase === "liquid"
          ? "var(--color-phase-liquid)"
          : phase === "gas"
            ? "var(--color-phase-gas)"
            : "var(--color-phase-unknown)";
    return {
      style: {
        background: `color-mix(in oklab, ${bar} 28%, var(--color-surface))`,
      },
    };
  }
  const t = heatValue(el, mode);
  if (t == null) {
    return {
      style: { background: "var(--color-surface-2)" },
    };
  }
  return {
    className: "heat-fill",
    style: { ["--t"]: String(t) } as CSSProperties,
  };
}

function ElementTile({
  el,
  selected,
  dim,
  mode,
  kelvin,
  onSelect,
}: {
  el: ChemElement;
  selected: boolean;
  dim: boolean;
  mode: ColorMode;
  kelvin: number;
  onSelect: (z: number) => void;
}) {
  const tone = tileTone(el, mode, kelvin);
  return (
    <button
      type="button"
      className={cn("el-tile", tone.className)}
      style={{
        gridColumn: el.col + 1,
        gridRow: el.row === 9 ? 10 : el.row === 10 ? 11 : el.row + 1,
        ...tone.style,
      }}
      data-selected={selected}
      data-dim={dim}
      aria-pressed={selected}
      aria-label={`${el.name}, ${el.symbol}, atomic number ${el.z}`}
      onClick={() => onSelect(el.z)}
    >
      <span className="font-mono text-2xs leading-none tabular-nums text-muted">{el.z}</span>
      <span className="my-auto font-mono text-sm leading-none font-medium">{el.symbol}</span>
    </button>
  );
}

function Placeholder({
  label,
  col,
  row,
  onClick,
}: {
  label: string;
  col: number;
  row: number;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="flex items-center justify-center rounded-xs bg-surface-2 font-mono text-tiny text-subtle shadow-border"
      style={{ gridColumn: col + 1, gridRow: row + 1 }}
      aria-label={label}
    >
      *
    </button>
  );
}

export function PeriodicTable() {
  const selectedZ = useTable((s) => s.selectedZ);
  const setSelectedZ = useTable((s) => s.setSelectedZ);
  const query = useTable((s) => s.query);
  const colorMode = useTable((s) => s.colorMode);
  const setColorMode = useTable((s) => s.setColorMode);
  const temperatureK = useTable((s) => s.temperatureK);
  const setTemperatureK = useTable((s) => s.setTemperatureK);
  const categoryFilter = useTable((s) => s.categoryFilter);
  const setCategoryFilter = useTable((s) => s.setCategoryFilter);

  const q = query.trim();

  const dimFor = useMemo(() => {
    const set = new Set<number>();
    for (const el of ELEMENTS) {
      const matchQ = matchesQuery(el, q);
      const matchC = categoryFilter == null || el.category === categoryFilter;
      if (!(matchQ && matchC)) set.add(el.z);
    }
    return set;
  }, [q, categoryFilter]);

  const celsius = temperatureK - 273;
  const heat =
    colorMode === "electronegativity" ||
    colorMode === "mass" ||
    colorMode === "density" ||
    colorMode === "year"
      ? HEAT_RANGE[colorMode]
      : null;

  return (
    <div className="flex min-h-0 flex-1 flex-col gap-3">
      <div className="flex flex-wrap items-center gap-2">
        <div
          role="tablist"
          aria-label="Color by"
          className="flex max-w-full gap-1 overflow-x-auto rounded-md bg-surface p-1 shadow-border"
        >
          {COLOR_MODES.map((mode) => (
            <button
              key={mode}
              type="button"
              role="tab"
              aria-selected={colorMode === mode}
              onClick={() => setColorMode(mode)}
              className={cn(
                "h-8 shrink-0 rounded-sm px-2.5 text-xs font-medium transition-[background-color,color] duration-150",
                colorMode === mode ? "bg-surface-2 text-fg" : "text-muted hover:text-fg",
              )}
            >
              {COLOR_MODE_LABEL[mode]}
            </button>
          ))}
        </div>
      </div>

      {colorMode === "state" ? (
        <div className="flex flex-col gap-2 rounded-md bg-surface px-4 py-3 shadow-border">
          <div className="flex items-baseline justify-between gap-3">
            <span className="text-xs font-medium text-muted">Temperature</span>
            <span className="font-mono text-2xs tabular-nums text-fg">
              {Math.round(temperatureK)} K · {Math.round(celsius)} °C
            </span>
          </div>
          <Slider
            min={0}
            max={6000}
            step={1}
            value={[temperatureK]}
            onValueChange={(v) => setTemperatureK(v[0] ?? 298)}
            aria-label="Temperature in kelvin"
          />
          <div className="flex justify-between font-mono text-tiny text-subtle">
            <span>0 K</span>
            <span>298 K</span>
            <span>6000 K</span>
          </div>
        </div>
      ) : null}

      <div className="relative min-h-0 flex-1 overflow-auto rounded-lg bg-surface p-3 shadow-border">
        <div className="periodic-grid">
          {Array.from({ length: 18 }, (_, i) => (
            <div
              key={`g${i}`}
              className="flex items-end justify-center pb-0.5 font-mono text-2xs text-subtle"
              style={{ gridColumn: i + 2, gridRow: 1 }}
            >
              {i + 1}
            </div>
          ))}
          {Array.from({ length: 7 }, (_, i) => (
            <div
              key={`p${i}`}
              className="flex items-center justify-center font-mono text-2xs text-subtle"
              style={{ gridColumn: 1, gridRow: i + 2 }}
            >
              {i + 1}
            </div>
          ))}
          <div
            className="flex items-center justify-center font-mono text-tiny text-subtle"
            style={{ gridColumn: 1, gridRow: 10 }}
          >
            *
          </div>
          <div
            className="flex items-center justify-center font-mono text-tiny text-subtle"
            style={{ gridColumn: 1, gridRow: 11 }}
          >
            **
          </div>

          <Placeholder label="57–71" col={3} row={6} onClick={() => setSelectedZ(57)} />
          <Placeholder label="89–103" col={3} row={7} onClick={() => setSelectedZ(89)} />

          {ELEMENTS.map((el) => (
            <ElementTile
              key={el.z}
              el={el}
              selected={selectedZ === el.z}
              dim={dimFor.has(el.z)}
              mode={colorMode}
              kelvin={temperatureK}
              onSelect={setSelectedZ}
            />
          ))}
        </div>
        <p className="mt-2 text-center text-micro text-subtle lg:hidden">Swipe to see every group</p>
      </div>

      <Legend
        mode={colorMode}
        categoryFilter={categoryFilter}
        onCategory={setCategoryFilter}
        heat={heat}
      />
    </div>
  );
}

function Legend({
  mode,
  categoryFilter,
  onCategory,
  heat,
}: {
  mode: ColorMode;
  categoryFilter: Category | null;
  onCategory: (c: Category | null) => void;
  heat: { min: string; max: string } | null;
}) {
  if (mode === "category") {
    return (
      <div className="flex flex-wrap gap-1.5">
        {CATEGORY_ORDER.map((cat) => {
          const active = categoryFilter === cat;
          return (
            <button
              key={cat}
              type="button"
              onClick={() => onCategory(active ? null : cat)}
              className={cn(
                "inline-flex h-7 items-center gap-1.5 rounded-full px-2.5 text-micro font-medium text-muted shadow-border transition-opacity duration-150",
                categoryFilter && !active && "opacity-40",
              )}
            >
              <span
                className="size-1.5 rounded-full"
                style={{ background: `var(--color-cat-${cat})` }}
                aria-hidden
              />
              {CATEGORY_LABEL[cat]}
            </button>
          );
        })}
      </div>
    );
  }

  if (mode === "block") {
    const blocks: Array<{ id: string; label: string; color: string }> = [
      { id: "s", label: "s-block", color: "var(--color-cat-alkali-metal)" },
      { id: "p", label: "p-block", color: "var(--color-cat-nonmetal)" },
      { id: "d", label: "d-block", color: "var(--color-cat-transition)" },
      { id: "f", label: "f-block", color: "var(--color-cat-lanthanide)" },
    ];
    return (
      <div className="flex flex-wrap gap-1.5">
        {blocks.map((b) => (
          <span
            key={b.id}
            className="inline-flex h-7 items-center gap-1.5 rounded-full px-2.5 text-micro font-medium text-muted shadow-border"
          >
            <span className="size-1.5 rounded-full" style={{ background: b.color }} />
            {b.label}
          </span>
        ))}
      </div>
    );
  }

  if (mode === "state") {
    const phases: Array<{ id: Phase; label: string; color: string }> = [
      { id: "solid", label: "Solid", color: "var(--color-phase-solid)" },
      { id: "liquid", label: "Liquid", color: "var(--color-phase-liquid)" },
      { id: "gas", label: "Gas", color: "var(--color-phase-gas)" },
      { id: "unknown", label: "Unknown", color: "var(--color-phase-unknown)" },
    ];
    return (
      <div className="flex flex-wrap gap-1.5">
        {phases.map((p) => (
          <span
            key={p.id}
            className="inline-flex h-7 items-center gap-1.5 rounded-full px-2.5 text-micro font-medium text-muted shadow-border"
          >
            <span className="size-1.5 rounded-full" style={{ background: p.color }} />
            {p.label}
          </span>
        ))}
      </div>
    );
  }

  if (heat) {
    return (
      <div className="flex items-center gap-3 text-micro text-muted">
        <span className="font-mono tabular-nums">{heat.min}</span>
        <div
          className="h-1.5 flex-1 rounded-full"
          style={{
            background:
              "linear-gradient(90deg, var(--color-heat-low), var(--color-heat-high))",
          }}
        />
        <span className="font-mono tabular-nums">{heat.max}</span>
      </div>
    );
  }

  return null;
}
