import { Link } from "react-router-dom";
import { ArrowRight, Calendar } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { blogPosts, BlogPost } from "@/data/blogPosts";
import { caseStudies, CaseStudy } from "@/data/caseStudies";

// Map blog tags to relevant case study industries
const tagToCaseStudyMap: Record<string, string[]> = {
  Enterprise: ["Banking", "TIC", "Rail"],
  Integration: ["Banking", "Gaming"],
  "AI & Cloud": ["TIC"],
  Roadmap: ["Rail", "Banking"],
  "Solution Architecture": ["Gaming", "TIC"],
};

// Map case study industries to relevant blog tags
const industryToTagMap: Record<string, string[]> = {
  Banking: ["Enterprise", "Integration"],
  TIC: ["Enterprise", "AI & Cloud"],
  Rail: ["Enterprise", "Roadmap"],
  Gaming: ["Integration", "Solution Architecture"],
};

interface RelatedContentProps {
  type: "blog" | "case-study";
  currentSlug: string;
  currentTag?: string;
  currentIndustry?: string;
}

const RelatedContent = ({ type, currentSlug, currentTag, currentIndustry }: RelatedContentProps) => {
  const { t } = useLanguage();

  let relatedPosts: BlogPost[] = [];
  let relatedCases: CaseStudy[] = [];

  if (type === "blog" && currentTag) {
    // Related blog posts: same tag, different slug
    relatedPosts = blogPosts
      .filter((p) => p.slug !== currentSlug && p.tag === currentTag)
      .slice(0, 2);

    // If not enough, add from other tags
    if (relatedPosts.length < 2) {
      const more = blogPosts
        .filter((p) => p.slug !== currentSlug && p.tag !== currentTag)
        .slice(0, 2 - relatedPosts.length);
      relatedPosts = [...relatedPosts, ...more];
    }

    // Related case studies based on tag
    const relevantIndustries = tagToCaseStudyMap[currentTag] || [];
    relatedCases = caseStudies
      .filter((cs) => relevantIndustries.includes(cs.industry))
      .slice(0, 2);
  }

  if (type === "case-study" && currentIndustry) {
    // Other case studies
    relatedCases = caseStudies
      .filter((cs) => cs.slug !== currentSlug)
      .slice(0, 2);

    // Related blog posts based on industry
    const relevantTags = industryToTagMap[currentIndustry] || [];
    relatedPosts = blogPosts
      .filter((p) => relevantTags.includes(p.tag) && p.contentKey && t(p.contentKey))
      .slice(0, 2);
  }

  if (relatedPosts.length === 0 && relatedCases.length === 0) return null;

  return (
    <section className="py-14 px-6 lg:px-16 bg-muted/30 border-t border-border">
      <div className="mx-auto max-w-5xl">
        <h2 className="font-display text-2xl text-foreground mb-8">
          {t("related.title")}
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6">
          {/* Related Blog Posts */}
          {relatedPosts.map((post, i) => (
            <motion.article
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="group rounded-lg border border-border bg-card overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="h-1" style={{ backgroundColor: post.color }} />
              <div className="p-5">
                <span className="inline-block rounded-full bg-accent/10 px-2.5 py-0.5 text-xs font-medium text-accent mb-2">
                  {post.tag}
                </span>
                <h3 className="font-display text-base text-card-foreground mb-2 group-hover:text-accent transition-colors line-clamp-2">
                  {t(post.titleKey)}
                </h3>
                <p className="text-muted-foreground text-sm line-clamp-2 mb-3">
                  {t(post.excerptKey)}
                </p>
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Calendar className="h-3 w-3" /> {post.date}
                  </span>
                  <Link
                    to={`/blog/${post.slug}`}
                    className="flex items-center gap-1 text-sm font-semibold text-accent hover:underline"
                  >
                    {t("blog.read")} <ArrowRight className="h-3 w-3" />
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}

          {/* Related Case Studies */}
          {relatedCases.map((cs, i) => (
            <motion.article
              key={cs.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: (relatedPosts.length + i) * 0.08 }}
              className="group rounded-lg border border-border bg-card overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="h-1" style={{ backgroundColor: cs.color }} />
              <div className="p-5">
                <span className="inline-block rounded-full bg-accent/10 px-2.5 py-0.5 text-xs font-medium text-accent mb-2">
                  {t(cs.industryKey)}
                </span>
                <h3 className="font-display text-base text-card-foreground mb-2 group-hover:text-accent transition-colors line-clamp-2">
                  {t(cs.titleKey)}
                </h3>
                <p className="text-muted-foreground text-sm line-clamp-2 mb-3">
                  {t(cs.teaserKey)}
                </p>
                <Link
                  to={`/case-studies/${cs.slug}`}
                  className="flex items-center gap-1 text-sm font-semibold text-accent hover:underline"
                >
                  {t("cases.read_more")} <ArrowRight className="h-3 w-3" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RelatedContent;
