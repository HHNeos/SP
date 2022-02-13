import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from "prop-types";
import Transport from '../../admin/Layouts/Profile/Transport';


export default function TransportPage({transport}) {
  const {name, slug,images,price} = transport;
  return (
    <article className="transport">
      <div className="img-container">
        <img src={images[0]}  alt="single room" />
        <div className="price-top">
          <h6>${price}</h6>
          <p>per seat</p>
        </div>
        <Link to={`/alltransport/${slug}`} className="btn-primary transport-link">Features</Link>
      </div>
      <p className="transport-info">{name}</p>
    </article>
  );
}


Transport.propTypes = {
  transport: PropTypes.shape({
    name: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
    price: PropTypes.number.isRequired
  })
}