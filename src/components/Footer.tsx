import TransitionLink from "./TransitionLink";

export default function Footer() {
  return (
    <footer className="bg-corpex-black text-corpex-white pt-24 pb-12 overflow-hidden relative">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-20">
          
          {/* Brand Info */}
          <div className="lg:col-span-1">
            <div className="flex items-baseline text-3xl tracking-tight mb-6">
              Corp<span className="font-bold">ex</span>
              <div className="w-2.5 h-2.5 bg-corpex-gold rotate-45 ml-1"></div>
            </div>
            <p className="text-corpex-white/60 text-sm leading-relaxed max-w-sm">
              Your dedicated growth partner for strategy, compliance, branding, technology, and more. One partner. Every function. One person to call.
            </p>
            <div className="flex space-x-6 mt-8 text-sm font-bold tracking-widest text-corpex-white/60">
              <a href="#" className="hover:text-corpex-white transition-colors">LI</a>
              <a href="#" className="hover:text-corpex-white transition-colors">IG</a>
              <a href="#" className="hover:text-corpex-white transition-colors">FB</a>
            </div>
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

          {/* Services (Abbreviated) */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider mb-6 text-corpex-white/40">Services</h4>
            <ul className="space-y-4 text-sm text-corpex-white/80">
              <li>Setup & Compliance</li>
              <li>Finance & Advisory</li>
              <li>Branding & Creative</li>
              <li>Technology</li>
              <li>Corporate Services</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
             <h4 className="text-xs font-bold uppercase tracking-wider mb-6 text-corpex-white/40">Contact Us</h4>
             <ul className="space-y-4 text-sm text-corpex-white/80">
              <li className="flex items-center">
                <span className="w-4 h-px bg-corpex-gold mr-3"></span>
                +971 50 123 4567
              </li>
              <li className="flex items-center">
                <span className="w-4 h-px bg-corpex-gold mr-3"></span>
                hello@corpex.ae
              </li>
              <li className="flex items-center">
                <span className="w-4 h-px bg-corpex-gold mr-3"></span>
                Dubai, UAE
              </li>
             </ul>
          </div>

        </div>

        {/* Oversized Brand Statement */}
        <div className="border-t border-white/10 pt-12 flex flex-col md:flex-row justify-between items-center">
          <div className="font-serif text-2xl md:text-4xl font-bold tracking-tight mb-6 md:mb-0">
            YOUR BUSINESS GROWTH PARTNER.
          </div>
          <div className="flex space-x-6 text-xs text-corpex-white/40">
            <a href="#" className="hover:text-corpex-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-corpex-white transition-colors">Terms of Use</a>
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
