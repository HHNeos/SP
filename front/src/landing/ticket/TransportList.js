import React from 'react';
import AllTransport from './AllTransport';

export default function TransportList({transport}) {
    if(transport.length === 0){
        return(
            <div className="empty-search">
                <h3>unfortunately no transport matched you search parameters</h3>
            </div>
        )
        
    }

  return (
    <section className="transportlist">
        <div className="transportlist-center">
            {
                transport.map(item => {
                    return <transport key={item.id} transport={item} />;
                })
            }
        </div>
    </section>
  );
}
