"use client";

import { useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TransitionLink from "@/components/TransitionLink";
import MagneticButton from "@/components/MagneticButton";

const industries = [
  {
    name: "Technology & Startups",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop",
    desc: "Scaling operations, structure, and presence for rapid growth."
  },
  {
    name: "Real Estate & Construction",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop",
    desc: "Project licensing, compliance, and corporate structuring."
  },
  {
    name: "Retail & E-Commerce",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1950&auto=format&fit=crop",
    desc: "Seamless digital setup, licensing, and brand consistency."
  },
  {
    name: "Healthcare & Life Sciences",
    image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=2070&auto=format&fit=crop",
    desc: "Regulatory compliance, approvals, and specialized setups."
  },
  {
    name: "Manufacturing & Logistics",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop",
    desc: "Industrial licensing, free zone structuring, and trade support."
  },
  {
    name: "Professional Services",
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop",
    desc: "Corporate identity, financial compliance, and legal setup."
  },
  {
    name: "Hospitality & Tourism",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070&auto=format&fit=crop",
    desc: "Tourism approvals, brand management, and visa processing."
  },
  {
    name: "Financial Services",
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2036&auto=format&fit=crop",
    desc: "Regulated setups, AML compliance, and corporate banking."
  }
];

export default function Industries() {
  const heroRef = useRef<HTMLHeadingElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Hero Entrance
      if (heroRef.current) {
        gsap.fromTo(heroRef.current,
          { y: 50, opacity: 0, rotateX: -20 },
          { y: 0, opacity: 1, rotateX: 0, duration: 1.2, ease: "power4.out", delay: 0.2 }
        );
      }

      // Grid Stagger
      if (gridRef.current) {
        const cards = gsap.utils.toArray(".industry-card");
        
        gsap.fromTo(cards, 
          { y: 100, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            stagger: 0.1,
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
    <div className="pt-32 pb-32 bg-corpex-black text-corpex-white min-h-screen">
      
      {/* Header */}
      <section className="container mx-auto px-6 md:px-12 pt-20 pb-16 overflow-hidden" style={{ perspective: '1000px' }}>
        <div className="w-4 h-4 bg-corpex-gold rotate-45 mb-8"></div>
        <h1 ref={heroRef} className="text-[var(--text-hero)] font-bold tracking-tight leading-[1.1] mb-8 origin-bottom">
          Industries.
        </h1>
        <p className="text-[var(--text-sub)] font-serif text-corpex-white/60 max-w-3xl leading-relaxed">
          We bring our coordinated growth approach to the sectors that drive the region forward.
        </p>
      </section>

      {/* Dynamic Grid */}
      <section className="container mx-auto px-6 md:px-12">
        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 border-t border-white/20 pt-16">
          {industries.map((industry, index) => (
            <div 
              key={index}
              className="industry-card group relative h-[400px] lg:h-[500px] overflow-hidden cursor-pointer"
            >
              {/* Background Image */}
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-110"
                style={{ 
                  backgroundImage: `url('${industry.image}')`,
                  filter: "grayscale(100%) contrast(1.2)"
                }}
              ></div>
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-corpex-black via-corpex-black/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500"></div>
              
              {/* Content */}
              <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-end transform transition-transform duration-500">
                <div className="flex items-center gap-6 mb-4">
                  <span className="text-corpex-gold font-bold text-sm tracking-widest uppercase">
                    0{index + 1}
                  </span>
                  <div className="w-12 h-px bg-white/30 group-hover:bg-corpex-gold transition-colors duration-500"></div>
                </div>
                
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 group-hover:text-corpex-gold transition-colors duration-500">
                  {industry.name}
                </h2>
                
                <p className="font-serif text-white/70 max-w-md opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-100">
                  {industry.desc}
                </p>
                
                {/* Arrow Icon */}
                <div className="absolute top-8 right-8 w-12 h-12 rounded-full border border-white/20 flex items-center justify-center opacity-0 -translate-translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 group-hover:bg-corpex-gold group-hover:border-corpex-gold transition-all duration-500 delay-200">
                  <ArrowRight className="w-5 h-5 text-corpex-black" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-6 md:px-12 mt-32">
        <div className="border border-white/10 p-12 md:p-24 flex flex-col items-center text-center bg-white/5 relative overflow-hidden">
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-corpex-blue opacity-20 blur-3xl rounded-full"></div>
          
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-8">
            Don&apos;t see your sector?
          </h2>
          <p className="font-serif text-white/70 max-w-2xl mb-12 text-lg md:text-xl">
            Our corporate, financial, and creative services apply to any growing business. We build custom solutions tailored to your unique operational needs.
          </p>
          
          <MagneticButton>
            <TransitionLink href="/contact" className="inline-flex items-center space-x-4 bg-white text-corpex-black rounded-full px-8 py-4 hover:bg-corpex-gold transition-all duration-300">
              <span className="font-bold text-sm uppercase tracking-widest">Speak to our team</span>
              <ArrowRight className="w-4 h-4" />
            </TransitionLink>
          </MagneticButton>
        </div>
      </section>
      
    </div>
  );
}
