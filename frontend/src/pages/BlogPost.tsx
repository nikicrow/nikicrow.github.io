import { useParams, Link, Navigate } from 'react-router';
import { blogPosts } from '../data/blogPosts';
import { Stamp } from '../components/zine/Stamp';
import { WashiTape } from '../components/zine/WashiTape';

import 'highlight.js/styles/github-dark.css';

export function BlogPost() {
  const { slug } = useParams();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) return <Navigate to="/blog" replace />;

  const relatedPosts = blogPosts.filter((p) => p.slug !== slug).slice(0, 3);

  return (
    <div>
      {/* Back link */}
      <Link
        to="/blog"
        style={{ fontFamily: 'var(--zine-mono)', fontSize: 12, color: 'var(--zine-ink2)', textDecoration: 'none', display: 'inline-block', marginBottom: 28 }}
      >
        ← back to blog
      </Link>

      {/* Article */}
      <article style={{ maxWidth: 720, margin: '0 auto' }}>
        {/* Header */}
        <header style={{ marginBottom: 28 }}>
          <div style={{ display: 'flex', gap: 10, marginBottom: 14, flexWrap: 'wrap', alignItems: 'center' }}>
            <Stamp color="var(--zine-terracotta2)">{post.category ?? 'general'}</Stamp>
            <span style={{ fontFamily: 'var(--zine-mono)', fontSize: 11, color: 'var(--zine-ink2)' }}>
              {new Date(post.date).toLocaleDateString('en-AU', { day: 'numeric', month: 'short', year: 'numeric' })} · {post.readTime}
            </span>
          </div>

          <h1 style={{ fontFamily: 'var(--zine-display)', fontSize: 56, fontStyle: 'italic', lineHeight: 1.05, fontWeight: 600, margin: '0 0 14px' }}>
            {post.title}
          </h1>

          <p style={{ fontFamily: 'var(--zine-body)', fontSize: 20, fontStyle: 'italic', color: 'var(--zine-ink2)', lineHeight: 1.55, marginBottom: 18 }}>
            {post.excerpt}
          </p>

          {/* Tags */}
          {(Array.isArray(post.tags) ? post.tags : []).length > 0 && (
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 20 }}>
              {(Array.isArray(post.tags) ? post.tags : []).map((tag) => (
                <span key={tag} style={{
                  padding: '3px 10px',
                  background: 'var(--zine-cream)',
                  fontFamily: 'var(--zine-mono)',
                  fontSize: 10,
                  borderRadius: 999,
                  color: 'var(--zine-ink2)',
                }}>
                  #{tag}
                </span>
              ))}
            </div>
          )}

          <hr style={{ border: 'none', borderTop: '1px dashed rgba(90,74,54,0.33)', marginBottom: 28 }} />
        </header>

        {/* Cover image */}
        {post.coverImage && (
          <div style={{ marginBottom: 32 }}>
            <img src={post.coverImage} alt={post.title} style={{ width: '100%', borderRadius: 2, objectFit: 'cover', maxHeight: 380 }} />
          </div>
        )}

        {/* Body */}
        <div
          className="zine-prose"
          dangerouslySetInnerHTML={{ __html: post.htmlContent }}
        />

        {/* Footer card */}
        <div style={{ marginTop: 48, background: '#fff', padding: '24px 28px', position: 'relative', boxShadow: '0 4px 14px rgba(43,36,24,0.08)' }}>
          <WashiTape x={30} y={-10} w={80} rotate={-3} color="var(--zine-sage)" pattern="dots" />
          <p style={{ fontFamily: 'var(--zine-hand)', fontSize: 22, color: 'var(--zine-ink)', margin: '0 0 8px' }}>thanks for reading ✿</p>
          <Link to="/blog" style={{ fontFamily: 'var(--zine-mono)', fontSize: 13, color: 'var(--zine-terracotta2)', textDecoration: 'none' }}>
            ← back to the blog
          </Link>
        </div>
      </article>

      {/* Related posts */}
      {relatedPosts.length > 0 && (
        <div style={{ maxWidth: 720, margin: '48px auto 0' }}>
          <h3 style={{ fontFamily: 'var(--zine-display)', fontSize: 28, fontStyle: 'italic', marginBottom: 18 }}>more posts</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            {relatedPosts.map((rel) => (
              <Link
                key={rel.slug}
                to={`/blog/${rel.slug}`}
                style={{ textDecoration: 'none', color: 'inherit' }}
              >
                <div className="zine-card" style={{ background: '#fff', padding: '16px 20px', boxShadow: '0 4px 14px rgba(43,36,24,0.08)', borderLeft: '4px solid var(--zine-terracotta)' }}>
                  <div style={{ fontFamily: 'var(--zine-mono)', fontSize: 10, color: 'var(--zine-terracotta2)', letterSpacing: 1.5, marginBottom: 4 }}>
                    {rel.category.toUpperCase()}
                  </div>
                  <h4 style={{ fontFamily: 'var(--zine-display)', fontSize: 20, fontStyle: 'italic', margin: '0 0 4px' }}>{rel.title}</h4>
                  <p style={{ fontSize: 13, color: 'var(--zine-ink2)', lineHeight: 1.5, margin: 0 }}>{rel.excerpt.substring(0, 100)}…</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
