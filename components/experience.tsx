import React, { useState, useEffect } from "react";
import { experiencesData } from "../lib/data";
import { motion } from "framer-motion";

const ExperienceTimeline = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize(); // Initial check

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        type: "tween",
        duration: 0.2,
      }}
      id="experience"
    >
      <div className="max-w-full rounded overflow-hidden shadow-lg mb-10">
        <div className="px-6 py-4 mb-10">
          <h2 className="font-bold text-xl dark:text-white mb-2">
            Experience Timeline
          </h2>
          <ul>
            {experiencesData.map((experience, index) => (
              <li
                key={index}
                className={`relative flex items-baseline gap-6 pb-5 ${
                  !isMobile
                    ? "before:absolute before:left-[5.5px] before:h-full before:w-[1px] before:bg-gray-400"
                    : ""
                }`}
              >
                {!isMobile && (
                  <div className="before:absolute before:left-[5.5px] before:h-full before:w-[1px] before:bg-gray-400">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
                      className="bi bi-circle-fill fill-gray-400"
                      viewBox="0 0 16 16"
                    >
                      <circle cx="8" cy="8" r="8" />
                    </svg>
                  </div>
                )}
                <div>
                  <motion.p
                    className="text-lg font-bold text-gray-800 dark:text-white"
                    initial={{ x: "-100%" }}
                    animate={{ x: 0 }}
                    transition={{
                      duration: 0.5,
                      ease: "easeInOut",
                      delay: 0.5,
                    }}
                  >
                    {experience.title}
                  </motion.p>
                  <motion.p
                    className="text-sm font-light text-gray-800 dark:text-white"
                    initial={{ x: "-200%" }}
                    animate={{ x: 0 }}
                    transition={{
                      duration: 0.75,
                      ease: "easeInOut",
                      delay: 0.75,
                    }}
                  >
                    {experience.location}
                    </motion.p>
                    <motion.p
                    className="text-sm font-light text-gray-800 dark:text-white"
                    initial={{ x: "-200%" }}
                    animate={{ x: 0 }}
                    transition={{
                      duration: 0.75,
                      ease: "easeInOut",
                      delay: 0.75,
                    }}
                  >

                    {experience.desc}
                    </motion.p>
                    <motion.p
                    className="text-sm font-light text-gray-800 dark:text-white"
                    initial={{ x: "-200%" }}
                    animate={{ x: 0 }}
                    transition={{
                      duration: 0.75,
                      ease: "easeInOut",
                      delay: 0.75,
                    }}
                  >
                    {experience.date}
                    </motion.p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
};

export default ExperienceTimeline;
