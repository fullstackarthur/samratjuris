import { MapPin, Mail, Phone } from 'lucide-react';

export function Footer() {
  return (
    <footer id="contact" className="relative bg-firm-surface border-t border-firm-border pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 mb-20">
          <div className="lg:col-span-5">
            <a href="#" className="font-display text-3xl font-bold tracking-tight text-firm-text block mb-6">
              SAMRAT<span className="text-firm-accent">.</span>JURIS
            </a>
            <p className="text-firm-muted leading-relaxed max-w-md">
              A modern, agile Indian law firm engineered for the pace of the new economy. Delivering high-caliber legal representation across corporate, civil, and personal law.
            </p>
          </div>

          <div className="lg:col-span-3">
            <h4 className="font-display text-sm font-bold text-firm-text uppercase tracking-widest mb-6">
              Offices
            </h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3 text-firm-muted">
                <MapPin className="w-5 h-5 text-firm-accent shrink-0 mt-0.5" />
                <span>Hyderabad, India</span>
              </div>
              <div className="flex items-start gap-3 text-firm-muted">
                <MapPin className="w-5 h-5 text-firm-accent shrink-0 mt-0.5" />
                <span>Delhi, India</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4">
            <h4 className="font-display text-sm font-bold text-firm-text uppercase tracking-widest mb-6">
              Contact
            </h4>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-firm-muted hover:text-firm-accent transition-colors">
                <Mail className="w-5 h-5 text-firm-accent shrink-0" />
                <a href="mailto:contact@samratjuris.com">contact@samratjuris.com</a>
              </div>
              <div className="flex items-center gap-3 text-firm-muted hover:text-firm-accent transition-colors">
                <Phone className="w-5 h-5 text-firm-accent shrink-0" />
                <a href="tel:+919704979934">+91 9704979934</a>
              </div>
            </div>
          </div>
        </div>

        <div className="h-px bg-firm-border mb-8" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-firm-muted">
          <p>&copy; {new Date().getFullYear()} Samrat Juris. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-firm-accent transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-firm-accent transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
