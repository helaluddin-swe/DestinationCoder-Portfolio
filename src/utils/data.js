import { FiGithub, FiLinkedin } from "react-icons/fi"
import IMG_1 from "../images/project-1.png"
import IMG_2 from "../images/project-2.png"
import IMG_3 from "../images/project-3.png"
import IMG_4 from "../images/project-4.png"
import IMG_5 from "../images/project-5.png"
import IMG_6 from "../images/project-6.png"
import IMG_7 from "../images/project-7.png"
import Profile_1 from "../images/helal9.jpg"
import Y1 from "../images/youtube-project-2.png"
import Y2 from "../images/youtube-project-3.png"
import Y3 from "../images/youtube-project-4.png"
import Y4 from "../images/youtube-project-6.png"
import Y5 from "../images/youtube-project-7.png"
import School1 from "../images/DestinationSchool-1.png"
import  Commerce2 from "../images/DestinationCommerce-2.png"
import  Coder1 from "../images/DestinationCoder-1.png"
import  RealEstate1 from "../images/DestinationRealEstate-2.png"
import  Todo1 from "../images/DestinationTodo-1.png"
import  Hotel1 from "../images/DestinationHotelBooking-4.png"
import  JobTraker1 from "../images/DestinationJobTraker-1.png"
import  Resume1 from "../images/DestinationResumeBuilder1.png"



import { BookOpen, Code, Code2, Coffee, Database, Heart, Mail, Server } from "lucide-react"

