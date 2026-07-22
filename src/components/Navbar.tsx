"use client";

import { useEffect, useState } from "react";
import TransitionLink from "./TransitionLink";
import MagneticButton from "./MagneticButton";
import gsap from "gsap";
import clsx from "clsx";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";

const links = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Industries", href: "/industries" },
  { name: "Insights", href: "/insights" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const pathname = usePathname();
  
  const isDarkPage = pathname === "/contact" || pathname === "/industries";
  const isNavDark = scrolled || (isDarkPage && !scrolled);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Floating pill logic
      if (currentScrollY > 50) {
        setScrolled(true);
        // Hide on scroll down, show on scroll up
        if (currentScrollY > lastScrollY && currentScrollY > 200) {
          setIsVisible(false);
        } else {
          setIsVisible(true);
        }
      } else {
        setScrolled(false);
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    if (mobileMenuOpen) {
      gsap.fromTo(".mobile-menu-item", 
        { y: 50, opacity: 0 }, 
        { y: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: "power3.out", delay: 0.2 }
      );
    }
  }, [mobileMenuOpen]);

  return (
    <>
      <header
        className={clsx(
          "fixed top-0 left-0 w-full z-50 transition-transform duration-500 flex justify-center pt-6 px-6 pointer-events-none",
          !isVisible && "-translate-y-full"
        )}
      >
        <div 
          className={clsx(
            "pointer-events-auto flex items-center justify-between transition-all duration-700",
            scrolled 
              ? "bg-corpex-black/90 backdrop-blur-md shadow-2xl rounded-full py-2 px-6 w-full max-w-4xl border border-white/10" 
              : "w-full max-w-7xl py-2"
          )}
        >
          {/* Logo */}
          <TransitionLink href="/" className="relative z-[60] magnetic group inline-block">
            <div className={clsx("flex items-baseline text-2xl tracking-tight transition-colors duration-300", 
              (isNavDark && !mobileMenuOpen) ? "text-corpex-white" : "text-corpex-black hover:text-corpex-gold"
            )}>
              Corpex
              <div className="w-2 h-2 bg-corpex-gold rotate-45 ml-1 transition-transform group-hover:scale-150"></div>
            </div>
          </TransitionLink>

          {/* Desktop Nav */}
          <nav className={clsx("hidden lg:flex items-center space-x-8 transition-opacity duration-500", scrolled ? "opacity-100" : "opacity-0 absolute pointer-events-none")}>
            {links.map((link) => (
              <TransitionLink
                key={link.name}
                href={link.href}
                className="text-xs font-bold uppercase tracking-widest hover:text-white transition-colors magnetic inline-block"
                style={{ color: '#FFB800' }}
              >
                {link.name}
              </TransitionLink>
            ))}
          </nav>

          {/* Desktop CTA & Menu Toggle (Unscrolled) */}
          <div className="hidden lg:flex items-center space-x-8">
            {!scrolled && links.map((link) => (
              <TransitionLink
                key={link.name}
                href={link.href}
                className="text-xs font-bold uppercase tracking-widest hover:text-white transition-colors magnetic inline-block"
                style={{ color: '#FFB800' }}
              >
                {link.name}
              </TransitionLink>
            ))}
            
            <MagneticButton>
              <TransitionLink
                href="/contact"
                className={clsx(
                  "px-6 py-3 text-xs font-bold uppercase tracking-widest transition-all duration-300 flex items-center group rounded-full",
                  isNavDark 
                    ? "bg-white hover:bg-corpex-gold" 
                    : "bg-corpex-black hover:bg-corpex-gold"
                )}
                style={{ color: isNavDark ? '#111113' : '#FFFFFF' }}
              >
                Let&apos;s Talk
              </TransitionLink>
            </MagneticButton>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="lg:hidden relative z-[60] p-2 magnetic"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className={clsx("w-6 h-6", isNavDark ? "text-corpex-white" : "text-corpex-black")} />
            ) : (
              <Menu className={clsx("w-6 h-6", isNavDark ? "text-corpex-white" : "text-corpex-black")} />
            )}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <div 
        className={clsx(
          "fixed inset-0 bg-corpex-white z-40 flex flex-col justify-center px-6 transition-transform duration-700 ease-[cubic-bezier(0.7,0,0.3,1)]",
          mobileMenuOpen ? "translate-y-0" : "-translate-y-full"
        )}
      >
        <div className="flex flex-col space-y-6 text-4xl md:text-6xl font-bold tracking-tight">
          {links.map((link) => (
            <div key={link.name} className="mobile-menu-item opacity-0">
              <TransitionLink
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-corpex-black hover:text-corpex-gold transition-colors w-fit block"
              >
                {link.name}
              </TransitionLink>
            </div>
          ))}
        </div>
        <div className="mt-16 mobile-menu-item opacity-0">
           <TransitionLink
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="inline-flex items-center px-8 py-4 bg-corpex-black text-white font-bold text-lg rounded-full hover:bg-corpex-gold transition-colors duration-300"
            >
              Let&apos;s Talk
              <div className="w-2 h-2 bg-corpex-gold rotate-45 ml-3"></div>
            </TransitionLink>
        </div>
      </div>
    </>
  );
}
