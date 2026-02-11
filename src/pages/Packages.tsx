import { ArrowRight, Check, FileText, GitBranch, Map, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import heroBg from "@/assets/hero-bg.jpg";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import { useLanguage } from "@/contexts/LanguageContext";

const PackagesPage = () => {
  const { t } = useLanguage();

  const features = [
    { icon: Map, title: t("pkg.feat1.title"), description: t("pkg.feat1.desc") },
    { icon: FileText, title: t("pkg.feat2.title"), description: t("pkg.feat2.desc") },
    { icon: GitBranch, title: t("pkg.feat3.title"), description: t("pkg.feat3.desc") },
    { icon: Sparkles, title: t("pkg.feat4.title"), description: t("pkg.feat4.desc") },
  ];

  const tiers = [
    {
      size: "S",
      name: t("pkg.s.name"),
      duration: t("pkg.s.duration"),
      price: t("pkg.s.price"),
      audience: t("pkg.s.audience"),
      scope: [t("pkg.s.i1"), t("pkg.s.i2"), t("pkg.s.i3"), t("pkg.s.i4")],
    },
    {
      size: "M",
      name: t("pkg.m.name"),
      duration: t("pkg.m.duration"),
      price: t("pkg.m.price"),
      audience: t("pkg.m.audience"),
      scope: [t("pkg.m.i1"), t("pkg.m.i2"), t("pkg.m.i3"), t("pkg.m.i4"), t("pkg.m.i5"), t("pkg.m.i6")],
      highlighted: true,
    },
    {
      size: "L",
      name: t("pkg.l.name"),
      duration: t("pkg.l.duration"),
      price: t("pkg.l.price"),
      audience: t("pkg.l.audience"),
      scope: [t("pkg.l.i1"), t("pkg.l.i2"), t("pkg.l.i3"), t("pkg.l.i4"), t("pkg.l.i5"), t("pkg.l.i6")],
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-center overflow-hidden">
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
            {t("pkg.label")}
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-4xl lg:text-5xl text-hero-foreground mb-4"
          >
            {t("pkg.hero.title")}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-hero-muted text-lg max-w-2xl mx-auto leading-relaxed"
          >
            {t("pkg.hero.subtitle")}
          </motion.p>
        </div>
      </section>

      {/* For Whom & What You Get */}
      <section className="py-12 px-6 lg:px-16 bg-background">
        <div className="mx-auto max-w-5xl grid md:grid-cols-2 gap-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="font-display text-2xl text-foreground mb-4">{t("pkg.for_whom")}</h2>
            <ul className="space-y-3 text-muted-foreground text-sm">
              {[t("pkg.for_item1"), t("pkg.for_item2"), t("pkg.for_item3"), t("pkg.for_item4")].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <Check className="h-4 w-4 mt-0.5 text-accent shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h2 className="font-display text-2xl text-foreground mb-4">{t("pkg.what_you_get")}</h2>
            <ul className="space-y-3 text-muted-foreground text-sm">
              {[t("pkg.get_item1"), t("pkg.get_item2"), t("pkg.get_item3"), t("pkg.get_item4"), t("pkg.get_item5")].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <Check className="h-4 w-4 mt-0.5 text-accent shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Feature Cards */}
      <section className="py-12 px-6 lg:px-16 bg-muted/50">
        <div className="mx-auto max-w-5xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
            className="font-display text-3xl text-foreground mb-10"
          >
            {t("pkg.benefits")}
          </motion.h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex flex-col items-center rounded-lg border border-border bg-card p-6 text-center shadow-sm"
              >
                <f.icon className="h-10 w-10 text-accent mb-4" strokeWidth={1.5} />
                <h3 className="font-display text-lg text-card-foreground mb-2">{f.title}</h3>
                <p className="text-muted-foreground text-sm">{f.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* S / M / L Tiers */}
      <section className="py-12 px-6 lg:px-16 bg-background">
        <div className="mx-auto max-w-6xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
            className="font-display text-3xl text-foreground mb-4"
          >
            {t("pkg.tiers_title")}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-muted-foreground max-w-2xl mx-auto mb-10 text-lg"
          >
            {t("pkg.tiers_subtitle")}
          </motion.p>

          <div className="grid md:grid-cols-3 gap-6">
            {tiers.map((tier, i) => (
              <motion.div
                key={tier.size}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className={`relative flex flex-col rounded-lg border p-6 text-left shadow-sm transition-shadow hover:shadow-md ${
                  tier.highlighted
                    ? "border-accent bg-accent/5 ring-1 ring-accent/30"
                    : "border-border bg-card"
                }`}
              >
                {tier.highlighted && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-accent px-3 py-0.5 text-xs font-semibold text-accent-foreground">
                    {t("pkg.recommended")}
                  </span>
                )}
                <div className="flex items-baseline gap-2 mb-1">
                  <span className="font-display text-3xl text-accent">{tier.size}</span>
                  <span className="font-display text-xl text-card-foreground">{tier.name}</span>
                </div>
                <p className="text-sm text-muted-foreground mb-1">{tier.duration}</p>
                <p className="text-lg font-semibold text-foreground mb-4">{tier.price}</p>
                <p className="text-sm text-muted-foreground italic mb-4">{tier.audience}</p>
                <div className="h-px bg-border mb-4" />
                <ul className="space-y-2 flex-1 mb-6">
                  {tier.scope.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <Check className="h-3.5 w-3.5 mt-0.5 text-accent shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/book"
                  className={`flex items-center justify-center gap-1 rounded px-4 py-2.5 text-sm font-semibold transition-opacity hover:opacity-90 ${
                    tier.highlighted
                      ? "bg-accent text-accent-foreground"
                      : "bg-primary text-primary-foreground"
                  }`}
                >
                  {t("pkg.book_call")} <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
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
            className="font-display text-3xl text-hero-foreground mb-4"
          >
            {t("pkg.bottom.title")}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-hero-muted text-lg mb-8"
          >
            {t("pkg.bottom.text")}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            <Link to="/book" className="inline-block rounded bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground hover:opacity-90 transition-opacity">
              {t("pkg.bottom.cta")}
            </Link>
          </motion.div>
        </div>
      </section>

      <FooterSection />
    </div>
  );
};

export default PackagesPage;
