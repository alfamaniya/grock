import type { ChemElement } from "@/lib/elements";

const RADII = [22, 36, 50, 64, 78, 92, 106];

function dotsFor(count: number, r: number) {
  const pts: Array<{ x: string; y: string }> = [];
  for (let i = 0; i < count; i++) {
    const a = (i / count) * Math.PI * 2 - Math.PI / 2;
    pts.push({
      x: (110 + Math.cos(a) * r).toFixed(2),
      y: (110 + Math.sin(a) * r).toFixed(2),
    });
  }
  return pts;
}

export function ElectronShell({ element }: { element: ChemElement }) {
  const shells = element.shells;
  const maxR = RADII[shells.length - 1] ?? 92;
  return (
    <svg
      viewBox="0 0 220 220"
      className="mx-auto block w-52 text-fg"
      role="img"
      aria-label={`Electron shells of ${element.name}: ${shells.join(", ")}`}
    >
      <circle cx="110" cy="110" r={maxR + 8} fill="none" className="stroke-border" strokeWidth="1" />
      {shells.map((_, i) => (
        <circle
          key={i}
          cx="110"
          cy="110"
          r={RADII[i]}
          fill="none"
          className="stroke-border-strong"
          strokeWidth="1"
        />
      ))}
      <circle cx="110" cy="110" r="16" className="fill-surface-2 stroke-border-strong" strokeWidth="1" />
      <text
        x="110"
        y="114"
        textAnchor="middle"
        className="fill-fg"
        fontSize="11"
        fontFamily="IBM Plex Mono, ui-monospace, monospace"
        fontWeight="500"
      >
        {element.symbol}
      </text>
      {shells.flatMap((count, i) =>
        dotsFor(count, RADII[i] ?? 22).map((p, j) => (
          <circle
            key={`${i}-${j}`}
            cx={p.x}
            cy={p.y}
            r={count > 18 ? 1.5 : 2}
            className="fill-accent"
          />
        )),
      )}
    </svg>
  );
}
