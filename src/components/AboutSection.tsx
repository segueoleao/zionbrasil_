import { Mail, Plus, MapPin } from "lucide-react";
import { EMAIL } from "../config";
import BrandLogo from "./BrandLogo";

export default function AboutSection() {
  return (
    <section
      id="quem"
      className="bg-[#F6E4CF] rounded-t-[25px] relative z-10 py-20 md:py-32 px-6 overflow-hidden"
    >
      {/* subtle grain / glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-[700px] h-[300px] rounded-full bg-white/40 blur-[100px]"
      />

      {/* Top Area */}
      <div className="relative max-w-3xl mx-auto flex flex-col items-center text-center">
        <span className="inline-flex items-center gap-1.5 bg-[#0A2A5E] text-[#FFF9F2] text-[11px] font-semibold uppercase tracking-[0.18em] rounded-full px-4 py-2 mb-6">
          <MapPin size={12} className="text-[#FF8A00]" />
          Quem somos · Rio de Janeiro
        </span>

        <p className="text-[#0A2A5E] text-base md:text-lg text-center leading-relaxed max-w-lg font-medium">
          Criamos pontes que se movem com o ritmo da comunidade,{" "}
          <span className="font-semibold">não por cima dela.</span> Feitas para
          acolher, estar presente e fluir.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a
            href={`mailto:${EMAIL}?subject=${encodeURIComponent("Quero dizer olá para o Zion")}`}
            className="group inline-flex items-center gap-3 bg-[#0A2A5E] hover:bg-[#071E44] text-[#FFF9F2] rounded-full pl-2 pr-7 py-2 transition-colors duration-300"
          >
            <span className="w-9 h-9 rounded-full bg-white flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
              <Mail size={16} className="text-[#0A2A5E]" />
            </span>
            <span className="uppercase tracking-wide font-medium text-[13px]">
              Diga olá
            </span>
          </a>

          <a
            href="#acoes"
            className="group inline-flex items-center gap-3 bg-[#FFF9F2] hover:bg-white border border-[#0A2A5E]/10 text-[#0A2A5E] rounded-full pl-2 pr-7 py-2 transition-colors duration-300 shadow-sm"
          >
            <span className="w-9 h-9 rounded-full bg-[#FF8A00] flex items-center justify-center shrink-0 group-hover:rotate-90 transition-transform duration-300">
              <Plus size={16} className="text-white" strokeWidth={2.5} />
            </span>
            <span className="uppercase tracking-wide font-medium text-[13px]">
              Ver ações
            </span>
          </a>
        </div>

        <p className="mt-6 text-[13px] leading-relaxed text-[#0A2A5E]/60 max-w-md font-medium">
          O Instituto Zion Brasil nasce do movimento Zion para transformar fé e
          vontade em ação: saúde, esporte e orientação jurídica gratuita.
        </p>
      </div>

      {/* Decorative Divider */}
      <div className="max-w-6xl mx-auto mt-16 md:mt-24 flex items-center">
        <span className="w-2 h-2 rounded-full bg-[#0A2A5E]/25 shrink-0" />
        <span className="w-[8px]" />
        <span className="flex-1 h-[2px] bg-[#0A2A5E]/15 rounded-full" />
        <span className="w-[8px]" />
        <span className="w-2 h-2 rounded-full bg-[#0A2A5E]/25 shrink-0" />
      </div>

      {/* Bottom Area */}
      <div className="max-w-6xl mx-auto mt-12 md:mt-16 flex flex-col md:flex-row gap-8 md:gap-14 md:items-start">
        <div className="flex md:flex-col items-center md:items-start gap-4 shrink-0 md:w-[200px]">
          <div className="relative w-32 h-32 md:w-[200px] md:h-[200px] rounded-[28px] bg-[#071E44] shadow-2xl shadow-[#0A2A5E]/30 overflow-hidden shrink-0 ring-1 ring-[#0A2A5E]/10">
            <div
              aria-hidden="true"
              className="absolute -top-10 -left-10 w-32 h-32 rounded-full bg-[#FF8A00]/25 blur-2xl"
            />
            <div
              aria-hidden="true"
              className="absolute -bottom-10 -right-10 w-32 h-32 rounded-full bg-[#7FBF1C]/25 blur-2xl"
            />
            <BrandLogo variant="dark" className="absolute inset-0 w-full h-full" />
            <div className="absolute bottom-0 inset-x-0 flex h-1" aria-hidden="true">
              <span className="flex-1 bg-[#FF8A00]" />
              <span className="flex-1 bg-[#1A6FB5]" />
              <span className="flex-1 bg-[#7FBF1C]" />
            </div>
          </div>
          <p className="text-xs uppercase tracking-widest font-semibold text-[#0A2A5E] leading-[1.6]">
            Unidos
            <br className="hidden md:block" /> para transformar
          </p>
          {/* tricolor bar */}
          <div className="hidden md:flex gap-1 mt-1" aria-hidden="true">
            <span className="w-8 h-1 rounded-full bg-[#FF8A00]" />
            <span className="w-8 h-1 rounded-full bg-[#1A6FB5]" />
            <span className="w-8 h-1 rounded-full bg-[#7FBF1C]" />
          </div>
        </div>

        <div className="flex-1">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] leading-[1.3] font-normal text-[#0A2A5E] text-balance">
            Um movimento feito de gente que ajuda gente. Carregamos juntos o
            peso, para que cada família possa cuidar do que realmente conta —
            com saúde, esporte e direitos ao alcance.
          </h2>
          <div className="mt-8 flex flex-wrap gap-3">
            {[
              { dot: "bg-[#FF8A00]", label: "Saúde na comunidade" },
              { dot: "bg-[#1A6FB5]", label: "Esporte para jovens" },
              { dot: "bg-[#7FBF1C]", label: "Direitos explicados" },
            ].map((p) => (
              <span
                key={p.label}
                className="inline-flex items-center gap-2 bg-[#0A2A5E]/[.06] border border-[#0A2A5E]/10 rounded-full px-4 py-2 text-[13px] font-medium text-[#0A2A5E]"
              >
                <span className={`w-2 h-2 rounded-full ${p.dot}`} />
                {p.label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
