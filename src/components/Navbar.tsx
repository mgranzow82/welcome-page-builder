import { useState } from "react";
import { ChevronDown, Globe, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import Logo from "@/components/Logo";
import { useLanguage, type Language } from "@/contexts/LanguageContext";

const Navbar = () => {
  const { t, lang, setLang } = useLanguage();
  const [langOpen, setLangOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = [
    { label: t("nav.services"), href: "/services" },
    { label: t("nav.packages"), href: "/packages" },
    { label: t("nav.blog"), href: "/blog" },
    { label: t("nav.about"), href: "/about" },
    { label: t("nav.contact"), href: "/contact" },
  ];

  const languages: { code: Language; label: string }[] = [
    { code: "en", label: "EN · Dubai / UAE" },
    { code: "de", label: "DE · DACH" },
  ];

  return (
    <nav className="absolute top-0 left-0 right-0 z-50 flex items-center justify-between px-6 lg:px-16 py-5">
      <Link to="/" className="shrink-0">
        <Logo variant="light" className="h-16" />
      </Link>

      {/* Desktop nav */}
      <div className="hidden md:flex items-center gap-8">
        {navItems.map((item) => (
          <Link
            key={item.label}
            to={item.href}
            className="text-hero-foreground/80 hover:text-hero-foreground text-sm font-medium transition-colors"
          >
            {item.label}
          </Link>
        ))}

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
