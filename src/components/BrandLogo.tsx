import { LOGO_DARK_SRC, LOGO_MARK_SRC } from "../config";

type Props = {
  /** "dark" = logo completa com frase branca (para fundos escuros)
   *  "mark" = emblema compacto (para fundos claros) */
  variant?: "dark" | "mark";
  className?: string;
  /** suaviza as bordas para fundir no fundo */
  feather?: boolean;
  /** brilho suave atrás da logo */
  glow?: boolean;
  eager?: boolean;
};

const FEATHER =
  "radial-gradient(ellipse 50% 50% at 50% 50%, #000 62%, transparent 100%)";

export default function BrandLogo({
  variant = "dark",
  className = "",
  feather = true,
  glow = false,
  eager = false,
}: Props) {
  const src = variant === "dark" ? LOGO_DARK_SRC : LOGO_MARK_SRC;

  return (
    <div className={`relative ${className}`}>
      {glow && (
        <div
          aria-hidden="true"
          className="absolute inset-[12%] rounded-full blur-3xl opacity-60"
          style={{
            background:
              "conic-gradient(from 200deg, #FF8A00, #1A6FB5, #7FBF1C, #FF8A00)",
          }}
        />
      )}
      <img
        src={src}
        alt="Instituto Zion Brasil — Conectando forças para transformar"
        loading={eager ? "eager" : "lazy"}
        draggable={false}
        className={`relative w-full h-full object-contain select-none ${
          variant === "mark" ? "mix-blend-multiply" : ""
        }`}
        style={
          feather && variant === "dark"
            ? { WebkitMaskImage: FEATHER, maskImage: FEATHER }
            : undefined
        }
      />
    </div>
  );
}
