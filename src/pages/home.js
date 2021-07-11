import { useEffect } from 'react'
import Footer from '../components/footer/footer.component'
import MainHeader from '../components/logedHeader/mainHeader.component'


export default function Home() {



    
    useEffect(() => {
        document.title = 'Pets | Home'
    }, [])
    return (
        <>
            <MainHeader />
            <h1>home sweet home</h1>
            <Footer />

        </>
    )

}