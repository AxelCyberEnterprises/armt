"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import Image1 from "../../public/IMG-20240511-WA0013.jpg";
import Image2 from "../../public/IMG-20240511-WA0014.jpg";
import Image3 from "../../public/IMG-20240511-WA0015.jpg";
import Image4 from "../../public/IMG-20240511-WA0016.jpg";
import Image5 from "../../public/IMG-20240511-WA0017.jpg";
import Image6 from "../../public/IMG-20240511-WA0018.jpg";
import Image7 from "../../public/IMG-20240511-WA0019.jpg";
import Image8 from "../../public/IMG-20240511-WA0020.jpg";
import Image9 from "../../public/IMG-20240511-WA0021.jpg";
import Image10 from "../../public/IMG-20240511-WA0022.jpg";
import Image11 from "../../public/IMG-20240511-WA0023.jpg";
import Image12 from "../../public/IMG-20240511-WA0024.jpg";
import Image13 from "../../public/IMG-20240511-WA0025.jpg";
import Image14 from "../../public/IMG-20240511-WA0026.jpg";

// import required modules
import { Pagination, Navigation, EffectFade } from "swiper/modules";
import Image from "next/image";

export default function Carousel() {
  return (
    <>
      <Swiper
        pagination={{ clickable: true }}
        navigation={true}
        modules={[Pagination, Navigation, EffectFade]}
        effect="fade"
        className="mySwiper h-[350px] sm:h-[750px] mb-10"
      >
        <SwiperSlide>
          <Image src={Image1} alt="slide 1" className="h-[100%]" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={Image2} alt="slide 2" className="h-[100%]" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={Image3} alt="slide 3" className="h-[100%]" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={Image4} alt="slide 4" className="h-[100%]" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={Image5} alt="slide 5" className="h-[100%]" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={Image6} alt="slide 6" className="h-[100%]" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={Image7} alt="slide 7" className="h-[100%]" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={Image8} alt="slide 8" className="h-[100%]" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={Image9} alt="slide 9" className="h-[100%]" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={Image10} alt="slide 10" className="h-[100%]" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={Image11} alt="slide 11" className="h-[100%]" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={Image12} alt="slide 12" className="h-[100%]" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={Image13} alt="slide 13" className="h-[100%]" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={Image14} alt="slide 14" className="h-[100%]" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
