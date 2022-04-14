import React from "react";
import PropTypes from "prop-types";
import "./Header.scss";
import { NavLink } from "react-router-dom";

const Header = (props) => {
  const { branding } = props;
  return (
    <nav className="navbar navbar-expend-sm navbar-dark bg-success mb-3 py-0">
      <div className="container">
        <a href="/" className="navbar-brand">
          {branding}
        </a>
        <div>
          <ul className="navbar-nav">
            <li className="navbar-item ">
              <NavLink to="/" className="nav-link">
                <i className="fa fa-home m-1"></i>Home
              </NavLink>
            </li>
            <li className="navbar-item">
              <NavLink to="/layout/add" className="nav-link">
                <i className="fa fa-plus m-1"></i>Add
              </NavLink>
            </li>
            <li className="navbar-item">
              <NavLink to="/pages/about" className="nav-link">
                <i className="fa fa-question m-1"></i>About
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

Header.defaultProps = {
  branding: "My App",
};
Header.propTypes = {
  branding: PropTypes.string.isRequired,
};
export default Header;

const navStyle = {
  display: "flex",
  alignItem: "center",
  justifyContent: "center",
};
