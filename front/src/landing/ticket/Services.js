import React, { Component } from 'react';
import Title from './Title';
import { FaCoffee, FaPlaneDeparture, FaRoute, FaUserCheck } from "react-icons/fa";

export default class Services extends Component {
  state={
    facilities:[
      {
        icon: <FaCoffee />,
        title: "free coffe",
        info: 'Information should be placed in here'
      },
      {
        icon: <FaPlaneDeparture />,
        title: "On-Time Transportation",
        info: 'Information should be placed in here'
      },
      {
        icon: <FaRoute />,
        title: "Route checking",
        info: 'Information should be placed in here'
      },
      {
        icon: <FaUserCheck />,
        title: "User Dashboard",
        info: 'Information should be placed in here'
      }
    ]
  }
  render() {
    return(
        <section className="facilities">
            <Title title="facilities" />
            <div className='facilities-center'>
              {this.state.facilities.map((item, index) => {
                return <article key={index} className="facility">
                  <span>{item.icon}</span>
                  <h6>{item.title}</h6>
                  <p>{item.info}</p>
                </article>
              })}
            </div>
        
        </section>
    );
  }
}
