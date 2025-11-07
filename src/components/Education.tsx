import { Card } from "@/components/ui/card";
import { GraduationCap, Award } from "lucide-react";

export const Education = () => {
  return (
    <section id="education" className="section-padding bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Education & <span className="text-gradient">Certifications</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8" />
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Education */}
          <Card className="p-8 bg-card border-border hover:border-primary/50 transition-all duration-300 card-hover">
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 bg-primary/10 rounded-lg">
                <GraduationCap className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">Education</h3>
                <div className="w-12 h-1 bg-primary" />
              </div>
            </div>

            <div className="space-y-6">
              <div className="border-l-2 border-primary pl-4">
                <h4 className="text-xl font-bold mb-1">B.E. Computer Science and Engineering</h4>
                <p className="text-primary font-semibold mb-2">Easwari Engineering College, Chennai</p>
                <p className="text-muted-foreground mb-2">2023 - 2027</p>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-muted-foreground">CGPA:</span>
                  <span className="text-2xl font-bold text-primary">8.00</span>
                </div>
              </div>
            </div>
          </Card>

          {/* Certifications */}
          <Card className="p-8 bg-card border-border hover:border-primary/50 transition-all duration-300 card-hover">
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 bg-primary/10 rounded-lg">
                <Award className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">Certifications</h3>
                <div className="w-12 h-1 bg-primary" />
              </div>
            </div>

            <div className="space-y-4">
              <div className="p-4 bg-secondary/50 rounded-lg border border-border hover:border-primary/50 transition-colors">
                <p className="font-semibold text-primary mb-1">Cisco</p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Networking Basics</li>
                  <li>• Python Essentials 1 & 2</li>
                </ul>
              </div>

              <div className="p-4 bg-secondary/50 rounded-lg border border-border hover:border-primary/50 transition-colors">
                <p className="font-semibold text-primary mb-1">Infosys Springboard</p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• C++ Programming</li>
                  <li>• Java Programming</li>
                  <li>• CSS & Frontend Development</li>
                </ul>
              </div>

              <div className="p-4 bg-secondary/50 rounded-lg border border-border hover:border-primary/50 transition-colors">
                <p className="font-semibold text-primary mb-1">Novi Tech R&D</p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Creating Dashboards in Power BI</li>
                </ul>
              </div>

              <div className="p-4 bg-secondary/50 rounded-lg border border-border hover:border-primary/50 transition-colors">
                <p className="font-semibold text-primary mb-1">Deloitte</p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Technology Job Simulation</li>
                  <li>• Data Analytics</li>
                  <li>• Cyber Job Simulation</li>
                  <li>• GenAI powered Data Analytics</li>
                </ul>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};
