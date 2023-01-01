import React, { Component } from "react";
import { Col, Container, Row } from "reactstrap";
import WarehouseDashboard from "./warehouse/WarehouseDashboard";
import ProductDashoard from "./product/ProductsDashboard";
import StockDashboard from "./stock/StockDashboard";
import NewWarehouseModal from "./warehouse/WarehouseModal";
import NewProductModal from "./product/ProductModal";
import OrderDashboard from "./order/OrderDashboard";
import TopMenu from "./TopMenu";

import axios from "axios";

import { API_URL, API_VERSION, WH_PATH, ST_PATH, PRO_PATH, WH_NAME, PRO_NAME, ST_NAME, ORD_NAME, ORD_PATH } from "../constants";

class Dashboard extends Component {
  state = {
    entities: [],
    default_entity: 0,
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
    axios.get(API_URL + "v" + API_VERSION + WH_PATH + "default").then(res => this.setState({ default_entity: res.data["response"].id }));
  };

  getStock = () =>{
    axios.get(API_URL + "v" + API_VERSION + ST_PATH + "?warehouse=" + this.state.selected_entity)
    .then(res => this.setState({ entities: res.data["response"] }));
  }

  getProducts = () =>{
    axios.get(API_URL + "v" + API_VERSION + PRO_PATH).then(res => this.setState({ entities: res.data["response"] }));
  }

  getOrders= () =>{
    axios.get(API_URL + "v" + API_VERSION + ORD_PATH).then(res => this.setState({ entities: res.data["response"] }));
  }

  setResource(resource_type, selected_entity){
    this.state.resource_type=resource_type;
    this.state.selected_entity=selected_entity;
    
    this.resetState();
  }

  resetState = () => {
    if(this.state.resource_type === WH_NAME){
      this.getWarehouses();
    }
    if(this.state.resource_type === ST_NAME){
      this.getStock();
    }
    if(this.state.resource_type === PRO_NAME){
      this.getProducts();
    }
    if(this.state.resource_type === ORD_NAME){
      this.getOrders();
    }
  };

  render() {
    var dashboard
    var create_button
    if(this.state.resource_type === WH_NAME){
      dashboard = <WarehouseDashboard
        warehouses={this.state.entities}
        setResource={this.setResource}
        resetState={this.resetState}
        default_entity={this.state.default_entity}
      />;
      create_button = <NewWarehouseModal create={true} resetState={this.resetState} />;
    }
    if(this.state.resource_type === PRO_NAME){
      dashboard = <ProductDashoard
        products={this.state.entities}
        resetState={this.resetState}
      />;
      create_button = <NewProductModal create={true} resetState={this.resetState} />;
    }
    if(this.state.resource_type === ST_NAME){
      dashboard = <StockDashboard
        stocks={this.state.entities}
        resetState={this.resetState}
        wh_id={this.state.selected_entity}
      />;
    }
    if(this.state.resource_type === ORD_NAME){
      dashboard = <OrderDashboard
        orders={this.state.entities}
        resetState={this.resetState}
      />;
    }

    return (
      <Container style={{ marginTop: "20px" }}>
        <Row>
          <Col>
            <TopMenu setResource={this.setResource} resetState={this.resetState}/>
          </Col>
        </Row>
        <Row>
          <Col>
            {dashboard}
          </Col>
        </Row>
        <Row>
          <Col>
            {create_button}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Dashboard;