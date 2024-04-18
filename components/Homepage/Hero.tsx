"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="relative">
      <div className="w-full relative h-72 md:h-[30rem] lg:h-[40rem] xl:h-[45rem]  mt-3">
        <Image
          src="/Hero.png"
          fill
          placeholder="blur"
          blurDataURL="data:..."
          priority
          sizes="100vw"
          style={{
            objectFit: "cover",
            zIndex: -1,
            backgroundPosition: "bottom",
          }}
          alt="Hero img"
          title="Hero img"
        />
        <motion.div
          animate={{ scale: [0, 1.1, 1], opacity: [0, 1] }}
          transition={{ duration: 2, delay: 0.5 }}
          className="hidden relative md:flex h-full justify-center ml-[25rem] lg:ml-[35rem] items-center">
          <Image
            src="/Shapes/HeroShape.svg"
            width={500}
            height={500}
            alt="Hero shape"
            className=" w-72 lg:w-80"
          />
          <motion.div
            animate={{ y: [15, 0], opacity: [0, 1] }}
            transition={{ duration: 1, delay: 2 }}
            className="text-[#fff] absolute text-center">
            <div className="max-w-[15rem] mt-6">
              <h1 className="text-3xl lg:text-4xl font-spartan">
                LEKKER SAMEN EVEN WEG?
              </h1>
              <h2 className="text-lg mt-3">
                Op ons landgoed in
                <br /> Zuid-Limburg ben je er écht even tussenuit
              </h2>
            </div>
          </motion.div>
        </motion.div>
      </div>
      <motion.div
        animate={{ scale: [0, 1.1, 1], opacity: [0, 1] }}
        transition={{ duration: 2, delay: 0.5 }}
        className="md:hidden relative -mt-20 flex justify-center items-center">
        <Image
          src="/Shapes/HeroShape.svg"
          width={500}
          height={500}
          alt="Hero shape"
          className="w-80 m-auto"
        />
        <motion.div
          animate={{ y: [15, 0], opacity: [0, 1] }}
          transition={{ duration: 1, delay: 2 }}
          className="text-[#fff] absolute text-center">
          <div className="max-w-[15rem]">
            <h1 className="text-4xl font-spartan">LEKKER SAMEN EVEN WEG?</h1>
            <h2 className="text-lg mt-3">
              Op ons landgoed in Zuid-Limburg ben je er écht even tussenuit
            </h2>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
