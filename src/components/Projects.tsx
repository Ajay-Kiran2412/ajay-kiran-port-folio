import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Folder, ExternalLink, Github } from "lucide-react";

export const Projects = () => {
  const projects = [
    {
      title: "Modern Scrum Board Application",
      description: "A sophisticated project management tool built with cutting-edge frontend technologies, featuring drag-and-drop functionality, responsive design, and modern UI components. This agile board enables teams to organize tasks, track progress through customizable workflows, and collaborate efficiently using visual task management.",
      technologies: ["React", "TypeScript", "Tailwind CSS", "shadcn/ui", "Vite"],
      featured: true,
      githubLink: "#",
      liveLink: "#"
    },
    {
      title: "Community Connect",
      description: "A modern web application designed to bridge communities through mutual aid and support. The platform enables users to post help requests for various community needs, offer assistance to those in need, coordinate blood donations and other critical resources, and connect NGOs with communities they serve.",
      technologies: ["React 18", "TypeScript", "Tailwind CSS", "shadcn/ui", "Vite", "ESLint"],
      featured: true,
      githubLink: "#",
      liveLink: "#"
    },
    {
      title: "Furniture Selling Website",
      description: "A fully responsive e-commerce platform for furniture shopping with modern UI/UX design, product catalog, and shopping cart functionality. Built with clean code and Bootstrap framework.",
      technologies: ["HTML5", "CSS3", "JavaScript", "Bootstrap 5", "Responsive Design"],
      featured: true,
      githubLink: "https://github.com/ajaykiran",
      liveLink: "#"
    },
    {
      title: "My Portfolio",
      description: "A premium, modern portfolio website showcasing my skills, projects, and experience. Features smooth animations, responsive design, and a sleek dark theme with electric blue accents. Built with React and modern web technologies.",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Vite", "Lucide Icons"],
      featured: true,
      githubLink: "#",
      liveLink: "#"
    }
  ];

  return (
    <section id="projects" className="section-padding bg-gradient-to-b from-background to-navy relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-accent/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Showcasing innovative solutions built with modern technologies
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className="group p-8 bg-card border-border hover:border-primary/50 transition-all duration-500 card-hover relative overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Hover Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-purple-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-all duration-300 group-hover:scale-110">
                    <Folder className="w-8 h-8 text-primary" />
                  </div>
                  {project.featured && (
                    <Badge className="bg-primary text-primary-foreground animate-glow">
                      Featured
                    </Badge>
                  )}
                </div>

                {/* Title & Description */}
                <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed text-sm">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge 
                      key={techIndex}
                      variant="secondary"
                      className="bg-secondary/50 text-foreground border border-border hover:border-primary/50 transition-colors text-xs"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <Button
                    variant="outline"
                    size="sm"
                    className="gap-2 border-primary/50 hover:bg-primary/10 hover:border-primary transition-all"
                    asChild
                  >
                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4" />
                      Code
                    </a>
                  </Button>
                  <Button
                    size="sm"
                    className="gap-2 bg-primary hover:bg-primary/90 text-primary-foreground transition-all"
                    asChild
                  >
                    <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </a>
                  </Button>
                </div>
              </div>

              {/* Corner Accent */}
              <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-gradient-to-br from-primary/20 to-purple-accent/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
