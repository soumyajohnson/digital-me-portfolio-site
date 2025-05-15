
import { useEffect, useRef, ReactNode } from 'react';

interface ScrollRevealProps {
  children: ReactNode;
}

const ScrollReveal = ({ children }: ScrollRevealProps) => {
  const revealRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const revealElement = revealRef.current;
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1 });
    
    if (revealElement) {
      observer.observe(revealElement);
    }
    
    return () => {
      if (revealElement) {
        observer.unobserve(revealElement);
      }
    };
  }, []);
  
  return (
    <div ref={revealRef} className="reveal">
      {children}
    </div>
  );
};

export default ScrollReveal;
