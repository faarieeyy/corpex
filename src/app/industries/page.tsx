"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import gsap from "gsap";

export default function IndustriesPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(".industry-reveal", {
        y: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: "power3.out",
        delay: 0.2
      });
    }, containerRef);
    
    return () => ctx.revert();
  }, []);

  return (
    <main ref={containerRef} className="bg-corpex-black text-corpex-white min-h-screen font-sans pt-32 selection:bg-corpex-gold selection:text-corpex-black flex flex-col justify-between">
      
      <section className="py-32 px-6 md:px-12 relative overflow-hidden min-h-[80vh] flex items-center">
        {/* Full Bleed Background Image */}
        <div className="absolute inset-0 z-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img 
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2000&auto=format&fit=crop" 
            alt="Corporate Industries" 
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-corpex-black via-corpex-black/60 to-transparent"></div>
        </div>

        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Title Section */}
            <div>
              <span className="industry-reveal text-xs font-bold uppercase tracking-[0.3em] text-corpex-gold block mb-6">INDUSTRIES</span>
              <h1 className="industry-reveal text-5xl md:text-8xl font-bold tracking-tighter uppercase leading-[0.85] text-white mb-8">
                Tailored Industry<br/>
                <span className="text-corpex-gold italic font-serif lowercase tracking-normal text-6xl md:text-9xl">Solutions.</span>
              </h1>
            </div>
            
            {/* CTA Card */}
            <div className="industry-reveal p-10 md:p-12 rounded-[2.5rem] bg-white/5 backdrop-blur-md border border-white/10 shadow-2xl">
              <h2 className="text-2xl font-bold uppercase tracking-tight text-corpex-gold mb-4">
                Cross-Sector Expertise
              </h2>
              <p className="font-serif text-white/70 text-lg leading-relaxed mb-8">
                We partner with ambitious companies across key regional sectors. Contact our team to discuss your specific industry requirements and compliance frameworks.
              </p>
              
              <Link 
                href="/contact"
                className="inline-flex items-center space-x-4 bg-corpex-gold text-corpex-black px-8 py-4 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-white transition-all duration-300"
              >
                <span>Discuss Your Industry</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

          </div>
        </div>
      </section>

    </main>
  );
}
