"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export default function Loader({ onComplete }: { onComplete: () => void }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const wipeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        onComplete();
      }
    });

    // Initial state
    gsap.set(textRef.current, { yPercent: 100 });
    gsap.set(wipeRef.current, { scaleY: 0, transformOrigin: "bottom" });

    tl.to(dotRef.current, { 
        scale: 1, 
        opacity: 1, 
        duration: 0.8, 
        ease: "power3.out" 
      })
      .to(dotRef.current, { 
        rotation: 45, 
        duration: 0.6, 
        ease: "back.out(1.7)" 
      }, "+=0.2")
      .to(textRef.current, {
        yPercent: 0,
        duration: 0.8,
        ease: "power4.out"
      }, "-=0.2")
      .to(wipeRef.current, {
        scaleY: 1,
        duration: 0.8,
        ease: "power3.inOut"
      }, "+=0.4")
      .to(containerRef.current, {
        yPercent: -100,
        duration: 0.8,
        ease: "power3.inOut"
      }, "-=0.2");

  }, [onComplete]);

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 z-[10000] bg-corpex-black flex items-center justify-center overflow-hidden"
    >
      <div className="relative flex items-center">
        {/* Mask container for text */}
        <div className="overflow-hidden">
          <div 
            ref={textRef} 
            className="text-corpex-white text-4xl md:text-6xl font-sans tracking-tight pr-2"
          >
            Corp<span className="font-bold">ex</span>
          </div>
        </div>
        <div 
          ref={dotRef} 
          className="w-3 h-3 md:w-4 md:h-4 bg-corpex-gold opacity-0 scale-0 origin-center ml-1 mt-4"
        ></div>
      </div>
      
      {/* Blue Wipe */}
      <div 
        ref={wipeRef}
        className="absolute inset-0 bg-corpex-blue z-10"
      ></div>
    </div>
  );
}
