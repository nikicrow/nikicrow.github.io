import { useParams, Link, Navigate } from 'react-router';
import { Calendar, Clock, ArrowLeft } from 'lucide-react';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { blogPosts } from '../data/blogPosts';

export function BlogPost() {
  const { slug } = useParams();
  const post = blogPosts.find(p => p.slug === slug);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  // Split content into paragraphs and sections
  const renderContent = (content: string) => {
    const lines = content.split('\n');
    return lines.map((line, index) => {
      // Headers
      if (line.startsWith('## ')) {
        return <h2 key={index} className="text-2xl mt-8 mb-4">{line.substring(3)}</h2>;
      }
      if (line.startsWith('### ')) {
        return <h3 key={index} className="text-xl mt-6 mb-3">{line.substring(4)}</h3>;
      }
      
      // Lists
      if (line.startsWith('- **')) {
        const match = line.match(/- \*\*(.+?)\*\*: (.+)/);
        if (match) {
          return (
            <li key={index} className="ml-6 mb-2">
              <strong>{match[1]}</strong>: {match[2]}
            </li>
          );
        }
      }
      if (line.startsWith('- ')) {
        return <li key={index} className="ml-6 mb-2">{line.substring(2)}</li>;
      }
      
      // Numbered lists
      if (/^\d+\. \*\*/.test(line)) {
        const match = line.match(/\d+\. \*\*(.+?)\*\*: (.+)/);
        if (match) {
          return (
            <li key={index} className="ml-6 mb-2">
              <strong>{match[1]}</strong>: {match[2]}
            </li>
          );
        }
      }
      
      // Bold text
      if (line.includes('**')) {
        const parts = line.split(/\*\*(.+?)\*\*/g);
        return (
          <p key={index} className="mb-4">
            {parts.map((part, i) => 
              i % 2 === 1 ? <strong key={i}>{part}</strong> : part
            )}
          </p>
        );
      }
      
      // Empty lines
      if (line.trim() === '') {
        return <div key={index} className="h-2" />;
      }
      
      // Regular paragraphs
      return <p key={index} className="mb-4">{line}</p>;
    });
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto">
        {/* Back Button */}
        <Link to="/blog" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary mb-8 transition-colors">
          <ArrowLeft className="size-4" />
          Back to Blog
        </Link>

        {/* Article Header */}
        <article>
          <header className="mb-8">
            <div className="mb-4">
              <Badge variant="secondary">{post.category}</Badge>
            </div>
            <h1 className="text-4xl md:text-5xl mb-4">{post.title}</h1>
            <div className="flex items-center gap-4 text-muted-foreground">
              <div className="flex items-center gap-1">
                <Calendar className="size-4" />
                <span>{new Date(post.date).toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="size-4" />
                <span>{post.readTime}</span>
              </div>
            </div>
          </header>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-muted-foreground mb-8 italic">
              {post.excerpt}
            </p>
            <div className="text-foreground leading-relaxed">
              {renderContent(post.content)}
            </div>
          </div>

          {/* Article Footer */}
          <footer className="mt-12 pt-8 border-t border-border">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground mb-2">Share this post</p>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">Twitter</Button>
                  <Button variant="outline" size="sm">LinkedIn</Button>
                  <Button variant="outline" size="sm">Copy Link</Button>
                </div>
              </div>
            </div>
          </footer>
        </article>

        {/* Related Posts */}
        <div className="mt-12">
          <h3 className="text-2xl mb-6">More Posts</h3>
          <div className="grid gap-4">
            {blogPosts
              .filter(p => p.slug !== slug)
              .slice(0, 3)
              .map(relatedPost => (
                <Link 
                  key={relatedPost.slug}
                  to={`/blog/${relatedPost.slug}`}
                  className="p-4 border border-border rounded-lg hover:bg-accent transition-colors"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <Badge variant="secondary" className="mb-2">
                        {relatedPost.category}
                      </Badge>
                      <h4 className="mb-1">{relatedPost.title}</h4>
                      <p className="text-sm text-muted-foreground">
                        {relatedPost.excerpt.substring(0, 100)}...
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
