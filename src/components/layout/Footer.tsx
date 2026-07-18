import { Link } from "react-router-dom";
import { Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";
import { Monogram } from "./Header";
import { NAV_ITEMS } from "@/lib/data";

export function Footer() {
  return (
    <footer className="relative border-t border-gold/10 bg-navy-deep pt-20">
      <div className="container grid gap-14 pb-16 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
        <div>
          <Link to="/" className="flex items-center gap-3">
            <Monogram className="h-10 w-10 text-gold" />
            <div className="flex flex-col leading-none">
              <span className="font-serif text-xl text-ivory">Julian Voss</span>
              <span className="eyebrow text-[0.55rem]">Legacy Estates</span>
            </div>
          </Link>
          <p className="mt-6 max-w-xs text-sm leading-relaxed text-platinum/70">
            A solo practice advising the world's most discerning principals on
            the acquisition and disposition of exceptional estates.
          </p>
          <div className="mt-6 flex items-center gap-4">
            {[
              { Icon: Instagram, label: "Instagram" },
              { Icon: Linkedin, label: "LinkedIn" },
              { Icon: Mail, label: "Email" },
            ].map(({ Icon, label }) => (
              <a
                key={label}
                href="#"
                aria-label={label}
                className="inline-flex h-10 w-10 items-center justify-center border border-gold/15 text-platinum/70 transition-all duration-500 hover:border-gold/50 hover:text-gold"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="eyebrow mb-6">Navigate</h4>
          <ul className="space-y-3">
            {NAV_ITEMS.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className="link-gold text-sm text-platinum/75 hover:text-ivory"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="eyebrow mb-6">Practice</h4>
          <ul className="space-y-3 text-sm text-platinum/75">
            <li>Acquisitions</li>
            <li>Quiet Dispositions</li>
            <li>Legacy Structuring</li>
            <li>Portfolio Review</li>
            <li>Private Intelligence</li>
          </ul>
        </div>

        <div>
          <h4 className="eyebrow mb-6">Contact</h4>
          <ul className="space-y-4 text-sm text-platinum/80">
            <li className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-4 w-4 text-gold/70" />
              <span>14 Avenue de la Concorde<br />Monaco MC 98000</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="h-4 w-4 text-gold/70" />
              <span>+377 00 00 00 00</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="h-4 w-4 text-gold/70" />
              <span>office@julianvoss.legacy</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="hairline mx-auto max-w-7xl" />

      <div className="container flex flex-col items-center justify-between gap-4 py-8 text-xs text-platinum/50 sm:flex-row">
        <p>© {new Date().getFullYear()} Julian Voss | Legacy Estates. All estates fictional.</p>
        <p className="tracking-[0.2em] uppercase">Discretion · Permanence · Legacy</p>
      </div>
    </footer>
  );
}

