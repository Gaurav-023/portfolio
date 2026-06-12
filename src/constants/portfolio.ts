import { GithubIcon } from "@/components/ui/github";
import { LinkedinIcon } from "@/components/ui/linkedin";
import { SendIcon } from "@/components/ui/send";
import { TwitterIcon } from "@/components/ui/twitter";
import { Mail } from "lucide-react";


export type Contribution = {
  prUrl: string;
  private?: boolean;
  title?: string;
  url?: string; // a.k.a redirectUrl
  status?: 'open' | 'closed' | 'merged';
};

export interface Personal {
  name: string;
  surname: string;
  roles?: string[];
  location: string;
  timezone: string;
  bio: string;
  email: string;
  availability: string;
  avatar: string;
}

export interface Social {
  icon: any ;
  href: string;
  label: string;
}

export interface Experience {
  company: string;
  companyUrl?: string;
  role: string;
  period: string;
  startDate: string;
  description: string;
  points?: string[];
  linkedin?: string;
}

export interface Project {
  title: string;
  desc: string;
  tags: string[];
  href: string;
  github: string;
  className: string;
  collaborative?: boolean;
  featured?: boolean;
}


export interface SkillCategory {
  label: string;
  skills: string[];
}


export const PORTFOLIO_CONTENT: {
  personal: Personal;
  socials: Social[];
  // skills: string[];
  skillCategories: SkillCategory[];
  experience: Experience[];
  projects: Project[];
} = {
  personal: {
    name: "Hi, I'm Gaurav —",
    surname: "Fullstack Developer.",
    roles: ["Fullstack Developer.", "AI Engineer.", "Software Engineer."],
    location: "India",
    timezone: "Asia/Kolkata",
    bio: `I build production-ready web and AI applications using TypeScript, React, Next.js, Node.js, FastAPI, RAG — focused on clean UX and real user impact.`,
    email: "gauravsinghania812@gmail.com",
    availability: "Available for freelance",
    avatar: "/Profile.webp",
  },
  socials: [
    {
      icon: GithubIcon,
      href: "https://github.com/Gaurav-023",
      label: "GitHub",
    },
    {
      icon: LinkedinIcon,
      href: "https://www.linkedin.com/in/gaurav-6808aa249/",
      label: "LinkedIn",
    },
    { icon: TwitterIcon, href: "https://x.com/Uniques_Dev", label: "Twitter" },
    { icon: SendIcon, href: "mailto:gauravsinghania812@gmail.com", label: "Email" },
  ],
  // skills: [
  //   "Next.js",
  //   "FastAPI",
  //   "Python",
  //   "React",
  //   "TypeScript",
  //   "JavaScript",
  //   "Node.js",
  //   "Prisma ORM",
  //   "RAG",
  //   "Vector Databases",
  //   "langChain",
  //   "langGraph",
  //   "Redis",
  //   "Docker",
  //   "GCP",
  //   "AWS",
  //   "PostgreSQL",
  //   "MongoDB",
  //   "Claude Code",
  // ],
  skillCategories: [
    {
      label: "Frontend",
      skills: ["Next.js", "React", "TypeScript", "JavaScript"],
    },
    {
      label: "Backend",
      skills: ["FastAPI", "Node.js", "Prisma ORM", "PostgreSQL", "MongoDB", "Redis","Docker", "GCP", "AWS"],
    },
    // {
    //   label: "AI & Agents",
    //   skills: ["RAG", "Qdrant", "langChain", "langGraph", "Claude Code"],
    // },
    // {
    //   label: "Infrastructure",
    //   skills: [ ],
    // },
  ],


  experience: [
  {
    company: "Macro Global",
    role: "Web Developer",
    period: "Aug 2025 - Jan 2026",
    startDate: "2025-11-01",
    description: "Built an enterprise SaaS toolkit platform with full-stack development across frontend and backend systems.",
    points: [
      "Architected and developed an enterprise SaaS platform with multi-role RBAC for structured team workflows.",
      "Built internal productivity tools including file conversion utilities (PDF to image, image format conversion).",
      "Contributed to end-to-end feature development including UI, REST APIs, and database design.",
    ],
    // linkedin: "Will Add in Future",
  },
],


  projects: [
    {
      title: "Add later",
      desc: "#",
      tags: ["Next.js", "Hono", "webhook", "Gemini API","Open AI"],
      href: "#",
      github: "#",
      className: "md:col-span-1",
    },
    {
      title: "#",
      desc: "#",
      tags: ["Next.js", "Hono", "Sarvam AI"],
      href: "#",
      github: "#",
      className: "md:col-span-1",
    },
    
  ],

};