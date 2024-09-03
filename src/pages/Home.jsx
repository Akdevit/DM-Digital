import React from 'react'
import Nav from "../components/layout/nav"
import Hero from '../components/Hero'
import AboutUs from '../components/AboutUs'
import Csc from '../components/Csc'
import Footer from '../components/layout/Footer'
const Home = () => {
    return (
        <>
            <Nav />
            <Hero />
            <AboutUs />
            <Csc />
            <Footer />
        </>
    )
}

export default Home
