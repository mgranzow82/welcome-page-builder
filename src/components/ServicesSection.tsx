import { Building2, Cloud, Network, ClipboardCheck, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  { icon: Building2, title: "Enterprise Architecture", description: "Enterprise leadership for clear month transformation programs", cta: "Learn More" },
  { icon: Cloud, title: "Solution & Cloud Architecture", description: "Deliverables, shots, designs, PrinceDiameter Requests & integrate architectures", cta: "Learn More" },
  { icon: Network, title: "Integration & API Architecture", description: "Architecture lifecycle, strategy, patterns, business & API references", cta: "View More" },
  { icon: ClipboardCheck, title: "IT Architecture Assessments", description: "Expose architecture clarity, goals, and IT factors", cta: "View Offering" },
];

const ServicesSection = () => {
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
          Structure. Strategy. Scalability.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-muted-foreground max-w-2xl mx-auto mb-10 text-lg"
        >
          Get from "We know we must change" to a clear target, architecture and roadmap – fast, pragmatic, decision-ready.
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
              <a href="#" className="flex items-center gap-1 rounded bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90 transition-opacity">
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
