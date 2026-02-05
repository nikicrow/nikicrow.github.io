import { useParams, Link, Navigate } from 'react-router';
import { ArrowLeft, ExternalLink, Github, FileText, CheckCircle2, Clock, Archive } from 'lucide-react';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { getProjectById, getRelatedProjects, Project } from '../data/projects';

// Import highlight.js styles
import 'highlight.js/styles/github-dark.css';

export function ProjectDetail() {
  const { id } = useParams();
  const project = getProjectById(id || '');

  if (!project) {
    return <Navigate to="/portfolio" replace />;
  }

  const relatedProjects = getRelatedProjects(project);

  const getStatusIcon = (status: Project['status']) => {
    switch (status) {
      case 'production':
        return <CheckCircle2 className="size-4" />;
      case 'beta':
        return <Clock className="size-4" />;
      case 'archived':
        return <Archive className="size-4" />;
    }
  };

  const getStatusVariant = (status: Project['status']): 'default' | 'secondary' | 'outline' => {
    switch (status) {
      case 'production':
        return 'default';
      case 'beta':
        return 'secondary';
      case 'archived':
        return 'outline';
    }
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        {/* Back Button */}
        <Link to="/portfolio" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary mb-8 transition-colors">
          <ArrowLeft className="size-4" />
          Back to Portfolio
        </Link>

        {/* Cover Image */}
        {project.coverImage && (
          <div className="mb-8">
            <img
              src={project.coverImage}
              alt={project.title}
              className="w-full rounded-lg object-cover max-h-96"
            />
          </div>
        )}

        {/* Header */}
        <header className="mb-8">
          {/* Badges */}
          <div className="flex flex-wrap gap-2 mb-4">
            <Badge variant="secondary">{project.category}</Badge>
            <Badge variant={getStatusVariant(project.status)} className="gap-1">
              {getStatusIcon(project.status)}
              {project.status.charAt(0).toUpperCase() + project.status.slice(1)}
            </Badge>
            {project.featured && (
              <Badge variant="outline" className="border-yellow-500 text-yellow-600">
                Featured
              </Badge>
            )}
            {project.draft && (
              <Badge variant="outline" className="border-orange-500 text-orange-600">
                Draft
              </Badge>
            )}
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl mb-4">{project.title}</h1>

          {/* Description */}
          <p className="text-xl text-muted-foreground mb-6">{project.description}</p>

          {/* Metrics */}
          {project.metrics && project.metrics.length > 0 && (
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
              {project.metrics.map((metric) => (
                <Card key={metric.label}>
                  <CardContent className="pt-4 pb-4 text-center">
                    <div className="text-2xl font-mono mb-1">{metric.value}</div>
                    <div className="text-sm text-muted-foreground">{metric.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}

          {/* Tech Stack */}
          <div className="mb-6">
            <div className="text-sm text-muted-foreground mb-2">Tech Stack</div>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-accent text-sm rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Links */}
          {project.links && (
            <div className="flex flex-wrap gap-3">
              {project.links.demo && (
                <Button asChild variant="default" className="gap-2">
                  <a href={project.links.demo} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="size-4" />
                    Live Demo
                  </a>
                </Button>
              )}
              {project.links.github && (
                <Button asChild variant="outline" className="gap-2">
                  <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                    <Github className="size-4" />
                    View Code
                  </a>
                </Button>
              )}
              {project.links.blog && (
                <Button asChild variant="outline" className="gap-2">
                  <Link to={project.links.blog}>
                    <FileText className="size-4" />
                    Read Article
                  </Link>
                </Button>
              )}
            </div>
          )}
        </header>

        {/* Divider */}
        <hr className="border-border mb-8" />

        {/* Article Content */}
        <article className="prose prose-lg max-w-none dark:prose-invert mb-12">
          <div
            className="text-foreground"
            dangerouslySetInnerHTML={{ __html: project.htmlContent }}
          />
        </article>

        {/* Related Projects */}
        {relatedProjects.length > 0 && (
          <div className="mt-12 pt-8 border-t border-border">
            <h3 className="text-2xl mb-6">More Projects</h3>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {relatedProjects.map((related) => (
                <Link
                  key={related.id}
                  to={`/portfolio/${related.id}`}
                  className="block p-4 border border-border rounded-lg hover:bg-accent transition-colors"
                >
                  <Badge variant="secondary" className="mb-2">
                    {related.category}
                  </Badge>
                  <h4 className="font-semibold mb-1">{related.title}</h4>
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {related.description}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
