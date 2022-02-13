import React, { Component } from "react";
import { Button } from "reactstrap";
import { Redirect } from "react-router-dom";
//import MasterLayout from '../admin/Layouts/Profile/MasterLayout';

export default class Profile extends Component {
  state = {
    navigate: false,
  };

  onLogoutHandler = () => {
    localStorage.clear();
    this.setState({
      navigate: true,
    });
  };
  render() {
    const admin = JSON.parse(localStorage.getItem("adminData"));
    const { navigate } = this.state;
    if (navigate) {
      return <Redirect to="/" push={true} />;
    }
    return (
      <div className="container  border">
        
        <h3>Admin Profile</h3>
        <div className="row">
          <div className="col-xl-9 col-sm-12 col-md-9 text-dark">
            <h5> Welcome, {admin.first_name} </h5> You have Logged in
            successfully.
          </div>
          <div className="col-xl-3 col-sm-12 col-md-3">
            <Button
              className="btn btn-primary text-right"
              onClick={this.onLogoutHandler}
            >
              Logout
            </Button>
          </div>
        </div>
      </div>
    );
  }
}