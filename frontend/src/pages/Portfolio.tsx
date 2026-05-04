import { useState } from 'react';
import { Link } from 'react-router';
import { projects, categories, Project } from '../data/projects';
import { WashiTape } from '../components/zine/WashiTape';
import { Stamp } from '../components/zine/Stamp';
import { useReveal } from '../components/zine/useReveal';

const ACCENT_COLORS = ['var(--zine-terracotta)', 'var(--zine-sage)', 'var(--zine-ochre)', 'var(--zine-blush)'];
const ROTS = [-0.8, 0.6, -0.5, 0.9, -0.7, 0.4, -0.6, 0.7];

function statusLabel(status: Project['status']) {
  switch (status) {
    case 'production': return 'shipped';
    case 'development': return 'in development';
    case 'beta': return 'beta';
    case 'archived': return 'archived';
  }
}

export function Portfolio() {
  useReveal();
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredProjects = selectedCategory === 'all'
    ? projects
    : projects.filter((p) => p.category === selectedCategory);

  const chipRots = [-1, 0.5, -0.5, 0.8, -0.3, 0.6];

  return (
    <div>
      {/* Header */}
      <div style={{ marginTop: 16, marginBottom: 28, position: 'relative' }}>
        <Stamp>side quests</Stamp>
        <h1 style={{ fontFamily: 'var(--zine-display)', fontSize: 76, fontStyle: 'italic', margin: '8px 0 4px', fontWeight: 600, lineHeight: 1 }}>
          fun projects{' '}
          <span style={{ fontFamily: 'var(--zine-hand)', color: 'var(--zine-terracotta2)' }}>&amp;</span>{' '}
          experiments
        </h1>
        <p style={{ fontSize: 17, color: 'var(--zine-ink2)', maxWidth: 600, lineHeight: 1.6 }}>
          A scrapbook of the things I&apos;ve built in the in-between hours — between standups, between feeds, between failures.
        </p>
        <svg width="220" height="20" style={{ position: 'absolute', top: 60, right: 20 }}>
          <path data-draw="true" d="M5 10 Q 30 -5, 60 10 T 120 10 T 180 10 T 215 10" stroke="var(--zine-sage)" strokeWidth="2" fill="none" strokeLinecap="round" />
        </svg>
      </div>

      {/* Filter chips */}
      <div style={{ display: 'flex', gap: 10, marginBottom: 30, flexWrap: 'wrap' }}>
        {categories.map((c, i) => (
          <button
            key={c}
            onClick={() => setSelectedCategory(c)}
            style={{
              cursor: 'pointer',
              padding: '7px 16px',
              background: selectedCategory === c ? 'var(--zine-ink)' : 'transparent',
              color: selectedCategory === c ? 'var(--zine-cream)' : 'var(--zine-ink)',
              border: '1.5px solid var(--zine-ink)',
              borderRadius: 999,
              fontFamily: 'var(--zine-mono)',
              fontSize: 12,
              letterSpacing: 1,
              textTransform: 'uppercase',
              transform: `rotate(${chipRots[i % chipRots.length]}deg)`,
              transition: 'all 0.15s',
            }}
          >
            {c === 'all' ? 'all' : c}
          </button>
        ))}
      </div>

      {/* Projects grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 24 }}>
        {filteredProjects.map((p, i) => {
          const color = ACCENT_COLORS[i % ACCENT_COLORS.length];
          const rot = ROTS[i % ROTS.length];
          return (
            <Link key={p.id} to={`/portfolio/${p.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
              <div
                className="zine-card reveal"
                style={{
                  background: '#fff',
                  padding: 22,
                  position: 'relative',
                  boxShadow: '0 5px 16px rgba(43,36,24,0.10)',
                  transform: `rotate(${rot}deg)`,
                  opacity: p.status === 'archived' ? 0.7 : 1,
                }}
              >
                <WashiTape x={140} y={-10} w={80} rotate={4} color={color} pattern={i % 2 ? 'dots' : 'stripes'} />
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
                  <span style={{ fontFamily: 'var(--zine-mono)', fontSize: 10, color, letterSpacing: 1.5 }}>
                    {p.category.toUpperCase()}
                  </span>
                  <span style={{ fontFamily: 'var(--zine-hand)', fontSize: 18, color: 'var(--zine-ink2)' }}>
                    {p.featured ? '★ featured · ' : ''}{statusLabel(p.status)}
                  </span>
                </div>
                <h3 style={{ fontFamily: 'var(--zine-display)', fontSize: 26, margin: '4px 0 8px' }}>{p.title}</h3>
                <p style={{ fontSize: 14, color: 'var(--zine-ink2)', lineHeight: 1.55, marginBottom: 14 }}>{p.description}</p>
                {p.metrics?.[0] && (
                  <div style={{ display: 'inline-block', padding: '6px 12px', background: 'var(--zine-cream)', borderRadius: 4, fontFamily: 'var(--zine-mono)', fontSize: 12, color: 'var(--zine-ink)', marginBottom: 12 }}>
                    <strong>{p.metrics[0].value}</strong>{' '}
                    <span style={{ color: 'var(--zine-ink2)' }}>{p.metrics[0].label}</span>
                  </div>
                )}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 14 }}>
                  {p.tech.map((t) => (
                    <span key={t} style={{ fontFamily: 'var(--zine-mono)', fontSize: 10, padding: '3px 8px', background: 'var(--zine-paper)', borderRadius: 999, color: 'var(--zine-ink2)' }}>
                      {t}
                    </span>
                  ))}
                </div>
                <div style={{ display: 'flex', gap: 14, fontFamily: 'var(--zine-hand)', fontSize: 18, color: 'var(--zine-terracotta2)' }}>
                  {p.links?.demo && <span>↗ demo</span>}
                  {p.links?.github && <span>↗ code</span>}
                  {p.links?.blog && <span>↗ writeup</span>}
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
