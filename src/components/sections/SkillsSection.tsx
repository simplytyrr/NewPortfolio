import { useState } from "react";
import { mockSkills } from "@/data/mockData";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { SkillCategory } from "@/types";
import { useInView } from "@/hooks/use-in-view";
import { cn } from "@/lib/utils";

const SkillsSection = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  const categories = Object.values(SkillCategory);

  const filteredSkills = selectedCategory === "all"
    ? mockSkills
    : mockSkills.filter(skill => skill.category === selectedCategory);

  return (
    <section id="skills" className="py-20" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-3">My Skills</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Expertise</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My professional skill set across various technologies and domains.
          </p>
        </div>

        <Tabs 
          defaultValue="all" 
          value={selectedCategory}
          onValueChange={setSelectedCategory}
          className="w-full"
        >
          <div className="flex justify-center mb-8">
            <TabsList className="bg-secondary/40 backdrop-blur-md">
              <TabsTrigger value="all">All Skills</TabsTrigger>
              {categories.map((category) => (
                <TabsTrigger key={category} value={category}>
                  {category}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          <TabsContent value={selectedCategory} className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredSkills.map((skill, index) => (
                <div
                  key={skill.id}
                  className={cn(
                    "glass-panel p-4 rounded-lg transition-all duration-500",
                    inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                  )}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="flex justify-between items-center mb-2">
                    <div className="flex items-center">
                      <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center mr-2">
                        {getSkillEmoji(skill.category)}
                      </div>
                      <h3 className="font-medium">{skill.name}</h3>
                    </div>
                    <span className="text-sm text-muted-foreground bg-secondary/50 px-2 py-1 rounded">
                      {skill.category}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Progress value={skill.proficiency} className="h-2" />
                    <span className="text-sm font-medium w-9">
                      {skill.proficiency}%
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

const getSkillEmoji = (category: string): string => {
  switch (category) {
    case SkillCategory.PROGRAMMING:
      return "👩‍💻";
    case SkillCategory.MULTIMEDIA:
      return "🎨";
    case SkillCategory.SPECIALIZED:
      return "⚙️";
    case SkillCategory.LANGUAGES:
      return "🌐";
    default:
      return "🔧";
  }
};

export default SkillsSection;
