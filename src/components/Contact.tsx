import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Github, Linkedin, Code2, Globe } from "lucide-react";

export const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "ajaykiran2412@gmail.com",
      link: "mailto:ajaykiran2412@gmail.com"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Chennai, India",
      link: null
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      link: "https://github.com/ajaykiran"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      link: "https://linkedin.com/in/ajaykiran"
    },
    {
      icon: Code2,
      label: "LeetCode",
      link: "https://leetcode.com/ajaykiran"
    }
  ];

  const languages = ["Tamil", "Telugu", "English", "Hindi (Basic)"];

  return (
    <section id="contact" className="section-padding bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I'm always open to discussing new projects, opportunities, or collaborations
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start gap-4 group">
                    <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                      <info.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">{info.label}</p>
                      {info.link ? (
                        <a 
                          href={info.link}
                          className="font-semibold hover:text-primary transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="font-semibold">{info.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-2xl font-bold mb-6">Connect With Me</h3>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 bg-card border border-border rounded-lg hover:border-primary hover:bg-primary/10 transition-all hover:scale-110"
                    title={social.label}
                  >
                    <social.icon className="w-6 h-6" />
                  </a>
                ))}
              </div>
            </div>

            {/* Languages */}
            <div>
              <h3 className="text-2xl font-bold mb-6">Languages</h3>
              <div className="flex items-center gap-3">
                <Globe className="w-5 h-5 text-primary" />
                <p className="text-muted-foreground">{languages.join(" • ")}</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="p-8 bg-card border-border">
            <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
            <form className="space-y-4">
              <div>
                <Input 
                  placeholder="Your Name" 
                  className="bg-background border-border focus:border-primary"
                />
              </div>
              <div>
                <Input 
                  type="email" 
                  placeholder="Your Email" 
                  className="bg-background border-border focus:border-primary"
                />
              </div>
              <div>
                <Input 
                  placeholder="Subject" 
                  className="bg-background border-border focus:border-primary"
                />
              </div>
              <div>
                <Textarea 
                  placeholder="Your Message" 
                  rows={5}
                  className="bg-background border-border focus:border-primary resize-none"
                />
              </div>
              <Button 
                type="submit" 
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                Send Message
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};
