import { useEffect, useRef, useState } from "react";
import {
  Stethoscope,
  Trophy,
  Scale,
  Check,
  ArrowRight,
} from "lucide-react";
import ZionLogo from "./ZionLogo";

type Feature = {
  id: string;
  tab: string;
  icon: typeof Stethoscope;
  color: string;
  title: string;
  description: string;
  bullets: string[];
  image: string;
  alt: string;
  tag: string;
};

const FEATURES: Feature[] = [
  {
    id: "saude",
    tab: "Saúde",
    icon: Stethoscope,
    color: "#FF8A00",
    title: "Saúde que vai até você",
    description:
      "Equipe de enfermagem nas ações de rua e nas comunidades. Cuidado próximo, sem burocracia, com escuta e respeito por cada história.",
    bullets: [
      "Aferição de pressão e glicemia",
      "Orientação e primeiros cuidados",
      "Campanhas de prevenção",
    ],
    image:
      "https://images.pexels.com/photos/33034061/pexels-photo-33034061.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    alt: "Profissional de saúde aferindo pressão em ação comunitária ao ar livre",
    tag: "Mutirões · Prevenção · Cuidado",
  },
  {
    id: "esporte",
    tab: "Esporte",
    icon: Trophy,
    color: "#7FBF1C",
    title: "Esporte que forma e acolhe",
    description:
      "Esporte para crianças e jovens, com disciplina e amizade. No tatame ou no campo, cada treino é um lugar seguro para crescer.",
    bullets: ["Jiu-jitsu", "Judô", "Escolinha de futebol"],
    image:
      "https://images.pexels.com/photos/7988784/pexels-photo-7988784.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    alt: "Crianças treinando judô em comunidade",
    tag: "Jiu-jitsu · Judô · Futebol",
  },
  {
    id: "juridico",
    tab: "Assistência jurídica",
    icon: Scale,
    color: "#4AA8E0",
    title: "Direitos explicados de forma simples",
    description:
      "Advogados voluntários traduzindo a lei para a vida real. Orientação gratuita, mutirões e palestras para ninguém ficar sem resposta.",
    bullets: [
      "Orientação gratuita",
      "Mutirões de atendimento",
      "Palestras sobre direitos",
    ],
    image:
      "https://images.pexels.com/photos/7876295/pexels-photo-7876295.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    alt: "Advogado orientando família em atendimento",
    tag: "Gratuito · Mutirões · Palestras",
  },
];

