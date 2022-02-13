import React from 'react';
import StyleSection from './landing/StyleSection';
import Cards from './landing/Cards';
import Footer from './landing/Footer';
import Navbar from './landing/Navbar';

//import GlobalStyles from './landing/pages/globalStyles';

function Welcome() {
    return (
        <>  

            {/*<GlobalStyles />*/}
            <Navbar />
            <StyleSection />
            <Cards />
            <Footer />
        </>
    )
}

export default Welcome;
