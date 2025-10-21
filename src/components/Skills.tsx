import { Code2, Database, Layout, Server, GitBranch, Smartphone } from "lucide-react";

const skills = [
  {
    icon: Code2,
    name: "HTML & CSS",
    description: "Semantic HTML5, CSS3, Flexbox, Grid",
  },
  {
    icon: Layout,
    name: "JavaScript",
    description: "ES6+, DOM Manipulation, Async/Await",
  },
  {
    icon: Code2,
    name: "React",
    description: "Hooks, Context API, React Router",
  },
  {
    icon: Server,
    name: "Node.js",
    description: "Express, RESTful APIs, Middleware",
  },
  {
    icon: GitBranch,
    name: "Git",
    description: "Version Control, GitHub, Collaboration",
  },
  {
    icon: Smartphone,
    name: "Responsive Design",
    description: "Mobile-first, Tailwind CSS, Bootstrap",
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Skills</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Technologies and tools I work with to build amazing web experiences
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <div
                key={skill.name}
                className="group p-6 bg-card rounded-xl border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-gradient-to-br from-primary/10 to-secondary/10 group-hover:from-primary/20 group-hover:to-secondary/20 transition-colors">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{skill.name}</h3>
                    <p className="text-muted-foreground text-sm">{skill.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
