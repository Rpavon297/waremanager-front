import React, { Component, Fragment } from "react";
import { Button, Container } from "reactstrap";
import NewStockModal from "./stock/StockModal";
import { WH_NAME, PRO_NAME} from "../constants";

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
      <Container style={{ marginBottom: "10px"}} >
        <Fragment>
          {button_wh}
          &nbsp;&nbsp;
          {button_pr}
          &nbsp;&nbsp;
          <NewStockModal
                    preselWarehouse={false}
                    resetState={this.props.resetState}
                  />
        </Fragment>
      </Container>
    );
  }
}

export default TopMenu;