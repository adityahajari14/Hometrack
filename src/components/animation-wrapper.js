"use client"

import { useEffect } from 'react';

export default function AnimationWrapper({ children }) {
  useEffect(() => {
    const observerOnce = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            if (entry.target.classList.contains('animate-on-scroll')) {
              observerOnce.unobserve(entry.target);
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    const observerRepeat = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          } else {
            entry.target.classList.remove('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    // Observe elements that animate once
    const onceElements = document.querySelectorAll('.animate-on-scroll');
    onceElements.forEach((el) => observerOnce.observe(el));

    // Observe elements that animate repeatedly
    const repeatElements = document.querySelectorAll('.scale-in-repeat');
    repeatElements.forEach((el) => observerRepeat.observe(el));

    return () => {
      onceElements.forEach((el) => observerOnce.unobserve(el));
      repeatElements.forEach((el) => observerRepeat.unobserve(el));
    };
  }, []);

  return <>{children}</>;
}
