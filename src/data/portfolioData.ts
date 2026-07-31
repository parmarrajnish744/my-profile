import {
  Project,
  Skill,
  ExperienceItem,
  EducationItem,
  ServiceItem,
  CertificateItem,
  TestimonialItem,
  StatItem,
} from "@/lib/types";

export const PERSONAL_INFO = {
  name: "Parmar Rajnesh Tarunbhai",
  roleTitle: "Software Engineer & Full Stack Developer",
  tagline: "Building Scalable Web Solutions & Digital Experiences.",
  bioShort: "I am a passionate Software Engineer with experience in Full Stack Web Development, WordPress Development, Flutter App Development, and UI/UX Design.",
  bioLong: "I am a passionate Software Engineer with experience in Full Stack Web Development, WordPress Development, Flutter App Development, and UI/UX Design. I enjoy building modern, responsive, and high-performance websites and mobile applications while continuously learning new technologies.",
  location: "Manjalpur, Vadodara, Gujarat, India",
  email: "rajnishparmar125@gmail.com",
  phone: "+91 8238689868",
  whatsapp: "https://wa.me/918238689868?text=Hi%20Parmar%20Rajnesh,%20I'd%20like%20to%20discuss%20a%20project!",
  status: "Available for Freelance & Full-time",
  socials: {
    github: "https://github.com/parmarrajnish744",
    linkedin: "https://linkedin.com/in/parmarrajnish",
    twitter: "https://twitter.com",
    whatsapp: "https://wa.me/918238689868",
    email: "mailto:rajnishparmar125@gmail.com",
  },
  avatarUrl: "/profile.jpg",
  resumeUrl: "#resume",
  typingTitles: [
    "Software Engineer",
    "Full Stack Developer",
    "WordPress Developer",
    "Flutter Developer",
    "UI/UX Designer"
  ],
  languages: [
    { name: "English", proficiency: "Professional Fluent" },
    { name: "Hindi", proficiency: "Native / Fluent" },
    { name: "Gujarati", proficiency: "Native / Fluent" }
  ]
};

