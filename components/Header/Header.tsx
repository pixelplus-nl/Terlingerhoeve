"use client";
import React, { useState } from "react"; // Import useState
import Image from "next/image";
import { Squash as Hamburger } from "hamburger-react";
import { motion } from "framer-motion";

export default function Header() {
  const [isAnimating, setIsAnimating] = useState(false); // Create state for animation

  // Function to toggle animation state
  const toggleAnimation = () => {
    setIsAnimating(!isAnimating);
  };

  return (
    <header className="flex p-3 justify-between items-center ">
      <div className="bg-darkBeige w-12 h-12 flex justify-center items-center rounded-full md:hidden">
        <Image
          src="/callIcon.svg"
          width={25}
          height={25}
          alt="Bel icoon"
          title="Bel icoon"
        />
      </div>

      <div className="hidden md:block">
        <button>Reserveer online</button>
      </div>

      <div className="w-52">
        <Image
          src="/logoTerlingerhoeve.svg"
          width={500}
          height={500}
          alt="Logo terlingerhoeve"
          title="Logo terlingerhoeve"
        />
      </div>

      <div className="relative flex justify-center items-center">
        {isAnimating && ( // Conditionally render animation
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 500 }}
            transition={{ duration: 1 }}
            className="bg-lightGreen fixed rounded-full w-1 h-1"
          />
        )}
        <div className="bg-darkBeige relative z-20 md:bg-transparant w-12 h-12 flex justify-center items-center rounded-full">
          <button onClick={toggleAnimation}>
            {" "}
            {/* Attach onClick event handler */}
            <Hamburger size={23} />
          </button>
        </div>
      </div>
    </header>
  );
}
