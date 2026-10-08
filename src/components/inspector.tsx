import { Heart, X } from "lucide-react";
import {
  CATEGORY_LABEL,
  elementOfTheDay,
  formatMass,
  formatTemp,
  getElement,
  type ChemElement,
} from "@/lib/elements";
import { useTable } from "@/lib/store";
import { ElectronShell } from "@/components/electron-shell";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="min-w-0">
      <div className="text-micro font-medium tracking-wide text-subtle uppercase">{label}</div>
      <div className="mt-0.5 font-mono text-sm tabular-nums text-fg">{value}</div>
    </div>
  );
}

function Featured({ element }: { element: ChemElement }) {
  const setSelectedZ = useTable((s) => s.setSelectedZ);
  return (
    <button
      type="button"
      onClick={() => setSelectedZ(element.z)}
      className="w-full rounded-md bg-surface-2 p-4 text-left shadow-border transition-transform duration-150 ease-out active:scale-[0.96]"
    >
      <div className="text-micro font-medium tracking-wide text-subtle uppercase">Today</div>
      <div className="mt-2 font-display text-2xl leading-tight text-fg">{element.name}</div>
      <div className="mt-1 font-mono text-sm text-muted">
        {element.symbol} · {element.z}
      </div>
      <p className="mt-3 text-sm text-muted">{element.summary}</p>
    </button>
  );
}

export function Inspector({ onClose }: { onClose?: () => void }) {
  const selectedZ = useTable((s) => s.selectedZ);
  const favorites = useTable((s) => s.favorites);
  const toggleFavorite = useTable((s) => s.toggleFavorite);
  const setSelectedZ = useTable((s) => s.setSelectedZ);
  const el = selectedZ ? getElement(selectedZ) : undefined;
  const featured = elementOfTheDay();
  const loved = el ? favorites.includes(el.z) : false;

  if (!el) {
    return (
      <aside className="flex h-full flex-col gap-5 p-5">
        <div>
          <div className="text-micro font-medium tracking-wide text-subtle uppercase">Inspector</div>
          <h2 className="mt-1 font-display text-2xl leading-tight text-fg">Select an element</h2>
          <p className="mt-2 text-sm text-muted">
            Click a cell, search by name or symbol, or open today's element.
          </p>
        </div>
        <Featured element={featured} />
      </aside>
    );
  }

  const groupLabel = el.group == null ? "—" : String(el.group);
  const catVar = `var(--color-cat-${el.category})`;

  return (
    <aside className="flex h-full min-h-0 flex-col">
      <div className="flex items-start justify-between gap-3 p-5 pb-3">
        <div className="min-w-0">
          <div className="flex items-center gap-2">
            <span
              className="size-2 rounded-full"
              style={{ background: catVar }}
              aria-hidden
            />
            <span className="text-micro font-medium tracking-wide text-subtle uppercase">
              {CATEGORY_LABEL[el.category]}
            </span>
          </div>
          <h2 className="mt-1 font-display text-3xl leading-none tracking-tight text-fg">
            {el.name}
          </h2>
        </div>
        <div className="flex shrink-0 items-center gap-1">
          <Button
            variant="ghost"
            size="icon-sm"
            aria-label={loved ? "Remove from saved" : "Save element"}
            aria-pressed={loved}
            onClick={() => toggleFavorite(el.z)}
          >
            <Heart className={cn("size-4", loved && "fill-danger text-danger")} />
          </Button>
          {onClose ? (
            <Button variant="ghost" size="icon-sm" aria-label="Close inspector" onClick={onClose}>
              <X className="size-4" />
            </Button>
          ) : (
            <Button variant="ghost" size="icon-sm" aria-label="Clear selection" onClick={() => setSelectedZ(null)}>
              <X className="size-4" />
            </Button>
          )}
        </div>
      </div>

      <div className="min-h-0 flex-1 overflow-y-auto px-5 pb-6">
        <div className="flex items-end justify-between gap-4">
          <div className="font-display text-6xl leading-none tracking-tight text-fg">{el.symbol}</div>
          <div className="text-right">
            <div className="font-mono text-xs text-subtle">Z</div>
            <div className="font-mono text-2xl tabular-nums text-fg">{el.z}</div>
          </div>
        </div>

        <p className="mt-4 text-sm leading-relaxed text-muted">{el.summary}</p>

        <div className="mt-5 grid grid-cols-2 gap-x-4 gap-y-3">
          <Stat label="Atomic mass" value={`${formatMass(el.mass)} u`} />
          <Stat label="Block / period" value={`${el.block}-block · ${el.period}`} />
          <Stat label="Group" value={groupLabel} />
          <Stat label="Config" value={el.electronConfig} />
          <Stat label="Electronegativity" value={el.electronegativity == null ? "—" : el.electronegativity.toFixed(2)} />
          <Stat label="Oxidation" value={el.oxidation} />
          <Stat label="Melting" value={formatTemp(el.melting)} />
          <Stat label="Boiling" value={formatTemp(el.boiling)} />
          <Stat label="Density" value={el.density == null ? "—" : `${el.density} g/cm³`} />
          <Stat
            label="Ionization"
            value={el.ionization == null ? "—" : `${el.ionization} kJ/mol`}
          />
        </div>

        <Separator className="my-5" />

        <div className="text-micro font-medium tracking-wide text-subtle uppercase">
          Electron shells
        </div>
        <p className="mt-1 font-mono text-xs tabular-nums text-muted">{el.shells.join(" · ")}</p>
        <div className="mt-3 rounded-md bg-surface-2 p-3 shadow-border">
          <ElectronShell element={el} />
        </div>

        <Separator className="my-5" />

        <div className="grid grid-cols-2 gap-3">
          <Stat
            label="Discovered"
            value={el.discovered == null ? el.discoverer : String(el.discovered)}
          />
          <Stat label="By" value={el.discoverer} />
          <Stat label="Standard phase" value={el.phase} />
          <Stat label="Shells" value={String(el.shells.length)} />
        </div>
      </div>
    </aside>
  );
}