export const PROJECTS_DATA: Project[] = [
  {
    id: "stitch-portfolio",
    title: "Luminous Engineer Portfolio",
    category: "Web / UI",
    description: "High-performance Next.js developer portfolio with WebGL fragment shaders, custom glassmorphic UI system, and Framer Motion dynamics.",
    fullDescription: "An engineering showcase built with Next.js 14, Tailwind CSS, Framer Motion, and raw GLSL WebGL shaders. Implements deep-space navy/cyan visual design, dynamic cursor lighting, responsive mobile dock navigation, and Lighthouse score > 95.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBH7o4U9wv7g5YZWIkk3Xoo3xHc2Z63cctVyo4b_MBxTWT7PzfyqTzewAwlEcofeStKamgeO7G067syBdEOSJPxpaDK_trEEdJMJZWnH3uLVhQwWDky-Ej9tdrQW9gx1UwzxLFosMYgYtSrqvRnCAcQMw1T2RxsRTfBLLwVO5CvXuLoLwEJ1N09fU1dJ1UoYs2vh2HQdHhGecTfYjw4HbOQT5b5ZdpaWpkZo-XkIKOEt2ITGCadLqAsFQ",
    tags: ["Next.js", "TypeScript", "WebGL", "Tailwind CSS", "Framer Motion"],
    demoUrl: "https://parmarrajnish744.github.io",
    githubUrl: "https://github.com/parmarrajnish744",
    featured: true,
    metrics: "99/100 Lighthouse Performance",
    highlights: ["Custom GLSL canvas background", "Fully responsive dock bar", "Zero layout shift (CLS 0.0)"]
  },
  {
    id: "qr-enterprise-suite",
    title: "QR Generator Web Platform",
    category: "Full Stack",
    description: "SaaS platform for dynamic QR code generation, vector branding customization, domain white-labeling, and scan analytics.",
    fullDescription: "A full-stack web application designed for enterprise marketers. Generates vector SVG/PNG QR codes with embedded brand logos, dynamic redirect rules, geographical scan tracking, and JWT-authenticated dashboard analytics.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC3TQUPH_9SkVPt4o1BrTI3Znd6G7SmxKjtS7idYB4R6Qhd3vSAJVHTiVxgFLz1BpHf_r4HPjOiS1he0ZB9mtjogR0xGl19S3YfkxueNeXIvwpQCxr5GhMegE3KnRMLX2vxs2g5dJQvOLh_GmeZzvG5-PTJO1fJnWhfQoWnxjr5lpjwXoB1D423T8lkvHe4n0714jMSXPbpJvFRh1VFmG4WoGNc8QhniBrz-Qd5E4Cqppfbbf3f-AspAw",
    tags: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
    demoUrl: "#",
    githubUrl: "https://github.com/parmarrajnish744",
    featured: true,
    metrics: "High User Conversion",
    highlights: ["Dynamic target URL updating without reprinting", "Geographical heatmaps for scans", "Export SVG, PDF, PNG with print dpi"]
  },
  {
    id: "flutter-fitness-tracker",
    title: "Flutter Native Cross-Platform App",
    category: "Mobile",
    description: "Production cross-platform mobile app featuring live biometric sync, workout planner, 60fps graphs, and offline-first state.",
    fullDescription: "Cross-platform iOS & Android mobile application engineered using Flutter and Dart. Integrates Firebase Cloud Firestore, HealthKit, Google Fit API, and smooth custom painter graphs for daily calorie and workout metrics.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDX20lvo7PGJfEB7IY_2RKkZemVnmgmBfscnDXcJHgAltAoFwtx41lkxYv8heZ6g5-6FooHAj_XFBlNmXGYlo4eA-0ohXTUa2905W-22Rsl0Z-VM-z3KppSZnPt1olqwX04TrUH3xq9QCmypcN6zFq2sqDIY1BwTHeDvtlAGVq685QGyKzhnPzFgBaGBLfqsRE3VrbxAgqH-xXl1rccB3hEoDuOf4MNKJ4XgqAfnLEHIYhHD4mm3HxCDA",
    tags: ["Flutter", "Dart", "Firebase", "Riverpod", "Material 3"],
    demoUrl: "#",
    githubUrl: "https://github.com/parmarrajnish744",
    featured: true,
    metrics: "60 FPS Native Performance",
    highlights: ["Offline SQLite persistence", "60 FPS custom chart animations", "Push notifications via FCM"]
  },
  {
    id: "wordpress-headlocked",
    title: "WordPress Custom Theme & CMS Ecosystem",
    category: "Full Stack",
    description: "Custom block-based themes and plugin integrations for enterprise content management and publishing systems.",
    fullDescription: "A custom WordPress theme architecture paired with Next.js frontend via GraphQL. Features automated caching, WooCommerce payment gateway integration, WP REST API extensions, and custom Gutenberg blocks.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA85i759b53SotgxkFSdGwKQnD1P-ihEC-uaouxo6lrDOg9FF69dOttIIHyU4nnlNYt0aJLzA_wZvv6DZdA9W8V1w11qxHDEWMH5jLCAiTSdTV3A-MedcQYulCiYWudms29XuksohqxePD8SP7Gaq7rkYYrKah1v_xze-wGulooKUMcCaZz3et_cD8ZgFEvucm-1Ee7MEXgVrRboLSfNPvYC9YtlVMB-lt5x8JFQhY2cZE2koocGbMfrA",
    tags: ["WordPress", "PHP", "GraphQL", "Next.js", "WooCommerce"],
    demoUrl: "#",
    githubUrl: "https://github.com/parmarrajnish744",
    featured: false,
    metrics: "2.4x Speed Improvement",
    highlights: ["Custom PHP Gutenberg plugin", "Redis object caching", "Headless Next.js rendering"]
  }
];

