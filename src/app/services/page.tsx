"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowRight, ChevronDown, Star } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface ServiceCategory {
  num: string;
  title: string;
  desc: string;
  items: string[];
  img: string;
}

const serviceCategories: ServiceCategory[] = [
  {
    num: "01",
    title: "BUSINESS SETUP & CORPORATE SERVICES",
    desc: "Establishing, expanding, and managing a legal business presence.",
    img: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2000&auto=format&fit=crop",
    items: [
      "Mainland Company Formation", "Free Zone Company Formation", "Offshore Company Formation",
      "Branch Office Registration", "Company Amendments", "Trade License Renewal",
      "Company Liquidation & Deregistration", "Corporate Compliance", "AML Compliance",
      "UBO Declaration", "ESR Services", "Corporate Secretarial Services",
      "Corporate Document Assistance", "TAQA Registration", "ADNOC Vendor Registration",
      "DARB Registration", "Customs Related Services", "Certificate Attestation",
      "Employee Visa Processing", "Investor Visa Processing", "Emirates ID Assistance",
      "Labour & Immigration Support"
    ]
  },
  {
    num: "02",
    title: "ACCOUNTING, TAX & FINANCIAL SERVICES",
    desc: "Keeping a business financially healthy and fully compliant.",
    img: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2000&auto=format&fit=crop",
    items: [
      "Accounting & Bookkeeping", "Outsourced Accounting", "Cloud Accounting",
      "Family Office Accounting", "Financial Reporting", "VAT Registration",
      "VAT Filing", "VAT Accounting", "VAT Audit", "VAT Amendment",
      "VAT Deregistration", "VAT Penalty Reconsideration", "Tax Invoice Guidance",
      "Tax Agent Services", "Corporate Tax Registration", "Corporate Tax Filing",
      "Corporate Tax Amendment", "Corporate Tax Deregistration", "Corporate Tax Advisory",
      "Corporate Tax Penalty Reconsideration", "Payroll Processing", "Payroll Management",
      "Employee Self-Service Portal"
    ]
  },
  {
    num: "03",
    title: "AUDIT & ASSURANCE",
    desc: "Improving transparency, compliance, and operational control.",
    img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2000&auto=format&fit=crop",
    items: [
      "Internal Audit", "External Audit", "Sales Audit", "Bank Audit",
      "RERA Audit", "VAT Audit", "Due Diligence", "Fraud Investigation Audit",
      "Financial Compliance Review"
    ]
  },
  {
    num: "04",
    title: "FINANCIAL ADVISORY & BUSINESS PERFORMANCE",
    desc: "Improving profitability and supporting better financial decisions.",
    img: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=2000&auto=format&fit=crop",
    items: [
      "Business Advisory", "Financial Advisory", "Business Valuation",
      "Feasibility Studies", "Corporate Banking Consulting", "Financial Planning",
      "Budgeting", "Cash Flow Analysis", "Cost Optimization",
      "KPI Dashboard Development", "Performance Reviews", "Profitability Analysis",
      "Growth Strategy"
    ]
  },
  {
    num: "05",
    title: "BRANDING & IDENTITY",
    desc: "Building a memorable, consistent brand.",
    img: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=2000&auto=format&fit=crop",
    items: [
      "Logo Design", "Brand Identity", "Brand Guidelines", "Business Cards",
      "Letterheads", "Email Signature Design", "Corporate Identity Kit"
    ]
  },
  {
    num: "06",
    title: "CORPORATE DOCUMENTS & PRESENTATIONS",
    desc: "Professional business communication, done properly.",
    img: "https://images.unsplash.com/photo-1512428559087-560fa5ceab42?q=80&w=2000&auto=format&fit=crop",
    items: [
      "Company Profile", "Corporate Brochure", "Pitch Deck", "Business Proposal",
      "Sales Presentation", "Capability Statement", "Tender Documents",
      "Investment Deck", "Corporate Portfolio"
    ]
  },
  {
    num: "07",
    title: "WEBSITE & DIGITAL PRESENCE",
    desc: "Establishing a proper, reliable online presence.",
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2000&auto=format&fit=crop",
    items: [
      "Website Development", "Landing Pages", "Website Maintenance",
      "Website Speed Optimization", "Security Updates", "Content Updates",
      "Domain Registration", "Hosting Setup", "SSL Installation",
      "Business Email Setup", "Website Migration"
    ]
  },
  {
    num: "08",
    title: "CRM & BUSINESS AUTOMATION",
    desc: "Automating the systems that run a business day to day.",
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2000&auto=format&fit=crop",
    items: [
      "CRM Setup", "CRM Customization", "CRM Migration", "Pipeline Setup",
      "WhatsApp Automation", "Email Automation", "Lead Management",
      "Customer Database Setup", "Sales Workflow Automation"
    ]
  },
  {
    num: "09",
    title: "GOOGLE BUSINESS SOLUTIONS",
    desc: "Improving local visibility, set up right from the start.",
    img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2000&auto=format&fit=crop",
    items: [
      "Google Business Profile Setup", "Verification", "Optimization",
      "Review Strategy", "Local Ranking", "Google Maps Optimization"
    ]
  },
  {
    num: "10",
    title: "CREATIVE & CONTENT PRODUCTION",
    desc: "Professional photography, video, and content.",
    img: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=2000&auto=format&fit=crop",
    items: [
      "Corporate Photography", "Product Photography", "Event Photography",
      "Promotional Videos", "Corporate Videos", "Interview Videos",
      "Drone Shoots", "Reel Production", "Testimonial Videos",
      "AI Video Production", "AI Images", "Faceless Content", "AI Marketing Assets"
    ]
  },
  {
    num: "11",
    title: "PRINT & MARKETING MATERIALS",
    desc: "Offline branding, done with the same care as everything else.",
    img: "https://images.unsplash.com/photo-1503694978374-8a2fa686963a?q=80&w=2000&auto=format&fit=crop",
    items: [
      "Flyers", "Brochures", "Catalogues", "Roll-up Banners", "Signboards",
      "Exhibition Booth Graphics", "Packaging Design", "Corporate Gifts",
      "Uniform Design", "Promotional Merchandise", "Stickers", "Vehicle Branding"
    ]
  },
  {
    num: "12",
    title: "CERTIFICATIONS & SPECIALIZED SERVICES",
    desc: "Premium corporate services and compliance documentation.",
    img: "https://images.unsplash.com/photo-1628102491629-77858ab216b5?q=80&w=2000&auto=format&fit=crop",
    items: [
      "ISO Certification", "ICV Certification", "Corporate Compliance Consulting",
      "Quality Management Documentation"
    ]
  },
  {
    num: "13",
    title: "EVENT MANAGEMENT & CORPORATE EXPERIENCES",
    desc: "Planning and executing events that strengthen brand and relationships.",
    img: "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=2000&auto=format&fit=crop",
    items: [
      "Corporate Event Planning", "Product Launches", "Grand Openings",
      "Business Networking Events", "Annual Company Events", "Award Ceremonies",
      "Gala Dinners", "Conferences", "Seminars", "Workshops", "Training Programs",
      "Press Conferences", "Exhibition Planning", "Booth Design & Fabrication",
      "Exhibition Branding", "Stall Management", "Visitor Registration",
      "Promotional Staff Coordination", "Stage Design", "LED Screen Content",
      "Backdrop Design", "Welcome Boards", "Event Signage", "Event Branding Materials",
      "Event Photography & Videography", "Live Streaming", "Drone Coverage",
      "Highlight Reels", "Aftermovie Production", "Venue Selection",
      "Catering Coordination", "Guest Management", "VIP Management",
      "Registration Systems", "Security Coordination", "Entertainment Booking",
      "VIP Gifts", "Employee Appreciation Gifts", "Client Gifts",
      "Event Merchandise", "Welcome Kits"
    ]
  }
];

