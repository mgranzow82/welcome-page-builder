import { Check, MapPin, Globe, Target, Award, Briefcase, Handshake, BookOpen, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import heroBg from "@/assets/hero-bg.jpg";
import marcusPortrait from "@/assets/marcus-portrait.jpg";
import { useLanguage } from "@/contexts/LanguageContext";
import { useDocumentMeta } from "@/hooks/useDocumentMeta";

const About = () => {
  const { t } = useLanguage();
  useDocumentMeta({ title: t("seo.about.title"), description: t("seo.about.description") });

  const stats = [
    { value: "20+", label: t("about.stats.years") },
    { value: "150+", label: t("about.stats.projects") },
    { value: "70+", label: t("about.stats.people") },
    { value: "10+", label: t("about.stats.industries") },
  ];


  const methodology = [
    t("about.method.item1"),
    t("about.method.item2"),
    t("about.method.item3"),
    t("about.method.item4"),
  ];

  const artifacts = [
    t("about.method.art1"),
    t("about.method.art2"),
    t("about.method.art3"),
    t("about.method.art4"),
    t("about.method.art5"),
  ];

  const values = [
    { icon: Target, title: t("about.values.clarity.title"), description: t("about.values.clarity.desc") },
    { icon: Award, title: t("about.values.responsibility.title"), description: t("about.values.responsibility.desc") },
    { icon: Briefcase, title: t("about.values.independence.title"), description: t("about.values.independence.desc") },
    { icon: Handshake, title: t("about.values.collaboration.title"), description: t("about.values.collaboration.desc") },
    { icon: BookOpen, title: t("about.values.learning.title"), description: t("about.values.learning.desc") },
  ];

  const whoItems = [
    t("about.who.item1"),
    t("about.who.item2"),
    t("about.who.item3"),
    t("about.who.item4"),
    t("about.who.item5"),
  ];

  const locationItems = [
    t("about.location.item1"),
    t("about.location.item2"),
    t("about.location.item3"),
  ];

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* 1. Hero */}
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
            {t("about.hero.title")}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="text-hero-muted text-lg leading-relaxed mb-6 max-w-2xl"
          >
            {t("about.hero.subtitle")}
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-hero-foreground/85 text-sm leading-relaxed max-w-2xl"
          >
            {t("about.hero.text")}
          </motion.p>
        </div>
      </section>

      {/* 2. Wer wir sind */}
      <section className="py-12 px-6 lg:px-16 bg-background">
        <div className="mx-auto max-w-7xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
            className="font-display text-3xl lg:text-4xl text-foreground mb-8"
          >
            {t("about.who.title")}
          </motion.h2>
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-4 text-muted-foreground leading-relaxed"
            >
              <p dangerouslySetInnerHTML={{ __html: t("about.who.p1") }} />
              <p dangerouslySetInnerHTML={{ __html: t("about.who.p2") }} />
              <ul className="space-y-2 pl-1">
                {whoItems.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm">
                    <Check className="h-4 w-4 mt-0.5 text-accent shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="font-medium text-foreground">
                {t("about.who.mission")}
              </p>
            </motion.div>

            {/* Portrait Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex justify-center lg:justify-end"
            >
              <img
                src={marcusPortrait}
                alt="Marcus Granzow, Solution Architect & Technology Leader"
                className="rounded-lg shadow-lg max-w-sm w-full h-auto object-cover"
                loading="lazy"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. Erfahrung in Zahlen */}
      <section className="py-12 px-6 lg:px-16 bg-muted/50">
        <div className="mx-auto max-w-7xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
            className="font-display text-3xl lg:text-4xl text-foreground text-center mb-10"
          >
            {t("about.stats.title")}
          </motion.h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((s, i) => (
              <motion.div
                key={s.value}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="text-center rounded-lg border border-border bg-card p-6 shadow-sm"
              >
                <div className="font-display text-4xl text-accent mb-2">{s.value}</div>
                <p className="text-sm text-muted-foreground">{s.label}</p>
              </motion.div>
            ))}
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-muted-foreground text-sm text-center max-w-3xl mx-auto italic"
          >
            {t("about.stats.footnote")}
          </motion.p>
        </div>
      </section>

      {/* 4. Case Studies Teaser */}
      <section className="py-12 px-6 lg:px-16 bg-background">
        <div className="mx-auto max-w-5xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
            className="font-display text-3xl lg:text-4xl text-foreground mb-4"
          >
            {t("about.refs.title")}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-muted-foreground text-lg mb-6 leading-relaxed max-w-2xl mx-auto"
          >
            {t("about.refs.teaser_text")}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Link
              to="/case-studies"
              className="inline-flex items-center gap-2 rounded bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground hover:opacity-90 transition-opacity"
            >
              {t("about.refs.view_cases")} <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* 5. Wie wir arbeiten */}
      <section className="py-12 px-6 lg:px-16 bg-muted/50">
        <div className="mx-auto max-w-5xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
            className="font-display text-3xl lg:text-4xl text-foreground mb-4"
          >
            {t("about.method.title")}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-muted-foreground text-lg leading-relaxed mb-6"
          >
            {t("about.method.intro")}
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-3 mb-8"
          >
            {methodology.map((item) => (
              <div key={item} className="flex items-start gap-3 text-muted-foreground text-sm">
                <Check className="h-4 w-4 mt-0.5 text-accent shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <p className="text-xs font-semibold text-foreground mb-3 uppercase tracking-wide">{t("about.method.artifacts")}</p>
            <div className="flex flex-wrap gap-2">
              {artifacts.map((a) => (
                <span key={a} className="rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 text-sm text-accent font-medium">
                  {a}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* 6. Werte & Haltung */}
      <section className="py-12 px-6 lg:px-16 bg-background">
        <div className="mx-auto max-w-7xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
            className="font-display text-3xl lg:text-4xl text-foreground text-center mb-10"
          >
            {t("about.values.title")}
          </motion.h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="rounded-lg border border-border bg-card p-6 shadow-sm"
              >
                <v.icon className="h-7 w-7 text-accent mb-3" strokeWidth={1.5} />
                <h3 className="font-display text-base text-card-foreground mb-2">{v.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{v.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. DACH & Dubai */}
      <section className="py-12 px-6 lg:px-16 bg-muted/50">
        <div className="mx-auto max-w-5xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
            className="font-display text-3xl lg:text-4xl text-foreground mb-4"
          >
            {t("about.location.title")}
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-4 text-muted-foreground leading-relaxed mb-8"
          >
            <p>{t("about.location.text")}</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-3"
          >
            <p className="text-foreground font-semibold text-sm mb-2">{t("about.location.approach")}</p>
            {locationItems.map((item) => (
              <div key={item} className="flex items-start gap-3 text-muted-foreground text-sm">
                <Check className="h-4 w-4 mt-0.5 text-accent shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex items-center gap-6 mt-8"
          >
            <div className="flex items-center gap-2 text-sm text-foreground">
              <MapPin className="h-4 w-4 text-accent" />
              Hamburg
            </div>
            <div className="flex items-center gap-2 text-sm text-foreground">
              <MapPin className="h-4 w-4 text-accent" />
              Dubai
            </div>
            <div className="flex items-center gap-2 text-sm text-foreground">
              <Globe className="h-4 w-4 text-accent" />
              Remote
            </div>
          </motion.div>
        </div>
      </section>

      {/* 8. Abschluss-CTA */}
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
            {t("about.cta.title")}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-hero-muted text-lg mb-4 leading-relaxed"
          >
            {t("about.cta.text")}
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="text-hero-muted/90 text-sm mb-6"
          >
            {t("about.cta.subtitle")}
          </motion.p>
          <motion.ul
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-hero-muted/90 text-sm space-y-2 mb-8 max-w-md mx-auto text-left"
          >
            <li className="flex items-start gap-2"><Check className="h-4 w-4 mt-0.5 text-accent shrink-0" /> {t("about.cta.item1")}</li>
            <li className="flex items-start gap-2"><Check className="h-4 w-4 mt-0.5 text-accent shrink-0" /> {t("about.cta.item2")}</li>
            <li className="flex items-start gap-2"><Check className="h-4 w-4 mt-0.5 text-accent shrink-0" /> {t("about.cta.item3")}</li>
          </motion.ul>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-3"
          >
            <Link to="/book" className="inline-flex items-center gap-2 rounded bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground hover:opacity-90 transition-opacity">
              {t("about.cta.button")} <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      <FooterSection />
    </div>
  );
};

export default About;
