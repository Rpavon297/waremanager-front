import React, { Component } from "react";
import icon from "../public/warehouse.png"


class Header extends Component {
  render() {
    return (
      <div className="text-center">
        <img
          src={icon}
          width="100"
          alt="Warehouse Icon"
          className="img-thumbnail"
          style={{ marginTop: "20px" }}
        />
        <hr />
        <h1>Warehouse Manager</h1>
      </div>
    );
  }
}

export default Header;
