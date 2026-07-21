"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function About() {
  const heroRef = useRef<HTMLHeadingElement>(null);
  const whyRef = useRef<HTMLElement>(null);
  const whyTextRef = useRef<HTMLDivElement>(null);
  const believeImgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Hero Entrance Animation
      if (heroRef.current) {
        gsap.fromTo(heroRef.current,
          { y: 50, opacity: 0, rotateX: -20 },
          { y: 0, opacity: 1, rotateX: 0, duration: 1.2, ease: "power4.out", delay: 0.2 }
        );
      }

      // Scroll reveal for "Why We Started" text
      if (whyRef.current && whyTextRef.current) {
        gsap.fromTo(whyTextRef.current.children, 
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            stagger: 0.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: whyRef.current,
              start: "top 70%",
            }
          }
        );
      }

      // Parallax for What We Believe image
      if (believeImgRef.current) {
        gsap.to(believeImgRef.current, {
          yPercent: 20,
          ease: "none",
          scrollTrigger: {
            trigger: believeImgRef.current.parentElement,
            start: "top bottom",
            end: "bottom top",
            scrub: 1
          }
        });
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="pt-32 bg-corpex-white">
      
      {/* Header */}
      <section className="container mx-auto px-6 md:px-12 pt-20 pb-12 overflow-hidden" style={{ perspective: '1000px' }}>
        <div className="w-4 h-4 bg-corpex-gold rotate-45 mb-8"></div>
        <h1 ref={heroRef} className="text-[var(--text-hero)] font-bold tracking-tight leading-[1.1] mb-8 origin-bottom">
          About Us.
        </h1>
      </section>

      {/* Why We Started - Editorial Split Screen */}
      <section ref={whyRef} className="border-t border-corpex-black/10 flex flex-col lg:flex-row min-h-screen">
        <div className="lg:w-1/2 p-12 md:p-24 flex flex-col justify-center border-r border-corpex-black/10">
          <h2 className="text-sm font-bold uppercase tracking-widest text-corpex-black/40 mb-16">
            Why We Started
          </h2>
          <div ref={whyTextRef}>
            <p className="text-2xl md:text-4xl font-serif leading-snug text-corpex-black/60 mb-12">
              Corpex wasn&apos;t built to be another name on a long list of vendors.
            </p>
            <p className="text-4xl md:text-6xl font-bold tracking-tight leading-[1.1]">
              It was built because businesses kept telling us the same thing — too many providers, not enough coordination. <span className="text-corpex-blue">So we became the solution.</span>
            </p>
          </div>
        </div>
        
        {/* Massive Architectural Image */}
        <div className="lg:w-1/2 relative min-h-[60vh] lg:min-h-screen overflow-hidden">
           <div 
             className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?q=80&w=1932&auto=format&fit=crop')] bg-cover bg-center"
             style={{ filter: "grayscale(20%) contrast(1.1)" }}
           ></div>
        </div>
      </section>

      {/* What We Believe - Dark Split Screen */}
      <section className="bg-corpex-black text-corpex-white flex flex-col lg:flex-row-reverse min-h-screen">
        <div className="lg:w-1/2 p-12 md:p-24 flex flex-col justify-center relative z-10 bg-corpex-black">
          <div className="text-corpex-gold font-bold tracking-widest text-xs uppercase mb-12 flex items-center">
            <span className="w-8 h-px bg-corpex-gold mr-4"></span>
            What We Believe
          </div>
          
          <h2 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.1] mb-12">
            A business doesn&apos;t need more service providers.
          </h2>
          <p className="text-2xl md:text-4xl font-serif text-corpex-white/80 max-w-2xl mb-16 italic leading-snug">
            "It needs one that understands the whole thing — and takes responsibility for it."
          </p>
          <div className="text-sm font-bold uppercase tracking-widest text-corpex-white/50">
            That&apos;s the only philosophy we operate on.
          </div>
        </div>

        {/* Parallax Image Window */}
        <div className="lg:w-1/2 relative min-h-[60vh] lg:min-h-screen overflow-hidden">
           <div 
             ref={believeImgRef}
             className="absolute -top-[20%] -bottom-[20%] w-full bg-[url('https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop')] bg-cover bg-center"
             style={{ filter: "grayscale(100%) brightness(0.6)" }}
           ></div>
           <div className="absolute inset-0 bg-corpex-blue mix-blend-overlay opacity-30"></div>
        </div>
      </section>

      {/* How We Think */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-6 md:px-12">
          <div className="mb-20">
            <h2 className="text-[var(--text-section)] font-bold tracking-tight">How We Think</h2>
          </div>
          
          <div className="space-y-0 border-t border-corpex-black/10">
            {[
              { title: "PARTNERSHIP OVER PROJECTS", desc: "We measure success in years, not invoices." },
              { title: "STRATEGY BEFORE EXECUTION", desc: "We don't do work until we understand why it matters." },
              { title: "RESULTS OVER PROMISES", desc: "We'd rather under-say and over-deliver." }
            ].map((value, i) => (
              <div key={i} className="group border-b border-corpex-black/10 py-12 md:py-20 flex flex-col md:flex-row md:items-center gap-8 hover:bg-corpex-black hover:text-white transition-all duration-700 cursor-default px-6 -mx-6">
                <div className="text-corpex-gold font-bold w-12 shrink-0 text-xl">0{i+1}</div>
                <h3 className="text-4xl md:text-6xl font-bold tracking-tight md:w-1/2 group-hover:text-corpex-gold transition-colors duration-500">
                  {value.title}
                </h3>
                <p className="text-xl md:text-2xl font-serif text-corpex-black/60 group-hover:text-white/80 md:w-1/2 transition-colors duration-500">
                  {value.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Where We're Headed */}
      <section className="py-40 bg-corpex-blue text-corpex-white text-center relative overflow-hidden">
        {/* Abstract Gold Accent */}
        <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-corpex-gold/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/4 pointer-events-none"></div>
        
        <div className="container mx-auto px-6 md:px-12 max-w-5xl relative z-10">
          <h2 className="text-sm font-bold uppercase tracking-widest text-corpex-white/50 mb-16">
            Where We&apos;re Headed
          </h2>
          <p className="text-3xl md:text-5xl font-serif leading-snug text-corpex-white/90 mb-20 max-w-4xl mx-auto">
            We&apos;re building toward one goal: becoming the most trusted business growth partner for ambitious companies in the region.
          </p>
          <div className="text-6xl md:text-[8rem] font-bold tracking-tighter leading-[0.9]">
            <span className="text-corpex-white/30 block mb-4">NOT THE BIGGEST.</span>
            <span className="text-corpex-gold block">THE MOST TRUSTED.</span>
          </div>
        </div>
      </section>

    </div>
  );
}
