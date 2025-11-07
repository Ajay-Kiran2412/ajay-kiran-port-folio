import { Card } from "@/components/ui/card";
import { Code2, Shield, Brain, Users } from "lucide-react";

export const About = () => {
  const highlights = [
    {
      icon: Code2,
      title: "Full-Stack Development",
      description: "Experienced in building responsive web applications with React and Node.js"
    },
    {
      icon: Shield,
      title: "Cybersecurity",
      description: "Skilled in vulnerability assessments and penetration testing"
    },
    {
      icon: Brain,
      title: "Data Science",
      description: "Analyzing data patterns and building data-driven solutions"
    },
    {
      icon: Users,
      title: "Team Leadership",
      description: "Proven track record in collaboration and leadership roles"
    }
  ];

  return (
    <section id="about" className="section-padding bg-gradient-to-b from-background to-navy">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8" />
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Passionate Computer Science undergraduate with a keen interest in building innovative web applications 
            and exploring emerging technologies. I thrive on solving complex problems and transforming ideas into 
            elegant, functional solutions. When I'm not coding, you'll find me diving into the latest tech trends, 
            contributing to open-source projects, or brainstorming the next big idea. I believe in writing code that 
            not only works but also inspires.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => (
            <Card 
              key={index}
              className="p-6 bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 card-hover"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-4 p-3 bg-primary/10 rounded-lg w-fit">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-muted-foreground text-sm">{item.description}</p>
            </Card>
          ))}
        </div>

      </div>
    </section>
  );
};
