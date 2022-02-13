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

export default class AddDetail extends Component {
  render() {
    return (
      <div>
        <Button
          className="float-right mb-4"
          color="primary"
          onClick={this.props.toggleNewAdminModal}
        >
          Add Admin
        </Button>
        <Modal
          isOpen={this.props.newAdminModal}
          toggle={this.props.toggleNewAdminModal}
        >
          <ModalHeader>Add new Admin</ModalHeader>
          <ModalBody>

            <FormGroup>
              <Label for="full_name">Name</Label>
              <Input
                id="name"
                name="name"
                value={this.props.newAdminData.name}
                onChange={this.props.onChangeAddAdminHandler}
              />
            </FormGroup>
            <FormGroup>
              <Label for="email">E-Mail</Label>
              <Input
                id="email"
                name="email"
                value={this.props.newAdminData.email}
                onChange={this.props.onChangeAddAdminHandler}
              />
            </FormGroup>
            <FormGroup>
              <Label for="password">Password</Label>
              <Input
                id="password"
                name="password"
                value={this.props.newAdminData.password}
                onChange={this.props.onChangeAddAdminHandler}
              />
            </FormGroup>
            <FormGroup>
              <Label for="phone">Phone</Label>
              <Input
                id="phone"
                name="phone"
                value={this.props.newAdminData.phone}
                onChange={this.props.onChangeAddAdminHandler}
              />
            </FormGroup>
          </ModalBody>
          <ModalFooter>
          <Button color="primary" onClick={() => this.props.addAdmin()}>
              Add
            </Button>{" "}
            <Button color="secondary" onClick={this.props.toggleNewAdminModal}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}