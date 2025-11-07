import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Calendar } from "lucide-react";

export const Experience = () => {
  const experiences = [
    {
      company: "Aana Solutions",
      role: "Full Stack Development using AI",
      period: "May 2025 - Present",
      current: true,
      description: "Developed responsive web applications using React and Node.js, integrating AI-driven recommendation systems.",
      technologies: ["React", "Node.js", "AI/ML", "Full Stack"]
    },
    {
      company: "Supraja Technologies",
      role: "Cyber Security Intern",
      period: "June 2025 - July 2025",
      current: false,
      description: "Conducted vulnerability assessments and penetration testing on internal network infrastructure.",
      technologies: ["Penetration Testing", "Network Security", "Vulnerability Assessment"]
    }
  ];

  return (
    <section id="experience" className="section-padding bg-gradient-to-b from-navy to-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Professional <span className="text-gradient">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Hands-on experience in full-stack development and cybersecurity
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-primary/20" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div 
                key={index}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } gap-8`}
              >
                {/* Timeline Dot */}
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background animate-glow" />

                <div className="md:w-1/2">
                  <Card className="p-6 bg-card border-border hover:border-primary/50 transition-all duration-300 card-hover">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-primary/10 rounded-lg">
                          <Briefcase className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold">{exp.role}</h3>
                          <p className="text-primary font-semibold">{exp.company}</p>
                        </div>
                      </div>
                      {exp.current && (
                        <Badge className="bg-primary text-primary-foreground">Current</Badge>
                      )}
                    </div>

                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                      <Calendar className="w-4 h-4" />
                      {exp.period}
                    </div>

                    <p className="text-muted-foreground mb-4">{exp.description}</p>

                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <Badge 
                          key={techIndex}
                          variant="secondary"
                          className="bg-primary/10 text-primary border-primary/20"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </Card>
                </div>

                <div className="hidden md:block md:w-1/2" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
