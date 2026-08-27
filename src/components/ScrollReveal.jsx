import React, { useEffect, useRef, useState } from 'react';

export const ScrollReveal = ({ children, className = "", delay = "" }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Once visible, we can stop observing this specific element
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1, // trigger when 10% of the element is visible
        rootMargin: "0px 0px -50px 0px" // trigger slightly before entering viewport fully
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-750 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        isVisible 
          ? 'opacity-100 translate-y-0 scale-100' 
          : 'opacity-0 translate-y-12 scale-[0.98]'
      } ${delay} ${className}`}
    >
      {children}
    </div>
  );
};
