import { ArrowRight, Calendar } from "lucide-react";
import { motion } from "framer-motion";

const posts = [
  {
    title: "Why Enterprise Architecture Matters in 2026",
    excerpt: "How structured architecture decisions prevent costly rework and accelerate digital transformation across DACH enterprises.",
    date: "Feb 3, 2026",
    tag: "Enterprise",
  },
  {
    title: "AI-Ready Infrastructure: A Pragmatic Guide",
    excerpt: "Moving beyond buzzwords — concrete steps to prepare your IT landscape for meaningful AI integration.",
    date: "Jan 22, 2026",
    tag: "AI & Cloud",
  },
  {
    title: "Integration Patterns for the Modern Enterprise",
    excerpt: "Event-driven, API-first or hybrid? Choosing the right integration strategy for your organization.",
    date: "Jan 10, 2026",
    tag: "Integration",
  },
];

const BlogSection = () => {
  return (
    <section id="blog" className="py-12 px-6 lg:px-16 bg-muted/50">
      <div className="mx-auto max-w-7xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="font-display text-3xl lg:text-4xl text-foreground text-center mb-4"
        >
          Insights &amp; Perspectives
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-muted-foreground max-w-2xl mx-auto text-center mb-10 text-lg"
        >
          Practical thinking on architecture, AI, and digital transformation.
        </motion.p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post, i) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group flex flex-col rounded-lg border border-border bg-card overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              {/* Color bar */}
              <div className="h-1.5 bg-accent" />

              <div className="flex flex-col flex-1 p-6">
                <span className="inline-block self-start rounded-full bg-accent/10 px-3 py-0.5 text-xs font-medium text-accent mb-3">
                  {post.tag}
                </span>
                <h3 className="font-display text-lg text-card-foreground mb-2 group-hover:text-accent transition-colors">
                  {post.title}
                </h3>
                <p className="text-muted-foreground text-sm flex-1 mb-4 leading-relaxed">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between mt-auto">
                  <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                    <Calendar className="h-3 w-3" />
                    {post.date}
                  </span>
                  <a
                    href="#"
                    className="flex items-center gap-1 text-sm font-semibold text-accent hover:underline"
                  >
                    Read <ArrowRight className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
