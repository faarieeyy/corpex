"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Loader from "@/components/Loader";
import TransitionLink from "@/components/TransitionLink";
import MagneticButton from "@/components/MagneticButton";
import { ArrowRight, ArrowDown } from "lucide-react";

export default function Home() {
  const heroRef = useRef<HTMLElement>(null);
  const heroTextRef = useRef<HTMLDivElement>(null);
  const heroImageRef = useRef<HTMLDivElement>(null);
  
  const whatWeDoRef = useRef<HTMLElement>(null);
  const whatWeDoScrollRef = useRef<HTMLDivElement>(null);
  const massiveTextRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const handleMouseMove = (e: MouseEvent) => {
      if (!heroTextRef.current) return;
      const { clientX, clientY } = e;
      const x = (clientX / window.innerWidth - 0.5) * 40;
      const y = (clientY / window.innerHeight - 0.5) * 40;
      
      gsap.to(".parallax-layer-1", { x: x, y: y, duration: 1, ease: "power2.out" });
      gsap.to(".parallax-layer-2", { x: -x * 1.5, y: -y * 1.5, duration: 1, ease: "power2.out" });
    };

    window.addEventListener("mousemove", handleMouseMove);

    const ctx = gsap.context(() => {
      // Initial Hero Animation
      const tl = gsap.timeline({ delay: 0.5 });
      
      tl.fromTo(".hero-word", 
        { y: 150, opacity: 0, rotate: 5 }, 
        { y: 0, opacity: 1, rotate: 0, duration: 1.2, stagger: 0.15, ease: "power4.out" }
      )
      .fromTo(".hero-sub",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out" }, "-=0.8"
      );

      // Scroll trigger for hero image to scale full screen
      gsap.to(heroImageRef.current, {
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "+=150%",
          pin: true,
          scrub: 1,
        },
        clipPath: "inset(0% 0% 0% 0% round 0px)",
        scale: 1.1,
        filter: "grayscale(80%) brightness(0.3)",
        ease: "none"
      });

      // Massive Text Scroll Reveal
      if (massiveTextRef.current) {
        gsap.to(massiveTextRef.current, {
          scrollTrigger: {
            trigger: massiveTextRef.current,
            start: "top 80%",
            end: "bottom 20%",
            scrub: 1,
          },
          x: "-150vw",
          ease: "none"
        });
      }

      // Horizontal Scroll for "What We Do"
      if (whatWeDoRef.current && whatWeDoScrollRef.current) {
        const scrollWidth = whatWeDoScrollRef.current.scrollWidth - window.innerWidth;
        gsap.to(whatWeDoScrollRef.current, {
          x: -scrollWidth,
          ease: "none",
          scrollTrigger: {
            trigger: whatWeDoRef.current,
            pin: true,
            scrub: 1,
            end: () => "+=" + scrollWidth
          }
        });
      }
    });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      ctx.revert(); // CRITICAL: This kills all ScrollTriggers and reverses DOM changes (like pin-spacers) before React unmounts
    };
  }, []);

  return (
    <>
      <Loader onComplete={() => {}} />
      
      {/* 1. Radical Hero Section with Masked Image */}
      <section ref={heroRef} className="relative h-screen w-full overflow-hidden bg-corpex-white flex flex-col justify-center">
        
        {/* Architectural Image Element */}
        <div className="absolute inset-0 z-0 pointer-events-none flex items-center justify-center">
          <div 
            ref={heroImageRef} 
            className="w-full h-full bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center"
            style={{ clipPath: "inset(50% 50% 50% 50% round 100px)" }}
          ></div>
        </div>

        <div className="container mx-auto px-6 relative z-10 flex flex-col items-center mix-blend-difference text-white">
          <div ref={heroTextRef} className="relative w-full max-w-7xl mx-auto flex flex-col items-center justify-center font-bold tracking-tighter uppercase leading-[0.85]">
            
            <div className="overflow-hidden w-full flex justify-start pl-[5%]">
              <div className="hero-word parallax-layer-1 text-[15vw] lg:text-[12vw]">BEYOND</div>
            </div>
            
            <div className="overflow-hidden w-full flex justify-end pr-[5%] -mt-[2%]">
              <div className="hero-word parallax-layer-2 text-[15vw] lg:text-[12vw] flex items-center">
                CONSULTING
                <div className="w-[3vw] h-[3vw] bg-corpex-gold rotate-45 ml-4 mix-blend-normal"></div>
              </div>
            </div>
          </div>

          <div className="hero-sub mt-20 flex flex-col md:flex-row justify-between items-center w-full max-w-5xl px-6">
            <p className="font-serif text-xl md:text-3xl text-white/80 max-w-lg mb-8 md:mb-0">
              The essentials your business needs to grow — under one trusted partner.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Massive Typography Interstitial */}
      <section className="py-32 bg-corpex-black text-corpex-white overflow-hidden flex items-center min-h-[50vh]">
        <div ref={massiveTextRef} className="whitespace-nowrap font-bold text-[14vw] leading-none opacity-20 tracking-tighter ml-[50vw]">
          BUILT FOR GROWTH — NOT FOR TEMPLATES
        </div>
      </section>

      {/* 3. Horizontal Scroll "What We Do" */}
      <section ref={whatWeDoRef} className="h-screen bg-corpex-white flex items-center overflow-hidden">
        <div className="absolute top-12 left-12 z-10 hidden md:block mix-blend-difference text-white">
           <div className="font-bold tracking-widest text-xs uppercase flex items-center">
              <span className="w-8 h-px bg-white mr-4"></span>
              Our Capabilities
            </div>
        </div>

        <div ref={whatWeDoScrollRef} className="flex h-full w-max items-center px-[10vw]">
          {/* Intro Card */}
          <div className="w-[80vw] md:w-[40vw] h-[60vh] flex flex-col justify-center pr-20 mr-20 border-r border-corpex-black/10">
            <h2 className="text-5xl md:text-7xl font-bold tracking-tight mb-8">What We Do.</h2>
            <p className="font-serif text-2xl text-corpex-black/60">
              We don't hand you a service list. We hand you a business that works better.
            </p>
          </div>

          {/* Service Panels with Hover Images */}
          {[
            { num: "01", title: "Setup & Compliance", img: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=2070&auto=format&fit=crop" },
            { num: "02", title: "Finance & Advisory", img: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2070&auto=format&fit=crop" },
            { num: "03", title: "Branding & Creative", img: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=2000&auto=format&fit=crop" },
            { num: "04", title: "Web & Technology", img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=2070&auto=format&fit=crop" },
          ].map((item, i) => (
            <div key={i} className="w-[80vw] md:w-[32vw] h-[55vh] mr-12 rounded-3xl relative overflow-hidden group cursor-pointer shadow-2xl">
              
              {/* Image Background */}
              <div 
                className="absolute inset-0 bg-cover bg-center scale-105 group-hover:scale-110 transition-transform duration-1000 ease-[cubic-bezier(0.2,0.8,0.2,1)]"
                style={{ 
                  backgroundImage: `url('${item.img}')`,
                  filter: "grayscale(100%) contrast(1.1)"
                }}
              ></div>
              
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-corpex-black via-corpex-black/60 to-corpex-black/10 group-hover:via-corpex-black/40 transition-colors duration-700"></div>

              {/* Content Layer */}
              <div className="relative z-10 p-10 flex flex-col justify-between h-full text-white">
                <div className="text-2xl font-bold opacity-50 group-hover:text-corpex-gold group-hover:opacity-100 transition-all duration-500">{item.num}</div>
                
                <div>
                  <h3 className="text-3xl md:text-5xl font-bold mb-8 max-w-xs group-hover:translate-x-4 transition-transform duration-700">{item.title}</h3>
                  <MagneticButton>
                    <TransitionLink href="/services" className="inline-flex items-center space-x-4 border border-white/30 rounded-full px-6 py-3 bg-black/20 backdrop-blur-md hover:bg-white hover:text-black hover:border-transparent transition-all duration-500">
                      <span className="font-bold text-sm uppercase tracking-widest">Explore</span>
                      <ArrowRight className="w-4 h-4" />
                    </TransitionLink>
                  </MagneticButton>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Giant Editorial Image Replacement (Abstract) */}
      <section className="h-screen w-full relative overflow-hidden group">
        <div className="absolute inset-0 parallax-img transition-transform duration-[2s] group-hover:scale-105" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed', filter: 'grayscale(100%) brightness(0.3)' }}></div>
        <div className="absolute inset-0 bg-corpex-blue/20 mix-blend-overlay"></div>
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <h2 className="text-white text-6xl md:text-8xl font-bold text-center tracking-tighter leading-[0.9] mix-blend-exclusion">
            ONE PARTNER.<br/>
            <span className="text-corpex-gold italic font-serif">NOT FIVE VENDORS.</span>
          </h2>
        </div>
      </section>

      {/* 5. Closing High-End CTA */}
      <section className="py-40 bg-corpex-white text-center flex flex-col items-center justify-center">
        <div className="w-4 h-4 bg-corpex-gold rotate-45 mb-12"></div>
        <h2 className="text-5xl md:text-8xl font-bold tracking-tighter mb-16">Ready to grow?</h2>
        <MagneticButton>
          <TransitionLink href="/contact" className="group flex items-center bg-corpex-black text-corpex-white px-12 py-6 rounded-full font-bold text-xl hover:bg-corpex-blue transition-colors duration-500">
            Let's Talk
            <div className="w-2 h-2 bg-corpex-gold rotate-45 ml-6 group-hover:scale-150 transition-transform"></div>
          </TransitionLink>
        </MagneticButton>
      </section>
    </>
  );
}
