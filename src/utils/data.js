import { FiGithub, FiLinkedin } from "react-icons/fi"
import IMG_1 from "../images/project-1.png"
import IMG_2 from "../images/project-2.png"
import IMG_3 from "../images/project-3.png"
import IMG_4 from "../images/project-4.png"
import IMG_5 from "../images/project-5.png"
import IMG_6 from "../images/project-6.png"
import IMG_7 from "../images/project-7.png"
import Profile_1 from "../images/helal9.jpg"

import { BookOpen, Code, Code2, Coffee, Database, Heart, Mail, Server } from "lucide-react"

// passions, journey steps, and projects data combined
// created by Helal Uddin
export const Profile={"url":Profile_1}
export const SocialLinks=[{ icon: FiGithub, href: "#" }, { icon: FiLinkedin, href: "#" }, { icon: Mail, href: "#" }]
export const STATS=
[
  { "statistic": "Projects Completed", "value": "50+" },
  { "statistic": "Years Experience", "value": "3+" },
  { "statistic": "Technologies", "value": "20+" },
  { "statistic": "Client Satisfaction", "value": "100%" }
]
   
 export const fullStackDevSkills = [
  "HTML5", "CSS3", "JavaScript (ES6+)", "TypeScript",
  "React", "Next.js", "Tailwind CSS", "Framer Motion",
  "Node.js", "Express", "REST API", "GraphQL",
  "PostgreSQL", "MongoDB", "Prisma", "Redis",
  "Git", "Docker", "CI/CD", "AWS", "Vercel",
  "Jest", "Cypress", "Postman",
  "Security (JWT, Helmet, HTTPS)",
  "Webpack", "Vite", "ESLint", "Prettier",
  "Algorithms", "Networking", "Debugging",
  "Team Collaboration", "Agile Workflow"
];

export const skillCategory  = [
  {
    title: "Frontend",
    icon: Code2, // Placeholder for an icon component or identifier
    description: "Crafting beautiful, responsive user interfaces",
    skills: [
      { name: "React", level: 95, color: "bg-blue-500" },
      { name: "TypeScript", level: 90, color: "bg-blue-500" },
      { name: "Next.js", level: 88, color: "bg-gray-800" },
      { name: "Tailwind CSS", level: 92, color: "bg-cyan-500" },
      { name: "Framer Motion", level: 85, color: "bg-pink-500" },
      { name: "JavaScript (ES6+)", level: 95, color: "bg-yellow-400" },
      { name: "HTML5 & CSS3", level: 98, color: "bg-orange-600" },
      { name: "Redux/Zustand", level: 85, color: "bg-purple-600" },
      { name: "Vue.js", level: 75, color: "bg-green-600" },
      { name: "SASS/LESS", level: 80, color: "bg-pink-400" },
      { name: "Webpack/Vite", level: 78, color: "bg-indigo-600" },
      { name: "Testing (Jest/Enzyme)", level: 70, color: "bg-red-500" },
    ],
  },
  {
    title: "Backend",
    icon: Server, // Placeholder for an icon component or identifier
    description: "Building robust server-side solutions",
    skills: [
      { name: "Node.js", level: 90, color: "bg-green-500" },
      { name: "Express.js", level: 88, color: "bg-gray-700" },
      { name: "Python", level: 85, color: "bg-yellow-500" },
      { name: "GraphQL", level: 80, color: "bg-pink-600" },
      { name: "REST APIs", level: 92, color: "bg-orange-500" },
      { name: "Go (Golang)", level: 70, color: "bg-cyan-600" },
      { name: "PHP (Laravel)", level: 65, color: "bg-red-700" },
      { name: "Authentication (JWT/OAuth)", level: 85, color: "bg-blue-700" },
      { name: "Microservices", level: 75, color: "bg-teal-500" },
      { name: "Serverless (AWS Lambda/Firebase)", level: 78, color: "bg-amber-500" },
      { name: "C# (.NET)", level: 60, color: "bg-indigo-700" },
      { name: "API Security", level: 80, color: "bg-gray-600" },
    ],
  },
  {
    title: "DevOps & Cloud",
    icon: Database, // Using "Database" icon as a placeholder, maybe change to "Cloud" or "Gear"
    description: "Deployment, automation, and infrastructure management",
    skills: [
      { name: "Git & GitHub", level: 95, color: "bg-gray-900" },
      { name: "Docker", level: 85, color: "bg-blue-600" },
      { name: "Kubernetes", level: 75, color: "bg-indigo-700" },
      { name: "AWS", level: 80, color: "bg-orange-400" },
      { name: "Azure", level: 70, color: "bg-blue-800" },
      { name: "CI/CD (e.g., Jenkins/GitHub Actions)", level: 82, color: "bg-green-700" },
      { name: "Terraform", level: 65, color: "bg-purple-700" },
      { name: "Linux/Bash", level: 88, color: "bg-gray-600" },
      { name: "Monitoring (Prometheus/Grafana)", level: 72, color: "bg-red-600" },
      { name: "Networking Fundamentals", level: 70, color: "bg-teal-400" },
      { name: "System Design", level: 80, color: "bg-yellow-600" },
      { name: "Shell Scripting", level: 75, color: "bg-cyan-700" },
    ],
  },
  {
    title: "Database",
    icon: Database, // Placeholder for an icon component or identifier
    description: "Managing and optimizing data storage",
    skills: [
      { name: "MongoDB", level: 88, color: "bg-green-600" },
      { name: "PostgreSQL", level: 85, color: "bg-blue-700" },
      { name: "MySQL", level: 80, color: "bg-indigo-500" },
      { name: "Redis", level: 78, color: "bg-red-600" },
      { name: "SQL", level: 90, color: "bg-cyan-600" },
      { name: "NoSQL", level: 85, color: "bg-yellow-700" },
      { name: "Database Design", level: 85, color: "bg-purple-600" },
      { name: "Optimization & Indexing", level: 75, color: "bg-teal-600" },
      { name: "Cassandra", level: 65, color: "bg-gray-500" },
      { name: "Stored Procedures", level: 70, color: "bg-orange-600" },
      { name: "Replication & Sharding", level: 72, color: "bg-pink-600" },
      { name: "Data Warehousing", level: 68, color: "bg-lime-600" },
    ],
  },
];

