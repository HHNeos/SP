import React, { useState } from 'react'
import Navbar from '../../landing/Navbar';
import Down from './Down';
import Athero from './Athero';

import { SliderData }  from './SliderData';
import InfoSection from './InfoSection';
import { InfoData, InfoDataTwo, InfoDataThree, InfoDataFour } from './InfoData';

//import GlobalStyle  from './globalStyles';

function About() {

    const [isOpen, setIsOpen] = useState(false)

    const toggle = () =>{
        setIsOpen(!isOpen)
    }

    return (
        <>
        
        <Navbar toggle={toggle} />
        <Down isOpen={isOpen} toggle={toggle} />
        <Athero slides={SliderData} />
        <InfoSection {...InfoData} />
        <InfoSection {...InfoDataTwo} />
        <InfoSection {...InfoDataThree} />
        <InfoSection {...InfoDataFour} />
        </>
    )
}

export default About
