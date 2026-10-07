// Logos — para usar os arquivos originais, substitua:
//   public/images/zion-logo-dark.png  → logo completa (frase em branco, para fundos escuros)
//   public/images/zion-mark.png       → emblema compacto (para fundos claros / menu)
export const LOGO_DARK_SRC = "images/zion-logo-dark.png";
export const LOGO_MARK_SRC = "images/zion-mark.png";
export const LOGO_SRC = LOGO_DARK_SRC;

export const WHATSAPP_NUMBER = "5521995536187";
export const WHATSAPP_DISPLAY = "(21) 99553-6187";
export const EMAIL = "institutuzionbrasil@gmail.com";
export const INSTAGRAM_URL = "https://www.instagram.com/institutozionbrasil_/";
export const INSTAGRAM_HANDLE = "@institutozionbrasil_";

export const waLink = (text = "Olá! Vim pelo site do Instituto Zion Brasil e quero saber mais.") =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
