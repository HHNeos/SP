import React from 'react';
// import Navbar from '../Navbar';
import THero from './THero';
import './style.css';
import Banner from './Banner';
import { Link } from 'react-router-dom';
import Services from './Services';
import { TransportProvider }  from './context';
import FeaturedTransport from './FeaturedTransport';
// import StyledTHero from './StyledTHero';
import { Button } from 'reactstrap';

const HomePage = () => {
  return(
    <TransportProvider>
      <div>
          {/* <Navbar /> */}
          <THero thero="defaultHero">
              <Banner title="luxurious transports" subtitle="delux journey starting at $50">
                  <Link to="alltransport" className='btn-primary'>
                      Our Transports
                  </Link>
              </Banner>
          </THero>
          <Services />
          <FeaturedTransport />
          {/* <StyledTHero /> */}
          {/* <Button>hello</Button> */}
          
      </div>
    </TransportProvider>
  );
};


export default HomePage;