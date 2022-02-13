import React from 'react';
import loadingGif from '../img/images/gif/loading-arrow.gif';

export default function Loading() {
  return (
    <div className="loading">
        <h4>transport data loading...</h4>
        <img src={loadingGif} alt="" />
    </div>
  );
}
