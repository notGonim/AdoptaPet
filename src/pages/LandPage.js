import React, { useEffect } from 'react'
import Header from '../components/header-Landpage/header'
import Hero from '../components/hero/hero'
import Shelters from '../components/shelters/shelters.component'
import Donate from '../components/donate/donate.component'
import Footer from '../components/footer/footer.component'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


export default function LandPage() {


    useEffect(() => {
        document.title = 'HomePage - Pets'
    }, [])


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