 import { Briefcase, Github, Linkedin, Mail, MapPinned, Phone } from "lucide-react";
 export const ResumeData = [
    {
        section: "basicInfo",
        label: "Basic Info",
        data: {
            fullName: "Helal Uddin",
            designation: "Full Stack Developer",
            
            subject: "BSc in CCE,IIUC-Chattagram",
            email: "ahmedhelaluddin0330@gmail.com",
            emailUrl: "ahmedhelaluddin0330@gmail.com",
            phone: "+8801851121341",
            nationality: "Bangladesh",
            Github:"Github",
            GithhubUrl:"https://github.com/helaluddin-swe ",
            linkedin: "helaluddin-swe",
            linkedinUrl: " https://www.linkedin.com/in/helaluddin-swe/",

            icon: [Mail , Phone , Linkedin , MapPinned , Github ]
        }
    },

    {
        section: "work",
        label: "Work Experience",
        experiences: [
            {
                company: "W3Eden Inc",
                designation: "Software Development Intern",
                duration: "November 2024 - April 2025",
                learn: [
                    "Designed a responsive web application using React, Next.js, and Express.js.",
                    "Maintained website SEO and increased user engagement by 20%.",
                    "Collaborated with the backend team to implement RESTful APIs.",
                    "Implemented Authentication using JWT and Clerk.",
                    "Participated in code reviews and debugging sessions.",
                    "Deployed the application on AWS."
                ]
            },
            {
                company: "Upwork",
                designation: "Full Stack Developer(Remote)",
                duration: "May 2025 - Present",
                learn: [
                    "Developed scalable web apps.",
                    "Improved page performance by 30%.",
                    "Led frontend UI improvements."
                ]
            }
        ]
    },

    {
        section: "education",
        label: "Education",
        list: [
            {
                institute: "International Islamic University,Chattagram (IIUC)",
                degree: "B.Sc in Computer & Communication Engineering",
                cgpa: 3.20,
                outof: 4.00,
                year: "2020 - 2024",
                Research: "Masked and Unmasked Face Recognition using Deep Learning(Published-25) "
            }
        ]
    },
    {
        section: "project",
        label: "PROJECT",
        list: [
            {
                name: "InterviewPrep with AI",
                learn: [
                    "Built a full-stack AI-powered interview preparation platform using React, Node.js, Express, and MongoDB.",
                    "Implemented MVC architecture with RESTful APIs (POST, GET, DELETE, PUT) including session handling.",
                    "Designed an interactive React dashboard for a dynamic and engaging user experience."
                ]
            },

            {
                name: "Full Stack Resume Builder",
                learn: [
                    "Developed a resume-building application with React (frontend), Node.js/Express (backend), and MongoDB.",
                    "Enabled users to create, edit, and download professional resumes.",
                    "Implemented real-time form handling with a clean and intuitive UI."
                ]
            },

            {
                name: "Full Stack Hotel Booking App",
                learn: [
                    "Created a responsive hotel booking platform with complete CRUD functionality.",
                    "Integrated secure backend APIs for booking management and user session control.",
                    "Managed real-time data handling for availability, bookings, and user actions."
                ]
            },

            {
                name: "Full Stack Real Estate App",
                learn: [
                    "Developed a property listing and management system using React, Node.js, Express, and MongoDB.",
                    "Implemented search, filtering, and map-based property visualization.",
                    "Built backend APIs for property CRUD operations and user interactions."
                ]
            },

            {
                name: "Full Stack Airbnb Clone",
                learn: [
                    "Engineered an Airbnb-like platform with MVC architecture using Node.js, Express.js, and MongoDB.",
                    "Developed product CRUD, wishlist/favorites, and subscription features.",
                    "Implemented dynamic image upload and storage handling."
                ]
            },

            {
                name: "Full Stack Portfolio Web App",
                learn: [
                    "Built a personal portfolio showcasing projects, skills, and contact details using React and Express.",
                    "Integrated smooth animations and dynamic routing.",
                    "Implemented a secure backend API for the contact form."
                ]
            },

            {
                name: "Full Stack Todo App",
                learn: [
                    "Created a task management application using React and Node.js.",
                    "Implemented full CRUD operations with secure user authentication.",
                    "Optimized the app for responsiveness and high performance."
                ]
            },

            {
                name: "Full Stack Ebook Builder with AI",
                learn: [
                    "Developed an AI-powered ebook generator integrating the OpenAI API.",
                    "Implemented authentication, ebook customization, and export/download features.",
                    "Built a dynamic content generation pipeline with responsive UI design."
                ]
            }
        ],
        others: ["Youtube Clone", " Resume Traking App", " Cart Functionality", "Hotel Reservation App", "Movie Mobile App", " AI integrated Chat App", " Real Estate App", "Blog App "]
    },
    {
        section: "skills",
        label: "SKILLS",
        skillList: [
            {
                label: "Languages",
                set: ["C", "JAVA", "Python", "Javascript"]
            }, {
                label: "Frontend",
                set: ["ReactJs", "Nextjs", " HTML", "EJS"]
            }, {
                label: "Backend",
                set: ["Nodejs", "Bun", "Express", " TypeScript", "Javascript"]
            }, {
                label: "Database",
                set: ["MongoDB", "MySQL", " Postgrss", "SQL"]
            }, {
                label: "Cloud",
                set: ["AWS", "Netlify", "Vercel"]
            },
            {
                label: "Style & Responsive",
                set: ["CSS", "SCSS", "Tailwind", "Bootstrap", "Shandcn Ui", "Material UI", "Framer Motion"]
            }, {
                label: "Artificial Intelligence",
                set: ["Openai", "Geminiai", "Huggingface"]
            },
        ]


    },
    {
        section: "achievement",
        label: "ACHIEVEMENT",
        list: ["Published Research Paper-2025", "Upazilla Science Fair Award-2018(3-category)"]
    }
];