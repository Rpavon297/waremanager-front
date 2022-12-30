import React, { Component, Fragment } from "react";
import { Button, Modal, ModalHeader, ModalBody } from "reactstrap";
import NewWarehouseForm from "./WarehouseForm";
import { ST_NAME, WH_NAME, ORD_NAME, PRO_NAME} from "../constants";

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
        color="primary"
        className="float-right"
        onClick={this.toggle}
        style={{ minWidth: "200px" }}
    >
        Create
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