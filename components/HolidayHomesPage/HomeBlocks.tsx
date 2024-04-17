"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const showBlocks = {
  opacity: 1,
  display: "block",
  height: "auto",
};

const hideBlocks = {
  opacity: 0,
  height: 0,
};

const block = [
  { title: "1" },
  { title: "2" },
  { title: "3" },
  { title: "4" },
  { title: "5" },
  { title: "6" },
  { title: "7" },
  { title: "8" },
];

//x

export default function HomeBlocks() {
  const [viewAll, setViewAll] = useState(false);

  return (
    <>
      <div className="flex flex-col gap-10 transition-all relative overflow-hidden">
        {block.slice(0, 3).map((item: any, index: number) => {
          return (
            <div key={index} className="flex gap-3 bg-brown w-full h-72"></div>
          );
        })}
      </div>

      <motion.div
        initial={hideBlocks}
        animate={viewAll ? showBlocks : hideBlocks}
        transition={{ duration: 3, ease: "easeOut" }}>
        <div className="flex flex-col pt-10 bg-beige gap-10 overflow-hidden m-auto">
          {block.slice(3).map((item: any, index: number) => (
            <div key={index} className="flex gap-3">
              <div
                key={index}
                className="flex gap-3 bg-brown w-full h-72"></div>
            </div>
          ))}
        </div>
      </motion.div>

      <div className="flex text-sm pt-10 bg-beige relative justify-center md:justify-start">
        <button
          onClick={() => setViewAll((viewAll) => !viewAll)}
          className="text-[#fff] ml-7 w-fit px-3 py-2 rounded-full font-thin bg-brown">
          {viewAll ? "Minder woningen bekijken ↑" : "Meer woningen bekijken ↓"}
        </button>
      </div>
    </>
  );
}
