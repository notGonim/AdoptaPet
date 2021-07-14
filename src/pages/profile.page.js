import { useEffect } from 'react'
import Footer from '../components/footer/footer.component'
import MainHeader from '../components/logedHeader/mainHeader.component'
import ProfileComp from '../components/profile/profile.component'


export default function ProfilePage() {



    useEffect(() => {
        document.title = 'Pets | Profile'
    }, [])

    return (
        <>
            <MainHeader />

            <ProfileComp />
            <Footer />

        </>
    )

}