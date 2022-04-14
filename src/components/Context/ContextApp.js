import React from "react";
import Header from "../Header/Header";
import AddContact from "../Layout/AddContact";
import About from "../Pages/About";
import NotFound from "../Pages/NotFound";
import Contacts from "./Components/ContactsC";
import ContextProvider from "./Context";
import { HashRouter, Route, Routes } from "react-router-dom";
import EditContact from "../Layout/EditContact";

const ContextApp = (props) => {
  return (
    <ContextProvider>
      <HashRouter>
        <div className="App">
          <Header branding="Contact Manager" />
          <div className="container" style={containerStyle}>
            <Routes>
              <Route exact path="/" element={<Contacts />} />
              <Route exact path="layout/add" element={<AddContact />} />
              <Route exact path="/edit/:id" element={<EditContact />} />
              <Route exact path="pages/about" element={<About />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </div>
      </HashRouter>
    </ContextProvider>
  );
};
export default ContextApp;

const containerStyle = {
  padding: "15px",
  background: "#dee2e6",
  maxWidth: "750px",
};
