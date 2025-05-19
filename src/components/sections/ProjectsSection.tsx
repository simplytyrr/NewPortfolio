
import { useState } from "react";
import { mockProjects } from "@/data/mockData";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Github, ExternalLink } from "lucide-react";
import { useInView } from "@/hooks/use-in-view";
import { cn } from "@/lib/utils";

const ProjectsSection = () => {
  const [showAll, setShowAll] = useState(false);
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  // Initially show only featured projects, show all if toggled
  const displayedProjects = showAll 
    ? mockProjects
    : mockProjects.filter(project => project.featured);

  return (
    <section id="projects" className="py-20 bg-secondary/5" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-3">My Work</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Project Portfolio</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A showcase of my technical projects and applications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedProjects.map((project, index) => (
            <Card 
              key={project.id} 
              className={cn(
                "overflow-hidden hover-card border-primary/10 bg-secondary/20 backdrop-blur-sm",
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              )}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.imageUrl} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
                {project.featured && (
                  <Badge className="absolute top-2 right-2 bg-primary">
                    Featured
                  </Badge>
                )}
              </div>
              
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
              </CardHeader>
              
              <CardContent>
                <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <Badge key={i} variant="secondary" className="bg-secondary/50">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              
              <CardFooter className="flex justify-between">
                {project.githubUrl && (
                  <Button variant="ghost" size="sm" asChild>
                    <a 
                      href={project.githubUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <Github size={16} className="mr-1" /> Code
                    </a>
                  </Button>
                )}
                
                {project.demoUrl && (
                  <Button variant="outline" size="sm" asChild className="ml-auto">
                    <a 
                      href={project.demoUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <ExternalLink size={16} className="mr-1" /> Demo
                    </a>
                  </Button>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Toggle button to show all projects */}
        <div className="mt-10 text-center">
          <Button 
            onClick={() => setShowAll(!showAll)}
            variant="outline"
            className="border-primary/50 hover:bg-primary/10"
          >
            {showAll ? "Show Featured Only" : "View All Projects"}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
