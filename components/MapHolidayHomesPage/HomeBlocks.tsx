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

//x

export default function HomeBlocks(props: any) {
  const [viewAll, setViewAll] = useState(false);

  return (
    <div className="relative h-full">
      <div className="flex flex-col gap-10 transition-all relative overflow-hidden">
        {props.data.page.map_holiday_homes_page.apartments
          .slice(0, 3)
          .map((item: any, index: number) => {
            return (
              <div key={index} className="flex gap-3">
                <div className="bg-[#fff] text-sm h-5 w-5 rounded-full flex justify-center items-center">
                  <span className="text-brown">{item.mapNumber}</span>
                </div>
                <div>
                  <p className="text-blue">{item.apartment}</p>
                  <button className="px-3 mt-3 py-2 text-sm bg-blue flex w-fit text-[#fff] rounded-full">
                    Bekijk de woning →
                  </button>
                </div>
              </div>
            );
          })}
      </div>

      <motion.div
        initial={hideBlocks}
        animate={viewAll ? showBlocks : hideBlocks}
        transition={{ duration: 3, ease: "easeOut" }}>
        <div className="flex flex-col mt-10 pb-10 gap-10 overflow-hidden m-auto">
          {props.data.page.map_holiday_homes_page.apartments
            .slice(3)
            .map((item: any, index: number) => (
              <div key={index} className="flex gap-3">
                <div className="bg-[#fff] text-sm h-5 w-5 rounded-full flex justify-center items-center">
                  <span className="text-brown">{item.mapNumber}</span>
                </div>
                <div>
                  <p className="text-blue">{item.apartment}</p>
                  <button className="px-3 mt-3 py-2 text-sm bg-blue flex w-fit text-[#fff] rounded-full">
                    Bekijk de woning →
                  </button>
                </div>
              </div>
            ))}
        </div>
      </motion.div>

      <div className="flex text-sm pb-10 bg-beige relative justify-center md:justify-start">
        <button
          onClick={() => setViewAll((viewAll) => !viewAll)}
          className="text-[#fff] ml-7 w-fit px-3 py-2 rounded-full font-thin bg-brown">
          {viewAll ? "Minder woningen bekijken ↑" : "Meer woningen bekijken ↓"}
        </button>
      </div>
    </div>
  );
}
