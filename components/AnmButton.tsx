"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";

export default function AnmButton(props: any) {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const linkRef = useRef<HTMLDivElement>(null);
  const [animationKey, setAnimationKey] = useState(0);

  const handleMouseEnter = (event: any) => {
    setIsHovered(true);
    setAnimationKey((prevKey) => prevKey + 1);
    if (linkRef.current) {
      const parentRect = linkRef.current.getBoundingClientRect();
      const relativeX = event.clientX - parentRect.left;
      const relativeY = event.clientY - parentRect.top;
      setMousePosition({ x: relativeX, y: relativeY });
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      ref={linkRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`whitespace-nowrap  flex relative overflow-hidden gap-2  mt-5 lg:mt-0 rounded-full  ${props.extraClasses} text-[#fff]`}>
      <motion.div
        key={animationKey}
        initial={{ scale: 1 }}
        animate={{ scale: props.scale }}
        transition={{ duration: 1 }}
        className={`${
          isHovered ? "block" : "hidden"
        } absolute rounded-full w-2 h-2 ${props.anmColor}`}
        style={{
          top: `${mousePosition.y}px`,
          left: `${mousePosition.x}px`,
        }}></motion.div>
      <span className="relative z-20 mx-auto">
        {props.buttonText} <span className="text-xl">→</span>
      </span>
    </div>
  );
}
