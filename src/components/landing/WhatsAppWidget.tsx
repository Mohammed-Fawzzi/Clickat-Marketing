import { useState } from "react";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";
import { X, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const contactOptions = [
  {
    country: "egypt",
    flag: "🇪🇬",
    number: "01021580334",
    whatsapp: "201021580334",
  },
  {
    country: "egypt",
    flag: "🇪🇬",
    number: "01094355330",
    whatsapp: "201094355330",
  },
  {
    country: "kuwait",
    flag: "🇰🇼",
    number: "0096550797711",
    whatsapp: "96550797711",
  },
  {
    country: "saudi",
    flag: "🇸🇦",
    number: "0541005479",
    whatsapp: "966541005479",
  },
];

const WhatsAppWidget = () => {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const isRTL = i18n.language === "ar";

  const openWhatsApp = (phone: string) => {
    window.open(`https://wa.me/${phone}`, "_blank");
    setIsOpen(false);
  };

  return (
    <div
      className={`fixed bottom-6 z-50 ${
        isRTL ? "left-6" : "right-6"
      }`}
    >
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute bottom-20 end-0 w-72 bg-card border border-border rounded-xl shadow-2xl overflow-hidden"
            dir={isRTL ? "rtl" : "ltr"}
          >
            {/* Header */}
            <div className="bg-[#25D366] p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <MessageCircle className="w-6 h-6 text-white" />
                  <span className="font-semibold text-white">
                    {t("contact.whatsapp")}
                  </span>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-white/80 hover:text-white transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Options */}
            <div className="p-3 space-y-2">
              {contactOptions.map((option, index) => (
                <button
                  key={`${option.country}-${index}`}
                  onClick={() => openWhatsApp(option.whatsapp)}
                  className="w-full flex items-center gap-3 p-3 rounded-lg hover:bg-muted transition-colors text-start"
                >
                  <span className="text-2xl leading-none">{option.flag}</span>

                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-foreground">
                      {t(`contact.${option.country}`)}
                    </p>
                    <p className="text-sm text-muted-foreground" dir="ltr">
                      {option.number}
                    </p>
                  </div>

                  <MessageCircle className="w-5 h-5 text-[#25D366] shrink-0" />
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Button */}
      <motion.div whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.95 }}>
        <Button
          onClick={() => setIsOpen(!isOpen)}
          className="
            relative
            w-14 h-14 rounded-full
            bg-[#25D366] hover:bg-[#20BA5A]
            text-white
            shadow-xl shadow-[#25D366]/40
            transition-all
            flex items-center justify-center
          "
        >
          {/* Glow Ring */}
          {!isOpen && (
            <span className="absolute inset-0 rounded-full animate-ping bg-[#25D366]/40" />
          )}

          {isOpen ? (
            <X className="w-6 h-6 relative z-10" />
          ) : (
            <MessageCircle className="w-6 h-6 relative z-10" />
          )}
        </Button>
      </motion.div>
    </div>
  );
};

export default WhatsAppWidget;
