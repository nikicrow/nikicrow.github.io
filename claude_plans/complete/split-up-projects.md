# Plan: Split Projects into Individual Files

## Current State

All 8 projects live in a single file: `frontend/src/data/projects.ts` (~154 lines)

**Current structure:**
```typescript
export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  tech: string[];
  status: 'production' | 'beta' | 'archived';
  category: 'ML' | 'Trading' | 'Web App' | 'Data';
  metrics?: { label: string; value: string; }[];
  links?: { demo?: string; github?: string; blog?: string; };
}

export const projects: Project[] = [
  { id: "...", title: "...", ... },
  // ... all projects inline
];
```

**Problems:**
- Hard to edit individual projects
- No support for images/screenshots
- Git diffs are messy when editing one project
- Can't easily add detailed case studies

---

## Proposed Solution

Create a `projects/` folder where each project is a **Markdown file with frontmatter**, similar to the blog system.

### New Structure

```
frontend/src/
├── projects/
│   ├── sentiment-analyzer.md
│   ├── quant-trading-backtest.md
│   ├── anomaly-detection.md
│   └── ...
│
├── pages/
│   ├── Portfolio.tsx          # Project listing page
│   └── ProjectDetail.tsx      # NEW: Individual project page
│
├── data/
│   ├── projects.ts            # Auto-imports all projects from projects/
│   └── blogPosts.ts           # Already done
│
└── assets/
    └── projects/              # Screenshots and images for projects
        ├── sentiment-analyzer/
        │   ├── screenshot.png
        │   └── architecture.png
        └── ...
```

### File Format: Markdown with Frontmatter

Each project file looks like this:

```markdown
---
id: "sentiment-analyzer"
title: "Real-time Sentiment Analysis API"
description: "Production API serving 10M+ requests/month for financial news sentiment analysis."
status: production
category: ML
featured: true
tech:
  - Python
  - PyTorch
  - FastAPI
  - Docker
  - AWS Lambda
  - DynamoDB
metrics:
  - label: "Requests/Month"
    value: "10M+"
  - label: "P95 Latency"
    value: "< 100ms"
  - label: "Uptime"
    value: "99.9%"
links:
  demo: "https://example.com/demo"
  github: "https://github.com/user/repo"
  blog: "/blog/sentiment-analyzer-post"
coverImage: /assets/projects/sentiment-analyzer/screenshot.png
---

Built a high-throughput sentiment analysis system using fine-tuned BERT models for financial text. Deployed on AWS with auto-scaling, achieving 99.9% uptime and sub-100ms p95 latency.

## The Challenge

Financial news moves fast. Traditional sentiment analysis tools couldn't keep up with the volume and speed required for real-time trading decisions.

## The Solution

I built a distributed sentiment analysis pipeline that:

- Processes news, tweets, and SEC filings in real-time
- Uses fine-tuned BERT models optimized for financial text
- Auto-scales based on demand
- Achieves sub-100ms latency at the 95th percentile

## Technical Deep Dive

```python
# Example code snippet
from transformers import AutoModelForSequenceClassification

model = AutoModelForSequenceClassification.from_pretrained(
    "finbert-sentiment"
)
```

## Results

The system now processes over 10 million requests per month with 99.9% uptime.

![Architecture Diagram](/assets/projects/sentiment-analyzer/architecture.png)
```

### Key Features

| Feature | How It Works |
|---------|--------------|
| **Easy to add projects** | Create a new `.md` file in `projects/` |
| **Rich descriptions** | Full markdown support for case studies |
| **Screenshots** | Reference from `/assets/projects/` |
| **Status control** | `status: production/beta/archived` |
| **Featured flag** | `featured: true` for homepage highlights |
| **Metrics** | Array of label/value pairs in frontmatter |
| **Links** | Demo, GitHub, blog links in frontmatter |
| **Detail pages** | Full case study at `/portfolio/:id` |

---

## Implementation Plan

### Phase 1: Setup Infrastructure

1. **Create folder structure**
   ```
   frontend/src/
   ├── projects/           # New folder for markdown files
   └── assets/
       └── projects/       # New folder for project images
   ```

2. **Rewrite `projects.ts`** to use glob imports (same pattern as blogPosts.ts)
   - Use custom frontmatter parser (browser-compatible)
   - Handle nested objects (metrics, links)
   - Parse markdown body as `longDescription` → `htmlContent`

### Phase 2: Migrate Existing Projects

