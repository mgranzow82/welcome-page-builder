import { Building2, Cloud, Network, ClipboardCheck, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

const ServicesSection = () => {
  const { t } = useLanguage();

  const services = [
    { icon: Building2, title: t("services.enterprise.title"), description: t("services.enterprise.desc"), cta: t("services.cta_learn") },
    { icon: Cloud, title: t("services.cloud.title"), description: t("services.cloud.desc"), cta: t("services.cta_learn") },
    { icon: Network, title: t("services.integration.title"), description: t("services.integration.desc"), cta: t("services.cta_view") },
    { icon: ClipboardCheck, title: t("services.assessment.title"), description: t("services.assessment.desc"), cta: t("services.cta_view") },
  ];

  return (
    <section id="services" className="py-12 px-6 lg:px-16 bg-background">
      <div className="mx-auto max-w-7xl text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="font-display text-3xl lg:text-4xl text-foreground mb-4"
        >
          {t("services.title")}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-muted-foreground max-w-2xl mx-auto mb-10 text-lg"
        >
          {t("services.subtitle")}
        </motion.p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group flex flex-col rounded-lg border border-border bg-card p-6 text-left shadow-sm hover:shadow-md transition-shadow"
            >
              <s.icon className="h-10 w-10 text-accent mb-4" strokeWidth={1.5} />
              <h3 className="font-display text-lg text-card-foreground mb-2">{s.title}</h3>
              <div className="h-px w-8 bg-accent/40 mb-3" />
              <p className="text-muted-foreground text-sm flex-1 mb-6">{s.description}</p>
              <a href={`/contact?subject=${encodeURIComponent(s.title)}`} className="flex items-center gap-1 rounded bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90 transition-opacity">
                {s.cta} <ArrowRight className="h-3.5 w-3.5" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
