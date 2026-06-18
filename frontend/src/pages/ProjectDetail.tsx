import { useParams, Link, Navigate } from 'react-router';
import { getProjectById, getRelatedProjects, Project } from '../data/projects';
import { Stamp } from '../components/zine/Stamp';
import { TapeButton } from '../components/zine/TapeButton';
import { WashiTape } from '../components/zine/WashiTape';

import 'highlight.js/styles/github-dark.css';

function statusLabel(status: Project['status']) {
  switch (status) {
    case 'production': return 'shipped';
    case 'development': return 'in development';
    case 'beta': return 'beta';
    case 'archived': return 'archived';
  }
}

export function ProjectDetail() {
  const { id } = useParams();
  const project = getProjectById(id || '');

  if (!project) return <Navigate to="/portfolio" replace />;

  const relatedProjects = getRelatedProjects(project);

  return (
    <div>
      {/* Back link */}
      <Link
        to="/portfolio"
        style={{ fontFamily: 'var(--zine-mono)', fontSize: 12, color: 'var(--zine-ink2)', textDecoration: 'none', display: 'inline-block', marginBottom: 28 }}
      >
        ← back to projects
      </Link>

      {/* Header */}
      <header style={{ maxWidth: 820, marginBottom: 36 }}>
        <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', marginBottom: 16 }}>
          <Stamp>{project.category}</Stamp>
          <Stamp color="var(--zine-sage2)" rotate={2}>{statusLabel(project.status)}</Stamp>
          {project.featured && <Stamp color="var(--zine-ochre)" rotate={-2}>featured</Stamp>}
        </div>
        <h1 style={{ fontFamily: 'var(--zine-display)', fontSize: 64, fontStyle: 'italic', lineHeight: 1.05, fontWeight: 600, margin: '12px 0 14px' }}>
          {project.title}
        </h1>
        <p style={{ fontFamily: 'var(--zine-body)', fontSize: 19, color: 'var(--zine-ink2)', lineHeight: 1.55, marginBottom: 22 }}>
          {project.description}
        </p>
        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
          {project.links?.demo && (
            <a href={project.links.demo} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
              <TapeButton>↗ open demo</TapeButton>
            </a>
          )}
          {project.links?.github && (
            <a href={project.links.github} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
              <TapeButton primary={false}>↗ view code</TapeButton>
            </a>
          )}
          {project.links?.blog && (
            <Link to={project.links.blog} style={{ textDecoration: 'none' }}>
              <TapeButton primary={false}>↗ read the blog post</TapeButton>
            </Link>
          )}
        </div>
      </header>

      {/* Screenshot placeholder */}
      <div style={{ position: 'relative', marginBottom: 40 }}>
        <WashiTape x={40} y={-10} w={100} rotate={-3} color="var(--zine-blush)" pattern="stripes" />
        <div style={{
          height: 320,
          background: `repeating-linear-gradient(135deg, var(--zine-blush) 0 20px, var(--zine-cream) 20px 40px)`,
          transform: 'rotate(-0.5deg)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'var(--zine-mono)',
          fontSize: 11,
          letterSpacing: 2,
          textTransform: 'uppercase',
          color: 'rgba(43,36,24,0.5)',
        }}>
          screenshot · {project.title}
        </div>
      </div>

      {/* Metrics */}
      {project.metrics && project.metrics.length > 0 && (
        <div style={{ display: 'grid', gridTemplateColumns: `repeat(${Math.min(project.metrics.length, 3)}, 1fr)`, gap: 16, marginBottom: 40 }}>
          {project.metrics.slice(0, 3).map((metric, i) => (
            <div key={metric.label} style={{
              background: '#fff',
              padding: '20px 16px',
              borderLeft: `4px solid ${['var(--zine-terracotta)', 'var(--zine-sage)', 'var(--zine-ochre)'][i]}`,
              boxShadow: '0 4px 14px rgba(43,36,24,0.08)',
            }}>
              <div style={{ fontFamily: 'var(--zine-display)', fontSize: 30, fontWeight: 600 }}>{metric.value}</div>
              <div style={{ fontFamily: 'var(--zine-mono)', fontSize: 10, color: 'var(--zine-terracotta2)', letterSpacing: 1.5, marginTop: 4 }}>
                {metric.label.toUpperCase()}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Built with */}
      <div style={{ marginBottom: 36 }}>
        <h2 style={{ fontFamily: 'var(--zine-display)', fontSize: 30, fontStyle: 'italic', marginBottom: 14 }}>built with</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
          {project.tech.map((tech) => (
            <span key={tech} style={{
              background: '#fff',
              fontFamily: 'var(--zine-mono)',
              fontSize: 13,
              padding: '6px 14px',
              borderRadius: 999,
              boxShadow: '0 2px 8px rgba(43,36,24,0.10)',
              color: 'var(--zine-ink2)',
            }}>
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Article content */}
      <article
        className="zine-prose"
        style={{ maxWidth: 720 }}
        dangerouslySetInnerHTML={{ __html: project.htmlContent }}
      />

      {/* Footer CTA */}
      <div style={{ marginTop: 48, background: 'var(--zine-terracotta)', color: 'var(--zine-cream)', padding: '28px 32px', position: 'relative', borderRadius: 2 }}>
        <WashiTape x={30} y={-10} w={90} rotate={-2} color="var(--zine-ochre)" pattern="dots" />
        <p style={{ fontFamily: 'var(--zine-hand)', fontSize: 20, margin: '0 0 8px' }}>liked this one?</p>
        <Link to="/blog" style={{ color: 'var(--zine-cream)', fontFamily: 'var(--zine-display)', fontSize: 22, fontStyle: 'italic' }}>
          read the blog →
        </Link>
      </div>

      {/* Related projects */}
      {relatedProjects.length > 0 && (
        <div style={{ marginTop: 48 }}>
          <h3 style={{ fontFamily: 'var(--zine-display)', fontSize: 28, fontStyle: 'italic', marginBottom: 18 }}>more projects</h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
            {relatedProjects.map((rel) => (
              <Link key={rel.id} to={`/portfolio/${rel.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                <div className="zine-card" style={{ background: '#fff', padding: 18, boxShadow: '0 4px 14px rgba(43,36,24,0.08)' }}>
                  <div style={{ fontFamily: 'var(--zine-mono)', fontSize: 10, color: 'var(--zine-terracotta2)', letterSpacing: 1.5, marginBottom: 6 }}>
                    {rel.category.toUpperCase()}
                  </div>
                  <h4 style={{ fontFamily: 'var(--zine-display)', fontSize: 18, margin: '0 0 6px' }}>{rel.title}</h4>
                  <p style={{ fontSize: 13, color: 'var(--zine-ink2)', lineHeight: 1.5, margin: 0 }}>{rel.description.substring(0, 80)}…</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
