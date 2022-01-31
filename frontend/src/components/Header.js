import React from "react";
import { Navbar } from "react-bootstrap";
import { Container } from "react-bootstrap";

const Header = ({ title }) => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">{title}</Navbar.Brand>
        {/* <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav> */}
      </Container>
    </Navbar>
  );
};

export default Header;