export default function FeaturesSection() {
  const [active, setActive] = useState(0);
  const [revealed, setRevealed] = useState<boolean[]>(
    Array(FEATURES.length).fill(false)
  );
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const els = cardRefs.current.filter(Boolean) as HTMLDivElement[];
    if (!els.length) return;

    const activeObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = Number(
              (entry.target as HTMLElement).dataset.index
            );
            setActive(idx);
          }
        });
      },
      { threshold: 0.6 }
    );

    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = Number(
              (entry.target as HTMLElement).dataset.index
            );
            setRevealed((prev) => {
              if (prev[idx]) return prev;
              const next = [...prev];
              next[idx] = true;
              return next;
            });
          }
        });
      },
      { threshold: 0.15 }
    );

    els.forEach((el) => {
      activeObserver.observe(el);
      revealObserver.observe(el);
    });

    return () => {
      activeObserver.disconnect();
      revealObserver.disconnect();
    };
  }, []);

  const scrollToCard = (index: number) => {
    setActive(index);
    cardRefs.current[index]?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  };

  return (
    <section id="frentes" className="relative overflow-hidden bg-[#071E44]">
      {/* Fixed background image behind content */}
      <div aria-hidden="true" className="absolute inset-0 -z-0">
        <img
          src="https://images.pexels.com/videos/32025117/favela-rio-de-janeiro-social-setting-32025117.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=1920"
          alt=""
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-[#071E44]/85" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#071E44] via-transparent to-[#071E44]" />
      </div>

      <div className="relative px-5 md:px-10 lg:px-16 py-20 md:py-40 lg:py-48">
        <div className="max-w-[1400px] mx-auto grid lg:grid-cols-[400px_1fr] xl:grid-cols-[460px_1fr] gap-12 lg:gap-24 xl:gap-48">
          {/* Left sticky */}
          <div className="lg:sticky lg:top-0 lg:h-screen lg:flex lg:flex-col lg:justify-between lg:py-32">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/15 backdrop-blur px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/80 mb-6">
                <span className="flex gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FF8A00]" />
                  <span className="w-1.5 h-1.5 rounded-full bg-[#4AA8E0]" />
                  <span className="w-1.5 h-1.5 rounded-full bg-[#7FBF1C]" />
                </span>
                Nossas frentes
              </span>
              <h2 className="text-white text-2xl sm:text-3xl lg:text-[46px] leading-[1.2] font-normal text-balance">
                Três jeitos de chegar perto de{" "}
                <em
                  className="not-italic serif-italic text-[#FFC46B]"
                >
                  quem precisa
                </em>
              </h2>
              <p className="mt-5 text-white/60 text-sm md:text-base font-medium leading-relaxed max-w-[360px]">
                Saúde, esporte e orientação jurídica — direto nas comunidades
                do Rio, com voluntários e muito respeito.
              </p>

              {/* Nav buttons - desktop only */}
              <div className="hidden lg:flex flex-col gap-2 mt-10">
                {FEATURES.map((f, i) => {
                  const Icon = f.icon;
                  const isActive = active === i;
                  return (
                    <button
                      key={f.id}
                      onClick={() => scrollToCard(i)}
                      className={`group flex items-center gap-3 rounded-2xl px-4 py-3 text-left transition-all duration-300 border ${
                        isActive
                          ? "bg-white text-[#0A2A5E] border-white shadow-lg"
                          : "bg-white/10 text-white/50 border-white/10 hover:bg-white/15 hover:text-white"
                      }`}
                    >
                      <span
                        className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0"
                        style={{
                          backgroundColor: isActive ? f.color : "rgba(255,255,255,0.12)",
                        }}
                      >
                        <Icon
                          size={17}
                          className={isActive ? "text-white" : "text-white/70"}
                        />
                      </span>
                      <span className="flex-1">
                        <span className="block text-sm font-semibold leading-none">
                          {f.tab}
                        </span>
                        <span
                          className={`block text-[12px] mt-1 font-medium ${
                            isActive ? "text-[#0A2A5E]/60" : "text-white/40"
                          }`}
                        >
                          {f.tag}
                        </span>
                      </span>
                      <span
                        className={`text-[11px] font-bold tabular-nums ${
                          isActive ? "text-[#FF8A00]" : "text-white/30"
                        }`}
                      >
                        0{i + 1}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Bottom CTA desktop */}
            <div className="hidden lg:block mt-12 bg-black/25 backdrop-blur-md rounded-2xl p-5 border border-white/10">
              <p className="text-white text-sm font-medium leading-relaxed">
                Sem complicação. Só cuidado, presença e comunidade.
              </p>
              <a
                href="#voluntario"
                className="mt-4 inline-flex items-center gap-2 bg-white text-black text-sm font-medium px-5 py-2.5 rounded-xl hover:bg-white/90 transition-colors"
              >
                Quero ser voluntário
                <ArrowRight size={15} />
              </a>
            </div>
          </div>

          {/* Right scrolling cards */}
          <div className="flex flex-col gap-6 md:gap-10 lg:py-10">
            {/* Mobile intro CTA */}
            <div className="lg:hidden bg-white/10 backdrop-blur-md border border-white/10 rounded-3xl p-6 flex items-center justify-between gap-4">
              <p className="text-white text-sm font-medium leading-snug">
                Toque para navegar: saúde, esporte e jurídico.
              </p>
              <div className="flex gap-2 shrink-0">
                {FEATURES.map((f, i) => (
                  <button
                    key={f.id}
                    onClick={() => scrollToCard(i)}
                    aria-label={f.tab}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      active === i ? "w-8 bg-[#FF8A00]" : "w-2 bg-white/30"
                    }`}
                  />
                ))}
              </div>
            </div>

            {FEATURES.map((f, i) => {
              const Icon = f.icon;
              const isRevealed = revealed[i];
              return (
                <div
                  key={f.id}
                  ref={(el) => {
                    cardRefs.current[i] = el;
                  }}
                  data-index={i}
                  id={`feature-${f.id}`}
                  className={`bg-[#0A2A5E]/55 backdrop-blur-md border border-white/10 rounded-3xl p-6 md:p-10 shadow-2xl shadow-black/30 transition-all duration-700 ease-out ${
                    isRevealed
                      ? "translate-x-0 opacity-100"
                      : "translate-x-16 opacity-0"
                  }`}
                >
                  <div className="flex items-start justify-between gap-4">
                    <ZionLogo
                      size={40}
                      fill="rgba(255,255,255,0.8)"
                    />
                    <span
                      className="inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-white"
                      style={{ backgroundColor: `${f.color}33`, border: `1px solid ${f.color}55` }}
                    >
                      <span
                        className="w-1.5 h-1.5 rounded-full"
                        style={{ backgroundColor: f.color }}
                      />
                      {f.tab}
                    </span>
                  </div>

                  <div className="mt-6 flex items-center gap-3">
                    <span
                      className="w-11 h-11 rounded-2xl flex items-center justify-center"
                      style={{ backgroundColor: f.color }}
                    >
                      <Icon size={20} className="text-white" />
                    </span>
                    <h3 className="text-white text-xl md:text-2xl font-medium leading-tight">
                      {f.title}
                    </h3>
                  </div>

                  <div className="mt-6 aspect-video rounded-2xl overflow-hidden bg-black/30 relative group">
                    <img
                      src={f.image}
                      alt={f.alt}
                      loading="lazy"
                      className="h-full w-full object-cover group-hover:scale-[1.03] transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#071E44]/60 via-transparent to-transparent" />
                    <span className="absolute bottom-3 left-3 inline-flex items-center gap-1.5 bg-black/45 backdrop-blur-md text-white text-[11px] font-semibold uppercase tracking-[0.12em] rounded-full px-3 py-1.5">
                      <span
                        className="w-1.5 h-1.5 rounded-full"
                        style={{ backgroundColor: f.color }}
                      />
                      {f.tag}
                    </span>
                  </div>

                  <p className="mt-6 text-white/70 font-medium text-sm md:text-base leading-relaxed">
                    {f.description}
                  </p>

                  <ul className="mt-5 grid sm:grid-cols-3 gap-2">
                    {f.bullets.map((b) => (
                      <li
                        key={b}
                        className="flex items-center gap-2 bg-white/[0.07] border border-white/10 rounded-xl px-3 py-2.5 text-[13px] font-medium text-white/85"
                      >
                        <span
                          className="w-5 h-5 rounded-full flex items-center justify-center shrink-0"
                          style={{ backgroundColor: f.color }}
                        >
                          <Check size={12} strokeWidth={3} className="text-white" />
                        </span>
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}

            {/* Mobile bottom CTA */}
            <div className="lg:hidden bg-white rounded-3xl p-6 md:p-8 text-center">
              <p className="text-[#0A2A5E] text-sm font-medium">
                Sem complicação. Só cuidado, presença e comunidade.
              </p>
              <a
                href="#voluntario"
                className="mt-4 inline-flex items-center gap-2 bg-[#0A2A5E] text-white text-sm font-semibold px-6 py-3 rounded-xl hover:bg-[#071E44] transition-colors"
              >
                Quero ser voluntário
                <ArrowRight size={15} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
