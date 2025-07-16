
import { 
  Project, 
  Skill, 
  ProfileData, 
  SkillCategory, 
  SocialPlatform,
  Achievement
} from "@/types";

export const mockProjects: Project[] = [
  {
    id: "1",
    title: "UMPSA VR Shooting Range",
    description: "Virtual reality shooting simulation for training purposes, built using Unity and VR technologies.",
    technologies: ["Unity", "C#", "VR Development", "3D Modeling"],
    imageUrl: "/placeholder.svg",
    demoUrl: "#",
    githubUrl: "#",
    featured: true,
    order: 1
  },
  {
    id: "2",
    title: "FK-EduSearch",
    description: "Educational search platform built with Laravel and Node.js for academic resource discovery.",
    technologies: ["Laravel", "Node.js", "MySQL", "JavaScript"],
    imageUrl: "/placeholder.svg",
    demoUrl: "#",
    githubUrl: "#",
    featured: true,
    order: 2
  },
  {
    id: "3",
    title: "The Party Mobile App",
    description: "Android mobile application for planning and organizing events and parties.",
    technologies: ["Android Studio", "Java", "Firebase", "XML"],
    imageUrl: "/placeholder.svg",
    demoUrl: "#",
    githubUrl: "#",
    featured: true,
    order: 3
  },
  {
    id: "4",
    title: "Raya Wardrobe AR",
    description: "Augmented reality application for trying on traditional Raya clothes virtually.",
    technologies: ["Unity", "C#", "AR Foundation", "Web AR"],
    imageUrl: "/placeholder.svg",
    demoUrl: "#",
    githubUrl: "#",
    featured: false,
    order: 4
  },
  {
    id: "5",
    title: "DNS Management System",
    description: "Web-based system for managing DNS records and configurations.",
    technologies: ["PHP", "MySQL", "JavaScript", "Bootstrap"],
    imageUrl: "/placeholder.svg",
    githubUrl: "#",
    featured: false,
    order: 5
  },
  {
    id: "6",
    title: "Flood Alert Database",
    description: "Database system for tracking and managing flood alerts and emergency responses.",
    technologies: ["SQL", "Database Design", "Stored Procedures"],
    imageUrl: "/placeholder.svg",
    githubUrl: "#",
    featured: false,
    order: 6
  },
  {
    id: "7",
    title: "SAP S/4HANA Business Process",
    description: "Implementation of business processes using SAP S/4HANA and Fiori interfaces.",
    technologies: ["SAP S/4HANA", "SAP Fiori", "ABAP", "Business Process Modeling"],
    imageUrl: "/placeholder.svg",
    demoUrl: "#",
    featured: false,
    order: 7
  }
];

export const mockSkills: Skill[] = [
  // Programming Skills
  {
    id: "1",
    name: "C++",
    category: SkillCategory.PROGRAMMING,
    proficiency: 85,
    icon: "code",
    order: 1
  },
  {
    id: "2",
    name: "Java",
    category: SkillCategory.PROGRAMMING,
    proficiency: 80,
    icon: "code",
    order: 2
  },
  {
    id: "3",
    name: "Python",
    category: SkillCategory.PROGRAMMING,
    proficiency: 75,
    icon: "code",
    order: 3
  },
  {
    id: "4",
    name: "HTML/CSS",
    category: SkillCategory.PROGRAMMING,
    proficiency: 90,
    icon: "code",
    order: 4
  },
  {
    id: "5",
    name: "PHP",
    category: SkillCategory.PROGRAMMING,
    proficiency: 70,
    icon: "code",
    order: 5
  },
  {
    id: "6",
    name: "Unity",
    category: SkillCategory.PROGRAMMING,
    proficiency: 85,
    icon: "code",
    order: 6
  },
  {
    id: "7",
    name: "Unreal Engine",
    category: SkillCategory.PROGRAMMING,
    proficiency: 70,
    icon: "code",
    order: 7
  },

  // Multimedia & Graphics Skills
  {
    id: "8",
    name: "3D Modeling",
    category: SkillCategory.MULTIMEDIA,
    proficiency: 80,
    icon: "layers",
    order: 1
  },
  {
    id: "9",
    name: "Animation",
    category: SkillCategory.MULTIMEDIA,
    proficiency: 75,
    icon: "layers",
    order: 2
  },
  {
    id: "10",
    name: "VR/AR Development",
    category: SkillCategory.MULTIMEDIA,
    proficiency: 85,
    icon: "layers",
    order: 3
  },

  // Specialized Technologies
  {
    id: "11",
    name: "SAP S/4HANA",
    category: SkillCategory.SPECIALIZED,
    proficiency: 80,
    icon: "database",
    order: 1
  },
  {
    id: "12",
    name: "Azure Cloud",
    category: SkillCategory.SPECIALIZED,
    proficiency: 75,
    icon: "cloud",
    order: 2
  },
  {
    id: "13",
    name: "MySQL",
    category: SkillCategory.SPECIALIZED,
    proficiency: 85,
    icon: "database",
    order: 3
  },

  // Languages
  {
    id: "14",
    name: "Malay",
    category: SkillCategory.LANGUAGES,
    proficiency: 100,
    icon: "globe",
    order: 1
  },
  {
    id: "15",
    name: "English",
    category: SkillCategory.LANGUAGES,
    proficiency: 90,
    icon: "globe",
    order: 2
  }
];

