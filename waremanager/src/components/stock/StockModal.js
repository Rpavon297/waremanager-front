import React, { Component, Fragment } from "react";
import { Button, Modal, ModalHeader, ModalBody } from "reactstrap";
import NewStockForm from "./StockForm";
import icon from "../../public/plus_white.png"

import axios from "axios";

import { API_URL, API_VERSION, WH_PATH, PRO_PATH } from "../../constants";

class NewStockModal extends Component{
    state = {
        modal: false,
        products: [],
        warehouses: [],
        defaultWarehouse: 0,
      };
    
    componentDidMount() {
      axios.get(API_URL + "v" + API_VERSION + PRO_PATH).then(res => this.setState({ products: res.data["response"] }));
      if(!this.props.preselWarehouse){
        axios.get(API_URL + "v" + API_VERSION + WH_PATH).then(res => this.setState({ warehouses: res.data["response"] }));
        axios.get(API_URL + "v" + API_VERSION + WH_PATH + "default").then(res => this.setState({ defaultWarehouse: res.data["response"].id }));
      }
      else{
        this.setState({ warehouses: [{id: this.props.warehouse}]})
      }
    }

    toggle = () => {
      this.setState(previous => ({
        modal: !previous.modal
      }));
    };

    render() {
        var title = "New order";
    
        var button = (
        <Button
            className="float-right"
            onClick={this.toggle}
            style={{ minWidth: "40px", backgroundColor: "transparent", border: "None" }}
        >
          <img
            src={icon}
            width="30"
            alt="Add Icon"
            className="img-thumbnail"
            style={{  backgroundColor: "transparent", border: "None"}}
          />
        </Button>
        );
    
        return (
          <Fragment>
            {button}
            <Modal isOpen={this.state.modal} toggle={this.toggle}>
              <ModalHeader toggle={this.toggle}>{title}</ModalHeader>
              <ModalBody>                
              <NewStockForm
                resetState={this.props.resetState}
                toggle={this.toggle}
                products={this.state.products}
                warehouses={this.state.warehouses}
                preselWarehouse={this.props.preselWarehouse}
                defaultWarehouse={this.state.defaultWarehouse}/>                
              </ModalBody>
            </Modal>
          </Fragment>
        );
      }
}

export default NewStockModal;