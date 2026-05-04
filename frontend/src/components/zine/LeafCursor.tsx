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
        opacity: 0.9,
      }}
    >
      <span
        style={{
          position: 'relative',
          display: 'inline-block',
          width: 28,
          height: 28,
          transform: 'rotate(-15deg)',
          filter: 'drop-shadow(0 2px 3px rgba(0,0,0,0.15))',
        }}
      >
        <span
          style={{
            position: 'absolute',
            left: 0,
            top: 0,
            width: 24,
            height: 24,
            background: 'var(--zine-sage)',
            borderRadius: '0 100% 0 100%',
          }}
        />
        <span
          style={{
            position: 'absolute',
            left: 1.5,
            top: 14,
            width: 2,
            height: 14,
            background: 'var(--zine-sage2)',
            transform: 'rotate(-30deg)',
            transformOrigin: 'top left',
          }}
        />
      </span>
    </div>
  );
}
