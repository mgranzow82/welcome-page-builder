import { Building2, Cloud, Network, ClipboardCheck, Check, ArrowRight, Briefcase, Factory, Train, ShoppingCart, Gamepad2, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import heroBg from "@/assets/hero-bg.jpg";
import { useLanguage } from "@/contexts/LanguageContext";

const Services = () => {
  const { t } = useLanguage();

  const coreBullets = [
    t("svc.hero.bullet1"),
    t("svc.hero.bullet2"),
    t("svc.hero.bullet3"),
    t("svc.hero.bullet4"),
  ];

  const services = [
    {
      icon: Building2,
      title: t("svc.core.s1.title"),
      description: t("svc.core.s1.desc"),
      items: [t("svc.core.s1.i1"), t("svc.core.s1.i2"), t("svc.core.s1.i3")],
      reference: t("svc.core.s1.ref"),
      teaser: t("svc.core.s1.teaser"),
    },
    {
      icon: Cloud,
      title: t("svc.core.s2.title"),
      description: t("svc.core.s2.desc"),
      items: [t("svc.core.s2.i1"), t("svc.core.s2.i2"), t("svc.core.s2.i3")],
      reference: t("svc.core.s2.ref"),
      teaser: t("svc.core.s2.teaser"),
    },
    {
      icon: Network,
      title: t("svc.core.s3.title"),
      description: t("svc.core.s3.desc"),
      items: [t("svc.core.s3.i1"), t("svc.core.s3.i2"), t("svc.core.s3.i3")],
      reference: t("svc.core.s3.ref"),
      teaser: t("svc.core.s3.teaser"),
    },
    {
      icon: ClipboardCheck,
      title: t("svc.core.s4.title"),
      description: t("svc.core.s4.desc"),
      items: [t("svc.core.s4.i1"), t("svc.core.s4.i2"), t("svc.core.s4.i3"), t("svc.core.s4.i4")],
      reference: t("svc.core.s4.ref"),
      teaser: t("svc.core.s4.teaser"),
    },
  ];

  const industries = [
    { icon: ShieldCheck, label: t("svc.industries.banking"), detail: t("svc.industries.banking_detail") },
    { icon: Briefcase, label: t("svc.industries.insurance"), detail: t("svc.industries.insurance_detail") },
    { icon: Factory, label: t("svc.industries.industrial"), detail: t("svc.industries.industrial_detail") },
    { icon: Train, label: t("svc.industries.rail"), detail: t("svc.industries.rail_detail") },
    { icon: ShoppingCart, label: t("svc.industries.ecommerce"), detail: t("svc.industries.ecommerce_detail") },
    { icon: Gamepad2, label: t("svc.industries.gaming"), detail: t("svc.industries.gaming_detail") },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden">
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
            {t("svc.hero.title")}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="text-hero-muted text-lg leading-relaxed mb-6 max-w-2xl"
          >
            {t("svc.hero.subtitle")}
          </motion.p>

          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-2.5 mb-8"
          >
            {coreBullets.map((b, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -15 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.35 + i * 0.08 }}
                className="flex items-start gap-3 text-hero-foreground/90 text-sm"
              >
                <Check className="h-4 w-4 mt-0.5 text-accent shrink-0" />
                {b}
              </motion.li>
            ))}
          </motion.ul>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.65 }}
            className="flex flex-wrap gap-3"
          >
            <Link to="/packages" className="rounded bg-accent px-5 py-2.5 text-sm font-semibold text-accent-foreground hover:opacity-90 transition-opacity">
              {t("svc.hero.cta_packages")}
            </Link>
            <Link to="/book" className="rounded border border-hero-foreground/30 px-5 py-2.5 text-sm font-semibold text-hero-foreground hover:bg-hero-foreground/10 transition-colors">
              {t("svc.hero.cta_book")}
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Why Architecture */}
      <section className="py-12 px-6 lg:px-16 bg-background">
        <div className="mx-auto max-w-5xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
            className="font-display text-3xl lg:text-4xl text-foreground mb-4"
          >
            {t("svc.why.title")}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-muted-foreground text-lg leading-relaxed mb-8"
          >
            {t("svc.why.text")}
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-3"
          >
            <p className="text-foreground font-semibold mb-2">{t("svc.why.intro")}</p>
            {[t("svc.why.item1"), t("svc.why.item2"), t("svc.why.item3")].map((item) => (
              <div key={item} className="flex items-start gap-3 text-muted-foreground">
                <Check className="h-4 w-4 mt-1 text-accent shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Core Services Cards */}
      <section className="py-12 px-6 lg:px-16 bg-muted/50">
        <div className="mx-auto max-w-7xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
            className="font-display text-3xl lg:text-4xl text-foreground text-center mb-3"
          >
            {t("svc.core.title")}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-muted-foreground text-lg text-center max-w-3xl mx-auto mb-10"
          >
            {t("svc.core.subtitle")}
          </motion.p>

          <div className="grid lg:grid-cols-2 gap-6">
            {services.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex flex-col rounded-lg border border-border bg-card p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-center gap-3 mb-4">
                  <s.icon className="h-8 w-8 text-accent shrink-0" strokeWidth={1.5} />
                  <h3 className="font-display text-xl text-card-foreground">{s.title}</h3>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{s.description}</p>

                <p className="text-xs font-semibold text-foreground mb-2 uppercase tracking-wide">{t("svc.core.typical")}</p>
                <ul className="space-y-1.5 mb-4">
                  {s.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <Check className="h-3.5 w-3.5 mt-0.5 text-accent shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="mt-auto space-y-2">
                  <p className="text-xs text-muted-foreground italic">{s.reference}</p>
                  <p className="text-xs text-accent font-medium">{s.teaser}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-12 px-6 lg:px-16 bg-background">
        <div className="mx-auto max-w-7xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
            className="font-display text-3xl lg:text-4xl text-foreground text-center mb-3"
          >
            {t("svc.industries.title")}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-muted-foreground text-lg text-center max-w-3xl mx-auto mb-10"
          >
            {t("svc.industries.subtitle")}
          </motion.p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {industries.map((ind, i) => (
              <motion.div
                key={ind.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="flex items-start gap-3 rounded-lg border border-border bg-card p-5 shadow-sm"
              >
                <ind.icon className="h-6 w-6 text-accent shrink-0 mt-0.5" strokeWidth={1.5} />
                <div>
                  <h4 className="font-display text-sm text-card-foreground font-semibold">{ind.label}</h4>
                  <p className="text-xs text-muted-foreground mt-1">{ind.detail}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How Services & Packages connect */}
      <section className="py-12 px-6 lg:px-16 bg-muted/50">
        <div className="mx-auto max-w-5xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
            className="font-display text-3xl lg:text-4xl text-foreground mb-4"
          >
            {t("svc.connect.title")}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-muted-foreground text-lg leading-relaxed mb-6 max-w-2xl mx-auto"
          >
            {t("svc.connect.text")}
          </motion.p>
          <motion.ul
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex flex-wrap justify-center gap-2 mb-8"
          >
            {["Architecture Snapshot", "Target Architecture & Roadmap Project", "Transformation Blueprint", "Digital & AI Klarheits-Check"].map((item) => (
              <span key={item} className="rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 text-sm text-accent font-medium">
                {item}
              </span>
            ))}
          </motion.ul>
          <div>
            <Link to="/packages" className="inline-flex items-center gap-2 rounded bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:opacity-90 transition-opacity">
              {t("svc.connect.cta")} <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative py-12 px-6 lg:px-16 overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroBg} alt="" className="h-full w-full object-cover" />
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
            className="text-hero-muted text-lg mb-4 leading-relaxed"
          >
            {t("svc.final.text")}
          </motion.p>
          <motion.ul
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-hero-muted/90 text-sm space-y-2 mb-8 max-w-md mx-auto text-left"
          >
            <li className="flex items-start gap-2"><Check className="h-4 w-4 mt-0.5 text-accent shrink-0" /> {t("svc.final.item1")}</li>
            <li className="flex items-start gap-2"><Check className="h-4 w-4 mt-0.5 text-accent shrink-0" /> {t("svc.final.item2")}</li>
            <li className="flex items-start gap-2"><Check className="h-4 w-4 mt-0.5 text-accent shrink-0" /> {t("svc.final.item3")}</li>
          </motion.ul>
          <Link to="/book" className="inline-block rounded bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground hover:opacity-90 transition-opacity">
            {t("svc.final.cta")}
          </Link>
        </div>
      </section>

      <FooterSection />
    </div>
  );
};

export default Services;
