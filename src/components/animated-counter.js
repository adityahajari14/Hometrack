"use client"

import { useEffect, useRef, useState, useCallback } from 'react';

export default function AnimatedCounter({ end, duration = 2000, suffix = "", prefix = "" }) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const counterRef = useRef(null);

  const animateCount = useCallback(() => {
    const startTime = Date.now();
    const endValue = typeof end === 'string' ? parseFloat(end.replace(/[^0-9.]/g, '')) : end;

    const updateCount = () => {
      const now = Date.now();
      const progress = Math.min((now - startTime) / duration, 1);
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentCount = easeOutQuart * endValue;

      setCount(currentCount);

      if (progress < 1) {
        requestAnimationFrame(updateCount);
      } else {
        setCount(endValue);
      }
    };

    requestAnimationFrame(updateCount);
  }, [end, duration]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          animateCount();
        }
      },
      { threshold: 0.1 }
    );

    const currentRef = counterRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [hasAnimated, animateCount]);

  const formatNumber = (num) => {
    // Handle different number formats
    if (typeof end === 'string' && end.includes('Billion')) {
      return num.toFixed(0);
    }
    return Math.round(num);
  };

  return (
    <span ref={counterRef}>
      {prefix}{formatNumber(count)}{suffix}
    </span>
  );
}
