import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
//import 'bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import { TransportProvider } from './landing/ticket/context.js';

/*
ReactDOM.render(<App />, document.getElementById('root'));*/

ReactDOM.render(
    <TransportProvider>
    <React.StrictMode>
        <Router>
            <App />
        </Router>
    </React.StrictMode>
    </TransportProvider>,
    document.getElementById('root')
    

);



//reportWebVitals();
