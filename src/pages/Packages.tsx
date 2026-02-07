import { ArrowRight, Check, FileText, GitBranch, Map, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import heroBg from "@/assets/hero-bg.jpg";
import Logo from "@/components/Logo";

const features = [
  { icon: Map, title: "Target Architecture", description: "A clear, documented target state that bridges business ambitions and IT reality." },
  { icon: FileText, title: "Documented Decisions", description: "Every architectural decision recorded, reasoned, and traceable — no guesswork." },
  { icon: GitBranch, title: "Actionable Roadmap", description: "A prioritised, phased plan that turns the target into manageable delivery steps." },
  { icon: Sparkles, title: "Pragmatic AI", description: "AI opportunities identified and assessed for real impact, not hype." },
];

const tiers = [
  {
    size: "S",
    name: "Clarity Sprint",
    duration: "2–3 Weeks",
    price: "ab €12.000",
    audience: "Start-ups & KMU, die schnell Klarheit brauchen",
    scope: [
      "Stakeholder-Interviews (bis 5)",
      "Ist-Analyse & Pain-Point-Mapping",
      "Target Architecture (Übersicht)",
      "Executive Summary & Empfehlungen",
    ],
  },
  {
    size: "M",
    name: "Architecture Project",
    duration: "4–8 Weeks",
    price: "ab €28.000",
    audience: "Mittelstand & Enterprises mit laufender Transformation",
    scope: [
      "Alles aus S, plus:",
      "Detaillierte Target Architecture",
      "Entscheidungsregister (ADR)",
      "Roadmap mit Phasen & Abhängigkeiten",
      "AI-Opportunity Assessment",
      "2 Review-Workshops",
    ],
    highlighted: true,
  },
  {
    size: "L",
    name: "Transformation Office",
    duration: "3–6 Monate",
    price: "ab €60.000",
    audience: "Enterprises mit komplexen, multi-stream Programmen",
    scope: [
      "Alles aus M, plus:",
      "Laufende Architektur-Governance",
      "Integration & API Architecture",
      "Capability Maps & Domain Model",
      "Monatliche Steering-Workshops",
      "Hands-on Sparring mit Delivery-Teams",
    ],
  },
];

const PackagesPage = () => {
  return (
    <div className="min-h-screen">
      {/* Nav */}
      <nav className="absolute top-0 left-0 right-0 z-50 flex items-center justify-between px-6 lg:px-16 py-5">
        <Link to="/" className="shrink-0">
          <Logo variant="light" className="h-12" />
        </Link>
        <Link
          to="/"
          className="text-hero-foreground/80 hover:text-hero-foreground text-sm font-medium transition-colors"
        >
          ← Back to Home
        </Link>
      </nav>

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
            Packages
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-4xl lg:text-5xl text-hero-foreground mb-4"
          >
            Target Architecture &amp; Roadmap
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-hero-muted text-lg max-w-2xl mx-auto leading-relaxed"
          >
            From "we know we must change" to a clear target state, documented decisions,
            and a pragmatic roadmap — fast, structured, decision-ready.
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
            <h2 className="font-display text-2xl text-foreground mb-4">Für wen?</h2>
            <ul className="space-y-3 text-muted-foreground text-sm">
              {[
                "Unternehmen vor oder mitten in einer digitalen Transformation",
                "IT- und Business-Leiter, die Klarheit über den Zielzustand brauchen",
                "Organisationen, die AI-Potenziale strukturiert bewerten möchten",
                "Teams, die Architektur-Entscheidungen nachvollziehbar dokumentieren wollen",
              ].map((item) => (
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
            <h2 className="font-display text-2xl text-foreground mb-4">Was ihr bekommt</h2>
            <ul className="space-y-3 text-muted-foreground text-sm">
              {[
                "Eine dokumentierte Target Architecture, abgestimmt auf eure Geschäftsziele",
                "Ein Architecture Decision Record (ADR) mit begründeten Entscheidungen",
                "Eine priorisierte Roadmap mit Phasen, Abhängigkeiten und Quick-Wins",
                "AI-Opportunity Assessment mit konkreten Einsatzfeldern",
                "Executive Summary für Stakeholder und Steering Committees",
              ].map((item) => (
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
            Key Benefits
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
            Projektgrößen
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-muted-foreground max-w-2xl mx-auto mb-10 text-lg"
          >
            Drei Pakete, ein Ziel: Architektur-Klarheit – skaliert auf eure Situation.
          </motion.p>

          <div className="grid md:grid-cols-3 gap-6">
            {tiers.map((t, i) => (
              <motion.div
                key={t.size}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className={`relative flex flex-col rounded-lg border p-6 text-left shadow-sm transition-shadow hover:shadow-md ${
                  t.highlighted
                    ? "border-accent bg-accent/5 ring-1 ring-accent/30"
                    : "border-border bg-card"
                }`}
              >
                {t.highlighted && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-accent px-3 py-0.5 text-xs font-semibold text-accent-foreground">
                    Empfohlen
                  </span>
                )}
                <div className="flex items-baseline gap-2 mb-1">
                  <span className="font-display text-3xl text-accent">{t.size}</span>
                  <span className="font-display text-xl text-card-foreground">{t.name}</span>
                </div>
                <p className="text-sm text-muted-foreground mb-1">{t.duration}</p>
                <p className="text-lg font-semibold text-foreground mb-4">{t.price}</p>
                <p className="text-sm text-muted-foreground italic mb-4">{t.audience}</p>
                <div className="h-px bg-border mb-4" />
                <ul className="space-y-2 flex-1 mb-6">
                  {t.scope.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <Check className="h-3.5 w-3.5 mt-0.5 text-accent shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <a
                  href="/#contact"
                  className={`flex items-center justify-center gap-1 rounded px-4 py-2.5 text-sm font-semibold transition-opacity hover:opacity-90 ${
                    t.highlighted
                      ? "bg-accent text-accent-foreground"
                      : "bg-primary text-primary-foreground"
                  }`}
                >
                  Gespräch buchen <ArrowRight className="h-3.5 w-3.5" />
                </a>
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
            Bereit für Architektur-Klarheit?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-hero-muted text-lg mb-8"
          >
            In einem kostenlosen 30-Minuten-Gespräch klären wir eure Ausgangslage und die passende Paketgröße.
          </motion.p>
          <motion.a
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            href="/#contact"
            className="inline-block rounded bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground hover:opacity-90 transition-opacity"
          >
            Kostenloses Gespräch buchen
          </motion.a>
        </div>
      </section>
    </div>
  );
};

export default PackagesPage;
