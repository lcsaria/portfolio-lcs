"use client";

import React,{ useState, useEffect } from "react";
import SectionHeading from "./section-heading";
import { Chrono } from 'react-chrono';
import { experiencesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { useTheme } from "@/context/theme-context";

export default function Experience() {
  const { ref } = useSectionInView("Experience");
  const { theme } = useTheme();
  const [isClient, setIsClient] = useState(false); // State to track if the component is running on the client side


  
  return (
    
    <section id="experience" ref={ref} className="scroll-mt-28 mb-28 sm:mb-40">
      {isClient && <p>{window.innerWidth}</p>}
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
