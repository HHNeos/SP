import React, { useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Switch, Route, Routes } from "react-router-dom";
import './App.css';
//import Navbar from './landing/Navbar';
import Services from './landing/pages/services/Services';
//import Signup1 from './landing/pages/signup/Signup1';
import Signup from './landing/pages/Signup';
import Signin from './landing/pages/Signin';
import Home from './landing/pages/Home';
import AdminLogin from './admin/AdminLogin';
import MasterLayout from './admin/Layouts/Profile/MasterLayout';
import Transport from './admin/Layouts/Profile/Transport';

import About from './landing/pages/About';
import Welcome from "./Welcome";
import TransDetail from "./admin/Layouts/Transport/TransDetail";

//import {Homepage } from './landing/ticket/tihome';
import HomePage from "./landing/ticket/HomePage"; 
import AllTransport from "./landing/ticket/AllTransport";
import Error from "./landing/ticket/Error";

import TransportPage from "./landing/ticket/TransportPage";
import SingleTransport from "./landing/ticket/SingleTransport";

import Bus from "./landing/ticket/Bus";
import Air from "./landing/ticket/Air";
import Train from "./landing/ticket/Train";
// import { Navbar } from "reactstrap";
import Navbar from "./landing/Navbar";

 

function App() {
  return (
    <div className="App">
      {/* <Navbar /> */}
      <Router>
        <Switch>
          <Route exact path="/" component={Welcome} />
          <Route exact path="/about" component={About} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/signin" component={Signin} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/services" component={Services} />
          <Route exact path="/adlogin" component={AdminLogin} />
          <Route path="/admin" name="Admin" render={(props) => <MasterLayout {...props}/>} />
          <Route exact path="/admin/transport" component={Transport} />
          <Route exact path="/admin/details" component={TransDetail} />

          <Route exact path="/homepage" component={HomePage} />
          <Route exact path="/alltransport" component={AllTransport} />
          <Route exact path="/alltransport/:slug" component={SingleTransport} />
          {/* <Route exact path="/air" component={Air} /> */}
          {/* <Route exact path="/bus" component={Bus} /> */}
          {/* <Route exact path="/train" component={Train} /> */}
          <Route component={Error} />
          <TransportPage />
          <SingleTransport />
          {/* <Route exact path="/error" component={Error} /> */}

        </Switch>
      </Router>
    </div>
  );
}

export default App;
