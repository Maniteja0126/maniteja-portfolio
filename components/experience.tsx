"use client";
import React from "react";
import SectionHeading from "./section-heading";
import { experiencesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";

export default function Experience() {
  const { ref } = useSectionInView("Experience");

  return (
    <section
      ref={ref}
      className="mb-20 scroll-mt-28 max-w-[53rem] text-center sm:mb-40"
      id="experience"
    >
      <SectionHeading>My Experience</SectionHeading>
      <div className="mt-4 flex flex-col gap-8">
        {experiencesData.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
            className="group mb-3 sm:mb-8 last:mb-0"
          >
            <div className="bg-gray-100 dark:bg-white/10 border border-black/5 dark:border-white/5 rounded-lg px-5 py-4 sm:py-6 hover:bg-gray-200 dark:hover:bg-white/20 transition-all duration-300">
              <div className="pt-4 pb-7 sm:pl-10 sm:pr-2 sm:pt-10  flex flex-col ">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-2xl font-semibold text-left">{item.title}</h3>
                  <div className="text-sm text-gray-600 dark:text-white/70">
                    {item.date}
                  </div>
                </div>
                <p className="font-normal text-gray-700 dark:text-white/70 text-left mb-2">
                  {item.location}
                </p>
                <div className="mt-2 leading-relaxed text-gray-700 dark:text-white/70 text-left">
                  {item.description.split('\n').map((line, index) => (
                    <p key={index} className="mb-1">
                      {line}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
