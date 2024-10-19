"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        After graduating with a degree in{" "}
        <span className="font-medium">BS Information Technology</span>, I landed
        in different jobs to fulfill my passion in{" "}
        <span className="font-medium">programming</span>.{" "}
        <span className="font-small">
          There's no better feeling than
          <span className="italic font-bold">
            {" "}
            cracking a tough coding problem{" "}
          </span>{" "}
          – that's what makes programming so fulfilling for me.
        </span>{" "}
        <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem. My core stack
        is <span className="font-medium">React, Java (Spring), and mySQL</span>.
        I am also familiar with TypeScript, Angular, and PHP. I am always
        looking to learn new technologies.
      </p>

      <p>
        <span className="italic">When I'm not working</span>, I enjoy playing
        computer games, watching vlog, playing organ, and travel (either commute or motorcycle).  I am currently
        learning about{" "}
        <span className="font-small">life hacks and public speaking</span>. I'm
        also learning how to play the piano.
      </p>
    </motion.section>
  );
}
