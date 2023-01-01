import React, { Component, Fragment } from "react";
import { Button, Modal, ModalHeader, ModalBody } from "reactstrap";
import NewWarehouseForm from "./WarehouseForm";

class NewWarehouseModal extends Component {
  state = {
    modal: false
  };

  toggle = () => {
    this.setState(previous => ({
      modal: !previous.modal
    }));
  };

  render() {
    var title = "New warehouse";

    var button = (
    <Button
        className="float-right"
        onClick={this.toggle}
        style={{ minWidth: "200px" }}
    >
        New warehouse
    </Button>
    );

    return (
      <Fragment>
        {button}
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>{title}</ModalHeader>

          <ModalBody>
            <NewWarehouseForm
              resetState={this.props.resetState}
              toggle={this.toggle}
              warehouse={this.props.warehouse}
            />
          </ModalBody>
        </Modal>
      </Fragment>
    );
  }
}

export default NewWarehouseModal;