import React from 'react'
import shelter1 from '../../assets/shelter1.png'
import shelter2 from '../../assets/shelter2.png'
import shelter3 from '../../assets/shelter3.png'
import shelter4 from '../../assets/shelter4.png'
import shelter5 from '../../assets/shelter5.png'





export default function Shelters() {


    return (

        <div className="container h-screen	 p-11 flex  flex-col items-center  max-w-full  ">
            <h2 className="text-center text-6xl  mb-5 font-medium">Our Shelters</h2>
            <div className="flex  justify-around items-center ">
                <img src={shelter1} alt="shelter1" className=" w-52 h-52  object-cover" />
                <img src={shelter2} alt="shelter2" className=" w-52 h-52  object-cover" />
                <img src={shelter3} alt="shelter3" className="  w-52 h-52  object-cover" />
            </div>
            <div className="flex justify-around  items-center ">
                <img src={shelter4} alt="shelter4" className="  w-52 h-52  object-cover" />
                <img src={shelter5} alt="shelter5" className="  w-52 h-52  object-cover" />
                <img src="" alt="" />
            </div>
        </div>


    )
}