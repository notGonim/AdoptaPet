import React from 'react'
import man from '../../assets/man.svg'


export default function Hero() {


    return (

        <div className="container flex justify-evenly items-center bg-gray-50 max-w-full h-screen  ">

            <div className="text-left m-8 items-start">
                <h1 className="text-6xl font-medium	text-blue-700 ">For Better Mental Health, Experience The Pet Effect </h1>
                <p className="text-xlg pt-10 font-medium">Pets, especially dogs and cats, can reduce stress, anxiety, and depression, ease loneliness, encourage exercise and playfulness, and even improve your cardiovascular health. Caring for an animal can help children grow up more secure and active. Pets also provide valuable companionship for older adults</p>
                <button type="button" className="w-44   bg-blue-700 font-bold  text-white	text-xl rounded  p-3 mt-11 " > Get started</button>
            </div>

            <div className="   w-full  ">
                <img src={man} alt="pet" className=" object-contain" />
            </div>
        </div>


    )
}