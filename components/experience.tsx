"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { Chrono } from 'react-chrono';
import { experiencesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { useTheme } from "@/context/theme-context";

export default function Experience() {
  const { ref } = useSectionInView("Experience");
  const { theme } = useTheme();

  return (
    <section id="experience" ref={ref} className="scroll-mt-28 mb-28 sm:mb-40">
      <SectionHeading>My experience</SectionHeading>
      <Chrono
      items={experiencesData}
      mode="VERTICAL_ALTERNATING"
      itemWidth={150}
      cardWidth={500}
      hideControls
      />
    </section>
  );
}
