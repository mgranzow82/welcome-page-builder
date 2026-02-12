import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  MessageSquare, Search, LifeBuoy, Rocket, ShieldCheck, Clock,
  MapPin, Network, Plug, Brain, Scale, UserCircle,
  Layers, SplitSquareVertical, Share2, Gauge, GraduationCap, Laptop,
  PieChart, Crown, GitBranch, Users, Puzzle, CircleDot,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import Breadcrumbs from "@/components/Breadcrumbs";
import heroBg from "@/assets/hero-bg.jpg";
import { useLanguage } from "@/contexts/LanguageContext";
import { useDocumentMeta } from "@/hooks/useDocumentMeta";

// Icon mapping per tile key
const iconMap: Record<string, React.ComponentType<React.SVGProps<SVGSVGElement>>> = {
  // Consulting
  "svc_consulting.t1": MessageSquare,
  "svc_consulting.t2": Search,
  "svc_consulting.t3": LifeBuoy,
  "svc_consulting.t4": Rocket,
  "svc_consulting.t5": ShieldCheck,
  "svc_consulting.t6": Clock,
  // Enterprise
  "svc_enterprise.t1": MapPin,
  "svc_enterprise.t2": Network,
  "svc_enterprise.t3": Plug,
  "svc_enterprise.t4": Brain,
  "svc_enterprise.t5": Scale,
  "svc_enterprise.t6": UserCircle,
  // Solution
  "svc_solution.t1": Layers,
  "svc_solution.t2": SplitSquareVertical,
  "svc_solution.t3": Share2,
  "svc_solution.t4": Gauge,
  "svc_solution.t5": GraduationCap,
  "svc_solution.t6": Laptop,
  // Principal
  "svc_principal.t1": PieChart,
  "svc_principal.t2": Crown,
  "svc_principal.t3": GitBranch,
  "svc_principal.t4": Users,
  "svc_principal.t5": Puzzle,
  "svc_principal.t6": CircleDot,
};

interface ServiceSubPageProps {
  prefix: string; // e.g. "svc_consulting"
  seoPrefix: string; // e.g. "seo.svc_consulting"
  breadcrumbLabel: string;
  heroParas: string[]; // i18n keys for hero paragraphs
}

const ServiceSubPage = ({ prefix, seoPrefix, breadcrumbLabel, heroParas }: ServiceSubPageProps) => {
  const { t } = useLanguage();
  useDocumentMeta({
    title: t(`${seoPrefix}.title`),
    description: t(`${seoPrefix}.description`),
  });

  const tiles = Array.from({ length: 6 }, (_, i) => {
    const key = `${prefix}.t${i + 1}`;
    const Icon = iconMap[key] || Clock;
    return {
      icon: Icon,
      title: t(`${key}.title`),
      text: t(`${key}.text`),
      good: t(`${key}.good`),
    };
  });

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroBg} alt="" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-hero/90 via-hero/70 to-hero/40" />
        </div>
        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 lg:px-16 pt-28 pb-12">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="font-display text-3xl lg:text-5xl leading-tight tracking-wide text-hero-foreground mb-5 max-w-3xl"
          >
            {t(`${prefix}.hero.title`)}
          </motion.h1>
          {heroParas.map((key, i) => (
            <motion.p
              key={key}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 + i * 0.1 }}
              className="text-hero-muted text-lg leading-relaxed mb-3 max-w-2xl"
            >
              {t(key)}
            </motion.p>
          ))}
        </div>
      </section>

      {/* Breadcrumbs */}
      <div className="bg-muted/50 border-b border-border px-6 lg:px-16 py-3">
        <div className="mx-auto max-w-7xl">
          <Breadcrumbs
            items={[
              { label: t("nav.services"), href: "/services" },
              { label: breadcrumbLabel },
            ]}
          />
        </div>
      </div>

      {/* 6 Tiles */}
      <section className="py-12 px-6 lg:px-16 bg-background">
        <div className="mx-auto max-w-7xl grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tiles.map((tile, i) => (
            <motion.div
              key={tile.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="flex flex-col rounded-lg border border-border bg-card p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-3 mb-4">
                <tile.icon className="h-8 w-8 text-accent shrink-0" strokeWidth={1.5} />
                <h3 className="font-display text-lg text-card-foreground">{tile.title}</h3>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-1">{tile.text}</p>
              <div>
                <p className="text-xs font-semibold text-foreground uppercase tracking-wide mb-1">
                  {t(`${prefix}.good_for`) || t("svc_consulting.good_for")}
                </p>
                <p className="text-xs text-muted-foreground">{tile.good}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-12 px-6 lg:px-16 overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroBg} alt="" className="h-full w-full object-cover" loading="lazy" />
          <div className="absolute inset-0 bg-hero/85" />
        </div>
        <div className="relative z-10 mx-auto max-w-3xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
            className="font-display text-3xl lg:text-4xl text-hero-foreground mb-4"
          >
            {t("svc.final.title")}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-hero-muted text-lg mb-6"
          >
            {t("svc.final.text")}
          </motion.p>
          <Link
            to="/book"
            className="inline-block rounded bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground hover:opacity-90 transition-opacity"
          >
            {t(`${prefix}.cta`) || t("svc.final.cta")}
          </Link>
        </div>
      </section>

      <FooterSection />
    </div>
  );
};

export default ServiceSubPage;
