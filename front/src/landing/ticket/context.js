import React, { Component } from 'react';
import items from './data';

const TransportContext = React.createContext();

{/* <TranContext.Provider values={'hello'}> */}

export class TransportProvider extends Component {
    state={
        transport:[],
        sortedTransport:[],
        featuredTransport:[],
        loading: true,
        type: "all",
        capacity: 1,
        price: 0,
        minPrice: 0,
        maPrice: 0,
        minSize: 0,
        maxSixe: 0,
        breakfast: false,
        pets: false
    };
    // getData{

    // }

    componentDidMount(){
      // this.getData
      let transport = this.formatData(items);
      let featuredTransport = transport.filter(transport => transport.featured === true);
      this.setState({
        transport, 
        featuredTransport, 
        sortedTransport:transport, 
        loading:false
      });
    }

    formatData(items){
      let tempItems = items.map(item =>{
        let id = item.sys.id;
        let images = item.fields.images.map(image => image.fields.file.url);
        let transport = {...item.fields,images,id};
        return transport; 
      });
      return tempItems
    }

    getTransport = (slug) =>{
      let tempTransport = [...this.state.transport];
      const transport = tempTransport.find(transport => transport.slug === slug);
      return transport;
    }

  render() {
    return (
      <TransportContext.Provider value={{...this.state, getTransport: this.getTransport }}>
        {this.props.children}
      </TransportContext.Provider>
    );
  }
}

const TransportRenter = TransportContext.Renter;

export function withTransportRenter(Component){
  return function RenterWrapper(props){
    return(
      <TransportRenter>
        {value => <Component {...props} context={value} />}
      </TransportRenter>
    );
  };
}


export { TransportRenter, TransportContext };