export const PASSIONS = [
  {
    icon: Heart,
    title: "User Experience",
    description: "Crafting intuitive interfaces that users love",
  },
  {
    icon: Coffee,
    title: "Problem Solving",
    description: "Turning complex challenges into elegant solutions",
  },
  {
    icon: BookOpen,
    title: "Continuous Learning",
    description: "Always exploring new technologies and best practices",
  },
  {
    icon: Code,
    title: "Clean Code",
    description: "Writing maintainable, scalable, and readable code for long-term success",
  },
];


export const JOURNEY_STEPS = [
  {
    year: "2021",
    title: "Started Coding Journey",
    company: "Self-taught",
    description:
      "Began learning web development with HTML, CSS, and JavaScript. Built my first website and fell in love with coding.",
    icon: "Code2",
    color: "bg-blue-500",
  },
  {
    year: "2022",
    title: "First Internship",
    company: "TechStart Inc.",
    description:
      "Joined as a frontend intern, working with React and learning modern development practices.",
    icon: "Briefcase",
    color: "bg-green-500",
  },
  {
    year: "2022",
    title: "Computer Science Degree",
    company: "University of Technology",
    description:
      "Started my Computer Science degree, diving deeper into algorithms, data structures, and software design.",
    icon: "GraduationCap",
    color: "bg-purple-500",
  },
  {
    year: "2023",
    title: "Freelance Web Developer",
    company: "Remote",
    description:
      "Built websites and web applications for global clients using MERN stack and SEO optimization techniques.",
    icon: "Laptop",
    color: "bg-yellow-500",
  },
];


export const PROJECTS = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce solution with advanced filtering, payment integration, and real-time inventory tracking.",
    image:IMG_1,
    tags: ["React", "Tailwind", "Framer Motion"],
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
    category: "Full Stack",
  },
  {
    id: 2,
    title: "Blog App with AI Post Generator",
    description:
      "A full-stack blog app using the MERN stack with Markdown support, AI-generated content, and tag filtering.",
    image: IMG_2,
    tags: ["React", "Node.js", "MongoDB", "Tailwind"],
    liveUrl: "https://youtu.be/tUnGudIBBjQ",
    githubUrl: "#",
    featured: true,
    category: "Full Stack",
  },
  {
    id: 3,
    title: "Portfolio Website",
    description:
      "A responsive developer portfolio built with Next.js and Framer Motion for smooth animations and fast loading.",
    image: IMG_3,
    tags: ["Next.js", "Tailwind", "Framer Motion"],
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
    category: "Frontend",
  },
  {
    id: 4,
    title: "Hotel Booking System",
    description:
      "A dynamic hotel management system allowing users to search, book, and review hotels with secure authentication.",
    image: IMG_4,
    tags: ["Node.js", "Express", "MongoDB", "EJS"],
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
    category: "Full Stack",
  },
];


