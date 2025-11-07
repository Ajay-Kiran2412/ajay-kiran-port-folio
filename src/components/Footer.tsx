import { Code2, Heart } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-navy border-t border-border py-8">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <div className="flex items-center justify-center gap-2 mb-4">
          <Code2 className="w-5 h-5 text-primary" />
          <span className="text-xl font-bold">Ajay Kiran</span>
        </div>
        
        <p className="text-muted-foreground mb-4">
          Computer Science Student | Full-Stack Developer | Cybersecurity Enthusiast
        </p>
        
        <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
          <span>Built with</span>
          <Heart className="w-4 h-4 text-red-500 fill-current" />
          <span>using React & Tailwind CSS</span>
        </div>
        
        <p className="text-xs text-muted-foreground mt-4">
          © {new Date().getFullYear()} Ajay Kiran. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
