import React from 'react';
import THero from './THero';
import Banner from './Banner';
import { Link } from 'react-router-dom';
// import Navbar from '../Navbar';
import TransportContainer from './TransportContainer';

const AllTransport = () => {
  return(
      <>
          {/* <Navbar /> */}
          <THero hero="transHero">
            <Banner title="Our Transports">
              <Link to='/' className='btn-primary'>
                Return Home  
              </Link>  
            </Banner>  
          </THero>
          <TransportContainer />
      </>
  );
};

export default AllTransport;

