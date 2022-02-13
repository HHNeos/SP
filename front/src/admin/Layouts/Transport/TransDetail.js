import axios from "axios";
import React, { Component } from "react";
import { Table, Button } from "reactstrap";
import AddTransDetail from "./AddTransDetail";
import EditTransDetail from './EditTransDetail';

export default class TransDetail extends Component {
  constructor(props){
    super(props);
    this.state = {
        transports: [],
        newTransportData: {
          name: "",
          type: "",
          price: "",
          routes: "",
        },
        isLoading: false,
        status: "",
        newTransportModal: false,
        editTransportData: {
          id: "",
          name: "",
          type: "",
          price: "",
          routes: "",
        },
        editTransportModal: false,
        noDataFound: "",
    };
  }
  


componentDidMount(){
    this.getTransports();
};

getTransports() {
axios.get("http://localhost:8000/api/transports").then((response) => {
    if (response.status === 200) {
    this.setState({
        transports: response.data.data ? response.data.data : [],
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

toggleNewTransportModal = () => {
  this.setState({
    newTransportModal: !this.state.newTransportModal,
  });
};
onChangeAddTransportHandler = (e) => {
  let { newTransportData } = this.state;
  newTransportData[e.target.name] = e.target.value;
  this.setState({ newTransportData });
};
addTransport = () => {
  axios
    .post(
      "http://localhost:8000/api/create-transport",
      this.state.newTransportData
    )
    .then((response) => {
      const { transports } = this.state;
      const newTransports = [...transports];
      newTransports.push(response.data);
      this.setState(
        {
            transports: newTransports,
          newTransportModal: false,
          newTransportData: {
            name: "",
            type: "",
            price: "",
            routes: "",
            },
        },
        () => this.getTransports()
      );
    });
};

toggleEditTransportModal = () => {
  this.setState({
    editTransportModal: !this.state.editTransportModal,
  });
};
////////////
onChangeEditTransportHanler = (e) => {
  let { editTransportData } = this.state;
  editTransportData[e.target.name] = e.target.value;
  this.setState({ editTransportData });
};

editTransport = (id, name, type, price, routes) => {
  this.setState({
    editTransportData: { id, name, type, price, routes },
    editTransportModal: !this.state.editTransportModal,
  });
};

updateTransport = () => {
  let {
    id,
    name,
    type,
    price,
    routes,
  } = this.state.editTransportData;
  this.setState({
    isLoading: true,
  });
  axios
    .post("http://localhost:8000/api/create-transport", {
        id,
        name,
        type,
        price,
        routes,
    })
    .then((response) => {
      this.getTransports();
      this.setState({
        editTransportModal: false,
        editTransportData: { name, type, price, routes },
        isLoading:false,
      });
    })
    .catch((error) => {
      this.setState({isLoading:false})
      console.log(error.response);
    });
};

deletTransport = (id) => {
  this.setState({
    isLoading: true,
  });
  axios
    .delete("http://localhost:8000/api/transport/" + id)
    .then((response) => {
      this.setState({
        isLoading: false,
      });
      this.getTransports();
    })
    .catch((error) => {
      this.setState({
        isLoading: false,
      });
    });
};

  render() {
    const { newTransportData,editTransportData,noDataFound,transports} = this.state;
      let transportsDetails = [];
      if (transports.length) {
        transportsDetails = transports.map((transport) => {
          return (
            <tr key={transport.id}>
              <td>{transport.id}</td>
              <td>{transport.name}</td>
              <td>{transport.type}</td>
              <td>{transport.price}</td>
              <td>{transport.routes}</td>
              <td>
                <Button
                  color="success"
                  className="mr-3"
                  size="sm"
                  onClick={() =>
                    this.editTransport(
                      transport.id,
                      transport.name,
                      transport.type,
                      transport.price,
                      transport.routes
                    )
                  }
                >
                  Edit
                </Button>
                <Button
                  color="danger"
                  size="sm"
                  onClick={() => this.deletTransport(transport.id)}
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
              <h4 className="font-weight-bold">Transports Registration</h4>
           <AddTransDetail 
            toggleNewTransportModal={this.toggleNewTransportModal}
            newTransportModal={this.state.newTransportModal}
            onChangeAddTransportHandler={this.onChangeAddTransportHandler}
            addTransport={this.addTransport}
            newTransportData={newTransportData}
           />
           <EditTransDetail
            toggleEditTransportModal={this.toggleEditTransportModal}
            editTransportModal={this.state.editTransportModal}
            onChangeEditTransportHanler={this.onChangeEditTransportHanler}
            editTransport={this.editTransport}
            editTransportData={editTransportData}
            updateTransport={this.updateTransport}
            />       
        <Table>
          
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Type</th>
              <th>Price</th>
              <th>Routes</th>
              <th>Actions</th>
            </tr>
          </thead>
          {transports.length === 0 ? (
            <tbody>
              <h3>{noDataFound}</h3>
            </tbody>
          ) : (
            <tbody>{transportsDetails}</tbody>
          )}
        </Table>
      </div>
    );
  }
};

