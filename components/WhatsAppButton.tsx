"use client";

import { FaWhatsapp } from "react-icons/fa";
import { trackEvent } from "@/lib/gtag";

export default function WhatsAppButton() {
  const phoneNumber = "918112294173";

  const text = encodeURIComponent(
    "Hello, I am interested in your dairy equipment."
  );

  const whatsAppUrl = `https://wa.me/${phoneNumber}?text=${text}`;

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    // ✅ Track lead (fixed)
    trackEvent("whatsapp_click", {
      event_category: "lead",
      event_label: window.location.pathname,
      value: 1,
    });

    // open instantly (no popup block issue)
    window.open(whatsAppUrl, "_blank");
  };

  return (
    <a
      href={whatsAppUrl}
      onClick={handleClick}
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-[9999] flex items-center justify-center
                 bg-green-500 hover:bg-green-600 w-14 h-14 md:w-16 md:h-16
                 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
    >
      <FaWhatsapp className="text-white text-[26px] md:text-[30px]" />
    </a>
  );
}