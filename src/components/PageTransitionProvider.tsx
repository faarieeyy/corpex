"use client";

import { createContext, useContext, ReactNode, useState, useRef } from "react";
import gsap from "gsap";
import { useRouter } from "next/navigation";

interface TransitionContextType {
  navigateWithTransition: (href: string) => void;
}

const TransitionContext = createContext<TransitionContextType>({
  navigateWithTransition: () => {},
});

export const usePageTransition = () => useContext(TransitionContext);

export default function PageTransitionProvider({ children }: { children: ReactNode }) {
  const router = useRouter();
  const transitionRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const navigateWithTransition = (href: string) => {
    if (isTransitioning) return;
    setIsTransitioning(true);

    const tl = gsap.timeline({
      onComplete: () => {
        router.push(href);
        // Add a slight delay before revealing new page
        setTimeout(() => {
          gsap.to(transitionRef.current, {
            yPercent: -100,
            duration: 0.8,
            ease: "power3.inOut",
            onComplete: () => {
              gsap.set(transitionRef.current, { yPercent: 100 });
              setIsTransitioning(false);
            }
          });
        }, 500);
      }
    });

    // Reset position
    gsap.set(transitionRef.current, { yPercent: 100 });
    
    // Animation: Small gold square expands, then blue panel wipes up
    tl.set(dotRef.current, { scale: 0, opacity: 1 })
      .to(dotRef.current, { scale: 1, duration: 0.4, ease: "back.out(1.7)" })
      .to(transitionRef.current, { 
        yPercent: 0, 
        duration: 0.8, 
        ease: "power3.inOut" 
      }, "-=0.2")
      .to(dotRef.current, { opacity: 0, duration: 0.2 }, "-=0.4");
  };

  return (
    <TransitionContext.Provider value={{ navigateWithTransition }}>
      {children}
      {/* The Transition Overlay */}
      <div 
        ref={transitionRef}
        className="page-transition-layer transition-blue flex items-center justify-center"
      >
         <div ref={dotRef} className="w-8 h-8 bg-corpex-gold rotate-45 opacity-0"></div>
      </div>
    </TransitionContext.Provider>
  );
}
