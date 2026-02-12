import { Link } from "react-router-dom";
import { ArrowRight, Building2, Shield, Train, Gamepad2 } from "lucide-react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import Breadcrumbs from "@/components/Breadcrumbs";
import heroBg from "@/assets/hero-bg.jpg";
import { caseStudies } from "@/data/caseStudies";
import { useLanguage } from "@/contexts/LanguageContext";
import { useDocumentMeta } from "@/hooks/useDocumentMeta";

const iconMap = {
  building: Building2,
  shield: Shield,
  train: Train,
  gamepad: Gamepad2,
};

const CaseStudies = () => {
  const { t } = useLanguage();
  useDocumentMeta({ title: t("seo.cases.title"), description: t("seo.cases.description") });

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="relative min-h-[45vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroBg} alt="" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-hero/95 via-hero/80 to-hero/50" />
        </div>
        <div className="relative z-10 mx-auto w-full max-w-5xl px-6 lg:px-16 pt-24 pb-12 text-center">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-accent text-sm font-semibold uppercase tracking-widest mb-3"
          >
            {t("cases.label")}
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-4xl lg:text-5xl text-hero-foreground mb-4"
          >
            {t("cases.hero.title")}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-hero-muted text-lg max-w-2xl mx-auto leading-relaxed"
          >
            {t("cases.hero.subtitle")}
          </motion.p>
        </div>
      </section>

      {/* Breadcrumbs */}
      <div className="bg-muted/50 border-b border-border px-6 lg:px-16 py-3">
        <div className="mx-auto max-w-6xl">
          <Breadcrumbs items={[{ label: t("breadcrumb.cases") }]} />
        </div>
      </div>

      {/* Case Study Cards */}
      <section className="py-16 px-6 lg:px-16 bg-background">
        <div className="mx-auto max-w-6xl grid md:grid-cols-2 gap-8">
          {caseStudies.map((cs, i) => {
            const Icon = iconMap[cs.icon];
            return (
              <motion.article
                key={cs.slug}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group relative rounded-lg border border-border bg-card overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
              >
                {/* Color accent bar */}
                <div className="h-1.5" style={{ backgroundColor: cs.color }} />

                <div className="p-6 lg:p-8">
                  {/* Meta */}
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className="flex items-center justify-center w-10 h-10 rounded-lg"
                      style={{ backgroundColor: cs.color + "20" }}
                    >
                      <Icon className="h-5 w-5" style={{ color: cs.color }} />
                    </div>
                    <div>
                      <span className="text-xs font-medium text-muted-foreground">{t(cs.industryKey)}</span>
                      <span className="mx-2 text-muted-foreground/40">·</span>
                      <span className="text-xs text-muted-foreground">{t(cs.regionKey)}</span>
                    </div>
                  </div>

                  {/* Title */}
                  <h2 className="font-display text-xl text-card-foreground mb-3 group-hover:text-accent transition-colors">
                    {t(cs.titleKey)}
                  </h2>

                  {/* Teaser */}
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    {t(cs.teaserKey)}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-5">
                    <span className="rounded-full border border-accent/20 bg-accent/5 px-3 py-1 text-xs text-accent font-medium">
                      {t(cs.offeringKey)}
                    </span>
                    <span className="rounded-full border border-border bg-muted px-3 py-1 text-xs text-muted-foreground">
                      {t(cs.roleKey)}
                    </span>
                  </div>

                  {/* CTA */}
                  <Link
                    to={`/case-studies/${cs.slug}`}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent hover:underline"
                  >
                    {t("cases.read_more")} <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </motion.article>
            );
          })}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="relative py-12 px-6 lg:px-16 overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroBg} alt="" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-hero/85" />
        </div>
        <div className="relative z-10 mx-auto max-w-3xl text-center">
          <h2 className="font-display text-3xl text-hero-foreground mb-4">{t("cases.cta.title")}</h2>
          <p className="text-hero-muted text-lg mb-6 leading-relaxed">{t("cases.cta.text")}</p>
          <Link
            to="/book"
            className="inline-flex items-center gap-2 rounded bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground hover:opacity-90 transition-opacity"
          >
            {t("cases.cta.button")} <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <FooterSection />
    </div>
  );
};

export default CaseStudies;
