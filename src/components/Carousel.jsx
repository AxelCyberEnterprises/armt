"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import Image1 from "../../public/images/image1.jpeg"
import Image2 from "../../public/images/image2.jpeg";
import Image3 from "../../public/images/image3.jpeg";
import Image4 from "../../public/images/image4.jpeg";
import Image5 from "../../public/images/image5.jpeg";
import Image6 from "../../public/images/image6.jpeg";
import Image7 from "../../public/images/image7.jpeg";
import Image8 from "../../public/images/image8.jpeg";
import Image9 from "../../public/images/image9.jpeg";
import Image10 from "../../public/images/image10.jpeg";
import Image11 from "../../public/images/image11.jpeg";
import Image12 from "../../public/images/image12.jpeg";
import Image13 from "../../public/images/image13.jpeg";
import Image14 from "../../public/images/image14.jpeg";
import Image15 from "../../public/images/image15.jpeg";


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
        <SwiperSlide>
          <Image src={Image15} alt="slide 14" className="h-[100%]" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
