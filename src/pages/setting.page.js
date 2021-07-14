import { useEffect } from 'react'
import Footer from '../components/footer/footer.component'
import MainHeader from '../components/logedHeader/mainHeader.component'
import setting from '../assets/setting.svg'


export default function SettingPage() {




    useEffect(() => {
        document.title = 'Pets | Edit'
    }, [])

    return (
        <>
            <MainHeader />
            <div className="conainer   flex-col flex justify-center items-center ">
                <img src={setting} alt="404" className="w-6/12 mt-12" />
            </div>
            <Footer />

        </>
    )

}