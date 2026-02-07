import { Building2, Cloud, Network, ClipboardCheck, Check, ArrowRight, Briefcase, Factory, Train, ShoppingCart, Gamepad2, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import heroBg from "@/assets/hero-bg.jpg";

const coreBullets = [
  "Ziel- und Transformationsarchitekturen (Monolith → Services, Cloud, Plattformen)",
  "Solution & Software Architektur für Produkte, Plattformen und IoT/AI",
  "Integrations-, API- und Streaming-Architektur (Kafka, Eventing, EAI)",
  "Architektur-Assessments & Deeskalation laufender Vorhaben",
];

const services = [
  {
    icon: Building2,
    title: "Enterprise Architektur Beratung",
    description: "Aufbau von Ziel- und Transformationsarchitekturen für ganze Unternehmensbereiche oder Plattformen: Capability Maps, modulare Systemzuschnitte (DDD-inspiriert), Governance und Roadmaps.",
    items: [
      "Zielarchitekturen & Blueprints für Programme/Plattformen",
      "Capability Maps & fachliche Domänenzuschnitte",
      "Architekturprinzipien, Governance-Modelle, Entscheidungsgremien",
    ],
    reference: "z. B. Scheduling-Plattform für TÜV SÜD Digital (TOGAF-orientiert, arc42/ADRs), Bonitätensystem für ING (38 Mio. Kunden) mit Microservices & Kafka.",
    teaser: 'Häufig gebucht im Rahmen des \u201ETarget Architecture & Roadmap Project\u201C.',
  },
  {
    icon: Cloud,
    title: "Solution & Software Architektur",
    description: "Architektur für konkrete Lösungen, Produkte und Plattformen – von der ersten Idee über das High-Level-Design bis zur Begleitung der Implementierungsteams.",
    items: [
      "Solution-Design für neue Produkte, Plattformen und SaaS-Lösungen",
      "Microservice- & Cloud-Architekturen (AWS/Azure, Container/Kubernetes)",
      "DDD-basierte Serviceschnitte, C4-Modelle, arc42-Dokumentation",
    ],
    reference: "E-Commerce-Plattformen bei About You/SCAYLE, Depot, Lascana (Headless, Multi-Mandanten), IoT-/SaaS-Systeme bei Jungheinrich und Munich Re (AWS IoT & KI).",
    teaser: 'Typischer Einstieg \u00FCber das \u201ETarget Architecture & Roadmap Project\u201C oder einen Architecture Snapshot.',
  },
  {
    icon: Network,
    title: "Integrations- & API-Architektur",
    description: "Design und Modernisierung von Schnittstellenlandschaften – APIs, Events, Messaging, Data Streams – damit Datenflüsse verlässlich, nachvollziehbar und erweiterbar sind.",
    items: [
      "API-Strategie & API-Governance (REST, GraphQL, API-First)",
      "Event- und Messaging-Architektur (Kafka, SQS/SNS, EAI-Patterns)",
      "Integrationskonzepte zwischen Legacy, SaaS und neuen Plattformen",
    ],
    reference: "Kafka-/Streaming-Architekturen bei ING Global Banking und Gauselmann/Merkur, API-basierte Integrationen bei Deutsche Bahn, Depot, About You, Axel Springer.",
    teaser: "Oft Teil von Enterprise-/Solution-Architekturprojekten oder einem Digital & AI Klarheits-Check.",
  },
  {
    icon: ClipboardCheck,
    title: "IT Architektur Assessments & Reviews",
    description: "Ehrlicher Blick auf bestehende Lösungen und Programme – mit klaren Risiken, Optionen und Maßnahmenliste statt akademischer Gutachten.",
    items: [
      "Architektur-Health-Checks (Struktur, Qualität, Betrieb, Security)",
      "Risiko- und Schuldenanalyse (Technik & Organisation)",
      "Priorisierte Maßnahmen & 90-Tage-Roadmap",
      "Deeskalation laufender Vorhaben, Coaching von Leads/POs",
    ],
    reference: "Deeskalation und Cloud-Migration bei DB Systel / Deutsche Bahn, Reviews und Architektur-Standards in größeren Konzernen.",
    teaser: 'H\u00E4ufiger Einstieg: \u201EDigital & AI Klarheits-Check\u201C mit anschlie\u00DFender Roadmap.',
  },
];

const industries = [
  { icon: ShieldCheck, label: "Banken & Finanzdienstleister", detail: "u. a. ING (Bonität, DWH/Recon, Kafka/Streaming)" },
  { icon: Briefcase, label: "Versicherungen & Rückversicherer", detail: "u. a. Munich Re (AWS IoT & KI)" },
  { icon: Factory, label: "Industrie & Logistik", detail: "Jungheinrich (IoT/SaaS), TÜV SÜD Digital" },
  { icon: Train, label: "Bahn & Mobilität", detail: "Deutsche Bahn / DB Systel (Cloud, API, KI-Bots)" },
  { icon: ShoppingCart, label: "E-Commerce & Retail", detail: "About You/SCAYLE, Depot, Lascana, Hawesko" },
  { icon: Gamepad2, label: "Gaming & Payment", detail: "Gauselmann/Merkur (Game Delivery, Microservices)" },
];

const Services = () => {
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
            Digitale Architektur-Leistungen für komplexe Systemlandschaften
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="text-hero-muted text-lg leading-relaxed mb-6 max-w-2xl"
          >
            Enterprise-, Solution- & Softwarearchitektur mit über 20 Jahren Erfahrung aus mehr als 150 Projekten – von Finanzindustrie und Bahn bis E-Commerce, Gaming und Industrie.
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
              Angebote ansehen
            </Link>
            <Link to="/book" className="rounded border border-hero-foreground/30 px-5 py-2.5 text-sm font-semibold text-hero-foreground hover:bg-hero-foreground/10 transition-colors">
              Erstgespräch vereinbaren
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
            Warum Architektur hier nicht „nice to have" ist
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-muted-foreground text-lg leading-relaxed mb-8"
          >
            Systemlandschaften werden verteilter, Teams arbeiten international, Fachbereiche erwarten schnelle Ergebnisse. Ohne klare Architektur entstehen Schatten-IT, Doppelstrukturen und Projekte, die aneinander vorbeilaufen.
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-3"
          >
            <p className="text-foreground font-semibold mb-2">DA·AI bringt Struktur hinein:</p>
            {[
              "Zielbilder, die Management & Teams verstehen",
              "Entscheidungen, die dokumentiert und tragfähig sind (ADRs, Prinzipien)",
              "Roadmaps, mit denen sich Portfolio und Teams steuern lassen",
            ].map((item) => (
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
            Kernleistungen der digitalen Architektur
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-muted-foreground text-lg text-center max-w-3xl mx-auto mb-10"
          >
            Jede Leistung ist direkt mit konkreten Referenzen hinterlegt – von Banken und Versicherungen bis zu E-Commerce- und IoT-Plattformen.
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

                <p className="text-xs font-semibold text-foreground mb-2 uppercase tracking-wide">Typische Inhalte</p>
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
            Wo DA·AI bisher unterwegs war
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-muted-foreground text-lg text-center max-w-3xl mx-auto mb-10"
          >
            Die Architekturarbeit von DA·AI basiert auf Erfahrungen aus über 150 Projekten in ganz unterschiedlichen Branchen – mit einem Schwerpunkt auf komplexen, regulierten und hochverfügbaren Systemen.
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
            Wie aus Leistungen konkrete Projekte werden
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-muted-foreground text-lg leading-relaxed mb-6 max-w-2xl mx-auto"
          >
            Die Leistungen beschreiben, was wir fachlich tun. Die Angebote beschreiben, wie wir das gemeinsam umsetzen:
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
              Zu den Angeboten <ArrowRight className="h-4 w-4" />
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
            Unsicher, welcher Service der richtige Einstieg ist?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-hero-muted text-lg mb-4 leading-relaxed"
          >
            In einem 30-minütigen Erstgespräch klären wir:
          </motion.p>
          <motion.ul
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-hero-muted/90 text-sm space-y-2 mb-8 max-w-md mx-auto text-left"
          >
            <li className="flex items-start gap-2"><Check className="h-4 w-4 mt-0.5 text-accent shrink-0" /> eure Ausgangslage</li>
            <li className="flex items-start gap-2"><Check className="h-4 w-4 mt-0.5 text-accent shrink-0" /> welche Architekturthemen am dringendsten sind</li>
            <li className="flex items-start gap-2"><Check className="h-4 w-4 mt-0.5 text-accent shrink-0" /> welches Vorgehen am meisten Mehrwert liefert</li>
          </motion.ul>
          <Link to="/book" className="inline-block rounded bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground hover:opacity-90 transition-opacity">
            Erstgespräch vereinbaren
          </Link>
        </div>
      </section>

      <FooterSection />
    </div>
  );
};

export default Services;
