import { MapPin, Mail, ArrowUp, MessageCircle, Camera } from "lucide-react";
import BrandLogo from "./BrandLogo";
import {
  EMAIL,
  WHATSAPP_DISPLAY,
  INSTAGRAM_URL,
  INSTAGRAM_HANDLE,
  waLink,
} from "../config";

export default function Footer() {
  return (
    <footer className="bg-[#071E44] border-t border-white/10 px-5 md:px-10 pt-14 pb-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-10">
          <div className="max-w-sm">
            <BrandLogo variant="dark" className="w-48 h-48 -ml-6 -mt-6" />
            <p className="mt-0 text-white font-semibold text-[15px] leading-tight">
              Instituto Zion Brasil
              <span className="block text-white/50 font-medium text-[13px] mt-1">
                Rio de Janeiro · RJ
              </span>
            </p>
            <p className="mt-4 inline-flex items-center gap-1.5 text-white/50 text-[12px] font-medium">
              <MapPin size={12} />
              Saúde · Esporte · Assistência jurídica
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 md:gap-14">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-white/40">
                Navegar
              </p>
              <ul className="mt-4 space-y-2.5">
                {[
                  { label: "Quem somos", href: "#quem" },
                  { label: "Nossas frentes", href: "#frentes" },
                  { label: "Ações", href: "#acoes" },
                  { label: "Equipe", href: "#equipe" },
                  { label: "Seja voluntário", href: "#voluntario" },
                ].map((l) => (
                  <li key={l.href}>
                    <a
                      href={l.href}
                      className="text-white/70 hover:text-white text-[14px] font-medium transition-colors"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="sm:col-span-2">
              <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-white/40">
                Fale com a gente
              </p>
              <ul className="mt-4 space-y-3">
                <li>
                  <a
                    href={waLink()}
                    target="_blank"
                    rel="noreferrer"
                    className="group flex items-center gap-3 text-white/80 hover:text-white text-[14px] font-medium transition-colors"
                  >
                    <span className="w-9 h-9 rounded-xl bg-[#25D366] flex items-center justify-center shrink-0">
                      <MessageCircle size={16} className="text-white" />
                    </span>
                    <span>
                      <span className="block text-[11px] text-white/40 uppercase tracking-wider font-semibold">
                        WhatsApp
                      </span>
                      {WHATSAPP_DISPLAY}
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href={`mailto:${EMAIL}`}
                    className="group flex items-center gap-3 text-white/80 hover:text-white text-[14px] font-medium transition-colors"
                  >
                    <span className="w-9 h-9 rounded-xl bg-[#FF8A00] flex items-center justify-center shrink-0">
                      <Mail size={16} className="text-white" />
                    </span>
                    <span className="break-all">
                      <span className="block text-[11px] text-white/40 uppercase tracking-wider font-semibold">
                        E-mail
                      </span>
                      {EMAIL}
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href={INSTAGRAM_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="group flex items-center gap-3 text-white/80 hover:text-white text-[14px] font-medium transition-colors"
                  >
                    <span className="w-9 h-9 rounded-xl bg-gradient-to-tr from-[#FF8A00] via-[#E1306C] to-[#7FBF1C] flex items-center justify-center shrink-0">
                      <Camera size={16} className="text-white" />
                    </span>
                    <span>
                      <span className="block text-[11px] text-white/40 uppercase tracking-wider font-semibold">
                        Instagram
                      </span>
                      {INSTAGRAM_HANDLE}
                    </span>
                  </a>
                </li>
              </ul>
              <a
                href="#topo"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-white/10 hover:bg-white/15 border border-white/10 text-white text-[13px] font-semibold px-4 py-2.5 transition-colors"
              >
                Voltar ao topo
                <ArrowUp size={14} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-white/10">
          <p className="text-white/40 text-[12px] font-medium text-center">
            © 2026 Instituto Zion Brasil · Conectando forças para transformar
          </p>
          <div className="flex items-center gap-1.5" aria-hidden="true">
            <span className="w-6 h-1 rounded-full bg-[#FF8A00]" />
            <span className="w-6 h-1 rounded-full bg-[#4AA8E0]" />
            <span className="w-6 h-1 rounded-full bg-[#7FBF1C]" />
          </div>
          <p className="text-white/40 text-[12px] font-medium">
            Unidos para fazer a diferença
          </p>
        </div>
      </div>
    </footer>
  );
}
