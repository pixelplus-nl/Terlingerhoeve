"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { HiMiniCheck } from "react-icons/hi2";

import "swiper/css";
import "swiper/css/pagination";

import { Autoplay, Pagination } from "swiper/modules";
import Link from "next/link";

export default function UspSlider() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination]}
        className="mySwiper cursor-pointer">
        <SwiperSlide>
          <div className="flex gap-3 pb-7 text-[#556A76] items-center justify-center">
            <div className="w-10 h-10 flex justify-center items-center rounded-full bg-[#D3DBCA]">
              <HiMiniCheck size={25} color="#6B7969" />
            </div>
            <Link className="underline hover:no-underline" href="">Boek hier</Link> voor de laagste prijs
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex gap-3 pb-7 text-[#556A76] items-center justify-center">
            <div className="w-10 h-10 flex justify-center items-center rounded-full bg-[#D3DBCA]">
              <HiMiniCheck size={25} color="#6B7969" />
            </div>
            Gehele jaar door geopend
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex gap-3 pb-7 text-[#556A76] items-center justify-center">
            <div className="w-10 h-10 flex justify-center items-center rounded-full bg-[#D3DBCA]">
              <HiMiniCheck size={25} color="#6B7969" />
            </div>
            Kleinschalig en authentiek
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex gap-3 pb-7 text-[#556A76] items-center justify-center">
            <div className="w-10 h-10 flex justify-center items-center rounded-full bg-[#D3DBCA]">
              <HiMiniCheck size={25} color="#6B7969" />
            </div>
            Zo in België (2,5 km) of Duitsland (10 km)
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
