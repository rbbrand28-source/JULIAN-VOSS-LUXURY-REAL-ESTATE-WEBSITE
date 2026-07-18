import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { NAV_ITEMS } from "@/lib/data";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <motion.header
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-700",
          scrolled
            ? "glass-panel border-b border-gold/10 py-3"
            : "bg-transparent py-6"
        )}
      >
        <div className="container flex items-center justify-between gap-6">
          <Link to="/" className="group flex items-center gap-3" aria-label="Julian Voss Legacy Estates — Home">
            <Monogram className="h-9 w-9 text-gold transition-transform duration-700 group-hover:rotate-[8deg]" />
            <div className="hidden flex-col leading-none sm:flex">
              <span className="font-serif text-lg tracking-wide text-ivory">Julian Voss</span>
              <span className="eyebrow text-[0.55rem]">Legacy Estates</span>
            </div>
          </Link>

          <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
            {NAV_ITEMS.slice(0, 7).map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === "/"}
                className={({ isActive }) =>
                  cn(
                    "link-gold text-[0.78rem] uppercase tracking-[0.22em] transition-colors duration-300",
                    isActive ? "text-gold" : "text-platinum/80 hover:text-ivory"
                  )
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Link
              to="/contact"
              className="hidden rounded-none border border-gold/40 px-5 py-2.5 text-[0.7rem] uppercase tracking-[0.25em] text-gold transition-all duration-500 hover:bg-gold hover:text-navy md:inline-block"
            >
              Begin Private Conversation
            </Link>
            <button
              onClick={() => setOpen(true)}
              className="inline-flex h-10 w-10 items-center justify-center text-ivory transition-colors hover:text-gold lg:hidden"
              aria-label="Open menu"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-[60] bg-navy-deep/95 backdrop-blur-xl lg:hidden"
          >
            <div className="flex items-center justify-between px-6 py-6">
              <Link to="/" className="flex items-center gap-3">
                <Monogram className="h-9 w-9 text-gold" />
                <div className="flex flex-col leading-none">
                  <span className="font-serif text-lg text-ivory">Julian Voss</span>
                  <span className="eyebrow text-[0.55rem]">Legacy Estates</span>
                </div>
              </Link>
              <button
                onClick={() => setOpen(false)}
                className="inline-flex h-10 w-10 items-center justify-center text-ivory hover:text-gold"
                aria-label="Close menu"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <nav className="mt-8 flex flex-col gap-1 px-6" aria-label="Mobile">
              {NAV_ITEMS.map((item, i) => (
                <motion.div
                  key={item.to}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + i * 0.05, duration: 0.5 }}
                >
                  <NavLink
                    to={item.to}
                    end={item.to === "/"}
                    className={({ isActive }) =>
                      cn(
                        "block border-b border-gold/10 py-5 font-serif text-2xl transition-colors",
                        isActive ? "text-gold" : "text-ivory/90 hover:text-gold"
                      )
                    }
                  >
                    {item.label}
                  </NavLink>
                </motion.div>
              ))}
              <Link
                to="/contact"
                className="mt-8 inline-block border border-gold/40 px-5 py-4 text-center text-[0.75rem] uppercase tracking-[0.25em] text-gold transition-all hover:bg-gold hover:text-navy"
              >
                Begin Private Conversation
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export function Monogram({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden="true">
      <circle cx="24" cy="24" r="23" stroke="currentColor" strokeWidth="0.6" opacity="0.4" />
      <path
        d="M14 14 L14 30 Q14 35 19 35 Q24 35 24 30 L24 14"
        stroke="currentColor"
        strokeWidth="1.2"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M34 14 L34 32 Q34 35 31 35 Q28 35 28 32"
        stroke="currentColor"
        strokeWidth="1.2"
        fill="none"
        strokeLinecap="round"
      />
      <path d="M24 24 L34 24" stroke="currentColor" strokeWidth="0.8" opacity="0.7" />
    </svg>
  );
}

