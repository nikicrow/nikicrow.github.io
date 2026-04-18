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
            <span>Sydney, Australia</span>
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
              I studied Mechanical Engineering and Pure Mathematics at the University of Sydney,
              where I discovered my love for algorithms and problem-solving. After graduation, 
              I transitioned into the world of finance at Goldman Sachs trading swaps, swaptions 
              and exotic bonds in AUD and JPY markets (it paid the best of the grad jobs I got offered
              lol).
            </p>
            <p>
              I spent three years as a trader at Goldman Sachs, where I developed a deep 
              appreciation for quantitative analysis, risk management, and taught myself to code so
              I could automate tedious tasks and build simple trading tools. This sparked my passion 
              for data science and machine learning, leading me to pivot my career towards data analysis.
            </p>
            <p>
              I landed a job as a Data analyst at a government agency and quickly decided that I wanted
              to learn about machine learning and data science. So I learnt enough to get a job as a 
              Data Scientist at a fintech scaleup, where I built many ML models to predict customer behavior and
              optimize revenue generation.
            </p>
            <p>
              After three years there and 1 baby, I was head hunted into a role as a Senior Data Scientist at 
              a large telco where I built and deployed ML systems in production. After less than a year there,
              I was leading a team of data scientists, engineers and analysts to deploy and end to end MLOps 
              system to automate the process of building, deploying and monitoring ML models in production. 
              They recognised my work (despite getting pregnant again) and I got promoted to Lead Machine 
              Learning Engineer, which is my current role.
            </p>
            <p>
              These days, I build, deploy and monitor production ML systems while navigating the beautiful 
              chaos of toddlerhood and pregnancy. I'm passionate about creating systems that actually 
              work in production. Note: not all functional and useful systems need to be ML.
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
              It's hard, it's messy, but I wouldn't change a thing. Except for maybe winning the 
              lottery so I can hire a cleaner and a chef and just focus on the fun parts of life.
            </p>
          </CardContent>
        </Card>

        {/* Skills */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Skills & Expertise</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <h4 className="mb-3 text-sm text-muted-foreground">Machine Learning & AI</h4>
                <div className="flex flex-wrap gap-2">
                  {['Python', 'PyTorch', 'TensorFlow', 'scikit-learn', 'Pandas', 'MLOps'].map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-blue-100 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="mb-3 text-sm text-muted-foreground">Data & BI</h4>
                <div className="flex flex-wrap gap-2">
                  {['Spark', 'Databricks', 'Redshift', 'Snowflake', 'PostgreSQL', 'Tableau', 'Power BI'].map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-red-100 dark:bg-red-900/20 text-red-700 dark:text-red-300 rounded-full text-sm">
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
                  <div>not.telling@isthissafetho.com</div>
                </div>
              </a>
              
              <a 
                href="https://www.linkedin.com/in/niki-crow-bb329313b/" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 border border-border rounded-lg hover:bg-accent transition-colors"
              >
                <Linkedin className="size-5 text-muted-foreground" />
                <div>
                  <div className="text-sm text-muted-foreground">LinkedIn</div>
                  <div>/in/niki-crow-bb329313b</div>
                </div>
              </a>
              
              <a 
                href="https://github.com/nikicrow" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 border border-border rounded-lg hover:bg-accent transition-colors"
              >
                <Github className="size-5 text-muted-foreground" />
                <div>
                  <div className="text-sm text-muted-foreground">GitHub</div>
                  <div>@nikicrow</div>
                </div>
              </a>
              
              {/* <a 
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
              </a> */}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}