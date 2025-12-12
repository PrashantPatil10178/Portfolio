// Portfolio Data for Prashant Patil
// This file contains all the static data for the portfolio

export interface Profile {
  firstName: string;
  lastName: string;
  headline: string;
  headlineStaticText: string;
  headlineAnimatedWords: string[];
  headlineAnimationDuration: number;
  shortBio: string;
  fullBio: string;
  email: string;
  phone: string;
  location: string;
  availability: string;
  socialLinks: {
    github?: string;
    linkedin?: string;
    twitter?: string;
    website?: string;
    medium?: string;
    devto?: string;
  };
  yearsOfExperience: number;
  stats: {
    label: string;
    value: string;
  }[];
  profileImage?: string;
}

export interface Skill {
  _id: string;
  name: string;
  category: string;
  proficiency: string;
  percentage: number;
  yearsOfExperience: number;
  color?: string;
}

export interface Project {
  _id: string;
  title: string;
  slug: string;
  tagline: string;
  category: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  order: number;
  image?: string;
}

export interface Experience {
  _id: string;
  company: string;
  position: string;
  employmentType: string;
  location: string;
  startDate: string;
  endDate?: string;
  current: boolean;
  description: string;
  responsibilities: string[];
  achievements: string[];
  technologies: string[];
  order: number;
}

export interface Education {
  _id: string;
  institution: string;
  degree: string;
  fieldOfStudy: string;
  startDate: string;
  endDate?: string;
  current: boolean;
  gpa?: string;
  description: string;
  achievements: string[];
  order: number;
}

export interface Achievement {
  _id: string;
  title: string;
  type: string;
  issuer: string;
  date: string;
  description: string;
  url?: string;
  featured: boolean;
  order: number;
}

export interface Certification {
  _id: string;
  name: string;
  issuer: string;
  issueDate: string;
  expiryDate?: string;
  credentialId?: string;
  credentialUrl?: string;
  description: string;
  skills: string[];
  order: number;
}

export interface Testimonial {
  _id: string;
  name: string;
  position: string;
  company: string;
  testimonial: string;
  rating: number;
  date: string;
  linkedinUrl?: string;
  featured: boolean;
  order: number;
  image?: string;
}

export interface BlogPost {
  _id: string;
  title: string;
  slug: string;
  excerpt: string;
  category: string;
  tags: string[];
  publishedAt: string;
  readTime: number;
}

export interface Service {
  _id: string;
  title: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  features: string[];
  technologies: string[];
  deliverables: string[];
  pricing: {
    startingPrice: number;
    priceType: string;
    description: string;
  };
  timeline: string;
  featured: boolean;
  order: number;
}

// ============================================
// PRASHANT PATIL'S PORTFOLIO DATA
// ============================================

// Profile Data
export const profile: Profile = {
  firstName: "Prashant",
  lastName: "Patil",
  headline: "Full-Stack Developer & Cloud Engineer",
  headlineStaticText: "I build",
  headlineAnimatedWords: [
    "modern web experiences",
    "scalable cloud solutions",
    "AI-powered applications",
    "responsive interfaces",
    "performant systems",
  ],
  headlineAnimationDuration: 3000,
  shortBio:
    "Passionate Full-Stack Developer with expertise in React, Next.js, Node.js, and Cloud Technologies. I specialize in building high-performance web applications with modern UI/UX, achieving sub-2s load times and optimized SEO scores.",
  fullBio: `I'm Prashant Patil, a dedicated Full-Stack Developer currently pursuing B.Tech in Information Technology at AISSMS Institute of Information Technology, Pune. My journey in tech is driven by a passion for creating impactful digital solutions that solve real-world problems.

💡 What I Do: I specialize in building full-stack applications using React, Next.js, Node.js, and modern cloud platforms. From responsive e-learning platforms to entertainment portals, I've delivered solutions that serve thousands of users with lightning-fast performance.

🚀 My Approach: I believe in writing clean, maintainable code that scales. Every project I work on is optimized for performance, SEO, and user experience. I've consistently achieved sub-2 second load times and high Lighthouse scores across my projects.

☁️ Cloud & DevOps: I'm certified in Google Cloud (Digital Leader), AWS Academy Cloud Functions, Oracle Gen-AI Professional, and Oracle OCI Developer Professional. I leverage these skills to build and deploy scalable, secure applications.

🏆 Achievements: I've been recognized for my work - from winning Best UI Design at Inspiron 4.0 Hackathon (COEP) to reaching Top 5 nationally at CDAC National IoT Hackathon. I've also trained 500+ students through GDSC workshops and contributed to fixing critical bugs for AI startups.

🤝 Let's Connect: Whether you need a modern web application, cloud architecture consultation, or technical guidance, I'm here to help transform your vision into reality.`,
  email: "patilanilprashant178@gmail.com",
  phone: "+91-7620170904",
  location: "Pune, India",
  availability: "Open for opportunities",
  profileImage: "/hero-image.jpg",
  socialLinks: {
    github: "https://github.com/PrashantPatil10178",
    linkedin: "https://www.linkedin.com/in/prashantpatil178",
    website: "https://prashantpatil.dev/",
  },
  yearsOfExperience: 4,
  stats: [
    { label: "Projects Delivered", value: "10+" },
    { label: "Students Trained", value: "500+" },
    { label: "Years Experience", value: "4+" },
    { label: "Certifications", value: "4" },
  ],
};

