import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Calendar, ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import Breadcrumbs from "@/components/Breadcrumbs";
import { blogPosts } from "@/data/blogPosts";
import { useLanguage } from "@/contexts/LanguageContext";
import { useDocumentMeta } from "@/hooks/useDocumentMeta";

const POSTS_PER_PAGE = 6;

const Blog = () => {
  const { t } = useLanguage();
  useDocumentMeta({ title: t("seo.blog.title"), description: t("seo.blog.description") });

  const [activeTag, setActiveTag] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);

  // Sort by date, newest first
  const allPosts = useMemo(() => {
    return [...blogPosts].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  }, []);

  const tags = useMemo(() => {
    const unique = Array.from(new Set(allPosts.map((p) => p.tag)));
    return unique;
  }, [allPosts]);

  const filteredPosts = useMemo(() => {
    if (!activeTag) return allPosts;
    return allPosts.filter((p) => p.tag === activeTag);
  }, [allPosts, activeTag]);

  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);
  const paginatedPosts = filteredPosts.slice(
    (currentPage - 1) * POSTS_PER_PAGE,
    currentPage * POSTS_PER_PAGE
  );

  const handleTagClick = (tag: string | null) => {
    setActiveTag(tag);
    setCurrentPage(1);
  };

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
            {t("blog.title")}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-hero-muted text-lg max-w-2xl mx-auto"
          >
            {t("blog.page_subtitle")}
          </motion.p>
        </div>
      </section>

      {/* Breadcrumbs */}
      <div className="bg-muted/50 border-b border-border px-6 lg:px-16 py-3">
        <div className="mx-auto max-w-5xl">
          <Breadcrumbs items={[{ label: t("breadcrumb.blog") }]} />
        </div>
      </div>

      {/* Filter & Post listing */}
      <section className="py-16 px-6 lg:px-16 bg-background">
        <div className="mx-auto max-w-5xl">
          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 mb-10 justify-center">
            <button
              onClick={() => handleTagClick(null)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
                activeTag === null
                  ? "bg-accent text-accent-foreground"
                  : "bg-muted text-muted-foreground hover:bg-accent/10 hover:text-accent"
              }`}
            >
              {t("blog.filter_all")}
            </button>
            {tags.map((tag) => (
              <button
                key={tag}
                onClick={() => handleTagClick(tag)}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
                  activeTag === tag
                    ? "bg-accent text-accent-foreground"
                    : "bg-muted text-muted-foreground hover:bg-accent/10 hover:text-accent"
                }`}
              >
                {tag}
              </button>
            ))}
          </div>

          {/* Posts Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {paginatedPosts.map((post, i) => (
              <motion.article
                key={post.slug}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group flex flex-col rounded-lg border border-border bg-card overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="h-1.5" style={{ backgroundColor: post.color }} />
                <div className="flex flex-col flex-1 p-6">
                  <span className="inline-block self-start rounded-full bg-accent/10 px-3 py-0.5 text-xs font-medium text-accent mb-3">
                    {post.tag}
                  </span>
                  <h2 className="font-display text-lg text-card-foreground mb-2 group-hover:text-accent transition-colors">
                    {t(post.titleKey)}
                  </h2>
                  <p className="text-muted-foreground text-sm flex-1 mb-4 leading-relaxed">
                    {t(post.excerptKey)}
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

          {/* No results */}
          {paginatedPosts.length === 0 && (
            <p className="text-center text-muted-foreground py-12">{t("blog.no_posts")}</p>
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex items-center justify-center gap-2 mt-12">
              <button
                onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                disabled={currentPage === 1}
                className="p-2 rounded-md border border-border text-muted-foreground hover:text-foreground hover:bg-muted disabled:opacity-30 disabled:pointer-events-none transition-colors"
                aria-label="Previous page"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`w-9 h-9 rounded-md text-sm font-medium transition-colors ${
                    page === currentPage
                      ? "bg-accent text-accent-foreground"
                      : "border border-border text-muted-foreground hover:text-foreground hover:bg-muted"
                  }`}
                >
                  {page}
                </button>
              ))}
              <button
                onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                disabled={currentPage === totalPages}
                className="p-2 rounded-md border border-border text-muted-foreground hover:text-foreground hover:bg-muted disabled:opacity-30 disabled:pointer-events-none transition-colors"
                aria-label="Next page"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          )}
        </div>
      </section>

      <FooterSection />
    </div>
  );
};

export default Blog;
