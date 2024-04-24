"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Squash as Hamburger } from "hamburger-react";
import { motion } from "framer-motion";
import * as Accordion from "@radix-ui/react-accordion";
import { BsPlusLg } from "react-icons/bs";
import Link from "next/link";
import { useIntersectionObserver } from "@uidotdev/usehooks";
import { useMediaQuery } from "usehooks-ts";

export default function Header(props: any) {
  const [isOpen, setIsOpen] = useState(false);
  const isSmall = useMediaQuery("(max-width: 768px)");
  const isBetween = useMediaQuery("(max-width: 1024px)");
  const isBig = useMediaQuery("(max-width: 1324px)");

  const toggleAnimation = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [isOpen]);

  const [ref, entry] = useIntersectionObserver({
    threshold: 0,
    root: null,
    rootMargin: "0px",
  });

  const variants = isSmall
    ? {
        open: {
          scale: 500,
        },
        closed: {
          scale: 0,
        },
      }
    : isBetween
    ? {
        open: {
          scale: 800,
        },
        closed: {
          scale: 0,
        },
      }
    : isBig
    ? {
        open: {
          scale: 1100,
        },
        closed: {
          scale: 0,
        },
      }
    : {
        open: {
          scale: 1300,
        },
        closed: {
          scale: 0,
        },
      };

  const variantsWrapper = {
    open: {
      display: "block",
    },
    closed: {
      display: "none",
    },
  };

  const variantsContent = {
    open: {
      y: 0,
      opacity: 1,
      display: "flex",
      delay: 1,
    },
    closed: {
      y: 50,
      opacity: 0,
      transitionEnd: {
        display: "none",
      },
    },
  };

  return (
    <>
      <header
        className={` p-3 md:py-5 z-50 bg-beige ${
          entry?.isIntersecting ? "relative" : "sticky top-0 animate-menuDown"
        }   px-5 md:px-10 2xl:px-0 m-auto `}>
        <div className="max-w-[90rem] justify-between mx-auto flex items-center">
          <div className="bg-darkBeige w-12 h-12 flex justify-center items-center rounded-full md:hidden">
            <Link href="tel:0434571806">
              <Image
                src="/Header/callIcon.svg"
                width={25}
                height={25}
                alt="Bel icoon"
                title="Bel icoon"
              />
            </Link>
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

          <motion.div
            initial="closed"
            variants={variantsWrapper}
            animate={isOpen ? "open" : "closed"}
            transition={{
              duration: 0.7,
              ease: "easeIn",
              delay: isOpen ? 0 : 2,
            }}
            className="absolute w-screen h-screen overflow-hidden max-h-screen top-0 left-0">
            <motion.div
              initial="closed"
              variants={variants}
              animate={isOpen ? "open" : "closed"}
              transformTemplate={(props, transform) =>
                transform.replace(" translateZ(0)", "")
              }
              transition={{
                duration: 0.7,
                ease: "easeIn",
                delay: isOpen ? 0 : 0.5,
              }}
              className="bg-lightGreen absolute  right-0 top-0 rounded-full  w-1 h-1"
            />
          </motion.div>

          <motion.div
            initial="closed"
            variants={variantsContent}
            animate={isOpen ? "open" : "closed"}
            transition={{
              duration: 0.7,
              ease: "easeIn",
              delay: isOpen ? 1 : 0,
            }}
            className="absolute flex-col top-14 w-full left-0  z-20 px-5 md:top-0 md:left-0  md:flex-row-reverse md:gap-10 lg:gap-20 md:w-full md:h-screen  md:flex md:justify-center md:items-center text-[#fff]">
            <ul className="h-auto overflow-x-hidden">
              <Accordion.Root className="w-full" type="single" collapsible>
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
                                onClick={toggleAnimation}
                                className="text-3xl group lg:text-4xl">
                                <span className="inline-block bg-left-bottom bg-gradient-to-r from-[#fff] to-[#fff] bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out cursor-pointer">
                                  {item.label}
                                </span>
                              </Link>
                            ) : index === 2 || index === 3 || index === 5 ? (
                              <Link
                                href={item.uri}
                                onClick={toggleAnimation}
                                className="text-3xl group lg:text-4xl">
                                <span className="inline-block bg-left-bottom bg-gradient-to-r from-[#fff] to-[#fff] bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out cursor-pointer">
                                  {item.label}
                                </span>
                              </Link>
                            ) : (
                              <p className="text-3xl group whitespace-nowrap lg:text-4xl">
                                <span className="inline-block bg-left-bottom bg-gradient-to-r from-[#fff] to-[#fff] bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px]  transition-all duration-500 ease-out cursor-pointer">
                                  {item.label}
                                </span>
                              </p>
                            )}

                            <BsPlusLg
                              size={25}
                              className={`AccordionChevron transition-all origin-center ${
                                index === 1 || index === 4 ? "block" : "hidden"
                              }`}
                              aria-hidden
                            />
                          </Accordion.Trigger>
                        </Accordion.Header>
                        <Accordion.Content className="AccordionContent radix-state-open:animate-slideDown radix-state-closed:animate-slideUp">
                          <ul className="pl-3 pt-3">
                            {item.items.map((subItem: any, index: number) => {
                              return (
                                <li className="group" key={index}>
                                  <Link
                                    href={subItem.uri}
                                    onClick={toggleAnimation}
                                    className="text-xl font-thin inline-block bg-left-bottom bg-gradient-to-r from-[#fff] to-[#fff] bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px]  transition-all duration-500 ease-out cursor-pointer">
                                    {subItem.label}
                                  </Link>
                                </li>
                              );
                            })}
                          </ul>
                        </Accordion.Content>
                      </li>
                    </Accordion.Item>
                  );
                })}
              </Accordion.Root>
            </ul>

            <motion.div
              initial="closed"
              variants={variantsContent}
              animate={isOpen ? "open" : "closed"}
              transition={{
                duration: 1,
                ease: "easeIn",
                delay: isOpen ? 1 : 0,
              }}
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
          </motion.div>

          <div className="flex justify-end w-auto">
            <div
              className={`relative z-20  flex justify-center items-center rounded-full`}>
              <button
                onClick={toggleAnimation}
                className="relative items-center group flex">
                <span
                  className={`md:inline-block h-6 bg-left-bottom bg-gradient-to-r ${
                    !isOpen ? "from-brown to-brown" : "from-[#fff] to-[#fff]"
                  } bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] duration-500 ease-out hidden  transition-all ${
                    isOpen ? "text-[#fff]" : "text-[#B55A45]"
                  }`}>
                  menu
                </span>
                <div
                  className={`${
                    isOpen ? "bg-lightGreen" : "bg-darkBeige"
                  } rounded-full md:bg-[transparent]`}>
                  <Hamburger
                    toggle={setIsOpen}
                    toggled={isOpen}
                    color={`${isOpen ? "#fff" : "#B55A45"}`}
                    size={23}
                  />
                </div>
              </button>
            </div>
          </div>
        </div>
      </header>

      <div ref={ref} />
    </>
  );
}