// Skills Data
export const skills: Skill[] = [
  // Languages
  {
    _id: "skill-javascript",
    name: "JavaScript",
    category: "languages",
    proficiency: "expert",
    percentage: 95,
    yearsOfExperience: 4,
    color: "#F7DF1E",
  },
  {
    _id: "skill-typescript",
    name: "TypeScript",
    category: "languages",
    proficiency: "expert",
    percentage: 92,
    yearsOfExperience: 3,
    color: "#3178C6",
  },
  {
    _id: "skill-php",
    name: "PHP",
    category: "languages",
    proficiency: "advanced",
    percentage: 80,
    yearsOfExperience: 2,
    color: "#777BB4",
  },
  {
    _id: "skill-dart",
    name: "Dart",
    category: "languages",
    proficiency: "intermediate",
    percentage: 70,
    yearsOfExperience: 1,
    color: "#0175C2",
  },
  {
    _id: "skill-sql",
    name: "SQL",
    category: "languages",
    proficiency: "advanced",
    percentage: 85,
    yearsOfExperience: 3,
    color: "#336791",
  },

  // Frontend
  {
    _id: "skill-react",
    name: "React",
    category: "frontend",
    proficiency: "expert",
    percentage: 95,
    yearsOfExperience: 4,
    color: "#61DAFB",
  },
  {
    _id: "skill-nextjs",
    name: "Next.js",
    category: "frontend",
    proficiency: "expert",
    percentage: 93,
    yearsOfExperience: 3,
    color: "#000000",
  },
  {
    _id: "skill-react-native",
    name: "React Native",
    category: "frontend",
    proficiency: "advanced",
    percentage: 82,
    yearsOfExperience: 2,
    color: "#61DAFB",
  },
  {
    _id: "skill-html5",
    name: "HTML5",
    category: "frontend",
    proficiency: "expert",
    percentage: 98,
    yearsOfExperience: 4,
    color: "#E34F26",
  },
  {
    _id: "skill-css3",
    name: "CSS3",
    category: "frontend",
    proficiency: "expert",
    percentage: 95,
    yearsOfExperience: 4,
    color: "#1572B6",
  },
  {
    _id: "skill-tailwind",
    name: "Tailwind CSS",
    category: "frontend",
    proficiency: "expert",
    percentage: 95,
    yearsOfExperience: 3,
    color: "#06B6D4",
  },

  // Backend
  {
    _id: "skill-nodejs",
    name: "Node.js",
    category: "backend",
    proficiency: "expert",
    percentage: 92,
    yearsOfExperience: 4,
    color: "#339933",
  },
  {
    _id: "skill-nestjs",
    name: "NestJS",
    category: "backend",
    proficiency: "advanced",
    percentage: 85,
    yearsOfExperience: 2,
    color: "#E0234E",
  },
  {
    _id: "skill-express",
    name: "Express.js",
    category: "backend",
    proficiency: "expert",
    percentage: 90,
    yearsOfExperience: 3,
    color: "#000000",
  },

  // Cloud & DevOps
  {
    _id: "skill-gcp",
    name: "Google Cloud Platform",
    category: "cloud",
    proficiency: "advanced",
    percentage: 88,
    yearsOfExperience: 2,
    color: "#4285F4",
  },
  {
    _id: "skill-aws",
    name: "AWS",
    category: "cloud",
    proficiency: "advanced",
    percentage: 85,
    yearsOfExperience: 2,
    color: "#FF9900",
  },
  {
    _id: "skill-docker",
    name: "Docker",
    category: "devops",
    proficiency: "advanced",
    percentage: 82,
    yearsOfExperience: 2,
    color: "#2496ED",
  },
  {
    _id: "skill-github-actions",
    name: "GitHub Actions",
    category: "devops",
    proficiency: "advanced",
    percentage: 85,
    yearsOfExperience: 2,
    color: "#2088FF",
  },

  // Databases
  {
    _id: "skill-mongodb",
    name: "MongoDB",
    category: "database",
    proficiency: "expert",
    percentage: 90,
    yearsOfExperience: 3,
    color: "#47A248",
  },
  {
    _id: "skill-postgresql",
    name: "PostgreSQL",
    category: "database",
    proficiency: "advanced",
    percentage: 85,
    yearsOfExperience: 2,
    color: "#336791",
  },

  // Tools
  {
    _id: "skill-git",
    name: "Git",
    category: "tools",
    proficiency: "expert",
    percentage: 95,
    yearsOfExperience: 4,
    color: "#F05032",
  },
  {
    _id: "skill-postman",
    name: "Postman",
    category: "tools",
    proficiency: "expert",
    percentage: 90,
    yearsOfExperience: 3,
    color: "#FF6C37",
  },
  {
    _id: "skill-vscode",
    name: "VS Code",
    category: "tools",
    proficiency: "expert",
    percentage: 95,
    yearsOfExperience: 4,
    color: "#007ACC",
  },
  {
    _id: "skill-figma",
    name: "Figma",
    category: "tools",
    proficiency: "advanced",
    percentage: 80,
    yearsOfExperience: 2,
    color: "#F24E1E",
  },
];

