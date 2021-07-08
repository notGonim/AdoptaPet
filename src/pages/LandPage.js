import React from 'react'
import Header from '../components/header-Landpage/header'
import Hero from '../components/hero/hero'
import Shelters from '../components/shelters/shelters.component'
import Donate from '../components/donate/donate.component'
import Footer from '../components/footer/footer.component'

export default function LandPage() {


    return (
        <>
            <Header />
            <Hero />
            <Shelters />
            <Donate />
            <Footer />
        </>

    )

}