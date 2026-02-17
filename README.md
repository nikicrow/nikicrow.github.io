# nikicrow.github.io

A personal portfolio and blog for a data scientist who writes code by day and builds tiny humans by night.

---

## About This Site

This is the source code for my personal website—a space where I write about machine learning, quantitative trading, parenting, and the beautiful chaos of doing it all simultaneously.

**What you'll find here:**

- **Portfolio** — Production ML systems, trading tools, and data platforms I've built
- **Blog** — Technical deep-dives, market analysis, parenting adventures, and reflections on work-life integration
- **About** — My journey from Goldman Sachs trading floors to building ML systems (while negotiating with a toddler)

## Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | [React 18](https://react.dev/) |
| Build Tool | [Vite](https://vitejs.dev/) + SWC |
| Styling | [Tailwind CSS](https://tailwindcss.com/) |
| Components | [Radix UI](https://www.radix-ui.com/) + [shadcn/ui](https://ui.shadcn.com/) |
| Routing | React Router |
| Icons | [Lucide](https://lucide.dev/) |
| Charts | [Recharts](https://recharts.org/) |

## How to Run

### Prerequisites

- [Node.js](https://nodejs.org/) v18 or higher (includes npm)

#### Installing Node.js

**Windows:**
```powershell
winget install OpenJS.NodeJS.LTS
```

**macOS:**
```bash
brew install node
```

**Linux (Ubuntu/Debian):**
```bash
curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash -
sudo apt-get install -y nodejs
```

Verify installation:
```bash
node --version   # Should output v18.x.x or higher
npm --version    # Should output 9.x.x or higher
```

### Quick Start

```bash
# Clone the repository
git clone https://github.com/nikicrow/nikicrow.github.io.git
cd nikicrow.github.io

# Navigate to frontend
cd frontend

# Install dependencies
npm install

# Start development server
npm run dev
```

The site will be available at **http://localhost:3000**

### Common Commands

| Command | Description |
|---------|-------------|
| `npm install` | Install all dependencies |
| `npm run dev` | Start development server |
| `npm run build` | Create production build |
| `npm run preview` | Preview production build locally |

### Build for Production

```bash
npm run build
```

Output will be in the `build/` directory, ready for deployment.

## Project Structure

```
nikicrow.github.io/
├── frontend/
│   ├── src/
│   │   ├── pages/              # Page components
│   │   │   ├── Home.tsx
│   │   │   ├── About.tsx
│   │   │   ├── Portfolio.tsx
│   │   │   ├── Blog.tsx
│   │   │   └── BlogPost.tsx
│   │   │
│   │   ├── components/         # Reusable UI components
│   │   │   ├── ui/             # shadcn/ui components
│   │   │   └── figma/          # Design-specific components
│   │   │
│   │   ├── blog_posts/         # Blog content (markdown with frontmatter)
│   │   ├── projects/           # Project content (markdown with frontmatter)
│   │   ├── data/               # Content loaders
│   │   │   ├── blogPosts.ts    # Parses blog markdown files
│   │   │   └── projects.ts     # Parses project markdown files
│   │   │
│   │   ├── styles/             # CSS styling files
│   │   ├── App.tsx             # Root component
│   │   ├── routes.tsx          # Route definitions
│   │   └── index.css           # Global styles
│   │
│   ├── package.json            # Dependencies
│   └── vite.config.ts          # Build configuration
│
├── build/                      # Production build output
└── .github/                    # GitHub Actions for deployment
```

## Features

- **Responsive Design** — Looks great on everything from phones to ultrawide monitors
- **Dark Mode** — Easy on the eyes during those late-night coding sessions (or 3am feeds)
- **Accessible** — Built with Radix UI primitives for proper keyboard navigation and screen reader support
- **Fast** — Vite + SWC for sub-second hot reloads and optimized production builds
- **Type-Safe** — Written in TypeScript for fewer runtime surprises

## Adding Content

### Blog Posts

Create a new markdown file in `frontend/src/blog_posts/` with frontmatter:

```markdown
---
title: "My New Post Title"
slug: "my-new-post"
date: 2025-02-05
category: ML
excerpt: "A brief description..."
published: true
tags:
  - machine-learning
  - python
---

Your markdown content here...
```

### Projects

Create a new markdown file in `frontend/src/projects/` with frontmatter:

```markdown
---
id: "project-id"
title: "Project Name"
description: "Short description"
status: production
category: ML
featured: true
draft: false
tech:
  - Python
  - React
links:
  github: "https://github.com/..."
  demo: "https://..."
---

## Overview

Detailed project description in markdown...
```

## Deployment

This site is deployed on GitHub Pages via GitHub Actions. The workflow automatically builds and deploys when changes are pushed to the `main` branch.

## Troubleshooting

**"node is not recognized"** — Restart your terminal after installing Node.js

**Port 3000 in use** — Either close the other application or modify `package.json`:
```json
"dev": "vite --open --port 3001"
```

**Changes not appearing** — Hard refresh with `Ctrl + Shift + R` (or `Cmd + Shift + R` on Mac)

## License

The code structure is based on a [Figma design template](https://www.figma.com/design/MRemvf3VwLTFoUofebK7Cz/Personal-portfolio-website). UI components from [shadcn/ui](https://ui.shadcn.com/) (MIT licensed).

---

*Built with caffeine, curiosity, and the occasional toddler on my lap.*
