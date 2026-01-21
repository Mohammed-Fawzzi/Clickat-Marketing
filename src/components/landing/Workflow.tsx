import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { ClipboardList, Palette, Code2, TestTube, Rocket } from "lucide-react";

const steps = [
  { key: "step1", icon: ClipboardList },
  { key: "step2", icon: Palette },
  { key: "step3", icon: Code2 },
  { key: "step4", icon: TestTube },
  { key: "step5", icon: Rocket },
];

const Workflow = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "ar";

  return (
    <section
      id="workflow"
      className="py-20 md:py-32 bg-background overflow-x-hidden"
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
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            {t("workflow.title")}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t("workflow.subtitle")}
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Vertical Line – LG only */}
            <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-0.5 bg-border hidden lg:block" />

            {steps.map((step, index) => {
              const Icon = step.icon;
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={step.key}
                  initial={{
                    opacity: 0,
                    x: isRTL ? (isEven ? 30 : -30) : isEven ? -30 : 30,
                  }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className={`relative flex items-start pb-12 last:pb-0 ${
                    isEven ? "lg:flex-row" : "lg:flex-row-reverse"
                  }`}
                >
                  {/* Step Icon – LG only */}
                  <div className="absolute left-1/2 -translate-x-1/2 w-16 h-16 rounded-full bg-accent items-center justify-center shadow-lg shadow-accent/25 z-10 hidden lg:flex">
                    <Icon className="w-7 h-7 text-accent-foreground" />
                  </div>

                  {/* Content Card */}
                  <div
                    className={`
                      w-full
                      mx-auto lg:mx-0
                      lg:w-[calc(50%-3rem)]
                      ${
                        isEven
                          ? "lg:me-auto lg:pe-8"
                          : "lg:ms-auto lg:ps-8"
                      }
                    `}
                  >
                    <div className="p-6 bg-card border border-border rounded-xl hover:border-accent/30 transition-colors">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center text-sm font-bold text-accent">
                          {index + 1}
                        </span>
                        <h3 className="text-xl font-semibold text-foreground">
                          {t(`workflow.${step.key}.title`)}
                        </h3>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">
                        {t(`workflow.${step.key}.description`)}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Workflow;
