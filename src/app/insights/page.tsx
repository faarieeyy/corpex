"use client";

import TransitionLink from "@/components/TransitionLink";
import MagneticButton from "@/components/MagneticButton";
import { ArrowRight } from "lucide-react";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Insights() {
  const heroRef = useRef<HTMLHeadingElement>(null);
  const featuredRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();
      
      // Hero
      if (heroRef.current) {
        tl.fromTo(heroRef.current,
          { y: 50, opacity: 0 },
          { y: 0, opacity: 1, duration: 1, ease: "power3.out", delay: 0.2 }
        );
      }

      // Featured Article
      if (featuredRef.current) {
        tl.fromTo(featuredRef.current,
          { y: 50, opacity: 0 },
          { y: 0, opacity: 1, duration: 1, ease: "power3.out" },
          "-=0.5"
        );
      }

      // Grid Articles
      if (gridRef.current) {
        const articles = gsap.utils.toArray(".insight-card");
        gsap.fromTo(articles,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: gridRef.current,
              start: "top 80%",
            }
          }
        );
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="pt-32 pb-32 bg-corpex-white">
      
      {/* Header */}
      <section className="container mx-auto px-6 md:px-12 pt-20 pb-16 overflow-hidden">
        <div className="w-4 h-4 bg-corpex-gold rotate-45 mb-8"></div>
        <h1 ref={heroRef} className="text-[var(--text-hero)] font-bold tracking-tight leading-[1.1] mb-8">
          Insights.
        </h1>
        <p className="text-[var(--text-sub)] font-serif text-corpex-black/70 max-w-3xl leading-relaxed">
          Notes on business, growth, and the decisions that shape both.
        </p>
      </section>

      {/* Featured Article */}
      <section className="container mx-auto px-6 md:px-12 mb-32">
        <div ref={featuredRef} className="border-t border-corpex-black/10 pt-12 group cursor-pointer">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
            
            {/* Cinematic Editorial Image */}
            <div className="lg:w-1/2 aspect-[4/3] relative overflow-hidden group-hover:shadow-2xl transition-shadow duration-700">
               <div 
                 className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center transition-transform duration-1000 group-hover:scale-105"
                 style={{ filter: "grayscale(50%)" }}
               ></div>
               <div className="absolute inset-0 bg-corpex-blue mix-blend-overlay opacity-30"></div>
            </div>

            <div className="lg:w-1/2 flex flex-col justify-center">
              <div className="flex items-center gap-4 text-xs font-bold uppercase tracking-widest text-corpex-black/50 mb-8">
                <span>Strategy</span>
                <span className="w-1 h-1 bg-corpex-gold rotate-45"></span>
                <span>Oct 12, 2026</span>
                <span className="w-1 h-1 bg-corpex-gold rotate-45"></span>
                <span>5 Min Read</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] mb-8 group-hover:text-corpex-blue transition-colors duration-300">
                The real cost of fragmented vendors.
              </h2>
              
              <p className="text-xl font-serif text-corpex-black/70 leading-relaxed mb-12">
                Why juggling separate providers for licensing, identity, and marketing is the invisible ceiling on your company's growth potential.
              </p>

              <MagneticButton>
                <TransitionLink href="#" className="inline-flex items-center space-x-4 border border-corpex-black rounded-full px-6 py-3 hover:bg-corpex-black hover:text-white transition-all duration-300">
                  <span className="font-bold text-sm uppercase tracking-widest">Read Article</span>
                  <ArrowRight className="w-4 h-4" />
                </TransitionLink>
              </MagneticButton>
            </div>

          </div>
        </div>
      </section>

      {/* Secondary Articles Grid */}
      <section className="container mx-auto px-6 md:px-12">
        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24">
          
          {/* Article 1 */}
          <div className="insight-card group cursor-pointer border-t border-corpex-black/10 pt-8 flex flex-col">
            <div className="aspect-[3/4] w-full mb-8 overflow-hidden relative">
              <div 
                className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=1969&auto=format&fit=crop')] bg-cover bg-center transition-transform duration-1000 group-hover:scale-105"
                style={{ filter: "grayscale(100%)" }}
              ></div>
              {/* Image Reveal Mask */}
              <div className="absolute inset-0 bg-corpex-white origin-top transition-transform duration-700 ease-[cubic-bezier(0.7,0,0.3,1)] group-hover:scale-y-0"></div>
            </div>
            <div className="flex items-center gap-4 text-xs font-bold uppercase tracking-widest text-corpex-black/50 mb-6">
              <span>Setup</span>
              <span className="w-1 h-1 bg-corpex-gold rotate-45"></span>
              <span>Sep 28, 2026</span>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold tracking-tight leading-[1.2] mb-6 group-hover:text-corpex-blue transition-colors">
              How to evaluate a business setup partner in the UAE.
            </h3>
            <p className="font-serif text-corpex-black/70 leading-relaxed mb-8 flex-grow">
              Moving beyond cost to assess reliability, speed, and long-term strategic support.
            </p>
          </div>

          {/* Article 2 */}
          <div className="insight-card group cursor-pointer border-t border-corpex-black/10 pt-8 flex flex-col mt-0 md:mt-24">
            <div className="aspect-[3/4] w-full mb-8 overflow-hidden relative">
              <div 
                className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1620803525297-fa16d7a5b3a4?q=80&w=1935&auto=format&fit=crop')] bg-cover bg-center transition-transform duration-1000 group-hover:scale-105"
                style={{ filter: "grayscale(100%)" }}
              ></div>
              {/* Image Reveal Mask */}
              <div className="absolute inset-0 bg-corpex-white origin-top transition-transform duration-700 ease-[cubic-bezier(0.7,0,0.3,1)] group-hover:scale-y-0 delay-100"></div>
            </div>
            <div className="flex items-center gap-4 text-xs font-bold uppercase tracking-widest text-corpex-black/50 mb-6">
              <span>Compliance</span>
              <span className="w-1 h-1 bg-corpex-gold rotate-45"></span>
              <span>Sep 15, 2026</span>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold tracking-tight leading-[1.2] mb-6 group-hover:text-corpex-blue transition-colors">
              What a VAT deadline actually requires.
            </h3>
            <p className="font-serif text-corpex-black/70 leading-relaxed mb-8 flex-grow">
              Demystifying the compliance timeline and preparing your financial systems for absolute accuracy.
            </p>
          </div>

        </div>
      </section>

    </div>
  );
}
