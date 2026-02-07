import { Check, MapPin, Globe, Users, Briefcase, Award, Target, Handshake, BookOpen, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import heroBg from "@/assets/hero-bg.jpg";

const stats = [
  { value: "20+", label: "Jahre in Software- & Lösungsarchitektur" },
  { value: "150+", label: "Projekte in verschiedenen Branchen und Größenordnungen" },
  { value: "70+", label: "Personen größte verantwortete IT-Einheit" },
  { value: "10+", label: "Branchen, u.\u00a0a. Banking, Versicherung, Bahn, E-Commerce, Gaming" },
];

const references = [
  {
    client: "TÜV SÜD Digital",
    title: "Scheduling-Plattform für internationale Audits",
    role: "Solution- & Enterprise-Architekt",
    description:
      "Architekturkonzept für eine unternehmensweite Scheduling-Plattform zur Einsatzplanung von Auditoren – inkl. Zielarchitektur, Master- und Business-Szenarien, High-Level-Use-Cases, Systemkontext, DDD-inspirierter Komponentenarchitektur, Make/Buy/Hybrid-Analyse sowie Architekturarbeit entlang des TOGAF-ADM.",
  },
  {
    client: "ING Global Banking",
    title: "Bonitätssystem für 38 Mio. Menschen in Deutschland",
    role: "Solution- & Enterprise-Architekt",
    description:
      "Architektur eines neuen Bonitätssystems auf Microservice-Basis mit Kafka-Streaming, API-Design, AVRO-Schemas, Use-Cases nach Alistair Cockburn, DWH/Data-Lake-Anbindung und Tracing – inkl. arc42-Dokumentation, ADRs und Coaching der Teams.",
  },
  {
    client: "Deutsche Bahn / DB Systel",
    title: "Cloud-Migration & Architektur-Deeskalation",
    role: "Consultant & Solution-Architekt",
    description:
      "On-Prem-zu-Cloud-Migration (Azure/AWS), Aufbau einer effizienten Projektstruktur, Architektur-Reviews, Performance-Transparenz, Coaching von Product Ownern & Management, Weiterentwicklung von Architektur-Standards (arc42, ADRs, Docs-as-Code) und Deeskalation eines laufenden Projekts.",
  },
  {
    client: "About You / SCAYLE, Depot, Lascana",
    title: "Enterprise E-Commerce & Middleware",
    role: "Tech-Lead & Solution-Architekt",
    description:
      "Design von hochskalierenden, headless E-Commerce-Plattformen und Middleware-Systemen (Node.js, PHP, AWS, Microservices, GraphQL, Kafka/SQS), inkl. Multi-Mandanten-Fähigkeit, Multicurrency, Monitoring, Security, hoher Performance und Rollouts in zahlreichen Ländern.",
  },
];

const methodology = [
  "Wir nutzen etablierte Standards wie arc42, C4, TOGAF, DDD und ADRs, um Architektur strukturiert und nachvollziehbar zu dokumentieren.",
  "Entscheidungen werden explizit gemacht – inklusive Alternativen, Annahmen und Risiken.",
  "Dokumentation ist kein Selbstzweck: Wir bevorzugen Docs-as-Code, lebende Wikis und Modelle, die Teams wirklich nutzen.",
  "Wir arbeiten eng mit Entwicklungsteams, Product Ownern und Management zusammen – oft als Brücke zwischen Business, Tech und Organisation.",
];

const artifacts = [
  "Zielarchitekturen & Systemkontexte",
  "Use-Case-basierte Anforderungen nach Alistair Cockburn",
  "Architektur-Decisions (ADRs)",
  "Roadmaps (90 Tage / 12 Monate)",
  "Governance- & Operating-Model-Vorschläge",
];

const values = [
  {
    icon: Target,
    title: "Klarheit vor Buzzwords",
    description:
      "Architektur soll Entscheidungen ermöglichen, nicht vernebeln. Wir benennen Risiken und Grenzen offen – auch wenn das unbequem ist.",
  },
  {
    icon: Award,
    title: "Verantwortung & Verlässlichkeit",
    description:
      "Wir denken Architektur nie losgelöst von Betrieb, Sicherheit und Teams. Was wir empfehlen, müssen Teams auch langfristig tragen können.",
  },
  {
    icon: Briefcase,
    title: "Unabhängigkeit",
    description:
      "Wir verkaufen keine Tools. Unsere Empfehlungen zu Cloud-, Plattform- oder SaaS-Lösungen sind herstellerneutral und begründet.",
  },
  {
    icon: Handshake,
    title: "Zusammenarbeit auf Augenhöhe",
    description:
      "Ob C-Level oder Entwickler: wir übersetzen zwischen den Welten, statt uns auf eine Seite zu schlagen.",
  },
  {
    icon: BookOpen,
    title: "Lernende Organisation",
    description:
      "Architektur wird dann stark, wenn Teams mitziehen. Coaching, Sparring und Wissenstransfer sind immer Teil unserer Arbeit.",
  },
];

const About = () => {
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
            Über DA·AI – Digital Architecture & AI Office
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="text-hero-muted text-lg leading-relaxed mb-6 max-w-2xl"
          >
            Digitale Architekturberatung mit über 20 Jahren Erfahrung in Enterprise-, Solution- & Softwarearchitektur – für Unternehmen in der DACH-Region und in Dubai/UAE.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-hero-foreground/85 text-sm leading-relaxed max-w-2xl"
          >
            DA·AI ist ein spezialisiertes Architecture Office, das Unternehmen hilft, komplexe Systemlandschaften zu strukturieren, Zielarchitekturen zu entwickeln und umsetzbare Roadmaps zu bauen.
            Im Fokus: Enterprise-, Solution- und Softwarearchitektur, Integrations- & API-Architektur sowie Architecture Assessments.
          </motion.p>
        </div>
      </section>

      {/* 2. Wer wir sind */}
      <section className="py-12 px-6 lg:px-16 bg-background">
        <div className="mx-auto max-w-5xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
            className="font-display text-3xl lg:text-4xl text-foreground mb-4"
          >
            Wer hinter DA·AI steht
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-4 text-muted-foreground leading-relaxed"
          >
            <p>
              DA·AI wurde von <strong className="text-foreground">Marcus Granzow</strong> gegründet – Solution- & Softwarearchitekt aus Hamburg mit über 20 Jahren Erfahrung und mehr als 150 Projektbeteiligungen.
            </p>
            <p>
              In seinen bisherigen Rollen als Tech-Lead, Abteilungsleiter IT und Director Solution Architecture hat er Entwicklungsteams von bis zu 70 Personen geführt und Architekturen für hochskalierende, geschäftskritische Systeme entworfen – u.&nbsp;a. bei:
            </p>
            <ul className="space-y-2 pl-1">
              {[
                "einem großen deutschen Glücksspiel- und Zahlungsdienstleister (Gauselmann/Merkur)",
                "der E-Commerce-Plattform About You / SCAYLE",
                "Industrie- und Logistikkonzernen wie Jungheinrich",
                "Medien- und Verlagshäusern wie Axel Springer",
                "sowie in regulierten Branchen wie Banking, Versicherung und Bahn",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm">
                  <Check className="h-4 w-4 mt-0.5 text-accent shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="font-medium text-foreground">
              DA·AI bündelt diese Erfahrung in einer klaren Mission: Architektur so zu gestalten, dass sie Entscheidungen ermöglicht – nicht blockiert.
            </p>
          </motion.div>
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
            Erfahrung in Zahlen
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
            Diese Breite ist kein Selbstzweck, sondern hilft uns, Muster schneller zu erkennen – und Lösungen zu entwickeln, die sowohl in regulierten als auch in dynamischen Umfeldern funktionieren.
          </motion.p>
        </div>
      </section>

      {/* 4. Referenzprojekte */}
      <section className="py-12 px-6 lg:px-16 bg-background">
        <div className="mx-auto max-w-7xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
            className="font-display text-3xl lg:text-4xl text-foreground text-center mb-10"
          >
            Ausgewählte Referenzen & Projektkontexte
          </motion.h2>
          <div className="grid lg:grid-cols-2 gap-6 mb-8">
            {references.map((ref, i) => (
              <motion.div
                key={ref.client}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="rounded-lg border border-border bg-card p-6 shadow-sm"
              >
                <p className="text-xs font-semibold text-accent uppercase tracking-wide mb-1">{ref.client}</p>
                <h3 className="font-display text-lg text-card-foreground mb-1">{ref.title}</h3>
                <p className="text-xs text-muted-foreground mb-3">Rolle: {ref.role}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">{ref.description}</p>
              </motion.div>
            ))}
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-muted-foreground text-sm text-center italic"
          >
            Detaillierte Case Studies stellen wir auf Anfrage oder im Rahmen eines Erstgesprächs gerne vor.
          </motion.p>
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
            Wie DA·AI arbeitet
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-muted-foreground text-lg leading-relaxed mb-6"
          >
            Wir kombinieren klare Architekturmethodik mit pragmatischer Umsetzungserfahrung:
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
            <p className="text-xs font-semibold text-foreground mb-3 uppercase tracking-wide">Typische Artefakte</p>
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
            Werte, die unsere Arbeit prägen
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
            Zwischen DACH und Dubai – wo DA·AI aktiv ist
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-4 text-muted-foreground leading-relaxed mb-8"
          >
            <p>
              DA·AI arbeitet derzeit überwiegend mit Kunden in der DACH-Region – vor allem Deutschland, Österreich und der Schweiz. Parallel bauen wir unsere Präsenz in Dubai und den Vereinigten Arabischen Emiraten auf.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-3"
          >
            <p className="text-foreground font-semibold text-sm mb-2">Unser Ansatz:</p>
            {[
              "Remote-First, mit der Möglichkeit zu On-Site-Workshops bei Bedarf",
              "Erfahrung aus regulierten Märkten (Banking, Versicherung, Bahn) kombiniert mit skalierenden Digital-Plattformen (E-Commerce, IoT, Gaming)",
              "Fokus auf Unternehmen, die entweder international wachsen oder ihre Architekturen zukunftsfähig für globale Märkte machen wollen",
            ].map((item) => (
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
            Lernen wir uns kennen
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-hero-muted text-lg mb-4 leading-relaxed"
          >
            Wenn ihr vor wichtigen Architekturentscheidungen steht – oder das Gefühl habt, dass eure Systemlandschaft gewachsen statt geplant ist – lasst uns sprechen.
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="text-hero-muted/90 text-sm mb-6"
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
            <li className="flex items-start gap-2"><Check className="h-4 w-4 mt-0.5 text-accent shrink-0" /> wo ihr steht</li>
            <li className="flex items-start gap-2"><Check className="h-4 w-4 mt-0.5 text-accent shrink-0" /> welche Architekturthemen am dringendsten sind</li>
            <li className="flex items-start gap-2"><Check className="h-4 w-4 mt-0.5 text-accent shrink-0" /> und ob DA·AI als Partner passt</li>
          </motion.ul>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-3"
          >
            <Link to="/book" className="inline-flex items-center gap-2 rounded bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground hover:opacity-90 transition-opacity">
              Erstgespräch vereinbaren <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      <FooterSection />
    </div>
  );
};

export default About;
