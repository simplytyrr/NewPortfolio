
import { Link } from "react-router-dom";
import { Linkedin, Github, Instagram, Mail } from "lucide-react";
import { mockProfile } from "@/data/mockData";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-secondary/30 pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand column */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center">
              <span className="text-2xl font-bold gradient-text">Athirah.</span>
            </Link>
            <p className="text-muted-foreground">
              Passionate software developer specializing in VR/AR technology, cloud computing, and enterprise solutions.
            </p>
            <div className="flex space-x-3">
              {mockProfile.socialLinks.map((link, index) => {
                let icon;
                switch (link.platform) {
                  case "linkedin":
                    icon = <Linkedin size={18} />;
                    break;
                  case "github":
                    icon = <Github size={18} />;
                    break;
                  case "instagram":
                    icon = <Instagram size={18} />;
                    break;
                  case "email":
                    icon = <Mail size={18} />;
                    break;
                  default:
                    return null;
                }
                
                return (
                  <Button
                    key={index}
                    variant="outline"
                    size="icon"
                    className="rounded-full border-primary/30 hover:border-primary hover:bg-primary/10"
                    asChild
                  >
                    <a href={link.url} target="_blank" rel="noopener noreferrer" aria-label={link.platform}>
                      {icon}
                    </a>
                  </Button>
                );
              })}
            </div>
          </div>

          {/* Quick Links column */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">About Me</a>
              </li>
              <li>
                <a href="#skills" className="text-muted-foreground hover:text-primary transition-colors">My Skills</a>
              </li>
              <li>
                <a href="#projects" className="text-muted-foreground hover:text-primary transition-colors">Projects</a>
              </li>
              <li>
                <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</a>
              </li>
              <li>
                <Link to="/admin/login" className="text-muted-foreground hover:text-primary transition-colors">Admin Login</Link>
              </li>
            </ul>
          </div>

          {/* Contact column */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="text-muted-foreground">
                WhatsApp: <a href={mockProfile.socialLinks.find(l => l.platform === "whatsapp")?.url} className="hover:text-primary transition-colors">Send Message</a>
              </li>
              <li className="text-muted-foreground">
                Email: <a href={`mailto:${mockProfile.socialLinks.find(l => l.platform === "email")?.url.replace("mailto:", "")}`} className="hover:text-primary transition-colors">
                  {mockProfile.socialLinks.find(l => l.platform === "email")?.url.replace("mailto:", "")}
                </a>
              </li>
              <li className="text-muted-foreground">
                LinkedIn: <a href={mockProfile.socialLinks.find(l => l.platform === "linkedin")?.url} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                  {mockProfile.socialLinks.find(l => l.platform === "linkedin")?.username}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-6 text-center">
          <p className="text-sm text-muted-foreground">
            © {currentYear} {mockProfile.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
