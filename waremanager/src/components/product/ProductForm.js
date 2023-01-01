import React from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";

import axios from "axios";

import { API_URL, API_VERSION, PRO_PATH,} from "../../constants";


class NewProductForm extends React.Component {
    state = {
        id: 0,
        name: "",
      };
    
      componentDidMount() {
        // Check for update functionality in the future (instead of just creating)
        if (this.props.product) {
          const { id, name } = this.props.product;
          this.setState({ id, name});
        }
      }
    
      onChange = e => {
        this.setState({ [e.target.name]: e.target.value });
      };
    
      createProduct = e => {
        e.preventDefault();
        axios.post(API_URL + "v" + API_VERSION.toString() + PRO_PATH, this.state).then(() => {
          this.props.resetState();
          this.props.toggle();
        });
      };
    
      default = value => {
        return value === "" ? "" : value;
      };
    
      render() {
        return (
          <Form onSubmit={this.createProduct}>
            <FormGroup>
              <Label style={{marginRight:"10px"}} for="name">Name:</Label>
              <Input
                type="text"
                name="name"
                onChange={this.onChange}              
              />
            </FormGroup>
            <Button>Send</Button>
          </Form>
        );
      }
  }
  
  export default NewProductForm;