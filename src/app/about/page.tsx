"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { HandDrawnSquiggle } from "@/components/ElementalAccents";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function AboutPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Hero text reveal
      gsap.from(".hero-reveal", {
        y: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: "power3.out",
        delay: 0.2
      });

      // Scroll reveals
      const revealElements = gsap.utils.toArray('.scroll-reveal');
      revealElements.forEach((el: any) => {
        gsap.from(el, {
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
          },
          y: 40,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out"
        });
      });

      // Stagger cards
      gsap.from(".principle-card", {
        scrollTrigger: {
          trigger: ".principles-container",
          start: "top 80%",
        },
        y: 50,
        opacity: 0,
        duration: 0.6,
        stagger: 0.15,
        ease: "power3.out"
      });
    }, containerRef);
    
    return () => ctx.revert();
  }, []);

  return (
    <main ref={containerRef} className="bg-corpex-white text-corpex-black min-h-screen font-sans pt-32 selection:bg-corpex-gold selection:text-corpex-black">
      
      {/* HERO / INTRO SECTION */}
      <section className="py-24 md:py-32 px-6 md:px-12 bg-corpex-black text-corpex-white relative overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img 
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2000&auto=format&fit=crop" 
            alt="Corpex Team Collaboration" 
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-corpex-black via-corpex-black/80 to-transparent"></div>
        </div>

        <div className="container mx-auto max-w-6xl relative z-10">
          <span className="hero-reveal text-xs font-bold uppercase tracking-[0.3em] text-corpex-gold block mb-6">ABOUT CORPEX</span>
          <h1 className="hero-reveal text-5xl md:text-8xl font-bold tracking-tighter uppercase leading-[0.85] text-white mb-12">
            Why We<br/>
            <span className="text-corpex-gold italic font-serif lowercase tracking-normal text-6xl md:text-9xl">Started.</span>
          </h1>
          <div className="hero-reveal max-w-3xl border-l-2 border-corpex-gold pl-8 md:pl-12 py-2">
            <p className="text-xl md:text-3xl font-serif text-white/80 leading-relaxed">
              Corpex wasn&apos;t built to be another name on a long list of vendors. It was built because businesses kept telling us the same thing — too many providers, not enough coordination, and no one who understood the whole picture.
            </p>
            <p className="text-2xl md:text-4xl font-bold text-white mt-8 font-sans uppercase tracking-tight">
              So we became that person.
            </p>
          </div>
        </div>
      </section>

      {/* WHAT WE BELIEVE */}
      <section className="py-32 px-6 md:px-12 bg-corpex-black text-corpex-white relative overflow-hidden">
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="flex flex-col md:flex-row gap-16 items-start">
            <div className="md:w-1/3 scroll-reveal">
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-corpex-gold block mb-4">OUR PHILOSOPHY</span>
              <h2 className="text-4xl md:text-6xl font-bold tracking-tighter uppercase leading-none">
                What We<br/>Believe<span className="text-corpex-gold">.</span>
              </h2>
            </div>
            <div className="md:w-2/3 scroll-reveal">
              <h3 className="text-3xl md:text-5xl font-bold tracking-tight mb-8 leading-snug">
                A business doesn&apos;t need more service providers. It needs one that understands the whole thing — and takes responsibility for it.
              </h3>
              <p className="text-xl font-serif text-corpex-gold italic">
                That&apos;s the only philosophy we operate on.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* HOW WE THINK */}
      <section className="py-32 px-6 md:px-12 bg-corpex-white text-corpex-black relative">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-24 relative scroll-reveal">
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-corpex-gold block mb-4">OUR PRINCIPLES</span>
            <h2 className="text-4xl md:text-7xl font-bold tracking-tighter uppercase text-corpex-blue relative inline-block">
              How We Think
              <HandDrawnSquiggle className="absolute -bottom-8 right-0 text-corpex-gold w-32 h-16" />
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 principles-container">
            {[
              {
                num: "01",
                title: "PARTNERSHIP OVER PROJECTS.",
                text: "We measure success in years, not invoices."
              },
              {
                num: "02",
                title: "STRATEGY BEFORE EXECUTION.",
                text: "We don't do work until we understand why it matters."
              },
              {
                num: "03",
                title: "RESULTS OVER PROMISES.",
                text: "We'd rather under-say and over-deliver."
              }
            ].map((item, i) => (
              <div key={i} className="principle-card bg-[#F8F9FA] p-10 rounded-[2rem] border border-black/5 hover:border-corpex-gold/40 transition-all duration-300 flex flex-col justify-between">
                <div>
                  <div className="text-4xl font-bold text-corpex-gold font-serif italic mb-6">
                    {item.num}
                  </div>
                  <h3 className="text-xl font-bold uppercase tracking-tight text-corpex-blue mb-4 leading-snug">
                    {item.title}
                  </h3>
                  <p className="font-serif text-corpex-black/70 leading-relaxed text-lg">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHERE WE'RE HEADED */}
      <section className="py-32 px-6 md:px-12 bg-[#F8F9FA] text-corpex-black relative">
        <div className="container mx-auto max-w-4xl text-center scroll-reveal">
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-corpex-gold block mb-6">THE VISION</span>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter uppercase text-corpex-blue mb-8">
            Where We&apos;re Headed
          </h2>
          <p className="text-2xl md:text-4xl font-serif text-corpex-black/80 leading-relaxed mb-16">
            We&apos;re building toward one goal: becoming the most trusted business growth partner for ambitious companies in the region — <span className="font-bold text-corpex-blue">not the biggest consultancy, the most trusted one.</span>
          </p>

          <Link href="/contact" className="inline-flex items-center space-x-6 bg-corpex-gold text-corpex-black px-10 py-5 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-corpex-blue hover:text-white transition-all duration-300">
            <span>Work With Us</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

    </main>
  );
}
