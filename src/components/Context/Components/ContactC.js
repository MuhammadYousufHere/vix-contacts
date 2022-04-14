import React, { Component } from "react";
import PropTypes from "prop-types";
import { Consumer } from "../Context";
import axios from "axios";
import { NavLink } from "react-router-dom";

class Contact extends Component {
  state = {
    showContent: false,
  };
  onShowClick = () => {
    this.setState({ showContent: !this.state.showContent });
  };

  onClickDelete = async (id, dispatch) => {
    // delete request

    await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);

    dispatch({ type: "DELETE_CONTACT", payload: id });
  };

  render() {
    // destructuring
    const { name, email, phone, id } = this.props.contact;
    const { showContent } = this.state;
    return (
      <Consumer>
        {(value) => {
          const { dispatch } = value;

          return (
            <div className="card card-body mb-3">
              <h4>
                {name}
                <i
                  onClick={this.onShowClick}
                  className="fas fa-chevron-circle-down"
                  style={{
                    marginLeft: "3px",
                    color: "green",
                    fontSize: "18px",
                    cursor: "pointer",
                  }}
                />

                <i
                  className="fas fa-times-circle"
                  onClick={this.onClickDelete.bind(this, id, dispatch)}
                  style={{
                    cursor: "pointer",
                    float: "right",
                    color: "red",
                    fontSize: "20px",
                    padding: "4px",
                  }}
                />
                <NavLink to={`/edit/${id}`}>
                  <i
                    className="fas fa-pencil-alt"
                    style={{
                      cursor: "pointer",
                      color: "black",
                      float: "right",
                      marginRight: "1rem",
                    }}
                  ></i>
                </NavLink>
              </h4>
              {/* Conditional on toggle */}
              {showContent ? (
                <ul className="list-group">
                  <li className="list-group-item"> Phone: {phone} </li>
                  <li className="list-group-item"> Email: {email} </li>
                  {/* <li className="list-group-item"> Website: {website} </li> */}
                </ul>
              ) : null}
            </div>
          );
        }}
      </Consumer>
    );
  }
}
Contact.protoType = {
  contact: PropTypes.object.isRequired,
};
export default Contact;
