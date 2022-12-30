import React, { Component } from "react";
import { Table } from "reactstrap";
import { WH_PATH, WH_NAME } from "../constants";

class ProductDashoard extends Component {
  render() {
    const products = this.props.products;
    return (
      <Table dark>
        <thead>
          <tr>
            <th>Product name</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {!products || products.length <= 0 ? (
            <tr>
              <td colSpan="6" align="center">
                <b>There are no products.</b>
              </td>
            </tr>
          ) : (
            products.map(product => (
              <tr key={product.id}>
                <td>{product.name}</td>
                <td align="center">
                </td>
              </tr>
            ))
          )}
        </tbody>
      </Table>
    );
  }
}

export default ProductDashoard;