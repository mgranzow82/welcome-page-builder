import { ArrowRight, Calendar } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { blogPosts } from "@/data/blogPosts";

const BlogSection = () => {
  const { t } = useLanguage();

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
          {t("blog.title")}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-muted-foreground max-w-2xl mx-auto text-center mb-10 text-lg"
        >
          {t("blog.subtitle")}
        </motion.p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post, i) => (
            <motion.article
              key={post.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group flex flex-col rounded-lg border border-border bg-card overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="h-1.5 bg-accent" />
              <div className="flex flex-col flex-1 p-6">
                <span className="inline-block self-start rounded-full bg-accent/10 px-3 py-0.5 text-xs font-medium text-accent mb-3">
                  {post.tag}
                </span>
                <h3 className="font-display text-lg text-card-foreground mb-2 group-hover:text-accent transition-colors">
                  {t(`blog.post${i + 1}.title`)}
                </h3>
                <p className="text-muted-foreground text-sm flex-1 mb-4 leading-relaxed">
                  {t(`blog.post${i + 1}.excerpt`)}
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
                    {t("blog.read")} <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-accent font-semibold hover:underline"
          >
            {t("blog.all_posts")} <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
