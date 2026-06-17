interface PolaroidProps {
  caption: string;
  w?: number;
  h?: number;
  rotate?: number;
  color?: string;
  label?: string;
  className?: string;
  src?: string;
  alt?: string;
}

export function Polaroid({ caption, w = 220, h = 160, rotate = -2, color = '#e3a892', label, className, src, alt }: PolaroidProps) {
  return (
    <div
      className={className}
      style={{
        background: '#fff',
        padding: '10px 10px 38px',
        boxShadow: '0 6px 18px rgba(43,36,24,0.18)',
        transform: `rotate(${rotate}deg)`,
        borderRadius: 2,
        width: w,
        position: 'relative',
        flexShrink: 0,
      }}
    >
      {src ? (
        <img
          src={src}
          alt={alt || caption}
          loading="lazy"
          style={{
            width: '100%',
            height: h,
            objectFit: 'cover',
            display: 'block',
          }}
        />
      ) : (
        <div
          style={{
            width: '100%',
            height: h,
            background: `repeating-linear-gradient(135deg, ${color} 0 14px, ${color}cc 14px 28px)`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#fff',
            fontSize: 11,
            letterSpacing: 1,
            textTransform: 'uppercase',
            fontFamily: 'var(--zine-mono)',
          }}
        >
          {label || 'photo'}
        </div>
      )}
      <div
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          bottom: 8,
          textAlign: 'center',
          fontFamily: 'var(--zine-hand)',
          fontSize: 18,
          color: 'var(--zine-ink2)',
        }}
      >
        {caption}
      </div>
    </div>
  );
}
