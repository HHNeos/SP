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

export default class addTrans extends Component {
  render() {
    return (
      <div>
        <Button
          className="float-right mb-4"
          color="primary"
          onClick={this.props.toggleNewVendorModal}
        >
          Add Vendor
        </Button>
        <Modal
          isOpen={this.props.newVendorModal}
          toggle={this.props.toggleNewVendorModal}
        >
          <ModalHeader>Add new Transport</ModalHeader>
          <ModalBody>
            <FormGroup>
              <Label for="name">Name</Label>
              <Input
                id="name"
                name="name"
                value={this.props.newVendorData.name}
                onChange={this.props.onChangeAddVendorHandler}
              />
            </FormGroup>
            <FormGroup>
              <Label for="address">Address</Label>
              <Input
                id="address"
                name="address"
                value={this.props.newVendorData.address}
                onChange={this.props.onChangeAddVendorHandler}
              />
            </FormGroup>

            <FormGroup>
              <Label for="route">Route</Label>
              <Input
                id="route"
                name="route"
                value={this.props.newVendorData.route}
                onChange={this.props.onChangeAddVendorHandler}
              />
            </FormGroup>
            <FormGroup>
              <Label for="email">E-Mail</Label>
              <Input
                id="email"
                name="email"
                value={this.props.newVendorData.email}
                onChange={this.props.onChangeAddVendorHandler}
              />
            </FormGroup>
            <FormGroup>
              <Label for="phone">Phone</Label>
              <Input
                id="phone"
                name="phone"
                value={this.props.newVendorData.phone}
                onChange={this.props.onChangeAddVendorHandler}
              />
            </FormGroup>
          </ModalBody>
          <ModalFooter>
          <Button color="primary" onClick={() => this.props.addVendor()}>
              Add
            </Button>{" "}
            <Button color="secondary" onClick={this.props.toggleNewVendorModal}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}