export const SKILLS_DATA: Skill[] = [
  { name: "Full Stack Web Dev (React / Next.js)", category: "Frontend", percentage: 92, iconName: "Code", level: "Expert" },
  { name: "TypeScript / JavaScript", category: "Frontend", percentage: 90, iconName: "FileCode", level: "Expert" },
  { name: "Tailwind CSS & Glassmorphism", category: "Frontend", percentage: 95, iconName: "Palette", level: "Expert" },
  { name: "HTML5 / WebGL / Canvas", category: "Frontend", percentage: 88, iconName: "Sparkles", level: "Advanced" },
  { name: "Node.js & Express", category: "Backend", percentage: 88, iconName: "Server", level: "Advanced" },
  { name: "RESTful & GraphQL APIs", category: "Backend", percentage: 86, iconName: "Cpu", level: "Advanced" },
  { name: "WordPress & Custom PHP", category: "Backend", percentage: 90, iconName: "Layers", level: "Expert" },
  { name: "Flutter & Dart", category: "Mobile & DB", percentage: 90, iconName: "Smartphone", level: "Expert" },
  { name: "MongoDB & MySQL", category: "Mobile & DB", percentage: 85, iconName: "Database", level: "Advanced" },
  { name: "Firebase & Supabase", category: "Mobile & DB", percentage: 88, iconName: "Zap", level: "Advanced" },
  { name: "Git / GitHub / CI/CD", category: "Tools & Cloud", percentage: 90, iconName: "GitBranch", level: "Expert" },
  { name: "UI/UX & Figma Prototyping", category: "Tools & Cloud", percentage: 88, iconName: "Palette", level: "Advanced" }
];

export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    id: "exp-1",
    role: "Full Stack Developer",
    company: "Web & Software Solutions",
    location: "Vadodara, Gujarat, India",
    duration: "2024 — Present",
    type: "Full-Time",
    description: "Developing modern, responsive full-stack web applications, scalable backend RESTful APIs, and custom client web portals using Next.js, React, Node.js, and Tailwind CSS.",
    achievements: [
      "Built and deployed responsive web apps with high performance and 95+ Lighthouse scores.",
      "Implemented RESTful API endpoints and integrated MongoDB/MySQL databases securely.",
      "Collaborated with UI/UX designers to translate wireframes into interactive React interfaces."
    ],
    techStack: ["Next.js", "React", "TypeScript", "Node.js", "Tailwind CSS", "MongoDB"]
  },
  {
    id: "exp-2",
    role: "WordPress Developer",
    company: "CMS & Web Development",
    location: "Vadodara, Gujarat, India",
    duration: "2023 — 2024",
    type: "Full-Time",
    description: "Specialized in custom WordPress theme development, Gutenberg block customizations, plugin integrations, performance optimization, and CMS management.",
    achievements: [
      "Engineered high-converting block-based themes with custom PHP and Tailwind CSS styling.",
      "Optimized website load speeds and Google Core Web Vitals performance metrics.",
      "Handled database migrations, security hardening, and ongoing client website maintenance."
    ],
    techStack: ["WordPress", "PHP", "JavaScript", "MySQL", "CSS3", "HTML5"]
  },
  {
    id: "exp-3",
    role: "Flutter App Developer",
    company: "Mobile Product Labs",
    location: "Vadodara, Gujarat, India",
    duration: "2022 — 2023",
    type: "Full-Time",
    description: "Developed cross-platform mobile applications for iOS and Android using Flutter and Dart, integrating Firebase services and custom UI animations.",
    achievements: [
      "Built fluid 60FPS mobile interfaces following Google Material 3 design guidelines.",
      "Implemented Firebase Authentication, Firestore database, and Cloud Storage integration.",
      "Ensured responsive layouts across various smartphone screen sizes and tablet devices."
    ],
    techStack: ["Flutter", "Dart", "Firebase", "REST APIs", "Material 3"]
  }
];

