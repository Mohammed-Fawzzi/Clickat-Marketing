import { useTranslation } from "react-i18next";
import { Moon, Sun, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "ar";

  const toggleLanguage = () => {
    const newLang = i18n.language === "ar" ? "en" : "ar";
    i18n.changeLanguage(newLang);
    document.documentElement.dir = newLang === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = newLang;
  };

  const toggleTheme = () => {
    const isDark = document.documentElement.classList.contains("dark");
    localStorage.setItem("theme", isDark ? "light" : "dark");
    document.documentElement.classList.toggle("dark");
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  const navLinks = [
    { id: "home", label: t("nav.home") },
    { id: "services", label: t("nav.services") },
    { id: "workflow", label: t("nav.workflow") },
    { id: "technologies", label: t("nav.technologies") },
    { id: "contact", label: t("nav.contact") },
  ];

  return (
    <footer
      className="bg-card border-t border-border pt-12 pb-24 md:pb-8"
      dir={isRTL ? "rtl" : "ltr"}
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col gap-10">

          {/* Top Content */}
          <div className="flex flex-col md:flex-row justify-between gap-8">

            {/* About */}
            <div className="max-w-md text-center md:text-start">
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {t("footer.company")}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {t("footer.description")}
              </p>
            </div>

            {/* Navigation Links */}
            <div className="flex flex-col items-center md:items-start gap-3">
              <h4 className="text-sm font-semibold text-foreground">
                {t("footer.quickLinks")}
              </h4>
              <div className="flex flex-wrap justify-center md:justify-start gap-x-6 gap-y-2 text-sm">
                {navLinks.map(link => (
                  <button
                    key={link.id}
                    onClick={() => scrollToSection(link.id)}
                    className="text-muted-foreground hover:text-accent transition-colors"
                  >
                    {link.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="flex justify-center md:justify-end items-start gap-2">
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleLanguage}
                className="text-muted-foreground"
              >
                <Globe className="w-4 h-4 me-2" />
                {isRTL ? "EN" : "ع"}
              </Button>

              <Button
                variant="ghost"
                size="icon"
                onClick={toggleTheme}
                className="relative text-muted-foreground"
              >
                <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              </Button>
            </div>
          </div>

          {/* Bottom */}
          <div className="border-t border-border pt-4 text-center text-sm text-muted-foreground">
            © {currentYear} {t("footer.company")} — {t("footer.rights")}
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
