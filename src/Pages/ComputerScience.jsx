import React, { useEffect } from 'react'
import Header from '../Components/Header/Header'
import Navbars from '../Components/Navbars/Navbars'
import HeroSection from '../Components/HeroSection/HeroSection'
import Footer from '../Components/Footer/Footer'

export default function ComputerScience() {

    useEffect(() => {
        document.title = 'Department of Computer Science'
    }, [document])

    return (
        <>
            <Header />
            <Navbars />
            <HeroSection />
            <Footer />
        </>
    )
}
