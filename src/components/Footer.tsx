import { Link } from "react-router-dom";
import { Linkedin, Github, Mail } from "lucide-react";
import { FaInstagram } from "react-icons/fa";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // ✅ Replace mockProfile with real social links
  const socialLinks = [
    {
      platform: "linkedin",
      url: "https://www.linkedin.com/in/nur-athirah-binti-azmi",
      username: "nur-athirah-binti-azmi",
    },
    {
      platform: "github",
      url: "https://github.com/simplytyrr",
    },
    {
      platform: "instagram",
      url: "https://www.instagram.com/_nurathrhhh",
    },
    {
      platform: "email",
      url: "mailto:nurathirhh@gmail.com",
    },
    {
      platform: "whatsapp",
      url: "https://wa.me/60189067988?text=Hi%20Athirah%2C%20I%20would%20like%20to%20connect.",
    },
  ];

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
              {socialLinks.map((link, index) => {
                let icon;
                switch (link.platform) {
                  case "linkedin":
                    icon = <Linkedin size={18} />;
                    break;
                  case "github":
                    icon = <Github size={18} />;
                    break;
                  case "instagram":
                    icon = <FaInstagram size={18} />;
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
                WhatsApp: <a href={socialLinks.find(l => l.platform === "whatsapp")?.url} className="hover:text-primary transition-colors">Send Message</a>
              </li>
              <li className="text-muted-foreground">
                Email: <a href={socialLinks.find(l => l.platform === "email")?.url} className="hover:text-primary transition-colors">
                  {socialLinks.find(l => l.platform === "email")?.url.replace("mailto:", "")}
                </a>
              </li>
              <li className="text-muted-foreground">
                LinkedIn: <a href={socialLinks.find(l => l.platform === "linkedin")?.url} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                  {socialLinks.find(l => l.platform === "linkedin")?.username}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-6 text-center">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Nur Athirah Binti Azmi. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
