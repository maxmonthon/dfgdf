import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import FakeShop from "../img/FakeShop.png";
function Navbarr() {
  return (
    <div>
      <>
        <Navbar bg="light" expand="lg">
          <Container>
            <Navbar.Brand href="/">
              <img src={FakeShop} alt="FakeShop" width="150" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav-" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="shop">Shop</Nav.Link>
                <Nav.Link href="cart">Cart</Nav.Link>
                <Nav.Link href="login">Login</Nav.Link>
                <Nav.Link href="register">Register</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </>
    </div>
  );
}

export default Navbarr;
