"use client";

import { useEffect, useRef, useState } from "react";

type CountUpStatProps = {
  value: number;
  suffix?: string;
  duration?: number;
};

export default function CountUpStat({ value, suffix = "", duration = 1300 }: CountUpStatProps) {
  const [currentValue, setCurrentValue] = useState(0);
  const elementRef = useRef<HTMLSpanElement>(null);
  const finalLabel = `${value.toLocaleString()}${suffix}`;

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) {
      setCurrentValue(value);
      return;
    }

    let animationFrame = 0;
    let startTime = 0;

    const animate = (time: number) => {
      if (!startTime) startTime = time;
      const progress = Math.min((time - startTime) / duration, 1);
      const easedProgress = 1 - Math.pow(1 - progress, 3);

      setCurrentValue(Math.round(value * easedProgress));

      if (progress < 1) {
        animationFrame = window.requestAnimationFrame(animate);
      }
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        animationFrame = window.requestAnimationFrame(animate);
        observer.disconnect();
      },
      { threshold: 0.35 }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
      window.cancelAnimationFrame(animationFrame);
    };
  }, [duration, value]);

  return (
    <strong ref={elementRef} aria-label={finalLabel}>
      {currentValue.toLocaleString()}{suffix}
    </strong>
  );
}
