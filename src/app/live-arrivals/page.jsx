import Footer from "@/components/Footer/Footer";
import Header from "@/components/header/Header";
import React from "react";
import { IoSearchOutline } from "react-icons/io5";

export default function page() {
  return (
    <>
      <div>
        <Header />
      </div>
      <main className="live-arrival-container">
        <section className="mt-8 sm:mt-12">
          <p className="text-center mb-6 sm:mb-12 py-3 sm:p-4 sm:w-[450px] bg-[#2D3039] text-white text-3xl sm:text-4xl">
            Stations & Bus stops
          </p>
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
          <div className="mb-6 sm:mb-8 bg-[#EEEEEE] px-3 sm:px-4 py-6 sm:py-8 w-[85%] sm:w-[95%]">
            <p className="text-[#149145] text-2xl font-semibold">
              Train stations
            </p>
          </div>
          <div className="sm:w-[90%] flex gap-1.5 sm:gap-[0.5%] px-0 sm:px-4 pb-4 sm:pb-8 mb-10 sm:mb-12 sm:border-b-2  sm:border-[#9c9c9c] flex-wrap">
            <div className="w-full sm:w-[33%] flex  border-2 border-[#EEEEEE]">
              <div className="w-[5%] bg-[#149045]"></div>
              <p className="p-2 text-base text-[2d3039]">Abuja Metro</p>
            </div>
            <div className="w-full sm:w-[33%]  flex  border-2 border-[#EEEEEE]">
              <div className="w-[5%] bg-[#894E24]"></div>
              <p className="p-2 text-base text-[2d3039]">Wupa</p>
            </div>
            <div className="w-full sm:w-[33%]  flex  border-2 border-[#EEEEEE]">
              <div className="w-[5%] bg-[#E86A10]"></div>
              <p className="p-2 text-base text-[2d3039]">Airport</p>
            </div>
            <div className="w-full sm:w-[33%] flex  border-2 border-[#EEEEEE]">
              <div className="w-[5%] bg-[#DC241F]"></div>
              <p className="p-2 text-base text-[2d3039]">Kagini</p>
            </div>
            <div className="w-full sm:w-[33%] flex  border-2 border-[#EEEEEE]">
              <div className="w-[5%] bg-[#000000]"></div>
              <p className="p-2 text-base text-[2d3039]">Stadium Station</p>
            </div>
            <div className="w-full sm:w-[33%] flex  border-2 border-[#EEEEEE]">
              <div className="w-[5%] bg-[#5A5EB7]"></div>
              <p className="p-2 text-base text-[2d3039]">Idu</p>
            </div>
            <div className="w-full sm:w-[33%] flex  border-2 border-[#EEEEEE]">
              <div className="w-[5%] bg-[#66CC00]"></div>
              <p className="p-2 text-base text-[2d3039]">GwaGwa</p>
            </div>
            <div className="w-full sm:w-[33%] flex  border-2 border-[#EEEEEE]">
              <div className="w-[5%] bg-[#BF6225]"></div>
              <p className="p-2 text-base text-[2d3039]">Gbazango</p>
            </div>
            <div className="w-full sm:w-[33%] flex  border-2 border-[#EEEEEE]">
              <div className="w-[5%] bg-[#92D9F7]"></div>
              <p className="p-2 text-base text-[2d3039]">Kukwaba I</p>
            </div>
            <div className="w-full sm:w-[33%] flex  border-2 border-[#EEEEEE]">
              <div className="w-[5%] bg-[#FFFAEC]"></div>
              <p className="p-2 text-base text-[2d3039]">Kukwaba II</p>
            </div>
            <div className="w-full sm:w-[33%] flex  border-2 border-[#EEEEEE]">
              <div className="w-[5%] bg-[#751056]"></div>
              <p className="p-2 text-base text-[2d3039]">Bassanjiwa</p>
            </div>
            <div className="w-full sm:w-[33%] flex  border-2 border-[#EEEEEE]">
              <div className="w-[5%] bg-[#FFCE00]"></div>
              <p className="p-2 text-base text-[2d3039]">DeiDei</p>
            </div>
            {/* <div className="w-full sm:w-[33%] flex  border-2 border-[#EEEEEE]">
              <div className="w-[5%] bg-[#5a5eb7]"></div>
              <p className="p-2 text-base text-[2d3039]">Maitama</p>
            </div>
            <div className="w-full sm:w-[33%] flex  border-2 border-[#EEEEEE]">
              <div className="w-[5%] bg-[#92d9f7]"></div>
              <p className="p-2 text-base text-[2d3039]">Wuse</p>
            </div> */}
          </div>
          <div className="mb-6 sm:mb-8 bg-[#EEEEEE] px-3 sm:px-4 py-6 sm:py-8 w-[85%] sm:w-[95%]">
            <p className="text-[#149145] text-2xl font-semibold">Buses</p>
          </div>
          <div className="sm:w-[90%] flex px-3 sm:px-4 pb-4 sm:pb-8 mb-16 sm:mb-20 sm:border-b-2  border-[#9c9c9c] flex-wrap">
            <p className="w-full sm:w-1/5 py-2 px-4 border-2 border-[#EEEEEE] text-base text-[2d3039]">
              1-50
            </p>
            <p className="w-full sm:w-1/5 py-2 px-4 border-2 border-[#EEEEEE] text-base text-[2d3039]">
              51-100
            </p>
            <p className="w-full sm:w-1/5 py-2 px-4 border-2 border-[#EEEEEE] text-base text-[2d3039]">
              101-150
            </p>
            <p className="w-full sm:w-1/5 py-2 px-4 border-2 border-[#EEEEEE] text-base text-[2d3039]">
              151-200
            </p>
            <p className="w-full sm:w-1/5 py-2 px-4 border-2 border-[#EEEEEE] text-base text-[2d3039]">
              201-250
            </p>
            <p className="w-full sm:w-1/5 py-2 px-4 border-2 border-[#EEEEEE] text-base text-[2d3039]">
              251-300
            </p>
            <p className="w-full sm:w-1/5 py-2 px-4 border-2 border-[#EEEEEE] text-base text-[2d3039]">
              351-400
            </p>
            <p className="w-full sm:w-1/5 py-2 px-4 border-2 border-[#EEEEEE] text-base text-[2d3039]">
              401-450
            </p>
            <p className="w-full sm:w-1/5 py-2 px-4 border-2 border-[#EEEEEE] text-base text-[2d3039]">
              451-500
            </p>
            <p className="w-full sm:w-1/5 py-2 px-4 border-2 border-[#EEEEEE] text-base text-[2d3039]">
              501-550
            </p>
          </div>
        </section>
      </main>
      <div>
        <Footer />
      </div>
    </>
  );
}
