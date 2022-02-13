import React from 'react'
import Button  from './Button';
import './StyleSection.css';
import '../App.css';

function StyleSection() {
    return (
        <div className='style-container'>
            <video src="/videos/eticket.mp4" autoPlay loop muted />
            <h1>Dimension To Explore</h1>
            <p>Check To ADD</p>
            <div className="style-btns">
                <Button 
                    className='btns' 
                    buttonStyle='btn--outline' 
                    buttonSize='btn--large'
                >
                    GET STARTED
                </Button>
                <Button 
                    className='btns' 
                    buttonStyle='btn--primary' 
                    buttonSize='btn--large'
                    >
                        Watch Facilities 
                    <i className='far fa-play-circle'/>
                </Button>


            </div>
        </div>
    )
}

export default StyleSection
