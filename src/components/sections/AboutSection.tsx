
import { mockProfile, mockAchievements } from "@/data/mockData";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useInView } from "@/hooks/use-in-view";
import { cn } from "@/lib/utils";

const AboutSection = () => {
  const { ref: sectionRef, inView } = useInView({ threshold: 0.1, triggerOnce: true });
  
  return (
    <section id="about" className="py-20 bg-secondary/5" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-3">About Me</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Background</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Learn about my educational journey, career interests, and achievements.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Education Column */}
          <Card className={cn(
            "glass-panel hover-card transition-all duration-500 border-primary/10",
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}>
            <CardHeader>
              <CardTitle className="font-bold flex items-center text-xl">
                <span className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center mr-2">
                  🎓
                </span>
                Education
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {mockProfile.education.map((edu) => (
                <div key={edu.id} className="border-l-2 border-primary/30 pl-4 py-1">
                  <h4 className="font-semibold">{edu.institution}</h4>
                  <p className="text-sm">
                    {edu.degree}, {edu.field}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {edu.startYear} - {edu.endYear}
                  </p>
                  {edu.description && (
                    <p className="text-sm mt-1 text-muted-foreground">{edu.description}</p>
                  )}
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Career Interests Column */}
          <Card className={cn(
            "glass-panel hover-card transition-all duration-500 border-primary/10",
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )} 
          style={{ transitionDelay: "200ms" }}>
            <CardHeader>
              <CardTitle className="font-bold flex items-center text-xl">
                <span className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center mr-2">
                  💼
                </span>
                Career Interests
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-lg">👩‍💻</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">Software Development</h4>
                    <p className="text-sm text-muted-foreground">
                      Building robust applications across various platforms and technologies.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-lg">🥽</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">VR/AR Technology</h4>
                    <p className="text-sm text-muted-foreground">
                      Creating immersive experiences and applications in virtual and augmented reality.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-lg">☁️</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">Cloud Computing</h4>
                    <p className="text-sm text-muted-foreground">
                      Designing scalable solutions using modern cloud infrastructure and services.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-lg">🏢</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">SAP ERP</h4>
                    <p className="text-sm text-muted-foreground">
                      Implementing and optimizing enterprise resource planning solutions.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Achievements Column */}
          <Card className={cn(
            "glass-panel hover-card transition-all duration-500 border-primary/10",
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}
          style={{ transitionDelay: "400ms" }}>
            <CardHeader>
              <CardTitle className="font-bold flex items-center text-xl">
                <span className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center mr-2">
                  🏆
                </span>
                Achievements
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                {mockAchievements.map((achievement) => (
                  <li key={achievement.id} className="border-l-2 border-primary/30 pl-4 py-1">
                    <h4 className="font-semibold">{achievement.title}</h4>
                    <p className="text-sm">{achievement.issuer}</p>
                    <p className="text-xs text-muted-foreground">{achievement.date}</p>
                    {achievement.description && (
                      <p className="text-sm mt-1 text-muted-foreground">{achievement.description}</p>
                    )}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
