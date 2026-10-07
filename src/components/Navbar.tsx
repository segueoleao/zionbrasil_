import { useEffect, useState } from "react";
import { ArrowUpRight, MessageCircle } from "lucide-react";
import { WHATSAPP_DISPLAY, waLink } from "../config";
import BrandLogo from "./BrandLogo";

const LINKS = [
  { label: "Quem somos", href: "#quem" },
  { label: "Nossas frentes", href: "#frentes" },
  { label: "Ações", href: "#acoes" },
  { label: "Equipe", href: "#equipe" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    const onClick = () => setOpen(false);
    if (open) {
      window.addEventListener("keydown", onKey);
      // close on scroll to avoid stuck menu
      window.addEventListener("scroll", onClick, { passive: true });
    }
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("scroll", onClick);
    };
  }, [open ]);

  return (
    <div className="absolute top-3 md:top-4 left-1/2 -translate-x-1/2 z-50 flex flex-col items-center w-[calc(100%-2rem)] max-w-[340px]">
      {/* Logo above the pill */}
      <a
        href="#topo"
        onClick={() => setOpen(false)}
        aria-label="Instituto Zion Brasil - início"
        className="block -mb-3 md:-mb-4 transition-transform duration-500 hover:-translate-y-0.5 hover:scale-[1.03]"
      >
        <BrandLogo
          variant="dark"
          glow
          eager
          className="w-32 h-32 md:w-40 md:h-40 [@media(max-height:820px)]:w-28 [@media(max-height:820px)]:h-28 [@media(max-height:680px)]:w-24 [@media(max-height:680px)]:h-24 drop-shadow-[0_16px_32px_rgba(0,0,0,0.45)]"
        />
      </a>

      {/* Floating pill */}
      <div className="relative w-full bg-white rounded-full shadow-lg shadow-black/20 flex items-center justify-between pl-6 pr-2 py-2">
        <a
          href="#topo"
          className="flex items-center gap-2 select-none"
          onClick={() => setOpen(false)}
          aria-label="Zion - início"
        >
          <span className="flex items-end gap-[3px] pb-[2px]" aria-hidden="true">
            <span className="w-[7px] h-[7px] rounded-full bg-[#FF8A00] inline-block" />
            <span className="w-[9px] h-[9px] rounded-full bg-[#1A6FB5] inline-block -mb-[1px]" />
            <span className="w-[7px] h-[7px] rounded-full bg-[#7FBF1C] inline-block" />
          </span>
          <span className="text-lg font-bold tracking-tight text-black leading-none">
            Zion<span className="text-[#FF8A00]">.</span>
          </span>
        </a>

        {/* Animated hamburger */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            setOpen((v) => !v);
          }}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          className="w-10 h-10 rounded-full bg-[#0A2A5E] hover:bg-[#071E44] transition-colors flex flex-col items-center justify-center gap-[5px] shrink-0"
        >
          <span
            className={`block w-[18px] h-[2px] bg-white rounded-full transition-transform duration-300 ${
              open ? "rotate-45 translate-y-[3.5px]" : ""
            }`}
            style={{ transitionTimingFunction: "cubic-bezier(0.77,0,0.175,1)" }}
          />
          <span
            className={`block w-[18px] h-[2px] bg-white rounded-full transition-transform duration-300 ${
              open ? "-rotate-45 -translate-y-[3.5px]" : ""
            }`}
            style={{ transitionTimingFunction: "cubic-bezier(0.77,0,0.175,1)" }}
          />
        </button>
      </div>

      {/* Dropdown */}
      <div
        className={`w-full mt-2 bg-white rounded-2xl shadow-xl shadow-black/20 overflow-hidden transition-all duration-300 origin-top ${
          open
            ? "opacity-100 scale-100 translate-y-0 pointer-events-auto"
            : "opacity-0 scale-[0.96] -translate-y-2 pointer-events-none"
        }`}
      >
        <nav className="p-2">
          {LINKS.map((l, i) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              style={{ animationDelay: `${i * 40}ms` }}
              className={`flex items-center justify-between px-4 py-3 rounded-xl text-[15px] font-medium text-[#0A2A5E] hover:bg-[#FFF6E9] hover:text-black transition-colors ${
                open ? "animate-fade-in-down" : ""
              }`}
            >
              {l.label}
              <ArrowUpRight size={16} className="text-[#FF8A00]" />
            </a>
          ))}
          <div className="p-2 pt-1">
            <a
              href="#voluntario"
              onClick={() => setOpen(false)}
              className="flex items-center justify-center gap-2 w-full bg-[#0A2A5E] hover:bg-[#071E44] text-white text-sm font-semibold rounded-xl px-5 py-3.5 transition-colors"
            >
              Quero ser voluntário
              <span className="w-2 h-2 rounded-full bg-[#7FBF1C] inline-block animate-pulse" />
            </a>
            <a
              href={waLink()}
              target="_blank"
              rel="noreferrer"
              onClick={() => setOpen(false)}
              className="mt-2 flex items-center justify-center gap-2 w-full bg-[#25D366] hover:bg-[#1eb857] text-white text-sm font-semibold rounded-xl px-5 py-3 transition-colors"
            >
              <MessageCircle size={16} />
              WhatsApp {WHATSAPP_DISPLAY}
            </a>
            <p className="text-center text-[11px] text-black/40 font-medium mt-2">
              Rio de Janeiro · Saúde · Esporte · Jurídico
            </p>
          </div>
        </nav>
      </div>
    </div>
  );
}
