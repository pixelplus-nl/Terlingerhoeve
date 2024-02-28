"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Squash as Hamburger } from "hamburger-react";
import { motion } from "framer-motion";

export default function Header() {
  const [isAnimating, setIsAnimating] = useState(false);

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

      <div className="flex justify-center items-center">
        {isAnimating && (
          <>
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 15 }}
              transition={{ duration: 1.3, ease: "easeIn" }}
              className="bg-lightGreen fixed rounded-full w-1 h-1 p-16"
            />
            <div className="absolute flex justify-center items-center top-0 w-full h-full z-20 left-0">
              <div>
                <ul>
                  <li>test1</li>
                  <li>test1</li>
                  <li>test1</li>
                </ul>
              </div>
            </div>
          </>
        )}
        <div className="bg-darkBeige relative z-20 md:bg-transparant w-12 h-12 flex justify-center items-center rounded-full">
          <button onClick={toggleAnimation}>
            <Hamburger size={23} />
          </button>
        </div>
      </div>
    </header>
  );
}
