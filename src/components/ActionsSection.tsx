import { useRef, useState } from "react";
import {
  MapPin,
  CalendarDays,
  X,
  Lightbulb,
  ImagePlus,
  ArrowUpRight,
} from "lucide-react";

type Action = {
  tag: string;
  tagColor: string;
  title: string;
  place: string;
  date: string;
  image: string;
  alt: string;
};

const ACTIONS: Action[] = [
  {
    tag: "Saúde",
    tagColor: "#FF8A00",
    title: "Mutirão de saúde",
    place: "Comunidade · Rio",
    date: "Ação comunitária",
    image:
      "https://images.pexels.com/photos/6129678/pexels-photo-6129678.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    alt: "Enfermeira aferindo pressão em mutirão de saúde",
  },
  {
    tag: "Esporte",
    tagColor: "#7FBF1C",
    title: "Aula de judô",
    place: "Projeto social · Rio",
    date: "Turma kids",
    image:
      "https://images.pexels.com/photos/7988830/pexels-photo-7988830.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    alt: "Crianças praticando judô",
  },
  {
    tag: "Jurídico",
    tagColor: "#1A6FB5",
    title: "Orientação jurídica",
    place: "Mutirão · Rio",
    date: "Atendimento gratuito",
    image:
      "https://images.pexels.com/photos/7876154/pexels-photo-7876154.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    alt: "Advogado orientando família",
  },
  {
    tag: "Esporte",
    tagColor: "#7FBF1C",
    title: "Escolinha de futebol",
    place: "Campo · Comunidade",
    date: "Fim de semana",
    image:
      "https://images.pexels.com/photos/28614922/pexels-photo-28614922.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    alt: "Crianças jogando futebol de rua",
  },
  {
    tag: "Esporte",
    tagColor: "#7FBF1C",
    title: "Jiu-jitsu na comunidade",
    place: "Tatame social · Rio",
    date: "Todas as idades",
    image:
      "https://images.pexels.com/photos/7988827/pexels-photo-7988827.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    alt: "Treino de jiu-jitsu com crianças",
  },
  {
    tag: "Comunidade",
    tagColor: "#0A2A5E",
    title: "Voluntários em ação",
    place: "Entrega · Rio",
    date: "Rede de apoio",
    image:
      "https://images.pexels.com/photos/6646952/pexels-photo-6646952.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    alt: "Voluntários organizando doações",
  },
];

