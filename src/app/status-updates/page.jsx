"use client";
import { FaCalendar } from "react-icons/fa";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/header/Header";
import React, { useState, useEffect } from "react";
import { FaAngleRight } from "react-icons/fa6";
import Station from "./components/Station";
import Lines from "./components/Lines";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

export default function Page() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [count,setCount] = useState(0)
  const [value, onChange] = useState(new Date());
  const [appear,setAppear] = useState(false)
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (date) => {
    let hours = date.getHours();
    const minutes = date.getMinutes();
    const ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12;
    hours = hours ? hours : 12;
    const strMinutes = minutes < 10 ? "0" + minutes : minutes;
    return `${hours}:${strMinutes} ${ampm}`;
  };

  return (
    <>
      <div>
        <Header activeLink={"/status-updates"} />
      </div>
      <main className="status-update-container mt-8 sm:mt-12">
        <div className="mb-5 sm:mb-10 hover:opacity-80 transition duration-500 ease-in-out">
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
          <div className="flex flex-col sm:flex-row bg-white divide-x-[2px] divide-[#e1e1e1] transition duration-500 ease-in-out hover:divide-[#149145] hover:divide-x-0">
            <p className="hover:border-b-[2px] hover:border-[#149145]  transition duration-500 ease-in-out flex-1 py-4 flex justify-center items-center text-sm sm:text-base text-[#2d3039]">
              Now {formatTime(currentTime)}
            </p>
            <p className="hover:border-b-[2px] hover:border-[#149145] transition duration-500 ease-in-out flex-1 py-4 border-r-[1px] border-[#eeeeee] flex justify-center items-center text-sm sm:text-base text-[#2d3039]">
              This weekend
            </p>
            <p className="hover:border-b-[2px] hover:border-[#149145] transition duration-500 ease-in-out relative flex-1 py-4 flex justify-center items-center text-sm sm:text-base text-[#2d3039]">
              Future date
              <FaCalendar  
              onClick={()=>{setAppear(!appear)}}
              className="absolute cursor-pointer text-[#149145] right-4 top-[50%] -translate-y-[50%]"/>
            </p>
          </div>
        </div>
        <div className="mt-4 mb-6 relative">
          <div className="flex gap-1">
            <p 
              className="p-2 bg-[#2d3039] text-white cursor-pointer"
              onClick={()=>setCount(1)}
            >
              Lines
            </p>
            <p 
              className="p-2 bg-[#149145] text-white cursor-pointer"
              onClick={()=>setCount(0)}
            >
              Stations
            </p>
          </div>
          {
            appear
            &&
            <Calendar onChange={onChange} value={value} className="absolute top-0 right-0 rounded-2xl" />
          }
        </div>
        <div className="flex flex-col sm:flex-row gap-[25px] sm:gap-[75px] mb-12">
          <div className="sm:flex-[2]">
            {
              count == 0 
              ?
              <div className="border-[1px] border-[#eeeeee]">
              <Station
                name={"Abuja Metro"}
                status={"information"}
              />
              <Station 
                name={"Stadium station"}
                status={"Information"}
              />
              <Station
                name={"Kukwaba I"}
                status={"Information"}
              />
              <Station
                name={"Kukwaba II"}
                status={"Closure"} 
              />
              <Station
                name={"Wupa"}
                status={"Information"}
              />
              <Station
                name={"Idu"}
                status={"Information"}
              />
              <Station
                name={"Bassanjiwa"}
                status={"Information"}
              />
              <Station
                name={"Airport"}
                status={"Information"}
              />
              <Station
                name={"GwaGwa"}
                status={"Information"}
              />
              <Station
                name={"DeiDei"}
                status={"Closure"}
              />
              <Station
                name={"Kagini"}
                status={"Information"}
              />
              <Station
                name={"Gbazango"}
                status={"Information"}
              />
            </div>
              : (
                <div className="border-[1px] border-[#eeeeee]">
                  <Lines
                    bg={"#7f7bf4"}
                    name={"Line 1"}
                    status={"Good service"}
                  />
                  <Lines
                    bg={"#dc241f"}
                    name={"Line 2"}
                    status={"Part suspended"}
                  />
                  <Lines
                    bg={"#ffce00"}
                    name={"Line 3"}
                    status={"Good service"}
                  />
                  <Lines
                    bg={"#e86a10"}
                    name={"Line 4"}
                    status={"Part suspended"}
                  />
                  <Lines
                    bg={"#101010"}
                    name={"Line 5"}
                    status={"Minor delays"}
                  />
                  <Lines
                    bg={"#92d9f7"}
                    name={"Lot 6"}
                    status={"Minor delays"}
                  />
                </div>
              )
            } 
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
