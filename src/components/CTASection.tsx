import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";

const CTASection = () => {
  return (
    <section id="contact" className="relative py-20 px-6 lg:px-16 overflow-hidden">
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
          className="font-display text-3xl lg:text-4xl text-hero-foreground mb-6"
        >
          Start with a 30-minute consultation
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-hero-muted text-lg mb-8 leading-relaxed"
        >
          If you're at a point where "something needs to change," but it's unclear what exactly, let's talk.
          In a free initial conversation, we clarify your current situation, your goals, and the right next steps.
        </motion.p>
        <motion.a
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          href="#"
          className="inline-block rounded bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground hover:opacity-90 transition-opacity"
        >
          Book a Free Call
        </motion.a>
      </div>
    </section>
  );
};

export default CTASection;
