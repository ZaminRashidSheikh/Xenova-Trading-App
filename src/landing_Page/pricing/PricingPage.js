import React from 'react'
import Hero from './Hero'
import Brokerage from './Brokerage';
import OpenAccount from '../OpenAccount';
function PricingPage() {
    return ( 
        <>
            {/* <Navbar/> */}
            
            <Hero/>
            {/* <Footer/> */}
            <OpenAccount/>
            <Brokerage/>
        </>
     );
}

export default PricingPage;