import { Link } from "react-router-dom";
import { ArrowRight, Calendar } from "lucide-react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import { blogPosts } from "@/data/blogPosts";

const Blog = () => {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-hero text-hero-foreground pt-28 pb-16 px-6 lg:px-16">
        <div className="mx-auto max-w-4xl text-center">
          <Navbar />
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-display text-4xl lg:text-5xl mb-4"
          >
            Insights &amp; Perspectives
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-hero-muted text-lg max-w-2xl mx-auto"
          >
            Praktisches Denken über Architektur, AI und digitale Transformation.
          </motion.p>
        </div>
      </section>

      {/* Post listing */}
      <section className="py-16 px-6 lg:px-16 bg-background">
        <div className="mx-auto max-w-5xl grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, i) => (
            <motion.article
              key={post.slug}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group flex flex-col rounded-lg border border-border bg-card overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="h-1.5 bg-accent" />
              <div className="flex flex-col flex-1 p-6">
                <span className="inline-block self-start rounded-full bg-accent/10 px-3 py-0.5 text-xs font-medium text-accent mb-3">
                  {post.tag}
                </span>
                <h2 className="font-display text-lg text-card-foreground mb-2 group-hover:text-accent transition-colors">
                  {post.title}
                </h2>
                <p className="text-muted-foreground text-sm flex-1 mb-4 leading-relaxed">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between mt-auto">
                  <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                    <Calendar className="h-3 w-3" />
                    {post.date}
                  </span>
                  <Link
                    to={`/blog/${post.slug}`}
                    className="flex items-center gap-1 text-sm font-semibold text-accent hover:underline"
                  >
                    Lesen <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <FooterSection />
    </div>
  );
};

export default Blog;
