import React from 'react';
import TransportFilter from './TransportFilter.js';
import TransportList from './TransportList.js';
import { withTransportRenter } from './context.js';
import Loading from './Loading.js';

function TransportContainer({context}){
    const {loading, sortedTransport, transport} = context;
    if(loading){
        return (
            <Loading />
        );
    }
    return(
        <div>
            Hello from transport container
            <TransportFilter transport={transport} />
            <TransportList transport={sortedTransport} /> 
            <TransportList />
        </div>
    );
}


export default withTransportRenter(TransportContainer);

// import React from 'react';
// import TransportFilter from './TransportFilter.js';
// import TransportList from './TransportList.js';
// import { TransportRenter } from './context.js';
// import Loading from './Loading.js';

// export default function TransportContainer() {
//   return (
//       <TransportRenter>
//           {(value) => {
//               const {loading,sortedTransport,transport} = value
//               if(loading){
//                   return <Loading/>
//               }
//               return(
//                 <div>
//                     Hello from transport container
//                     <TransportFilter transport={transport} />
//                     <TransportList transport={sortedTransport} /> 
//                     <TransportList />
//                 </div>
//               );
//           }}
//       </TransportRenter>
    
//   );
// }


