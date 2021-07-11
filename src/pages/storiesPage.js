import { useEffect } from 'react'
import Footer from '../components/footer/footer.component'
import MainHeader from '../components/logedHeader/mainHeader.component'
import Testimonials from '../components/Testimonials/Testimonials.component'


export default function StoriesPage() {


    
    useEffect(() => {
        document.title = 'Pets | Stories'
    }, [])

    return (
        <>
            <MainHeader />
            <Testimonials />
            <Footer />
        </>
    )

}