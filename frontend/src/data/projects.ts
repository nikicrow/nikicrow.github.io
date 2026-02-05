import { Marked } from 'marked';
import { markedHighlight } from 'marked-highlight';
import hljs from 'highlight.js';
import yaml from 'js-yaml';
import { z } from 'zod';

// Configure marked with syntax highlighting
const marked = new Marked(
  markedHighlight({
    emptyLangClass: 'hljs',
    langPrefix: 'hljs language-',
    highlight(code: string, lang: string) {
      const language = hljs.getLanguage(lang) ? lang : 'plaintext';
      return hljs.highlight(code, { language }).value;
    }
  })
);

// Zod schema for project frontmatter validation
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

export type Project = z.infer<typeof projectSchema> & {
  content: string;
  htmlContent: string;
};

// Parse frontmatter using js-yaml
function parseFrontmatter(fileContent: string): { data: Record<string, unknown>; content: string } {
  const frontmatterRegex = /^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/;
  const match = fileContent.match(frontmatterRegex);

  if (!match) {
    return { data: {}, content: fileContent };
  }

  const [, frontmatterStr, content] = match;

  try {
    const data = yaml.load(frontmatterStr) as Record<string, unknown>;
    return { data, content: content.trim() };
  } catch (error) {
    console.error('Error parsing YAML frontmatter:', error);
    return { data: {}, content: fileContent };
  }
}

// Import all markdown files from projects folder
const projectFiles = import.meta.glob('../projects/*.md', {
  query: '?raw',
  eager: true,
});

// Check if we're in development mode
const isDev = import.meta.env.DEV;

// Parse and validate all projects
export const projects: Project[] = Object.entries(projectFiles)
  .map(([filepath, file]) => {
    const rawContent = (file as { default: string }).default;
    const { data: frontmatter, content } = parseFrontmatter(rawContent);

    // Validate frontmatter with Zod
    const parseResult = projectSchema.safeParse(frontmatter);

    if (!parseResult.success) {
      console.error(`Invalid project frontmatter in ${filepath}:`, parseResult.error.errors);
      return null;
    }

    const validated = parseResult.data;

    return {
      ...validated,
      content: content,
      htmlContent: marked.parse(content) as string,
    };
  })
  .filter((project): project is Project => project !== null)
  // In production, only show non-draft projects. In dev, show all.
  .filter(project => isDev || !project.draft)
  // Sort projects: by order if specified, then by completedDate, then archived at bottom
  .sort((a, b) => {
    // Archived projects go to the bottom
    if (a.status === 'archived' && b.status !== 'archived') return 1;
    if (a.status !== 'archived' && b.status === 'archived') return -1;

    // If both have order, sort by order (lower first)
    if (a.order !== undefined && b.order !== undefined) {
      return a.order - b.order;
    }

    // If only one has order, it comes first
    if (a.order !== undefined) return -1;
    if (b.order !== undefined) return 1;

    // Sort by completedDate (newest first)
    if (a.completedDate && b.completedDate) {
      return new Date(b.completedDate).getTime() - new Date(a.completedDate).getTime();
    }

    // Projects with dates come before those without
    if (a.completedDate) return -1;
    if (b.completedDate) return 1;

    return 0;
  });

// Helper to get featured projects
export const featuredProjects = projects.filter(p => p.featured && !p.draft);

// Helper to get project by ID
export function getProjectById(id: string): Project | undefined {
  return projects.find(p => p.id === id);
}

// Helper to get related projects
export function getRelatedProjects(project: Project): Project[] {
  if (!project.relatedProjects || project.relatedProjects.length === 0) {
    // Fall back to same category projects
    return projects
      .filter(p => p.id !== project.id && p.category === project.category)
      .slice(0, 3);
  }

  return project.relatedProjects
    .map((id: string) => projects.find((p: Project) => p.id === id))
    .filter((p): p is Project => p !== undefined);
}

// Get unique categories from all projects
export const categories = ['all', ...new Set(projects.map(p => p.category))];
