import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

// Maps blog tags to relevant service/package CTAs
const tagCtaMap: Record<string, { linkKey: string; href: string }> = {
  Enterprise: { linkKey: "crosslink.cta.services", href: "/services" },
  Integration: { linkKey: "crosslink.cta.services", href: "/services" },
  Roadmap: { linkKey: "crosslink.cta.packages", href: "/packages" },
  "AI & Cloud": { linkKey: "crosslink.cta.packages", href: "/packages" },
  "Solution Architecture": { linkKey: "crosslink.cta.services", href: "/services" },
};

interface ContextualCTAProps {
  tag?: string;
  type?: "blog" | "case-study";
}

const ContextualCTA = ({ tag, type = "blog" }: ContextualCTAProps) => {
  const { t } = useLanguage();

  const cta = type === "case-study"
    ? { linkKey: "crosslink.cta.services", href: "/services" }
    : tag && tagCtaMap[tag]
      ? tagCtaMap[tag]
      : { linkKey: "crosslink.cta.services", href: "/services" };

  return (
    <div className="mx-auto max-w-3xl px-6 lg:px-0 mb-10">
      <div className="rounded-lg border border-accent/20 bg-accent/5 p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <div className="flex-1">
          <p className="text-sm font-semibold text-foreground mb-1">
            {t("crosslink.heading")}
          </p>
          <p className="text-sm text-muted-foreground">
            {type === "case-study" ? t("crosslink.text.case") : t("crosslink.text.blog")}
          </p>
        </div>
        <div className="flex gap-3 shrink-0">
          <Link
            to={cta.href}
            className="inline-flex items-center gap-1.5 rounded bg-accent px-4 py-2 text-sm font-semibold text-accent-foreground hover:opacity-90 transition-opacity"
          >
            {t(cta.linkKey)} <ArrowRight className="h-3.5 w-3.5" />
          </Link>
          <Link
            to="/book"
            className="inline-flex items-center gap-1.5 rounded border border-border px-4 py-2 text-sm font-semibold text-foreground hover:bg-muted transition-colors"
          >
            {t("crosslink.cta.book")}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ContextualCTA;
