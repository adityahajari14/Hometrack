"use client"

import { useEffect } from 'react';

export default function AnimationWrapper({ children }) {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            // Unobserve after animation triggers to prevent re-triggering
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    // Observe all elements with animation classes
    const animatedElements = document.querySelectorAll('.animate-on-scroll, .scale-in-repeat');
    animatedElements.forEach((el) => observer.observe(el));

    return () => {
      animatedElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return <>{children}</>;
}
