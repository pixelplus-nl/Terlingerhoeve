"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import { Autoplay, Navigation } from "swiper/modules";

export default function Reviews(props: any) {
  return (
    <div className="my-20">
      <h2 className="font-spartan  text-3xl md:text-4xl lg:text-5xl max-w-2xl mx-auto uppercase text-center">
        Ervaar het zelf
      </h2>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Autoplay, Navigation]}
        className="mySwiper">
        {props.homepageData.home.reviews.map((reviews: any, index: number) => {
          return <SwiperSlide>{reviews.review}</SwiperSlide>;
        })}
      </Swiper>
    </div>
  );
}
