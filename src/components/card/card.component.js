
export default function Card({name,age,dateCreated,shelter}) {


    return (
        <figure className="m-5 hover:bg-blue-500 hover:border-transparent hover:shadow-lg  hover:bg-light-blue-500  group block rounded-lg p-4 border border-gray-200
             w-60">
            <img className="w-28 h-28 rounded-full mx-auto" src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/why-cats-are-best-pets-worshipped-animals-1559234295.jpg" alt="" width="384" height="512" />
            <div className="  pt-6 group-hover:text-white group-hover:text-light-blue-200 text-black text-center space-y-4">
                <h2 className='font-bold'>Name : {name}</h2>
                <h2 className='font-bold'>Age : {age}</h2>
                <figcaption class="flex items-center justify-between font-medium">
                    <div class="text-cyan-600">
                        <img class="w-10 h-10 rounded-full mx-auto" src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/why-cats-are-best-pets-worshipped-animals-1559234295.jpg" alt="" width="384" height="512" />
                    </div>
                    <div class="text-cyan-600">{shelter}</div>
                    <div class="text-sm">Cairo,EG</div>
                </figcaption>
                <button type="button" className="w-full h-10 cursor-pointer bg-blue-700 font-bold group-hover:text-white
                     text-black text-center text-xl  mt-11 border rounded-md  " > Choose Me</button>
            </div>
        </figure>

    )
}