import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";
import { useInView } from "@/hooks/use-in-view";
import { cn } from "@/lib/utils";
import { Linkedin, Github, Mail, Phone } from "lucide-react";
import { FaInstagram } from "react-icons/fa";
import emailjs from "@emailjs/browser";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const templateParams = {
      name: formData.name,
      email: formData.email,
      message: formData.message,
      title: "New Message from Portfolio",
      time: new Date().toLocaleString(),
    };

    emailjs
      .send("service_0yebuvv", "template_3vloao8", templateParams, "JvHec-uEMLuXPlves")
      .then(() => {
        toast({
          title: "Message sent!",
          description: "Thank you for reaching out. I’ll get back to you soon!",
        });
        setFormData({ name: "", email: "", message: "" });
      })
      .catch(() => {
        toast({
          title: "Something went wrong",
          description: "Please try again later.",
          variant: "destructive",
        });
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  const contactLinks = [
    {
      platform: "WhatsApp",
      href: "https://wa.me/60189067988?text=Hi%20Athirah%2C%20I%20came%20across%20your%20portfolio%20and%20would%20like%20to%20connect.",
      icon: <Phone size={20} />,
      text: "Send a message",
      color: "bg-green-500 hover:bg-green-600",
    },
    {
      platform: "LinkedIn",
      href: "https://www.linkedin.com/in/nur-athirah-binti-azmi",
      icon: <Linkedin size={20} />,
      text: "Connect with me",
      color: "bg-blue-600 hover:bg-blue-700",
    },
    {
      platform: "GitHub",
      href: "https://github.com/simplytyrr",
      icon: <Github size={20} />,
      text: "Follow my code",
      color: "bg-gray-700 hover:bg-gray-800",
    },
    {
      platform: "Instagram",
      href: "https://www.instagram.com/_nurathrhhh",
      icon: <FaInstagram size={20} />,
      text: "Follow on Instagram",
      color: "bg-pink-500 hover:bg-pink-600",
    },
    {
      platform: "Email",
      href: "mailto:nurathirah.dev@gmail.com",
      icon: <Mail size={20} />,
      text: "nurathirhh@gmail.com",
      color: "bg-purple-500 hover:bg-purple-600",
    },
  ];

  return (
    <section id="contact" className="py-20" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-3">Get In Touch</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Contact Me</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Have a question, collaboration idea, or project opportunity? Feel free to reach out!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Contact Form */}
          <Card className={cn(
            "glass-panel border-primary/10",
            inView ? "animate-fade-in" : "opacity-0"
          )}>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-6">Send Me a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium block">
                    Your Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
                    className="bg-secondary/40"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium block">
                    Your Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    required
                    className="bg-secondary/40"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium block">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your message here..."
                    rows={5}
                    required
                    className="bg-secondary/40"
                  />
                </div>
                <Button 
                  type="submit" 
                  className="w-full btn-glow" 
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Links */}
          <div className={cn(
            "space-y-6",
            inView ? "animate-slide-in" : "opacity-0"
          )}>
            <h3 className="text-xl font-semibold mb-6">Connect With Me</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {contactLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    "flex items-center p-4 rounded-lg text-white transition-all",
                    link.color,
                    "transform hover:-translate-y-1"
                  )}
                >
                  <div className="mr-3 bg-white/20 p-2 rounded-full">
                    {link.icon}
                  </div>
                  <div>
                    <div className="font-medium">{link.platform}</div>
                    <div className="text-sm text-white/80">{link.text}</div>
                  </div>
                </a>
              ))}
            </div>

            <Card className="glass-panel border-primary/10 p-6 mt-6">
              <h4 className="text-lg font-semibold mb-3">Let’s Build Something Impactful</h4>
              <p className="text-muted-foreground">
                I'm open to freelance work, collaborations, or full-time opportunities. 
                If you’ve got a project or team that aligns with my skills, I’d love to hear from you.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
