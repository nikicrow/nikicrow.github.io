import { useState } from 'react';
import { Link } from 'react-router';
import { blogPosts } from '../data/blogPosts';
import { Stamp } from '../components/zine/Stamp';
import { useReveal } from '../components/zine/useReveal';

const BORDER_COLORS = [
  'var(--zine-terracotta)',
  'var(--zine-sage)',
  'var(--zine-ochre)',
  'var(--zine-blush)',
  'var(--zine-terracotta2)',
  'var(--zine-sage2)',
];
const CARD_ROTS = [-0.3, 0.3, -0.3, 0.3];

export function Blog() {
  useReveal();
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const categories = Array.from(new Set(blogPosts.map((p) => p.category).filter(Boolean)));
  const allTags = Array.from(new Set(blogPosts.flatMap((p) => Array.isArray(p.tags) ? p.tags : []))).sort();

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory = !selectedCategory || (post.category ?? 'general') === selectedCategory;
    const postTags = Array.isArray(post.tags) ? post.tags : [];
    const matchesTags = selectedTags.length === 0 || selectedTags.every((tag) => postTags.includes(tag));
    return matchesCategory && matchesTags;
  });

  const toggleTag = (tag: string) => {
    setSelectedTags((prev) => prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]);
  };

  const clearFilters = () => { setSelectedCategory(null); setSelectedTags([]); };

  const catRots = [-1, 0.5, -0.5, 0.8, -0.3, 0.6, -0.7];

  return (
    <div>
      {/* Header */}
      <div style={{ marginBottom: 36 }}>
        <Stamp color="var(--zine-sage2)">journal</Stamp>
        <h1 className="zine-page-h1" style={{ fontFamily: 'var(--zine-display)', fontSize: 76, fontStyle: 'italic', margin: '8px 0 4px', fontWeight: 600, lineHeight: 1 }}>
          the{' '}
          <span style={{ fontFamily: 'var(--zine-hand)', color: 'var(--zine-terracotta2)' }}>blog</span>
        </h1>
        <p style={{ fontSize: 17, color: 'var(--zine-ink2)', maxWidth: 600, lineHeight: 1.6 }}>
          Thoughts on machine learning, markets, programming, and everything in between.
        </p>
      </div>

      {/* Category filter */}
      <div style={{ marginBottom: 14 }}>
        <p style={{ fontFamily: 'var(--zine-mono)', fontSize: 11, color: 'var(--zine-terracotta2)', letterSpacing: 1.5, marginBottom: 8 }}>CATEGORIES</p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
          <button
            onClick={() => setSelectedCategory(null)}
            style={{
              padding: '5px 14px',
              background: selectedCategory === null ? 'var(--zine-ink)' : 'transparent',
              color: selectedCategory === null ? 'var(--zine-cream)' : 'var(--zine-ink)',
              border: '1.5px solid var(--zine-ink)',
              borderRadius: 999,
              fontFamily: 'var(--zine-mono)',
              fontSize: 11,
              letterSpacing: 1,
              cursor: 'pointer',
              transform: `rotate(${catRots[0]}deg)`,
              transition: 'all 0.15s',
            }}
          >
            all posts
          </button>
          {categories.map((cat, i) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(selectedCategory === cat ? null : cat)}
              style={{
                padding: '5px 14px',
                background: selectedCategory === cat ? 'var(--zine-ink)' : 'transparent',
                color: selectedCategory === cat ? 'var(--zine-cream)' : 'var(--zine-ink)',
                border: '1.5px solid var(--zine-ink)',
                borderRadius: 999,
                fontFamily: 'var(--zine-mono)',
                fontSize: 11,
                letterSpacing: 1,
                cursor: 'pointer',
                transform: `rotate(${catRots[(i + 1) % catRots.length]}deg)`,
                transition: 'all 0.15s',
              }}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Tag filter */}
      <div style={{ marginBottom: 18 }}>
        <p style={{ fontFamily: 'var(--zine-mono)', fontSize: 11, color: 'var(--zine-terracotta2)', letterSpacing: 1.5, marginBottom: 8 }}>TAGS</p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => toggleTag(tag)}
              style={{
                padding: '3px 10px',
                background: selectedTags.includes(tag) ? 'var(--zine-terracotta2)' : 'var(--zine-cream)',
                color: selectedTags.includes(tag) ? '#fff' : 'var(--zine-ink2)',
                border: 'none',
                borderRadius: 999,
                fontFamily: 'var(--zine-mono)',
                fontSize: 11,
                cursor: 'pointer',
                transition: 'all 0.15s',
              }}
            >
              #{tag}
            </button>
          ))}
        </div>
      </div>

      {/* Result count + clear */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 22, fontFamily: 'var(--zine-mono)', fontSize: 12, color: 'var(--zine-ink2)' }}>
        <span>showing {filteredPosts.length} of {blogPosts.length} posts</span>
        {(selectedCategory || selectedTags.length > 0) && (
          <button onClick={clearFilters} style={{ color: 'var(--zine-terracotta2)', background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'var(--zine-mono)', fontSize: 12, textDecoration: 'underline' }}>
            clear filters
          </button>
        )}
      </div>

      {/* Post list */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 22 }}>
        {filteredPosts.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '48px 0', color: 'var(--zine-ink2)' }}>
            <p>No posts match your filters.</p>
            <button onClick={clearFilters} style={{ color: 'var(--zine-terracotta2)', background: 'none', border: 'none', cursor: 'pointer', textDecoration: 'underline', marginTop: 8 }}>Clear filters</button>
          </div>
        ) : (
          filteredPosts.map((post, i) => (
            <div
              key={post.slug}
              className="zine-card reveal"
              style={{
                background: '#fff',
                padding: '22px 24px',
                borderLeft: `5px solid ${BORDER_COLORS[i % BORDER_COLORS.length]}`,
                boxShadow: '0 4px 14px rgba(43,36,24,0.08)',
                transform: `rotate(${CARD_ROTS[i % CARD_ROTS.length]}deg)`,
              }}
            >
              {/* Top row */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
                <span style={{ fontFamily: 'var(--zine-mono)', fontSize: 10, color: 'var(--zine-terracotta2)', letterSpacing: 1.5 }}>
                  {(post.category ?? 'general').toUpperCase()}
                </span>
                <span style={{ fontFamily: 'var(--zine-mono)', fontSize: 11, color: 'var(--zine-ink2)' }}>
                  {new Date(post.date).toLocaleDateString('en-AU', { day: 'numeric', month: 'short', year: 'numeric' })} · {post.readTime}
                </span>
              </div>

              {/* Title */}
              <Link to={`/blog/${post.slug}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                <h2 style={{ fontFamily: 'var(--zine-display)', fontSize: 30, fontStyle: 'italic', lineHeight: 1.15, margin: '0 0 10px' }}>
                  {post.title}
                </h2>
              </Link>

              {/* Excerpt */}
              <p style={{ fontFamily: 'var(--zine-body)', fontSize: 15, color: 'var(--zine-ink2)', lineHeight: 1.6, marginBottom: 14 }}>
                {post.excerpt}
              </p>

              {/* Bottom row */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 8 }}>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                  {(Array.isArray(post.tags) ? post.tags : []).map((tag) => (
                    <button
                      key={tag}
                      onClick={() => toggleTag(tag)}
                      style={{
                        padding: '2px 8px',
                        background: 'var(--zine-cream)',
                        color: 'var(--zine-ink2)',
                        border: 'none',
                        borderRadius: 999,
                        fontFamily: 'var(--zine-mono)',
                        fontSize: 10,
                        cursor: 'pointer',
                      }}
                    >
                      #{tag}
                    </button>
                  ))}
                </div>
                <Link to={`/blog/${post.slug}`} style={{ fontFamily: 'var(--zine-hand)', fontSize: 22, color: 'var(--zine-terracotta2)', textDecoration: 'none' }}>
                  read more →
                </Link>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
