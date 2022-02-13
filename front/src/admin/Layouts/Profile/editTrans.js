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

export default class editTrans extends Component {
  render() {
    return (
      <div>
        <Modal
          isOpen={this.props.editVendorModal}
          toggle={this.props.toggleEditVendorModal}
        >
          <ModalHeader toggle={this.props.toggleEditVendorModal}>
            Update Vendor
          </ModalHeader>
          <ModalBody>
            <FormGroup>
              <Label for="name">Name</Label>
              <Input
                id="name"
                name="name"
                value={this.props.editVendorData.name}
                onChange={this.props.onChangeEditVendorHanler}
              />
            </FormGroup>
            <FormGroup>
              <Label for="address">Address</Label>
              <Input
                id="address"
                name="address"
                value={this.props.editVendorData.address}
                onChange={this.props.onChangeEditVendorHanler}
              />
            </FormGroup>

            <FormGroup>
              <Label for="route">Route</Label>
              <Input
                id="route"
                name="route"
                value={this.props.editVendorData.route}
                onChange={this.props.onChangeEditVendorHanler}
              />
            </FormGroup>

            <FormGroup>
              <Label for="email">Email</Label>
              <Input
                id="email"
                name="email"
                value={this.props.editVendorData.email}
                onChange={this.props.onChangeEditVendorHanler}
              />
            </FormGroup>
            <FormGroup>
              <Label for="phone">Phone</Label>
              <Input
                id="phone"
                name="phone"
                value={this.props.editVendorData.phone}
                onChange={this.props.onChangeEditVendorHanler}
              />
            </FormGroup>
          </ModalBody>
          <ModalFooter>
            <Button 
              color="primary" 
              onClick={this.props.updateVendor}
            >
              Update
            </Button>
            <Button
              color="secondary"
              onClick={this.props.toggleEditVendorModal}
            >
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}