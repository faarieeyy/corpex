"use client";

import { useState, useEffect, useRef } from "react";
import clsx from "clsx";
import { Plus, Minus } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const services = [
  {
    num: "01",
    title: "Business Setup & Corporate Services",
    desc: "Establishing, expanding, and managing a legal business presence.",
    items: "Mainland Company Formation · Free Zone Company Formation · Offshore Company Formation · Branch Office Registration · Company Amendments · Trade License Renewal · Company Liquidation & Deregistration · Corporate Compliance · AML Compliance · UBO Declaration · ESR Services · Corporate Secretarial Services · Corporate Document Assistance · TAQA Registration · ADNOC Vendor Registration · DARB Registration · Customs Related Services · Certificate Attestation · Employee Visa Processing · Investor Visa Processing · Emirates ID Assistance · Labour & Immigration Support",
  },
  {
    num: "02",
    title: "Accounting, Tax & Financial Services",
    desc: "Keeping a business financially healthy and fully compliant.",
    items: "Accounting & Bookkeeping · Outsourced Accounting · Cloud Accounting · Family Office Accounting · Financial Reporting · VAT Registration · VAT Filing · VAT Accounting · VAT Audit · VAT Amendment · VAT Deregistration · VAT Penalty Reconsideration · Tax Invoice Guidance · Tax Agent Services · Corporate Tax Registration · Corporate Tax Filing · Corporate Tax Amendment · Corporate Tax Deregistration · Corporate Tax Advisory · Corporate Tax Penalty Reconsideration · Payroll Processing · Payroll Management · Employee Self-Service Portal",
  },
  {
    num: "03",
    title: "Audit & Assurance",
    desc: "Improving transparency, compliance, and operational control.",
    items: "Internal Audit · External Audit · Sales Audit · Bank Audit · RERA Audit · VAT Audit · Due Diligence · Fraud Investigation Audit · Financial Compliance Review",
  },
  {
    num: "04",
    title: "Financial Advisory & Business Performance",
    desc: "Improving profitability and supporting better financial decisions.",
    items: "Business Advisory · Financial Advisory · Business Valuation · Feasibility Studies · Corporate Banking Consulting · Financial Planning · Budgeting · Cash Flow Analysis · Cost Optimization · KPI Dashboard Development · Performance Reviews · Profitability Analysis · Growth Strategy",
  },
  {
    num: "05",
    title: "Branding & Identity",
    desc: "Building a memorable, consistent brand.",
    items: "Logo Design · Brand Identity · Brand Guidelines · Business Cards · Letterheads · Email Signature Design · Corporate Identity Kit",
  },
  {
    num: "06",
    title: "Corporate Documents & Presentations",
    desc: "Professional business communication, done properly.",
    items: "Company Profile · Corporate Brochure · Pitch Deck · Business Proposal · Sales Presentation · Capability Statement · Tender Documents · Investment Deck · Corporate Portfolio",
  },
  {
    num: "07",
    title: "Website & Digital Presence",
    desc: "Establishing a proper, reliable online presence.",
    items: "Website Development · Landing Pages · Website Maintenance · Website Speed Optimization · Security Updates · Content Updates · Domain Registration · Hosting Setup · SSL Installation · Business Email Setup · Website Migration",
  },
  {
    num: "08",
    title: "CRM & Business Automation",
    desc: "Automating the systems that run a business day to day.",
    items: "CRM Setup · CRM Customization · CRM Migration · Pipeline Setup · WhatsApp Automation · Email Automation · Lead Management · Customer Database Setup · Sales Workflow Automation",
  },
  {
    num: "09",
    title: "Google Business Solutions",
    desc: "Improving local visibility, set up right from the start.",
    items: "Google Business Profile Setup · Verification · Optimization · Review Strategy · Local Ranking · Google Maps Optimization",
  },
  {
    num: "10",
    title: "Creative & Content Production",
    desc: "Professional photography, video, and content.",
    items: "Corporate Photography · Product Photography · Event Photography · Promotional Videos · Corporate Videos · Interview Videos · Drone Shoots · Reel Production · Testimonial Videos · AI Video Production · AI Images · Faceless Content · AI Marketing Assets",
  },
  {
    num: "11",
    title: "Print & Marketing Materials",
    desc: "Offline branding, done with the same care as everything else.",
    items: "Flyers · Brochures · Catalogues · Roll-up Banners · Signboards · Exhibition Booth Graphics · Packaging Design · Corporate Gifts · Uniform Design · Promotional Merchandise · Stickers · Vehicle Branding",
  },
  {
    num: "12",
    title: "Certifications & Specialized Services",
    desc: "Premium corporate services and compliance documentation.",
    items: "ISO Certification · ICV Certification · Corporate Compliance Consulting · Quality Management Documentation",
  },
  {
    num: "13",
    title: "Event Management & Corporate Experiences",
    desc: "Planning and executing events that strengthen brand and relationships.",
    items: "Corporate Event Planning · Product Launches · Grand Openings · Business Networking Events · Annual Company Events · Award Ceremonies · Gala Dinners · Conferences · Seminars · Workshops · Training Programs · Press Conferences · Exhibition Planning · Booth Design & Fabrication · Exhibition Branding · Stall Management · Visitor Registration · Promotional Staff Coordination · Stage Design · LED Screen Content · Backdrop Design · Welcome Boards · Event Signage · Event Branding Materials · Event Photography & Videography · Live Streaming · Drone Coverage · Highlight Reels · Aftermovie Production · Venue Selection · Catering Coordination · Guest Management · VIP Management · Registration Systems · Security Coordination · Entertainment Booking · VIP Gifts · Employee Appreciation Gifts · Client Gifts · Event Merchandise · Welcome Kits",
  }
];

