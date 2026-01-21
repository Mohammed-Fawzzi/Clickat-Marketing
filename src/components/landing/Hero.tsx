import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { MessageCircle, ArrowDown, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "ar";

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToServices = () => {
    const element = document.getElementById("services");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-10"
      dir={isRTL ? "rtl" : "ltr"}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold/5 rounded-full blur-3xl" />
      </div>

      {/* Geometric patterns */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <svg
          className="absolute top-0 left-0 w-full h-full opacity-5"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="grid"
              width="60"
              height="60"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 60 0 L 0 0 0 60"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                className="text-primary"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Subtitle */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 border border-accent/20 rounded-full mb-6">
              <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
              <span className="text-accent font-medium text-sm">
                {t("hero.subtitle")}
              </span>
            </div>

            {/* Main Title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              {t("hero.title")}
            </h1>

            {/* Description */}
            <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
              {t("hero.description")}
            </p>
          </motion.div>

          {/* CTA Buttons */}
          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            {/* Primary Button */}
            <Button
              size="lg"
              onClick={scrollToContact}
              className="
                  flex items-center justify-center gap-2
                  min-w-[220px]

                  bg-accent hover:bg-accent/90
                  text-accent-foreground

                  font-semibold text-lg
                  px-8 py-6

                  shadow-lg shadow-accent/25
                  hover:shadow-xl hover:shadow-accent/30
                  transition-all
                "
            >
              <MessageCircle className="w-5 h-5" />
              {t("hero.cta")}
            </Button>

            {/* Secondary Button */}
            <Button
              size="lg"
              variant="outline"
              onClick={scrollToServices}
              className="
                flex items-center justify-center gap-2
                min-w-[220px]

                bg-transparent
                text-accent
                border border-accent/40

                font-semibold text-lg
                px-8 py-6

                transition-all
                hover:bg-accent
                hover:text-accent-foreground
                hover:shadow-lg
                hover:shadow-accent/30
                "
            >
              <ArrowDown className="w-5 h-5" />
              {t("common.learnMore")}
            </Button>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-20"
          >
            <button
              onClick={scrollToServices}
              className="
                inline-flex flex-col items-center gap-3
                text-muted-foreground
                hover:text-accent
                transition-colors
              "
            >
              {/* Circle Scroll Indicator */}
              <div
                className="
                  relative
                  w-7 h-12
                  rounded-full
                  border-2 border-current
                  flex items-start justify-center
                "
              >
                <span
                  className="
                    absolute
                    top-2
                    w-2 h-2
                    rounded-full
                    bg-current
                    animate-scroll-dot
                  "
                />
              </div>
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
