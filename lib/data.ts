import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaBriefcase } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

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
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated Bachelor's Degree",
    cardTitle: "Indang, Cavite, PH",
    cardSubtitle:
      "I graduated after 4 years of studying. I immediately found a job after 5 months",
    cardDetailedText: "Jan 2020",
  },
  
  {
    title: "Jr. Frontend Software Engineer",
    cardTitle: "Parañaque, NCR, PH",
    cardSubtitle:
      "I worked as a front-end developer for 6 months. I faced pressure and fortunate enough to build self-confidence",
    cardDetailedText: "May 2020 - Nov 2020",
  },
  {
    title: "Data Encoder",
    cardTitle: "General Trias, Cavite, PH",
    cardSubtitle:
      "Work at a school university to learn other skills aside from programming like data entry and automation",
    cardDetailedText: "May 2021 - June 2022",
  },
  {
    title: "Jr. Java Developer",
    cardTitle: "Dasmariñas, Cavite, PH",
    cardSubtitle:
      "To fulfill full-stack in the future, I focus on design, development, testing (unit & automation), implementation and maintenance of specific software solutions in java while maintaining a focus on quality principles.",
    cardDetailedText: "Jun 2022 - Feb 2023",
  },
  {
    title: "Packaged App Development Analyst",
    cardTitle: "Taguig, NCR, PH",
    cardSubtitle: "This is my current work. Focus on upskilling and creating image for the future as programmer", 
    cardDetailedText: "March 2023 - present",
  },
] as const;

export const projectsData = [
  {
    title: "CorpComment",
    cardSubtitle:
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: corpcommentImg,
  },
  {
    title: "rmtDev",
    cardSubtitle:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Word Analytics",
    cardSubtitle:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Git",
  "Tailwind",
  "MYSQL",
  "Java EE",
  "Spring",
  "Springboot",
  "REST",
  "FTP",
] as const;
