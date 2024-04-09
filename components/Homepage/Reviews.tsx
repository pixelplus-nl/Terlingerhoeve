"use client";

import React, { useCallback, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

import "swiper/css";

import { Autoplay, Navigation } from "swiper/modules";
import Link from "next/link";

export default function Reviews(props: any) {
  const sliderRef = useRef<any | null>(null);

  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  }, []);

  return (
    <div className="my-20 lg:my-32 max-w-2xl mx-auto font-medium">
      <h2 className="font-spartan mb-5 text-3xl md:text-4xl lg:text-5xl max-w-2xl mx-auto uppercase text-center">
        Ervaar het zelf
      </h2>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={{
          prevEl: ".prev",
          nextEl: ".next",
        }}
        modules={[Autoplay, Navigation]}
        className="mySwiper text-center cursor-pointer">
        {props.homepageData.home.reviews.map((reviews: any, index: number) => {
          return (
            <SwiperSlide key={index}>
              <p className="text-xl">{reviews.review}</p>
              <p className="mt-5 font-thin text-sm">{reviews.reviewer}</p>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <div className="flex w-full mt-5 text-4xl justify-center gap-5">
        <button
          className="bg-[#E5E0D6] hover:bg-brown hover:text-[#E5E0D6] transition-all flex justify-center items-center  prev font-thin w-16 h-16 rounded-full"
          onClick={handlePrev}>
          ←
        </button>
        <button
          className="bg-[#E5E0D6] hover:bg-brown hover:text-[#E5E0D6] transition-all flex justify-center items-center font-thin next w-16 h-16 rounded-full"
          onClick={handleNext}>
          →
        </button>
      </div>
      <div className="flex gap-2 items-center justify-center mt-10">
        <Image
          src="/Shapes/ReviewStars.svg"
          width={20}
          height={20}
          alt="Review stars"
          className="w-20"
        />
        <Link
          target="_blank"
          href="https://www.google.com/search?sca_esv=8b8f87cd6e4eee81&rlz=1C5CHFA_enNL899NL899&uds=AMwkrPtyB8MsmozA4Lwzqy2G2HCua9MTYYT2VwAbjEovfxhCmBBVfyOwrqMtB4Ze-gMW5FaxU9QYz0Z8eO-I7A_lH_FIcNeJ9mvxHQr7c4FuT6fWQlFhQHG64dMWveXsgOipaUXWtX7W&si=AKbGX_oFio40EDpEiLGW5yb14kHbrhj0-kgJPotqLcIs2tFuH-lf9qSUw-tmPogP6P76oDxrpnMCymRdJVc6qMTWskXAmW9vjqbHaEtKU90DKR-u4AAbiqs%3D&q=Recreatie+Landgoed+Terlingerhoeve+Vakantiewoningen+Carre-Boerderij+Noorbeek+Zuid+Limburg+Reviews&sa=X&ved=2ahUKEwiy2L-w8vCEAxWR_7sIHamgBrYQ3PALegQIUhAF&biw=1920&bih=968&dpr=1"
          className="font-medium group transition duration-800 ease-out">
          <span className="inline-block h-6 bg-left-bottom bg-gradient-to-r from-brown to-brown bg-[length:0%_1px] bg-no-repeat group-hover:bg-[length:100%_1px] transition-all duration-500 ease-out cursor-pointer">
            <b>4,5/5</b> met <b>237</b> reviews →
          </span>
        </Link>
      </div>
    </div>
  );
}
