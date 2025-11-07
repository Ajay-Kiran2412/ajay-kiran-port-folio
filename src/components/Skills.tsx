import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["C", "C++", "Java", "Python"],
      icon: "💻"
    },
    {
      title: "Web Development",
      skills: ["HTML", "CSS", "React", "Node.js", "Full Stack Fundamentals"],
      icon: "🌐"
    },
    {
      title: "Databases",
      skills: ["SQL", "MongoDB"],
      icon: "🗄️"
    },
    {
      title: "Tools & Technologies",
      skills: ["Power BI", "Git", "VS Code"],
      icon: "🛠️"
    },
    {
      title: "Cybersecurity & Networking",
      skills: ["Ethical Hacking (Basic)", "Networking", "Penetration Testing", "Vulnerability Assessment"],
      icon: "🔒"
    },
    {
      title: "Soft Skills",
      skills: ["Team Leadership", "Communication", "Problem Solving", "Collaboration"],
      icon: "🤝"
    }
  ];

  return (
    <section id="skills" className="section-padding bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Skills & <span className="text-gradient">Expertise</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit combining programming, development, and security expertise
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <Card 
              key={index}
              className="p-6 bg-card border-border hover:border-primary/50 transition-all duration-300 card-hover"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">{category.icon}</span>
                <h3 className="text-xl font-bold">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <Badge 
                    key={skillIndex}
                    variant="secondary"
                    className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 transition-colors"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
