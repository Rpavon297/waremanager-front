import React from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";

import axios from "axios";

import { API_URL, API_VERSION, WH_PATH,} from "../../constants";


class NewWarehouseForm extends React.Component {
    state = {
      id: 0,
      address: "",
    };
  
    componentDidMount() {
      // Check for update functionality in the future (instead of just creating)
      if (this.props.warehouse) {
        const { id, address } = this.props.warehouse;
        this.setState({ id, address});
      }
    }
  
    onChange = e => {
      this.setState({ [e.target.name]: e.target.value });
    };
  
    createWarehouse = e => {
      e.preventDefault();
      axios.post(API_URL + "v" + API_VERSION.toString() + WH_PATH, this.state).then(() => {
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
            <Label style={{marginRight:"10px"}} for="address">Address:</Label>
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