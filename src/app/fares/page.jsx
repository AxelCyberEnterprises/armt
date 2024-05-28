import Footer from '@/components/Footer/Footer'
import Header from '@/components/header/Header'
import React from 'react'
import cowryCard from "../../../public/cowrywise.png"
import Extras from '@/components/Extras/Extras'
import Image from 'next/image'

export default function page() {
  return (
    <>
        <div>
            <Header />
        </div>
        <main className='fares-container'>
            <section className="mt-8 sm:mt-12">
                <div className='mb-6 sm:mb-10'>
                <p className="inline text-center p-3 sm:p-4  bg-[#2D3039] text-white text-3xl sm:text-4xl">
                    Fares
                </p>
                </div>
                <p className='text-xl text-[#2d3039] font-bold mb-3'>How much does it cost and how to move around Abuja</p>
                <p className='text-base text-[#595959] mb-4'>Find out the best ticket cost to get to your destination 
                    in Abuja and how to use cowie cards, view fares and best route
                </p>
                <div className='sm:w-[75%] rounded mb-8 p-4 pt-8 sm:p-8 bg-[#eeeeee]'>
                    <div className='flex flex-col sm:flex-row mb-8 gap-y-2'>
                        <div className='flex-1 mb-8 sm:mb-0'>
                            <div className='mb-4'>
                                <p className='inline text-white p-2 bg-[#5a5eb7]'>Departures</p>
                            </div>
                            <input
                                className='w-[90%] block mb-4 bg-white p-2 text-[#595959] border-[1px] border-[#dddddd]' 
                                type='text' 
                                placeholder='Enter departure' 
                            />
                            <button
                               className='rounded ml-[5%] block w-[80%] bg-[#149145] p-2 text-white '  
                                type='submit'>
                                Confirm
                            </button>
                        </div>
                        <div className='flex-1'>
                            <div className='mb-4'>
                                <p className='inline text-white p-2 bg-[#149145]'>
                                    Destination
                                </p>
                            </div>
                            <input 
                                className='w-[90%] block mb-4 bg-white p-2 text-[#595959] border-[1px] border-[#dddddd]' 
                                type='text' 
                            />
                            <button
                                className='rounded ml-[5%] block w-[80%] bg-[#149145] p-2 text-white ' 
                                type='submit'
                                >Confirm
                            </button>
                        </div>   
                    </div>
                    <div className='flex gap-2 itmes-center justify-center flex-row'>
                        <button className='bg-[#149145] p-2 text-white rounded '>Cost</button>
                        <input
                            className='bg-white border-[1px] border-[#dddddd] p-2'
                            type='text' 
                        />
                    </div>  
                </div>
                <div className='flex flex-col gap-8 sm:items-center sm:flex-row mb-8'>
                    <div className='flex-1'>
                        <div className='p-4 bg-[#eeeeee]'>
                            <p className='text-xl font-[#2d3039] font-bold mb-2'>Cowrie account</p>
                            <p className='text-base text-[#595959] mb-2'>Top up omline, view your payment and journey history and request refunds when necesaary</p>
                            <button
                                className='rounded sm:ml-[5%] p-2 text-white text-base bg-[#149145] w-[90%]'
                            >
                                Sign up
                            </button>
                        </div>
                    </div>
                    <div className='flex-1'>
                        <div className='w-[150px] h-[150px] sm:h-auto sm:w-full rounded bg-[#fef2dc] flex justify-center items-center'>
                            <Image
                                className='w-[80%] sm:w-[75%]'
                                src={cowryCard} 
                                alt='cowry card' 
                            />  
                        </div>
                    </div>
                    <div className='rounded p-4 flex-1 bg-[#eeeeee]'>
                        <p className='text-xl text-[#2d3039] font-bold mb-3'>Contact us about safety issues</p>
                        <p className='text-base text-[#2d3039] mb-2'>we're open 24 hours a day, 7 days a week</p>
                        <div className='mb-3'>
                            <p className='text-xl text-[#2d3039] font-bold mb-2'>Call</p>
                            <p className='text-base text-[#2d3039]'>
                                <a className='text-[#149145] text-base' href='#'>Charges apply</a>
                                {" "}
                                +234 802 369 9037
                            </p>
                            <p className='text-base text-[#2d3039]'>+234 906 417 3170</p>
                            <p className='text-base text-[#2d3039]'>+234 815 233 9568</p>
                        </div>
                        <div>
                            <p className='text-xl text-[#2d3039] font-bold mb-2'>Email</p>
                            <p className='text-base text-[#2d3039]'>Support@armt.ng</p>
                            <p className='text-base text-[#2d3039]'>info@armt.ng</p>
                        </div>
                    </div>
                </div>
                <div className='mb-12 flex gap-4 sm:flex-row flex-col'>
                    <Extras 
                        extrasHead={"How to pay & where to buy"}
                        extrasBody={"There are different ways to pay for your travel and whereto get travel tickets"}
                    />
                    <Extras 
                        extrasHead={"Cowry pay as you go"}
                        extrasBody={"Use a cowie card as you travel on our transport"}
                    />
                    <Extras 
                        extrasHead={"Refunds & Replacement"}
                        extrasBody={"How to get a refund,replace your cowrie card if misplaced or stolen"}
                    />
                </div>
            </section>
        </main>
        <div>
            <Footer />
        </div>
    </>
  )
}
