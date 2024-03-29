"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Squash as Hamburger } from "hamburger-react";
import { motion } from "framer-motion";
import * as Accordion from "@radix-ui/react-accordion";
import { BsPlusLg } from "react-icons/bs";
import { MdArrowRightAlt } from "react-icons/md";

export default function Header(props: any) {
  const [isOpen, setIsopen] = useState(false);

  const toggleAnimation = () => {
    setIsopen(!isOpen);
  };

  useEffect(() => {
    if (isOpen === true) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  return (
    <header className="flex p-3 md:py-5 z-50  relative justify-between items-center max-w-[90rem] px-5 md:px-10 2xl:px-0 m-auto">
      <div className="bg-darkBeige w-12 h-12 flex justify-center items-center rounded-full md:hidden">
        <Image
          src="/Header/callIcon.svg"
          width={25}
          height={25}
          alt="Bel icoon"
          title="Bel icoon"
        />
      </div>

      <div className="md:w-40 w-auto hidden md:block">
        <button className="flex gap-1 items-center group [&>span]:hover:translate-x-1 transition duration-800 ease-out">
          <p className="inline-block h-6 lg:h-7 bg-left-bottom bg-gradient-to-r from-brown to-brown bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out cursor-pointer">
            Reserveer online
          </p>
          <span className="transition-all">
            <MdArrowRightAlt size={25} />
          </span>
        </button>
      </div>

      <div className="w-52 md:w-64">
        <Image
          src="/Header/logoTerlingerhoeve.svg"
          width={500}
          height={500}
          alt="Logo terlingerhoeve"
          title="Logo terlingerhoeve"
        />
      </div>

      <div className="flex justify-center items-center">
        {isOpen && (
          <>
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 15 }}
              transition={{ duration: 1, ease: "easeIn" }}
              className="bg-lightGreen fixed rounded-full w-1 h-1 p-16 md:p-40"
            />

            <div className="absolute top-14 overflow-y-scroll h-screen overflow-x-hidden z-20  left-5 md:top-0 md:left-0  md:flex-row-reverse md:gap-10 lg:gap-20 md:w-screen md:h-screen  md:flex md:justify-center md:items-center text-[#fff]">
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 1 }}>
                <ul>
                  <Accordion.Root className="w-full" type="single" collapsible>
                    {props.menuItems.map((item: any, index: number) => {
                      return (
                        <Accordion.Item
                          value={`item-${index}`}
                          className="pb-4">
                          <li key={index}>
                            <Accordion.Header>
                              <Accordion.Trigger className="w-full AccordionTrigger flex gap-28 md:gap-40 justify-between items-center">
                                <p className="text-3xl lg:text-4xl">
                                  {item.label}
                                </p>
                                <BsPlusLg
                                  size={25}
                                  className={`AccordionChevron transition-all origin-center ${
                                    index === 1 || index === 4
                                      ? "block"
                                      : "hidden"
                                  }`}
                                  aria-hidden
                                />
                              </Accordion.Trigger>
                            </Accordion.Header>
                            <Accordion.Content className="AccordionContent radix-state-open:animate-slideDown radix-state-closed:animate-slideUp">
                              <ul>
                                {item.items.map(
                                  (subItem: any, index: number) => {
                                    return (
                                      <li key={index}>
                                        <p className="text-xl">
                                          {subItem.label}
                                        </p>
                                      </li>
                                    );
                                  }
                                )}
                              </ul>
                            </Accordion.Content>
                          </li>
                        </Accordion.Item>
                      );
                    })}
                  </Accordion.Root>
                </ul>
              </motion.div>
              <motion.div
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 1.5 }}
                className="flex justify-center mt-5 md:mt-0">
                <Image
                  src="/MenuImg.png"
                  width={400}
                  height={400}
                  alt="Mobile menu image"
                  title="Mobile menu image"
                  className="w-72 md:w-80 lg:w-[30rem]"
                />
              </motion.div>
            </div>
          </>
        )}
        <div className="md:w-40 flex justify-end w-auto">
          <div
            className={`relative z-20 ${
              isOpen ? "md:bg-lightGreen" : "md:bg-beige"
            } w-12 h-12 flex justify-center items-center rounded-full ${
              isOpen ? "bg-darkGreen/25" : "bg-darkBeige"
            }`}>
            <button onClick={toggleAnimation}>
              <Hamburger color={`${isOpen ? "#fff" : "#B55A45"}`} size={23} />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
