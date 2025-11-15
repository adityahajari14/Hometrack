"use client"

import { useEffect, useState, useRef } from 'react';
import { usePathname } from 'next/navigation';

export default function AnimationWrapper({ children }) {
  const pathname = usePathname();
  const [animationState, setAnimationState] = useState('enter');
  const [displayContent, setDisplayContent] = useState(children);
  const prevPathnameRef = useRef(pathname);
  const isFirstRender = useRef(true);

  useEffect(() => {
    // Skip transition on first render
    if (isFirstRender.current) {
      isFirstRender.current = false;
      prevPathnameRef.current = pathname;
      return;
    }

    // Only trigger transition if pathname actually changed
    if (prevPathnameRef.current !== pathname) {
      // Start exit animation
      setAnimationState('exit');
      
      // Scroll to top instantly
      window.scrollTo({ top: 0, behavior: 'instant' });
      
      const timeout = setTimeout(() => {
        setDisplayContent(children);
        prevPathnameRef.current = pathname;
        // Trigger enter animation
        setAnimationState('enter');
      }, 300);

      return () => clearTimeout(timeout);
    } else {
      setDisplayContent(children);
    }
  }, [pathname, children]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const animatedElements = document.querySelectorAll('.animate-on-scroll, .scale-in-repeat');
    animatedElements.forEach((el) => observer.observe(el));

    return () => {
      animatedElements.forEach((el) => observer.unobserve(el));
    };
  }, [displayContent]);

  return (
    <div className={`page-transition-container page-transition-${animationState}`} style={{ backgroundColor: '#000000' }}>
      {displayContent}
    </div>
  );
}
