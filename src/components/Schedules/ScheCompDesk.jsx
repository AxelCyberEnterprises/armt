import React from 'react'

export default function ScheCompDesk({trainStop}) {
  return (
    <div className=''>
        <p className='text-xl font-semibold text-[#2d3039] text-center md:text-left mb-4 md:mb-0'>{trainStop}</p>
        <div className='flex flex-col md:flex-row flex-1 h-auto md:h-[150px]'>
            <div className='flex-1 flex md:block'>
                <div className='w-[33%] md:w-full h-auto p-4 md:p-0 md:h-[30px]'></div>
                <div className='w-[67%] md:w-full font-semibold p-4 md:p-0 md:h-[120px] flex justify-center items-center bg-[#eeeeee] text-[#2d3039] text-sm md:text-base'>
                    Line
                </div>
            </div>
            <div className='flex-1 flex md:block'>
                <div className='h-auto w-[33%] md:w-full md:h-[30px]'></div>
                <div className='h-auto w-[67%] md:w-full md:h-[120px] flex md:block'>
                    <div className='w-1/2 py-4 md:py-0 md:w-full md:h-[60px] bg-[#ffffff] text-[#2d3039] font-semibold text-sm md:text-base flex justify-center items-center'>Departures</div>
                    <div className='w-1/2 py-4 md:py-0 md:w-full md:h-[60px] bg-[#149145] text-[#ffffff] font-semibold text-sm md:text-base flex justify-center items-center'>Arrivals</div>
                </div>
            </div>
            <div className='flex-1 flex md:block'>
                <div className='self-center w-[33%] md:w-full h-auto md:h-[30px] md:text-center text-[#2d3039] font-semibold text-sm md:text-base'>D3101</div>
                <div className='h-auto   md:h-[120px] w-[67%] md:w-full  flex md:block'>
                    <div className='w-1/2 py-4 md:py-0 md:w-full  md:h-[60px] bg-[#eeeeee] text-[#2d3039] font-semibold text-sm md:text-base flex justify-center items-center'> 8:00:00</div>
                    <div className='w-1/2 py-4 md:py-0 md:w-full h-[60px] bg-[#eeeeee] text-[#149145] font-semibold text-sm md:text-base flex justify-center items-center'>8:034:50</div>
                </div>
            </div>
            <div className='flex-1 flex md:block'>
                <div className='self-center w-[33%] md:w-full h-auto md:h-[30px] md:text-center text-[#2d3039] font-semibold text-sm md:text-base'>D3103</div>
                <div className='h-auto md:h-[120px] w-[67%] md:w-full  flex md:block'>
                    <div className='w-1/2 py-4 md:py-0  md:w-full  md:h-[60px] bg-[#eeeeee] text-[#2d3039] font-semibold text-sm md:text-base flex justify-center items-center'>8:00:00</div>
                    <div className='w-1/2 py-4 md:py-0 md:w-full  h-[60px] bg-[#eeeeee] text-[#149145] font-semibold text-sm md:text-base flex justify-center items-center'>8:034:50</div>
                </div>
            </div>
            <div className='flex-1 flex md:block'>
                <div className='self-center w-[33%] md:w-full h-auto md:h-[30px] md:text-center text-[#2d3039] font-semibold text-sm md:text-base'>D3105</div>
                <div className='h-auto md:h-[120px] w-[67%] md:w-full  flex md:block'>
                    <div className='w-1/2 py-4 md:py-0 md:w-full  md:h-[60px] bg-[#eeeeee] text-[#2d3039] font-semibold text-sm md:text-base flex justify-center items-center'>8:00:00</div>
                    <div className='w-1/2 py-4 md:py-0 md:w-full  h-[60px] bg-[#eeeeee] text-[#149145] font-semibold text-sm md:text-base flex justify-center items-center'>8:034:50</div>
                </div>
            </div>
            <div className='flex-1 flex md:block'>
                <div className='self-center w-[33%] md:w-full h-auto md:h-[30px] md:text-center text-[#2d3039] font-semibold text-sm md:text-base'>D3107</div>
                <div className='h-auto md:h-[120px] w-[67%] md:w-full flex md:block'>
                    <div className='w-1/2 py-4 md:py-0 md:w-full  md:h-[60px] bg-[#eeeeee] text-[#2d3039] font-semibold text-sm md:text-base flex justify-center items-center'>8:00:00</div>
                    <div className='py-4 py-4 md:py-0 w-1/2 md:w-full  h-[60px] bg-[#eeeeee] text-[#149145] font-semibold text-sm md:text-base flex justify-center items-center'>8:034:50</div>
                </div>
            </div>
            <div className='flex-1 flex md:block'>
                <div className='h-auto w-[33%] md:w-full md:h-[30px]'></div>
                <div className='p-4 md:p-0 h-auto w-[67%] md:w-full md:h-[120px] bg-[#149145] text-[#ffffff] text-sm  md:text-base flex flex-row md:flex-col gap-2 justify-center item-center'>
                    <p className='text-center'>Price</p>
                    <p className='text-center'>Free</p>
                </div>
            </div>
        </div>
    </div>
  )
}
