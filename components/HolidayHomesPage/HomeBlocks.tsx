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

export default function HomeBlocks() {
  const [viewAll, setViewAll] = useState(false);

  return (
    <>
      <div className="flex flex-col gap-10 transition-all relative overflow-hidden">
        {block.slice(0, 3).map((block, index) => (
          <div key={index} className="bg-brown h-72 text-[#fff]">
            {block.title}
          </div>
        ))}
      </div>
      <motion.div
        initial={hideBlocks}
        animate={viewAll ? showBlocks : hideBlocks}
        transition={{ duration: 3, ease: "easeOut" }}
        className="transition-all relative overflow-hidden">
        <div className="flex flex-col gap-10">
          {block.slice(3).map((block, index) => (
            <div key={index} className="bg-brown h-72 text-[#fff]">
              {block.title}
            </div>
          ))}
        </div>
      </motion.div>

      <div className="flex mt-10 justify-center">
        <button
          onClick={() => setViewAll((viewAll) => !viewAll)}
          className="text-[#fff] w-fit px-3 py-2 rounded-full mx-auto font-thin bg-brown">
          {viewAll ? "Minder woningen bekijken ↑" : "Meer woningen bekijken ↓"}
        </button>
      </div>
    </>
  );
}
