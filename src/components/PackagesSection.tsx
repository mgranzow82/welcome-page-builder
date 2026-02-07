import { ArrowRight, Map, Search } from "lucide-react";

const packages = [
  {
    icon: Map,
    title: "Target Architecture & Roadmap",
    description: "From a structured target architecture to an actionable roadmap",
    cta: "View Offering",
  },
  {
    icon: Search,
    title: "Digital & AI Clarity Check",
    description: "Get an honest status, clear overview, and concrete next steps in days",
    cta: "View Offering",
  },
];

const PackagesSection = () => {
  return (
    <section id="packages" className="py-20 px-6 lg:px-16 bg-muted/50">
      <div className="mx-auto max-w-5xl text-center">
        <h2 className="font-display text-3xl lg:text-4xl text-foreground mb-4">
          Target architectures in clear packages
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto mb-14 text-lg">
          We provide architecture projects that align business and IT –
          no subscriptions, no buzzwords.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {packages.map((p) => (
            <div
              key={p.title}
              className="flex items-start gap-4 rounded-lg border border-accent/30 bg-card p-6 text-left shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex-1">
                <h3 className="font-display text-xl text-accent mb-2">{p.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{p.description}</p>
                <a
                  href="#"
                  className="inline-flex items-center gap-1 text-sm font-semibold text-accent hover:underline"
                >
                  {p.cta} <ArrowRight className="h-3.5 w-3.5" />
                </a>
              </div>
              <p.icon className="h-14 w-14 text-accent/40 shrink-0" strokeWidth={1} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PackagesSection;
