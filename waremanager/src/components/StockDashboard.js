import React, { Component } from "react";
import { Table } from "reactstrap";
import NewStockModal from "./StockModal";
import { WH_PATH, WH_NAME } from "../constants";

class StockDashboard extends Component {
  render() {
    const stocks = this.props.stocks;
    return (
      <Table dark>
        <thead>
          <tr>
            <th>Products in stock in warehouse {this.props.wh_id}</th>
            <th></th>
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
              <tr key={stock.id}>
                <td>{stock.product_name}</td>
                <td>{stock.available}</td>
                <td colSpan="1" align="center"></td>
                <td align="center">
                  <NewStockModal
                    warehouse={stock.warehouse}
                    product={stock.product}
                    resetState={this.props.resetState}
                  />
                  &nbsp;&nbsp;
                </td>
              </tr>
            ))
          )}
        </tbody>
      </Table>
    );
  }
}

export default StockDashboard;