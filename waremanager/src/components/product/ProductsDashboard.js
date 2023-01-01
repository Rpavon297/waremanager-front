import React, { Component } from "react";
import { Table } from "reactstrap";
import ConfirmDeleteModal from "../generic/ConfirmDelete";
import { PRO_NAME, PRO_PATH } from "../../constants";

class ProductDashoard extends Component {
  render() {
    const products = this.props.products;
    return (
      <Table dark>
        <thead>
          <tr>
            <th style={{padding: "15px"}}>Product name</th>
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
                <td style={{padding: "15px"}}>{product.name}</td>
                <td align="center">
                  
                &nbsp;&nbsp;
                  <ConfirmDeleteModal
                    id={product.id}
                    path={PRO_PATH}
                    entity_name={PRO_NAME}
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

export default ProductDashoard;