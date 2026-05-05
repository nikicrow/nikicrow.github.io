import { useState, useCallback } from 'react';
import { Outlet, Link, useLocation } from 'react-router';
import { LeafCursor } from './zine/LeafCursor';
import { useKonami } from './zine/useKonami';

function NikiLogo() {
  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontFamily: 'var(--zine-mono)', fontSize: 14, color: 'var(--zine-ink)', fontWeight: 600 }}>
      <span style={{ position: 'relative', display: 'inline-block', width: 24, height: 24 }}>
        <span style={{ position: 'absolute', inset: 0, border: '1.8px solid var(--zine-ink)', borderRadius: 4 }} />
        <span style={{ position: 'absolute', left: 4, top: 5, fontFamily: 'monospace', fontSize: 12, lineHeight: 1, color: 'var(--zine-ink)' }}>&gt;_</span>
        <span style={{ position: 'absolute', top: -4, right: -4, width: 10, height: 10, background: 'var(--zine-blush)', borderRadius: '50% 50% 50% 0', transform: 'rotate(-45deg)' }} />
      </span>
      <span>~/niki.codes</span>
    </span>
  );
}

function KonamiToast({ onDone }: { onDone: () => void }) {
  return (
    <div
      className="zine-toast"
      style={{
        position: 'fixed',
        bottom: 32,
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 10000,
        background: 'var(--zine-ink)',
        color: 'var(--zine-cream)',
        border: '2px solid var(--zine-terracotta)',
        boxShadow: '0 4px 18px rgba(198,106,58,0.4)',
        borderRadius: 8,
        padding: '14px 22px',
        fontFamily: 'var(--zine-mono)',
        fontSize: 13,
        maxWidth: 420,
        textAlign: 'center',
        cursor: 'pointer',
      }}
      onClick={onDone}
    >
      ↑↑↓↓←→←→ B A — secret pet acquired: 🐔 Henrietta says hi
    </div>
  );
}

export function Layout() {
  const location = useLocation();
  const [showKonami, setShowKonami] = useState(false);

  const fireKonami = useCallback(() => {
    setShowKonami(true);
    setTimeout(() => setShowKonami(false), 5000);
  }, []);
  useKonami(fireKonami);

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  const navItems = [
    { to: '/', label: 'home' },
    { to: '/portfolio', label: 'projects' },
    { to: '/blog', label: 'blog' },
    { to: '/about', label: 'about' },
  ];

  return (
    <div className="zine-paper-bg" style={{ minHeight: '100vh', color: 'var(--zine-ink)', fontFamily: 'var(--zine-body)' }}>
      <LeafCursor />

      <div className="zine-container" style={{ maxWidth: 1180, margin: '0 auto', padding: '32px 56px 80px' }}>
        {/* Header */}
        <header style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 28, position: 'relative', zIndex: 4 }}>
          <Link to="/" style={{ textDecoration: 'none' }}>
            <NikiLogo />
          </Link>

          <nav className="zine-nav" style={{ display: 'flex', gap: 22, fontFamily: 'var(--zine-mono)', fontSize: 13 }}>
            {navItems.map((item) => {
              const active = isActive(item.to);
              return (
                <Link
                  key={item.to}
                  to={item.to}
                  className="zine-nav-link"
                  style={{
                    color: active ? 'var(--zine-terracotta2)' : 'var(--zine-ink2)',
                    fontWeight: active ? 600 : 400,
                    textDecoration: 'none',
                    position: 'relative',
                  }}
                >
                  {item.label}
                  {active && (
                    <span style={{
                      position: 'absolute',
                      left: 0, right: 0, bottom: -4,
                      height: 6,
                      background: 'var(--zine-ochre)',
                      opacity: 0.55,
                      borderRadius: 8,
                      transform: 'rotate(-1deg)',
                    }} />
                  )}
                </Link>
              );
            })}
          </nav>
        </header>

        {/* Page content */}
        <main className="zine-page-fade">
          <Outlet />
        </main>

        {/* Footer */}
        <footer className="zine-footer" style={{
          marginTop: 60,
          paddingTop: 20,
          borderTop: '1px dashed rgba(90,74,54,0.33)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
          <span style={{ fontFamily: 'var(--zine-mono)', fontSize: 12, color: 'var(--zine-ink2)' }}>
            © 2026 niki crow · sydney au
          </span>
          <span style={{ fontFamily: 'var(--zine-hand)', fontSize: 18, color: 'var(--zine-ink2)' }}>
            made with ☕, code, and small humans on lap
          </span>
        </footer>
      </div>

      {showKonami && <KonamiToast onDone={() => setShowKonami(false)} />}
    </div>
  );
}
