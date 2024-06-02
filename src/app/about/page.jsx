import Footer from "@/components/Footer/Footer";
import Header from "@/components/header/Header";
import React from "react";
import Image from "next/image";
import aboutBg from "../../../public/image.png";
import videoBg from "../../../public/image.svg";
import { IoIosCheckmark } from "react-icons/io";
import Carousel from "@/components/Carousel";

export default function page() {
  return (
    <>
      <div>
        <Header activeLink={"/about"} />
      </div>
      <div className="relative mb-6 sm:mb-10">
        <p className="inline absolute p-2 sm:p-3 left-[5%] top-8 text-2xl sm:text-3xl sm:top-12 text-white bg-[#2d3039]">
          About us
        </p>
        <img
          src="/image.png"
          className="w-full"
          alt="about us page background"
        />
      </div>
      <main className="about-container">
        <div className="relative translate-x-[-50%] left-[50%] max-w-[950px] w-[100%] mb-6 sm:mb-10 text-center">
          <p className="mb-2 text-[#149145] font-bold text-xl">OUR STORY</p>
          <div>
            <p className="mb-4 text-base text-[#2d3039]">
              The Abuja Rail Mass Transit (ARMT), commonly known as the Abuja
              Light Rail, is a groundbreaking regional rail transport system in
              the Federal Capital Territory of Nigeria. It stands as the first
              rapid transit system in Nigeria and West Africa, and the second in
              SubSaharan Africa, following the Addis Ababa Light Rail. This
              ambitious project encompasses six lots, collectively covering
              approximately 285 kilometers:
            </p>
            <p className="mb-4 text-base text-[#2d3039]">
              The initial phase of the project includes Lot 1A and Lot 3,
              spanning a combined length of 45 kilometers. The rail system
              features a double track with a standard gauge of 1435 mm and a
              maximum train speed of 100 km/h. Twelve passenger stations have
              been designed and constructed, all of which are now fully
              operational
            </p>
            <p className=" text-base text-[#2d3039]">
              This project that heralds a new era of transportation
              infrastructure in Nigeria. With Nexant’s comprehensive services
              and operational enhancements, the ARMT is poised to deliver
              substantial economic, social, and environmental benefits. This
              system not only addresses current transportation challenges but
              also sets the foundation for sustainable urban mobility, making it
              a cornerstone of Nigeria's future development.
            </p>
          </div>
          <div></div>
        </div>
        <div className="mb-6 sm:mb-10 about-img-container flex justify-center">
          <iframe
            src="https://player.vimeo.com/video/949776500?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
            width="1280"
            height="720"
            frameborder="0"
            allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
            title="ARMT"
          ></iframe>
        </div>
        <div className="mb-6 sm:mb-10 flex flex-col sm:flex-row gap-4 sm:gap-[50px]">
          <div className="flex-2 flex flex-col justify-center">
            <p className="mb-2 text-base   font-semibold text-[#149145]">
              OUR IMPACT
            </p>
            <p className="mb-2 text-2xl text-[#2d3039] font-semibold">
              Our Social &
              <br />
              Economic Impact
            </p>
            <p className="text-sm text-[#2d3039]">
              The Abuja Rail Mass Transit is Poised to substantially boost the
              the national econmy in multiple impactful ways:
            </p>
          </div>
          <div className="py-4 px-2 flex-3  grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <p className="mb-2 font-semibold text-xl text-[#2d3039]">
                Improved investment Environment
              </p>
              <p className="text-sm text-[#2d3039]">
                By providing reliable and efficient transfortation, the ARMT
                attracts both doemostic and internationaol investor
              </p>
            </div>
            <div>
              <p className="mb-2 font-semibold text-xl text-[#2d3039]">
                Land Value Enhancemant
              </p>
              <p className="text-sm text-[#2d3039]">
                Proximity to the rail stations increases property values
              </p>
            </div>
            <div>
              <p className="mb-2 font-semibold text-xl text-[#2d3039]">
                Energy Savings
              </p>
              <p className="text-sm text-[#2d3039]">
                Efficient public transportation reduces the reliance on personal
                vehicles, leading to lower energy energy consumption
              </p>
            </div>
            <div>
              <p className="mb-2 font-semibold text-xl text-[#2d3039]">
                Employment Opportunities
              </p>
              <p className="text-sm text-[#2d3039]">
                The construction and operation of the rail system
              </p>
            </div>
            <div>
              <p className="mb-2 font-semibold text-xl text-[#2d3039]">
                Social Stability
              </p>
              <p className="text-sm text-[#2d3039]">
                Improved connectivity and mobility foster social cohesion and
                economic development
              </p>
            </div>
            <div>
              <p className="mb-2 font-semibold text-xl text-[#2d3039]">
                Enhanced Living Conditions
              </p>
              <p className="text-xl text-[#2d3039]">
                Reduced traffic congestion and shorter commute times improve the
                quality of life for residents
              </p>
            </div>
          </div>
        </div>
        <div className="mb-6 sm:mb-10 max-w-[1000px] w-[100%] relative translate-x-[-50%] left-[50%] text-center">
          <p className="mb-2 text-xl font-semibold text-[#149145]">
            WHY CHOOSE US
          </p>
          <p className="mb-3 text-2xl text-[#2d3039]">
            How we plan to serve you
          </p>
          <div className="flex sm:flex-row flex-col gap-2 sm:gap-4 ">
            <div className="p-4 flex-1 flex flex-col gap-4 item-center border-2 border-[#149145]">
              <p className="text-xl text-[#2d3039] font-semibold">
                Seamless Travel Experience
              </p>
              <p className="text-sm text-[#2d3039]">
                We prioritize a seamless and stress-free travel experience,
                ensuring your journey is smooth from station entry to
                destination arrival
              </p>
            </div>
            <div className="p-4 flex-1 flex flex-col gap-4 item-center border-2 border-[#149145]">
              <p className="text-xl text-[#2d3039] font-semibold">
                Innovative Amenities and Technology
              </p>
              <p className="text-sm text-[#2d3039]">
                We prioritize a seamless, stress-free travel experience from the
                moment you enter our station until you reach your destination
              </p>
            </div>
            <div className="p-4 flex-1 flex flex-col gap-4 item-center border-2 border-[#149145]">
              <p className="text-xl text-[#2d3039] font-semibold">
                Community-centric Approach
              </p>
              <p className="text-sm text-[#2d3039]">
                As an integral part of the community, ARMT is committed to
                supporting and engaging with locals, making a positive impact
                both within and beyond the station
              </p>
            </div>
          </div>
        </div>
        <div className="max-w-[450px] w-[60%] relative translate-x-[-50%] left-[50%]">
          <p className="text-center text-xl mb-3 sm:mb-4 font-semibold text-[#149145]">
            STATIONS
          </p>
          <div className="mb-6 sm:mb-10 grid grid-cols-1 sm:grid-cols-2 gap-2">
            <div className="flex gap-[5%] items-center">
              <div className="w-[20px] flex justify-center items-center h-[20px] rounded-full bg-[#149145]">
                <IoIosCheckmark className="text-white" />
              </div>
              <p className="text-sm text-[#2d3039]">Abuja Metro Station</p>
            </div>
            <div className="flex gap-[5%] items-center">
              <div className="w-[20px] flex justify-center items-center h-[20px] rounded-full bg-[#149145]">
                <IoIosCheckmark className="text-white" />
              </div>
              <p className="text-sm text-[#2d3039]">Bassanjiwa Station</p>
            </div>
            <div className="flex gap-[5%] items-center">
              <div className="w-[20px] flex justify-center items-center h-[20px] rounded-full bg-[#149145]">
                <IoIosCheckmark className="text-white" />
              </div>
              <p className="text-sm text-[#2d3039]">Stadium Station</p>
            </div>
            <div className="flex gap-[5%] items-center">
              <div className="w-[20px] flex justify-center items-center h-[20px] rounded-full bg-[#149145]">
                <IoIosCheckmark className="text-white" />
              </div>
              <p className="text-sm text-[#2d3039]">Airport Station</p>
            </div>
            <div className="flex gap-[5%] items-center">
              <div className="w-[20px] flex justify-center items-center h-[20px] rounded-full bg-[#149145]">
                <IoIosCheckmark className="text-white" />
              </div>
              <p className="text-sm text-[#2d3039]">Kukwaba T Station</p>
            </div>
            <div className="flex gap-[5%] items-center">
              <div className="w-[20px] flex justify-center items-center h-[20px] rounded-full bg-[#149145]">
                <IoIosCheckmark className="text-white" />
              </div>
              <p className="text-sm text-[#2d3039]">Gwagwa Station</p>
            </div>
            <div className="flex gap-[5%] items-center">
              <div className="w-[20px] flex justify-center items-center h-[20px] rounded-full bg-[#149145]">
                <IoIosCheckmark className="text-white" />
              </div>
              <p className="text-sm text-[#2d3039]">Kukwaba 2 Station</p>
            </div>
            <div className="flex gap-[5%] items-center">
              <div className="w-[20px] flex justify-center items-center h-[20px] rounded-full bg-[#149145]">
                <IoIosCheckmark className="text-white" />
              </div>
              <p className="text-sm text-[#2d3039]">Deidei Station</p>
            </div>
            <div className="flex gap-[5%] items-center">
              <div className="w-[20px] flex justify-center items-center h-[20px] rounded-full bg-[#149145]">
                <IoIosCheckmark className="text-white" />
              </div>
              <p className="text-sm text-[#2d3039]">Wupa Station</p>
            </div>
            <div className="flex gap-[5%] items-center">
              <div className="w-[20px] flex justify-center items-center h-[20px] rounded-full bg-[#149145]">
                <IoIosCheckmark className="text-white" />
              </div>
              <p className="text-sm text-[#2d3039]">Kagini Station</p>
            </div>
            <div className="flex gap-[5%] items-center">
              <div className="w-[20px] flex justify-center items-center h-[20px] rounded-full bg-[#149145]">
                <IoIosCheckmark className="text-white" />
              </div>
              <p className="text-sm text-[#2d3039]">Idu Station</p>
            </div>
            <div className="flex gap-[5%] items-center">
              <div className="w-[20px] flex justify-center items-center h-[20px] rounded-full bg-[#149145]">
                <IoIosCheckmark className="text-white" />
              </div>
              <p className="text-sm text-[#2d3039]">Gbazango Station</p>
            </div>
          </div>
        </div>
        <div className="mb-6 sm:mb-10 slider-container">
          <p className="text-[#149145] text-xl font-semibold text-center mb-2">
            Gallery
          </p>
          <p className="text-[#2d3039] text-2xl text-center mb-4">
            Take virtual tour of all our stations
          </p>
        </div>
        <Carousel />
      </main>
      <div>
        <Footer />
      </div>
    </>
  );
}
