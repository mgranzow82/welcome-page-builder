import { useNavigate } from "react-router-dom";
import { ArrowRight, Calendar } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { blogPosts, BlogPost } from "@/data/blogPosts";
import { caseStudies, CaseStudy } from "@/data/caseStudies";
import { getTagColor, getIndustryColor } from "@/data/categoryColors";

// Map blog tags to relevant case study industries
const tagToCaseStudyMap: Record<string, string[]> = {
  Enterprise: ["Banking", "TIC", "Rail", "Insurance", "Retail"],
  Integration: ["Banking", "Gaming", "Retail"],
  "AI & Cloud": ["TIC", "Insurance"],
  Roadmap: ["Rail", "Banking"],
  "Solution Architecture": ["Gaming", "TIC", "Retail"],
};

// Map case study industries to relevant blog tags
const industryToTagMap: Record<string, string[]> = {
  Banking: ["Enterprise", "Integration"],
  TIC: ["Enterprise", "AI & Cloud"],
  Rail: ["Enterprise", "Roadmap"],
  Gaming: ["Integration", "Solution Architecture"],
  Insurance: ["AI & Cloud", "Enterprise"],
  Retail: ["Integration", "Solution Architecture"],
};

interface RelatedContentProps {
  type: "blog" | "case-study";
  currentSlug: string;
  currentTag?: string;
  currentIndustry?: string;
}

const RelatedContent = ({ type, currentSlug, currentTag, currentIndustry }: RelatedContentProps) => {
  const { t } = useLanguage();
  const navigate = useNavigate();

  let relatedPosts: BlogPost[] = [];
  let relatedCases: CaseStudy[] = [];

  if (type === "blog" && currentTag) {
    relatedPosts = blogPosts
      .filter((p) => p.slug !== currentSlug && p.tag === currentTag)
      .slice(0, 2);

    if (relatedPosts.length < 2) {
      const more = blogPosts
        .filter((p) => p.slug !== currentSlug && p.tag !== currentTag)
        .slice(0, 2 - relatedPosts.length);
      relatedPosts = [...relatedPosts, ...more];
    }

    const relevantIndustries = tagToCaseStudyMap[currentTag] || [];
    relatedCases = caseStudies
      .filter((cs) => relevantIndustries.includes(cs.industry))
      .slice(0, 2);
  }

  if (type === "case-study" && currentIndustry) {
    relatedCases = caseStudies
      .filter((cs) => cs.slug !== currentSlug)
      .slice(0, 2);

    const relevantTags = industryToTagMap[currentIndustry] || [];
    relatedPosts = blogPosts
      .filter((p) => relevantTags.includes(p.tag) && p.contentKey && t(p.contentKey))
      .slice(0, 2);
  }

  // Limit total to max 4
  const totalItems = relatedPosts.length + relatedCases.length;
  if (totalItems > 4) {
    const excessPosts = totalItems - 4;
    relatedPosts = relatedPosts.slice(0, relatedPosts.length - excessPosts);
  }

  if (relatedPosts.length === 0 && relatedCases.length === 0) return null;

  const handleNavigate = (path: string) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: "instant" });
  };

  return (
    <section className="py-14 px-6 lg:px-16 bg-muted/30 border-t border-border">
      <div className="mx-auto max-w-5xl">
        <h2 className="font-display text-2xl text-foreground mb-8">
          {t("related.title")}
        </h2>

        <div className="grid sm:grid-cols-2 gap-6">
          {/* Related Blog Posts */}
          {relatedPosts.map((post, i) => (
            <motion.article
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              onClick={() => handleNavigate(`/blog/${post.slug}`)}
              className="group cursor-pointer rounded-lg border border-border bg-card overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="h-1" style={{ backgroundColor: getTagColor(post.tag) }} />
              <div className="p-5">
                <span
                  className="inline-block rounded-full px-2.5 py-0.5 text-xs font-medium mb-2"
                  style={{ backgroundColor: getTagColor(post.tag) + "18", color: getTagColor(post.tag) }}
                >
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
                  <span className="flex items-center gap-1 text-sm font-semibold text-accent">
                    {t("blog.read")} <ArrowRight className="h-3 w-3" />
                  </span>
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
              onClick={() => handleNavigate(`/case-studies/${cs.slug}`)}
              className="group cursor-pointer rounded-lg border border-border bg-card overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="h-1" style={{ backgroundColor: getIndustryColor(cs.industry) }} />
              <div className="p-5">
                <span
                  className="inline-block rounded-full px-2.5 py-0.5 text-xs font-medium mb-2"
                  style={{ backgroundColor: getIndustryColor(cs.industry) + "18", color: getIndustryColor(cs.industry) }}
                >
                  {t(cs.industryKey)}
                </span>
                <h3 className="font-display text-base text-card-foreground mb-2 group-hover:text-accent transition-colors line-clamp-2">
                  {t(cs.titleKey)}
                </h3>
                <p className="text-muted-foreground text-sm line-clamp-2 mb-3">
                  {t(cs.teaserKey)}
                </p>
                <span className="flex items-center gap-1 text-sm font-semibold text-accent">
                  {t("cases.read_more")} <ArrowRight className="h-3 w-3" />
                </span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RelatedContent;
