import React, {useState} from 'react'
import Footer from '../components/Footer'
import HeroSection from '../components/HeroSection'
import InfoSection from '../components/InfoSection'
import { secFour, secOne, secThree, secTwo } from '../components/InfoSection/data'
import NavBar from '../components/NavBar'
import Projects from '../components/Projects'
import SideBar from '../components/SideBar'

const Home = () => {
    const [isOpen, setIsOpen] = useState(false)
    const toggle = () => {
        setIsOpen(!isOpen)
    }
    return (
        <>
            <SideBar isOpen={isOpen} toggle={toggle}/>
            <NavBar toggle={toggle}/>
            <HeroSection />
            <InfoSection {...secOne}/>
            <Projects />
            <InfoSection {...secTwo}/>
            <InfoSection {...secThree}/>
            <InfoSection {...secFour}/>
            <Footer />
        </>
    )
}

export default Home
