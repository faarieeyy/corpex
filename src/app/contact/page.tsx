"use client";

import { ArrowRight, Phone, Mail, MessageSquare } from "lucide-react";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Contact() {
  const heroRef = useRef<HTMLHeadingElement>(null);
  const blocksRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    const ctx = gsap.context(() => {
      // Hero
      if (heroRef.current) {
        gsap.fromTo(heroRef.current,
          { y: 50, opacity: 0 },
          { y: 0, opacity: 1, duration: 1, ease: "power3.out", delay: 0.2 }
        );
      }

      // Contact Blocks
      if (blocksRef.current) {
        const blocks = gsap.utils.toArray(".contact-block");
        gsap.fromTo(blocks,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.15,
            ease: "power3.out",
            scrollTrigger: {
              trigger: blocksRef.current,
              start: "top 85%",
            }
          }
        );
      }

      // Form Elements
      if (formRef.current) {
        const inputs = gsap.utils.toArray(".form-animate");
        gsap.fromTo(inputs,
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: formRef.current,
              start: "top 85%",
            }
          }
        );
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="pt-32 pb-20 bg-corpex-black text-corpex-white min-h-screen">
      
      {/* Header */}
      <section className="container mx-auto px-6 md:px-12 pt-20 pb-24 overflow-hidden">
        <div className="w-4 h-4 bg-corpex-gold rotate-45 mb-8"></div>
        <h1 ref={heroRef} className="text-[var(--text-hero)] font-bold tracking-tight leading-[1.1] mb-8">
          Let&apos;s Talk.
        </h1>
        <p className="text-[var(--text-sub)] font-serif text-corpex-white/80 max-w-3xl leading-relaxed">
          Tell us what&apos;s slowing your business down.<br/>
          <span className="text-corpex-white/50">We&apos;ll tell you what we can do about it.</span>
        </p>
      </section>

      {/* Contact Methods */}
      <section className="container mx-auto px-6 md:px-12 mb-32">
        <div ref={blocksRef} className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <a href="#" className="contact-block group bg-white/5 border border-white/10 p-12 hover:bg-corpex-blue transition-colors duration-500 relative overflow-hidden">
            <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center mb-12 group-hover:bg-white group-hover:text-corpex-blue transition-colors">
              <MessageSquare className="w-5 h-5" />
            </div>
            <h3 className="text-3xl font-bold mb-4">WhatsApp</h3>
            <p className="font-serif text-white/50 group-hover:text-white/80 mb-12">Direct message for immediate response.</p>
            <div className="absolute bottom-12 right-12 opacity-0 translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
              <ArrowRight className="w-6 h-6 text-corpex-gold" />
            </div>
          </a>

          <a href="#" className="contact-block group bg-white/5 border border-white/10 p-12 hover:bg-corpex-blue transition-colors duration-500 relative overflow-hidden">
            <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center mb-12 group-hover:bg-white group-hover:text-corpex-blue transition-colors">
              <Phone className="w-5 h-5" />
            </div>
            <h3 className="text-3xl font-bold mb-4">Call</h3>
            <p className="font-serif text-white/50 group-hover:text-white/80 mb-12">+971 50 123 4567</p>
            <div className="absolute bottom-12 right-12 opacity-0 translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
              <ArrowRight className="w-6 h-6 text-corpex-gold" />
            </div>
          </a>

          <a href="#" className="contact-block group bg-white/5 border border-white/10 p-12 hover:bg-corpex-blue transition-colors duration-500 relative overflow-hidden">
            <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center mb-12 group-hover:bg-white group-hover:text-corpex-blue transition-colors">
              <Mail className="w-5 h-5" />
            </div>
            <h3 className="text-3xl font-bold mb-4">Email</h3>
            <p className="font-serif text-white/50 group-hover:text-white/80 mb-12">hello@corpex.ae</p>
            <div className="absolute bottom-12 right-12 opacity-0 translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
              <ArrowRight className="w-6 h-6 text-corpex-gold" />
            </div>
          </a>

        </div>
      </section>

      {/* Minimal Form */}
      <section className="container mx-auto px-6 md:px-12">
        <div className="max-w-4xl border-t border-white/20 pt-24">
           <h2 className="text-sm font-bold uppercase tracking-widest text-corpex-white/40 mb-12">
            Send a Message
          </h2>

          <form ref={formRef} className="space-y-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="relative group form-animate">
                <input 
                  type="text" 
                  id="name" 
                  required
                  className="w-full bg-transparent border-b border-white/30 py-4 focus:outline-none focus:border-corpex-gold text-lg transition-colors peer"
                  placeholder=" "
                />
                <label htmlFor="name" className="absolute left-0 top-4 text-white/50 text-lg transition-all peer-focus:-top-6 peer-focus:text-xs peer-focus:text-corpex-gold peer-valid:-top-6 peer-valid:text-xs">
                  Name
                </label>
              </div>
              <div className="relative group form-animate">
                <input 
                  type="text" 
                  id="business" 
                  required
                  className="w-full bg-transparent border-b border-white/30 py-4 focus:outline-none focus:border-corpex-gold text-lg transition-colors peer"
                  placeholder=" "
                />
                <label htmlFor="business" className="absolute left-0 top-4 text-white/50 text-lg transition-all peer-focus:-top-6 peer-focus:text-xs peer-focus:text-corpex-gold peer-valid:-top-6 peer-valid:text-xs">
                  Business
                </label>
              </div>
            </div>
            
            <div className="relative group form-animate">
              <textarea 
                id="message" 
                required
                rows={4}
                className="w-full bg-transparent border-b border-white/30 py-4 focus:outline-none focus:border-corpex-gold text-lg transition-colors peer resize-none"
                placeholder=" "
              ></textarea>
              <label htmlFor="message" className="absolute left-0 top-4 text-white/50 text-lg transition-all peer-focus:-top-6 peer-focus:text-xs peer-focus:text-corpex-gold peer-valid:-top-6 peer-valid:text-xs">
                Message
              </label>
            </div>
            <div className="form-animate">
              <button 
                type="submit"
                className="group relative inline-flex items-center space-x-4 bg-white text-corpex-black rounded-full px-8 py-4 overflow-hidden hover:bg-corpex-gold transition-colors duration-300"
              >
                <span className="font-bold text-sm uppercase tracking-widest relative z-10">Send Message</span>
                <ArrowRight className="w-4 h-4 relative z-10" />
              </button>
            </div>
          </form>
        </div>
      </section>

    </div>
  );
}
