import { Link } from "react-router-dom";
import { ChevronRight, Home } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  variant?: "light" | "dark";
}

const Breadcrumbs = ({ items, variant = "dark" }: BreadcrumbsProps) => {
  const { t } = useLanguage();

  const allItems: BreadcrumbItem[] = [
    { label: t("breadcrumb.home"), href: "/" },
    ...items,
  ];

  // JSON-LD structured data for SEO
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: allItems.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.label,
      ...(item.href ? { item: `https://da-ai.co${item.href}` } : {}),
    })),
  };

  const textColor = variant === "light" ? "text-hero-muted" : "text-muted-foreground";
  const activeColor = variant === "light" ? "text-hero-foreground" : "text-foreground";
  const hoverColor = variant === "light" ? "hover:text-hero-foreground" : "hover:text-foreground";
  const separatorColor = variant === "light" ? "text-hero-muted/40" : "text-muted-foreground/40";

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-xs flex-wrap">
        {allItems.map((item, i) => {
          const isLast = i === allItems.length - 1;
          const isHome = i === 0;

          return (
            <span key={i} className="flex items-center gap-1.5">
              {i > 0 && <ChevronRight className={`h-3 w-3 ${separatorColor} shrink-0`} />}
              {isLast ? (
                <span className={`${activeColor} font-medium`}>{item.label}</span>
              ) : item.href ? (
                <Link
                  to={item.href}
                  className={`${textColor} ${hoverColor} transition-colors flex items-center gap-1`}
                >
                  {isHome && <Home className="h-3 w-3" />}
                  {!isHome && item.label}
                </Link>
              ) : (
                <span className={textColor}>{item.label}</span>
              )}
            </span>
          );
        })}
      </nav>
    </>
  );
};

export default Breadcrumbs;
