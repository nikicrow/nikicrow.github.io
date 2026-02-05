import { Link } from 'react-router';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardHeader } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { blogPosts } from '../data/blogPosts';

export function Blog() {
  const categories = Array.from(new Set(blogPosts.map(post => post.category)));
  
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl mb-4">Blog</h1>
          <p className="text-xl text-muted-foreground">
            Thoughts on machine learning, markets, programming, and everything in between.
          </p>
        </div>

        {/* Category Filter */}
        <div className="mb-8 flex flex-wrap gap-2">
          <Badge variant="outline" className="cursor-pointer hover:bg-accent">
            All Posts
          </Badge>
          {categories.map(category => (
            <Badge 
              key={category} 
              variant="outline" 
              className="cursor-pointer hover:bg-accent"
            >
              {category}
            </Badge>
          ))}
        </div>

        {/* Blog Posts */}
        <div className="space-y-6">
          {blogPosts.map((post) => (
            <Card key={post.slug} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="mb-2">
                      <Badge variant="secondary">{post.category}</Badge>
                    </div>
                    <Link to={`/blog/${post.slug}`}>
                      <h2 className="text-2xl mb-2 hover:text-primary transition-colors">
                        {post.title}
                      </h2>
                    </Link>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
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
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                <Link 
                  to={`/blog/${post.slug}`}
                  className="inline-flex items-center gap-2 text-primary hover:underline"
                >
                  Read more
                  <ArrowRight className="size-4" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Newsletter CTA */}
        <Card className="mt-12 border-2 border-dashed">
          <CardContent className="pt-6 text-center">
            <h3 className="text-2xl mb-2">Stay Updated</h3>
            <p className="text-muted-foreground mb-4">
              Want to get notified when I publish new posts? Subscribe to my newsletter.
            </p>
            <div className="flex gap-2 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="your@email.com" 
                className="flex-1 px-4 py-2 border border-border rounded-lg bg-background"
              />
              <button className="px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity">
                Subscribe
              </button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
