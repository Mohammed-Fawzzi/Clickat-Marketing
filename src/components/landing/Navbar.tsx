import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Menu, X, Moon, Sun, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const isRTL = i18n.language === "ar";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const isDarkMode =
      localStorage.getItem("theme") === "dark" ||
      (!localStorage.getItem("theme") &&
        window.matchMedia("(prefers-color-scheme: dark)").matches);

    setIsDark(isDarkMode);
    document.documentElement.classList.toggle("dark", isDarkMode);
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    localStorage.setItem("theme", newTheme ? "dark" : "light");
    document.documentElement.classList.toggle("dark", newTheme);
  };

  const toggleLanguage = () => {
    const newLang = i18n.language === "ar" ? "en" : "ar";
    i18n.changeLanguage(newLang);
    document.documentElement.dir = newLang === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = newLang;
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  const navLinks = [
    { id: "home", label: t("nav.home") },
    { id: "services", label: t("nav.services") },
    { id: "workflow", label: t("nav.workflow") },
    { id: "technologies", label: t("nav.technologies") },
    { id: "contact", label: t("nav.contact") },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-sm border-b border-border"
          : "bg-transparent",
      )}
      dir={isRTL ? "rtl" : "ltr"}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <button
            onClick={() => scrollToSection("home")}
            className="text-xl md:text-2xl font-bold text-primary hover:text-accent transition-colors"
          >
            {isRTL ? "كليكات" : "Clickat"}
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="text-foreground/80 hover:text-accent transition-colors font-medium relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-accent after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:origin-right hover:after:origin-left"
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-3">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleLanguage}
              className="text-foreground/80"
            >
              <Globe className="h-5 w-5" />
            </Button>

            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="text-foreground/80"
            >
              {isDark ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </Button>

            <Button
              onClick={() => scrollToSection("contact")}
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-medium"
            >
              {t("nav.contact")}
            </Button>
          </div>

          {/* Mobile Actions (UPDATED ✅) */}
          <div className="flex md:hidden items-center gap-2">
            {/* Language */}
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleLanguage}
              className="text-foreground/80"
            >
              <Globe className="h-5 w-5" />
            </Button>

            {/* Theme */}
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="text-foreground/80"
            >
              {isDark ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </Button>

            {/* Menu */}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-foreground"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "md:hidden absolute top-full left-0 right-0 bg-background/98 backdrop-blur-md border-b border-border transition-all duration-300 overflow-hidden",
          isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0",
        )}
      >
        <div className="container mx-auto px-4 py-4 space-y-2">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className="block w-full text-start py-3 px-4 text-foreground/80 hover:text-accent hover:bg-accent/10 rounded-lg transition-colors font-medium"
            >
              {link.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
