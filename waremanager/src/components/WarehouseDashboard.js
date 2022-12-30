import React, { Component } from "react";
import { Table, Button } from "reactstrap";
import ConfirmDeleteModal from "./ConfirmDelete";
import { WH_PATH, WH_NAME, ST_NAME } from "../constants";

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
            <th>Warehouse location</th>
            <th></th>
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
                <td>{warehouses.address}</td>
                <td align="center">
                  <Button
                      className="float-right"
                      name={warehouses.id}
                      onClick={this.selectWarehouse}
                      style={{ minWidth: "200px" }}
                  >Modify stock</Button>
                  &nbsp;&nbsp;
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