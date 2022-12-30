import React, { Component, Fragment } from "react";
import { Button, Modal, ModalHeader, ModalBody } from "reactstrap";

import axios from "axios";

import { API_URL, API_VERSION, WH_PATH } from "../constants";

class NewStockModal extends Component{
    state = {
        modal: false
      };
    
      toggle = () => {
        this.setState(previous => ({
          modal: !previous.modal
        }));
      };

    render() {
        var title = "New order";
    
        var button = (
        <Button
            color="primary"
            className="float-right"
            onClick={this.toggle}
            style={{ minWidth: "200px" }}
        >
            Place order
        </Button>
        );
    
        return (
          <Fragment>
            {button}
            <Modal isOpen={this.state.modal} toggle={this.toggle}>
              <ModalHeader toggle={this.toggle}>{title}</ModalHeader>
    
              <ModalBody>
                
              </ModalBody>
            </Modal>
          </Fragment>
        );
      }
}

export default NewStockModal;