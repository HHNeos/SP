import axios from "axios";
import React, { Component } from "react";
import { Table, Button } from "reactstrap";
import AddDetail from './AddDetail';


export default class Detail extends Component {
  constructor(props){
    super(props);
    this.state = {
        admins: [],
        newAdminData: {
          first_name: "",
          last_name: "",
          full_name: "",
          email: "",
          password: "",
          phone: "",
        },
        isLoading: false,
        status: "",
        newAdminModal: false,
        editAdminData: {
            first_name: "",
            last_name: "",
            full_name: "",
            email: "",
            password: "",
            phone: "",
        },
        editAdminModal: false,
        noDataFound: "",
    };
  }
  


componentDidMount(){
    this.getAdmins();
};

getAdmins() {
axios.get("http://localhost:8000/api/admins").then((response) => {
    if (response.status === 200) {
    this.setState({
        admins: response.data.data ? response.data.data : [],
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

toggleNewAdminModal = () => {
  this.setState({
    newAdminModal: !this.state.newAdminModal,
  });
};
onChangeAddAdminHandler = (e) => {
  let { newAdminData } = this.state;
  newAdminData[e.target.name] = e.target.value;
  this.setState({ newAdminData });
};
addAdmin = () => {
  axios
    .post(
      "http://localhost:8000/api/admin-signup",
      this.state.newAdminData
    )
    .then((response) => {
      const { admins } = this.state;
      const newAdmins = [...admins];
      newAdmins.push(response.data);
      this.setState(
        {
            admins: newAdmins,
          newAdminModal: false,
          newAdminData: {
            first_name: "",
            last_name: "",
            full_name: "",
            email: "",
            password: "",
            phone: "",
          },
        },
        () => this.getAdmins()
      );
    });
};


////////////

updateAdmin = () => {
  let {
    id,
    first_name,
    last_name,
    full_name,
    email,
    password,
    phone,
  } = this.state.editAdminData;
  this.setState({
    isLoading: true,
  });
  axios
    .post("http://localhost:8000/api/admin-signup", {
        id,
        first_name,
        last_name,
        full_name,
        email,
        password,
        phone,
    })
    .then((response) => {
      this.getAdmins();
      this.setState({
        editAdminModal: false,
        editAdminData: { first_name, last_name, full_name, email, password, phone },
        isLoading:false,
      });
    })
    .catch((error) => {
      this.setState({isLoading:false})
      console.log(error.response);
    });
};

deletAdmin = (id) => {
  this.setState({
    isLoading: true,
  });
  axios
    .delete("http://localhost:8000/api/admin/" + id)
    .then((response) => {
      this.setState({
        isLoading: false,
      });
      this.getAdmins();
    })
    .catch((error) => {
      this.setState({
        isLoading: false,
      });
    });
};

  render() {
    const { newAdminData,editAdminData,noDataFound,admins} = this.state;
      let adminsDetails = [];
      if (admins.length) {
        adminsDetails = admins.map((admin) => {
          return (
            <tr key={admin.id}>
              <td>{admin.id}</td>
              <td>{admin.first_name}</td>
              <td>{admin.last_name}</td>
              <td>{admin.full_name}</td>
              <td>{admin.email}</td>
              <td>{admin.password}</td>
              <td>{admin.phone}</td>
              <td>
                <Button
                  color="success"
                  className="mr-3"
                  size="sm"
                  onClick={() =>
                    this.editAdmin(
                        admin.first_name,
                        admin.last_name,
                        admin.full_name,
                        admin.email,
                        admin.password,
                        admin.phone
                    )
                  }
                >
                  Edit
                </Button>
                <Button
                  color="danger"
                  size="sm"
                  onClick={() => this.deletAdmin(admin.id)}
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
              <h4 className="font-weight-bold">Admin Listing</h4>
           <AddDetail 
            toggleNewAdminModal={this.toggleNewAdminModal}
            newAdminModal={this.state.newAdminModal}
            onChangeAddAdminHandler={this.onChangeAddAdminHandler}
            addAdmin={this.addAdmin}
            newAdminData={newAdminData}
           />
                
        <Table>
          
          <thead>
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Full Name</th>
              <th>Email</th>
              <th>Password</th>
              <th>Phone</th>
              <th>Actions</th>
            </tr>
          </thead>
          {admins.length === 0 ? (
            <tbody>
              <h3>{noDataFound}</h3>
            </tbody>
          ) : (
            <tbody>{adminsDetails}</tbody>
          )}
        </Table>
      </div>
    );
  }
};

