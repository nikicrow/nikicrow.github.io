import { useState } from 'react';
import { Link } from 'react-router';
import { Calendar, Clock, ArrowRight, Tag, X } from 'lucide-react';
import { Card, CardContent, CardHeader } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { blogPosts } from '../data/blogPosts';

export function Blog() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  // Get unique categories and tags
  const categories = Array.from(new Set(blogPosts.map(post => post.category)));
  const allTags = Array.from(new Set(blogPosts.flatMap(post => post.tags))).sort();

  // Filter posts based on selected category and tags
  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = !selectedCategory || post.category === selectedCategory;
    const matchesTags = selectedTags.length === 0 ||
      selectedTags.every(tag => post.tags.includes(tag));
    return matchesCategory && matchesTags;
  });

  const toggleTag = (tag: string) => {
    setSelectedTags(prev =>
      prev.includes(tag)
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    );
  };

  const clearFilters = () => {
    setSelectedCategory(null);
    setSelectedTags([]);
  };

  const hasActiveFilters = selectedCategory !== null || selectedTags.length > 0;

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
        <div className="mb-4">
          <p className="text-sm text-muted-foreground mb-2">Categories</p>
          <div className="flex flex-wrap gap-2">
            <Badge
              variant={selectedCategory === null ? "default" : "outline"}
              className="cursor-pointer hover:bg-accent"
              onClick={() => setSelectedCategory(null)}
            >
              All Posts
            </Badge>
            {categories.map(category => (
              <Badge
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                className="cursor-pointer hover:bg-accent"
                onClick={() => setSelectedCategory(
                  selectedCategory === category ? null : category
                )}
              >
                {category}
              </Badge>
            ))}
          </div>
        </div>

        {/* Tags Filter */}
        <div className="mb-6">
          <p className="text-sm text-muted-foreground mb-2 flex items-center gap-1">
            <Tag className="size-3" />
            Tags
          </p>
          <div className="flex flex-wrap gap-2">
            {allTags.map(tag => (
              <Badge
                key={tag}
                variant={selectedTags.includes(tag) ? "default" : "outline"}
                className="cursor-pointer hover:bg-accent text-xs"
                onClick={() => toggleTag(tag)}
              >
                {tag}
              </Badge>
            ))}
          </div>
        </div>

        {/* Active Filters */}
        {hasActiveFilters && (
          <div className="mb-6 flex items-center gap-2 flex-wrap">
            <span className="text-sm text-muted-foreground">Filtering by:</span>
            {selectedCategory && (
              <Badge variant="secondary" className="gap-1">
                {selectedCategory}
                <X
                  className="size-3 cursor-pointer"
                  onClick={() => setSelectedCategory(null)}
                />
              </Badge>
            )}
            {selectedTags.map(tag => (
              <Badge key={tag} variant="secondary" className="gap-1">
                {tag}
                <X
                  className="size-3 cursor-pointer"
                  onClick={() => toggleTag(tag)}
                />
              </Badge>
            ))}
            <button
              onClick={clearFilters}
              className="text-sm text-muted-foreground hover:text-foreground underline"
            >
              Clear all
            </button>
          </div>
        )}

        {/* Results count */}
        <p className="text-sm text-muted-foreground mb-6">
          Showing {filteredPosts.length} of {blogPosts.length} posts
        </p>

        {/* Blog Posts */}
        <div className="space-y-6">
          {filteredPosts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No posts match your filters.</p>
              <button
                onClick={clearFilters}
                className="text-primary hover:underline mt-2"
              >
                Clear filters
              </button>
            </div>
          ) : (
            filteredPosts.map((post) => (
              <Card key={post.slug} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex flex-wrap gap-2 mb-2">
                        <Badge variant="secondary">{post.category}</Badge>
                        {!post.published && (
                          <Badge variant="outline" className="border-yellow-500 text-yellow-600">
                            Draft
                          </Badge>
                        )}
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
                      {/* Post Tags */}
                      {post.tags.length > 0 && (
                        <div className="flex flex-wrap gap-1 mb-2">
                          {post.tags.map(tag => (
                            <Badge
                              key={tag}
                              variant="outline"
                              className="text-xs cursor-pointer hover:bg-accent"
                              onClick={(e) => {
                                e.preventDefault();
                                toggleTag(tag);
                              }}
                            >
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      )}
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
            ))
          )}
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
