import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these EPIC Transportation systems...</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/bus.jpg'
              text='Explore the Comfort And Reliability with Road Transportation'
              label='BUS'
              path='/homepage'
            />
            <CardItem
              src='images/train.jpg'
              text='Travel with No Hustle by Rail Transportation...'
              label='Train'
              path='/homepage'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/plane.jpg'
              text='Travel with Happiness ...'
              label='International Flights'
              path='/homepage'
            />
            <CardItem
              src='images/private.jpg'
              text='Always feel in Home ...'
              label='Domestic Flights'
              path='/homepage'
            />
            <CardItem
              src='images/pay.jpg'
              text='Pay to Book Ticket ...'
              label='Robust Payment Methods'
              path='/homepage'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
