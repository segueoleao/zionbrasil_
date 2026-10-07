import {
  Stethoscope,
  Scale,
  Medal,
  Award,
  Trophy,
  Camera,
  ArrowUpRight,
  HeartHandshake,
} from "lucide-react";
import { INSTAGRAM_URL, INSTAGRAM_HANDLE } from "../config";

const ROLES = [
  {
    icon: Stethoscope,
    color: "#FF8A00",
    title: "Enfermagem",
    desc: "Técnicos e enfermeiros",
  },
  {
    icon: Scale,
    color: "#1A6FB5",
    title: "Advocacia",
    desc: "Advogados voluntários",
  },
  {
    icon: Medal,
    color: "#7FBF1C",
    title: "Jiu-jitsu",
    desc: "Professores",
  },
  {
    icon: Award,
    color: "#7FBF1C",
    title: "Judô",
    desc: "Professores",
  },
  {
    icon: Trophy,
    color: "#FF8A00",
    title: "Futebol",
    desc: "Treinadores da escolinha",
  },
];

export default function TeamSection() {
  return (
    <section id="equipe" className="bg-white py-20 md:py-32 px-5 md:px-10">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-[1.05fr_1fr] gap-10 lg:gap-16 items-start">
        {/* Left: photo + instagram */}
        <div className="lg:sticky lg:top-24">
          <span className="inline-flex items-center gap-2 rounded-full bg-[#0A2A5E]/[.06] border border-[#0A2A5E]/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#0A2A5E]">
            <HeartHandshake size={13} className="text-[#FF8A00]" />
            Quem faz acontecer
          </span>
          <h2 className="mt-5 text-[#0A2A5E] text-3xl sm:text-4xl md:text-[44px] leading-[1.15] font-normal tracking-tight text-balance">
            Estamos buscando profissionais com{" "}
            <em className="serif-italic text-[#1A6FB5]">coração social</em>
          </h2>
          <p className="mt-4 text-[#0A2A5E]/60 text-sm md:text-base font-medium leading-relaxed max-w-md">
            Se você já tem um projeto social, ou quer começar a promover ações,
            venha somar com o Instituto.
          </p>

          <div className="mt-8 relative rounded-3xl overflow-hidden shadow-xl shadow-[#0A2A5E]/15 group">
            <img
              src="https://images.pexels.com/photos/6647006/pexels-photo-6647006.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200"
              alt="Equipe de voluntários reunida"
              loading="lazy"
              className="h-[280px] md:h-[340px] w-full object-cover group-hover:scale-[1.03] transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#071E44]/70 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <span className="flex -space-x-2">
                  <span className="w-8 h-8 rounded-full bg-[#FF8A00] border-2 border-white" />
                  <span className="w-8 h-8 rounded-full bg-[#1A6FB5] border-2 border-white" />
                  <span className="w-8 h-8 rounded-full bg-[#7FBF1C] border-2 border-white" />
                </span>
                <p className="text-white text-[13px] font-semibold leading-tight">
                  Voluntários Zion
                  <span className="block text-white/70 font-medium text-[12px]">
                    Rio de Janeiro · RJ
                  </span>
                </p>
              </div>
              <span className="hidden sm:inline-flex items-center rounded-full bg-white/20 backdrop-blur border border-white/30 text-white text-[11px] font-bold uppercase tracking-wider px-3 py-1.5">
                Faça parte
              </span>
            </div>
          </div>

          {/* Instagram card */}
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noreferrer"
            className="mt-4 group flex items-center gap-4 rounded-3xl p-5 md:p-6 bg-[#0A2A5E] hover:bg-[#071E44] transition-colors overflow-hidden relative"
          >
            <div
              aria-hidden="true"
              className="absolute -right-10 -top-10 w-44 h-44 rounded-full bg-gradient-to-br from-[#FF8A00] via-[#FF3D77] to-[#7FBF1C] opacity-30 blur-2xl group-hover:opacity-50 transition-opacity"
            />
            <span className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-[#FF8A00] via-[#E1306C] to-[#7FBF1C] flex items-center justify-center shrink-0">
              <Camera size={22} className="text-white" />
            </span>
            <span className="flex-1 relative">
              <span className="block text-white font-semibold text-[15px]">
                Acompanhe no Instagram
              </span>
              <span className="block text-white/60 text-[13px] font-medium mt-0.5">
                Fotos, vídeos e bastidores de cada ação, quase todo dia.
              </span>
              <span className="inline-flex items-center gap-1 mt-1.5 text-white text-[13px] font-semibold">
                {INSTAGRAM_HANDLE}
                <ArrowUpRight
                  size={14}
                  className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                />
              </span>
            </span>
          </a>
        </div>

        {/* Right: roles */}
        <div className="flex flex-col gap-3">
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#0A2A5E]/50">
            Frentes abertas para voluntários
          </p>
          {ROLES.map((r) => {
            const Icon = r.icon;
            return (
              <div
                key={r.title}
                className="group flex items-center gap-4 bg-[#FFF9F2] hover:bg-[#FFF0D9] border border-[#0A2A5E]/10 rounded-2xl p-4 md:p-5 transition-colors"
              >
                <span
                  className="w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 text-white"
                  style={{ backgroundColor: r.color }}
                >
                  <Icon size={20} />
                </span>
                <div className="flex-1 min-w-0">
                  <h3 className="text-[#0A2A5E] font-semibold text-[16px] leading-tight flex items-center gap-2">
                    {r.title}
                    {r.title === "Enfermagem" && (
                      <span className="inline-flex items-center rounded-full bg-[#FF8A00]/15 text-[#B25E00] text-[10px] font-bold uppercase tracking-wider px-2 py-0.5">
                        Urgente
                      </span>
                    )}
                  </h3>
                  <p className="text-[#0A2A5E]/60 text-[13px] font-medium mt-0.5">
                    {r.desc}
                  </p>
                </div>
                <a
                  href="#voluntario"
                  aria-label={`Quero ajudar em ${r.title}`}
                  className="w-10 h-10 rounded-full bg-[#0A2A5E] text-white flex items-center justify-center shrink-0 group-hover:bg-[#FF8A00] transition-colors"
                >
                  <ArrowUpRight size={16} />
                </a>
              </div>
            );
          })}

          <div className="mt-2 rounded-2xl bg-[#0A2A5E]/[.04] border border-dashed border-[#0A2A5E]/20 p-5 text-center">
            <p className="text-[13px] font-medium text-[#0A2A5E]/70 leading-relaxed">
              Tem outro talento? Fotografia, cozinha, logística, música, ensino…
              <br />
              <span className="font-semibold text-[#0A2A5E]">
                Todo cuidado encontra um lugar no Zion.
              </span>
            </p>
            <a
              href="#voluntario"
              className="mt-3 inline-flex items-center justify-center gap-2 bg-[#7FBF1C] hover:bg-[#6aa812] text-white text-sm font-semibold rounded-xl px-5 py-2.5 transition-colors"
            >
              Quero somar de outro jeito
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
