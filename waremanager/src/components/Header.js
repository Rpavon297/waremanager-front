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
          style={{ marginTop: "20px" , backgroundColor: "transparent", border: "None"}}
        />
        <hr />
        <h1 style={{font: "DejaVu Sans Mono, monospace, bold", color: "#dae0e3"}}>Generic Warehouse Stock Manager</h1>
      </div>
    );
  }
}

export default Header;
