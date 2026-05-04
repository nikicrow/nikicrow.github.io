import { useEffect } from 'react';

export function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>('.reveal');
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('show')),
      { threshold: 0.15 }
    );
    els.forEach((el) => io.observe(el));

    const draws = document.querySelectorAll<SVGPathElement>('[data-draw]');
    const io2 = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) (e.target as HTMLElement).style.strokeDashoffset = '0';
      }),
      { threshold: 0.3 }
    );
    draws.forEach((el) => {
      const len = (el as SVGPathElement).getTotalLength?.() ?? 400;
      el.style.strokeDasharray = String(len);
      el.style.strokeDashoffset = String(len);
      el.style.transition = 'stroke-dashoffset 1.4s ease-out';
      io2.observe(el);
    });

    return () => { io.disconnect(); io2.disconnect(); };
  });
}