export default function ServicesPage() {
  const [expanded, setExpanded] = useState<number | null>(0);
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

      gsap.from(".service-card", {
        scrollTrigger: {
          trigger: containerRef.current,
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

  const toggleAccordion = (index: number) => {
    setExpanded(expanded === index ? null : index);
  };

  return (
    <main className="bg-corpex-white text-corpex-black min-h-screen font-sans pt-32 selection:bg-corpex-gold selection:text-corpex-black">
      
      {/* HEADER */}
      <section className="py-32 md:py-48 px-6 md:px-12 relative overflow-hidden flex items-center justify-center min-h-[60vh] rounded-b-[2.5rem] shadow-xl z-20">
        {/* Background Image */}
        <div className="absolute inset-0 z-0 bg-corpex-black">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img 
            src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2000&auto=format&fit=crop" 
            alt="Business Services" 
            className="w-full h-full object-cover opacity-40 mix-blend-luminosity"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-corpex-black/90 via-corpex-black/20 to-transparent"></div>
        </div>

        <div className="container mx-auto max-w-4xl text-center relative z-10 flex flex-col items-center">
          <span className="hero-reveal text-xs font-bold uppercase tracking-[0.3em] text-corpex-gold block mb-6">OUR SERVICES</span>
          <h1 className="hero-reveal text-5xl md:text-8xl font-bold tracking-tighter uppercase leading-[0.85] text-white mb-6">
            Complete Business<br/>
            <span className="text-corpex-gold italic font-serif lowercase tracking-normal text-6xl md:text-9xl">Capabilities.</span>
          </h1>
          <p className="hero-reveal text-lg md:text-xl font-serif text-white/70 leading-relaxed max-w-2xl">
            We handle the functions that keep a business running and growing — so you don&apos;t have to manage a dozen different providers to get there.
          </p>
        </div>
      </section>

      {/* ACCORDION SERVICES LIST & GALLERY */}
      <section className="pb-24 pt-12 px-6 md:px-12 bg-corpex-white overflow-hidden">
        
        {/* MASONRY TESTIMONIALS SECTION */}
        <div className="w-full max-w-6xl mx-auto mb-32 pt-8">
          
          {/* Image Collage */}
          <div className="flex justify-center items-center gap-4 md:gap-6 mb-16 h-[300px] md:h-[450px]">
             {/* Col 1 */}
             <div className="flex-col gap-4 md:gap-6 h-[85%] justify-center hidden md:flex w-[18%] opacity-90">
               {/* eslint-disable-next-line @next/next/no-img-element */}
               <img src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=400&auto=format&fit=crop" alt="Gallery" className="rounded-3xl w-full h-[45%] object-cover shadow-md hover:scale-105 transition-transform duration-500" />
               {/* eslint-disable-next-line @next/next/no-img-element */}
               <img src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=400&auto=format&fit=crop" alt="Gallery" className="rounded-3xl w-full h-[55%] object-cover shadow-md hover:scale-105 transition-transform duration-500" />
             </div>
             {/* Col 2 */}
             <div className="flex flex-col gap-4 md:gap-6 h-[95%] justify-start w-[30%] md:w-[22%] -translate-y-4">
               {/* eslint-disable-next-line @next/next/no-img-element */}
               <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=400&auto=format&fit=crop" alt="Gallery" className="rounded-[2.5rem] w-full h-[45%] object-cover shadow-lg hover:scale-105 transition-transform duration-500" />
               {/* eslint-disable-next-line @next/next/no-img-element */}
               <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=400&auto=format&fit=crop" alt="Gallery" className="rounded-[2.5rem] w-full h-[55%] object-cover shadow-lg hover:scale-105 transition-transform duration-500" />
             </div>
             {/* Col 3 (Center Tall) */}
             <div className="flex flex-col gap-4 md:gap-6 h-full justify-center w-[35%] md:w-[24%] -translate-y-8 z-10">
               {/* eslint-disable-next-line @next/next/no-img-element */}
               <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=600&auto=format&fit=crop" alt="Gallery" className="rounded-[2.5rem] w-full h-[95%] object-cover shadow-2xl border-4 border-white hover:scale-105 transition-transform duration-500" />
             </div>
             {/* Col 4 */}
             <div className="flex flex-col gap-4 md:gap-6 h-[90%] justify-end w-[30%] md:w-[22%] translate-y-4">
               {/* eslint-disable-next-line @next/next/no-img-element */}
               <img src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=400&auto=format&fit=crop" alt="Gallery" className="rounded-[2.5rem] w-full h-[65%] object-cover shadow-lg hover:scale-105 transition-transform duration-500" />
               {/* eslint-disable-next-line @next/next/no-img-element */}
               <img src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=400&auto=format&fit=crop" alt="Gallery" className="rounded-[2.5rem] w-full h-[35%] object-cover shadow-lg hover:scale-105 transition-transform duration-500" />
             </div>
             {/* Col 5 */}
             <div className="flex-col gap-4 md:gap-6 h-[75%] justify-center hidden md:flex w-[18%] opacity-90">
               {/* eslint-disable-next-line @next/next/no-img-element */}
               <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=400&auto=format&fit=crop" alt="Gallery" className="rounded-3xl w-full h-[55%] object-cover shadow-md hover:scale-105 transition-transform duration-500" />
               {/* eslint-disable-next-line @next/next/no-img-element */}
               <img src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=400&auto=format&fit=crop" alt="Gallery" className="rounded-3xl w-full h-[45%] object-cover shadow-md hover:scale-105 transition-transform duration-500" />
             </div>
          </div>

          {/* Text Content */}
          <div className="text-center mb-16 relative z-20">
            <span className="inline-block border border-black/10 rounded-full px-8 py-2.5 text-xs font-bold tracking-widest text-corpex-black mb-6 shadow-sm bg-white">
              Testimonials
            </span>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-corpex-black mb-2">
              Trusted by creatives and leaders
            </h2>
            <h3 className="text-3xl md:text-5xl font-serif text-corpex-black/40 italic">
              from various industries
            </h3>
          </div>

          {/* Testimonial Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Joao M.",
                role: "Startup Founder",
                text: '"Corpex makes finding a business setup solution so easy! We registered our company in minutes and got straight to work. Highly recommend!"',
                img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop"
              },
              {
                name: "Bruno K.",
                role: "UX Designer",
                text: '"Our team needed a flexible PRO service, and Corpex delivered. The process was smooth, and the service was exactly what we needed!"',
                img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop"
              },
              {
                name: "Lais A.",
                role: "Digital Marketer",
                text: '"I love the variety of services available! Whether I need tax accounting or a branding strategy, Corpex always has the perfect option."',
                img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop"
              }
            ].map((test, i) => (
              <div key={i} className="p-8 rounded-[2rem] bg-white border border-black/5 hover:border-corpex-gold/30 hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
                <div>
                  <div className="flex text-[#F5B800] mb-6 gap-1">
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                  </div>
                  <p className="text-corpex-black/70 mb-8 leading-relaxed text-sm md:text-base font-medium">
                    {test.text}
                  </p>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden shrink-0 border-2 border-white shadow-sm">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={test.img} alt={test.name} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <div className="font-bold text-sm text-corpex-black">{test.name}</div>
                    <div className="text-xs text-corpex-black/50 font-medium">{test.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="container mx-auto max-w-6xl" ref={containerRef}>
          <div className="space-y-6">
            {serviceCategories.map((cat, index) => {
              const isOpen = expanded === index;
              return (
                <div 
                  key={cat.num}
                  className={`service-card rounded-3xl border transition-all duration-300 overflow-hidden ${
                    isOpen 
                      ? 'bg-corpex-black text-corpex-white border-corpex-black shadow-2xl' 
                      : 'bg-[#F8F9FA] text-corpex-black border-black/5 hover:border-corpex-gold/40'
                  }`}
                >
                  {/* Collapsed Header Bar */}
                  <button 
                    onClick={() => toggleAccordion(index)}
                    className="w-full text-left p-8 md:p-10 flex flex-col md:flex-row md:items-center justify-between gap-6 cursor-pointer"
                  >
                    <div className="flex items-start md:items-center gap-6">
                      <span className={`font-serif italic text-2xl font-bold ${isOpen ? 'text-corpex-gold' : 'text-corpex-gold'}`}>
                        {cat.num}
                      </span>
                      <div>
                        <h3 className={`text-2xl md:text-3xl font-bold tracking-tight uppercase ${isOpen ? 'text-white' : 'text-corpex-blue'}`}>
                          {cat.title}
                        </h3>
                        <p className={`text-sm md:text-base font-serif mt-1 ${isOpen ? 'text-white/70' : 'text-corpex-black/60'}`}>
                          {cat.desc}
                        </p>
                      </div>
                    </div>

                    <div className={`w-12 h-12 shrink-0 rounded-full border flex items-center justify-center transition-transform duration-300 ${
                      isOpen ? 'border-corpex-gold bg-corpex-gold text-corpex-black rotate-180' : 'border-black/10 text-corpex-black'
                    }`}>
                      <ChevronDown className="w-5 h-5" />
                    </div>
                  </button>

                  {/* Expanded Sub-Services Grid & Image Panel */}
                  {isOpen && (
                    <div className="px-8 md:px-10 pb-10 pt-2 border-t border-white/10">
                      <div className="flex flex-col lg:flex-row gap-12 mt-8">
                        <div className="lg:w-2/3">
                          <div className="text-xs font-bold uppercase tracking-widest text-corpex-gold mb-6">
                            Included Capabilities ({cat.items.length})
                          </div>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {cat.items.map((item, i) => (
                              <div 
                                key={i}
                                className="flex items-center space-x-3 p-3 rounded-xl bg-white/5 border border-white/5 hover:border-corpex-gold/30 transition-colors"
                              >
                                <span className="w-1.5 h-1.5 rounded-full bg-corpex-gold"></span>
                                <span className="text-sm font-medium text-white/90 leading-tight">{item}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                        <div className="lg:w-1/3 hidden lg:block relative rounded-2xl overflow-hidden border border-white/10">
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img 
                            src={cat.img} 
                            alt={cat.title}
                            className="w-full h-full object-cover absolute inset-0 transition-transform duration-700 hover:scale-105"
                          />
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SERVICES PAGE CLOSING CTA */}
      <section className="py-32 px-6 md:px-12 bg-corpex-black text-corpex-white text-center relative overflow-hidden border-t border-white/10">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl md:text-7xl font-bold tracking-tighter uppercase mb-8">
            Need a custom solution for your business?
          </h2>
          <Link 
            href="/contact"
            className="inline-flex items-center space-x-6 bg-corpex-gold text-corpex-black px-10 py-5 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-white transition-all duration-300"
          >
            <span>Discuss Your Business</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

    </main>
  );
}
