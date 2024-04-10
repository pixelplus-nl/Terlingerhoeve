"use client";

import Link from "next/link";
import SearchBookDropdown from "./SearchBookDropdown";
import { useRef, useState } from "react";
import { motion } from "framer-motion";

export default function SearchBookTile() {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const linkRef = useRef<HTMLDivElement>(null); // Reference to the Link component
  const [animationKey, setAnimationKey] = useState(0);

  const handleMouseEnter = (event: any) => {
    setIsHovered(true);
    setAnimationKey((prevKey) => prevKey + 1);
    // Check if linkRef.current is not null before accessing its properties
    if (linkRef.current) {
      const parentRect = linkRef.current.getBoundingClientRect();
      const relativeX = event.clientX - parentRect.left;
      const relativeY = event.clientY - parentRect.top;
      setMousePosition({ x: relativeX, y: relativeY });
      console.log(`Mouse entered at: X=${relativeX}, Y=${relativeY}`);
    }
  };
  const handleMouseLeave = (event: any) => {
    setIsHovered(false);
  };

  const dynamicStyle: React.CSSProperties = {
    position: "absolute",
    top: `${mousePosition.y}px`,
    left: `${mousePosition.x}px`,
    width: "10px",
    height: "10px",
    borderRadius: "50%",
    backgroundColor: "#fff",
  };

  return (
    <div className="flex justify-center relative z-20">
      <div className="bg-[#fff] items-center w-full mt-3  px-5 lg:px-10 lg:mx-5 xl:mx-0 rounded-3xl lg:rounded-full gap-8  py-5 lg:flex  justify-between text-[#556A76]">
        <h2 className="text-xl md:text-3xl lg:text-2xl text-center lg:text-left">
          Zoek & boek je
          <br className="hidden lg:block" /> vakantiewoning
        </h2>
        <div className="grid grid-cols-2 max-w-sm lg:max-w-none mx-auto lg:grid-rows-1 lg:grid-cols-4 grid-rows-2 gap-3 mt-3 lg:mt-0">
          <div>
            <SearchBookDropdown label="Aankomst" />
          </div>
          <div>
            <SearchBookDropdown label="Verblijfsduur" />
          </div>
          <div>
            <SearchBookDropdown label="Personen" />
          </div>
          <div>
            <SearchBookDropdown label="Slaapkamers" />
          </div>
        </div>
        <div
          ref={linkRef}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className={`bg-[#A0AE9C] ${
            isHovered ? "bg-brown" : ""
          } whitespace-nowrap flex relative overflow-hidden items-center gap-2 w-fit m-auto mt-5 lg:mt-0 rounded-full  p-5   text-[#fff]`}>
          <motion.div
            key={animationKey}
            initial={{ scale: 1 }}
            animate={{ scale: 40 }}
            transition={{ duration: 1 }}
            className={`${isHovered ? "block" : "hidden"}`}
            style={dynamicStyle}></motion.div>
          Zoek & boek <span className="text-xl">→</span>
        </div>
      </div>
    </div>
  );
}
