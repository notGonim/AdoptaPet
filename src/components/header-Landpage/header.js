import React from 'react'
import { Link } from 'react-router-dom'


export default function Header() {


    return (
        <header className="h-16  bg-white border-b border-gray-primary ">
            <div className="container flex justify-between align-items items-center mx-auto max-w-screen-lg h-full">
                <div className="">
                    <img src={process.env.PUBLIC_URL + "favicon.ico"} alt="logo" className="bg-auto bg-no-repeat bg-center " />
                </div>
                <div className="flex items-center justify-center align-items  ">

                    <Link to="/" className="font-bold  text-gray-700	text-l   mr-8">   Pets</ Link>

                    <Link to="/" className="font-bold  text-gray-700	text-l   mr-8">   shelters</ Link>

                    <Link to="/" className="font-bold  text-gray-700	text-l   ">   Contact</ Link>


                </div>
                <div className="flex items-center justify-center align-items ">
                    <button type="button" title="Sign In" className="	text-xl p-2" > Sign in</button>
                    <button type="button" title="Sign Up" className="bg-blue-800 font-light  text-white	text-xl rounded  m-8 p-2 " > Sign up</button>
                </div>
            </div>
        </header>
    )
            }