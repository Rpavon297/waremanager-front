import React, { Component } from "react";
import { Table, Button } from "reactstrap";
import ConfirmDeleteModal from "../generic/ConfirmDelete";
import ConfirmPostModal from "../generic/ConfirmPost";
import { WH_PATH, WH_NAME, ST_NAME } from "../../constants";
import icon from "../../public/star_white.png"

class WarehouseDashboard extends Component {
  selectWarehouse = e =>{
    this.props.setResource(ST_NAME, e.target.name)
  }

  render() {
    const warehouses = this.props.warehouses;
    return (
      <Table dark>
        <thead>
          <tr>
            <th style={{padding: "15px"}}>Warehouse location</th>
            <th colSpan="5"></th>
          </tr>
        </thead>
        <tbody>
          {!warehouses || warehouses.length <= 0 ? (
            <tr>
              <td colSpan="6" align="center">
                <b>There are no warehouses.</b>
              </td>
            </tr>
          ) : (
            warehouses.map(warehouses => (
              <tr key={warehouses.id}>
                <td style={{padding: "15px"}}>{warehouses.address} {warehouses.id == this.props.default_entity && "(default)"}</td>
                <td align="center">

                <ConfirmPostModal
                    id={warehouses.id}
                    path={WH_PATH + "default"}
                    entity_name={WH_NAME}
                    resetState={this.props.resetState}
                    disabled={warehouses.id == this.props.default_entity}
                    body={{warehouse: warehouses.id}}
                    button_color="transparent"
                    button_msg={<img
                                src={icon}
                                width="25"
                                alt="Default Icon"
                                className="img-thumbnail"
                                style={{  backgroundColor: "transparent", border: "None"}}
                              />}
                    modal_msg={"Are you sure you want to set warehouse " + warehouses.id + " on " + warehouses.address + " as the default warehouse?"}
                  />
                  &nbsp;&nbsp;
                  <Button
                      className="float-right"
                      name={warehouses.id}
                      onClick={this.selectWarehouse}
                      style={{ minWidth: "150px" }}
                  >Check stock</Button>
                  
                </td>
                <td>
                <ConfirmDeleteModal
                    id={warehouses.id}
                    path={WH_PATH}
                    entity_name={WH_NAME}
                    resetState={this.props.resetState}
                  />
                </td>
              </tr>
            ))
          )}
        </tbody>
      </Table>
    );
  }
}

export default WarehouseDashboard;