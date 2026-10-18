import { useId } from "react";

export type Variant = "tl-br" | "tr-bl";

// Tile geometry (viewBox units, scales with the tile)
const W = 600;   // tile width
const H = 440;   // tile height
const R = 22;    // convex (outer) corner radius
const F = 22;    // concave (inner notch) corner radius

// Notch 1 (top-left)
const NW1 = 230;
const NH1 = 80;
// Notch 2 (bottom-right)
const NW2 = 230;
const NH2 = 80;

// Clockwise path with a notch at top-left AND bottom-right
const D = [
  `M${NW1},${R}`,
  `A${R},${R} 0 0 1 ${NW1 + R},0`,
  `H${W - R}`,
  `A${R},${R} 0 0 1 ${W},${R}`,
  `V${H - NH2 - R}`,
  `A${R},${R} 0 0 1 ${W - R},${H - NH2}`,
  `H${W - NW2 + F}`,
  `A${F},${F} 0 0 0 ${W - NW2},${H - NH2 + F}`,
  `V${H - R}`,
  `A${R},${R} 0 0 1 ${W - NW2 - R},${H}`,
  `H${R}`,
  `A${R},${R} 0 0 1 0,${H - R}`,
  `V${NH1 + R}`,
  `A${R},${R} 0 0 1 ${R},${NH1}`,
  `H${NW1 - F}`,
  `A${F},${F} 0 0 0 ${NW1},${NH1 - F}`,
  "Z",
].join(" ");

// "tr-bl" is the same shape mirrored horizontally
const TRANSFORM: Record<Variant, string | undefined> = {
  "tl-br": undefined,
  "tr-bl": `translate(${W} 0) scale(-1 1)`,
};

type Props = {
  src: string;
  alt: string;
  variant: Variant;
  className?: string;
};

export default function NotchedImage({ src, alt, variant, className = "" }: Props) {
  const clipId = `notch-${useId().replace(/:/g, "")}`;

  return (
    <div className={`group ${className}`}>
      <svg
        viewBox={`0 0 ${W} ${H}`}
        role="img"
        aria-label={alt}
        className="block h-auto w-full"
      >
        <defs>
          <clipPath id={clipId}>
            <path d={D} transform={TRANSFORM[variant]} />
          </clipPath>
        </defs>
        <g clipPath={`url(#${clipId})`}>
          <image
            href={src}
            width={W}
            height={H}
            preserveAspectRatio="xMidYMid slice"
            className="origin-center transition-transform duration-500 [transform-box:fill-box] group-hover:scale-105"
          />
        </g>
      </svg>
    </div>
  );
}