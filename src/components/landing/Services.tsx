import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { 
  ShoppingCart, 
  GraduationCap, 
  Building2, 
  Target, 
  CalendarCheck, 
  LayoutDashboard,
  Cloud
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const services = [
  { key: 'ecommerce', icon: ShoppingCart },
  { key: 'educational', icon: GraduationCap },
  { key: 'corporate', icon: Building2 },
  { key: 'landing', icon: Target },
  { key: 'booking', icon: CalendarCheck },
  { key: 'dashboard', icon: LayoutDashboard },
  { key: 'saas', icon: Cloud },
];

const Services = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';

  return (
    <section
      id="services"
      className="py-20 md:py-32 bg-muted/30"
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            {t('services.title')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('services.subtitle')}
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.key}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="group h-full bg-card hover:bg-card/80 border border-border hover:border-accent/30 transition-all duration-300 hover:shadow-lg hover:shadow-accent/5 hover:-translate-y-1">
                  <CardContent className="p-6">
                    <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-5 group-hover:bg-accent/20 transition-colors">
                      <Icon className="w-7 h-7 text-accent" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">
                      {t(`services.${service.key}.title`)}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {t(`services.${service.key}.description`)}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Closing Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-gold/10 border border-gold/20 rounded-full">
            <span className="w-2 h-2 bg-gold rounded-full" />
            <p className="text-foreground/80 font-medium">
              {t('services.closing')}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