// Projects Data
export const projects: Project[] = [
  {
    _id: "proj-1",
    title: "EasyLearning Website",
    slug: "easylearning",
    tagline:
      "Responsive e-learning platform with live/recorded courses, test series, and study materials for Maharashtra Board students",
    category: "web-app",
    technologies: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "Node.js",
      "MongoDB",
      "SEO",
    ],
    liveUrl: "https://easylearning.live/",
    featured: true,
    order: 1,
  },
  {
    _id: "proj-2",
    title: "GiggleFlix Studios",
    slug: "giggleflix-studios",
    tagline:
      "Dark-themed entertainment portal with dynamic media sections, sub-2s load times via CDN optimization",
    category: "web-app",
    technologies: ["Next.js", "React", "Tailwind CSS", "CDN", "Analytics"],
    liveUrl: "https://giggleflixstudios.com/",
    featured: true,
    order: 2,
  },
  {
    _id: "proj-3",
    title: "ParthMomaya.com",
    slug: "parth-momaya",
    tagline:
      "Official website for popular YouTuber with optimized SEO, performance, and user experience",
    category: "web-app",
    technologies: ["React", "Next.js", "Tailwind CSS", "SEO", "Cloud Services"],
    liveUrl: "https://parthmomaya.com/",
    featured: true,
    order: 3,
  },
  {
    _id: "proj-4",
    title: "AI Portfolio Assistant",
    slug: "ai-portfolio",
    tagline:
      "Interactive AI-powered portfolio with intelligent chat capabilities using OpenAI",
    category: "ai-ml",
    technologies: ["Next.js", "TypeScript", "OpenAI", "Tailwind CSS", "Vercel"],
    liveUrl: "https://prashantpatil.dev/",
    githubUrl: "https://github.com/PrashantPatil10178",
    featured: true,
    order: 4,
  },
  {
    _id: "proj-5",
    title: "Hello Meal Frontend",
    slug: "hello-meal",
    tagline:
      "Food delivery app with Google OAuth, Stripe payments, and 28% reduced bundle size",
    category: "web-app",
    technologies: ["React", "Google OAuth", "Stripe", "Code-splitting"],
    featured: true,
    order: 5,
  },
  {
    _id: "proj-6",
    title: "Tavily AI Bug Fix",
    slug: "tavily-ai",
    tagline:
      "Critical security bug patch for US-based AI startup in collaboration with CEO Rotem",
    category: "open-source",
    technologies: ["Node.js", "Security", "API"],
    featured: true,
    order: 6,
  },
];

