import React from "react";
import { FaXTwitter, FaHashnode } from "react-icons/fa6";
import { BiLogoLinkedin } from "react-icons/bi";
import { FiGithub, FiTwitter, FiX } from "react-icons/fi";
import { link } from "fs";
import inscribe from '../public/inscribe.png'
import easyConnect from '../public/easyConnect.png'
import TH from '../public/TH.png'
export const socials = [
  {
    name: "GitHub",
    link: "https://github.com/Maniteja0126",
    icon: React.createElement(FiGithub),
  },
  {
    name: "X.com",
    link: "https://x.com/maniteja2601",
    icon: React.createElement(FaXTwitter),
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/mani-teja-305b77287/",
    icon: React.createElement(BiLogoLinkedin),
  },
  // {
  //   name: "Hashnode",
  //   link: "",
  //   icon: React.createElement(FaHashnode),
  // },
];

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;


export const projectsData = [
  {
    title: "Inscribe",
    description:
      "Inscribe is a dynamic, feature-rich blog site offering a seamless, intuitive platform for users to publish and explore engaging content.",
    tags: [
      "React.js",
      "PostgreSQL",
      "Tailwind",
      "TypeScript",
      "Cloudflare Workers",
    ],
    imageUrl: inscribe,
    link: "https://github.com/Maniteja0126/Inscribe-Where-Words-Find-Wings",
    deployUrl: "https://inscribe-where-words-find-wings.vercel.app/",
  },
  {
    title: "EasyConnect",
    description:
      "EasyConnect is a MERN stack messaging app with  real-time messaging via Socket.io, online user status .",
    tags: [
      "React",
      "JavaScript",
      "Node.js",
      "Socket.io",
      "Tailwind",
      "Zustand",
      "MongoDB",
    ],
    imageUrl: easyConnect,
    link: "https://github.com/Maniteja0126/Chat-App",
    deployUrl: "https://easy-connect-i6bm.onrender.com/",
  },
  {
    title: "Tourist Heaven",
    description: "Tourist Heaven is an online property rental platform enabling users to search, book, and manage property rentals.",
    tags: [
      "React",
      "Next.js",
      "Tailwind",
      "Sanity",
      "Metamask",
      "thirdweb",
      "TypeScript",
      "Web3",
    ],
    imageUrl: TH,
    link: "https://github.com/Maniteja0126/breeze_travel_frontend",
    deployUrl: "https://touristheaven.vercel.app/",
  },
] as const;

export const skillsData = [
  "JavaScript",
  "TypeScript",
  "ReactJS",
  "Next.js",
  "Node.js",
  "Tailwind",
  "MongoDB",
  "PostgreSQL",
  "Express",
  "Java",
  "Redis",
  "Rust",
  "Prisma",
  "Docker",
  "Kubernetes",
  "Web3",
  "WebSockets"
] as const;