export default function ActionsSection() {
  const [selected, setSelected] = useState<number | null>(null);
  const [customImages, setCustomImages] = useState<Record<number, string>>({});
  const fileRef = useRef<HTMLInputElement>(null);

  const openFile = () => fileRef.current?.click();

  const onFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file || selected === null) return;
    const url = URL.createObjectURL(file);
    setCustomImages((prev) => ({ ...prev, [selected]: url }));
  };

  const imgFor = (i: number) => customImages[i] ?? ACTIONS[i].image;

  return (
    <section id="acoes" className="bg-[#FFF9F2] py-20 md:py-32 px-5 md:px-10">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto">
          <span className="inline-flex items-center gap-2 rounded-full bg-[#0A2A5E]/[.06] border border-[#0A2A5E]/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#0A2A5E]">
            Nossas ações
          </span>
          <h2 className="mt-5 text-[#0A2A5E] text-3xl sm:text-4xl md:text-5xl font-normal leading-[1.15] tracking-tight text-balance">
            O que já fizemos{" "}
            <em className="serif-italic text-[#FF8A00]">pelo Rio</em>
          </h2>
          <p className="mt-4 text-[#0A2A5E]/60 text-sm md:text-base font-medium leading-relaxed">
            Aqui ficam as fotos e banners de cada ação: tema, bairro e data.
            Quem faz parte vê o impacto, quem chega conhece o trabalho.
          </p>
        </div>

        <div className="mt-8 flex items-start gap-3 bg-[#FFF0D9] border border-[#FF8A00]/25 rounded-2xl p-4 md:p-5 max-w-3xl mx-auto">
          <span className="w-9 h-9 rounded-xl bg-[#FF8A00] flex items-center justify-center shrink-0">
            <Lightbulb size={17} className="text-white" />
          </span>
          <p className="text-[13px] md:text-sm leading-relaxed text-[#0A2A5E] font-medium">
            Toque em qualquer quadro para pré-visualizar uma foto sua nele.
            Para publicar de vez, envie as imagens para quem cuida do site.
          </p>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {ACTIONS.map((a, i) => (
            <button
              key={a.title}
              onClick={() => setSelected(i)}
              className={`group relative text-left rounded-3xl overflow-hidden bg-[#0A2A5E] shadow-lg shadow-[#0A2A5E]/10 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ${
                i === 0 ? "sm:col-span-2 lg:col-span-2 lg:row-span-1 min-h-[280px] lg:min-h-[360px]" : "min-h-[260px]"
              }`}
            >
              <img
                src={imgFor(i)}
                alt={a.alt}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover group-hover:scale-[1.04] transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#071E44]/85 via-[#071E44]/15 to-transparent" />
              <div className="absolute top-4 left-4 flex items-center gap-2">
                <span
                  className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.12em] text-white backdrop-blur-md"
                  style={{ backgroundColor: `${a.tagColor}E6` }}
                >
                  {a.tag}
                </span>
                {customImages[i] && (
                  <span className="inline-flex items-center rounded-full bg-white px-3 py-1.5 text-[11px] font-bold uppercase tracking-wide text-[#0A2A5E]">
                    Sua foto
                  </span>
                )}
              </div>
              <span className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <ArrowUpRight size={16} className="text-white" />
              </span>
              <div className="absolute bottom-0 inset-x-0 p-5">
                <h3 className="text-white font-semibold text-lg leading-tight">
                  {a.title}
                </h3>
                <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-white/70 text-[13px] font-medium">
                  <span className="inline-flex items-center gap-1">
                    <MapPin size={13} /> {a.place}
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <CalendarDays size={13} /> {a.date}
                  </span>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selected !== null && (
        <div
          className="fixed inset-0 z-[80] flex items-center justify-center p-4 bg-[#071E44]/80 backdrop-blur-md"
          onClick={() => setSelected(null)}
        >
          <div
            className="w-full max-w-3xl bg-white rounded-3xl overflow-hidden shadow-2xl animate-fade-in-down"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-video bg-[#071E44]">
              <img
                src={imgFor(selected)}
                alt={ACTIONS[selected].alt}
                className="h-full w-full object-cover"
              />
              <button
                onClick={() => setSelected(null)}
                aria-label="Fechar"
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/50 backdrop-blur text-white flex items-center justify-center hover:bg-black/70 transition-colors"
              >
                <X size={18} />
              </button>
              <span
                className="absolute bottom-4 left-4 rounded-full px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.12em] text-white"
                style={{ backgroundColor: ACTIONS[selected].tagColor }}
              >
                {ACTIONS[selected].tag}
              </span>
            </div>
            <div className="p-6 md:p-8 flex flex-col md:flex-row md:items-center gap-5 justify-between">
              <div>
                <h3 className="text-xl font-semibold text-[#0A2A5E]">
                  {ACTIONS[selected].title}
                </h3>
                <p className="mt-1 text-sm text-[#0A2A5E]/60 font-medium">
                  {ACTIONS[selected].place} · {ACTIONS[selected].date}
                </p>
                <p className="mt-3 text-[13px] text-[#0A2A5E]/60 leading-relaxed max-w-md">
                  Pré-visualização local. Para publicar de vez, envie as imagens
                  originais para quem cuida do site.
                </p>
              </div>
              <div className="flex flex-col gap-2 shrink-0">
                <button
                  onClick={openFile}
                  className="inline-flex items-center justify-center gap-2 bg-[#0A2A5E] hover:bg-[#071E44] text-white text-sm font-semibold rounded-xl px-5 py-3 transition-colors"
                >
                  <ImagePlus size={16} />
                  Usar minha foto
                </button>
                <a
                  href="#voluntario"
                  onClick={() => setSelected(null)}
                  className="inline-flex items-center justify-center gap-2 bg-[#FF8A00] hover:bg-[#e67a00] text-white text-sm font-semibold rounded-xl px-5 py-3 transition-colors"
                >
                  Quero participar
                </a>
              </div>
            </div>
          </div>
          <input
            ref={fileRef}
            type="file"
            accept="image/*"
            className="hidden"
            onChange={onFile}
          />
        </div>
      )}
    </section>
  );
}
