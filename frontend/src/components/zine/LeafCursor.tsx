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
        viewBox="0 0 48 58"
        width="42"
        height="50"
        style={{
          transform: 'rotate(-20deg)',
          filter: 'drop-shadow(0 2px 5px rgba(0,0,0,0.25))',
          display: 'block',
        }}
      >
        <defs>
          <radialGradient id="leafGrad" cx="65%" cy="28%" r="75%">
            <stop offset="0%" stopColor="#70cc44" />
            <stop offset="100%" stopColor="#3a8c22" />
          </radialGradient>
        </defs>
        <path
          d="M 24 2 Q 36 4 40 14 Q 38 18 32 20 Q 40 24 44 32 Q 40 38 34 38 Q 30 46 24 52 Q 18 46 14 38 Q 8 38 4 32 Q 8 24 16 20 Q 10 18 8 14 Q 12 4 24 2 Z"
          fill="url(#leafGrad)"
          stroke="#1a5c12"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
        <path d="M 24 5 L 24 50" stroke="#1a5c12" strokeWidth="1.2" strokeLinecap="round" fill="none" />
        <path d="M 24 18 Q 17 15 11 17" stroke="#1a5c12" strokeWidth="0.8" fill="none" strokeLinecap="round" />
        <path d="M 24 18 Q 31 15 37 17" stroke="#1a5c12" strokeWidth="0.8" fill="none" strokeLinecap="round" />
        <path d="M 24 30 Q 15 27 8 30" stroke="#1a5c12" strokeWidth="0.8" fill="none" strokeLinecap="round" />
        <path d="M 24 30 Q 33 27 40 30" stroke="#1a5c12" strokeWidth="0.8" fill="none" strokeLinecap="round" />
        <path d="M 24 42 Q 19 40 15 40" stroke="#1a5c12" strokeWidth="0.8" fill="none" strokeLinecap="round" />
        <path d="M 24 42 Q 29 40 33 40" stroke="#1a5c12" strokeWidth="0.8" fill="none" strokeLinecap="round" />
        <path d="M 24 52 Q 22 56 20 57" stroke="#1a5c12" strokeWidth="2.2" fill="none" strokeLinecap="round" />
      </svg>
    </div>
  );
}
