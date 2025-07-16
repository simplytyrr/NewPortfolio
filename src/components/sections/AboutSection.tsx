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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Journey in Tech & Design</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Take a closer look at how my academic path, internship experience, and passion for design have prepared me for a career in front-end development and UI/UX.
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
                <span className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center mr-2">🎓</span>
                Education
              </CardTitle>
            </CardHeader>

            <CardContent className="space-y-6">
              {/* Degree */}
              <div className="border-l-2 border-primary/30 pl-4 py-1">
                <h4 className="font-semibold">Universiti Malaysia Pahang Al-Sultan Abdullah (UMPSA)</h4>
                <p className="text-sm">Bachelor of Computer Science (Graphics & Multimedia Technology)</p>
                <p className="text-xs text-muted-foreground">2021 – Present | CGPA: 3.06</p>
                <p className="text-sm mt-1 text-muted-foreground">
                  Awarded Dean’s List in Semester 1 (2021/2022) PNGS: 3.75. PNG Semester Terkini: 3.31 Specialized in virtual reality, 3D modelling, and interactive media development.
                  <br />
                  <strong>Final Year Project:</strong> Developed a Virtual Reality Shooting Range Simulation using Unity to enhance training realism and safety.
                </p>
                <p className="text-sm mt-2 text-muted-foreground">
                  <strong>Relevant Coursework:</strong> Computer Graphics, Games Development, Virtual Reality, 3D Modelling and Animation, Web Engineering, Artificial Intelligence, SAP Fiori, Cloud Computing, Data Analytics.
                </p>
                <p className="text-sm mt-2 text-muted-foreground">
                  <strong>Technical Skills:</strong> C++, Java, Python, PHP, Unity, Unreal Engine, HTML, CSS, MySQL, Figma, Microsoft Azure, Azure SQL, SAP S/4HANA, SAP Fiori.
                </p>
              </div>

              {/* STPM */}
              <div className="border-l-2 border-primary/30 pl-4 py-1">
                <h4 className="font-semibold">Sekolah Menengah Kebangsaan Kota Bharu</h4>
                <p className="text-sm">Sijil Tinggi Pelajaran Malaysia (STPM)</p>
                <p className="text-xs text-muted-foreground">Completed 2020 | CGPA: 3.54</p>
                <p className="text-sm mt-1 text-muted-foreground">
                  Built a strong academic foundation in Economics, Geography, Sejarah, and Bahasa Melayu.  
                  Gained analytical, research, and communication skills that support my work in UI/UX and software development.
                </p>
              </div>
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
                  <span className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center mr-2">💼</span>
                  Career Interests
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">👩‍💻</div>
                    <div>
                      <h4 className="font-semibold">Front-End Development</h4>
                      <p className="text-sm text-muted-foreground">
                        Passionate about building fast, dynamic, and user-friendly web applications using modern technologies like React and Laravel.
                        During my internship, I developed real-world interfaces with full API integration and responsive layouts.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">🎨</div>
                    <div>
                      <h4 className="font-semibold">UI/UX Design</h4>
                      <p className="text-sm text-muted-foreground">
                        I enjoy crafting intuitive user experiences through thoughtful layout, accessibility, and modern design systems using Figma, Canva, and Adobe XD.
                        I strive to balance beauty with usability in every product I touch.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">🥽</div>
                    <div>
                      <h4 className="font-semibold">VR/AR Technologies</h4>
                      <p className="text-sm text-muted-foreground">
                        With experience from my Final Year Project, I developed a Virtual Reality Shooting Simulation using Unity. I'm intrigued by immersive tech and its potential to revolutionize training, education, and storytelling.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">☁️</div>
                    <div>
                      <h4 className="font-semibold">Cloud Computing</h4>
                      <p className="text-sm text-muted-foreground">
                        I have hands-on experience with Microsoft Azure — learning how to deploy and manage resources in the cloud. I'm interested in building scalable, secure, and cost-effective cloud solutions.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">🏢</div>
                    <div>
                      <h4 className="font-semibold">SAP ERP</h4>
                      <p className="text-sm text-muted-foreground">
                        Through my coursework using SAP S/4HANA and SAP Fiori, I gained experience in simulating real-world business operations. I'm fascinated by how enterprise software can streamline procurement, logistics, and finance.
                      </p>
                    </div>
                  </div>
                              {/* Full-Stack Web Development */}
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">🌐</div>
                  <div>
                    <h4 className="font-semibold">Full-Stack Web Development</h4>
                    <p className="text-sm text-muted-foreground">
                      Built real-world applications like FK-EduSearch (Laravel + Node.js + MySQL), combining both frontend and backend logic.
                      Proficient with Git, GitHub, and database tools like DBeaver and phpMyAdmin.
                    </p>
                  </div>
                </div>

                {/* Networking & Security Fundamentals */}
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">🔐</div>
                  <div>
                    <h4 className="font-semibold">Networking & Security Fundamentals</h4>
                    <p className="text-sm text-muted-foreground">
                      Certified in CCNA: Introduction to Networks and Microsoft Security Fundamentals.
                      I understand key concepts in networking, identity protection, and compliance, which helps me write secure and scalable code.
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
              <span className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center mr-2">🏆</span>
              Achievements & Certifications
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4">
              <li className="border-l-2 border-primary/30 pl-4 py-1">
                <h4 className="font-semibold">Dean’s List Award</h4>
                <p className="text-sm">UMPSA</p>
                <p className="text-xs text-muted-foreground">January 2022</p>
                <p className="text-sm mt-1 text-muted-foreground">
                  Recognized for outstanding academic performance in Semester 1 (2021/2022) at Universiti Malaysia Pahang Al-Sultan Abdullah.
                </p>
              </li>

              <li className="border-l-2 border-primary/30 pl-4 py-1">
                <h4 className="font-semibold">EF SET English Certificate – C2 Proficient (72/100)</h4>
                <p className="text-sm">EF Standard English Test</p>
                <p className="text-xs text-muted-foreground">May 2023</p>
                <p className="text-sm mt-1 text-muted-foreground">
                  Achieved C2 Proficient level, demonstrating advanced English skills in reading and listening (CEFR-aligned).
                </p>
              </li>

              <li className="border-l-2 border-primary/30 pl-4 py-1">
                <h4 className="font-semibold">e-TAGS Digital System</h4>
                <p className="text-sm">Internship Project – Media Smart Resources</p>
                <p className="text-xs text-muted-foreground">March – August 2025</p>
                <p className="text-sm mt-1 text-muted-foreground">
                  Developed a tribunal complaint system for KPWKM using React, Laravel, and MySQL with full UI/UX design and database integration.
                </p>
              </li>

              <li className="border-l-2 border-primary/30 pl-4 py-1">
                <h4 className="font-semibold">CCNAv7: Introduction to Networks</h4>
                <p className="text-sm">Cisco Networking Academy</p>
                <p className="text-xs text-muted-foreground">March 2022</p>
                <p className="text-sm mt-1 text-muted-foreground">
                  Completed foundational networking course covering IP addressing, switching, routing, and simulation-based configuration.
                </p>
              </li>

              <li className="border-l-2 border-primary/30 pl-4 py-1">
                <h4 className="font-semibold">Microsoft Security, Compliance, and Identity Fundamentals</h4>
                <p className="text-sm">Microsoft</p>
                <p className="text-xs text-muted-foreground">Nov – Dec 2024</p>
                <p className="text-sm mt-1 text-muted-foreground">
                  Gained knowledge in cloud security, identity protection, and compliance tools using Microsoft Azure and M365 technologies.
                </p>
              </li>
            </ul>
          </CardContent>
        </Card>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
