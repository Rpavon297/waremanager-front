import React, { Component } from "react";
import { Col, Container, Row } from "reactstrap";
import WarehouseDashboard from "./WarehouseDashboard";
import ProductDashoard from "./ProductsDashboard";
import StockDashboard from "./StockDashboard";
import NewWarehouseModal from "./WarehouseModal";
import TopMenu from "./TopMenu";

import axios from "axios";

import { API_URL, API_VERSION, WH_PATH, ST_PATH, PRO_PATH, WH_NAME, PRO_NAME, ST_NAME, ORD_NAME } from "../constants";

class Dashboard extends Component {
  state = {
    entities: [],
    selected_entity: null,
    resource_type: WH_NAME
  };

  constructor(props) {
    super(props)

    this.setResource = this.setResource.bind(this)
  }

  componentDidMount() {
    this.resetState();
  }

  getWarehouses = () => {
    axios.get(API_URL + "v" + API_VERSION + WH_PATH).then(res => this.setState({ entities: res.data["response"] }));
  };

  getStock = () =>{
    axios.get(API_URL + "v" + API_VERSION + ST_PATH + "?warehouse=" + this.state.selected_entity)
    .then(res => this.setState({ entities: res.data["response"] }));
  }

  getProducts = () =>{
    axios.get(API_URL + "v" + API_VERSION + PRO_PATH).then(res => this.setState({ entities: res.data["response"] }));
  }

  setResource(resource_type, selected_entity){
    this.state.resource_type=resource_type;
    this.state.selected_entity=selected_entity;
    
    this.resetState();
  }

  resetState = () => {
    if(this.state.resource_type == WH_NAME){
      this.getWarehouses();
    }
    if(this.state.resource_type == ST_NAME){
      this.getStock();
    }
    if(this.state.resource_type == PRO_NAME){
      this.getProducts();
    }
  };

  render() {
    var dashboard
    if(this.state.resource_type == WH_NAME){
      dashboard = <WarehouseDashboard
        warehouses={this.state.entities}
        setResource={this.setResource}
        resetState={this.resetState}
      />;
    }
    if(this.state.resource_type == PRO_NAME){
      dashboard = <ProductDashoard
        products={this.state.entities}
        resetState={this.resetState}
      />;
    }
    if(this.state.resource_type == ST_NAME){
      dashboard = <StockDashboard
        stocks={this.state.entities}
        resetState={this.resetState}
        wh_id={this.state.selected_entity}
      />;
    }

    return (
      <Container style={{ marginTop: "20px" }}>
        <Row>
          <Col>
            <TopMenu setResource={this.setResource} />
          </Col>
        </Row>
        <Row>
          <Col>
            {dashboard}
          </Col>
        </Row>
        <Row>
          <Col>
            <NewWarehouseModal create={true} resetState={this.resetState} />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Dashboard;