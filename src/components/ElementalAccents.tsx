export const HandDrawnStar = ({ className = "" }: { className?: string }) => (
  <svg 
    viewBox="0 0 100 100" 
    className={`w-12 h-12 fill-none stroke-current stroke-2 ${className}`}
    style={{ strokeLinecap: "round", strokeLinejoin: "round" }}
  >
    <path d="M50 10 C 50 30, 70 50, 90 50 C 70 50, 50 70, 50 90 C 50 70, 30 50, 10 50 C 30 50, 50 30, 50 10 Z" />
    <path d="M30 30 L 40 40 M 70 30 L 60 40 M 30 70 L 40 60 M 70 70 L 60 60" className="opacity-50" />
  </svg>
);

export const HandDrawnSquiggle = ({ className = "" }: { className?: string }) => (
  <svg 
    viewBox="0 0 100 50" 
    className={`w-20 h-10 fill-none stroke-current stroke-2 ${className}`}
    style={{ strokeLinecap: "round", strokeLinejoin: "round" }}
  >
    <path d="M10 25 Q 20 5, 30 25 T 50 25 T 70 25 T 90 25" />
  </svg>
);

export const HandDrawnArrow = ({ className = "" }: { className?: string }) => (
  <svg 
    viewBox="0 0 100 100" 
    className={`w-12 h-12 fill-none stroke-current stroke-2 ${className}`}
    style={{ strokeLinecap: "round", strokeLinejoin: "round" }}
  >
    <path d="M10 50 C 30 20, 70 80, 90 50" />
    <path d="M75 50 L 90 50 L 80 65" />
  </svg>
);
