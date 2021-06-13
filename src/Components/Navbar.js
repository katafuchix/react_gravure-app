import React from 'react';
//import * as ReactBootStrap from "react-bootstrap";
import {
    BrowserRouter as Router,
    //useParams,
  } from "react-router-dom";

import { Navbar,Nav,NavDropdown/*,Form,FormControl,Button*/ } from 'react-bootstrap'

const NavBar = () => {

  return(
      <div>
          <div className="row fixed-top">
              <div className="col-md-12">
                  <Router>
                      <Navbar bg="dark" variant="dark" expand="sm" sticky="top">
                          <Navbar.Brand href="/">React Bootstrap Navbar</Navbar.Brand>
                          <Navbar.Toggle aria-controls="basic-navbar-nav" />
                          <Navbar.Collapse id="basic-navbar-nav">
                              <Nav className="mr-auto">
                              <Nav.Link href="/">Home</Nav.Link>
                              <Nav.Link href="/about-us">Contact Us</Nav.Link>
                              <Nav.Link href="/contact-us">About Us</Nav.Link>
                              <Nav.Link href="/gravure">GravureList</Nav.Link>
                              <Nav.Link href="/person">PersonList</Nav.Link>
                              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                  <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                  <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                  <NavDropdown.Divider />
                                  <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                              </NavDropdown>
                              </Nav>
                          </Navbar.Collapse>
                      </Navbar>
                  </Router>
              </div>
          </div>
      </div>
  )
/*
    return(
        <div className="App">
    <ReactBootStrap.Navbar collapseOnSelect expand="xl" bg="danger" variant="dark">
  <ReactBootStrap.Navbar.Brand href="#home">menu</ReactBootStrap.Navbar.Brand>
  <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
    <ReactBootStrap.Nav className="mr-auto">
    <Link to="/features">
    <ReactBootStrap.Nav.Link href="#features">Features</ReactBootStrap.Nav.Link>
    </Link>
    <Link to="/pricing">
    <ReactBootStrap.Nav.Link href="#pricing">Pricing</ReactBootStrap.Nav.Link>
    </Link>
      <ReactBootStrap.NavDropdown title="YEET" id="collasible-nav-dropdown">
        <ReactBootStrap.NavDropdown.Item href="#action/3.1">Action</ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Item href="#action/3.2">Another action</ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Item href="#action/3.3">Something</ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Divider />
        <ReactBootStrap.NavDropdown.Item href="#action/3.4">Separated link</ReactBootStrap.NavDropdown.Item>
      </ReactBootStrap.NavDropdown>
    </ReactBootStrap.Nav>
    <ReactBootStrap.Nav>
    <Link to="/deets">
    <ReactBootStrap.Nav.Link href="#deets">More deets</ReactBootStrap.Nav.Link>
    </Link>
    <Link to="/dankmemes">
    <ReactBootStrap.Nav.Link eventKey={2} href="#memes">
        Dank memes
      </ReactBootStrap.Nav.Link>
    </Link>
    </ReactBootStrap.Nav>
  </ReactBootStrap.Navbar.Collapse>
</ReactBootStrap.Navbar>
        </div>
    )
*/
}

export default NavBar;
