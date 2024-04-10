"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Squash as Hamburger } from "hamburger-react";
import { motion } from "framer-motion";
import * as Accordion from "@radix-ui/react-accordion";
import { BsPlusLg } from "react-icons/bs";
import Link from "next/link";
import { useIntersectionObserver } from "@uidotdev/usehooks";

export default function Header(props: any) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAnimation = () => {
    setIsOpen(!isOpen);
  };

  const [ref, entry] = useIntersectionObserver({
    threshold: 0,
    root: null,
    rootMargin: "0px",
  });

  const variants = {
    open: {
      scale: 50,
    },
    closed: {
      scale: 50,
    },
  };

  return (
    <>
      <header
        className={`flex p-3 md:py-5 z-50 bg-beige ${
          entry?.isIntersecting ? "relative" : "sticky top-0 animate-menuDown"
        }  justify-between items-center max-w-[90rem] px-5 md:px-10 2xl:px-0 m-auto`}>
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
          <button className="flex gap-1 items-center group [&>span:nth-child(2)]:hover:translate-x-1 transition duration-800 ease-out">
            <span className="inline-block h-6 bg-left-bottom bg-gradient-to-r from-brown to-brown bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out cursor-pointer">
              Reserveer online
            </span>
            <span className="transition-all text-xl"> →</span>
          </button>
        </div>

        <Link href="/" className="w-52 md:w-64">
          <Image
            src="/Header/logoTerlingerhoeve.svg"
            width={500}
            height={500}
            alt="Logo terlingerhoeve"
            title="Logo terlingerhoeve"
          />
        </Link>

        <div className="flex justify-center items-center">
          {isOpen && (
            <>
              <div className="absolute top-14 overflow-y-scroll overflow-x-hidden z-20  left-5 md:top-0 md:left-0  md:flex-row-reverse md:gap-10 lg:gap-20 md:w-full md:h-screen  md:flex md:justify-center md:items-center text-[#fff]">
                <motion.div
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 1 }}>
                  <ul>
                    <Accordion.Root
                      className="w-full"
                      type="single"
                      collapsible>
                      {props.menuItems.map((item: any, index: number) => {
                        return (
                          <Accordion.Item
                            value={`item-${index}`}
                            className="pb-4"
                            key={index}>
                            <li>
                              <Accordion.Header>
                                <Accordion.Trigger className="w-full AccordionTrigger flex gap-28 md:gap-40 justify-between items-center">
                                  {index === 0 ? (
                                    <Link
                                      href="/"
                                      className="text-3xl lg:text-4xl">
                                      {item.label}
                                    </Link>
                                  ) : index === 2 ||
                                    index === 3 ||
                                    index === 5 ? (
                                    <Link
                                      href={item.uri}
                                      className="text-3xl lg:text-4xl">
                                      {item.label}
                                    </Link>
                                  ) : (
                                    <p className="text-3xl lg:text-4xl">
                                      {item.label}
                                    </p>
                                  )}

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
                                          <Link
                                            href={subItem.uri}
                                            className="text-xl">
                                            {subItem.label}
                                          </Link>
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
                    src="/Header/MenuImg.png"
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
          <div className="md:w-40 flex relative justify-end w-auto">
            <motion.div
              variants={variants}
              animate={isOpen ? "open" : "closed"}
              transition={{ duration: 1, ease: "easeIn" }}
              className="bg-lightGreen absolute  right-6 top-6 rounded-full origin-right-top w-1 h-1"
            />

            <div
              className={`relative z-20 ${
                isOpen ? "md:bg-lightGreen" : "md:bg-beige"
              } w-12 h-12 flex justify-center items-center rounded-full ${
                isOpen ? "bg-darkGreen/25" : "bg-darkBeige"
              }`}>
              <button onClick={toggleAnimation} className="relative">
                <Hamburger
                  toggle={setIsOpen}
                  toggled={isOpen}
                  color={`${isOpen ? "#fff" : "#B55A45"}`}
                  size={23}
                />
              </button>
            </div>
          </div>
        </div>
      </header>
      <div ref={ref} />
    </>
  );
}
