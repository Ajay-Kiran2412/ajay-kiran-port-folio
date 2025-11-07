import { Button } from "@/components/ui/button";
import { ArrowDown, Download, Github, Linkedin, Code2 } from "lucide-react";

export const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-navy to-background">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }} />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <div className="animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-card/50 backdrop-blur-sm border border-primary/20 rounded-full mb-6">
            <Code2 className="w-4 h-4 text-primary" />
            <span className="text-sm text-muted-foreground">Computer Science Student</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-gradient glow-text">Ajay Kiran</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Full-Stack Developer | Cybersecurity Enthusiast | Data Science Explorer
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 justify-center mb-12">
            <Button 
              size="lg"
              onClick={() => scrollToSection("projects")}
              className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-primary/50 transition-all"
            >
              View Projects
              <ArrowDown className="ml-2 w-4 h-4" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-primary/50 hover:bg-primary/10"
            >
              <Download className="mr-2 w-4 h-4" />
              Download Resume
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex gap-4 justify-center">
            <a 
              href="https://github.com/ajaykiran" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 bg-card hover:bg-primary/20 border border-border rounded-full transition-all hover:scale-110 hover:border-primary"
            >
              <Github className="w-5 h-5" />
            </a>
            <a 
              href="https://linkedin.com/in/ajaykiran" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 bg-card hover:bg-primary/20 border border-border rounded-full transition-all hover:scale-110 hover:border-primary"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a 
              href="https://leetcode.com/ajaykiran" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 bg-card hover:bg-primary/20 border border-border rounded-full transition-all hover:scale-110 hover:border-primary"
            >
              <Code2 className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDown className="w-6 h-6 text-primary" />
      </div>
    </section>
  );
};