3. **Create 8 markdown files** from existing project data
   - sentiment-analyzer.md
   - quant-trading-backtest.md
   - anomaly-detection.md
   - recommendation-engine.md
   - options-pricing-tool.md
   - nlp-data-extraction.md
   - time-series-forecaster.md
   - ab-testing-platform.md

4. **Test** that portfolio page still works

### Phase 3: Individual Project Pages

5. **Create `ProjectDetail.tsx`** page component
   - Route: `/portfolio/:id`
   - Displays full case study with rendered markdown
   - Shows cover image, metrics, tech stack, links
   - Syntax highlighting for code blocks
   - "Back to Portfolio" navigation
   - Related projects section

6. **Update `routes.tsx`** to add project detail route
   ```typescript
   { path: '/portfolio/:id', element: <ProjectDetail /> }
   ```

7. **Update `Portfolio.tsx`**
   - Link project cards to `/portfolio/:id`
   - Add category/tech filtering (like blog tags)
   - Show "Featured" badge on featured projects

### Phase 4: Homepage Featured Projects

8. **Update `Home.tsx`** (or create component)
   - Filter projects where `featured: true`
   - Display 3-4 featured projects in a highlights section
   - Link to full project detail pages

---

## File Format Details

### Frontmatter Fields

| Field | Required | Type | Description |
|-------|----------|------|-------------|
| `id` | Yes | string | Unique identifier (used in URLs) |
| `title` | Yes | string | Project title |
| `description` | Yes | string | Short description for cards |
| `status` | Yes | enum | `production`, `beta`, or `archived` |
| `category` | Yes | string | Category (extensible: ML, Trading, Web App, Data, etc.) |
| `tech` | Yes | string[] | Technologies used |
| `completedDate` | No | string | Date completed (YYYY-MM-DD) for sorting |
| `order` | No | number | Explicit sort order (lower = first, overrides date) |
| `featured` | No | boolean | Show on homepage (default: false) |
| `draft` | No | boolean | Hide from portfolio until ready (default: false) |
| `metrics` | No | array | `[{ label: string, value: string }]` |
| `links` | No | object | `{ demo?, github?, blog? }` |
| `coverImage` | No | string | Path to screenshot/cover image |
| `relatedProjects` | No | string[] | IDs of related projects for "More Projects" section |

### Categories

Categories are now **extensible** (not a fixed enum). Current categories:
- `ML` - Machine Learning projects
- `Trading` - Quantitative trading tools
- `Web App` - Web applications
- `Data` - Data engineering & analytics

Add new categories as needed by using them in frontmatter.

### Archived Projects Behavior

Projects with `status: archived` are:
- **Visible** on the portfolio page (not hidden)
- **Grayed out** with reduced opacity styling
- **Sorted to bottom** of the project list
- Still accessible via direct URL (`/portfolio/:id`)

### Draft Projects

Projects with `draft: true` are:
- **Hidden** from portfolio listing entirely
- **Hidden** from homepage featured section
- Still accessible via direct URL for preview during development

### Body Content

The markdown body becomes the full case study:
- Rendered as HTML with syntax highlighting
- Displayed on the project detail page (`/portfolio/:id`)
- Supports images, code blocks, headings, lists, etc.

---

## Parsing Considerations

The frontmatter is more complex than blog posts:
- **Nested objects**: `metrics` is an array of objects
- **Links object**: Has optional nested properties
- **Arrays**: `relatedProjects` is a string array

### Recommended: Use js-yaml Library

Instead of a custom parser, use `js-yaml` (~30KB) for reliable YAML parsing:

```bash
npm install js-yaml
npm install -D @types/js-yaml
```

```typescript
import yaml from 'js-yaml';

function parseProjectFrontmatter(content: string): ProjectFrontmatter {
  const match = content.match(/^---\n([\s\S]*?)\n---/);
  if (!match) throw new Error('No frontmatter found');
  return yaml.load(match[1]) as ProjectFrontmatter;
}
```

This handles all edge cases (nested objects, arrays, multiline strings) correctly.

### Type Validation with Zod

Add runtime validation to catch missing required fields early:

```typescript
import { z } from 'zod';

const projectSchema = z.object({
  id: z.string(),
  title: z.string(),
  description: z.string(),
  status: z.enum(['production', 'beta', 'archived']),
  category: z.string(),
  tech: z.array(z.string()),
  completedDate: z.string().optional(),
  order: z.number().optional(),
  featured: z.boolean().optional().default(false),
  draft: z.boolean().optional().default(false),
  metrics: z.array(z.object({
    label: z.string(),
    value: z.string(),
  })).optional(),
  links: z.object({
    demo: z.string().optional(),
    github: z.string().optional(),
    blog: z.string().optional(),
  }).optional(),
  coverImage: z.string().optional(),
  relatedProjects: z.array(z.string()).optional(),
});

export type Project = z.infer<typeof projectSchema>;
```

