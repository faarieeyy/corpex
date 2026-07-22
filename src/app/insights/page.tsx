"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const topicDirections = [
  { title: "How to Evaluate a Business Setup Partner", img: "https://images.unsplash.com/photo-1556761175-5973dc0f32b7?q=80&w=2000&auto=format&fit=crop" },
  { title: "What a VAT Deadline Actually Requires", img: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2000&auto=format&fit=crop" },
  { title: "The Real Cost of Fragmented Vendors", img: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2000&auto=format&fit=crop" },
  { title: "What “Business Growth” Means Beyond Revenue", img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2000&auto=format&fit=crop" }
];

export default function InsightsPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Hero reveal
      gsap.from(".hero-reveal", {
        y: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: "power3.out",
        delay: 0.1
      });

      gsap.from(".insight-card", {
        scrollTrigger: {
          trigger: ".insights-grid",
          start: "top 80%",
        },
        y: 50,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "power3.out"
      });
    }, containerRef);
    
    return () => ctx.revert();
  }, []);

  return (
    <main ref={containerRef} className="bg-corpex-white text-corpex-black min-h-screen font-sans pt-32 selection:bg-corpex-gold selection:text-corpex-black">
      
      <section className="py-24 md:py-32 px-6 md:px-12 bg-[#F8F9FA] relative border-b border-black/5 overflow-hidden">
        <div className="container mx-auto max-w-6xl relative z-10 flex flex-col lg:flex-row items-center justify-between gap-16">
          <div className="lg:w-1/2">
            <span className="hero-reveal text-xs font-bold uppercase tracking-[0.3em] text-corpex-gold block mb-6">INSIGHTS</span>
            <h1 className="hero-reveal text-5xl md:text-8xl font-bold tracking-tighter uppercase leading-[0.85] text-corpex-blue mb-8">
              Notes on Business<br/>
              <span className="text-corpex-gold italic font-serif lowercase tracking-normal text-6xl md:text-9xl">&amp; Growth.</span>
            </h1>
            <p className="hero-reveal text-xl md:text-3xl font-serif text-corpex-black/70 leading-relaxed">
              Notes on business, growth, and the decisions that shape both.
            </p>
          </div>
          
          <div className="lg:w-1/2 relative w-full h-[400px] lg:h-[500px] hero-reveal">
            {/* Gallery Images */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=800&auto=format&fit=crop" 
              alt="Business Strategy" 
              className="absolute top-0 left-0 w-2/3 h-2/3 object-cover rounded-[2rem] border-4 border-[#F8F9FA] shadow-2xl z-20"
            />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop" 
              alt="Growth Chart" 
              className="absolute bottom-0 right-0 w-2/3 h-2/3 object-cover rounded-[2rem] border-4 border-[#F8F9FA] shadow-2xl z-10"
            />
            {/* Decorative Element */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-corpex-gold rounded-full blur-3xl opacity-50 z-0"></div>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 md:px-12">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-12">
            <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-corpex-gold mb-2">
              Upcoming Topics
            </h2>
            <p className="text-sm text-corpex-black/50 font-serif">
              Real articles published periodically based on regional business dynamics.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 insights-grid">
            {topicDirections.map((topic, i) => (
              <div 
                key={i}
                className="insight-card group relative h-80 rounded-[2.5rem] overflow-hidden border border-black/5"
              >
                {/* Background Image */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                  src={topic.img} 
                  alt={topic.title}
                  className="w-full h-full object-cover absolute inset-0 transition-transform duration-700 group-hover:scale-105"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-corpex-black/90 via-corpex-black/40 to-transparent transition-opacity duration-500 group-hover:opacity-90"></div>
                
                {/* Content */}
                <div className="absolute inset-0 p-10 flex flex-col justify-end">
                  <span className="text-xs font-bold uppercase tracking-widest text-corpex-gold block mb-4">
                    Topic 0{i + 1}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight leading-snug mb-4">
                    {topic.title}
                  </h3>
                  <div className="text-xs font-bold uppercase tracking-widest text-white/50 flex items-center">
                    <span className="w-2 h-2 rounded-full bg-corpex-gold mr-3"></span>
                    Publication Pending
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}
