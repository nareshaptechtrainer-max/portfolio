import { Briefcase, GraduationCap } from "lucide-react";

const experiences = [
  {
    type: "work",
    title: "Web Development Intern",
    organization: "Tech Company Inc.",
    duration: "Jun 2024 - Aug 2024",
    description: "Developed responsive web applications using React and TypeScript. Collaborated with senior developers on client projects and implemented new features.",
    icon: Briefcase,
  },
  {
    type: "education",
    title: "Bachelor of Computer Science",
    organization: "State University",
    duration: "2021 - 2025",
    description: "Focused on web technologies, software engineering, and data structures. Maintained a 3.8 GPA and participated in coding competitions.",
    icon: GraduationCap,
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Experience & <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Education</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            My professional journey and academic background
          </p>
        </div>
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary to-secondary hidden md:block"></div>
          
          <div className="space-y-8">
            {experiences.map((exp, index) => {
              const Icon = exp.icon;
              return (
                <div
                  key={exp.title}
                  className="relative pl-0 md:pl-20 animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-6 top-6 w-4 h-4 bg-primary rounded-full border-4 border-background hidden md:block"></div>
                  
                  <div className="bg-card p-6 rounded-xl border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-lg bg-gradient-to-br from-primary/10 to-secondary/10">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                          <h3 className="text-xl font-bold">{exp.title}</h3>
                          <span className="text-sm text-muted-foreground font-medium">{exp.duration}</span>
                        </div>
                        <p className="text-primary font-medium mb-3">{exp.organization}</p>
                        <p className="text-muted-foreground">{exp.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
