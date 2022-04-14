import React, { Component } from "react";
import { Consumer } from "../Context/Context";
import TextInput from "./TextInput";
import axios from "axios";
import { async } from "regenerator-runtime";

class AddContact extends Component {
  state = {
    name: "",
    email: "",
    phone: "",
    errors: {},
  };
  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  onSubmitHandler = async (dispatch, e) => {
    e.preventDefault();
    // get values from state
    const { name, email, phone } = this.state;

    // Check for error
    if (name === "") {
      this.setState({ errors: { name: "Name is required!" } });
      // setting state? also stop it using return
      return;
    }
    if (email === "") {
      this.setState({ errors: { email: "Email is required!" } });
      return;
    }
    if (phone === "") {
      this.setState({ errors: { phone: "Number is required!" } });
      return;
    }
    const newContact = {
      // don't need id now b/c making post req , it will be auto generated
      // id: uuid(),
      name,
      email,
      phone,
    };

    // call dispatch
    const response = await axios.post(
      `https://jsonplaceholder.typicode.com/users`,
      newContact
    );
    dispatch({ type: "ADD_CONTACT", payload: response.data });

    // Clear state
    this.setState({
      name: "",
      email: "",
      phone: "",
      errors: {},
    });
    // redirect
    browserHistory.push("/");
  };
  render() {
    const { name, email, phone, errors } = this.state;

    return (
      <Consumer>
        {(value) => {
          const { dispatch } = value;
          return (
            <div className="card mb-3">
              <div className="card-header">Add Contact</div>
              <div className="card-body">
                {/* onSubmit pass in dispatch  so we can use it inside  onsubmit*/}
                <form onSubmit={this.onSubmitHandler.bind(this, dispatch)}>
                  <TextInput
                    label="Name"
                    type="text"
                    name="name"
                    value={name}
                    placeholder="Enter Name..."
                    onChange={this.onChange}
                    error={errors.name}
                  />
                  <TextInput
                    label="Email"
                    type="email"
                    name="email"
                    value={email}
                    placeholder="Enter Email..."
                    onChange={this.onChange}
                    error={errors.email}
                  />
                  <TextInput
                    label="Phone"
                    type="number"
                    name="phone"
                    value={phone}
                    placeholder="Enter phone..."
                    onChange={this.onChange}
                    error={errors.phone}
                  />
                  <input
                    type="submit"
                    value="Add Contact"
                    className="btn btn-success "
                    style={btnStyle}
                  />
                </form>
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default AddContact;

const btnStyle = {
  width: "80%",
  transform: "translate(60px)",
  marginTop: "15px",
};
