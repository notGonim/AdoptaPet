import Footer from '../components/footer/footer.component'
import Shelters from '../components/shelters/shelters.component'


export default function StoriesPage() {

    return (
        <>

            <div class="flex flex-col text-left py-12 px-6">
                <h1 class="text-left uppercase tracking-widest text-gray-400">testimonials</h1>
                <p class="mt-8 text-6xl font-bold">We are loyal with our customer</p>
                <p class="mt-8 text-lg font-semibold text-gray-700">you can always find hope in a dogs eyes.</p>
                <div class="mt-8 flex">
                    <button class="bg-blue-500 px-10 py-4 rounded-lg shadow-xl text-white">
                        Explore now
                    </button>
                </div>
            </div>

            <Footer />
        </>
    )

}