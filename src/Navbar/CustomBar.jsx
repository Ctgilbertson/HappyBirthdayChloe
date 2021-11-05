import React from "react";

import { Navbar, Nav, NavDropdown} from 'react-bootstrap';
import { useHistory } from "react-router-dom";
import "./custom-bar.scss";

const Custombar = () => {

  let history = useHistory();
  return (
      <Navbar className="homeBar" bg="themed" expand="lg">
        <Navbar.Brand onClick={() => history.push("")}>
        <h2 class="display-4">CHLOPHER {'<'}3</h2>

          {/* <img 
            src={require("../../src/static/images/Logo.PNG")}
            height="30"
            className="d-inline-block align-top" 
            alt=""/> */}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link onClick={() => history.push("")}>Home</Nav.Link>
            <Nav.Link onClick={() => history.push("/about")}>Adventures</Nav.Link>
            <Nav.Link onClick={() => history.push("/member")}>Gallery</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
  );
};

export default Custombar;
