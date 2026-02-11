import { useParams, Link, Navigate } from "react-router-dom";
import { ArrowLeft, Calendar, Tag } from "lucide-react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import { blogPosts } from "@/data/blogPosts";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) return <Navigate to="/blog" replace />;

  // Simple markdown-ish rendering: headings, bold, lists, paragraphs
  const renderContent = (raw: string) => {
    return raw.split("\n\n").map((block, i) => {
      const trimmed = block.trim();

      if (trimmed.startsWith("## ")) {
        return (
          <h2
            key={i}
            className="font-display text-2xl text-foreground mt-8 mb-3"
          >
            {trimmed.replace("## ", "")}
          </h2>
        );
      }

      // List block
      if (trimmed.startsWith("- ") || trimmed.startsWith("1. ")) {
        const items = trimmed.split("\n");
        const isOrdered = trimmed.startsWith("1.");
        const ListTag = isOrdered ? "ol" : "ul";
        return (
          <ListTag
            key={i}
            className={`${isOrdered ? "list-decimal" : "list-disc"} pl-6 space-y-1 text-muted-foreground leading-relaxed mb-4`}
          >
            {items.map((item, j) => (
              <li
                key={j}
                dangerouslySetInnerHTML={{
                  __html: item
                    .replace(/^[-\d.]+\s*/, "")
                    .replace(/\*\*(.*?)\*\*/g, "<strong class='text-foreground'>$1</strong>"),
                }}
              />
            ))}
          </ListTag>
        );
      }

      // Regular paragraph
      return (
        <p
          key={i}
          className="text-muted-foreground leading-relaxed mb-4"
          dangerouslySetInnerHTML={{
            __html: trimmed.replace(
              /\*\*(.*?)\*\*/g,
              "<strong class='text-foreground'>$1</strong>"
            ),
          }}
        />
      );
    });
  };

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-hero text-hero-foreground pt-28 pb-16 px-6 lg:px-16">
        <Navbar />
        <div className="mx-auto max-w-3xl">
          <Link
            to="/blog"
            className="inline-flex items-center gap-1.5 text-hero-muted hover:text-hero-foreground text-sm mb-6 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" /> Alle Beiträge
          </Link>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-4 text-sm text-hero-muted">
              <span className="flex items-center gap-1">
                <Calendar className="h-3.5 w-3.5" /> {post.date}
              </span>
              <span className="flex items-center gap-1">
                <Tag className="h-3.5 w-3.5" /> {post.tag}
              </span>
            </div>
            <h1 className="font-display text-3xl lg:text-4xl leading-tight">
              {post.title}
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <article className="py-14 px-6 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mx-auto max-w-3xl prose-lg"
        >
          {renderContent(post.content)}
        </motion.div>
      </article>

      {/* Back link */}
      <div className="px-6 lg:px-16 pb-14">
        <div className="mx-auto max-w-3xl">
          <Link
            to="/blog"
            className="inline-flex items-center gap-1.5 text-accent hover:underline font-semibold text-sm"
          >
            <ArrowLeft className="h-4 w-4" /> Zurück zur Übersicht
          </Link>
        </div>
      </div>

      <FooterSection />
    </div>
  );
};

export default BlogPost;
