import React, { Component } from 'react';
import { TransportContext } from './context';
import TransportPage from "./TransportPage";
import Loading from "./Loading";
import Title from "./Title";

export default class FeaturedTransport extends Component {
    static contextType = TransportContext;
  render() { 
      let { loading, featuredTransport: transport } = this.context;
      transport = transport.map(transport =>{
        return <TransportPage key={transport.id} transport={transport} />
      })
      // console.log(transport);

    return (
      <section className="featured-transport">
        
        <Title title="featured transports" /> 
        <div className="featured-transport-center">
          { loading ? <Loading/> : transport}
        </div>
       </section>
    );
  }
}
