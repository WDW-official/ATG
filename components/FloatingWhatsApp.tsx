const whatsappLogo =
  "https://res.cloudinary.com/dzn1k1z8r/image/upload/v1785728009/Pngtree_whatsapp_icon_whatsapp_logo_whatsapp_3584845_dlgtvd.png";

export default function FloatingWhatsApp() {
  return (
    <a
      className="floatingWhatsApp"
      href="https://wa.me/?text=Hello%20A%20Thousand%20Generation%2C%20I%20would%20like%20to%20connect."
      target="_blank"
      rel="noreferrer"
      aria-label="Connect with A Thousand Generation on WhatsApp"
    >
      <img src={whatsappLogo} alt="" />
    </a>
  );
}