// Experience Data
export const experiences: Experience[] = [
  {
    _id: "exp-1",
    company: "EasyLearning",
    position: "Web Developer",
    employmentType: "contract",
    location: "Remote",
    startDate: "2024-10-01",
    current: true,
    description:
      "Designing and developing the Easy Learning website for smooth, responsive, accessible learning experience for Maharashtra Board students.",
    responsibilities: [
      "Design and develop responsive e-learning platform using Next.js and React",
      "Implement intuitive UI/UX with Tailwind CSS for optimal user experience",
      "Optimize performance for fast page loads and mobile responsiveness",
      "Integrate live courses, recorded courses, test series, and study materials",
      "Implement SEO best practices for better discoverability",
    ],
    achievements: [
      "Improved Lighthouse SEO and performance scores significantly",
      "Built study trackers to boost student retention and engagement",
      "Implemented server-side rendering for fast initial loads",
    ],
    technologies: ["Next.js", "React", "Tailwind CSS", "Node.js", "MongoDB"],
    order: 1,
  },
  {
    _id: "exp-2",
    company: "GiggleFlix Studios",
    position: "Web Developer",
    employmentType: "contract",
    location: "Remote",
    startDate: "2024-07-01",
    endDate: "2025-02-28",
    current: false,
    description:
      "Designed and developed dark-theme entertainment portal achieving exceptional performance metrics.",
    responsibilities: [
      "Design dark-themed entertainment portal with dynamic media sections",
      "Implement structured metadata for content discoverability",
      "Optimize images and implement caching headers",
      "Set up CDN delivery for global content distribution",
      "Add analytics for content insights and user behavior tracking",
    ],
    achievements: [
      "Achieved sub-2 second initial paint time",
      "Implemented optimized image delivery via CDN",
      "Built comprehensive analytics dashboard for content insights",
    ],
    technologies: ["Next.js", "React", "Tailwind CSS", "CDN", "Analytics"],
    order: 2,
  },
  {
    _id: "exp-3",
    company: "Hello Meal",
    position: "Front-End Developer (Intern)",
    employmentType: "internship",
    location: "Remote",
    startDate: "2023-04-01",
    endDate: "2023-06-30",
    current: false,
    description:
      "Built responsive UI components and integrated payment solutions for food delivery platform.",
    responsibilities: [
      "Build responsive UI components using React",
      "Integrate Google OAuth for seamless authentication",
      "Implement Stripe payment gateway for secure transactions",
      "Optimize bundle size through code-splitting and lazy-loading",
      "Collaborate with backend team for API integration",
    ],
    achievements: [
      "Reduced bundle size by 28% via code-splitting and lazy-loading",
      "Successfully integrated Google OAuth and Stripe payments",
      "Improved app responsiveness across all device sizes",
    ],
    technologies: ["React", "Google OAuth", "Stripe", "JavaScript"],
    order: 3,
  },
  {
    _id: "exp-4",
    company: "ParthMomaya.com (YouTuber Official Website)",
    position: "Web Developer & Site Manager",
    employmentType: "freelance",
    location: "Remote",
    startDate: "2021-08-01",
    current: true,
    description:
      "Developing, maintaining, and updating the official website for popular YouTuber ensuring optimal performance and security.",
    responsibilities: [
      "Develop and maintain official website with optimal performance",
      "Ensure website security and regular updates",
      "Integrate new features based on requirements",
      "Optimize SEO for better search engine visibility",
      "Improve responsiveness across all devices",
      "Manage hosting and cloud services",
    ],
    achievements: [
      "Maintained 99.9% uptime throughout the period",
      "Significantly improved SEO rankings and organic traffic",
      "Successfully integrated multiple new features over time",
    ],
    technologies: ["React", "Next.js", "SEO", "Cloud Services", "Hosting"],
    order: 4,
  },
];