// passions, journey steps, and projects data combined
// created by Helal Uddin
export const Profile={"url":Profile_1}
export const SocialLinks=[{ icon: FiGithub, href: "https://github.com/helaluddin-swe" }, { icon: FiLinkedin, href: "https://www.linkedin.com/in/helaluddin-swe/" }, { icon: Mail, href: "ahmedhelaluddin0330@gmail.com" }]
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
  "PostgreSQL", "MongoDB", "Prisma", 
  "Git", "Docker", "CI/CD", "AWS", "Vercel",
  "Postman","Search Engine Optimization","ON Page SEO "," Technical SEO","Local SEO",
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
      { name: "Authentication (JWT/OAuth)", level: 85, color: "bg-blue-700" },
      { name: "Microservices", level: 75, color: "bg-teal-500" },
      { name: "Serverless (AWS Lambda/Firebase)", level: 78, color: "bg-amber-500" },
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
    
      { name: "SQL", level: 90, color: "bg-cyan-600" },
      { name: "NoSQL", level: 85, color: "bg-yellow-700" },
      { name: "Database Design", level: 85, color: "bg-purple-600" },
      { name: "Optimization & Indexing", level: 75, color: "bg-teal-600" },
     
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
    title: "Destination Coder Portfolio Website Project(React)",
    description:
      "A coding-focused platform designed to showcase modern UI components and developer projects with smooth interactions.",
    image: Coder1,
    tags: ["React", "Tailwind", "Vite"],
    liveUrl: "#",
    githubUrl: "https://github.com/helaluddin-swe/destinationcoder",
    featured: true,
    category: "Frontend",
  },
  {
    id: 2,
    title: "Destination School Management (Full Stack)",
    description:
      "A complete school management system with student, teacher, and class modules built using Next.js, Node.js, and PostgreSQL.",
    image: School1,
    tags: ["Next.js", "Express", "PostgreSQL"],
    liveUrl: "#",
    githubUrl: "https://github.com/helaluddin-swe/Destination-School-Management-Full-Stack",
    featured: true,
    category: "Full Stack",
  },
  {
    id: 3,
    title: "Destination Real Estate",
    description:
      "A property listing platform featuring advanced search, maps, and filtering functionalities for real estate management.",
    image: RealEstate1,
    tags: ["React", "Node.js", "MongoDB"],
    liveUrl: "#",
    githubUrl: "https://github.com/helaluddin-swe/Destination-Real-Estate",
    featured: false,
    category: "Full Stack",
  },
  {
    id: 4,
    title: "Destination Job Tracker (Full Stack)",
    description:
      "A job application management tool that helps users track applications, statuses, and progress easily.",
    image: JobTraker1,
    tags: ["React", "Express", "MongoDB"],
    liveUrl: "#",
    githubUrl: "https://github.com/helaluddin-swe/Destination-Job-Traker-Full-Stack",
    featured: false,
    category: "Full Stack",
  },
  {
    id: 5,
    title: "Destination Todo App (Full Stack)",
    description:
      "A modern productivity app for managing tasks with authentication and persistent cloud storage.",
    image: Todo1,
    tags: ["React", "Node.js", "MongoDB"],
    liveUrl: "#",
    githubUrl: "https://github.com/helaluddin-swe/DestinationTodo-App-Full-Stack",
    featured: false,
    category: "Full Stack",
  },
  {
    id: 6,
    title: "Destination Airbnb Clone (Full Stack)",
    description:
      "A full-stack clone of Airbnb with room listings, user authentication, and booking management.",
    image: IMG_6,
    tags: ["Next.js", "Prisma", "PostgreSQL"],
    liveUrl: "#",
    githubUrl: "https://github.com/helaluddin-swe/DestinationAirbnb-clone-full-stack",
    featured: true,
    category: "Full Stack",
  },
  {
    id: 7,
    title: "Destination Resume Builder (Full Stack)",
    description:
      "An AI-assisted resume builder where users can generate and customize resumes using modern templates.",
    image: Resume1,
    tags: ["Next.js", "OpenAI", "Tailwind"],
    liveUrl: "#",
    githubUrl: "https://github.com/helaluddin-swe/DestinationResumeBuilder-full-stack",
    featured: true,
    category: "AI Project",
  },
  {
    id: 8,
    title: "Destination Ebook Creator with AI",
    description:
      "An AI-powered ebook generation app allowing users to create and export ebooks with custom prompts.",
    image: IMG_7,
    tags: ["Next.js", "OpenAI", "Node.js"],
    liveUrl: "#",
    githubUrl: "https://github.com/helaluddin-swe/DestinationEbook-Creator-with-AI",
    featured: true,
    category: "AI Project",
  },
  {
    id: 9,
    title: "Destination Hotel Booking System",
    description:
      "A hotel booking and management system with room availability, pricing, and customer dashboard.",
    image: Hotel1,
    tags: ["React", "Express", "MongoDB"],
    liveUrl: "#",
    githubUrl: "https://github.com/helaluddin-swe/DestinationHotel-Booking-System",
    featured: false,
    category: "Full Stack",
  },
  {
    id: 10,
    title: "Destination YouTube Clone",
    description:
      "A YouTube clone featuring video upload, playback, subscriptions, and search functionality.",
    image: Y3,
    tags: ["React", "Firebase", "Tailwind"],
    liveUrl: "#",
    githubUrl: "https://github.com/helaluddin-swe/Destination-Youtube-clone",
    featured: true,
    category: "Frontend",
  },
  {
    id: 11,
    title: "Destination Coder Portfolio",
    description:
      "A personal portfolio website showcasing all projects, experiences, and skills in a modern responsive layout.",
    image: Coder1,
    tags: ["Next.js", "Framer Motion", "Tailwind"],
    liveUrl: "#",
    githubUrl: "https://github.com/helaluddin-swe/DestinationCoder-Portfolio",
    featured: true,
    category: "Frontend",
  },
  {
    id: 12,
    title: "Destination Commerce",
    description:
      "A full-stack e-commerce platform with product management, payments, and real-time order tracking.",
    image: Commerce2,
    tags: ["React", "Express", "MongoDB"],
    liveUrl: "#",
    githubUrl: "https://github.com/helaluddin-swe/DestinationCommerce",
    featured: true,
    category: "Full Stack",
  },
];
