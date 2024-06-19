import Footer from "@/components/Footer/Footer";
import Header from "@/components/header/Header";
import React from "react";
import { IoSearchOutline } from "react-icons/io5";

export default function page() {
  return (
    <>
      <div>
        <Header activeLink={"/live-arrivals"}/>
      </div>
      <main className="live-arrival-container">
        <section className="mt-8 sm:mt-12">
          <div className='mb-6 sm:mb-12'>
          <p className="inline text-center p-3 sm:p-4 hover:opacity-80 transition duration-500 ease-in-out bg-[#2D3039] text-white text-3xl sm:text-4xl">
            Stations & Bus stops
          </p>
          </div>
          <div className="mb-10 sm:mb-12 sm:w-[350px] p-3 sm:p-4 bg-[#EEEEEE] text-[#727272]">
            <p className="mb-2 sm:mb-4 text-base">Search</p>
            <div className="flex sm:inline-flex gap-1.5">
              <input
                className="p-2 rounded text-base border-[1px] border-[#808080]"
                type="text"
                placeholder="Station, bus stop name"
              ></input>
              <div className="inline-flex justify-center items-center rounded bg-[#149145] w-[42px]">
                <IoSearchOutline className="text-white text-2xl" />
              </div>
            </div>
          </div>
          <div className="mb-6 sm:mb-8 bg-[#EEEEEE] px-3 sm:px-4 py-6 sm:py-8 w-[85%] sm:w-[95%] hover:opacity-80 transition duration-500 ease-in-out hover:border-[1px] hover:border-b-[#149145]">
            <p className="text-[#149145] text-2xl font-semibold">
              Train stations
            </p>
          </div>
          <div className="pb-4 sm:pb-10 sm:w-[95%] mb-10 sm:mb-12 sm:border-b-2  sm:border-[#aaaaaa]">
          <div className="px-0 sm:px-[2.5%] sm:w-[100%] sm:mb-12 mb-8 flex gap-1.5 sm:gap-[0.5%] flex-wrap">
            <div className="w-full sm:w-[33%] flex  border-2 border-[#EEEEEE]">
              <div className="w-[5%] bg-[#7f7bf4]"></div>
              <p className="p-2 text-base text-[2d3039]">Line 1</p>
            </div>
            <div className="w-full sm:w-[33%]  flex  border-2 border-[#EEEEEE]">
              <div className="w-[5%] bg-[#ffce00]"></div>
              <p className="p-2 text-base text-[2d3039]">Line 3</p>
            </div>
            <div className="w-full sm:w-[33%]  flex  border-2 border-[#EEEEEE]">
              <div className="w-[5%] bg-[#101010]"></div>
              <p className="p-2 text-base text-[2d3039]">Line 5</p>
            </div>
            <div className="w-full sm:w-[33%] flex  border-2 border-[#EEEEEE]">
              <div className="w-[5%] bg-[#dc241f]"></div>
              <p className="p-2 text-base text-[2d3039]">Line 2</p>
            </div>
            <div className="w-full sm:w-[33%] flex  border-2 border-[#EEEEEE]">
              <div className="w-[5%] bg-[#e86a10]"></div>
              <p className="p-2 text-base text-[2d3039]">Line 4</p>
            </div>
            <div className="w-full sm:w-[33%] flex  border-2 border-[#EEEEEE]">
              <div className="w-[5%] bg-[#92d9f7]"></div>
              <p className="p-2 text-base text-[2d3039]">Line 6</p>
            </div>
          </div>
          <div className="px-0 sm:px-[2.5%] sm:w-[100%] flex gap-1.5 sm:gap-[0.5%] flex-wrap">
            <div className="w-full sm:w-[33%] flex  border-2 border-[#EEEEEE]">
              <p className="p-2 text-base text-[2d3039]">Abuja Metro</p>
            </div>
            <div className="w-full sm:w-[33%]  flex  border-2 border-[#EEEEEE]">
              <p className="p-2 text-base text-[2d3039]">Stadium Staion</p>
            </div>
            <div className="w-full sm:w-[33%]  flex  border-2 border-[#EEEEEE]">
              <p className="p-2 text-base text-[2d3039]">Kukwaba I</p>
            </div>
            <div className="w-full sm:w-[33%] flex  border-2 border-[#EEEEEE]">
              <p className="p-2 text-base text-[2d3039]">Wupa</p>
            </div>
            <div className="w-full sm:w-[33%] flex  border-2 border-[#EEEEEE]">
              <p className="p-2 text-base text-[2d3039]">Idu</p>
            </div>
            <div className="w-full sm:w-[33%] flex  border-2 border-[#EEEEEE]">
              <p className="p-2 text-base text-[2d3039]">Kukwaba II</p>
            </div>
            <div className="w-full sm:w-[33%] flex  border-2 border-[#EEEEEE]">
              <p className="p-2 text-base text-[2d3039]">GwaGwa</p>
            </div>
            <div className="w-full sm:w-[33%] flex  border-2 border-[#EEEEEE]">
              <p className="p-2 text-base text-[2d3039]">Gbazango</p>
            </div>
            <div className="w-full sm:w-[33%] flex  border-2 border-[#EEEEEE]">
              <p className="p-2 text-base text-[2d3039]">Kukwaba I</p>
            </div>
            <div className="w-full sm:w-[33%] flex  border-2 border-[#EEEEEE]">
              <p className="p-2 text-base text-[2d3039]">Kukwaba II</p>
            </div>
            <div className="w-full sm:w-[33%] flex  border-2 border-[#EEEEEE]">
              <p className="p-2 text-base text-[2d3039]">Bassanjiwa</p>
            </div>
            <div className="w-full sm:w-[33%] flex  border-2 border-[#EEEEEE]">
              <p className="p-2 text-base text-[2d3039]">DeiDei</p>
            </div>
          </div>
          </div>
          <div className="mb-6 sm:mb-8 bg-[#EEEEEE] px-3 sm:px-4 py-6 sm:py-8 w-[85%] sm:w-[95%] hover:opacity-80 transition duration-500 ease-in-out hover:border-[1px] hover:border-b-[#149145]">
            <p className="text-[#149145] text-2xl font-semibold">Buses</p>
          </div>
          <div className="min-h-[200px] justify-center items-center sm:w-[90%] flex px-3 sm:px-4 pb-4 sm:pb-8 mb-16 sm:mb-20 sm:border-b-2  border-[#aaaaaa] flex-wrap">
            <p className="font-bold text-lg sm:text-2xl text-[#121212]">Coming soon!</p>
          </div>
        </section>
      </main>
      <div>
        <Footer />
      </div>
    </>
  );
}
