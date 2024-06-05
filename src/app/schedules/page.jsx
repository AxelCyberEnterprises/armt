import Footer from '@/components/Footer/Footer'
import Header from '@/components/header/Header'
import { FaAngleRight } from "react-icons/fa6";
import React from 'react'
import { FaLongArrowAltDown,FaLongArrowAltUp } from "react-icons/fa";
import ScheCompDesk from '@/components/Schedules/scheCompDesk';

export default function page() {
  return (
    <>
        <div>
            <Header activeLink={"/schedules"} />
        </div>
        <main className='schedules-container'>
            <section className="mt-8 sm:mt-12">
                <div className='mb-6 sm:mb-10'>
                    <p className="inline text-center p-3 sm:p-4  bg-[#5a5eb7] text-white whitespace-nowrap text-2xl sm:text-4xl">
                        Schedules: June - August
                    </p>
                </div>
                <p className='text-xl font-bold mb-2 text-[#121212]'>All Stations</p>
                <div className='mb-12'>
                    <p className='text-lg text-[#149145] font-semibold mb-2'>Trips:</p>
                    <ol className='list-decimal ml-4'>
                        <li className='text-base mb-2'>Working days: 4 trips in the morning and 4 trips in the afternoon of commercial operation, in both Lot 3 and Lot 1A</li>
                        <li className='text-base mb-2'>No operation on Saturday and Sunday</li>
                    </ol>
                </div>
                <div className='mb-10'>
                    <p className='inline text-base text-white p-4 bg-[#2d3039]'>Lots</p>
                </div>
                <div className='w-[80%] max-w-[200px] flex flex-col mb-10'>
                    <div className='bg-[#149145] text-base text-white p-4 flex flex-row items-center justify-between'>
                        <p>Lot 1A</p>
                        <FaAngleRight />
                    </div>
                    <div className='bg-[#faf5e1] text-base text-[#2d3039] p-4'>
                        <p>Lot 2</p>
                    </div>
                    <div className='bg-[#fcce26] text-base text-white p-4 flex flex-row items-center justify-between'>
                        <p>Lot 3</p>
                        <FaAngleRight />
                    </div>
                    <div className='bg-[#149145] text-base text-white p-4'>
                        <p>Lot 4</p>
                    </div>
                    <div className='bg-[#faf5e1] text-[#2d3039] p-4'>
                        <p>Lot 5</p>
                    </div>
                    <div className='bg-[#fcce26] text-white p-4'>
                        <p>Lot 6</p>
                    </div>
                </div>
                <div className='mb-12'>
                    <p className='text-[#149145] font-semibold text-lg mb-2'>Lot 3 Timetable Line (Down Line)</p>
                    <div className='flex w-full md:w-[80%] justify-between'>
                        <div className='border-2 border-[#eeeeee] p-4 flex flex-col w-4/5 gap-6'>
                            <ScheCompDesk trainStop={"Abuja Metro"} />
                            <ScheCompDesk trainStop={"Stadium"} />
                            <ScheCompDesk trainStop={"Kukwaba I"} />
                            <ScheCompDesk trainStop={"Kukwaba II"} />
                            <ScheCompDesk trainStop={"Wupa"} />
                            <ScheCompDesk trainStop={"Idu"} />
                            <ScheCompDesk trainStop={"Bassanjiwa"} />
                        </div>
                        <div className='flex md:hidden'>

                        </div>
                        <div className='flex w-1/5 justify-end'> 
                           <FaLongArrowAltDown className='text-6xl' /> 
                        </div>
                    </div>
                </div>
                <div className='mb-12'>
                    <p className='text-[#149145] font-semibold text-lg mb-2'>Lot 3 Timetable Line (Up Line)</p>
                    <div className='flex w-full md:w-[80%] justify-between'>
                        <div className='border-2 border-[#eeeeee] p-4 flex flex-col w-4/5 gap-6'>
                            <ScheCompDesk trainStop={"Abuja Metro"} />
                            <ScheCompDesk trainStop={"Stadium"} />
                            <ScheCompDesk trainStop={"Kukwaba I"} />
                            <ScheCompDesk trainStop={"Kukwaba II"} />
                            <ScheCompDesk trainStop={"Wupa"} />
                            <ScheCompDesk trainStop={"Idu"} />
                            <ScheCompDesk trainStop={"Bassanjiwa"} />
                        </div>
                        <div className='flex w-1/5 justify-end'> 
                           <FaLongArrowAltUp className='text-6xl' /> 
                        </div>
                    </div>
                </div>
                <div className='mb-12'>
                    <p className='text-[#149145] font-semibold text-lg mb-2'>Lot 1A Timetable Line (Down Line)</p>
                    <div className='flex w-full md:w-[80%] justify-between'>
                        <div className='border-2 border-[#eeeeee] p-4 flex flex-col w-4/5 gap-6'>
                            <ScheCompDesk trainStop={"Idu"} />
                            <ScheCompDesk trainStop={"GwaGwa"} />
                            <ScheCompDesk trainStop={"DeiDei"} />
                            <ScheCompDesk trainStop={"Kagini"} />
                        </div>
                        <div className='flex w-1/5 justify-end'> 
                           <FaLongArrowAltDown className='text-6xl' /> 
                        </div>
                    </div>
                </div>
                <div className='mb-12'>
                    <p className='text-[#149145] font-semibold text-lg mb-2'>Lot 1A Timetable Line (Up Line)</p>
                    <div className='flex w-full md:w-[80%] justify-between'>
                        <div className='border-2 border-[#eeeeee] p-4 flex flex-col w-4/5 gap-6'>
                            <ScheCompDesk trainStop={"Idu"} />
                            <ScheCompDesk trainStop={"GwaGwa"} />
                            <ScheCompDesk trainStop={"DeiDei"} />
                            <ScheCompDesk trainStop={"Kagini"} />
                        </div>
                        <div className='flex w-1/5 justify-end'> 
                           <FaLongArrowAltUp className='text-6xl' /> 
                        </div>
                    </div>
                </div>
            </section>
        </main>
        <div>
            <Footer />
        </div>
    </>
  )
}
