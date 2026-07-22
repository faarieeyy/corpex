import TransitionLink from "./TransitionLink";

export default function Footer() {
  return (
    <footer className="bg-corpex-black text-corpex-white pt-24 pb-12 overflow-hidden relative">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-20">
          
          {/* Brand Info */}
          <div className="lg:col-span-1">
            <div className="flex items-baseline text-3xl tracking-tight mb-6">
              Corpex
              <div className="w-2.5 h-2.5 bg-corpex-gold rotate-45 ml-1"></div>
            </div>
            <p className="text-corpex-white/60 text-sm leading-relaxed max-w-sm">
              Your Business Growth Partner. Strategy, compliance, branding, and technology under one trusted partner.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider mb-6 text-corpex-white/40">Navigation</h4>
            <ul className="space-y-4">
              {['Home', 'About', 'Services', 'Industries', 'Insights', 'Contact'].map((item) => (
                <li key={item}>
                  <TransitionLink 
                    href={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                    className="text-sm font-medium hover:text-corpex-gold transition-colors inline-block"
                  >
                    {item}
                  </TransitionLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Services (High-level Groups) */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider mb-6 text-corpex-white/40">Services</h4>
            <ul className="space-y-4 text-sm text-corpex-white/80">
              <li>Setup & Compliance</li>
              <li>Finance & Advisory</li>
              <li>Branding & Creative</li>
              <li>Website & Technology</li>
              <li>Corporate, Print & Events</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
             <h4 className="text-xs font-bold uppercase tracking-wider mb-6 text-corpex-white/40">Contact Us</h4>
             <ul className="space-y-4 text-sm text-corpex-white/80">
              <li className="flex items-center">
                <span className="w-4 h-px bg-corpex-gold mr-3"></span>
                <TransitionLink href="/contact" className="hover:text-corpex-gold transition-colors">Start Your Growth Journey</TransitionLink>
              </li>
              <li className="flex items-center">
                <span className="w-4 h-px bg-corpex-gold mr-3"></span>
                <TransitionLink href="/contact" className="hover:text-corpex-gold transition-colors">Let&apos;s Talk</TransitionLink>
              </li>
             </ul>
          </div>

        </div>

        {/* Oversized Brand Statement */}
        <div className="border-t border-white/10 pt-12 flex flex-col md:flex-row justify-between items-center">
          <div className="font-serif text-2xl md:text-3xl font-bold tracking-tight mb-6 md:mb-0">
            YOUR BUSINESS GROWTH PARTNER.
          </div>
          <div className="text-xs text-corpex-white/40">
            Corpex Consulting
          </div>
        </div>
        <div className="mt-8 text-xs text-corpex-white/30">
          &copy; {new Date().getFullYear()} Corpex Consulting. All rights reserved.
        </div>
      </div>
      
      {/* Decorative oversized background text */}
      <div className="absolute -bottom-10 -right-10 text-[15vw] font-bold text-white/5 pointer-events-none tracking-tighter leading-none select-none">
        CORPEX.
      </div>
    </footer>
  );
}
