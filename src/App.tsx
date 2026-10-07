import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import FeaturesSection from "./components/FeaturesSection";
import ActionsSection from "./components/ActionsSection";
import TeamSection from "./components/TeamSection";
import VolunteerSection from "./components/VolunteerSection";
import Footer from "./components/Footer";
import WhatsAppFloat from "./components/WhatsAppFloat";
import { MapPin, Stethoscope, Trophy, Scale, ChevronDown } from "lucide-react";

export default function App() {
  return (
    <main id="topo" className="bg-[#071E44] min-h-screen">
      {/* ============ SECTION 1: HERO ============ */}
      <section className="relative h-screen overflow-hidden mb-[-25px]">
        {/* Background video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          poster="https://images.pexels.com/videos/32025117/favela-rio-de-janeiro-social-setting-32025117.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=630&w=1200"
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source
            src="https://videos.pexels.com/video-files/32025117/13650380_3840_2160_30fps.mp4"
            type="video/mp4"
          />
        </video>
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#071E44]/55 via-[#071E44]/10 to-[#071E44]/75" />

        <Navbar />

        {/* Hero Content - bottom aligned */}
        <div className="relative z-10 h-full flex flex-col justify-end items-center text-center px-5 pb-12 md:pb-16">
          <div className="flex flex-col items-center max-w-5xl mx-auto">
            <span className="inline-flex items-center gap-1.5 bg-white/15 backdrop-blur-md border border-white/20 text-white text-[11px] sm:text-[12px] font-semibold uppercase tracking-[0.16em] rounded-full px-4 py-2 mb-5">
              <MapPin size={13} className="text-[#FFC46B]" />
              Rio de Janeiro · Movimento Zion
            </span>

            <h1 className="text-white font-normal leading-[1.1] tracking-tight text-5xl sm:text-7xl md:text-8xl lg:text-[96px] text-balance">
              Conectando forças
              <br />
              para{" "}
              <em
                className="not-italic"
                style={{
                  fontFamily: "'Instrument Serif', serif",
                  fontStyle: "italic",
                }}
              >
                transformar.
              </em>
            </h1>

            <p className="mt-5 text-white/80 text-sm md:text-base font-medium max-w-[420px] leading-relaxed">
              Levamos saúde, esporte e orientação jurídica para quem mais
              precisa, direto nas comunidades do Rio.
            </p>

            {/* mini frentes */}
            <div className="mt-5 flex items-center gap-2 text-white/80 [@media(max-height:760px)]:hidden">
              <span className="inline-flex items-center gap-1.5 bg-black/25 backdrop-blur-md border border-white/15 rounded-full px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wider">
                <Stethoscope size={12} className="text-[#FFC46B]" /> Saúde
              </span>
              <span className="inline-flex items-center gap-1.5 bg-black/25 backdrop-blur-md border border-white/15 rounded-full px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wider">
                <Trophy size={12} className="text-[#9BDE3A]" /> Esporte
              </span>
              <span className="inline-flex items-center gap-1.5 bg-black/25 backdrop-blur-md border border-white/15 rounded-full px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wider">
                <Scale size={12} className="text-[#7EC3F5]" /> Jurídico
              </span>
            </div>

            {/* CTA Bar */}
            <div className="mt-6 bg-black/25 backdrop-blur-md rounded-xl flex flex-row items-center pl-6 pr-1 py-1 gap-4 max-w-full">
              <p className="hidden sm:block text-white text-sm font-medium text-left leading-snug">
                Sem burocracia. Só cuidado, presença e comunidade.
              </p>
              <p className="sm:hidden text-white text-[13px] font-medium text-left leading-snug">
                Cuidado direto na comunidade.
              </p>
              <a
                href="#voluntario"
                className="shrink-0 bg-white text-black text-sm font-medium px-5 py-2.5 rounded-xl hover:bg-white/90 transition-colors"
              >
                Quero ajudar
              </a>
            </div>

            <a
              href="#quem"
              aria-label="Rolar para conhecer"
              className="mt-7 hidden md:flex [@media(max-height:900px)]:!hidden w-10 h-10 rounded-full bg-white/15 backdrop-blur border border-white/20 items-center justify-center text-white/80 hover:text-white hover:bg-white/25 transition-colors animate-bounce"
            >
              <ChevronDown size={18} />
            </a>
          </div>
        </div>
      </section>

      {/* ============ SECTION 2: ABOUT ============ */}
      <AboutSection />

      {/* ============ SECTION 3: FEATURES ============ */}
      <FeaturesSection />

      {/* ============ AÇÕES ============ */}
      <ActionsSection />

      {/* ============ EQUIPE ============ */}
      <TeamSection />

      {/* ============ VOLUNTÁRIO ============ */}
      <VolunteerSection />

      <Footer />
      <WhatsAppFloat />
    </main>
  );
}
