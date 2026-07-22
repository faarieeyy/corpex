"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, ArrowDown } from "lucide-react";
import Link from "next/link";
import { HandDrawnSquiggle } from "@/components/ElementalAccents";

const cycleWords = ["Strategy.", "Compliance.", "Branding.", "Technology."];

export default function Home() {
  const heroRef = useRef<HTMLElement>(null);
  const heroTextRef = useRef<HTMLDivElement>(null);
  
  // State for interactive capabilities list
  const [activeService, setActiveService] = useState(0);

  // State for subtle hero text cycling
  const [cycleIndex, setCycleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCycleIndex((prev) => (prev + 1) % cycleWords.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Hero Scroll Animation
      const heroTl = gsap.timeline({
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "+=150%",
          pin: true,
          scrub: 1,
        }
      });

      heroTl.to(".hero-image", { scale: 1.2, duration: 1, ease: "none" }, 0);
      heroTl.to(".hero-text-container", { y: "-30vh", opacity: 0, duration: 1, ease: "power1.inOut" }, 0);

      gsap.fromTo(".hero-reveal", 
        { y: 80, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, stagger: 0.2, ease: "power4.out", delay: 0.2 }
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const services = [
    { title: "SETUP & COMPLIANCE", desc: "Registration, licensing, and every regulatory step in between.", img: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2000&auto=format&fit=crop" },
    { title: "FINANCE & ADVISORY", desc: "Accounting, tax, audit, and the numbers that guide better decisions.", img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2000&auto=format&fit=crop" },
    { title: "BRANDING & CREATIVE", desc: "Identity, documents, and content that make a business look like itself.", img: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2000&auto=format&fit=crop" },
    { title: "WEBSITE & TECHNOLOGY", desc: "Built properly, maintained properly, backed by systems that work.", img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2000&auto=format&fit=crop" },
    { title: "CORPORATE, PRINT & EVENTS", desc: "The physical details and experiences that represent a business well.", img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2000&auto=format&fit=crop" },
  ];

  return (
    <main className="bg-corpex-white text-corpex-black min-h-screen font-sans selection:bg-corpex-gold selection:text-corpex-black">
      
      {/* 1. HERO SECTION */}
      <section ref={heroRef} className="relative h-screen w-full overflow-hidden flex flex-col justify-center bg-corpex-white">
        
        {/* Background Image Container */}
        <div className="absolute inset-0 z-0 overflow-hidden px-4 md:px-12 pb-12 pt-24 md:pt-32">
          <div 
            className="hero-image w-full h-full bg-cover bg-center rounded-[2rem] overflow-hidden"
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1604871000636-074fa5117945?q=80&w=2000&auto=format&fit=crop')" }}
          >
            <div className="absolute inset-0 bg-corpex-black/30 mix-blend-overlay"></div>
          </div>
        </div>

        {/* Text Container (Bound exactly to the image's padding and rounded corners) */}
        <div className="absolute inset-0 z-10 px-4 md:px-12 pb-12 pt-24 md:pt-32 flex flex-col pointer-events-none">
          <div className="w-full h-full relative rounded-[2rem] overflow-hidden">
            <div ref={heroTextRef} className="hero-text-container absolute inset-0 flex flex-col justify-center px-6 md:px-16 mix-blend-difference text-white pointer-events-auto">
              
              <div className="hero-reveal text-xs md:text-base font-bold uppercase tracking-[0.3em] mb-6 flex items-center">
                <span className="w-2 h-2 bg-corpex-gold rotate-45 mr-4 shrink-0"></span>
                Your Business Growth Partner
              </div>
              
              <h1 className="hero-reveal text-[10vw] md:text-[8vw] font-bold uppercase tracking-tighter leading-[0.85] w-full">
                BEYOND <span className="font-serif italic lowercase tracking-normal font-normal text-corpex-white/90">Consulting.</span>
              </h1>
              
              <h2 className="hero-reveal text-[8vw] md:text-[6.5vw] font-bold uppercase tracking-tighter leading-[0.9] mt-2 flex items-end">
                BUILT FOR GROWTH<div className="w-[3vw] h-[3vw] md:w-[1.8vw] md:h-[1.8vw] bg-corpex-gold mb-[1vw] md:mb-[0.5vw] ml-4 rotate-45 shrink-0"></div>
              </h2>

              <div className="hero-reveal mt-8 max-w-2xl">
                <p className="text-lg md:text-2xl font-serif text-white/90 leading-relaxed">
                  <span className="inline-block transition-opacity duration-700 font-bold text-corpex-gold mr-2">
                    {cycleWords[cycleIndex]}
                  </span>
                  The essentials your business needs to grow — under one trusted partner.
                </p>
                
                <div className="mt-8 flex flex-wrap gap-4 items-center">
                  <Link href="/contact" className="px-8 py-4 bg-corpex-gold text-corpex-black font-bold uppercase tracking-widest text-xs rounded-full hover:bg-white transition-colors duration-300">
                    Start Your Growth Journey
                  </Link>
                  <Link href="/services" className="px-8 py-4 border border-white/40 text-white font-bold uppercase tracking-widest text-xs rounded-full hover:bg-white hover:text-corpex-black transition-all duration-300">
                    Explore Services
                  </Link>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-4 md:bottom-12 left-1/2 -translate-x-1/2 z-20 text-corpex-black md:text-white md:mix-blend-difference flex flex-col items-center opacity-70 animate-bounce pointer-events-none">
          <span className="text-[10px] uppercase tracking-widest font-bold mb-2">Scroll</span>
          <ArrowDown size={14} />
        </div>
      </section>

      {/* 2. THE PROBLEM WE SOLVE (MANIFESTO) */}
      <section className="py-32 md:py-48 bg-[#F8F9FA] text-corpex-black relative overflow-hidden">
        {/* Faint background text */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15vw] font-bold tracking-tighter text-black/[0.02] whitespace-nowrap pointer-events-none uppercase z-0">
          Corpex
        </div>

        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
             
             {/* Left side: Editorial Typography */}
             <div className="lg:w-1/2">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-px bg-corpex-gold"></div>
                  <span className="text-sm font-bold uppercase tracking-[0.2em] text-corpex-blue">The Problem We Solve</span>
                </div>
                <h3 className="text-4xl md:text-6xl font-bold tracking-tighter uppercase leading-[0.9] mb-8 text-corpex-blue">
                  Most businesses don&apos;t fail from<br/>
                  <span className="text-corpex-gold italic font-serif lowercase tracking-normal text-5xl md:text-7xl">lack of ambition.</span>
                </h3>
                <p className="text-xl md:text-2xl font-serif text-corpex-black/70 leading-relaxed mb-8">
                  They fail from fragmented support — a different provider for every function, none of them talking to each other, and no one responsible for the whole picture.
                </p>
                <div className="p-6 bg-white rounded-2xl border border-corpex-blue/10 shadow-sm mb-10">
                  <p className="font-bold text-corpex-blue text-lg mb-2">Corpex was built to close that gap.</p>
                  <p className="text-corpex-black/70 font-serif">One partner. Every function. One person to call.</p>
                </div>
                <Link href="/about" className="group flex items-center gap-4 w-fit">
                   <div className="w-12 h-12 rounded-full border-2 border-corpex-blue flex items-center justify-center group-hover:bg-corpex-blue group-hover:border-corpex-blue group-hover:text-white transition-all duration-500">
                     <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
                   </div>
                   <span className="font-bold uppercase tracking-widest text-sm text-corpex-blue">Learn Why We Started</span>
                </Link>
             </div>

             {/* Right side: Dynamic Image Composition */}
             <div className="lg:w-1/2 relative w-full h-[600px] md:h-[700px]">
                {/* Main Image */}
                <div className="absolute top-1/2 -translate-y-1/2 right-0 w-[90%] md:w-[85%] h-[80%] rounded-[2rem] overflow-hidden shadow-2xl">
                   <img 
                     src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2000&auto=format&fit=crop"
                     alt="Creative Corporate Team"
                     className="w-full h-full object-cover scale-105 hover:scale-100 transition-transform duration-[1.5s]"
                   />
                   <div className="absolute inset-0 bg-gradient-to-tr from-corpex-blue/40 to-transparent mix-blend-overlay pointer-events-none"></div>
                </div>
                
                {/* Decorative floating glass card */}
                <div className="absolute bottom-[10%] md:bottom-[20%] left-0 md:-left-12 w-64 h-auto border border-white/60 rounded-2xl backdrop-blur-xl bg-white/80 shadow-2xl p-6 flex flex-col justify-end">
                   <div className="w-10 h-10 bg-corpex-gold rounded-full mb-4 flex items-center justify-center text-white">
                      <div className="w-3 h-3 bg-white rotate-45"></div>
                   </div>
                   <div className="text-3xl font-bold text-corpex-blue tracking-tighter">ONE CALL</div>
                   <div className="text-xs font-bold uppercase tracking-wider text-corpex-black/60 mt-1">Every function aligned</div>
                </div>
             </div>

          </div>
        </div>
      </section>

      {/* 3. WHAT WE DO (CAPABILITIES) */}
      <section className="py-32 bg-corpex-black text-corpex-white relative">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-corpex-gold block mb-4">WHAT WE DO</span>
              <h2 className="text-4xl md:text-6xl font-bold tracking-tighter uppercase leading-tight max-w-2xl">
                We don&apos;t hand you a service list. We hand you a business that works better.
              </h2>
            </div>
            <Link href="/services" className="group flex items-center space-x-4 mt-8 md:mt-0 text-corpex-gold hover:text-white transition-colors">
              <span className="font-bold uppercase tracking-widest text-sm">Explore All Services</span>
              <ArrowRight className="group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>

          <div className="relative border-t border-corpex-white/10 flex flex-col lg:flex-row lg:gap-16">
            
            {/* Left Side: The Interactive List */}
            <div className="lg:w-7/12">
              {services.map((service, i) => (
                <Link key={i} href="/services">
                  <div 
                    className="group flex flex-col justify-center py-10 border-b border-corpex-white/10 cursor-pointer relative overflow-hidden"
                    onMouseEnter={() => setActiveService(i)}
                  >
                    {/* Hover background color slide */}
                    <div className="absolute inset-0 bg-corpex-gold scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] z-0"></div>

                    <div className="relative z-10 flex flex-col md:flex-row md:items-center gap-4 md:gap-12 px-6">
                      <div className="text-corpex-white/30 group-hover:text-corpex-black font-bold text-xl md:text-2xl tracking-widest transition-colors duration-500">
                        0{i + 1}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl md:text-4xl font-bold uppercase tracking-tighter group-hover:text-corpex-black transition-colors duration-500 group-hover:translate-x-4 transform transition-transform">
                          {service.title}
                        </h3>
                      </div>
                      <div className="md:text-right hidden md:block">
                        <p className="font-serif text-sm text-corpex-white/50 group-hover:text-corpex-black max-w-[220px] transition-colors duration-500">
                          {service.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {/* Right Side: The Dynamic Floating Image */}
            <div className="hidden lg:block lg:w-5/12 relative mt-12 lg:mt-0">
               <div className="sticky top-32 w-full h-[600px] rounded-[2rem] overflow-hidden shadow-2xl bg-corpex-white/5">
                 {services.map((service, i) => (
                   <img 
                     key={i}
                     src={service.img}
                     alt={service.title}
                     className={`absolute inset-0 w-full h-full object-cover grayscale contrast-125 transition-all duration-[1.5s] ease-[cubic-bezier(0.16,1,0.3,1)] ${activeService === i ? 'opacity-100 scale-100 z-10' : 'opacity-0 scale-110 z-0'}`}
                   />
                 ))}
                 {/* Gold tint overlay */}
                 <div className="absolute inset-0 bg-corpex-gold mix-blend-overlay opacity-50 z-20 pointer-events-none"></div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. HOW WE WORK (PROCESS - EXACT SCREENSHOT DESIGN) */}
      <section className="py-20 md:py-24 px-6 bg-[#F5F5F7] text-corpex-black relative overflow-hidden">
        {/* Subtle Graph Paper Background Grid */}
        <div className="absolute inset-0 opacity-[0.06] bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>

        <div className="container mx-auto max-w-5xl relative z-10">
          
          <div className="text-center mb-28 relative">
            <div className="inline-block border border-corpex-black/20 rounded-full px-6 py-2 text-sm font-bold uppercase tracking-widest mb-6 bg-white/60 backdrop-blur-sm">
              HOW WE WORK
            </div>
            <h3 className="text-3xl md:text-5xl font-bold tracking-tighter mb-4 text-corpex-blue relative inline-block max-w-3xl">
              Let us show you how we drive<br/>your brand to new heights
              <HandDrawnSquiggle className="absolute -bottom-8 right-0 text-corpex-gold w-32 h-16" />
            </h3>
          </div>

          <div className="relative py-8 flex flex-col gap-12 md:gap-32">
            
            {[
              { 
                num: "01", 
                title: "Discover", 
                text: "We learn your business before we suggest anything.",
                rotation: "md:rotate-[12deg]",
                align: "md:ml-auto md:w-[460px]"
              },
              { 
                num: "02", 
                title: "Diagnose", 
                text: "We find what's working, what isn't, and what's missing.",
                rotation: "md:rotate-[-12deg]",
                align: "md:mr-auto md:w-[460px]"
              },
              { 
                num: "03", 
                title: "Design", 
                text: "We shape a plan around your business — not a template.",
                rotation: "md:rotate-[12deg]",
                align: "md:ml-auto md:w-[460px]"
              },
              { 
                num: "04", 
                title: "Deliver", 
                text: "We execute, properly, the first time.",
                rotation: "md:rotate-[-12deg]",
                align: "md:mr-auto md:w-[460px]"
              },
              { 
                num: "05", 
                title: "Develop", 
                text: "We stay, because growth doesn't stop at delivery.",
                rotation: "md:rotate-[12deg]",
                align: "md:ml-auto md:w-[460px]"
              },
            ].map((step, i) => (
              <div key={i} className={`relative z-10 w-full ${step.align}`}>
                 
                 {/* Dotted Connecting Line (Hidden on last step) */}
                 {/* Dynamically stretches from Top Pin to Top Pin using bottom: -128px (gap) */}
                 {i < 4 && (
                   <svg 
                     className={`hidden md:block absolute top-0 ${step.align.includes('ml-auto') ? 'right-1/2 scale-x-[-1]' : 'left-1/2'} pointer-events-none -z-10`}
                     style={{ 
                       bottom: '-128px',
                       width: 'clamp(200px, calc(100vw - 3rem - 460px), 564px)' 
                     }}
                     viewBox="0 0 100 100" 
                     preserveAspectRatio="none"
                     fill="none" 
                     stroke="#BCBCBC" 
                     strokeWidth="4" 
                     strokeDasharray="0 15" 
                     strokeLinecap="round"
                   >
                     <path vectorEffect="non-scaling-stroke" d="M 0 0 C 80 0, 100 50, 100 100" />
                   </svg>
                 )}

                 {/* Outer Paper Tag Card */}
                 <div className={`${i % 2 === 0 ? 'bg-corpex-blue' : 'bg-corpex-gold'} rounded-[2.5rem] p-3 sm:p-4 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.12)] border border-black/10 relative ${step.rotation} origin-top transition-all duration-500 hover:z-30 hover:scale-[1.02]`}>
                    
                    {/* Top Pin / Rivet */}
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-[#1C1C1E] border-2 border-[#55555A] shadow-md flex items-center justify-center z-20">
                      <div className="w-1.5 h-1.5 rounded-full bg-white/40"></div>
                    </div>
                    
                    {/* Inner Container (White Center) */}
                    <div className="bg-white rounded-[2rem] p-6 sm:p-8 border border-black/5 shadow-inner">
                      <div className={`flex items-center gap-1.5 text-xs font-bold mb-2 font-mono ${i % 2 === 0 ? 'text-corpex-blue' : 'text-amber-600'}`}>
                        <span>{step.num}</span>
                      </div>
                      <h4 className="text-2xl sm:text-3xl font-bold tracking-tight text-corpex-black mb-3 font-sans">
                        {step.title}
                      </h4>
                      <p className="text-sm font-sans text-black/70 leading-relaxed">
                        {step.text}
                      </p>
                    </div>

                 </div>

              </div>
            ))}

            {/* Handwritten 'Ready to be delivered!' text */}
            <div className="text-right font-serif italic text-xl md:text-2xl text-black/40 pr-8 mt-4 md:rotate-[6deg]">
              Ready to be delivered!
            </div>

          </div>

        </div>
      </section>

      {/* 5. WHY CORPEX (THREE PRINCIPLES) */}
      <section className="py-20 md:py-24 bg-corpex-white text-corpex-black relative">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-12 md:mb-16">
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-corpex-gold block mb-4">WHY CORPEX</span>
            <h3 className="text-4xl md:text-6xl font-bold tracking-tighter uppercase text-corpex-blue">
              More than a service provider.<br/>A true growth partner.
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                num: "01",
                title: "ONE PARTNER, NOT FIVE VENDORS.",
                text: "Every function coordinated by one team that already knows your business."
              },
              {
                num: "02",
                title: "WE LOOK BEFORE WE'RE ASKED.",
                text: "Most consultants wait for a brief. We study the business first."
              },
              {
                num: "03",
                title: "BUILT FOR THE LONG RUN.",
                text: "We're not chasing one project. We're building one relationship."
              }
            ].map((principle, i) => (
              <div key={i} className="bg-[#F8F9FA] p-8 md:p-10 rounded-[2rem] border border-black/5 hover:border-corpex-gold/40 transition-all duration-300 flex flex-col justify-between group">
                <div>
                  <div className="text-4xl font-bold text-corpex-gold font-serif italic mb-6">
                    {principle.num}
                  </div>
                  <h4 className="text-xl font-bold uppercase tracking-tight text-corpex-blue mb-4 leading-snug">
                    {principle.title}
                  </h4>
                  <p className="font-serif text-corpex-black/70 leading-relaxed">
                    {principle.text}
                  </p>
                </div>
                <div className="w-8 h-8 rounded-full bg-corpex-blue/5 group-hover:bg-corpex-gold transition-colors duration-300 flex items-center justify-center mt-8">
                  <div className="w-2 h-2 bg-corpex-blue group-hover:bg-corpex-black rotate-45"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. HOME PAGE CLOSING CTA */}
      <section className="py-24 md:py-32 bg-corpex-black text-corpex-white text-center flex flex-col items-center justify-center relative overflow-hidden">
        <div className="w-4 h-4 bg-corpex-gold rotate-45 mb-8"></div>
        <span className="text-xs font-bold uppercase tracking-[0.3em] text-corpex-gold mb-6">READY TO GROW?</span>
        <h2 className="text-4xl md:text-7xl font-bold tracking-tighter uppercase mb-12 max-w-4xl leading-tight">
          You already have a business.<br/>You need it to grow properly.
        </h2>
        
        <Link href="/contact" className="group flex items-center space-x-6 bg-corpex-gold text-corpex-black px-12 py-6 hover:bg-white transition-all duration-300 rounded-full font-bold uppercase tracking-widest text-sm">
          <span>Let&apos;s Build Together</span>
          <ArrowRight className="group-hover:translate-x-2 transition-transform" />
        </Link>
      </section>

    </main>
  );
}
