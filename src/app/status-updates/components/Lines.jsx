import React, { useState } from 'react'
import { FaAngleRight } from "react-icons/fa6";

export default function Lines({bg,name,status}) {
    const [info,setInfo] = useState(false)
  return (
    <div>
        <div className="flex">
            <div className={`flex-1 bg-[${bg}] p-4 text-base text-white`}>
                <p>{name}</p>
            </div>
            {
            status != "Good service"
            ?
            <div 
                className="flex-1 border-b-[1px] cursor-pointer border-[#eeeeee] p-4 text-base flex justify-between items-center bg-[#faf5e1]"
                onClick={()=>setInfo(!info)}
                >
                <p>{status}</p>
                <FaAngleRight style={{ color: "#149145" }} />
            </div>
            :
            <div className="flex-1 border-b-[1px] border-[#eeeeee] p-4 text-base flex justify-between items-center bg-white">
                <p className="text-[#149145]">{status}</p>
            </div>
            }
        </div>
        {
            info
            ?  <div className='p-4 bg-[#faf5e1] relative'>
                    <p 
                        className='text-base text-[#8b897f] mb-2'>
                        {
                            status === "Part suspended"
                            ?
                            `No service between Wuse & Idu due to a
                            fault with the tunnel system. Tickets are
                            not being accepted on the line but line 1
                            and 3 have good service.
                            `
                        :  
                        `
                        Minor delays between Idu and Wupa due
                        to a shortage of lines. Good Service on 
                        all other routes.
                        `
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
