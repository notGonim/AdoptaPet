import pic1 from '../../assets/profiles/1.jpg'
import pic2 from '../../assets/profiles/2.jpg'
import pic3 from '../../assets/profiles/3.jpg'
import pic4 from '../../assets/profiles/4.jpg'
import pic5 from '../../assets/profiles/5.jpg'


export default function Testimonials() {





    return (
        <>

            <div class="flex flex-col text-left py-12 px-6">
                <p class="mt-8 text-6xl font-bold">We are loyal with our customer</p>
                <p class="mt-8 text-lg font-semibold text-gray-700">you can always find hope in a dogs eyes.</p>
               
            </div>


            <div className="grid grid-cols-1 gap-6 mt-10  p-2 lg:grid-cols-4   ">

                <div className="bg-purple-600 rounded-lg lg:col-span-2   p-8 text-white">
                    <div className="relative z-10 flex justify-start space-x-4">
                        <img src={pic1} alt="profile" className='h-8 w-8 rounded-full border-2 border-purple-400' />

                        <div className="">
                            <h2 className="font-bold text-sm"> Janet Kaefer</h2>
                            <h3 className="text-xs opacity-50">Irwin School Principal</h3>
                        </div>
                    </div>
                    <p className="mt-4 font-bold text-xl leading-tight">My mom suffered and passed away at Morristown Hospital this year. My dad died, and that gave my mom a heart attack or two, and she passed away 80 days later.  Crying as I write this, I want you to know her only pure relief was being visited by the dogs from Creature Comfort.  I specifically remember the visit from Kevin. My mom burst into tears as Kevin was placed in her arms and she looked forward to the visits and talked about them afterward. I can’t think of the other dogs’ names now.  It was the only relief she had during her ordeal.</p>

                </div>



                <div className="bg-red-400 rounded-lg    p-8 text-white">
                    <div className="flex justify-start space-x-4">
                        <img src={pic2} alt="profile" className='h-8 w-8 rounded-full border-2 border-purple-400' />

                        <div className="">
                            <h2 className="font-bold text-sm"> Danial Chester </h2>
                            <h3 className="text-xs opacity-50">Carmen Paul & Elsa </h3>
                        </div>
                    </div>
                    <p className="mt-4 font-bold text-xl leading-tight">It is with great pleasure that I write to say what a wonderful experience we had when Lucy (the dog) and her “parents” came to visit Irwin Elementary School.</p>
                </div>

                <div className="bg-blue-500 rounded-lg   p-8 text-white">
                    <div className="flex justify-start space-x-4">
                        <img src={pic3} alt="profile" className='h-8 w-8 rounded-full border-2 border-purple-400' />

                        <div className="">
                            <h2 className="font-bold text-sm"> Kim levy </h2>
                            <h3 className="text-xs opacity-50">Ramapo College</h3>
                        </div>
                    </div>
                    <p className="mt-4 font-bold text-xl leading-tight">The residents at Brookdale Florham Park eagerly await the visit each week from Creature Comfort. Some residents have their favorite dogs, while others love them all. </p>
                </div>


                <div className="bg-gray-900 rounded-lg lg:col-span-2  p-8 text-white">
                    <div className="flex justify-start space-x-4">
                        <img src={pic4} alt="profile" className='h-8 w-8 rounded-full border-2 border-purple-400' />

                        <div className="">
                            <h2 className="font-bold text-sm"> Ruby  Smam</h2>
                            <h3 className="text-xs opacity-50">Chancellor Academy</h3>
                        </div>
                    </div>
                    <p className="mt-4 font-bold text-xl leading-tight">This is a crazy time of year for the students and also the faculty and staff at Rutgers.  It is great to see them take a break from everything and just enjoy some downtime with the volunteers and their dogs. </p>
                </div>


                <div className="bg-purple-900 rounded-lg   p-8 text-white">
                    <div className="flex justify-start space-x-4">
                        <img src={pic5} alt="profile" className='h-8 w-8 rounded-full border-2 border-purple-400' />

                        <div className="">
                            <h2 className="font-bold text-sm"> Eddie Seavers</h2>
                            <h3 className="text-xs opacity-50">Nursing and Rehabilitation</h3>
                        </div>
                    </div>
                    <p className="mt-4 font-bold text-xl leading-tight">We love having visits from Creature Comfort at our school.  The animals are wonderful as well as their handlers.  Each visit makes not only the students smile but the staff as well. </p>

                </div>
            </div>

        </>
    )

}