"use client";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

export default function GallerySlider() {
  return (
    <Swiper
      slidesPerView={"auto"}
      centeredSlides={true}
      loop={true}
      spaceBetween={30}
      pagination={{
        clickable: true,
      }}
      className="mySwiper"
    >
      {Array.from({ length: 8 }).map((_, index) => (
        <SwiperSlide key={index} className="!w-3/4 md:!w-1/4">
          <img
            src={`/gallery_0${index + 1}.jpeg`}
            alt="Imagen de bosques del rio"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
