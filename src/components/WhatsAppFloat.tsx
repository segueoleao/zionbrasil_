import { MessageCircle } from "lucide-react";
import { WHATSAPP_DISPLAY, waLink } from "../config";

export default function WhatsAppFloat() {
  return (
    <a
      href={waLink()}
      target="_blank"
      rel="noreferrer"
      aria-label={`Falar no WhatsApp ${WHATSAPP_DISPLAY}`}
      className="group fixed bottom-5 right-5 z-[70] flex items-center gap-2 bg-[#25D366] hover:bg-[#1eb857] text-white rounded-full shadow-xl shadow-black/30 pl-4 pr-4 py-4 sm:pr-5 transition-all"
    >
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20 pointer-events-none" />
      <MessageCircle size={22} className="relative" />
      <span className="relative hidden sm:inline text-sm font-semibold">
        Fale conosco
      </span>
    </a>
  );
}