export const EDUCATION_DATA: EducationItem[] = [
  {
    degree: "Master of Computer Applications (MCA)",
    institution: "Sigma University",
    duration: "2025 — Pursuing (2026)",
    grade: "Pursuing",
    details: "Advanced Cloud Computing, Enterprise Software Architecture, Full Stack Engineering, and Advanced Database Systems."
  },
  {
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "ITM (SLS) Baroda University",
    duration: "2022 — 2025",
    grade: "Graduated (2025)",
    details: "Software Engineering, Web Development, Object-Oriented Programming, Database Management Systems, Data Structures, and Mobile Applications."
  }
];

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "srv-1",
    title: "Full Stack Web Development",
    description: "Building fast, responsive web applications using React, Next.js, TypeScript, and Node.js with modern glassmorphism aesthetics and SEO optimization.",
    icon: "Layout",
    color: "primary",
    features: ["Next.js App Router", "React & TypeScript", "Tailwind CSS & Glassmorphism", "High Performance"]
  },
  {
    id: "srv-2",
    title: "WordPress Development",
    description: "Custom PHP theme development, Gutenberg block creation, WooCommerce setups, and site performance optimization for content management systems.",
    icon: "Globe",
    color: "secondary",
    features: ["Custom PHP Themes", "Gutenberg Blocks", "Speed & Security Audit", "WooCommerce Integration"]
  },
  {
    id: "srv-3",
    title: "Flutter App Development",
    description: "Cross-platform iOS and Android mobile app development with smooth 60FPS UI animations, Firebase backend, and offline persistence.",
    icon: "Smartphone",
    color: "tertiary",
    features: ["Single Dart Codebase", "Material 3 UI Design", "Firebase & Supabase", "Cross-Platform Performance"]
  },
  {
    id: "srv-4",
    title: "UI/UX Design & Frontend",
    description: "Designing intuitive, user-centric interfaces with high-fidelity visual design, responsive layouts, and interactive micro-animations.",
    icon: "Sparkles",
    color: "primary",
    features: ["Figma Wireframing", "Responsive Layouts", "Dark / Light Themes", "Accessibility Compliant"]
  }
];

export const CERTIFICATES_DATA: CertificateItem[] = [
  {
    id: "cert-1",
    title: "Full Stack Web Development Certification",
    issuer: "ITM (SLS) Baroda University",
    issueDate: "2025",
    credentialId: "BCA-ITM-2025",
    image: "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?auto=format&fit=crop&w=800&q=80",
    verifyUrl: "https://itmbu.ac.in",
    category: "Frontend"
  },
  {
    id: "cert-2",
    title: "Flutter & Mobile Application Specialist",
    issuer: "Google Developers / Mobile Labs",
    issueDate: "2024",
    credentialId: "FLT-MBL-2024",
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=800&q=80",
    verifyUrl: "https://developers.google.com",
    category: "Mobile"
  }
];

export const STATS_DATA: StatItem[] = [
  { label: "Years Experience", value: 2, suffix: "+", description: "In software engineering & development" },
  { label: "Projects Completed", value: 25, suffix: "+", description: "Web, WordPress & Flutter applications" },
  { label: "Satisfied Clients", value: 20, suffix: "+", description: "Across web & mobile platforms" },
  { label: "GitHub Commits", value: 500, suffix: "+", description: "Contributions and repositories" }
];

export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    id: "test-1",
    name: "Client Partner",
    role: "Project Manager",
    company: "Web Development Studio",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
    quote: "Parmar Rajnesh is a highly dedicated software engineer. He built our full-stack web application with great speed, clean code, and beautiful design details.",
    rating: 5
  },
  {
    id: "test-2",
    name: "Collaborator",
    role: "Lead Designer",
    company: "Digital Agency",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80",
    quote: "Working with Rajnesh on our Flutter mobile app was a fantastic experience. His attention to smooth animations and responsive layouts is top notch.",
    rating: 5
  }
];
