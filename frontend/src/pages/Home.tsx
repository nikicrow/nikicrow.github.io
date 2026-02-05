import { Link } from 'react-router';
import { ArrowRight, TrendingUp, Code, BookOpen, Rocket, Star } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { featuredProjects } from '../data/projects';

export function Home() {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <section className="py-20 text-center max-w-4xl mx-auto">
        <div className="inline-block mb-4 px-4 py-2 bg-gradient-to-r from-pink-100 to-purple-100 dark:from-pink-900/20 dark:to-purple-900/20 rounded-full text-sm">
          <span className="font-mono">print("Coffee + Code + Chaos") 💻☕️👶</span>
        </div>
        
        <h1 className="text-5xl md:text-6xl mb-6">
          Data Scientist.<br />
          <span className="text-muted-foreground">ML Engineer.</span><br />
          <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
            Mum of Soon-to-be Two.
          </span>
        </h1>
        
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Building intelligent systems by day, building humans by night. Writing about machine learning, 
          markets, parenting, pregnancy, and the beautiful chaos of doing it all. Ex-Goldman Sachs trader, 
          current toddler negotiator.
        </p>
        
        <div className="flex gap-4 justify-center flex-wrap">
          <Link to="/portfolio">
            <Button size="lg" className="gap-2">
              View My Work
              <ArrowRight className="size-4" />
            </Button>
          </Link>
          <Link to="/blog">
            <Button size="lg" variant="outline" className="gap-2">
              <BookOpen className="size-4" />
              Read My Blog
            </Button>
          </Link>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-12 max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card className="border-2 hover:shadow-lg transition-shadow bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/10 dark:to-blue-800/10">
            <CardContent className="pt-6">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-blue-500 rounded-lg">
                  <TrendingUp className="size-6 text-white" />
                </div>
                <div>
                  <div className="text-2xl font-mono">5+</div>
                  <div className="text-sm text-muted-foreground">Years Trading</div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="border-2 hover:shadow-lg transition-shadow bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/10 dark:to-purple-800/10">
            <CardContent className="pt-6">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-purple-500 rounded-lg">
                  <Code className="size-6 text-white" />
                </div>
                <div>
                  <div className="text-2xl font-mono">10+</div>
                  <div className="text-sm text-muted-foreground">ML Models Deployed</div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="border-2 hover:shadow-lg transition-shadow bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/10 dark:to-green-800/10">
            <CardContent className="pt-6">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-green-500 rounded-lg">
                  <Rocket className="size-6 text-white" />
                </div>
                <div>
                  <div className="text-2xl font-mono">8+</div>
                  <div className="text-sm text-muted-foreground">Apps in Production</div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="border-2 hover:shadow-lg transition-shadow bg-gradient-to-br from-pink-50 to-pink-100 dark:from-pink-900/10 dark:to-pink-800/10">
            <CardContent className="pt-6">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-pink-500 rounded-lg">
                  <span className="text-2xl">👶</span>
                </div>
                <div>
                  <div className="text-2xl font-mono">1.5</div>
                  <div className="text-sm text-muted-foreground">Tiny Humans (& counting!)</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Featured Projects */}
      {featuredProjects.length > 0 && (
        <section className="py-12 max-w-5xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl flex items-center gap-2">
              <Star className="size-8 text-yellow-500" />
              Featured Projects
            </h2>
            <Link to="/portfolio">
              <Button variant="outline" className="gap-2">
                View All
                <ArrowRight className="size-4" />
              </Button>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {featuredProjects.slice(0, 4).map((project) => (
              <Link key={project.id} to={`/portfolio/${project.id}`}>
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <div className="flex items-center gap-2 mb-3">
                      <Badge variant="secondary">{project.category}</Badge>
                      {project.metrics && project.metrics[0] && (
                        <Badge variant="outline" className="font-mono">
                          {project.metrics[0].value}
                        </Badge>
                      )}
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-1">
                      {project.tech.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-accent text-xs rounded"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.tech.length > 4 && (
                        <span className="px-2 py-1 text-xs text-muted-foreground">
                          +{project.tech.length - 4}
                        </span>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* Featured Areas */}
      <section className="py-12 max-w-5xl mx-auto">
        <h2 className="text-3xl mb-8 text-center">What I Do (When Not Changing Nappies)</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <div className="mb-4">
                <div className="inline-block p-2 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg mb-4">
                  <Code className="size-6 text-white" />
                </div>
              </div>
              <h3 className="text-xl mb-2">Machine Learning & Data Science</h3>
              <p className="text-muted-foreground">
                Building and deploying production ML systems. From model development 
                to MLOps, I transform data into actionable insights—usually between bedtime and midnight.
              </p>
            </CardContent>
          </Card>
          
          <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <div className="mb-4">
                <div className="inline-block p-2 bg-gradient-to-br from-green-500 to-teal-500 rounded-lg mb-4">
                  <TrendingUp className="size-6 text-white" />
                </div>
              </div>
              <h3 className="text-xl mb-2">Trading & Markets</h3>
              <p className="text-muted-foreground">
                Former trader at Goldman Sachs with deep expertise in quantitative 
                strategies and market microstructure. Now I apply the same analytical rigor to choosing nurseries.
              </p>
            </CardContent>
          </Card>
          
          <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <div className="mb-4">
                <div className="inline-block p-2 bg-gradient-to-br from-pink-500 to-rose-500 rounded-lg mb-4">
                  <span className="text-2xl">💝</span>
                </div>
              </div>
              <h3 className="text-xl mb-2">Parenting & Pregnancy</h3>
              <p className="text-muted-foreground">
                Documenting the adventure of raising a toddler while pregnant and working in tech. 
                Sleep deprivation, debugging tantrums, and finding joy in the chaos.
              </p>
            </CardContent>
          </Card>
          
          <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <div className="mb-4">
                <div className="inline-block p-2 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-lg mb-4">
                  <span className="text-2xl">⚖️</span>
                </div>
              </div>
              <h3 className="text-xl mb-2">Work-Life Integration</h3>
              <p className="text-muted-foreground">
                Sharing what I've learned about balancing technical leadership, career growth, 
                and motherhood. Spoiler: "balance" is a myth, but you can still thrive.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 text-center">
        <div className="max-w-2xl mx-auto p-8 border-2 border-dashed border-border rounded-lg">
          <h2 className="text-3xl mb-4">Let's Connect</h2>
          <p className="text-muted-foreground mb-6">
            Interested in collaborating or just want to chat about data, 
            markets, or the latest in ML?
          </p>
          <Link to="/about">
            <Button size="lg" className="gap-2">
              Get in Touch
              <ArrowRight className="size-4" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}