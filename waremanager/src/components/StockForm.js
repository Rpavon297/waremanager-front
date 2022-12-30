import React from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";

import axios from "axios";

import { API_URL, API_VERSION, ORD_PATH,} from "../constants";


class NewStockForm extends React.Component {
    state = {
      warehouse: 0,
      product: 0,
      quantity: 0,
      is_removing: false,      
    };
  
    componentDidMount() {
    }
  
    onChange = e => {
      this.setState({ [e.target.name]: e.target.value });
    };
  
    createWarehouse = e => {
      e.preventDefault();

      if(this.state.is_removing){
        this.state.quantity = -Math.abs(this.state.quantity)
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
        <Form onSubmit={this.createWarehouse}>
          <FormGroup>
            <Label for="address">Address:</Label>
            <Input
              type="text"
              name="address"
              onChange={this.onChange}              
            />
          </FormGroup>
          <Button>Send</Button>
        </Form>
      );
    }
  }
  
  export default NewWarehouseForm;