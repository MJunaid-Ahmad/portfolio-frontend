export const personalDetails = {
  name: "Muhammad Junaid",
  title: "MERN Stack Developer",
  tagline: "Building scalable, high-performance web applications with modern technologies.",
  email: "junaiddev9@gmail.com", // Placeholder to be updated
  phone: "+92 345 6294228", // Placeholder to be updated
  location: "Islamabad, Pakistan",
  github: "https://github.com",
  linkedin: "https://www.linkedin.com/in/muhammad-junaid-4aa3983b4",
  bio: "I am a passionate MERN Stack Developer with hands-on experience in designing and building responsive, full-stack web applications. I enjoy solving complex problems, writing clean code, and continuously learning new technologies to build robust web solutions.",
  stats: [
    { value: "1+", label: "Years Experience" },
    { value: "2+", label: "Projects Completed" },
    { value: "3+", label: "Happy Clients" },
    { value: "5+", label: "Git Commits" }
  ]
};

export const skills = {
  frontend: [
    { name: "React.js", level: "90%" },
    { name: "JavaScript (ES6+)", level: "85%" },
    { name: "Tailwind CSS", level: "95%" },
    { name: "HTML5 & CSS3", level: "95%" },
    { name: "Redux Toolkit", level: "80%" },
    { name: "Framer Motion", level: "75%" }
  ],
  backend: [
    { name: "Node.js", level: "85%" },
    { name: "Express.js", level: "85%" },
    { name: "RESTful APIs", level: "90%" },
    { name: "JWT Authentication", level: "80%" }
  ],
  database: [
    { name: "MongoDB", level: "85%" },
    { name: "Mongoose ODM", level: "80%" },
    { name: "SQL Basics", level: "65%" }
  ],
  tools: [
    { name: "Git & GitHub", level: "85%" },
    { name: "Postman", level: "90%" },
    { name: "NPM / Yarn", level: "85%" },
    { name: "VS Code", level: "95%" }
  ],
  softSkills: [
    { name: "Problem Solving", level: "90%" },
    { name: "Teamwork", level: "95%" },
    { name: "Communication", level: "85%" },
    { name: "Continuous Learning", level: "95%" }
  ]
};

export const experiences = [
  {
    role: "MERN Stack Developer Intern",
    company: "Softwise Solution",
    duration: "Sep 2025 - Present",
    description: "Assisting in building full-stack web applications, integrating APIs, maintaining existing React frontends, and writing REST endpoints in Node.js/Express.",
    tags: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"]
  },
  {
    role: "Frontend Developer Intern",
    company: "Ross Mckinley",
    duration: "Jun 2024 - Aug 2024",
    description: "Collaborated on designing responsive user interfaces using modern frontend technologies. Implemented reusable components, optimized application performance, and integrated with backend APIs. Worked within an Agile team environment to deliver high-quality web applications meeting client requirements.",
    tags: ["HTML5", "CSS3", "JavaScript", "Tailwind CSS", "Git"]
  }
];

export const projects = [
  {
    title: "E-Commerce Web Application",
    description: "A comprehensive online shopping platform featuring user authentication, product catalog, cart functionality, and order processing.",
    features: [
      "User sign-up/log-in with secure JWT authentication",
      "Dynamic product search, filter, and sorting categories",
      "Stripe payment gateway simulation integration",
      "Responsive admin dashboard for inventory management"
    ],
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "Redux Toolkit"],
    githubLink: "https://github.com",
    liveLink: "https://example.com"
  },
  {
    title: "Online Book Reader",
    description: "An interactive digital library application where users can discover, read, and bookmark books online, featuring progress tracking.",
    features: [
      "Beautiful paginated interface for reading uploaded PDF/EPUB books",
      "User-wise reading progress tracking with local storage and database sync",
      "Personal bookshelf management with search and ratings",
      "Clean, distraction-free reading mode with dark / sepia themes"
    ],
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "Framer Motion"],
    githubLink: "https://github.com",
    liveLink: "https://example.com"
  }
];

export const education = [
  {
    degree: "Bachelor of Science in Software Engineering",
    institution: "PMAS Arid Agriculture University, Rawalpindi",
    duration: "2025 - Expected 2029",
    description:
      "Currently pursuing Software Engineering with focus on Database Systems, Web Engineering, Data Structures, and Algorithms. Actively building practical projects alongside academic learning."
  }
];

export const languages = [
  { name: "English", level: "Professional Working Proficiency" },
  { name: "Urdu", level: "Native or Bilingual Proficiency" },
  { name: "Punjabi", level: "Native or Bilingual Proficiency" },
  { name: "Saraiki", level: "Native or Bilingual Proficiency" }
];
