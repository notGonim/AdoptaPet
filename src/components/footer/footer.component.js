import React from 'react'
import { Link } from 'react-router-dom'
import { UilFacebookF } from '@iconscout/react-unicons'
import { UilTwitterAlt } from '@iconscout/react-unicons'
import { UilGithubAlt } from '@iconscout/react-unicons'


export default function Footer() {


    return (
        <div className="w-full bg-blue-700 text-white">
            <div className="xl:px-40 pb-12 lg:px-20 md:px-10 sm:px-5 px-10">
                <div className="w-full pt-12 flex flex-col sm:flex-row space-y-2 justify-start">
                    <div className="w-full sm:w-2/5 pr-6 flex flex-col space-y-4">
                        <p className="opacity-60">Cairo ,  Egypt.</p>
                        <div className="opacity-60 pt-2">
                            <p>© 2021 gonim .</p>
                        </div>
                    </div>
                    <div className="w-full sm:w-1/5 flex flex-col space-y-4">
                        <Link className="opacity-60">About Us</Link>
                        <Link className="opacity-60">Responsibilities</Link>
                        <Link className="opacity-60">Out Services</Link>
                        <Link className="opacity-60">Contact</Link>
                    </div>
                    <div className="w-full sm:w-1/5 flex flex-col space-y-4">
                        <Link className="opacity-60">Disclaimer</Link>
                        <Link className="opacity-60">Testimonials</Link>
                        <Link className="opacity-60">Privacy Policy</Link>
                        <Link className="opacity-60">Terms of Service</Link>
                    </div>
                    <div className="w-full sm:w-1/5 pt-6 flex items-end mb-1">
                        <div className="flex flex-row space-x-4">
                            <Link > <UilFacebookF /></Link>
                            <Link >   <UilTwitterAlt /></Link>
                            <Link >  <UilGithubAlt /></Link>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}