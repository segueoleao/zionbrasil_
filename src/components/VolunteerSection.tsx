import { useState } from "react";
import BrandLogo from "./BrandLogo";
import {
  EMAIL,
  WHATSAPP_DISPLAY,
  INSTAGRAM_URL,
  INSTAGRAM_HANDLE,
  waLink,
} from "../config";
import {
  User,
  Phone,
  MapPin,
  MessageCircle,
  Send,
  Check,
  HeartHandshake,
  Mail,
  Camera,
} from "lucide-react";

export default function VolunteerSection() {
  const [form, setForm] = useState({
    nome: "",
    whatsapp: "",
    bairro: "",
    area: "Saúde",
    mensagem: "",
  });
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  const set = (k: keyof typeof form) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((p) => ({ ...p, [k]: e.target.value }));
    setError("");
  };

  const formLink = () =>
    waLink(
      `Olá, Instituto Zion Brasil! 👋\n\nNome: ${form.nome}\nWhatsApp: ${form.whatsapp}\nBairro/cidade: ${form.bairro}\nQuero ajudar em: ${form.area}\n\n${form.mensagem}`.trim()
    );

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.nome.trim() || !form.whatsapp.trim() || !form.bairro.trim()) {
      setError("Preencha nome, WhatsApp e bairro/cidade para a gente te chamar.");
      return;
    }
    window.open(formLink(), "_blank", "noopener,noreferrer");
    setSent(true);
  };

  return (
    <section id="voluntario" className="relative bg-[#071E44] px-5 md:px-10 py-20 md:py-28 overflow-hidden">
      {/* glows */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 left-1/4 w-[500px] h-[300px] bg-[#FF8A00]/20 blur-[120px] rounded-full" />
        <div className="absolute -bottom-32 right-1/4 w-[500px] h-[300px] bg-[#7FBF1C]/15 blur-[120px] rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#1A6FB5]/15 blur-[140px] rounded-full" />
      </div>

      <div className="relative max-w-5xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/15 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/80">
            <HeartHandshake size={13} className="text-[#7FBF1C]" />
            Seja membro
          </span>
          <h2 className="mt-5 text-white text-3xl sm:text-4xl md:text-5xl font-normal leading-[1.12] tracking-tight text-balance">
            Venha ser{" "}
            <em className="serif-italic text-[#FFC46B]">voluntário</em>
          </h2>
          <p className="mt-4 text-white/60 text-sm md:text-base font-medium leading-relaxed">
            Preencha o formulário e a gente chama você para conversar. Não
            precisa ter experiência: precisa ter vontade.
          </p>
        </div>

        <div className="grid md:grid-cols-[1fr_1.15fr] rounded-[28px] overflow-hidden shadow-2xl shadow-black/40 bg-white">
          {/* Left info */}
          <div className="bg-[#0A2A5E] p-8 md:p-10 flex flex-col justify-between relative overflow-hidden">
            <div
              aria-hidden="true"
              className="absolute -right-16 -bottom-16 w-64 h-64 rounded-full bg-gradient-to-br from-[#FF8A00]/40 to-[#7FBF1C]/30 blur-2xl"
            />
            <div className="relative">
              <BrandLogo variant="dark" glow className="w-36 h-36 -ml-4 -mt-4" />
              <h3 className="mt-2 text-white text-2xl font-normal leading-snug">
                Sua vontade move o Rio. O resto a gente ensina junto.
              </h3>
              <ul className="mt-6 space-y-3">
                {[
                  { icon: Phone, text: `WhatsApp ${WHATSAPP_DISPLAY}`, href: waLink() },
                  { icon: Mail, text: EMAIL, href: `mailto:${EMAIL}` },
                  { icon: Camera, text: INSTAGRAM_HANDLE, href: INSTAGRAM_URL },
                  { icon: MapPin, text: "Ações no Rio · ponto de encontro combinado", href: "" },
                ].map((it) => (
                  <li key={it.text}>
                    {it.href ? (
                      <a
                        href={it.href}
                        target={it.href.startsWith("mailto") ? undefined : "_blank"}
                        rel="noreferrer"
                        className="group flex items-center gap-3 text-white/80 hover:text-white text-[13px] font-medium transition-colors break-all"
                      >
                        <span className="w-8 h-8 rounded-full bg-white/10 border border-white/15 group-hover:bg-white/20 flex items-center justify-center shrink-0 transition-colors">
                          <it.icon size={14} className="text-[#FFC46B]" />
                        </span>
                        {it.text}
                      </a>
                    ) : (
                      <span className="flex items-center gap-3 text-white/80 text-[13px] font-medium">
                        <span className="w-8 h-8 rounded-full bg-white/10 border border-white/15 flex items-center justify-center shrink-0">
                          <it.icon size={14} className="text-[#FFC46B]" />
                        </span>
                        {it.text}
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative mt-8 flex gap-1.5">
              <span className="h-1.5 flex-1 rounded-full bg-[#FF8A00]" />
              <span className="h-1.5 flex-1 rounded-full bg-[#1A6FB5]" />
              <span className="h-1.5 flex-1 rounded-full bg-[#7FBF1C]" />
            </div>
          </div>

          {/* Right form */}
          <div className="p-8 md:p-10 bg-[#FFF9F2]">
            {!sent ? (
              <form onSubmit={submit} className="space-y-4">
                <div>
                  <label className="text-[12px] font-semibold uppercase tracking-[0.12em] text-[#0A2A5E]/70 flex items-center gap-1.5 mb-2">
                    <User size={13} /> Nome completo
                  </label>
                  <input
                    value={form.nome}
                    onChange={set("nome")}
                    placeholder="Seu nome"
                    className="w-full rounded-xl border border-[#0A2A5E]/15 bg-white px-4 py-3 text-[14px] font-medium text-[#0A2A5E] placeholder:text-[#0A2A5E]/35 outline-none focus:border-[#FF8A00] focus:ring-2 focus:ring-[#FF8A00]/20 transition"
                  />
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-[12px] font-semibold uppercase tracking-[0.12em] text-[#0A2A5E]/70 flex items-center gap-1.5 mb-2">
                      <Phone size={13} /> WhatsApp
                    </label>
                    <input
                      value={form.whatsapp}
                      onChange={set("whatsapp")}
                      placeholder="(21) 99999-9999"
                      inputMode="tel"
                      className="w-full rounded-xl border border-[#0A2A5E]/15 bg-white px-4 py-3 text-[14px] font-medium text-[#0A2A5E] placeholder:text-[#0A2A5E]/35 outline-none focus:border-[#FF8A00] focus:ring-2 focus:ring-[#FF8A00]/20 transition"
                    />
                  </div>
                  <div>
                    <label className="text-[12px] font-semibold uppercase tracking-[0.12em] text-[#0A2A5E]/70 flex items-center gap-1.5 mb-2">
                      <MapPin size={13} /> Bairro / cidade
                    </label>
                    <input
                      value={form.bairro}
                      onChange={set("bairro")}
                      placeholder="Ex: Madureira, RJ"
                      className="w-full rounded-xl border border-[#0A2A5E]/15 bg-white px-4 py-3 text-[14px] font-medium text-[#0A2A5E] placeholder:text-[#0A2A5E]/35 outline-none focus:border-[#FF8A00] focus:ring-2 focus:ring-[#FF8A00]/20 transition"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-[12px] font-semibold uppercase tracking-[0.12em] text-[#0A2A5E]/70 flex items-center gap-1.5 mb-2">
                    <HeartHandshake size={13} /> Como você quer ajudar?
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {["Saúde", "Esporte", "Jurídico", "Outro"].map((a) => (
                      <button
                        type="button"
                        key={a}
                        onClick={() => setForm((p) => ({ ...p, area: a }))}
                        className={`rounded-xl px-3 py-2.5 text-[13px] font-semibold border transition-all ${
                          form.area === a
                            ? "bg-[#0A2A5E] text-white border-[#0A2A5E]"
                            : "bg-white text-[#0A2A5E]/70 border-[#0A2A5E]/15 hover:border-[#0A2A5E]/30"
                        }`}
                      >
                        {a}
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="text-[12px] font-semibold uppercase tracking-[0.12em] text-[#0A2A5E]/70 flex items-center gap-1.5 mb-2">
                    <MessageCircle size={13} /> Conte um pouco sobre você
                  </label>
                  <textarea
                    value={form.mensagem}
                    onChange={set("mensagem")}
                    rows={4}
                    placeholder="Conte um pouco sobre você ou seu projeto social..."
                    className="w-full rounded-xl border border-[#0A2A5E]/15 bg-white px-4 py-3 text-[14px] font-medium text-[#0A2A5E] placeholder:text-[#0A2A5E]/35 outline-none focus:border-[#FF8A00] focus:ring-2 focus:ring-[#FF8A00]/20 transition resize-none"
                  />
                </div>
                {error && (
                  <p className="text-[13px] font-medium text-red-600 bg-red-50 border border-red-100 rounded-xl px-4 py-2.5">
                    {error}
                  </p>
                )}
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#FF8A00] hover:bg-[#e67a00] text-white font-semibold text-[15px] rounded-xl px-6 py-4 transition-colors shadow-lg shadow-[#FF8A00]/25"
                >
                  Quero ajudar
                  <Send size={16} />
                </button>
                <p className="text-center text-[12px] text-[#0A2A5E]/50 font-medium">
                  Ao enviar, abrimos seu WhatsApp com a mensagem pronta.
                </p>
              </form>
            ) : (
              <div className="h-full min-h-[420px] flex flex-col items-center justify-center text-center py-8">
                <span className="w-16 h-16 rounded-full bg-[#7FBF1C] flex items-center justify-center shadow-lg shadow-[#7FBF1C]/30">
                  <Check size={28} strokeWidth={3} className="text-white" />
                </span>
                <h3 className="mt-6 text-2xl font-semibold text-[#0A2A5E]">
                  Recebido, {form.nome.split(" ")[0] || "voluntário"}!
                </h3>
                <p className="mt-3 text-sm text-[#0A2A5E]/60 font-medium leading-relaxed max-w-sm">
                  Obrigado por querer somar em{" "}
                  <span className="font-semibold text-[#0A2A5E]">{form.area}</span>.
                  Toque abaixo para confirmar no WhatsApp — a gente responde rapidinho.
                </p>
                <a
                  href={formLink()}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1eb857] text-white font-semibold text-sm rounded-xl px-6 py-3.5 transition-colors"
                >
                  <MessageCircle size={16} />
                  Confirmar no WhatsApp
                </a>
                <button
                  onClick={() => {
                    setSent(false);
                    setForm({ nome: "", whatsapp: "", bairro: "", area: "Saúde", mensagem: "" });
                  }}
                  className="mt-3 text-[13px] font-medium text-[#0A2A5E]/50 hover:text-[#0A2A5E] underline underline-offset-4"
                >
                  Enviar outra resposta
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
