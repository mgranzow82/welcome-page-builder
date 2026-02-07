import { useState } from "react";
import { ChevronDown, Globe, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import Logo from "@/components/Logo";

const navItems = [
  { label: "Services", href: "/services" },
  { label: "Packages", href: "/packages" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "/contact" },
];

const Navbar = () => {
  const [langOpen, setLangOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="absolute top-0 left-0 right-0 z-50 flex items-center justify-between px-6 lg:px-16 py-5">
      <Link to="/" className="shrink-0">
        <Logo variant="light" className="h-16" />
      </Link>

      {/* Desktop nav */}
      <div className="hidden md:flex items-center gap-8">
        {navItems.map((item) =>
          item.href.startsWith("/") ? (
            <Link
              key={item.label}
              to={item.href}
              className="text-hero-foreground/80 hover:text-hero-foreground text-sm font-medium transition-colors"
            >
              {item.label}
            </Link>
          ) : (
            <a
              key={item.label}
              href={item.href}
              className="text-hero-foreground/80 hover:text-hero-foreground text-sm font-medium transition-colors"
            >
              {item.label}
            </a>
          )
        )}

        <div className="relative">
          <button
            onClick={() => setLangOpen(!langOpen)}
            className="flex items-center gap-1.5 rounded-full border border-hero-foreground/20 px-3 py-1.5 text-xs text-hero-foreground/80 hover:text-hero-foreground transition-colors"
          >
            <Globe className="h-3.5 w-3.5" />
            EN – Dubai/UAE
            <ChevronDown className="h-3 w-3" />
          </button>
          {langOpen && (
            <div className="absolute right-0 mt-2 w-48 rounded-md bg-card shadow-lg border border-border py-1">
              {[
                { flag: "🌐", label: "EN · Dubai / UAE" },
                { flag: "🇩🇪", label: "DE · Dach / DACH" },
                { flag: "🇦🇪", label: "AR · UAE / Arabic" },
              ].map((lang) => (
                <button
                  key={lang.label}
                  className="flex w-full items-center gap-2 px-4 py-2 text-sm text-card-foreground hover:bg-muted transition-colors"
                  onClick={() => setLangOpen(false)}
                >
                  <span>{lang.flag}</span>
                  {lang.label}
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
          {navItems.map((item) =>
            item.href.startsWith("/") ? (
              <Link
                key={item.label}
                to={item.href}
                className="text-hero-foreground/80 hover:text-hero-foreground text-sm font-medium"
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </Link>
            ) : (
              <a
                key={item.label}
                href={item.href}
                className="text-hero-foreground/80 hover:text-hero-foreground text-sm font-medium"
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </a>
            )
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
