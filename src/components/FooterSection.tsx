import { Linkedin, Mail, MapPin } from "lucide-react";

const FooterSection = () => {
  return (
    <footer className="bg-[hsl(205,60%,10%)] py-12 px-6 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          {/* Brand */}
          <div>
            <div className="font-display text-2xl tracking-wide text-white mb-3">
              DA<span className="mx-1 text-accent">·</span>AI
            </div>
            <p className="text-sm text-[hsl(200,30%,65%)] leading-relaxed">
              Enterprise &amp; Solution Architecture for DACH &amp; UAE.
              Pragmatic. Decision-ready.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display text-sm text-white mb-3">Services</h4>
            <ul className="space-y-2 text-sm text-[hsl(200,30%,65%)]">
              <li><a href="#services" className="hover:text-white transition-colors">Enterprise Architecture</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Cloud Architecture</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Integration &amp; API</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">IT Assessments</a></li>
            </ul>
          </div>

          {/* Packages */}
          <div>
            <h4 className="font-display text-sm text-white mb-3">Packages</h4>
            <ul className="space-y-2 text-sm text-[hsl(200,30%,65%)]">
              <li><a href="#packages" className="hover:text-white transition-colors">Target Architecture &amp; Roadmap</a></li>
              <li><a href="#packages" className="hover:text-white transition-colors">Digital &amp; AI Clarity Check</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-sm text-white mb-3">Contact</h4>
            <ul className="space-y-2 text-sm text-[hsl(200,30%,65%)]">
              <li className="flex items-center gap-2">
                <MapPin className="h-3.5 w-3.5 shrink-0" />
                Hamburg &amp; Dubai
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-3.5 w-3.5 shrink-0" />
                <a href="mailto:hello@da-ai.com" className="hover:text-white transition-colors">hello@da-ai.com</a>
              </li>
              <li className="flex items-center gap-2">
                <Linkedin className="h-3.5 w-3.5 shrink-0" />
                <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="h-px bg-white/10 mb-6" />
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[hsl(200,30%,55%)]">
          <p>&copy; {new Date().getFullYear()} DA·AI Consulting. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Imprint</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
