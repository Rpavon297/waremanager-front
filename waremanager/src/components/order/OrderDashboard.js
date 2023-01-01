import React, { Component } from "react";
import { Table, Button } from "reactstrap";


class OrderDashboard extends Component {

  render() {
    const orders = this.props.orders;
    return (
      <Table dark>
        <thead>
          <tr>
            <th style={{padding: "15px"}}>Warehouse</th>
            <th style={{padding: "15px"}}>Product</th>
            <th style={{padding: "15px"}}>Quantity</th>
            <th style={{padding: "15px"}}>Date</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {!orders || orders.length <= 0 ? (
            <tr>
              <td colSpan="6" align="center">
                <b>No data.</b>
              </td>
            </tr>
          ) : (
            orders.map(order => (
              <tr key={order.id}>
                <td style={{padding: "15px"}}>{order.warehouse_address}</td>
                <td style={{padding: "15px"}}>{order.product_name}</td>
                <td style={{padding: "15px"}}>{order.quantity}</td>
                <td style={{padding: "15px"}}>{order.date}</td>                
              </tr>
            ))
          )}
        </tbody>
      </Table>
    );
  }
}

export default OrderDashboard;