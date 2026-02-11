import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import { useLanguage } from "@/contexts/LanguageContext";
import { useDocumentMeta } from "@/hooks/useDocumentMeta";

const Book = () => {
  const { t } = useLanguage();
  useDocumentMeta({ title: t("seo.book.title"), description: t("seo.book.description") });

  return (
    <div className="min-h-screen">
      <Navbar />

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
            {t("book.label")}
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-4xl lg:text-5xl text-hero-foreground mb-4"
          >
            {t("book.title")}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-hero-muted text-lg max-w-2xl mx-auto leading-relaxed"
          >
            {t("book.subtitle")}
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
              title={t("book.title")}
              className="w-full"
            />
          </motion.div>
        </div>
      </section>

      <FooterSection />
    </div>
  );
};

export default Book;
