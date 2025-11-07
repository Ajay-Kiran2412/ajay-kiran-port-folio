import { Card } from "@/components/ui/card";
import { Trophy, Award, Target } from "lucide-react";

export const Achievements = () => {
  const achievements = [
    {
      icon: Trophy,
      title: "Capture the Flag Hackathon",
      organization: "Supraja Technologies",
      description: "Attended 3-day Cybersecurity workshop and CTF Hackathon. Secured internship offer for individual performance in system security.",
      highlight: "Internship Offer"
    },
    {
      icon: Award,
      title: "PRIDE Selection",
      organization: "College Recognition Program",
      description: "Selected for leadership, discipline, and active student participation across various college activities and initiatives.",
      highlight: "Leadership Recognition"
    }
  ];

  return (
    <section id="achievements" className="section-padding bg-gradient-to-b from-background to-navy">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Achievements & <span className="text-gradient">Hackathons</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Recognition for excellence in cybersecurity competitions and leadership
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {achievements.map((achievement, index) => (
            <Card 
              key={index}
              className="p-8 bg-card border-border hover:border-primary/50 transition-all duration-300 card-hover relative overflow-hidden group"
            >
              {/* Background Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="relative z-10">
                <div className="flex items-start gap-4 mb-6">
                  <div className="p-4 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                    <achievement.icon className="w-8 h-8 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full mb-2">
                      {achievement.highlight}
                    </div>
                    <h3 className="text-2xl font-bold mb-1">{achievement.title}</h3>
                    <p className="text-primary font-semibold">{achievement.organization}</p>
                  </div>
                </div>

                <p className="text-muted-foreground leading-relaxed">
                  {achievement.description}
                </p>
              </div>
            </Card>
          ))}
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <div className="text-center p-6 bg-card/50 backdrop-blur-sm rounded-lg border border-border">
            <Target className="w-8 h-8 text-primary mx-auto mb-3" />
            <div className="text-2xl font-bold text-primary mb-1">Cybersecurity</div>
            <div className="text-sm text-muted-foreground">CTF Hackathon Winner</div>
          </div>
          <div className="text-center p-6 bg-card/50 backdrop-blur-sm rounded-lg border border-border">
            <Award className="w-8 h-8 text-primary mx-auto mb-3" />
            <div className="text-2xl font-bold text-primary mb-1">Leadership</div>
            <div className="text-sm text-muted-foreground">PRIDE Program Selected</div>
          </div>
          <div className="text-center p-6 bg-card/50 backdrop-blur-sm rounded-lg border border-border">
            <Trophy className="w-8 h-8 text-primary mx-auto mb-3" />
            <div className="text-2xl font-bold text-primary mb-1">Recognition</div>
            <div className="text-sm text-muted-foreground">Multiple Awards</div>
          </div>
        </div>
      </div>
    </section>
  );
};
