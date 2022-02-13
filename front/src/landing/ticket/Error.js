import React from 'react';
import THero from './THero';
import Banner from './Banner';
import { Link } from 'react-router-dom';
import './style.css';

export default function Error() {
  return(
    <div>
        <THero>
            <Banner title='404' subtitle="Page Not Found">
                <Link to='/' className='btn-primary'>
                    Return Home
                </Link>
            </Banner>
            
        </THero>;
    </div>
  );
}
