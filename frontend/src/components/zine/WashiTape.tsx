interface WashiTapeProps {
  x?: number | string;
  y?: number | string;
  w?: number;
  rotate?: number;
  color?: string;
  pattern?: 'stripes' | 'dots' | 'solid';
  zIndex?: number;
}

export function WashiTape({ x = 0, y = 0, w = 90, rotate = 0, color = 'var(--zine-ochre)', pattern = 'stripes', zIndex = 3 }: WashiTapeProps) {
  const bg = pattern === 'stripes'
    ? `repeating-linear-gradient(45deg, ${color} 0 6px, ${color}aa 6px 12px)`
    : pattern === 'dots'
    ? `radial-gradient(circle, #fff5 1.5px, transparent 2px) 0 0/8px 8px, ${color}`
    : color;

  return (
    <div
      style={{
        position: 'absolute',
        left: x,
        top: y,
        width: w,
        height: 22,
        background: bg,
        transform: `rotate(${rotate}deg)`,
        opacity: 0.92,
        zIndex,
        borderLeft: '1px dashed rgba(0,0,0,0.06)',
        borderRight: '1px dashed rgba(0,0,0,0.06)',
      }}
    />
  );
}
