//Homepage+frontend+navbar design

import React from 'react';
//import { Button } from './Button';
import { Link } from 'react-router-dom';

function Navbar() {
  
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
            <Link className="navbar-brand" to="/">E-Ticketing</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto nb-2 nb-lg-0">
                <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to="/login">Login</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to="/register">Register</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to="/admin">Admin</Link>
                </li>
            </ul>
            </div>
        </div>
    </nav>
  );
}

export default Navbar;