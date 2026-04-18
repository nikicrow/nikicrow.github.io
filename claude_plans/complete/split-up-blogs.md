# Blog Post System - IMPLEMENTED ✅

## Summary

The blog system has been restructured to use individual Markdown files with frontmatter. Each post is now a separate `.md` file in the `blog_posts/` folder.

---

## How to Add a New Blog Post

### 1. Create a new file

Create a new `.md` file in `frontend/src/blog_posts/`:

```
frontend/src/blog_posts/YYYY-MM-DD-your-post-slug.md
```

Example: `2026-02-05-my-awesome-post.md`

### 2. Add frontmatter and content

```markdown
---
title: "Your Post Title"
slug: "your-post-slug"
date: 2026-02-05
category: Machine Learning
excerpt: "A brief description that appears in the blog listing..."
published: true
tags:
  - machine-learning
  - python
  - tutorial
coverImage: /assets/blog/your-post/hero.jpg
---

Your content here in Markdown...

## Section Heading

Regular paragraph text.

- Bullet points work
- Like this

```python
# Code blocks have syntax highlighting
def hello():
    print("Hello, world!")
```

![Image alt text](/assets/blog/your-post/diagram.png)
```

### 3. Frontmatter Fields

| Field | Required | Description |
|-------|----------|-------------|
| `title` | Yes | Post title |
| `slug` | Yes | URL slug (must be unique) |
| `date` | Yes | Publish date (YYYY-MM-DD) |
| `category` | Yes | Category (Parenting, Machine Learning, Career, etc.) |
| `excerpt` | Yes | Short description for listings |
| `published` | No | `true` or `false` (default: true) |
| `tags` | No | Array of tags for filtering |
| `coverImage` | No | Path to cover image |

### 4. Adding Images

Put images in `frontend/src/assets/blog/your-post-name/`:

```
frontend/src/assets/blog/
└── my-awesome-post/
    ├── hero.jpg
    └── diagram.png
```

Reference in markdown:
```markdown
![Alt text](/assets/blog/my-awesome-post/diagram.png)
```

### 5. Draft Posts

Set `published: false` in frontmatter:

```yaml
---
title: "Work in Progress"
published: false
---
```

- **Development mode**: Drafts are visible (with "Draft" badge)
- **Production build**: Drafts are hidden

### 6. Save and View

Save the file. Vite will hot-reload and your post appears automatically.

---

## File Structure

```
frontend/src/
├── blog_posts/                    # All blog posts live here
│   ├── 2026-01-28-maternity-leave-ml-engineer.md
│   ├── 2026-01-20-toddler-teaches-machine-learning.md
│   ├── 2026-01-10-second-pregnancy-different.md
│   ├── 2025-12-15-attention-is-all-you-need-revisited.md
│   ├── 2025-11-18-pumping-at-work-tech.md
│   ├── 2025-10-10-from-trading-floor-to-ml-pipelines.md
│   ├── 2025-09-05-working-pregnant-tech.md
│   ├── 2025-08-22-philosophy-of-debugging.md
│   └── 2025-07-14-toddler-sick-days-remote-work.md
│
├── assets/
│   └── blog/                      # Blog images (create folders as needed)
│
└── data/
    └── blogPosts.ts               # Auto-imports all posts (don't edit manually)
```

---

## Features Implemented

- ✅ **Auto-discovery**: Just add a `.md` file, no other files to edit
- ✅ **Syntax highlighting**: Code blocks highlighted with highlight.js (GitHub Dark theme)
- ✅ **Typography**: Tailwind Typography plugin for beautiful prose styling
- ✅ **Category filtering**: Click categories to filter posts
- ✅ **Tag filtering**: Click tags to filter posts (multiple selection)
- ✅ **Draft support**: `published: false` hides in production, shows in dev with badge
- ✅ **Auto reading time**: Calculated from word count (200 wpm)
- ✅ **Cover images**: Optional hero images for posts
- ✅ **Date sorting**: Posts sorted newest first automatically

---

## Dependencies Added

```json
{
  "gray-matter": "^4.0.3",
  "marked": "^17.0.1",
  "marked-highlight": "^2.x.x",
  "highlight.js": "^11.11.1",
  "@tailwindcss/typography": "^0.5.19"
}
```

---

## Files Changed

| File | Change |
|------|--------|
| `package.json` | Added dependencies |
| `tsconfig.json` | Created (for Vite types) |
| `tsconfig.node.json` | Created |
| `vite.config.ts` | Added `assetsInclude: ['**/*.md']` |
| `src/styles/globals.css` | Added typography plugin & code highlighting styles |
| `src/data/blogPosts.ts` | Rewrote to use Vite glob imports |
| `src/pages/Blog.tsx` | Added category/tag filtering |
| `src/pages/BlogPost.tsx` | Renders HTML content with prose styling |
| `src/blog_posts/*.md` | Created 9 markdown files |

---

## Status: COMPLETE ✅
