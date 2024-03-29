import React, { Component } from 'react';
import defaultBcg from '../img/images/transport-1.jpeg';
import THero from './THero';
import Banner from './Banner';
import { Link } from 'react-router-dom';
import { TransportContext } from './context';
import StyledTHero from './StyledTHero';

export default class SingleTransport extends Component {
  constructor(props){
    super(props);
    this.state ={
      slug: this.props.match.params.slug,
      defaultBcg
    };
  }
  static contextType = TransportContext;
  // componentDidMount(){

  // }
  render() {
    
    const { getTransport } = this.context;
    const transport = getTransport(this.state.slug);
    if(!transport){
      return(
        <div className="error">
          <h3>no such transport could be found...</h3>
          <Link to="/alltransport" className="btn-primary">back to transports</Link>
        </div>
      );
    }
    const {name, description, capacity, size, price, extras, breakfast, pets, images} = transport;
    const [mainImg, ...defaultImg] = images;

    return (
      <>
        <StyledTHero img={mainImg || this.state.defaultBcg}>
          <Banner title={`${name} transport`}>
            <Link to='/alltransport' className="btn-primary">
              back to transport
            </Link>
          </Banner>
        </StyledTHero>
        <section className="single-transport">
          <div className="single-transport-images">
          { defaultImg.map((item, index)=>{
            return <img key={index} src={item} alt={name} />;
          })}
          </div>
          <div className="single-transport-info">
            <article className="desc">
              <h3>details</h3>
              <p>{description}</p>

            </article>
            <article className="info">
              <h3>info</h3>
              <h6>price: ${price}</h6>
              <h6>size: ${size} SQFT</h6>
              <h6>max capacity: {" "}
                {capacity > 1 ? `${capacity} people`: 
                  `${capacity} person` }
                </h6>
              <h6>{pets?"pets allowed":"no pets allowed"}</h6>
              <h6>{breakfast && "free breakfast icluded"}</h6>
            </article>
          </div>
        </section>
        <section className="transport-extras">
          <h6>extras</h6>
          <ul className="extras">
            {extras.map((item, index) => {
              return <li key={index}>-{item}</li>;
            })}
          </ul>
        </section>
      </>
    );
  }
}
