import axios from "axios";
import React, { Component } from "react";

const Context = React.createContext();
const reducer = (state, action) => {
  switch (action.type) {
    case "DELETE_CONTACT":
      return {
        ...state,
        contacts: state.contacts.filter((contact) => {
          return contact.id !== action.payload;
        }),
        // payload is data you send along with action, id as payload for this instance
      };
    case "UPDATE_CONTACT":
      return {
        ...state,
        contacts: state.contacts.map((contact) => {
          contact.id === action.payload.id
            ? (contact = action.payload)
            : contact;
        }),
      };
    case "ADD_CONTACT":
      return {
        ...state,
        contacts: [action.payload, ...state.contacts],
      };
    default:
      return state;
  }
};

class ContextProvider extends Component {
  state = {
    contacts: [],
    // need a way to call action; so we need dispatch.
    dispatch: (action) => this.setState((state) => reducer(state, action)),
    // dispatch is part of our state now, so it's in state for access
  };
  async componentDidMount() {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    this.setState({ contacts: response.data });
  }
  render() {
    return (
      <Context.Provider value={{ ...this.state }}>
        {this.props.children}
      </Context.Provider>
    );
  }
}
export default ContextProvider;
export const Consumer = Context.Consumer;
