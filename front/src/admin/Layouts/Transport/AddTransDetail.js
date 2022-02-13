import React, { Component } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  FormGroup,
  Label,
  Input,
} from "reactstrap";

export default class AddTransDetail extends Component {
  render() {
    return (
      <div>
        <Button
          className="float-right mb-4"
          color="primary"
          onClick={this.props.toggleNewTransportModal}
        >
          Add Transport
        </Button>
        <Modal
          isOpen={this.props.newTransportModal}
          toggle={this.props.toggleNewTransportModal}
        >
          <ModalHeader>Add new Transport</ModalHeader>
          <ModalBody>
            <FormGroup>
              <Label for="name">Name</Label>
              <Input
                id="name"
                name="name"
                value={this.props.newTransportData.name}
                onChange={this.props.onChangeAddTransportHandler}
              />
            </FormGroup>
            
            <FormGroup>
              <Label for="type">Type</Label>
              <Input
                id="type"
                name="type"
                value={this.props.newTransportData.type}
                onChange={this.props.onChangeAddTransportHandler}
              />
            </FormGroup>
            <FormGroup>
              <Label for="price">Price</Label>
              <Input
                id="price"
                name="price"
                value={this.props.newTransportData.price}
                onChange={this.props.onChangeAddTransportHandler}
              />
            </FormGroup>
            <FormGroup>
              <Label for="routes">Routes</Label>
              <Input
                id="routes"
                name="routes"
                value={this.props.newTransportData.routes}
                onChange={this.props.onChangeAddTransportHandler}
              />
            </FormGroup>
          </ModalBody>
          <ModalFooter>
          <Button color="primary" onClick={() => this.props.addTransport()}>
              Add
            </Button>{" "}
            <Button color="secondary" onClick={this.props.toggleNewTransportModal}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}