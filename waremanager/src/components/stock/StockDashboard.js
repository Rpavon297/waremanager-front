import React, { Component } from "react";
import { Table } from "reactstrap";
import NewStockModal from "./StockModal";

class StockDashboard extends Component {
  state = {
  };

  render() {
    const stocks = this.props.stocks;
    return (
      <Table dark>
        <thead>
          <tr>
            <th style={{padding: "15px"}}>Products in stock in warehouse {this.props.wh_id}</th>
            <th >
                  <NewStockModal
                    warehouse={this.props.wh_id}
                    preselWarehouse={true}
                    resetState={this.props.resetState}
                  />
                  &nbsp;&nbsp;
                </th>
          </tr>
        </thead>
        <tbody>
          {!stocks || stocks.length <= 0 ? (
            <tr>
              <td colSpan="6" align="center">
                <b>No stock available.</b>
              </td>
            </tr>
          ) : (
            stocks.map(stock => (
              <tr key={stock.id} >
                <td style={{padding: "15px"}}>{stock.product_name}</td>
                <td style={{padding: "15px"}}>{stock.available}</td>
                <td colSpan="1" align="center"></td>
                
              </tr>
            ))
          )}
        </tbody>
      </Table>
    );
  }
}

export default StockDashboard;