// Education Data
export const education: Education[] = [
  {
    _id: "edu-1",
    institution: "AISSMS Institute of Information Technology",
    degree: "Bachelor of Technology",
    fieldOfStudy: "Information Technology",
    startDate: "2022-11-01",
    endDate: "2026-06-30",
    current: true,
    gpa: "7.67/10.0",
    description:
      "Pursuing B.Tech in Information Technology with focus on web development, cloud computing, and modern software engineering practices.",
    achievements: [
      "Active member of Google Developer Student Clubs (GDSC)",
      "Trained 500+ students in React and GCP basics through workshops",
      "Participated in multiple hackathons representing the college",
      "Consistent academic performance with strong practical skills",
    ],
    order: 1,
  },
];

// Achievements Data
export const achievements: Achievement[] = [
  {
    _id: "achieve-1",
    title: "Best UI Design - Inspiron 4.0 Hackathon",
    type: "hackathon",
    issuer: "COEP (College of Engineering Pune)",
    date: "2024-01-15",
    description:
      "Won Best UI Design award at Inspiron 4.0 Hackathon, finishing in Top 8 out of 130+ participating teams.",
    featured: true,
    order: 1,
  },
  {
    _id: "achieve-2",
    title: "Top 5 Nationally - CDAC National IoT Hackathon",
    type: "hackathon",
    issuer: "CDAC (Centre for Development of Advanced Computing)",
    date: "2023-09-20",
    description:
      "Achieved Top 5 position nationally at the prestigious CDAC National IoT Hackathon, competing against teams from across India.",
    featured: true,
    order: 2,
  },
  {
    _id: "achieve-3",
    title: "GDSC Workshop Trainer - 500+ Students",
    type: "community",
    issuer: "Google Developer Student Clubs",
    date: "2023-12-01",
    description:
      "Conducted workshops and training sessions for 500+ students on React fundamentals and Google Cloud Platform basics through GDSC initiatives.",
    featured: true,
    order: 3,
  },
  {
    _id: "achieve-4",
    title: "Critical Bug Patch - Tavily AI",
    type: "open-source",
    issuer: "Tavily AI (US-based Startup)",
    date: "2024-06-15",
    description:
      "Identified and patched a critical security bug for Tavily AI, a US-based AI startup. Collaborated directly with CEO Rotem on the fix.",
    url: "https://tavily.com",
    featured: true,
    order: 4,
  },
];

// Certifications Data
export const certifications: Certification[] = [
  {
    _id: "cert-1",
    name: "Google Cloud Digital Leader",
    issuer: "Google Cloud",
    issueDate: "2024-01-15",
    description:
      "Demonstrates foundational knowledge of cloud concepts and Google Cloud products, services, tools, features, benefits, and use cases.",
    skills: ["Google Cloud Platform", "Cloud Computing", "Cloud Architecture"],
    order: 1,
  },
  {
    _id: "cert-2",
    name: "AWS Academy Cloud Functions",
    issuer: "Amazon Web Services",
    issueDate: "2024-03-10",
    description:
      "Validates proficiency in AWS cloud functions and serverless computing architecture.",
    skills: ["AWS", "Lambda", "Serverless", "Cloud Functions"],
    order: 2,
  },
  {
    _id: "cert-3",
    name: "Oracle Gen-AI Professional",
    issuer: "Oracle",
    issueDate: "2025-01-20",
    description:
      "Certified in Oracle's Generative AI technologies and implementation strategies for enterprise applications.",
    skills: ["Generative AI", "Oracle Cloud", "AI/ML", "Enterprise AI"],
    order: 3,
  },
  {
    _id: "cert-4",
    name: "Oracle OCI Developer Professional",
    issuer: "Oracle",
    issueDate: "2024-08-15",
    description:
      "Demonstrates expertise in developing applications on Oracle Cloud Infrastructure using modern development practices.",
    skills: ["Oracle Cloud", "OCI", "Cloud Development", "DevOps"],
    order: 4,
  },
];

