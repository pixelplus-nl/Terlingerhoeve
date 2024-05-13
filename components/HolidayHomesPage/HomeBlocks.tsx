"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import { HiMiniCheck } from "react-icons/hi2";
import AnmButton from "../AnmButton";

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

export default function HomeBlocks(props: any) {
  const [viewAll, setViewAll] = useState(false);

  return (
    <>
      <div className="flex flex-col p-5 gap-10 transition-all relative overflow-hidden">
        {props.objects.slice(0, 3).map((item: any) => {

          const number_of_people = item.number_of_people !== "" ? item.number_of_people : item.max_people;

          return (
            <div
              key={item.id}
              className=" p-5 lg:p-8 shadow-tl rounded-3xl w-full ">
              <h3 className="text-center text-2xl font-spartan !leading-7 pb-5 uppercase">
                {item.name}
              </h3>
              <div className="flex flex-col lg:flex-row gap-8">
                <div className=" lg:w-[30rem] relative h-80">
                  <Image
                    src={item.image}
                    fill
                    placeholder="blur"
                    blurDataURL="data:..."
                    priority
                    sizes="100vw"
                    style={{
                      objectFit: "cover",
                      zIndex: -1,
                    }}
                    alt={item.name}
                    title={item.name}
                  />
                </div>
                <div className="flex flex-col w-full max-w-xs justify-end gap-3 text-blue">
                  <div className="flex items-center gap-3">
                    <div className="w-7 h-7 flex justify-center items-center rounded-full bg-[#D3DBCA]">
                      <HiMiniCheck size={17} color="#6B7969" />
                    </div>
                    <p>Appartement</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-7 h-7 flex justify-center items-center rounded-full bg-[#D3DBCA]">
                      <HiMiniCheck size={17} color="#6B7969" />
                    </div>

                    <p>Max. {item.max_people} personen</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-7 h-7 flex justify-center items-center rounded-full bg-[#D3DBCA]">
                      <HiMiniCheck size={17} color="#6B7969" />
                    </div>
                    <p>
                      {item.bedrooms} Slaapkamer{item.bedrooms > 1 ? "s" : ""}
                    </p>
                  </div>

                  <hr className="border-dashed my-5" />

                  <div className="flex justify-between mb-5 items-center">
                    <p className="text-sm max-w-[10rem]">
                      {item.arrival_date} t/m {item.departure_date} voor {number_of_people} perso{number_of_people > 1 ? "nen" : "on"}
                    </p>
                    <p className="text-2xl">€{item.price}</p>
                  </div>

                  <button>
                    <AnmButton
                      extraClasses={"bg-lightGreen mx-auto w-11/12 py-2"}
                      anmColor={"bg-darkGreen"}
                      buttonText="Zoek & boek"
                      scale={75}
                    />
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {props.objects.length > 3 ? (
        <>
          <motion.div
            initial={hideBlocks}
            animate={viewAll ? showBlocks : hideBlocks}
            transition={{ duration: 3, ease: "easeOut" }}>
            <div className="flex flex-col pt-10 bg-beige gap-10 overflow-hidden m-auto">
              {props.objects.slice(3).map((item: any, index: number) => (
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
              {viewAll
                ? "Minder woningen bekijken ↑"
                : "Meer woningen bekijken ↓"}
            </button>
          </div>
        </>
      ) : (
        ""
      )}
    </>
  );
}
