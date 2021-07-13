import { useEffect } from 'react'
import Footer from '../components/footer/footer.component'
import MainHeader from '../components/logedHeader/mainHeader.component'
import Pets from '../components/pet/pet.component'


export default function Home() {




    useEffect(() => {
        document.title = 'Pets | Home'
    }, [])
    return (
        <>
            <MainHeader />
            <Pets />
            <Footer />

        </>
    )

}