// Testimonials Data
export const testimonials: Testimonial[] = [
  {
    _id: "test-1",
    name: "Parth Momaya",
    position: "Content Creator",
    company: "YouTube (1M+ Subscribers)",
    testimonial:
      "Prashant has been managing my official website for years now. His attention to detail, quick response time, and technical expertise have been invaluable. The website performs flawlessly and has helped me connect better with my audience.",
    rating: 5,
    date: "2024-06-15",
    featured: true,
    order: 1,
  },
  {
    _id: "test-2",
    name: "EasyLearning Team",
    position: "Education Platform",
    company: "EasyLearning",
    testimonial:
      "Prashant built our entire e-learning platform from scratch. His understanding of user experience for students is exceptional. The platform loads fast, works perfectly on mobile, and our students love using it. Highly recommended!",
    rating: 5,
    date: "2024-11-20",
    featured: true,
    order: 2,
  },
  {
    _id: "test-3",
    name: "GDSC Workshop Attendees",
    position: "Student Developers",
    company: "AISSMS IOIT",
    testimonial:
      "Prashant's workshops on React and GCP were incredibly helpful. He explains complex concepts in simple terms and is always patient with questions. The hands-on approach made learning so much easier. Great mentor!",
    rating: 5,
    date: "2023-12-10",
    featured: true,
    order: 3,
  },
  {
    _id: "test-4",
    name: "Rotem",
    position: "CEO",
    company: "Tavily AI",
    testimonial:
      "Prashant identified and fixed a critical bug in our system that our own team had missed. His proactive approach and technical skills impressed us. It's developers like him who make the open-source community stronger.",
    rating: 5,
    date: "2024-06-20",
    featured: true,
    order: 4,
  },
  {
    _id: "test-5",
    name: "GiggleFlix Studios",
    position: "Entertainment Company",
    company: "GiggleFlix Studios",
    testimonial:
      "The website Prashant built for us exceeded all expectations. Sub-2 second load times, beautiful dark theme design, and excellent SEO. Our content reaches more viewers than ever before. Professional and talented developer!",
    rating: 5,
    date: "2024-12-01",
    featured: true,
    order: 5,
  },
];

// Blog Posts Data
export const blogPosts: BlogPost[] = [
  {
    _id: "blog-1",
    title: "Building Lightning-Fast Next.js Applications with CDN Optimization",
    slug: "nextjs-cdn-optimization",
    excerpt:
      "Learn how I achieved sub-2 second load times on GiggleFlix Studios using Next.js, image optimization, and CDN caching strategies.",
    category: "tutorial",
    tags: ["Next.js", "Performance", "CDN", "Optimization"],
    publishedAt: "2024-11-15T10:00:00Z",
    readTime: 10,
  },
  {
    _id: "blog-2",
    title: "Getting Google Cloud Digital Leader Certified: My Journey",
    slug: "gcp-digital-leader-certification",
    excerpt:
      "A comprehensive guide to preparing for and passing the Google Cloud Digital Leader certification exam based on my experience.",
    category: "career",
    tags: ["Google Cloud", "Certification", "Cloud Computing"],
    publishedAt: "2024-02-20T14:30:00Z",
    readTime: 8,
  },
  {
    _id: "blog-3",
    title: "Reducing React Bundle Size by 28%: Code-Splitting Strategies",
    slug: "react-bundle-optimization",
    excerpt:
      "Practical techniques I used at Hello Meal to reduce bundle size through code-splitting, lazy-loading, and tree shaking.",
    category: "tutorial",
    tags: ["React", "Performance", "Code-Splitting", "Optimization"],
    publishedAt: "2023-07-10T09:00:00Z",
    readTime: 12,
  },
  {
    _id: "blog-4",
    title: "From Hackathon to Top 5: Lessons from CDAC IoT Competition",
    slug: "cdac-iot-hackathon-experience",
    excerpt:
      "My experience competing at the national level CDAC IoT Hackathon and the strategies that helped our team reach Top 5.",
    category: "experience",
    tags: ["Hackathon", "IoT", "Competition", "Teamwork"],
    publishedAt: "2023-10-05T15:00:00Z",
    readTime: 7,
  },
  {
    _id: "blog-5",
    title: "Building an E-Learning Platform: Technical Deep Dive",
    slug: "elearning-platform-technical-guide",
    excerpt:
      "A technical walkthrough of how I built EasyLearning - from architecture decisions to SEO optimization for educational content.",
    category: "case-study",
    tags: ["Next.js", "E-Learning", "MongoDB", "SEO"],
    publishedAt: "2024-12-01T11:00:00Z",
    readTime: 15,
  },
  {
    _id: "blog-6",
    title: "Teaching 500+ Students: My GDSC Workshop Experience",
    slug: "gdsc-workshop-experience",
    excerpt:
      "Reflections on conducting React and GCP workshops for over 500 students and what I learned about technical education.",
    category: "community",
    tags: ["Teaching", "GDSC", "React", "GCP", "Community"],
    publishedAt: "2024-01-08T10:00:00Z",
    readTime: 6,
  },
];

