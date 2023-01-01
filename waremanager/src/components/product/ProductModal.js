import React, { Component, Fragment } from "react";
import { Button, Modal, ModalHeader, ModalBody } from "reactstrap";
import NewProductForm from "./ProductForm";

class NewProductModal extends Component {
  state = {
    modal: false
  };

  toggle = () => {
    this.setState(previous => ({
      modal: !previous.modal
    }));
  };

  render() {
    var title = "New product";

    var button = (
    <Button
        className="float-right"
        onClick={this.toggle}
        style={{ minWidth: "200px" }}
    >
        New product
    </Button>
    );

    return (
      <Fragment>
        {button}
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>{title}</ModalHeader>

          <ModalBody>
            <NewProductForm
              resetState={this.props.resetState}
              toggle={this.toggle}
              product={this.props.product}
            />
          </ModalBody>
        </Modal>
      </Fragment>
    );
  }
}

export default NewProductModal;