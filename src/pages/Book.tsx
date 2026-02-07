import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import heroBg from "@/assets/hero-bg.jpg";
import Logo from "@/components/Logo";

const Book = () => {
  return (
    <div className="min-h-screen">
      {/* Nav */}
      <nav className="absolute top-0 left-0 right-0 z-50 flex items-center justify-between px-6 lg:px-16 py-5">
        <Link to="/" className="shrink-0">
          <Logo variant="light" className="h-16" />
        </Link>
        <Link
          to="/"
          className="text-hero-foreground/80 hover:text-hero-foreground text-sm font-medium transition-colors"
        >
          ← Back to Home
        </Link>
      </nav>

      {/* Hero */}
      <section className="relative min-h-[35vh] flex items-center overflow-hidden">
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
            Free Consultation
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-4xl lg:text-5xl text-hero-foreground mb-4"
          >
            Gespräch buchen
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-hero-muted text-lg max-w-2xl mx-auto leading-relaxed"
          >
            In 30 Minuten klären wir eure Ausgangslage, Ziele und die passenden nächsten Schritte — kostenlos und unverbindlich.
          </motion.p>
        </div>
      </section>

      {/* Calendly Embed */}
      <section className="py-12 px-6 lg:px-16 bg-background">
        <div className="mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="rounded-lg border border-border bg-card shadow-sm overflow-hidden"
          >
            <iframe
              src="https://calendly.com/marcus-granzow82/30min"
              width="100%"
              height="700"
              frameBorder="0"
              title="Termin buchen"
              className="w-full"
            />
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Book;
