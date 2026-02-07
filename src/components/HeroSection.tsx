import { Check } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const bullets = [
  "Architecture leadership for 6–24 month transformation programs",
  "Microservices, cloud & integration architecture",
  "Governance, capability maps & roadmaps",
];

const HeroSection = () => {
  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt=""
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-hero/90 via-hero/70 to-hero/40" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 lg:px-16 pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div>
            <h1 className="font-display text-4xl lg:text-5xl leading-tight text-hero-foreground mb-4">
              Digital Architecture
              <br />
              & AI Consulting
            </h1>
            <p className="text-hero-muted text-lg mb-6">
              Enterprise & Solution Architecture
              <br />
              for DACH & UAE
            </p>

            <ul className="space-y-3 mb-8">
              {bullets.map((b) => (
                <li key={b} className="flex items-start gap-3 text-hero-foreground/90 text-sm">
                  <Check className="h-4 w-4 mt-0.5 text-accent shrink-0" />
                  {b}
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-3">
              <a
                href="#packages"
                className="rounded bg-accent px-5 py-2.5 text-sm font-semibold text-accent-foreground hover:opacity-90 transition-opacity"
              >
                Explore Packages
              </a>
              <a
                href="#contact"
                className="rounded border border-hero-foreground/30 px-5 py-2.5 text-sm font-semibold text-hero-foreground hover:bg-hero-foreground/10 transition-colors"
              >
                Talk to Your Principal Architect
              </a>
            </div>
          </div>

          {/* Right – architecture diagram */}
          <div className="hidden lg:flex justify-center">
            <div className="relative">
              {/* Simplified architecture visual */}
              <svg viewBox="0 0 320 280" className="w-80 opacity-80">
                {/* Lines */}
                <line x1="160" y1="40" x2="160" y2="100" stroke="hsl(185 50% 38%)" strokeWidth="1" strokeDasharray="4 4" />
                <line x1="160" y1="100" x2="80" y2="160" stroke="hsl(185 50% 38%)" strokeWidth="1" strokeDasharray="4 4" />
                <line x1="160" y1="100" x2="240" y2="160" stroke="hsl(185 50% 38%)" strokeWidth="1" strokeDasharray="4 4" />
                <line x1="240" y1="160" x2="240" y2="220" stroke="hsl(185 50% 38%)" strokeWidth="1" strokeDasharray="4 4" />
                {/* Boxes */}
                <rect x="100" y="10" width="120" height="35" rx="4" fill="hsl(200 55% 25% / 0.6)" stroke="hsl(185 50% 38% / 0.5)" />
                <text x="160" y="32" textAnchor="middle" fill="white" fontSize="11" fontFamily="DM Sans">Centerstructure</text>
                <rect x="90" y="85" width="140" height="35" rx="4" fill="hsl(0 0% 100% / 0.1)" stroke="hsl(185 50% 38% / 0.5)" />
                <text x="160" y="107" textAnchor="middle" fill="white" fontSize="11" fontFamily="DM Sans">Customer</text>
                <rect x="10" y="145" width="140" height="35" rx="4" fill="hsl(0 0% 100% / 0.1)" stroke="hsl(185 50% 38% / 0.5)" />
                <text x="80" y="167" textAnchor="middle" fill="white" fontSize="11" fontFamily="DM Sans">Core Services</text>
                <rect x="170" y="145" width="140" height="35" rx="4" fill="hsl(0 0% 100% / 0.1)" stroke="hsl(185 50% 38% / 0.5)" />
                <text x="240" y="167" textAnchor="middle" fill="white" fontSize="11" fontFamily="DM Sans">Core Services</text>
                <rect x="170" y="205" width="140" height="35" rx="4" fill="hsl(0 0% 100% / 0.1)" stroke="hsl(185 50% 38% / 0.5)" />
                <text x="240" y="227" textAnchor="middle" fill="white" fontSize="11" fontFamily="DM Sans">Partners</text>
              </svg>
            </div>
          </div>
        </div>

        <p className="mt-10 text-hero-muted/70 text-xs text-center lg:text-right">
          Based in Hamburg & Dubai — Remote & on-site for DACH & UAE
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
