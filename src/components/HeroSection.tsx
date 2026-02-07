import { Check } from "lucide-react";
import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";

const bullets = [
  "Architecture leadership for 6–24 month transformation programs",
  "Microservices, cloud & integration architecture",
  "Governance, capability maps & roadmaps",
];

const HeroSection = () => {
  return (
    <section className="relative min-h-[70vh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-hero/90 via-hero/70 to-hero/40" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 lg:px-16 pt-24 pb-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="font-display text-4xl lg:text-5xl leading-[1.2] tracking-wide text-hero-foreground mb-5"
            >
              Digital Architecture<br />& AI Consulting
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="text-hero-muted text-lg leading-snug mb-6"
            >
              Enterprise & Solution Architecture<br />for DACH & UAE
            </motion.p>

            <motion.ul
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-3 mb-8"
            >
              {bullets.map((b, i) => (
                <motion.li
                  key={b}
                  initial={{ opacity: 0, x: -15 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.35 + i * 0.1 }}
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
              <a href="#packages" className="rounded bg-accent px-5 py-2.5 text-sm font-semibold text-accent-foreground hover:opacity-90 transition-opacity">
                Explore Packages
              </a>
              <a href="/contact?subject=Talk%20to%20Principal%20Architect" className="rounded border border-hero-foreground/30 px-5 py-2.5 text-sm font-semibold text-hero-foreground hover:bg-hero-foreground/10 transition-colors">
                Talk to Your Principal Architect
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:flex justify-center"
          >
            <svg viewBox="0 0 320 280" className="w-80 opacity-80">
              <line x1="160" y1="40" x2="160" y2="100" stroke="hsl(185 50% 38%)" strokeWidth="1" strokeDasharray="4 4" />
              <line x1="160" y1="100" x2="80" y2="160" stroke="hsl(185 50% 38%)" strokeWidth="1" strokeDasharray="4 4" />
              <line x1="160" y1="100" x2="240" y2="160" stroke="hsl(185 50% 38%)" strokeWidth="1" strokeDasharray="4 4" />
              <line x1="240" y1="160" x2="240" y2="220" stroke="hsl(185 50% 38%)" strokeWidth="1" strokeDasharray="4 4" />
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
          </motion.div>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-10 text-hero-muted/70 text-xs text-center lg:text-right"
        >
          Based in Hamburg & Dubai — Remote & on-site for DACH & UAE
        </motion.p>
      </div>
    </section>
  );
};

export default HeroSection;
