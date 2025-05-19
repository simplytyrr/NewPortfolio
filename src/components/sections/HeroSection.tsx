
import { Button } from "@/components/ui/button";
import { Download, Send } from "lucide-react";
import { mockProfile } from "@/data/mockData";
import { useState, useEffect } from "react";

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="hero" className="min-h-screen flex items-center pt-16 bg-gradient-to-br from-background via-background to-secondary/20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col-reverse lg:flex-row items-center lg:justify-between gap-10 lg:gap-16">
          {/* Text content */}
          <div className={`lg:w-1/2 space-y-6 animate-sequence ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            <p className="text-primary font-medium">Hello, I'm</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
              {mockProfile.name.split(' ').map((word, i) => (
                <span key={i} className={i === 0 ? "gradient-text" : ""}>
                  {word}{" "}
                </span>
              ))}
            </h1>
            <h2 className="text-xl md:text-2xl text-muted-foreground">
              {mockProfile.title}
            </h2>
            <p className="text-muted-foreground max-w-lg">
              {mockProfile.bio}
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <Button size="lg" className="btn-glow">
                <Download size={18} className="mr-2" />
                Download Resume
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-primary/50 hover:bg-primary/10"
                asChild
              >
                <a href="#contact">
                  <Send size={18} className="mr-2" />
                  Contact Me
                </a>
              </Button>
            </div>
          </div>

          {/* Image */}
          <div className={`lg:w-1/2 flex justify-center lg:justify-end animate-fade-in ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            <div className="relative">
              {/* Image container with glow effect */}
              <div className="overflow-hidden rounded-full w-64 h-64 md:w-80 md:h-80 border-4 border-primary/30 p-1 shadow-[0_0_25px_rgba(59,130,246,0.3)]">
                <img 
                  src={mockProfile.avatarUrl} 
                  alt={mockProfile.name} 
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 glass-panel p-3 animate-float shadow-lg">
                <p className="text-sm font-medium">VR/AR Developer</p>
              </div>
              <div className="absolute -bottom-4 -left-4 glass-panel p-3 animate-float shadow-lg" style={{ animationDelay: "1s" }}>
                <p className="text-sm font-medium">Software Engineer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
