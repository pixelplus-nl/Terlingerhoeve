"use client";

import { motion } from "framer-motion";
import { useState } from "react";

type OpenItems = { [key: number]: boolean };

const variants = {
  open: {
    height: "auto",
  },
  closed: {
    height: "0",
  },
};

export default function Faq(props: any) {
  const [openItem, setOpenItem] = useState<OpenItems>({});

  const toggleItem = (index: number) => {
    setOpenItem((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  return (
    <div className="md:grid grid-cols-2 flex flex-col gap-x-10 gap-y-5 mb-10">
      {props.data.map((item: any, index: number) => {
        return (
          <div
            key={index}
            className="overflow-hidden md:even:mt-10 h-fit w-full relative border-brown/20 border-[1px] rounded-xl p-5">
            <button
              onClick={() => toggleItem(index)}
              className="flex w-full text-left gap-5 items-center justify-between">
              <p>{item.question}</p>
              <div className="flex justify-center">
                <div className="w-10 text-2xl">
                  <span
                    className={`${
                      openItem[index] ? "rotate-90" : "rotate-0"
                    } transition-all flex origin-center justify-center`}>
                    →
                  </span>
                </div>
              </div>
            </button>
            <motion.div
              initial={"closed"}
              variants={variants}
              transition={{ duration: 1 }}
              animate={openItem[index] ? "open" : "closed"}>
              <p className="text-sm pt-5 font-medium">{item.answer}</p>
            </motion.div>
          </div>
        );
      })}
    </div>
  );
}
