import { Link } from 'react-router';
import { Polaroid } from '../components/zine/Polaroid';
import { WashiTape } from '../components/zine/WashiTape';
import { Stamp } from '../components/zine/Stamp';
import { TapeButton } from '../components/zine/TapeButton';
import { useReveal } from '../components/zine/useReveal';
import { featuredProjects } from '../data/projects';

const ACCENT_COLORS = ['var(--zine-terracotta)', 'var(--zine-sage)', 'var(--zine-ochre)', 'var(--zine-blush)'];

const NOW = [
  { label: 'reading', value: 'Wind and Truth — Brandon Sanderson' },
  { label: 'building', value: 'Baby Data App v0.4 and Landy' },
  { label: 'growing', value: 'tomatoes (too many)' },
  { label: 'listening', value: 'Incy Wincy Spider' },
];

const THINGS = [
  { t: 'Machine Learning', d: 'Production ML systems. Models that survive contact with reality, not just notebooks.', c: 'var(--zine-terracotta)', e: '🤖' },
  { t: 'Garden + animals', d: 'Border collie, chickens, veggie patch and an aspirational compost pile.', c: 'var(--zine-sage)', e: '🌿' },
  { t: 'Mum of two', d: 'Two girls, a toddler and a newborn. Lacking sleep, adult company but rich in wholesome family time.', c: 'var(--zine-blush)', e: '🍼' },
  { t: 'Writing', d: 'Honest essays on tech, parenting, and the messy bits of work-life integration.', c: 'var(--zine-ochre)', e: '✏️' },
];

