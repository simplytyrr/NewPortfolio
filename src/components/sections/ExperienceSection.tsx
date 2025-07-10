import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { useInView } from "@/hooks/use-in-view";
import { Building2, Calendar, MapPin } from "lucide-react";
import { cn } from "@/lib/utils";

const ExperienceSection = () => {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  const experience = {
    position: "UI/UX & Front-End Developer Intern",
    company: "Media Smart Resources Sdn Bhd",
    location: "Putrajaya",
    duration: "March 2025 – August 2025",
    description: [
      "Developed e-TAGS, a digital case management system for KPWKM using React, Laravel, and MySQL.",
      "Designed responsive UI/UX prototypes with Figma and implemented them into reusable components.",
      "Built interactive complaint forms, dashboards, and landing pages with dynamic API integration.",
      "Participated in Agile sprints, daily standups, SRS documentation, and client UI presentations.",
      "Assisted backend integration and database updates using phpMyAdmin, Dbngin, and XAMPP."
    ],
    tools: ["React", "Laravel", "Figma", "MySQL", "Canva", "Git", "Sourcetree", "Herd", "Dbngin"]
  };

  return (
    <section id="experience" className="py-20" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-3">Professional Experience</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Experience</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Professional internship experience in software development and UI/UX design.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card 
            className={cn(
              "glass-panel border-primary/20 hover-card transition-all duration-500",
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            )}
          >
            <CardHeader className="pb-4">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                <div className="flex items-start gap-4">
                  {/* Company logo */}
                  <div className="w-12 h-12 rounded-lg bg-white flex items-center justify-center flex-shrink-0 p-1">
                    <img 
                      src="/lovable-uploads/9da774cb-9e0d-4d5b-bf75-eeaaa666a786.png" 
                      alt="Media Smart Resources" 
                      className="w-full h-full object-contain"
                    />
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <h3 className="text-xl font-semibold text-foreground mb-1">
                      {experience.position}
                    </h3>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Building2 className="w-4 h-4" />
                        <span className="font-medium">{experience.company}</span>
                      </div>
                      <span className="hidden sm:inline">•</span>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        <span>{experience.location}</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center gap-1 text-muted-foreground bg-secondary/30 px-3 py-1 rounded-full">
                  <Calendar className="w-4 h-4" />
                  <span className="text-sm font-medium">{experience.duration}</span>
                </div>
              </div>
            </CardHeader>

            <CardContent className="pt-0">
              {/* Key Responsibilities */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-3">
                  Key Responsibilities
                </h4>
                <ul className="space-y-3">
                  {experience.description.map((item, index) => (
                    <li 
                      key={index}
                      className="flex items-start gap-3 text-muted-foreground"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tools & Technologies */}
              <div>
                <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-3">
                  Tools & Technologies
                </h4>
                <div className="flex flex-wrap gap-2">
                  {experience.tools.map((tool, index) => (
                    <Badge 
                      key={index}
                      variant="secondary"
                      className="bg-secondary/50 hover:bg-secondary/70 transition-colors"
                    >
                      {tool}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;