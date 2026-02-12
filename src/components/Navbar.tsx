import { useState, useRef, useEffect } from "react";
import { ChevronDown, Globe, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import Logo from "@/components/Logo";
import SiteSearch from "@/components/SiteSearch";
import { useLanguage, type Language } from "@/contexts/LanguageContext";

const Navbar = () => {
  const { t, lang, setLang } = useLanguage();
  const [langOpen, setLangOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const servicesRef = useRef<HTMLDivElement>(null);

  const servicesSub = [
    { label: t("nav.services.consulting"), href: "/services/architecture-consulting-dubai" },
    { label: t("nav.services.enterprise"), href: "/services/enterprise-architecture-advisory-uae-dubai" },
    { label: t("nav.services.solution"), href: "/services/solution-software-architecture-consulting-dubai" },
    { label: t("nav.services.principal"), href: "/services/principal-architect-dubai-remote" },
  ];

  const navItems = [
    { label: t("nav.packages"), href: "/packages" },
    { label: t("nav.cases"), href: "/case-studies" },
    { label: t("nav.blog"), href: "/blog" },
    { label: t("nav.about"), href: "/about" },
    { label: t("nav.contact"), href: "/contact" },
  ];

  const languages: { code: Language; label: string }[] = [
    { code: "en", label: "EN · Dubai / UAE" },
    { code: "de", label: "DE · DACH" },
  ];

  // Close dropdown on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (servicesRef.current && !servicesRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <nav className="absolute top-0 left-0 right-0 z-50 flex items-center justify-between px-6 lg:px-16 py-5">
      <Link to="/" className="shrink-0">
        <Logo variant="light" className="h-16" />
      </Link>

      {/* Desktop nav */}
      <div className="hidden md:flex items-center gap-8">
        {/* Services dropdown */}
        <div className="relative" ref={servicesRef}>
          <button
            onClick={() => setServicesOpen(!servicesOpen)}
            className="flex items-center gap-1 text-hero-foreground/80 hover:text-hero-foreground text-sm font-medium transition-colors"
          >
            {t("nav.services")}
            <ChevronDown className={`h-3.5 w-3.5 transition-transform ${servicesOpen ? "rotate-180" : ""}`} />
          </button>
          {servicesOpen && (
            <div className="absolute left-0 top-full mt-1 w-72 rounded-md bg-card shadow-xl border border-border z-50">
              <Link
                to="/services"
                className="flex w-full items-center px-4 py-2.5 text-sm text-card-foreground hover:bg-muted transition-colors first:rounded-t-md font-semibold border-b border-border"
                onClick={() => setServicesOpen(false)}
              >
                {t("nav.services")} — Overview
              </Link>
              {servicesSub.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className="flex w-full items-center px-4 py-2.5 text-sm text-card-foreground hover:bg-muted transition-colors last:rounded-b-md"
                  onClick={() => setServicesOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          )}
        </div>

        {navItems.map((item) => (
          <Link
            key={item.label}
            to={item.href}
            className="text-hero-foreground/80 hover:text-hero-foreground text-sm font-medium transition-colors"
          >
            {item.label}
          </Link>
        ))}

        <SiteSearch />

        <div className="relative">
          <button
            onClick={() => setLangOpen(!langOpen)}
            className="flex items-center gap-1.5 rounded-full border border-hero-foreground/20 px-3 py-1.5 text-xs text-hero-foreground/80 hover:text-hero-foreground transition-colors"
          >
            <Globe className="h-3.5 w-3.5" />
            {t("nav.lang_label")}
            <ChevronDown className="h-3 w-3" />
          </button>
          {langOpen && (
            <div className="absolute right-0 top-full mt-1 w-48 rounded-md bg-card shadow-xl border border-border z-50">
              {languages.map((l) => (
                <button
                  key={l.code}
                  className={`flex w-full items-center gap-2 px-4 py-2 text-sm transition-colors first:rounded-t-md last:rounded-b-md ${
                    lang === l.code
                      ? "text-accent bg-accent/10 font-semibold"
                      : "text-card-foreground hover:bg-muted"
                  }`}
                  onClick={() => {
                    setLang(l.code);
                    setLangOpen(false);
                  }}
                >
                  {l.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Mobile toggle */}
      <button
        className="md:hidden text-hero-foreground"
        onClick={() => setMobileOpen(!mobileOpen)}
      >
        {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="absolute top-full left-0 right-0 bg-hero p-6 md:hidden flex flex-col gap-4">
          {/* Services with sub-items */}
          <button
            className="flex items-center gap-1 text-hero-foreground/80 hover:text-hero-foreground text-sm font-medium text-left"
            onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
          >
            {t("nav.services")}
            <ChevronDown className={`h-3.5 w-3.5 transition-transform ${mobileServicesOpen ? "rotate-180" : ""}`} />
          </button>
          {mobileServicesOpen && (
            <div className="flex flex-col gap-2 pl-4">
              <Link
                to="/services"
                className="text-hero-foreground/70 hover:text-hero-foreground text-sm"
                onClick={() => setMobileOpen(false)}
              >
                Overview
              </Link>
              {servicesSub.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className="text-hero-foreground/70 hover:text-hero-foreground text-sm"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          )}

          {navItems.map((item) => (
            <Link
              key={item.label}
              to={item.href}
              className="text-hero-foreground/80 hover:text-hero-foreground text-sm font-medium"
              onClick={() => setMobileOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <div className="flex gap-2 mt-2">
            {languages.map((l) => (
              <button
                key={l.code}
                className={`px-3 py-1.5 rounded-full text-xs border transition-colors ${
                  lang === l.code
                    ? "border-accent text-accent font-semibold"
                    : "border-hero-foreground/20 text-hero-foreground/80"
                }`}
                onClick={() => {
                  setLang(l.code);
                  setMobileOpen(false);
                }}
              >
                {l.code.toUpperCase()}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
