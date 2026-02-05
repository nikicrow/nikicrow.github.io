import { Mail, Linkedin, Github, Twitter, MapPin, Briefcase } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';

export function About() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="mb-6">
            <div className="w-32 h-32 mx-auto bg-gradient-to-br from-pink-500 via-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white text-4xl">
              👩‍💻
            </div>
          </div>
          <h1 className="text-4xl mb-4">About Me</h1>
          <div className="flex items-center justify-center gap-2 text-muted-foreground mb-2">
            <MapPin className="size-4" />
            <span>New York, NY</span>
          </div>
          <div className="flex items-center justify-center gap-2 text-muted-foreground">
            <Briefcase className="size-4" />
            <span>Data Scientist, ML Engineer & Mum</span>
          </div>
        </div>

        {/* Bio */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>My Story</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground">
            <p>
              Hey there! 👋 I'm a data scientist and machine learning engineer who also happens 
              to be a mum to an energetic 2-year-old and currently pregnant with baby number two.
            </p>
            <p>
              I spent several years as a trader at Goldman Sachs, where I developed a deep 
              appreciation for quantitative analysis, risk management, and making decisions under 
              uncertainty. (Which, it turns out, is excellent preparation for parenting.)
            </p>
            <p>
              These days, I build and deploy production ML systems while navigating the beautiful 
              chaos of toddlerhood and pregnancy. I'm passionate about creating systems that actually 
              work in production—usually coded between bedtime and midnight, fueled by decaf coffee 
              and sheer determination.
            </p>
            <p>
              My blog reflects the full spectrum of my life: technical deep dives into ML and trading, 
              honest reflections on pregnancy and parenting in tech, and everything in between. Because 
              I'm not just an engineer or just a mum—I'm both, simultaneously, and that intersection 
              is where life gets really interesting.
            </p>
            <p>
              I believe we need more diverse voices in tech, and that includes the voices of parents, 
              especially mothers who are still actively building and shipping while raising humans. 
              It's hard, it's messy, and it's absolutely possible.
            </p>
          </CardContent>
        </Card>

        {/* Skills */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Skills & Expertise</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="mb-3 text-sm text-muted-foreground">Machine Learning & Data</h4>
                <div className="flex flex-wrap gap-2">
                  {['Python', 'PyTorch', 'TensorFlow', 'scikit-learn', 'Pandas', 'SQL', 'MLOps'].map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-blue-100 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              
              <div>
                <h4 className="mb-3 text-sm text-muted-foreground">Engineering & Tools</h4>
                <div className="flex flex-wrap gap-2">
                  {['TypeScript', 'React', 'Docker', 'AWS', 'Git', 'CI/CD', 'FastAPI'].map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-purple-100 dark:bg-purple-900/20 text-purple-700 dark:text-purple-300 rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Contact */}
        <Card>
          <CardHeader>
            <CardTitle>Get in Touch</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-6">
              I'm always open to interesting conversations and collaboration opportunities. 
              Feel free to reach out through any of these channels:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <a 
                href="mailto:your.email@example.com" 
                className="flex items-center gap-3 p-4 border border-border rounded-lg hover:bg-accent transition-colors"
              >
                <Mail className="size-5 text-muted-foreground" />
                <div>
                  <div className="text-sm text-muted-foreground">Email</div>
                  <div>your.email@example.com</div>
                </div>
              </a>
              
              <a 
                href="https://linkedin.com/in/yourprofile" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 border border-border rounded-lg hover:bg-accent transition-colors"
              >
                <Linkedin className="size-5 text-muted-foreground" />
                <div>
                  <div className="text-sm text-muted-foreground">LinkedIn</div>
                  <div>/in/yourprofile</div>
                </div>
              </a>
              
              <a 
                href="https://github.com/yourusername" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 border border-border rounded-lg hover:bg-accent transition-colors"
              >
                <Github className="size-5 text-muted-foreground" />
                <div>
                  <div className="text-sm text-muted-foreground">GitHub</div>
                  <div>@yourusername</div>
                </div>
              </a>
              
              <a 
                href="https://twitter.com/yourhandle" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 border border-border rounded-lg hover:bg-accent transition-colors"
              >
                <Twitter className="size-5 text-muted-foreground" />
                <div>
                  <div className="text-sm text-muted-foreground">Twitter</div>
                  <div>@yourhandle</div>
                </div>
              </a>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}