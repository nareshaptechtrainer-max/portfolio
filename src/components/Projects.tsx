import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import project1Image from "@/assets/project1.jpg";
import project2Image from "@/assets/project2.jpg";
import project3Image from "@/assets/project3.jpg";

const projects = [
  {
    title: "Responsive Portfolio Website",
    description: "A modern, fully responsive portfolio website built with React and Tailwind CSS, featuring smooth animations and mobile-first design.",
    image: project1Image,
    technologies: ["React", "Tailwind CSS", "TypeScript"],
    githubUrl: "https://github.com/nareshaptechtrainer-max/portfolio",
    liveUrl: "https://naresh-gudivaka.netlify.app",
  },
  {
    title: "E-Commerce Platform",
    description: "Full-featured online shopping platform with product catalog, cart functionality, and secure checkout process.",
    image: project2Image,
    technologies: ["React", "Node.js", "MongoDB"],
    githubUrl: "https://github.com/yourusername/project2",
    liveUrl: "https://project2.demo.com",
  },
  {
    title: "Analytics Dashboard",
    description: "Real-time analytics dashboard with interactive charts and data visualization for tracking key metrics.",
    image: project3Image,
    technologies: ["React", "Chart.js", "Express"],
    githubUrl: "https://github.com/yourusername/project3",
    liveUrl: "https://project3.demo.com",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Some of my recent work showcasing my skills and creativity
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group bg-card rounded-xl overflow-hidden border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <Button size="sm" variant="outline" asChild className="flex-1">
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </a>
                  </Button>
                  <Button size="sm" variant="default" asChild className="flex-1">
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Demo
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
