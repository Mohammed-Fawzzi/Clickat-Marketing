import { useState } from "react";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, Smartphone, Copy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const contactInfo = [
  {
    country: "egypt",
    flag: "🇪🇬",
    phones: [
      { number: "01021580334", whatsapp: "201021580334" },
      { number: "01094355330", whatsapp: "201094355330" },
    ],
  },
  {
    country: "kuwait",
    flag: "🇰🇼",
    phones: [{ number: "50797711", whatsapp: "96550797711" }],
  },
  {
    country: "saudi",
    flag: "🇸🇦",
    phones: [{ number: "0541005479", whatsapp: "966541005479" }],
  },
];

const Contact = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "ar";

  const [showToast, setShowToast] = useState(false);

  const openWhatsApp = (phone: string) => {
    const cleanPhone = phone.replace(/[^\d]/g, "");
    window.open(`https://wa.me/${cleanPhone}`, "_blank", "noopener,noreferrer");
  };

  const copyNumber = (number: string) => {
    navigator.clipboard.writeText(number);
    setShowToast(true);

    setTimeout(() => {
      setShowToast(false);
    }, 2000);
  };

  return (
    <section
      id="contact"
      className="py-20 md:py-32 bg-background relative"
      dir={isRTL ? "rtl" : "ltr"}
    >
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            {t("contact.title")}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t("contact.subtitle")}
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {contactInfo.map((info, index) => (
            <motion.div
              key={info.country}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full border border-border hover:border-accent/40 transition-all hover:shadow-lg overflow-hidden">
                {/* Country Header */}
                <div className="bg-accent/10 p-6 border-b border-border">
                  <div className="flex items-center gap-4">
                    <span className="text-5xl">{info.flag}</span>
                    <h3 className="text-2xl font-bold">
                      {t(`contact.${info.country}`)}
                    </h3>
                  </div>
                </div>

                <CardContent className="p-6 space-y-6">
                  {info.phones.map((phone, phoneIndex) => (
                    <div key={phoneIndex} className="space-y-4">
                      {/* Phone Row */}
                      <div className="flex items-center justify-between gap-3 p-4 rounded-xl bg-muted border border-border">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-accent/15 flex items-center justify-center">
                            <Smartphone className="w-5 h-5 text-accent" />
                          </div>

                          <span
                            className="font-semibold text-lg tracking-wide"
                            dir="ltr"
                          >
                            {phone.number}
                          </span>
                        </div>

                        {/* Copy Button */}
                        <button
                          onClick={() => copyNumber(phone.number)}
                          className="text-muted-foreground hover:text-accent transition-colors"
                          aria-label="Copy number"
                        >
                          <Copy className="w-5 h-5" />
                        </button>
                      </div>

                      {/* WhatsApp Button */}
                      <Button
                        onClick={() => openWhatsApp(phone.whatsapp)}
                        className="
                          w-full
                          bg-[#25D366]
                          hover:bg-[#20BA5A]
                          text-white
                          font-semibold
                          py-6
                          shadow-md
                          hover:shadow-lg
                          transition-all
                        "
                      >
                        <MessageCircle className="w-5 h-5 me-2" />
                        {t("contact.whatsapp")}
                      </Button>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Toast */}
      <AnimatePresence>
        {showToast && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className={`
              fixed top-20 md:top-24
              ${isRTL ? "right-6 left-auto" : "left-6 right-auto"}
              flex items-center gap-3
              ${isRTL ? "flex-row-reverse" : "flex-row"}
              bg-background
              text-foreground
              px-5 py-3
              rounded-2xl
              border border-border
              shadow-xl shadow-black/10 dark:shadow-black/40
              text-sm font-medium
              z-50
            `}
          >
            {/* Icon */}
            <div className="w-8 h-8 rounded-full bg-accent/15 flex items-center justify-center shrink-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4 text-accent"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>

            {/* Text */}
            <span className="whitespace-nowrap">
              {isRTL ? "تم النسخ" : "Copied"}
            </span>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Contact;
