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
      title: "AI Integration",
      description: "Implementing AI-driven solutions and recommendation systems"
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
            Motivated Computer Science undergraduate with hands-on experience in software development, 
            cybersecurity, and full-stack technologies. Proven problem-solving skills, a collaborative mindset, 
            and a commitment to continuous learning. Eager to contribute to innovative tech-driven environments 
            and real-world challenges.
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

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
          <div className="text-center p-6 bg-card/50 backdrop-blur-sm rounded-lg border border-border">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">8.0</div>
            <div className="text-sm text-muted-foreground">CGPA</div>
          </div>
          <div className="text-center p-6 bg-card/50 backdrop-blur-sm rounded-lg border border-border">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">2+</div>
            <div className="text-sm text-muted-foreground">Internships</div>
          </div>
          <div className="text-center p-6 bg-card/50 backdrop-blur-sm rounded-lg border border-border">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">10+</div>
            <div className="text-sm text-muted-foreground">Certifications</div>
          </div>
          <div className="text-center p-6 bg-card/50 backdrop-blur-sm rounded-lg border border-border">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">3</div>
            <div className="text-sm text-muted-foreground">Languages</div>
          </div>
        </div>
      </div>
    </section>
  );
};