export const mockProfile: ProfileData = {
  name: "Nur Athirah Binti Azmi",
  title: "Frontend & UI/UX Developer | VR/AR Explorer | Laravel • React • Unity • Azure",
  bio: "I am a Computer Science student specializing in Graphics & Multimedia Technology with practical experience in full-stack development, UI/UX design, and immersive technologies. During my internship, I built a real-world digital case management system using React, Laravel, and MySQL. I'm passionate about creating interactive, user-centric solutions with tools like Unity, SAP, and Microsoft Azure to bridge digital innovation with real impact.",
  avatarUrl: "/lovable-uploads/3f846b0c-f64e-4be5-a3c1-3e6600ccc0af.png",
  resumeUrl: "#",
  education: [
    {
      id: "1",
      institution: "Universiti Malaysia Pahang (UMP)",
      degree: "Bachelor's Degree",
      field: "Software Engineering",
      startYear: "2019",
      endYear: "2023",
      description: "Focused on software development, web technologies, and specialized in VR/AR applications."
    },
    {
      id: "2",
      institution: "Sekolah Menengah Kebangsaan Sultan Alauddin",
      degree: "STPM",
      field: "Science Stream",
      startYear: "2016",
      endYear: "2018",
      description: "Completed Sijil Tinggi Persekolahan Malaysia with focus on Mathematics and Physics."
    }
  ],
  socialLinks: [
    {
      platform: SocialPlatform.LINKEDIN,
      url: "https://linkedin.com/in/nurathirah",
      username: "nurathirah"
    },
    {
      platform: SocialPlatform.GITHUB,
      url: "https://github.com/nurathirah",
      username: "nurathirah"
    },
    {
      platform: SocialPlatform.WHATSAPP,
      url: "https://wa.me/60123456789",
    },
    {
      platform: SocialPlatform.EMAIL,
      url: "mailto:nurathirah@example.com",
    }
  ]
};

export const mockAchievements: Achievement[] = [
  {
    id: "1",
    title: "Dean's List Award",
    issuer: "Universiti Malaysia Pahang",
    date: "2022",
    description: "Awarded for academic excellence in Software Engineering program.",
    certificateUrl: "#"
  },
  {
    id: "2",
    title: "Microsoft READY4AI Certification",
    issuer: "Microsoft",
    date: "2022",
    description: "Completed certification program in Artificial Intelligence fundamentals and applications.",
    certificateUrl: "#"
  },
  {
    id: "3",
    title: "Security Malaysia Certification",
    issuer: "CyberSecurity Malaysia",
    date: "2021",
    description: "Completed certification in cybersecurity fundamentals and best practices.",
    certificateUrl: "#"
  },
  {
    id: "4",
    title: "Community Service Award",
    issuer: "UMP Volunteer Association",
    date: "2020",
    description: "Recognition for volunteer work in local community technology education program.",
    certificateUrl: "#"
  }
];

export const mockAdminStats = {
  totalProjects: mockProjects.length,
  totalSkills: mockSkills.length,
  featuredProjects: mockProjects.filter(p => p.featured).length,
  lastUpdated: new Date()
};
