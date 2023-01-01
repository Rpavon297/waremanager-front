import React from "react";
import { Button, Form, FormGroup, Label } from "reactstrap";

import axios from "axios";

import { API_URL, API_VERSION, ORD_PATH,} from "../../constants";


class NewStockForm extends React.Component {
    state = {
      warehouse: 0,
      product: 0,
      quantity: 0,
      isRemoving: false,
      isUsingDefault: false,      
    };
  
    componentDidMount() {      
      this.setState({warehouse: this.props.warehouses[0].id, product: this.props.products[0].id})
    }
  
    onChangeCheck = e => {
      this.setState({ [e.target.name]: e.target.checked });
    };

    onChange = e => {
      this.setState({ [e.target.name]: e.target.value });
    };
  
    sendOrder = e => {
      e.preventDefault();

      if(this.state.isRemoving){
        this.state.quantity = -Math.abs(this.state.quantity)
      }
      if(this.state.isUsingDefault){
        this.state.warehouse = this.props.defaultWarehouse
      }

      axios.post(API_URL + "v" + API_VERSION.toString() + ORD_PATH, this.state).then(() => {
        this.props.resetState();
        this.props.toggle();
      });
    };
  
    default = value => {
      return value === "" ? "" : value;
    };
  
    render() {
      return (
        <Form onSubmit={this.sendOrder}>
            {!this.props.preselWarehouse && !this.state.isUsingDefault &&
            <FormGroup>
                <Label style={{marginRight:"10px"}} for="warehouse">Warehouse:</Label>
                <select
                name="warehouse"
                onChange={this.onChange}>
                    {this.props.warehouses.map(warehouse => 
                    <option name="warehouse" value={warehouse.id} >{warehouse.address}
                    </option>)}
                </select> 
            </FormGroup>
              }

            <FormGroup>
                <Label style={{marginRight:"10px"}} for="isUsingDefault">Use default warehouse</Label>
                <input
                type="checkbox"
                name="isUsingDefault"                
                onChange={this.onChangeCheck}
                />
            </FormGroup>

            <FormGroup>
              <Label style={{marginRight:"10px"}} for="product">Product:</Label>
              <select
              name="product"
              onChange={this.onChange}>
                  {this.props.products.map(product => 
                  <option name="product" value={product.id} >{product.name}
                  </option>)}
              </select>     
            </FormGroup> 
            <FormGroup>
              <Label style={{marginRight:"10px"}} for="quantity">Quantity:</Label>
              <input
              name="quantity"            
              type="number"
              onChange={this.onChange} />
            </FormGroup> 
            <FormGroup>    
              <Label style={{marginRight:"10px"}} for="isRemoving">Removing this stock:</Label>
              <input
              name="isRemoving"            
              type="checkbox"
              onChange={this.onChangeCheck} />
          </FormGroup>          
          <Button>Send</Button>
        </Form>
      );
    }
  }
  
  export default NewStockForm;