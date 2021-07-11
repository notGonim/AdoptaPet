import { useEffect } from 'react'
import Footer from '../components/footer/footer.component'
import MainHeader from '../components/logedHeader/mainHeader.component'
import Shelters from '../components/shelters/shelters.component'


export default function SheltersPage() {



    useEffect(() => {
        document.title = 'Pets | Shelters'
    }, [])

    return (
        <>
            <MainHeader />
            <Shelters />
            <Footer />
        </>
    )

}