import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Globe, Smartphone, ArrowRightLeft } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

/* ===== Logos ===== */
const ReactLogo = () => (
  <svg viewBox="0 0 841.9 595.3" className="w-8 h-8">
    <g
      fill="none"
      stroke="currentColor"
      strokeWidth="40"
      className="text-accent dark:text-accent"
    >
      <ellipse rx="165" ry="380" cx="421" cy="296" />
      <ellipse
        rx="165"
        ry="380"
        cx="421"
        cy="296"
        transform="rotate(60 421 296)"
      />
      <ellipse
        rx="165"
        ry="380"
        cx="421"
        cy="296"
        transform="rotate(120 421 296)"
      />
    </g>
    <circle cx="421" cy="296" r="40" className="fill-accent" />
  </svg>
);

const NodeLogo = () => (
  <svg viewBox="0 0 256 288" className="w-8 h-8 fill-current text-accent">
    <path d="M128 0L0 74v140l128 74 128-74V74z" />
  </svg>
);

const FlutterLogo = () => (
  <svg viewBox="0 0 256 256" className="w-8 h-8 fill-current text-accent">
    <path d="M157 0L24 133l39 39L236 0zM157 128L63 222l39 39 133-133z" />
  </svg>
);

const AndroidLogo = () => (
  <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current text-accent">
    <path d="M17.6 9.48l1.43-2.48a.3.3 0 00-.52-.3l-1.45 2.51a7.5 7.5 0 00-10.1 0L5.5 6.7a.3.3 0 00-.52.3l1.43 2.48A7.3 7.3 0 004 15v4a1 1 0 001 1h1v3a1 1 0 002 0v-3h8v3a1 1 0 002 0v-3h1a1 1 0 001-1v-4a7.3 7.3 0 00-2.4-5.52z" />
  </svg>
);

const AppleLogo = () => (
  <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current text-accent">
    <path d="M16.7 13.7c0-2 1.6-3 1.7-3.1-1-.1-2.1-.6-2.6-1.5-.5-.9-.2-2.1-.1-2.3-1 .1-2 .7-2.6 1.5-.6.8-.9 2-.9 3.2 0 2.5 1.7 5 3.8 5 .9 0 1.3-.3 2.1-.3s1.1.3 2 .3c.8 0 1.6-.7 2.1-1.4-.6-.3-1.5-1.2-1.5-2.4z" />
  </svg>
);

const Technologies = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "ar";

  const techStacks = [
    {
      key: "web",
      icon: Globe,
      stack: [
        { name: "React", icon: ReactLogo },
        { name: "Node", icon: NodeLogo },
      ],
    },
    {
      key: "mobile",
      icon: Smartphone,
      stack: [
        { name: "Flutter", icon: FlutterLogo },
        // { name: "Android", icon: AndroidLogo },
        // { name: "iOS", icon: AppleLogo },
      ],
    },
  ];

  return (
    <section
      id="technologies"
      className="py-20 md:py-32 bg-muted/30 dark:bg-background"
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
            {t("technologies.title")}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t("technologies.subtitle")}
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {techStacks.map((tech, index) => {
            const Icon = tech.icon;

            return (
              <motion.div
                key={tech.key}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
              >
                <Card className="h-full bg-card dark:bg-background border border-border hover:border-accent/40 transition-all hover:shadow-lg">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mb-6">
                      <Icon className="w-8 h-8 text-accent" />
                    </div>

                    <h3 className="text-2xl font-bold mb-4">
                      {t(`technologies.${tech.key}.title`)}
                    </h3>

                    <div className="flex flex-wrap gap-4">
                      {tech.stack.map(({ name, icon: Logo }) => (
                        <div
                          key={name}
                          className="
                            flex items-center gap-3
                            px-4 py-3 rounded-xl
                            bg-muted dark:bg-background/60
                            border border-border hover:border-accent/40
                          "
                        >
                          <Logo />
                          <span className="font-medium">{name}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-3 px-6 py-4 bg-card border border-accent/30 rounded-xl">
            <ArrowRightLeft className="w-5 h-5 text-accent" />
            <p className="font-medium">{t("technologies.note")}</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Technologies;
