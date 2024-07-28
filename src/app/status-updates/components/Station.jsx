import React, { useState } from 'react'
import { FaAngleRight } from "react-icons/fa6";

export default function Station({name,status}) {
    const [info,setInfo] = useState(false)
    return (
    <div>
        <div className="flex">
            <div className="flex-1 bg-[#fffff] p-4 text-base text-[#2d3039]">
                <p>{name}</p>
            </div>
            <div 
                className="flex-1 border-b-[1px] cursor-pointer border-[#eeeeee] p-4 text-base flex justify-between items-center bg-[#faf5e1]"
                onClick={()=>setInfo(!info)}
                >
                <p className="text-[#149145]">{status}</p>
                <FaAngleRight style={{ color: "#149145" }} />
            </div>
        </div>
        {
            info
            ?  <div className='p-4 bg-[#faf5e1] relative'>
                    <p 
                        className='text-base text-[#8b897f] mb-2'>
                        {
                            status === "Information"
                            ?
                        "Ramps are available at this station. They are \
                        designed to cover the small remaining step \
                        or gap between the platform and the train \
                        on step-free platforms. They make it easier \
                        for customers to get on and off the train, in \
                        particular for people whose mobility aids \
                        have small wheels."
                        :  
                        `${name}: Closed - This station is closed
                        until last quarter in 2024, while the station
                        is being completely set up. The Abuja Rail
                        Mass Transit stations still remain open.
                        Kukwaba I station will remain open for
                        customers to use while the Kukwaba II
                        station setup is completed.`
                        }
                    </p>
                    <div 
                        className='mb-2 text-[#848484] border-[1px] flex bg-white justify-between items-center p-2 cursor-pointer border-[#eeeeee]'    
                    >
                        <p>Replan your journey</p>
                        <FaAngleRight style={{color: "#149145"}}/>
                    </div>
                    <div className='text-right'>
                    <button 
                        onClick={()=>setInfo(false)}
                        className='text-[#149145] hover:underline hover:underline-[#149145]'
                    >
                        Close status
                    </button>
                    </div>
                </div>
            : <></>
        }
    </div>
  )
}
