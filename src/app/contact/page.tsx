"use client";

import { useState, useEffect, useRef } from "react";
import { MessageSquare, Phone, Mail, ArrowRight, CheckCircle2 } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    business: "",
    message: ""
  });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Hero reveal
      gsap.from(".contact-hero", {
        y: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: "power3.out",
        delay: 0.1
      });

      // Contact options and form stagger
      gsap.from(".contact-item", {
        scrollTrigger: {
          trigger: ".contact-grid",
          start: "top 80%",
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out"
      });
    }, containerRef);
    
    return () => ctx.revert();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.message) {
      setSubmitted(true);
    }
  };

  return (
    <main ref={containerRef} className="bg-corpex-black text-corpex-white min-h-screen font-sans pt-32 selection:bg-corpex-gold selection:text-corpex-black">
      
      {/* INTRO HEADER */}
      <section className="py-24 px-6 md:px-12 relative overflow-hidden">
        {/* Subtle Grid Background */}
        <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '4rem 4rem' }}></div>
        
        <div className="container mx-auto max-w-6xl relative z-10">
          <span className="contact-hero text-xs font-bold uppercase tracking-[0.3em] text-corpex-gold block mb-6">CONTACT US</span>
          <h1 className="contact-hero text-6xl md:text-9xl font-bold tracking-tighter uppercase leading-[0.85] text-white mb-8">
            Let&apos;s <span className="text-corpex-gold italic font-serif lowercase tracking-normal text-6xl md:text-9xl">Talk.</span>
          </h1>
          <p className="contact-hero text-xl md:text-3xl font-serif text-white/80 max-w-2xl leading-relaxed">
            Tell us what&apos;s slowing your business down. We&apos;ll tell you what we can do about it.
          </p>
        </div>
      </section>

      {/* DIRECT CONTACT METHODS & FORM */}
      <section className="pb-32 px-6 md:px-12">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 contact-grid">
            
            {/* Direct Contact Buttons */}
            <div className="lg:col-span-5 space-y-6">
              <h2 className="contact-item text-xs font-bold uppercase tracking-[0.2em] text-corpex-gold mb-6">
                Direct Contact
              </h2>

              <a 
                href="https://wa.me/971501234567" 
                target="_blank" 
                rel="noopener noreferrer"
                className="contact-item group flex items-center justify-between p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-corpex-gold hover:bg-corpex-gold hover:text-corpex-black transition-all duration-300"
              >
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full bg-corpex-gold text-corpex-black flex items-center justify-center group-hover:bg-corpex-black group-hover:text-corpex-gold transition-colors">
                    <MessageSquare className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-bold text-lg">WhatsApp Us</div>
                    <div className="text-xs opacity-70">Instant Response</div>
                  </div>
                </div>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </a>

              <a 
                href="tel:+971501234567"
                className="contact-item group flex items-center justify-between p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-corpex-gold hover:bg-corpex-gold hover:text-corpex-black transition-all duration-300"
              >
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full bg-corpex-gold text-corpex-black flex items-center justify-center group-hover:bg-corpex-black group-hover:text-corpex-gold transition-colors">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-bold text-lg">Call Directly</div>
                    <div className="text-xs opacity-70">Speak with an advisor</div>
                  </div>
                </div>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </a>

              <a 
                href="mailto:info@corpexconsulting.com"
                className="contact-item group flex items-center justify-between p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-corpex-gold hover:bg-corpex-gold hover:text-corpex-black transition-all duration-300"
              >
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full bg-corpex-gold text-corpex-black flex items-center justify-center group-hover:bg-corpex-black group-hover:text-corpex-gold transition-colors">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-bold text-lg">Email Us</div>
                    <div className="text-xs opacity-70">info@corpexconsulting.com</div>
                  </div>
                </div>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </a>
            </div>

            {/* Minimal Form */}
            <div className="contact-item lg:col-span-7 bg-white/5 p-10 md:p-14 rounded-[2.5rem] border border-white/10 relative">
              {submitted ? (
                <div className="py-16 text-center space-y-6">
                  <div className="w-16 h-16 bg-corpex-gold text-corpex-black rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-3xl font-bold uppercase tracking-tight">Message Received</h3>
                  <p className="font-serif text-white/70 max-w-md mx-auto">
                    Thank you. A Corpex advisor will review your message and reach out directly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8">
                  <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-corpex-gold mb-8">
                    Send a Message
                  </h3>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-white/60 mb-3">
                      Name *
                    </label>
                    <input 
                      type="text"
                      required
                      placeholder="Your Full Name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-white/30 focus:outline-none focus:border-corpex-gold transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-white/60 mb-3">
                      Business Name
                    </label>
                    <input 
                      type="text"
                      placeholder="Company / Business Name"
                      value={formData.business}
                      onChange={(e) => setFormData({ ...formData, business: e.target.value })}
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-white/30 focus:outline-none focus:border-corpex-gold transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-white/60 mb-3">
                      Message *
                    </label>
                    <textarea 
                      required
                      rows={5}
                      placeholder="Tell us what is slowing your business down..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-white/30 focus:outline-none focus:border-corpex-gold transition-colors resize-none"
                    ></textarea>
                  </div>

                  <button 
                    type="submit"
                    className="w-full bg-corpex-gold text-corpex-black font-bold uppercase tracking-widest text-xs py-5 rounded-2xl hover:bg-white transition-colors duration-300 flex items-center justify-center space-x-3 cursor-pointer"
                  >
                    <span>Send Message</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>

          </div>
        </div>
      </section>

    </main>
  );
}
