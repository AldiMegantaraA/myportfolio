import React, {useState} from 'react'
import Contact from '../components/Contact'
import { dataContact } from '../components/Contact/Data'
import Footer from '../components/Footer'
import HeroSection from '../components/HeroSection'
import InfoSection from '../components/InfoSection'
import { homeObjOne } from '../components/InfoSection/Data'
import Intidana from '../components/Intidana'
import { PortfolioSec } from '../components/Intidana/Data'
import Navbar from '../components/navbar'
import Portfolio from '../components/Portfolio'
import Services from '../components/Services'
import Sidebar from '../components/sidebar'

const Home = () => {
        const [isOpen, setIsOpen] = useState(false)

        const toggle = () => {
            setIsOpen(!isOpen)
        }

    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Navbar toggle={toggle}/>
            <HeroSection />
            <InfoSection { ...homeObjOne }/>
            <Intidana {...PortfolioSec}/>
            <Portfolio />
            <Services />
            <Contact {...dataContact} />
            <Footer />
        </>
    )
}


export default Home;
