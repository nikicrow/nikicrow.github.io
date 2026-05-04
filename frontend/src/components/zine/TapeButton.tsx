import { ReactNode, MouseEvent } from 'react';

interface TapeButtonProps {
  children: ReactNode;
  color?: string;
  fg?: string;
  primary?: boolean;
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
  type?: 'button' | 'submit';
}

export function TapeButton({ children, color = 'var(--zine-terracotta)', fg = '#fff', primary = true, onClick, type = 'button' }: TapeButtonProps) {
  return (
    <button
      type={type}
      className="zine-tape-button"
      onClick={onClick}
      style={{
        background: primary ? color : 'transparent',
        color: primary ? fg : 'var(--zine-ink)',
        border: primary ? 'none' : `2px solid var(--zine-ink)`,
        padding: '12px 22px',
        fontFamily: 'var(--zine-body)',
        fontWeight: 700,
        fontSize: 15,
        borderRadius: 999,
        boxShadow: primary ? `0 4px 0 var(--zine-terracotta2)` : 'none',
        cursor: 'pointer',
      }}
    >
      {children}
    </button>
  );
}
