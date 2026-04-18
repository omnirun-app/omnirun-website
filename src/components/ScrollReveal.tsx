"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  /** Direction the element slides in from */
  direction?: "up" | "down" | "left" | "right";
  /** Delay in ms before animation starts after element enters viewport */
  delay?: number;
  /** Animation duration in ms */
  duration?: number;
  /** How far the element slides from (in px) */
  distance?: number;
  /** How much of the element must be visible before triggering (0-1) */
  threshold?: number;
  /** Only animate once, or every time it enters viewport */
  once?: boolean;
  className?: string;
}

export default function ScrollReveal({
  children,
  direction = "up",
  delay = 0,
  duration = 600,
  distance = 30,
  threshold = 0.15,
  once = true,
  className = "",
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Wait for initial paint so the "hidden" state renders first
    const timeout = setTimeout(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisible(true);
            if (once) observer.unobserve(el);
          } else if (!once) {
            setVisible(false);
          }
        },
        { threshold }
      );

      observer.observe(el);
    }, 100);

    return () => clearTimeout(timeout);
  }, [threshold, once]);

  const transforms: Record<string, string> = {
    up: `translateY(${distance}px)`,
    down: `translateY(-${distance}px)`,
    left: `translateX(-${distance}px)`,
    right: `translateX(${distance}px)`,
  };

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translate(0, 0)" : transforms[direction],
        transition: `opacity ${duration}ms ease-out ${delay}ms, transform ${duration}ms ease-out ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}