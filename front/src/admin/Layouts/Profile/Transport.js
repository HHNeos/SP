import axios from "axios";
import React, { Component } from "react";
import { Table, Button } from "reactstrap";
import AddTrans from './addTrans';
import EditTrans from './editTrans';

export default class Transport extends Component {
  constructor(props){
    super(props);
    this.state = {
        vendors: [],
        newVendorData: {
          name: "",
          address: "",
          route: "",
          email: "",
          phone: "",
        },
        isLoading: false,
        status: "",
        newVendorModal: false,
        editVendorData: {
          id: "",
          name: "",
          address: "",
          route: "",
          email: "",
          phone: "",
        },
        editVendorModal: false,
        noDataFound: "",
    };
  }
  


componentDidMount(){
    this.getVendors();
};

getVendors() {
axios.get("http://localhost:8000/api/vendors").then((response) => {
    if (response.status === 200) {
    this.setState({
        vendors: response.data.data ? response.data.data : [],
    });
    }
    if (
    response.data.status === "failed" &&
    response.data.success === false
    ) {
    this.setState({
        noDataFound: response.data.message,
    });
    }
});
}

toggleNewVendorModal = () => {
  this.setState({
    newVendorModal: !this.state.newVendorModal,
  });
};
onChangeAddVendorHandler = (e) => {
  let { newVendorData } = this.state;
  newVendorData[e.target.name] = e.target.value;
  this.setState({ newVendorData });
};
addVendor = () => {
  axios
    .post(
      "http://localhost:8000/api/create-vendor",
      this.state.newVendorData
    )
    .then((response) => {
      const { vendors } = this.state;
      const newVendors = [...vendors];
      newVendors.push(response.data);
      this.setState(
        {
          vendors: newVendors,
          newVendorModal: false,
          newVendorData: {
            name: "",
            address: "",
            route: "",
            email: "",
            phone: "",
          },
        },
        () => this.getVendors()
      );
    });
};

toggleEditVendorModal = () => {
  this.setState({
    editVendorModal: !this.state.editVendorModal,
  });
};
////////////
onChangeEditVendorHanler = (e) => {
  let { editVendorData } = this.state;
  editVendorData[e.target.name] = e.target.value;
  this.setState({ editVendorData });
};

editVendor = (id, name, address, route, email, phone) => {
  this.setState({
    editVendorData: { id, name, address, route, email, phone },
    editVendorModal: !this.state.editVendorModal,
  });
};

updateVendor = () => {
  let {
    id,
    name,
    address,
    route,
    email,
    phone,
  } = this.state.editVendorData;
  this.setState({
    isLoading: true,
  });
  axios
    .post("http://localhost:8000/api/create-vendor", {
      id,
      name,
      address,
      route,
      email,
      phone,
    })
    .then((response) => {
      this.getVendors();
      this.setState({
        editVendorModal: false,
        editVendorData: { name, address, route, email, phone },
        isLoading:false,
      });
    })
    .catch((error) => {
      this.setState({isLoading:false})
      console.log(error.response);
    });
};

deletVendor = (id) => {
  this.setState({
    isLoading: true,
  });
  axios
    .delete("http://localhost:8000/api/vendor/" + id)
    .then((response) => {
      this.setState({
        isLoading: false,
      });
      this.getVendors();
    })
    .catch((error) => {
      this.setState({
        isLoading: false,
      });
    });
};

  render() {
    const { newVendorData,editVendorData,noDataFound,vendors} = this.state;
      let vendorsDetails = [];
      if (vendors.length) {
        vendorsDetails = vendors.map((vendor) => {
          return (
            <tr key={vendor.id}>
              <td>{vendor.id}</td>
              <td>{vendor.name}</td>
              <td>{vendor.address}</td>
              <td>{vendor.route}</td>
              <td>{vendor.email}</td>
              <td>{vendor.phone}</td>
              <td>
                <Button
                  color="success"
                  className="mr-3"
                  size="sm"
                  onClick={() =>
                    this.editVendor(
                      vendor.id,
                      vendor.name,
                      vendor.address,
                      vendor.route,
                      vendor.email,
                      vendor.phone
                    )
                  }
                >
                  Edit
                </Button>
                <Button
                  color="danger"
                  size="sm"
                  onClick={() => this.deletVendor(vendor.id)}
                >
                  Delete
                </Button>
              </td>
            </tr>
          );
        });
      }
      if (this.state.isLoading) {
        return <div className="spinner-border text-center" role="status"> <span className="sr-only">Loading...</span>
      </div>
      } 
   
    return (
      <div className="App container mt-4">
              <h4 className="font-weight-bold">Vendors Registration</h4>
           <AddTrans 
            toggleNewVendorModal={this.toggleNewVendorModal}
            newVendorModal={this.state.newVendorModal}
            onChangeAddVendorHandler={this.onChangeAddVendorHandler}
            addVendor={this.addVendor}
            newVendorData={newVendorData}
           />
           <EditTrans
            toggleEditVendorModal={this.toggleEditVendorModal}
            editVendorModal={this.state.editVendorModal}
            onChangeEditVendorHanler={this.onChangeEditVendorHanler}
            editVendor={this.editVendor}
            editVendorData={editVendorData}
            updateVendor={this.updateVendor}
            />       
        <Table>
          
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Address</th>
              <th>Route</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Actions</th>
            </tr>
          </thead>
          {vendors.length === 0 ? (
            <tbody>
              <h3>{noDataFound}</h3>
            </tbody>
          ) : (
            <tbody>{vendorsDetails}</tbody>
          )}
        </Table>
      </div>
    );
  }
};