export default function Services() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const heroRef = useRef<HTMLHeadingElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

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

      // Staggered list items reveal
      if (listRef.current) {
        const items = gsap.utils.toArray(".service-item");
        
        items.forEach((item: any, i) => {
          gsap.fromTo(item,
            { opacity: 0, y: 50 },
            {
              opacity: 1,
              y: 0,
              duration: 0.8,
              ease: "power3.out",
              scrollTrigger: {
                trigger: item,
                start: "top 85%",
              }
            }
          );
        });
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="pt-32 pb-20 bg-corpex-white text-corpex-black min-h-screen relative">
      
      {/* Header */}
      <section className="container mx-auto px-6 md:px-12 pt-20 pb-12 overflow-hidden" style={{ perspective: '1000px' }}>
        <div className="w-4 h-4 bg-corpex-gold rotate-45 mb-8"></div>
        <h1 ref={heroRef} className="text-[var(--text-hero)] font-bold tracking-tight leading-[1.1] mb-12 origin-bottom">
          Services.
        </h1>
        <p className="text-[var(--text-sub)] font-serif text-corpex-black/70 max-w-4xl leading-relaxed border-l-2 border-corpex-gold pl-8">
          We handle the functions that keep a business running and growing — so you don&apos;t have to manage a dozen different providers to get there.
        </p>
      </section>

      {/* Accordion System */}
      <section className="container mx-auto px-6 md:px-12 py-12">
        <div className="max-w-5xl" ref={listRef}>
          {services.map((service, index) => {
            const isOpen = openIndex === index;
            
            return (
              <div 
                key={index} 
                className={clsx(
                  "service-item border-b border-corpex-black/10 overflow-hidden transition-all duration-700",
                  isOpen ? "bg-corpex-black/5 rounded-2xl my-4" : "hover:bg-corpex-black/5"
                )}
              >
                <button 
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full text-left py-10 px-6 md:px-12 flex flex-col md:flex-row md:items-center justify-between group cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-start md:items-center gap-8 mb-4 md:mb-0">
                    <span className={clsx(
                      "font-bold shrink-0 transition-colors duration-300",
                      isOpen ? "text-corpex-blue" : "text-corpex-gold"
                    )}>
                      {service.num}
                    </span>
                    <div>
                      <h3 className={clsx(
                        "text-2xl md:text-3xl font-bold tracking-tight transition-colors duration-300",
                        isOpen ? "text-corpex-black" : "text-corpex-black/70 group-hover:text-corpex-black"
                      )}>
                        {service.title}
                      </h3>
                      <p className={clsx("font-serif mt-2 max-w-2xl transition-colors duration-300", isOpen ? "text-corpex-black/80" : "text-corpex-black/50 group-hover:text-corpex-black/70")}>
                        {service.desc}
                      </p>
                    </div>
                  </div>
                  
                  <div className={clsx(
                    "shrink-0 ml-auto md:ml-8 mt-4 md:mt-0 flex items-center justify-center w-12 h-12 rounded-full border transition-colors",
                    isOpen ? "border-corpex-blue bg-corpex-blue" : "border-corpex-black/20 group-hover:border-corpex-gold"
                  )}>
                    {isOpen ? (
                      <Minus className="w-5 h-5 text-corpex-white" />
                    ) : (
                      <Plus className="w-5 h-5 text-corpex-black/60 group-hover:text-corpex-gold" />
                    )}
                  </div>
                </button>
                
                <div 
                  className={clsx(
                    "grid transition-all duration-700 ease-[cubic-bezier(0.7,0,0.3,1)] px-6 md:px-12",
                    isOpen ? "grid-rows-[1fr] opacity-100 pb-10" : "grid-rows-[0fr] opacity-0 pb-0"
                  )}
                >
                  <div className="overflow-hidden">
                    <div className="pt-6 border-t border-corpex-black/10 flex items-start">
                      <div className="w-2 h-2 bg-corpex-gold rotate-45 shrink-0 mt-2 mr-6 hidden md:block"></div>
                      <p className="text-corpex-black/80 leading-loose text-lg font-sans font-medium">
                        {service.items}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
