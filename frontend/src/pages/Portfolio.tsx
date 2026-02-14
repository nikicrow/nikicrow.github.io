import { useState } from 'react';
import { Link } from 'react-router';
import { ExternalLink, Github, FileText, TrendingUp, CheckCircle2, Clock, Archive, Star } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { projects, categories, Project } from '../data/projects';

export function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filteredProjects = selectedCategory === 'all'
    ? projects
    : projects.filter(p => p.category === selectedCategory);

  const getStatusIcon = (status: Project['status']) => {
    switch (status) {
      case 'production':
        return <CheckCircle2 className="size-4 text-green-600" />;
      case 'development':
        return <Clock className="size-4 text-blue-600" />;
      case 'beta':
        return <Clock className="size-4 text-yellow-600" />;
      case 'archived':
        return <Archive className="size-4 text-muted-foreground" />;
    }
  };

  const getStatusText = (status: Project['status']) => {
    switch (status) {
      case 'production':
        return 'Production';
      case 'development':
        return 'In Development';
      case 'beta':
        return 'Beta';
      case 'archived':
        return 'Archived';
    }
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl mb-4">Fun Projects</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A showcase of fun personal projects I have done in my spare time
          </p>
        </div>

        {/* Category Filter */}
        <div className="mb-8 flex justify-center gap-2 flex-wrap">
          {categories.map(category => (
            <Button
              key={category}
              variant={selectedCategory === category ? 'default' : 'outline'}
              onClick={() => setSelectedCategory(category)}
              className="capitalize"
            >
              {category === 'all' ? 'All Projects' : category}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredProjects.map((project) => (
            <Link
              key={project.id}
              to={`/portfolio/${project.id}`}
              className="block"
            >
              <Card
                className={`hover:shadow-lg transition-all flex flex-col h-full ${
                  project.status === 'archived' ? 'opacity-60 hover:opacity-80' : ''
                }`}
              >
                <CardHeader>
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <div className="flex items-center gap-2">
                      <Badge variant="secondary">{project.category}</Badge>
                      {project.featured && (
                        <Badge variant="outline" className="border-yellow-500 text-yellow-600 gap-1">
                          <Star className="size-3" />
                          Featured
                        </Badge>
                      )}
                    </div>
                    <div className="flex items-center gap-1 text-sm">
                      {getStatusIcon(project.status)}
                      <span className="text-muted-foreground">{getStatusText(project.status)}</span>
                    </div>
                  </div>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                </CardHeader>

                <CardContent className="flex-1 flex flex-col">
                  <p className="text-muted-foreground mb-4">{project.description}</p>

                  {/* Tech Stack */}
                  <div className="mb-4">
                    <div className="text-xs text-muted-foreground mb-2">Tech Stack</div>
                    <div className="flex flex-wrap gap-1">
                      {project.tech.slice(0, 5).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-accent text-xs rounded"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.tech.length > 5 && (
                        <span className="px-2 py-1 bg-accent text-xs rounded text-muted-foreground">
                          +{project.tech.length - 5} more
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Metrics */}
                  {project.metrics && project.metrics.length > 0 && (
                    <div className="mb-4 grid grid-cols-3 gap-2">
                      {project.metrics.slice(0, 3).map((metric) => (
                        <div key={metric.label} className="text-center p-2 bg-accent/50 rounded">
                          <div className="font-mono text-sm">{metric.value}</div>
                          <div className="text-xs text-muted-foreground">{metric.label}</div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Quick Links - prevent navigation when clicking these */}
                  {project.links && (
                    <div className="flex gap-2 mt-auto pt-4 border-t border-border">
                      {project.links.demo && (
                        <Button
                          variant="outline"
                          size="sm"
                          className="gap-2"
                          onClick={(e) => {
                            e.preventDefault();
                            window.open(project.links!.demo, '_blank');
                          }}
                        >
                          <ExternalLink className="size-4" />
                          Demo
                        </Button>
                      )}
                      {project.links.github && (
                        <Button
                          variant="outline"
                          size="sm"
                          className="gap-2"
                          onClick={(e) => {
                            e.preventDefault();
                            window.open(project.links!.github, '_blank');
                          }}
                        >
                          <Github className="size-4" />
                          Code
                        </Button>
                      )}
                      {project.links.blog && (
                        <Button
                          variant="outline"
                          size="sm"
                          className="gap-2"
                          onClick={(e) => {
                            e.preventDefault();
                            // For internal blog links, navigate without new tab
                            if (project.links!.blog!.startsWith('/')) {
                              window.location.href = project.links!.blog!;
                            } else {
                              window.open(project.links!.blog, '_blank');
                            }
                          }}
                        >
                          <FileText className="size-4" />
                          Article
                        </Button>
                      )}
                    </div>
                  )}
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <Card className="mt-12 border-2 border-dashed">
          <CardContent className="pt-6 text-center">
            <TrendingUp className="size-12 mx-auto mb-4 text-muted-foreground" />
            <h3 className="text-2xl mb-2">Interested in Working Together?</h3>
            <p className="text-muted-foreground mb-4 max-w-xl mx-auto">
              I'm always open to interesting projects, especially those involving
              production ML systems, quantitative trading, or data-intensive applications.
            </p>
            <Button size="lg">Get in Touch</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