export function Home() {
  useReveal();

  return (
    <div>
      {/* Hero */}
      <section className="zine-hero" style={{ position: 'relative', minHeight: 540, marginTop: 16 }}>
        {/* Left col */}
        <div className="zine-hero-left" style={{ position: 'absolute', top: 30, left: 0, right: 380 }}>
          <Stamp rotate={-3}>print("hello world")</Stamp>
          <h1 className="zine-hero-h1" style={{ fontFamily: 'var(--zine-display)', fontSize: 86, lineHeight: 0.95, margin: '18px 0 10px', fontWeight: 600, letterSpacing: -1 }}>
            Data scientist,<br />
            <span style={{ fontStyle: 'italic', color: 'var(--zine-terracotta2)' }}>ML engineer,</span><br />
            <span className="zine-hero-hand" style={{ fontFamily: 'var(--zine-hand)', fontSize: 108, color: 'var(--zine-sage)' }}>mum of two.</span>
          </h1>
          <p style={{ maxWidth: 460, fontSize: 17, lineHeight: 1.6, color: 'var(--zine-ink2)', marginTop: 14 }}>
            Building production ML systems by day, raising humans by night. I write about machine learning,
            financial markets, parenting in tech, and the joyful chaos of doing it all at once.
          </p>
          <div style={{ display: 'flex', gap: 14, marginTop: 22, alignItems: 'center' }}>
            <Link to="/portfolio">
              <TapeButton>see my projects →</TapeButton>
            </Link>
            <Link to="/blog" style={{ fontFamily: 'var(--zine-hand)', fontSize: 22, color: 'var(--zine-ink2)', transform: 'rotate(-3deg)', display: 'inline-block', textDecoration: 'none' }}>
              or read the blog ↗
            </Link>
          </div>
        </div>

        {/* Right col — polaroid collage */}
        <div className="zine-hero-right" style={{ position: 'absolute', right: 0, top: 0, width: 340, height: 500 }}>
          <WashiTape x={70} y={6} w={120} rotate={-8} color="var(--zine-ochre)" zIndex={5} />
          <div className="reveal" style={{ position: 'absolute', top: 22, left: 50 }}>
            <Polaroid caption="me + my mat-leave baby" rotate={-6} color="var(--zine-blush)" src="/photos/me-and-imogen.jpg" alt="Me holding my baby while on maternity leave" />
          </div>
          <WashiTape x={20} y={210} w={100} rotate={6} color="var(--zine-sage)" pattern="dots" zIndex={5} />
          <div className="reveal" style={{ position: 'absolute', top: 220, left: 0 }}>
            <div className="hen-waddle" style={{ transformOrigin: 'center bottom' }}>
              <Polaroid caption="my two daughters" rotate={4} color="var(--zine-sage)" w={180} h={130} src="/photos/ember-and-imogen.jpg" alt="My two daughters lying side by side" />
            </div>
          </div>
          <WashiTape x={170} y={320} w={90} rotate={-12} color="var(--zine-terracotta)" zIndex={5} />
          <div className="reveal" style={{ position: 'absolute', top: 330, left: 150 }}>
            <Polaroid caption="my overgrown veggie patch" rotate={7} color="var(--zine-ochre)" w={170} h={120} src="/photos/veggie-patch.jpg" alt="My overgrown vegetable patch" />
          </div>
        </div>

        {/* Decorative arrow */}
        <svg className="zine-hero-arrow" width="180" height="60" style={{ position: 'absolute', left: 380, top: 380 }}>
          <path data-draw="true" d="M5 30 Q40 5, 80 30 T155 30" stroke="var(--zine-terracotta2)" strokeWidth="2.5" fill="none" strokeLinecap="round" />
          <path data-draw="true" d="M150 22 L162 30 L150 38" stroke="var(--zine-terracotta2)" strokeWidth="2.5" fill="none" strokeLinecap="round" />
        </svg>
      </section>

      {/* Things I do */}
      <section className="reveal" style={{ marginTop: 60 }}>
        <h2 style={{ fontFamily: 'var(--zine-display)', fontSize: 40, marginBottom: 4, fontStyle: 'italic' }}>
          things I do{' '}
          <span style={{ fontFamily: 'var(--zine-hand)', fontSize: 36, color: 'var(--zine-sage)' }}>(when not changing nappies)</span>
        </h2>
        <div className="zine-grid-4" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 20, marginTop: 26 }}>
          {THINGS.map((x, i) => (
            <div
              key={i}
              className="zine-card"
              style={{
                background: '#fff',
                padding: '18px 16px 20px',
                boxShadow: '0 4px 14px rgba(43,36,24,0.10)',
                transform: `rotate(${([-1.5, 1, -0.8, 1.6])[i]}deg)`,
                borderTop: `8px solid ${x.c}`,
              }}
            >
              <div style={{ fontSize: 28, marginBottom: 6 }}>{x.e}</div>
              <h3 style={{ fontFamily: 'var(--zine-display)', fontSize: 22, margin: '4px 0 6px' }}>{x.t}</h3>
              <p style={{ fontSize: 14, color: 'var(--zine-ink2)', lineHeight: 1.5, margin: 0 }}>{x.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured projects */}
      <section className="reveal" style={{ marginTop: 60 }}>
        <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: 22 }}>
          <h2 style={{ fontFamily: 'var(--zine-display)', fontSize: 40, margin: 0, fontStyle: 'italic' }}>
            featured projects{' '}
            <span style={{ fontFamily: 'var(--zine-hand)', fontSize: 30, color: 'var(--zine-terracotta2)' }}>★</span>
          </h2>
          <Link to="/portfolio" className="zine-nav-link" style={{ fontFamily: 'var(--zine-mono)', fontSize: 13, color: 'var(--zine-ink2)', textDecoration: 'none' }}>
            see all ↗
          </Link>
        </div>
        <div className="zine-grid-2" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 20 }}>
          {featuredProjects.slice(0, 4).map((p, i) => (
            <Link key={p.id} to={`/portfolio/${p.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
              <div
                className="zine-card"
                style={{
                  background: '#fff',
                  padding: 20,
                  position: 'relative',
                  boxShadow: '0 4px 14px rgba(43,36,24,0.08)',
                  transform: `rotate(${([-0.6, 0.7, -0.4, 0.5])[i]}deg)`,
                  borderLeft: `4px solid ${ACCENT_COLORS[i % 4]}`,
                }}
              >
                <WashiTape x={20} y={-10} w={70} rotate={-6} color="var(--zine-ochre)" pattern="stripes" />
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
                  <span style={{ fontFamily: 'var(--zine-mono)', fontSize: 10, color: 'var(--zine-terracotta2)', letterSpacing: 1.5 }}>
                    {p.category.toUpperCase()}
                  </span>
                  {p.metrics?.[0] && (
                    <span style={{ fontFamily: 'var(--zine-mono)', fontSize: 11, color: 'var(--zine-ink2)' }}>
                      {p.metrics[0].value} {p.metrics[0].label}
                    </span>
                  )}
                </div>
                <h3 style={{ fontFamily: 'var(--zine-display)', fontSize: 24, margin: '4px 0 8px' }}>{p.title}</h3>
                <p style={{ fontSize: 14, color: 'var(--zine-ink2)', lineHeight: 1.5, marginBottom: 12 }}>{p.description}</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                  {p.tech.slice(0, 4).map((t) => (
                    <span key={t} style={{ fontFamily: 'var(--zine-mono)', fontSize: 10, padding: '3px 8px', background: 'var(--zine-cream)', borderRadius: 999, color: 'var(--zine-ink2)' }}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Currently widget */}
      <section className="reveal" style={{ marginTop: 60, background: '#fff', padding: 28, boxShadow: '0 4px 14px rgba(43,36,24,0.08)', transform: 'rotate(-0.4deg)', position: 'relative' }}>
        <WashiTape x={40} y={-12} w={110} rotate={-3} color="var(--zine-sage)" pattern="dots" />
        <h2 style={{ fontFamily: 'var(--zine-display)', fontSize: 28, fontStyle: 'italic', marginTop: 0, marginBottom: 14 }}>currently…</h2>
        <div className="zine-grid-4" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 18 }}>
          {NOW.map((n) => (
            <div key={n.label}>
              <div style={{ fontFamily: 'var(--zine-mono)', fontSize: 10, color: 'var(--zine-terracotta2)', letterSpacing: 1.5 }}>
                {n.label.toUpperCase()}
              </div>
              <div style={{ fontFamily: 'var(--zine-hand)', fontSize: 24, color: 'var(--zine-ink)', lineHeight: 1.2, marginTop: 4 }}>
                {n.value}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="reveal" style={{ marginTop: 60, textAlign: 'center', padding: '36px 28px', border: '2px dashed rgba(90,74,54,0.33)', borderRadius: 8, position: 'relative' }}>
        <Stamp color="var(--zine-sage2)" rotate={2}>let&apos;s talk</Stamp>
        <h2 style={{ fontFamily: 'var(--zine-display)', fontSize: 36, fontStyle: 'italic', margin: '14px 0 8px' }}>like what you see?</h2>
        <p style={{ color: 'var(--zine-ink2)', marginBottom: 22, maxWidth: 500, marginLeft: 'auto', marginRight: 'auto' }}>
          I&apos;m always up for chatting about ML, markets, parenting in tech, or the right way to compost.
        </p>
        <Link to="/about">
          <TapeButton>get in touch →</TapeButton>
        </Link>
      </section>

      {/* Wavy divider */}
      <svg width="100%" height="40" style={{ marginTop: 50, display: 'block' }} viewBox="0 0 1100 40" preserveAspectRatio="none">
        <path
          data-draw="true"
          d="M10 20 Q 60 5, 110 20 T 210 20 T 310 20 T 410 20 T 510 20 T 610 20 T 710 20 T 810 20 T 910 20 T 1010 20 T 1090 20"
          stroke="var(--zine-terracotta)"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}
