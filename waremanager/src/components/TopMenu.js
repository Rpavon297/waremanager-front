import React, { Component, Fragment } from "react";
import { Button, Modal, ModalHeader, ModalBody } from "reactstrap";
import NewWarehouseForm from "./WarehouseForm";
import { ST_NAME, WH_NAME, ORD_NAME, PRO_NAME} from "../constants";

class TopMenu extends Component {
  state = {
  };

  onChange = e => {
    this.props.setResource(e.target.name)
  };

  render() {
    var button_wh = (
    <Button
        className="float-right"
        name={WH_NAME}
        onClick={this.onChange}
        style={{ minWidth: "200px" }}
    >
        Warehouses
    </Button>
    );
    var button_pr = (
        <Button
            className="float-right"
            name={PRO_NAME}
            onClick={this.onChange}
            style={{ minWidth: "200px" }}
        >
            Products
        </Button>
        );

    return (
      <Fragment>
        {button_wh}
        {button_pr}
      </Fragment>
    );
  }
}

export default TopMenu;