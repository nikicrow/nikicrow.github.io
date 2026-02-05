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

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v18 or higher
- npm (comes with Node.js)

### Installation

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

### Build for Production

```bash
npm run build
```

Output will be in the `build/` directory, ready for deployment.

## Project Structure

```
frontend/
├── src/
│   ├── pages/          # Page components
│   │   ├── Home.tsx        # Landing page
│   │   ├── About.tsx       # About me
│   │   ├── Portfolio.tsx   # Project showcase
│   │   ├── Blog.tsx        # Blog listing
│   │   └── BlogPost.tsx    # Individual posts
│   │
│   ├── components/     # Reusable UI components
│   │   ├── ui/             # shadcn/ui components
│   │   └── figma/          # Design-specific components
│   │
│   ├── data/           # Content data
│   │   ├── blogPosts.ts    # Blog content
│   │   └── projects.ts     # Portfolio projects
│   │
│   ├── App.tsx         # Root component
│   ├── routes.tsx      # Route definitions
│   └── index.css       # Global styles
│
├── package.json        # Dependencies
└── vite.config.ts      # Build configuration
```

## Features

- **Responsive Design** — Looks great on everything from phones to ultrawide monitors
- **Dark Mode** — Easy on the eyes during those late-night coding sessions (or 3am feeds)
- **Accessible** — Built with Radix UI primitives for proper keyboard navigation and screen reader support
- **Fast** — Vite + SWC for sub-second hot reloads and optimized production builds
- **Type-Safe** — Written in TypeScript for fewer runtime surprises

## Adding Content

### Blog Posts

Edit `frontend/src/data/blogPosts.ts` to add new posts:

```typescript
{
  id: 'my-new-post',
  title: 'My New Post Title',
  date: '2025-02-05',
  category: 'ML',
  excerpt: 'A brief description...',
  content: `Your markdown content here...`
}
```

### Projects

Edit `frontend/src/data/projects.ts` to add new projects:

```typescript
{
  id: 'project-id',
  title: 'Project Name',
  description: 'Short description',
  longDescription: 'Detailed description...',
  tech: ['Python', 'React', 'etc'],
  status: 'production',
  category: 'ML',
  metrics: [
    { label: 'Users', value: '1000+' }
  ]
}
```

## Deployment

This site is designed to be deployed on GitHub Pages. The repository name follows the `username.github.io` convention for automatic hosting.

To deploy:

1. Build the production bundle: `npm run build`
2. Push to the `main` branch
3. GitHub Pages will serve from the `build/` directory

## License

The code structure is based on a [Figma design template](https://www.figma.com/design/MRemvf3VwLTFoUofebK7Cz/Personal-portfolio-website). UI components from [shadcn/ui](https://ui.shadcn.com/) (MIT licensed).

---

*Built with caffeine, curiosity, and the occasional toddler on my lap.*
