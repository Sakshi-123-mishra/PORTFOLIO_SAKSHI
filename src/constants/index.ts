// Contains constant data for using in website
// ! Don't remove anything from here if not sure

import {
  mobile,
  backend,
  creator,
  web,
  antigravity,
  bootstrap,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  mysql,
  git,
  figma,
  docker,
  githubTech,
  java,
  python,
  nodeexpress,
  vscode,
  cyberplex,
  codsoft,
  project1,
  project2,
  project3,
  project4,
  project5,
  project6,
  leetcode,
  linkedin,
  codechef,
  codeforces,
  github,
} from "../assets";

// Navbar Links
export const NAV_LINKS = [
  {
    id: "about",
    title: "About",
    link: null,
  },
  {
    id: "work",
    title: "Work",
    link: null,
  },
  {
    id: "contact",
    title: "Contact",
    link: null,
  },
  {
    id: "source-code",
    title: "Source Code",
    link: "https://github.com",
  },
  {
    id: "resume",
    title: "Resume",
    link: "/resume.pdf",
  },
] as const;

// Services
export const SERVICES = [
  {
    title: "Frontend Developer (React & Tailwind)",
    icon: web,
  },
  {
    title: "Full Stack Developer (MERN)",
    icon: mobile,
  },
  {
    title: "Java & Python Programmer",
    icon: backend,
  },
  {
    title: "DSA & Problem Solving Enthusiast",
    icon: creator,
  },
] as const;

// Technologies
export const TECHNOLOGIES = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Bootstrap",
    icon: bootstrap,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Node Express",
    icon: nodeexpress,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "MySQL",
    icon: mysql,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "Git",
    icon: git,
  },
  {
    name: "GitHub",
    icon: githubTech,
  },
  {
    name: "Figma",
    icon: figma,
  },
  {
    name: "Docker",
    icon: docker,
  },
  {
    name: "VS Code",
    icon: vscode,
  },
  {
    name: "Antigravity",
    icon: antigravity,
  },
] as const;

// Experiences
export const EXPERIENCES = [
  {
    title: "Software Development Intern",
    company_name: "Cyberplex IT Solutions (Remote)",
    icon: cyberplex,
    iconBg: "#383E56",
    date: "June 2025 – July 2025",
    points: [
      "Developed and improved frontend components to enhance usability and responsiveness.",
      "Collaborated on layout optimization for client-based web applications.",
      "Worked with modern web technologies to deliver high-quality user interfaces.",
      "Participated in code reviews and implemented feedback to improve code quality.",
    ],
  },
  {
    title: "Software Development Intern",
    company_name: "CodSoft (Remote)",
    icon: codsoft,
    iconBg: "#E6DEDD",
    date: "June 2024 – July 2024",
    points: [
      "Completed structured programming tasks and mini-projects to strengthen development fundamentals.",
      "Applied core programming concepts to build and debug small-scale applications.",
      "Developed problem-solving skills through hands-on coding challenges.",
      "Gained practical experience in software development lifecycle and best practices.",
    ],
  },
] as const;

// Certifications and Achievements
export const CERTIFICATIONS = [
  {
    title: "Design Thinking for Innovation",
    issuer: "Coursera",
    icon: "🎓",
  },
  {
    title: "Object-Oriented Programming with Python",
    issuer: "Infosys",
    icon: "🎓",
  },
  {
    title: "Data Structures and Algorithms using Python",
    issuer: "Infosys",
    icon: "🎓",
  },
] as const;

// Extra-Curricular Activities
export const EXTRA_CURRICULAR = [
  "State/Zonal level Kho-Kho player",
  "AKTU Zonal Kho-Kho Tournament — 2024, 2025",
  "IIMT Engineering College Kho-Kho Tournament — 2024",
] as const;

// Core Subjects
export const CORE_SUBJECTS = [
  "Database Management Systems (DBMS)",
  "Data Structures and Algorithms (DSA)",
  "Object-Oriented Programming (OOPS)",
  "Operating Systems (OS)",
] as const;

// Projects
export const PROJECTS = [
  {
    name: "AI Short Video Ads Generator",
    description:
      "AI-based system for automated short video advertisement generation. Integrated script generation, visuals, and AI voiceovers.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "openai",
        color: "green-text-gradient",
      },
      {
        name: "react",
        color: "pink-text-gradient",
      },
    ],
    image: project1,
    source_code_link: "https://github.com/Sakshi-123-mishra/AI-Short-Video-Ads-Generator",
    live_site_link: "https://github.com/Sakshi-123-mishra/AI-Short-Video-Ads-Generator",
  },
  {
    name: "Real-Time Chat Application",
    description:
      "Real-time messaging platform with secure authentication. Implemented instant messaging and live data synchronization.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "socket.io",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
    ],
    image: project2,
    source_code_link: "https://github.com/Sakshi-123-mishra/Realtime-Chat-App",
    live_site_link: "https://github.com/Sakshi-123-mishra/Realtime-Chat-App",
  },
  {
    name: "Uber Clone Application",
    description:
      "Full-stack ride-sharing application simulating Uber workflows. Implemented booking flow, tracking, and payment simulation.",
    tags: [
      {
        name: "react-native",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "firebase",
        color: "pink-text-gradient",
      },
    ],
    image: project3,
    source_code_link: "https://github.com/Sakshi-123-mishra/Uber-Clone-App",
    live_site_link: "https://github.com/Sakshi-123-mishra/Uber-Clone-App",
  },
  {
    name: "AI-Powered Crop Yield Prediction Platform",
    description:
      "AI-driven platform for crop yield prediction and advisory. Applied data analysis to support sustainable farming decisions.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "python",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
    ],
    image: project6,
    source_code_link: "https://github.com/Sakshi-123-mishra/FARMADVISORY",
    live_site_link: "https://github.com/Sakshi-123-mishra/FARMADVISORY",
  },
  {
    name: "Event Management System",
    description:
      "Platform for managing events, registrations, and schedules. Designed user-friendly UI for event creation and participation.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "react",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
    ],
    image: project5,
    source_code_link: "https://github.com/Sakshi-123-mishra/Event-Management-System",
    live_site_link: "https://github.com/Sakshi-123-mishra/Event-Management-System",
  },
  {
    name: "Student Performance Analyzer",
    description:
      "Web-based system to analyze student academic performance. Provided insights using marks-based analysis and visualization.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
    ],
    image: project4,
    source_code_link: "https://github.com/Sakshi-123-mishra/student-management-system",
    live_site_link: "https://github.com/Sakshi-123-mishra/student-management-system",
  },
] as const;

export const SOCIALS = [
  {
    name: "GitHub",
    icon: github,
    link: "https://github.com/Sakshi-123-mishra",
  },
  {
    name: "LinkedIn",
    icon: linkedin,
    link: "https://www.linkedin.com/in/sakshi-m-69800a2a0/",
  },
  {
    name: "LeetCode",
    icon: leetcode,
    link: "https://leetcode.com/u/mishra_sakshi/",
  },
  {
    name: "CodeChef",
    icon: codechef,
    link: "https://www.codechef.com/users/sakshi_12185",
  },
  {
    name: "Codeforces",
    icon: codeforces,
    link: "https://codeforces.com/profile/sakshi_1201",
  },
] as const;
