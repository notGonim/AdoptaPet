import React from 'react'

import { UilArrowCircleRight } from '@iconscout/react-unicons'
export default function Donate() {


    return (

        <div className="container  p-11 flex  flex-col items-center bg-gray-50 max-w-full h-full	 ">
            <h2 className="text-center text-6xl  mb-5 font-medium">Donate</h2>
            <p className="font-normal text-2xl p-5 mt-5">Wanna Donate and help us to grow.</p>
            <div className="flex  justify-between items-center ">
                <input type="email" placeholder="Email Address" aria-label="Enter your email"
                    className="text-xl text-gray-base w-80 py-1 px-2  h-full py-5 px-4 outline-none border-r-0 border border-blue-900 rounded mb-2" />
                <button type="button" className="text-xl  w-44  flex justify-center items-center outline-none border-l-0 bg-blue-700 h-full  py-5 px-6 text-white font-medium   border-blue-900 rounded mb-2 " > Send<UilArrowCircleRight />  </button>
            </div>

        </div>


    )
}
