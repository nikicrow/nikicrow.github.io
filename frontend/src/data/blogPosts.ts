import { Marked } from 'marked';
import { markedHighlight } from 'marked-highlight';
import hljs from 'highlight.js';

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

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  content: string;
  htmlContent: string;
  coverImage?: string;
  published: boolean;
  tags: string[];
}

// Simple frontmatter parser (browser-compatible, no Buffer needed)
function parseFrontmatter(fileContent: string): { data: Record<string, unknown>; content: string } {
  console.log('Raw content first 100 chars:', JSON.stringify(fileContent?.slice(0, 100)));
  const frontmatterRegex = /^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/;
  const match = fileContent.match(frontmatterRegex);

  console.log('Frontmatter match:', match ? 'found' : 'NOT FOUND');

  if (!match) {
    return { data: {}, content: fileContent };
  }

  const [, frontmatterStr, content] = match;
  const data: Record<string, unknown> = {};

  // Parse YAML-like frontmatter line by line
  let currentKey = '';
  let inArray = false;
  let arrayValues: string[] = [];

  frontmatterStr.split('\n').forEach(rawLine => {
    // Strip Windows carriage return if present
    const line = rawLine.replace(/\r$/, '');
    console.log('Processing line:', JSON.stringify(line));
    // Array item (starts with "  - ")
    if (inArray && line.match(/^\s+-\s+/)) {
      const value = line.replace(/^\s+-\s+/, '').trim();
      arrayValues.push(value);
      return;
    }

    // If we were in an array and hit a new key, save the array
    if (inArray && currentKey) {
      data[currentKey] = arrayValues;
      inArray = false;
      arrayValues = [];
    }

    // Key-value pair
    const kvMatch = line.match(/^(\w+):\s*(.*)$/);
    console.log('KV match for line:', kvMatch);
    if (kvMatch) {
      const [, key, rawValue] = kvMatch;
      const value = rawValue.trim();

      // Check if this is the start of an array (empty value or just whitespace)
      if (value === '' || value === '|' || value === '>') {
        currentKey = key;
        inArray = true;
        arrayValues = [];
        return;
      }

      // Remove quotes if present
      const unquotedValue = value.replace(/^["']|["']$/g, '');

      // Parse booleans
      if (unquotedValue === 'true') {
        data[key] = true;
      } else if (unquotedValue === 'false') {
        data[key] = false;
      } else {
        data[key] = unquotedValue;
      }
    }
  });

  // Don't forget to save the last array if file ends with one
  if (inArray && currentKey) {
    data[currentKey] = arrayValues;
  }

  console.log('Parsed frontmatter data:', data);
  return { data, content: content.trim() };
}

// Import all markdown files from blog_posts folder
const postFiles = import.meta.glob('../blog_posts/*.md', {
  query: '?raw',
  eager: true,
});

function calculateReadTime(content: string): string {
  const wordsPerMinute = 200;
  const words = content.split(/\s+/).length;
  const minutes = Math.ceil(words / wordsPerMinute);
  return `${minutes} min read`;
}

// Check if we're in development mode
const isDev = import.meta.env.DEV;

export const blogPosts: BlogPost[] = Object.entries(postFiles)
  .map(([_filepath, file]) => {
    // Handle both Vite versions: raw string or { default: string }
    const rawContent = typeof file === 'string'
      ? file
      : (file as { default: string }).default;
    const { data: frontmatter, content } = parseFrontmatter(rawContent);

    return {
      slug: frontmatter.slug as string,
      title: frontmatter.title as string,
      excerpt: frontmatter.excerpt as string,
      date: String(frontmatter.date),
      readTime: calculateReadTime(content),
      category: frontmatter.category as string,
      content: content,
      htmlContent: marked.parse(content) as string,
      coverImage: frontmatter.coverImage as string | undefined,
      published: (frontmatter.published as boolean) ?? true,
      tags: (frontmatter.tags as string[]) ?? [],
    };
  })
  // In production, only show published posts. In dev, show all.
  .filter(post => isDev || post.published)
  // Sort by date, newest first
  .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
