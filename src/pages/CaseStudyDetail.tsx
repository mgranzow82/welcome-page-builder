import { useParams, Link, Navigate } from "react-router-dom";
import { ArrowLeft, ArrowRight, Check, Building2, Shield, Train, Gamepad2 } from "lucide-react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedContent from "@/components/RelatedContent";
import ContextualCTA from "@/components/ContextualCTA";
import ArchitectureDiagram, { ingDiagram, tuevDiagram, dbDiagram, merkurDiagram } from "@/components/ArchitectureDiagram";
import { caseStudies } from "@/data/caseStudies";
import { getIndustryColor } from "@/data/categoryColors";
import { useLanguage } from "@/contexts/LanguageContext";
import { useDocumentMeta } from "@/hooks/useDocumentMeta";

const iconMap = {
  building: Building2,
  shield: Shield,
  train: Train,
  gamepad: Gamepad2,
};

const diagramMap: Record<string, { title: string; nodes: any[]; edges: any[]; height: number }> = {
  "ing-credit-rating-platform": ingDiagram,
  "tuev-sued-scheduling-platform": tuevDiagram,
  "deutsche-bahn-cloud-transformation": dbDiagram,
  "gauselmann-merkur-gaming-platform": merkurDiagram,
};

const CaseStudyDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const { t } = useLanguage();
  const cs = caseStudies.find((c) => c.slug === slug);

  useDocumentMeta({
    title: cs ? `${t(cs.titleKey)} – DA·AI` : t("seo.notfound.title"),
    description: cs ? t(cs.teaserKey) : t("seo.notfound.description"),
  });

  if (!cs) return <Navigate to="/case-studies" replace />;

  const Icon = iconMap[cs.icon];
  const diagram = diagramMap[cs.slug];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-hero text-hero-foreground pt-28 pb-16 px-6 lg:px-16">
        <Navbar />
        <div className="mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div
                className="flex items-center justify-center w-10 h-10 rounded-lg"
                style={{ backgroundColor: getIndustryColor(cs.industry) + "30" }}
              >
                <Icon className="h-5 w-5" style={{ color: getIndustryColor(cs.industry) }} />
              </div>
              <div className="text-sm text-hero-muted">
                <span>{t(cs.industryKey)}</span>
                <span className="mx-2 opacity-40">·</span>
                <span>{t(cs.regionKey)}</span>
              </div>
            </div>
            <h1 className="font-display text-3xl lg:text-4xl leading-tight mb-4">
              {t(cs.titleKey)}
            </h1>
            <div className="flex flex-wrap gap-2">
              <span className="rounded-full border border-hero-foreground/20 bg-hero-foreground/10 px-3 py-1 text-xs text-hero-foreground/80">
                {t(cs.offeringKey)}
              </span>
              <span className="rounded-full border border-hero-foreground/20 bg-hero-foreground/10 px-3 py-1 text-xs text-hero-foreground/80">
                {t(cs.roleKey)}
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Breadcrumbs */}
      <div className="bg-muted/50 border-b border-border px-6 lg:px-16 py-3">
        <div className="mx-auto max-w-4xl">
          <Breadcrumbs
            items={[
              { label: t("breadcrumb.cases"), href: "/case-studies" },
              { label: t(cs.titleKey) },
            ]}
          />
        </div>
      </div>

      {/* Content */}
      <article className="py-14 px-6 lg:px-16">
        <div className="mx-auto max-w-4xl">
          {/* Summary */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-10"
          >
            <p className="text-lg text-foreground leading-relaxed font-medium">
              {t(cs.summaryKey)}
            </p>
          </motion.div>

          {/* Architecture Diagram */}
          {diagram && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-10"
            >
              <ArchitectureDiagram {...diagram} />
            </motion.div>
          )}

          <div className="grid md:grid-cols-2 gap-8 mb-10">
            {/* Starting Point */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="rounded-lg border border-border bg-muted/30 p-6"
            >
              <h2 className="font-display text-lg text-foreground mb-4">{t("cases.starting_point")}</h2>
              <ul className="space-y-3">
                {cs.startingPointKeys.map((key) => (
                  <li key={key} className="flex items-start gap-2.5 text-sm text-muted-foreground leading-relaxed">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                    {t(key)}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Objectives */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="rounded-lg border border-border bg-muted/30 p-6"
            >
              <h2 className="font-display text-lg text-foreground mb-4">{t("cases.objectives")}</h2>
              <ul className="space-y-3">
                {cs.objectiveKeys.map((key) => (
                  <li key={key} className="flex items-start gap-2.5 text-sm text-muted-foreground leading-relaxed">
                    <Check className="h-4 w-4 text-accent mt-0.5 shrink-0" />
                    {t(key)}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Approach */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-10"
          >
            <h2 className="font-display text-2xl text-foreground mb-6">{t("cases.approach")}</h2>
            <div className="grid sm:grid-cols-2 gap-5">
              {cs.approachSections.map((section, i) => (
                <motion.div
                  key={section.titleKey}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="rounded-lg border border-border bg-card p-5 shadow-sm"
                >
                  <div className="flex items-center gap-2 mb-3">
                    <div
                      className="w-6 h-6 rounded flex items-center justify-center text-xs font-bold"
                      style={{ backgroundColor: getIndustryColor(cs.industry) + "20", color: getIndustryColor(cs.industry) }}
                    >
                      {i + 1}
                    </div>
                    <h3 className="font-display text-sm text-card-foreground">{t(section.titleKey)}</h3>
                  </div>
                  <ul className="space-y-2">
                    {section.itemKeys.map((key) => (
                      <li key={key} className="flex items-start gap-2 text-sm text-muted-foreground leading-relaxed">
                        <Check className="h-3.5 w-3.5 text-accent mt-0.5 shrink-0" />
                        {t(key)}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Outcome */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-lg border-2 border-accent/20 bg-accent/5 p-6 mb-10"
          >
            <h2 className="font-display text-xl text-foreground mb-4">{t("cases.outcome")}</h2>
            <ul className="space-y-3">
              {cs.outcomeKeys.map((key) => (
                <li key={key} className="flex items-start gap-2.5 text-sm text-foreground leading-relaxed">
                  <Check className="h-4 w-4 text-accent mt-0.5 shrink-0" />
                  {t(key)}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contextual CTA */}
          <ContextualCTA type="case-study" />

          {/* Back + CTA */}
          <div className="flex flex-wrap items-center justify-between gap-4">
            <Link
              to="/case-studies"
              className="inline-flex items-center gap-1.5 text-accent hover:underline font-semibold text-sm"
            >
              <ArrowLeft className="h-4 w-4" /> {t("cases.back_overview")}
            </Link>
            <Link
              to="/book"
              className="inline-flex items-center gap-2 rounded bg-accent px-5 py-2.5 text-sm font-semibold text-accent-foreground hover:opacity-90 transition-opacity"
            >
              {t("cases.cta.button")} <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </article>

      {/* Related Content */}
      <RelatedContent type="case-study" currentSlug={cs.slug} currentIndustry={cs.industry} />

      <FooterSection />
    </div>
  );
};

export default CaseStudyDetail;
