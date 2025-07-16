import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Github, ExternalLink } from "lucide-react";
import { useInView } from "@/hooks/use-in-view";
import { cn } from "@/lib/utils";

const ProjectsSection = () => {
  const [showAll, setShowAll] = useState(false);
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  const mockProjects = [
    {
      id: 1,
      title: "UMPSA VR Shooting Range",
      description: "Virtual Reality shooting simulation for training and entertainment. Features realistic ballistics, multiple environments, and performance tracking.",
      technologies: ["Unity", "C#", "VR", "Oculus SDK", "3D Modeling"],
      featured: true,
      imageUrl: "https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?w=400&h=250&fit=crop&crop=center",
      githubUrl: "#",
      demoUrl: "#"
    },
    {
      id: 2,
      title: "FK-EduSearch",
      description: "Educational search platform designed for academic research and learning. Provides advanced filtering and categorization of educational content.",
      technologies: ["React", "Node.js", "MongoDB", "Elasticsearch", "Express"],
      featured: true,
      imageUrl: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=250&fit=crop&crop=center",
      githubUrl: "#",
      demoUrl: "#"
    },
    {
      id: 3,
      title: "The Party Mobile App",
      description: "Social mobile application for event planning and party management. Features real-time chat, event scheduling, and guest management.",
      technologies: ["React Native", "Firebase", "Redux", "Node.js", "Socket.io"],
      featured: true,
      imageUrl: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=400&h=250&fit=crop&crop=center",
      githubUrl: "#",
      demoUrl: "#"
    },
    {
      id: 4,
      title: "Raya Wardrobe AR",
      description: "Augmented Reality application for virtual clothing try-on during festive seasons. Uses AR technology for realistic clothing visualization.",
      technologies: ["Unity", "ARCore", "ARKit", "C#", "Computer Vision"],
      featured: false,
      imageUrl: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=250&fit=crop&crop=center",
      githubUrl: "#",
      demoUrl: "#"
    },
    {
      id: 5,
      title: "DNS Management System",
      description: "Comprehensive DNS management solution with advanced monitoring, analytics, and automated failover capabilities.",
      technologies: ["Python", "Django", "PostgreSQL", "Redis", "Docker"],
      featured: false,
      imageUrl: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=250&fit=crop&crop=center",
      githubUrl: "#",
      demoUrl: "#"
    },
    {
      id: 6,
      title: "Flood Alert Database",
      description: "Real-time flood monitoring and alert system with predictive analytics and emergency response coordination.",
      technologies: ["Java", "Spring Boot", "MySQL", "Apache Kafka", "Machine Learning"],
      featured: false,
      imageUrl: "https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=400&h=250&fit=crop&crop=center",
      githubUrl: "#",
      demoUrl: "#"
    },
    {
      id: 7,
      title: "SAP Business Process",
      description: "Custom SAP business process automation and workflow optimization for enterprise resource planning.",
      technologies: ["SAP ABAP", "SAP Fiori", "JavaScript", "OData", "SAP UI5"],
      featured: false,
      imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop&crop=center",
      githubUrl: "#",
      demoUrl: "#"
    },
    {
      id: 8,
      title: "SAP S/4HANA Business Process",
      description: "Advanced SAP S/4HANA implementation with custom business logic and integration with external systems.",
      technologies: ["SAP S/4HANA", "SAP Fiori", "CDS Views", "ABAP", "REST API"],
      featured: false,
      imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop&crop=center",
      githubUrl: "#",
      demoUrl: "#"
    },
    {
    id: 9,
      title: "READY4AI & Security Awareness App",
      description: "A web-based learning module focused on cybersecurity and AI ethics, developed as part of the READY4AI & Microsoft learning initiative.",
      technologies: ["JavaScript", "HTML", "CSS", "Azure", "Microsoft Identity"],
      featured: false,
      imageUrl: "https://images.unsplash.com/photo-1563206767-5b18f218e8de?w=400&h=250&fit=crop&crop=center",
      githubUrl: "#",
      demoUrl: "#"
  }
    
  ];

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