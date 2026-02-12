import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Search } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";

const SiteSearch = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const { t } = useLanguage();

  const pages = [
    { label: t("nav.services"), href: "/services" },
    { label: t("nav.services.consulting"), href: "/services/architecture-consulting-dubai" },
    { label: t("nav.services.enterprise"), href: "/services/enterprise-architecture-advisory-uae-dubai" },
    { label: t("nav.services.solution"), href: "/services/solution-software-architecture-consulting-dubai" },
    { label: t("nav.services.principal"), href: "/services/principal-architect-dubai-remote" },
    { label: t("nav.packages"), href: "/packages" },
    { label: t("nav.cases"), href: "/case-studies" },
    { label: t("nav.blog"), href: "/blog" },
    { label: t("nav.about"), href: "/about" },
    { label: t("nav.contact"), href: "/contact" },
  ];

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((o) => !o);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const goTo = (href: string) => {
    setOpen(false);
    navigate(href);
  };

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="flex items-center gap-1.5 rounded-full border border-hero-foreground/20 px-3 py-1.5 text-xs text-hero-foreground/80 hover:text-hero-foreground transition-colors"
        aria-label="Search"
      >
        <Search className="h-3.5 w-3.5" />
        <span className="hidden lg:inline">Search</span>
        <kbd className="hidden lg:inline-flex h-5 items-center gap-0.5 rounded border border-hero-foreground/20 px-1.5 font-mono text-[10px] text-hero-foreground/50">
          ⌘K
        </kbd>
      </button>

      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Search pages…" />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Pages">
            {pages.map((page) => (
              <CommandItem key={page.href} onSelect={() => goTo(page.href)}>
                {page.label}
              </CommandItem>
            ))}
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  );
};

export default SiteSearch;
