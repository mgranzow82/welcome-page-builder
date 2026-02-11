import { useState } from "react";
import { Mail, MapPin, Linkedin, Send } from "lucide-react";
import { motion } from "framer-motion";
import { Link, useSearchParams } from "react-router-dom";
import heroBg from "@/assets/hero-bg.jpg";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import { useLanguage } from "@/contexts/LanguageContext";

const Contact = () => {
  const { t } = useLanguage();
  const [searchParams] = useSearchParams();
  const initialSubject = searchParams.get("subject") || "";
  const [form, setForm] = useState({ name: "", email: "", subject: initialSubject, message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="relative min-h-[40vh] flex items-center overflow-hidden">
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
            {t("contact.label")}
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-4xl lg:text-5xl text-hero-foreground mb-4"
          >
            {t("contact.hero.title")}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-hero-muted text-lg max-w-2xl mx-auto leading-relaxed"
          >
            {t("contact.hero.subtitle")}
          </motion.p>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 px-6 lg:px-16 bg-background">
        <div className="mx-auto max-w-5xl grid md:grid-cols-5 gap-10">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5 }}
            className="md:col-span-2"
          >
            <h2 className="font-display text-2xl text-foreground mb-6">{t("contact.info.title")}</h2>
            <div className="space-y-5">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-accent mt-0.5 shrink-0" />
                <div>
                  <p className="font-medium text-foreground text-sm">{t("contact.info.locations")}</p>
                  <p className="text-muted-foreground text-sm">{t("contact.info.hamburg")}</p>
                  <p className="text-muted-foreground text-sm">{t("contact.info.dubai")}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-accent mt-0.5 shrink-0" />
                <div>
                  <p className="font-medium text-foreground text-sm">{t("contact.info.email")}</p>
                  <a href="mailto:hello@da-ai.com" className="text-accent text-sm hover:underline">
                    hello@da-ai.com
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Linkedin className="h-5 w-5 text-accent mt-0.5 shrink-0" />
                <div>
                  <p className="font-medium text-foreground text-sm">{t("contact.info.linkedin")}</p>
                  <a href="#" className="text-accent text-sm hover:underline">
                    {t("contact.info.connect")}
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-8 rounded-lg border border-accent/20 bg-accent/5 p-5">
              <p className="font-medium text-foreground text-sm mb-2">{t("contact.info.free_title")}</p>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {t("contact.info.free_text")}
              </p>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="md:col-span-3"
          >
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full text-center py-12">
                <div className="rounded-full bg-accent/10 p-4 mb-4">
                  <Send className="h-8 w-8 text-accent" />
                </div>
                <h3 className="font-display text-2xl text-foreground mb-2">{t("contact.form.sent_title")}</h3>
                <p className="text-muted-foreground text-sm max-w-sm">
                  {t("contact.form.sent_text")}
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1.5">
                    {t("contact.form.name")}
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    maxLength={100}
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full rounded-md border border-border bg-card px-4 py-2.5 text-sm text-card-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/50"
                    placeholder={t("contact.form.name_ph")}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1.5">
                    {t("contact.form.email")}
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    maxLength={255}
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full rounded-md border border-border bg-card px-4 py-2.5 text-sm text-card-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/50"
                    placeholder={t("contact.form.email_ph")}
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-1.5">
                    {t("contact.form.subject")}
                  </label>
                  <input
                    id="subject"
                    type="text"
                    required
                    maxLength={200}
                    value={form.subject}
                    onChange={(e) => setForm({ ...form, subject: e.target.value })}
                    className="w-full rounded-md border border-border bg-card px-4 py-2.5 text-sm text-card-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/50"
                    placeholder={t("contact.form.subject_ph")}
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1.5">
                    {t("contact.form.message")}
                  </label>
                  <textarea
                    id="message"
                    required
                    maxLength={1000}
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full rounded-md border border-border bg-card px-4 py-2.5 text-sm text-card-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 resize-none"
                    placeholder={t("contact.form.message_ph")}
                  />
                </div>
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 rounded bg-accent px-6 py-2.5 text-sm font-semibold text-accent-foreground hover:opacity-90 transition-opacity"
                >
                  {t("contact.form.send")} <Send className="h-4 w-4" />
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </section>

      <FooterSection />
    </div>
  );
};

export default Contact;
