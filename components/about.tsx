"use client";
import React, { useEffect } from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");
  // console.log(inView);
  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
      className="scroll-mt-28 mb-20 max-w-[45rem] text-left leading-7 sm:mb-10"
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <div className="text-lg">
        <p className=" font-normal mb-3">
          I&apos;m Mani Teja, a Full Stack Developer (Backend-Focused) based in Andhra Pradesh, India. I specialize in building scalable, high-performance applications using TypeScript, Rust, and Node.js, with a strong focus on clean architecture and backend efficiency.
        </p>
        <p className=" font-normal mb-3">
          I work across the stack crafting APIs with NestJS and Express, managing data with PostgreSQL and MongoDB, and deploying services through Docker, AWS, Terraform, and GitHub Actions. My passion lies in designing reliable systems, automating workflows, and ensuring seamless DevOps integration for smoother deployments.
        </p>
        <p className="font-normal mb-3">
          I&apos;m always exploring new technologies and cloud-native tools to refine my craft and build systems that are both powerful and developer-friendly.
        </p>
      </div>
    </motion.section>
  );
}