// Services Data
export const services: Service[] = [
  {
    _id: "service-1",
    title: "Full-Stack Web Development",
    slug: "full-stack-development",
    shortDescription:
      "Build modern, high-performance web applications using React, Next.js, and Node.js with sub-2 second load times.",
    fullDescription:
      "I specialize in building complete web applications from concept to deployment. Using React, Next.js, and Node.js, I create responsive, SEO-optimized applications that deliver exceptional user experiences and performance.",
    features: [
      "Responsive, mobile-first design",
      "Server-side rendering with Next.js",
      "RESTful API development",
      "Database design (MongoDB, PostgreSQL)",
      "User authentication integration",
      "Payment gateway integration",
      "SEO optimization",
      "Performance optimization (sub-2s loads)",
      "Deployment and hosting setup",
      "30 days post-launch support",
    ],
    technologies: [
      "React",
      "Next.js",
      "Node.js",
      "TypeScript",
      "MongoDB",
      "PostgreSQL",
      "Tailwind CSS",
    ],
    deliverables: [
      "Production-ready application",
      "Source code with documentation",
      "Deployment on Vercel/AWS",
      "Performance optimization report",
    ],
    pricing: {
      startingPrice: 50000,
      priceType: "project",
      description: "Pricing based on project scope and complexity.",
    },
    timeline: "4-8 weeks",
    featured: true,
    order: 1,
  },
  {
    _id: "service-2",
    title: "Cloud Architecture & DevOps",
    slug: "cloud-devops",
    shortDescription:
      "Design and implement scalable cloud infrastructure on GCP, AWS, and Oracle Cloud with CI/CD pipelines.",
    fullDescription:
      "Leverage my certifications in GCP, AWS, and Oracle Cloud to architect and deploy scalable, secure cloud solutions. From serverless functions to full infrastructure, I help businesses harness the power of cloud computing.",
    features: [
      "Cloud architecture design",
      "GCP/AWS/Oracle Cloud setup",
      "Docker containerization",
      "CI/CD pipeline implementation",
      "GitHub Actions automation",
      "Serverless function deployment",
      "CDN configuration",
      "Security best practices",
      "Cost optimization",
      "Monitoring and logging setup",
    ],
    technologies: [
      "Google Cloud Platform",
      "AWS",
      "Oracle Cloud",
      "Docker",
      "GitHub Actions",
      "Terraform",
    ],
    deliverables: [
      "Cloud architecture documentation",
      "Infrastructure setup",
      "CI/CD pipeline configuration",
      "Security audit report",
    ],
    pricing: {
      startingPrice: 40000,
      priceType: "project",
      description: "Custom pricing based on infrastructure complexity.",
    },
    timeline: "2-6 weeks",
    featured: true,
    order: 2,
  },
  {
    _id: "service-3",
    title: "Technical Training & Workshops",
    slug: "training-workshops",
    shortDescription:
      "Hands-on training sessions on React, Next.js, and Cloud technologies for students and teams.",
    fullDescription:
      "Drawing from my experience training 500+ students through GDSC, I offer comprehensive technical training programs. Whether it's React fundamentals or cloud computing basics, I make complex concepts accessible and practical.",
    features: [
      "Customized curriculum design",
      "Hands-on coding sessions",
      "Real-world project examples",
      "Q&A and doubt resolution",
      "Practice assignments",
      "Resource materials provided",
      "Certificate of completion",
      "Follow-up support",
    ],
    technologies: ["React", "Next.js", "Node.js", "GCP", "AWS", "JavaScript"],
    deliverables: [
      "Training sessions (virtual/in-person)",
      "Course materials and slides",
      "Practice exercises",
      "Completion certificates",
    ],
    pricing: {
      startingPrice: 5000,
      priceType: "session",
      description: "Per session pricing. Bulk discounts available.",
    },
    timeline: "Flexible",
    featured: true,
    order: 3,
  },
];
