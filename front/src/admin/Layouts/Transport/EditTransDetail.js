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

export default class EditTransDetail extends Component {
  render() {
    return (
      <div>
        <Modal
          isOpen={this.props.editTransportModal}
          toggle={this.props.toggleEditTransportModal}
        >
          <ModalHeader toggle={this.props.toggleEditTransportModal}>
            Update Transport
          </ModalHeader>
          <ModalBody>
            <FormGroup>
              <Label for="name">Name</Label>
              <Input
                id="name"
                name="name"
                value={this.props.editTransportData.name}
                onChange={this.props.onChangeEditTransportHanler}
              />
            </FormGroup>
            

            <FormGroup>
              <Label for="type">Type</Label>
              <Input
                id="type"
                name="type"
                value={this.props.editTransportData.type}
                onChange={this.props.onChangeEditTransportHanler}
              />
            </FormGroup>

            <FormGroup>
              <Label for="price">Price</Label>
              <Input
                id="price"
                name="price"
                value={this.props.editTransportData.price}
                onChange={this.props.onChangeEditTransportHanler}
              />
            </FormGroup>
            <FormGroup>
              <Label for="routes">Routes</Label>
              <Input
                id="routes"
                name="Routes"
                value={this.props.editTransportData.routes}
                onChange={this.props.onChangeEditTransportHanler}
              />
            </FormGroup>
          </ModalBody>
          <ModalFooter>
            <Button 
              color="primary" 
              onClick={this.props.updateTransport}
            >
              Update
            </Button>
            <Button
              color="secondary"
              onClick={this.props.toggleEditTransportModal}
            >
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}