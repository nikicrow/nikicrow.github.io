import { ReactNode } from 'react';

interface StampProps {
  children: ReactNode;
  color?: string;
  rotate?: number;
}

export function Stamp({ children, color = 'var(--zine-terracotta2)', rotate = -4 }: StampProps) {
  return (
    <span
      className="zine-stamp"
      style={{
        padding: '4px 10px',
        border: `2px solid ${color}`,
        color,
        fontFamily: 'var(--zine-mono)',
        fontSize: 11,
        letterSpacing: 2,
        textTransform: 'uppercase',
        transform: `rotate(${rotate}deg)`,
        borderRadius: 2,
        boxShadow: `inset 0 0 0 1px ${color}33`,
        display: 'inline-block',
      }}
    >
      {children}
    </span>
  );
}