This provides:
- Runtime validation with clear error messages
- TypeScript types inferred from schema
- Default values for optional boolean fields

---

## Route Structure

| Route | Component | Description |
|-------|-----------|-------------|
| `/portfolio` | `Portfolio.tsx` | Project listing with filters |
| `/portfolio/:id` | `ProjectDetail.tsx` | Individual project case study |

---

## Adding a New Project (Final Workflow)

1. **Create a new file** in `frontend/src/projects/`:
   ```bash
   touch frontend/src/projects/my-new-project.md
   ```

2. **Add frontmatter and content**:
   ```markdown
   ---
   id: "my-new-project"
   title: "My New Project"
   description: "Short description for cards..."
   status: production
   category: ML
   completedDate: "2024-09-15"
   featured: true
   draft: false
   tech:
     - Python
     - React
   metrics:
     - label: "Users"
       value: "10k+"
   links:
     github: "https://github.com/..."
     demo: "https://..."
   coverImage: /assets/projects/my-new-project/cover.png
   relatedProjects:
     - "sentiment-analyzer"
     - "anomaly-detection"
   ---

   ## Overview

   Detailed case study content here...

   ## The Challenge

   What problem did this solve?

   ## Solution

   How did you solve it?

   ## Results

   What was the impact?
   ```

3. **Add screenshots** (optional):
   - Put images in `frontend/src/assets/projects/my-new-project/`
   - Reference in markdown body or frontmatter `coverImage`

4. **Save and reload** - Vite hot-reloads, project appears on portfolio and detail page

---

## Estimated Changes

| File | Action |
|------|--------|
| `package.json` | Add `js-yaml` and `zod` dependencies |
| `frontend/src/data/projects.ts` | Rewrite with glob imports + js-yaml + Zod validation |
| `frontend/src/projects/*.md` | Create 8 new files (migration) |
| `frontend/src/assets/projects/` | Create folder for images |
| `frontend/src/pages/Portfolio.tsx` | Add links to detail pages, filtering, archived styling |
| `frontend/src/pages/ProjectDetail.tsx` | **NEW** - Individual project page with related projects |
| `frontend/src/routes.tsx` | Add `/portfolio/:id` route |
| `frontend/src/pages/Home.tsx` | Add featured projects section |

---

## Project Detail Page Design

### Layout

```
┌─────────────────────────────────────────────────────┐
│ ← Back to Portfolio                                 │
├─────────────────────────────────────────────────────┤
│                                                     │
│ [Cover Image - full width]                          │
│                                                     │
├─────────────────────────────────────────────────────┤
│ Category Badge    Status Badge    Featured Badge    │
│                                                     │
│ # Project Title                                     │
│                                                     │
│ Short description text...                           │
│                                                     │
│ ┌─────────┐ ┌─────────┐ ┌─────────┐                │
│ │ Metric1 │ │ Metric2 │ │ Metric3 │   (cards)      │
│ │  10M+   │ │ <100ms  │ │ 99.9%   │                │
│ └─────────┘ └─────────┘ └─────────┘                │
│                                                     │
│ Tech: [Python] [PyTorch] [FastAPI] [Docker]        │
│                                                     │
│ [Demo] [GitHub] [Read Blog Post]   (link buttons)  │
│                                                     │
├─────────────────────────────────────────────────────┤
│                                                     │
│ ## Case Study Content                               │
│                                                     │
│ Full markdown rendered with prose styling...        │
│ Code blocks with syntax highlighting...             │
│ Images, diagrams, etc.                              │
│                                                     │
├─────────────────────────────────────────────────────┤
│ ## More Projects                                    │
│                                                     │
│ [Related Project 1] [Related Project 2] [...]      │
│                                                     │
└─────────────────────────────────────────────────────┘
```

---

## Status: READY TO IMPLEMENT

All decisions confirmed:
- ✅ Individual project detail pages (`/portfolio/:id`)
- ✅ Featured flag for homepage highlights
- ✅ Extensible categories (not a fixed enum)
- ✅ `completedDate` and `order` fields for sorting
- ✅ `draft` field for work-in-progress projects
- ✅ `relatedProjects` field for "More Projects" section
- ✅ Archived projects: visible but grayed out, sorted to bottom
- ✅ Use `js-yaml` library for reliable YAML parsing
- ✅ Use `Zod` for runtime type validation
