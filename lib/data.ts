import React from "react";
import { FaXTwitter, FaHashnode } from "react-icons/fa6";
import { BiLogoLinkedin } from "react-icons/bi";
import { FiGithub, FiTwitter, FiX } from "react-icons/fi";
import { link } from "fs";
import inscribe from '@/public/inscribe.png';
import easyConnect from '@/public/easyConnect.png';
import drawSync from '@/public/DrawSync.png';
import TH from '@/public/TH.png';
import klinpe from '@/public/klinepe.png';
import sniq from '@/public/sniq.png';
import wpl from '@/public/wpl.png';
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
    name: "Experience",
    hash: "#experience",
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
    title : "Klinpe",
    description : "A decentralized payments mobile-first app for web and LIFF platforms, featuring escrow, bill-split, and cashback smart contracts on Kaia blockchain with real-time notifications.",
    tags : [
      "Next.js",
      "Node.js",
      "WebSockets",
      "TypeScript",
      "Redis",
      "GraphQL",
      "Kaia Blockchain",
      "Envio",
    ],
    imageUrl: klinpe,
    link: "",
    deployUrl: "https://klinepe-two.vercel.app/",
  },
  {
    title : "Sniq",
    description : "A memecoin trading and discovery platform on StarkNet with live portfolio tracking, real-time token launches via Rust indexer, and multi-aggregator swaps for minimal slippage.",
    tags : [
      "Rust",
      "Rocket.rs",
      "MongoDB",
      "Redis",
      "Next.js",
      "StarkNet",
      "Apibara",
      "WebSockets",
      "TypeScript"
    ],
    imageUrl: sniq,
    link: "",
    deployUrl: "https://beta.sniq.fun/",
  },
  {
    title : "WPL Earn",
    description : "A bounty and grants platform for sponsors and developers with role-based access, automated USDT payouts via CopperX, interactive leaderboards, and AWS deployment with CI/CD.",
    tags : [
      "TypeScript",
      "Node.js",
      "Nest.js",
      "PostgreSQL",
      "Prisma",
      "AWS S3",
      "GitHub Actions",
      "Next.js"
    ],
    imageUrl: wpl,
    link: "",
    deployUrl: "",
  },
  {
    title: "DrawSync",
    description:
      "DrawSync is a real-time collaborative drawing app, enabling users to draw and interact in shared rooms.",
    tags: [
      "Node.js",
      "Next.js",
      "Tailwind",
      "TypeScript",
      "WebSockets",
      "Turborepo",
      "Redis",
      "PostgreSQL/Prisma",
    ],
    imageUrl: drawSync,
    link: "https://github.com/Maniteja0126/DrawSync",
    deployUrl: "https://drawsync-frontend.onrender.com/",
  },
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
      "Node.js",
      "Express.js",
      "MongoDB"
    ],
    imageUrl: TH,
    link: "https://github.com/Maniteja0126/breeze_travel_frontend",
    deployUrl: "https://touristheaven.vercel.app/",
  },
] as const;

export const experiencesData = [
  {
    title: "Fullstack Developer Intern (Backend-focused)",
    location: "RogueDevs • Remote",
    description:
    `• Contributed to backend services and blockchain indexers under senior engineer guidance \n• Implemented API endpoints and event ingestion pipelines \n• Assisted in WebSocket-based real-time updates using Redis pub/sub`,
    icon: React.createElement(FiGithub),
    date: "May 2025 – June 2025",
  },
  {
    title: "Fullstack Developer (Backend-focused)",
    location: "RogueDevs • Remote",
    description:
    `• Designed and implemented Node.js/Rust microservices for blockchain indexers and APIs, processing 10k+ events/day \n• Built WebSocket-based real-time streaming using Redis pub/sub and Socket.IO, reducing latency by 60% \n• Developed modular service layers with PostgreSQL, MongoDB, and Redis \n• Automated monitoring and log rotation, improving incident response time by 40%`,
    icon: React.createElement(FiGithub),
    date: "July 2025 – Present",
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
  "AWS",
  "Web3",
  "WebSockets"
] as const;
