import Footer from "@/components/Footer/Footer";
import Header from "@/components/header/Header";
import React from "react";
import { FaAngleRight } from "react-icons/fa6";

export default function page() {
  return (
    <>
      <div>
        <Header activeLink={"/status-updates"} />
      </div>
      <main className="status-update-container mt-8 sm:mt-12">
        <div className="mb-5 sm:mb-10">
        <p className="inline p-3 sm:p-4 bg-[#2D3039] text-white text-3xl sm:text-4xl">
          Status updates
        </p>
        </div>
        <div className="bg-[#eeeeee] px-3 sm:px-6 pb-4">
          <div className="mb-4 flex gap-6">
            <p className="text-sm py-2 text-[#2d3039]">Trains and buses</p>
            <div className="text-sm flex py-2 bg-white">
              <p className="px-2 border-r-[1px] border-[#eeeeee] text-[#149145]">
                Trains
              </p>
              <p className="px-2 text-[#149145]">Buses</p>
            </div>
          </div>
          <div className="flex bg-white">
            <p className="flex-1 py-4 border-r-[1px] border-[#eeeeee] flex justify-center items-center text-sm sm:text-base text-[#2d3039]">
              Now 11:29AM
            </p>
            <p className="flex-1 py-4 border-r-[1px] border-[#eeeeee] flex justify-center items-center text-sm sm:text-base text-[#2d3039]">
              This weekend
            </p>
            <p className="flex-1 py-4 flex justify-center items-center text-sm sm:text-base text-[#2d3039]">
              Futere date
            </p>
          </div>
        </div>
        <div className="mt-4 mb-6">
          <div className="flex gap-1">
            <p className="p-2 bg-[#2d3039] text-white ">Lines</p>
            <p className="p-2 bg-[#149145] text-white">Stations</p>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-[25px] sm:gap-[75px] mb-12">
          <div className="sm:flex-[2]">
            <div className="border-[1px] border-[#eeeeee]">
              <div className="flex">
                <div className="flex-1 bg-[#2d3039] p-4 text-base text-white">
                  <p className="flex justi">Stadium station</p>
                </div>
                <div className="flex-1 border-b-[1px] border-[#eeeeee] p-4 text-base flex justify-between items-center bg-[#faf5e1]">
                  <p className="text-[#2d3039]">Minor delays</p>
                  <FaAngleRight style={{ color: "#149145" }} />
                </div>
              </div>
              <div className="flex">
                <div className="flex-1 bg-[#894e24] p-4 text-base text-white">
                  <p>Wupa</p>
                </div>
                <div className="flex-1 border-b-[1px] border-[#eeeeee] p-4 text-base flex justify-between items-center bg-[#faf5e1]">
                  <p className="text-[#2d3039]">Severe delays</p>
                  <FaAngleRight style={{ color: "#149145" }} />
                </div>
              </div>
              <div className="flex">
                <div className="flex-1 bg-[#149145] p-4 text-base text-white">
                  <p>Abuja Metro</p>
                </div>
                <div className="flex-1 border-b-[1px] border-[#eeeeee] p-4 text-base text-[#2d3039] flex justify-between items-center bg-white">
                  <p>Good service</p>
                </div>
              </div>
              <div className="flex">
                <div className="flex-1 bg-[#dc241f] p-4 text-base text-white">
                  <p>Kagini</p>
                </div>
                <div className="flex-1 border-b-[1px] border-[#eeeeee] p-4 text-base text-[#2d3039] flex justify-between items-center bg-white">
                  <p>Good service</p>
                </div>
              </div>
              <div className="flex">
                <div className="flex-1 bg-[#66cc00] p-4 text-base text-white">
                  <p>GwaGwa</p>
                </div>
                <div className="flex-1 border-b-[1px] border-[#eeeeee] p-4 text-base text-[#2d3039] flex justify-between items-center bg-white">
                  <p>Good service</p>
                </div>
              </div>
              <div className="flex">
                <div className="flex-1 bg-[#5a5eb7] p-4 text-base text-white">
                  <p>Idu</p>
                </div>
                <div className="flex-1 border-b-[1px] border-[#eeeeee] p-4 text-base text-[#2d3039] flex justify-between items-center bg-white">
                  <p>Good service</p>
                </div>
              </div>
            </div>
            <div className="mt-4 mb-6 border-2 border-[#eeeee] p-2 flex justify-between items-center">
              <p className="text-base text-[#9797a8]">Major works & Events</p>
              <FaAngleRight style={{ color: "#149145" }} />
            </div>
            <div className="px-2 pt-6 pb-4  bg-[#eeeeee]">
              <p className="text-xl font-bold text-[#2d3039] mb-2">
                Planned closures & services charges
              </p>
              <div className="border-2 border-[#868686]">
                <div className="border-b-[1px] p-2 border-[#868686] flex justify-between items-center">
                  <p className="text-base text-[#9797a8]">
                    Line closures and services changes
                  </p>
                  <FaAngleRight style={{ color: "#149145" }} />
                </div>
                <div className="border-b-[1px] p-2 border-[#868686] flex justify-between items-center">
                  <p className="text-base text-[#9797a8]">
                    Staions, lifys and escalators
                  </p>
                  <FaAngleRight style={{ color: "#149145" }} />
                </div>
              </div>
            </div>
          </div>
          <div className="sm:flex-[3]">
            <div className="mb-4 min-h-[450px] sm:min-h-[700px] border-2 border-[#eeeeee]"></div>
            <div className="shadow-md p-4 bg-[#eeeeee]">
              <p className="text-base text-[#2d3039] mb-2">Search</p>
              <p className="text-base text-[#2d3039] mb-2">
                For live arrivals status information,route maps, and timetables.
              </p>
              <div className="flex gap-2">
                <input
                  className="border-2 max-w-[450px] w-[80%] p-2 border-[#eeeeee] text-base text-[#9797a8]"
                  type="text"
                  placeholder="Station or stop"
                />
                <button className="p-2 w-[45px] rounded text-white text-base bg-[#149145]">
                  Go
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <div>
        <Footer />
      </div>
    </>
  );
}
