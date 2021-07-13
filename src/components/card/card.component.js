import shelter1 from '../../assets/shelter1.png'
import shelter2 from '../../assets/shelter2.png'
import shelter3 from '../../assets/shelter3.png'
import shelter4 from '../../assets/shelter4.png'
import shelter5 from '../../assets/shelter5.png'






export default function Card({ pet }) {

    return (
        <figure className="m-5 hover:bg-blue-500 hover:border-transparent hover:shadow-lg  hover:bg-light-blue-500  group block rounded-lg p-4 border border-gray-200
             w-60">
            <img src={pet.imageSrc} className="w-28 h-28 rounded-full mx-auto" alt="" />
            <div className="  pt-6 group-hover:text-white group-hover:text-light-blue-200 text-black text-center space-y-4">
                <h2 className='font-bold'>Name : {pet.petName}</h2>
                <h2 className='font-bold'>Age : {pet.age}</h2>
                <figcaption class="flex items-center justify-between font-medium">
                    <div class="text-cyan-600">
                        {/*   to refact later  */}
                        {pet.shelter === 'SunniDai' && <img className="w-10 h-10 rounded-full mx-auto" src={shelter1} alt="" />}
                        {pet.shelter === 'FourLeggd' && <img className="w-10 h-10 rounded-full mx-auto" src={shelter2} alt="" />}
                        {pet.shelter === 'CatAndDogs' && <img className="w-10 h-10 rounded-full mx-auto" src={shelter2} alt="" />}
                        {pet.shelter === 'Bittoo' && <img className="w-10 h-10 rounded-full mx-auto" src={shelter2} alt="" />}
                        {pet.shelter === 'PetHouse' && <img className="w-10 h-10 rounded-full mx-auto" src={shelter2} alt="" />}

                    </div>
                    <div class="text-cyan-600">{pet.shelter}</div>
                    <div class="text-sm text-gray-600"> {new Date(pet.dateCreated).toLocaleDateString("en-US")}
                    </div>
                </figcaption>
                <button type="button" className="w-full h-10 cursor-pointer bg-blue-700 font-bold group-hover:text-white
                     text-black text-center text-xl  mt-11 border rounded-md  " > Choose Me</button>
            </div>
        </figure>

    )
}
