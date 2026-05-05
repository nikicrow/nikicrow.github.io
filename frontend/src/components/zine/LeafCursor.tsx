import { useEffect, useRef } from 'react';

export function LeafCursor() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let raf = 0, tx = 0, ty = 0, x = 0, y = 0;

    const onMove = (e: MouseEvent) => {
      tx = e.clientX + 18;
      ty = e.clientY + 14;
      if (!raf) raf = requestAnimationFrame(tick);
    };

    const tick = () => {
      x += (tx - x) * 0.18;
      y += (ty - y) * 0.18;
      el.style.transform = `translate(${x}px, ${y}px)`;
      if (Math.abs(tx - x) > 0.4 || Math.abs(ty - y) > 0.4) {
        raf = requestAnimationFrame(tick);
      } else {
        raf = 0;
      }
    };

    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  return (
    <div
      ref={ref}
      style={{
        position: 'fixed',
        left: 0,
        top: 0,
        pointerEvents: 'none',
        zIndex: 9999,
      }}
    >
      <svg
        viewBox="0 0 20 30"
        width="18"
        height="26"
        style={{
          transform: 'rotate(-20deg)',
          filter: 'drop-shadow(0 1px 3px rgba(0,0,0,0.18))',
          display: 'block',
        }}
      >
        <path
          d="M 10 1 C 21 7 21 22 10 28 C -1 22 -1 7 10 1 Z"
          fill="var(--zine-sage)"
        />
        <path
          d="M 10 2 L 10 27 Q 8 30 6 31"
          stroke="var(--zine-sage2)"
          strokeWidth="0.9"
          strokeLinecap="round"
          fill="none"
        />
      </svg>
    </div>
  );
}
