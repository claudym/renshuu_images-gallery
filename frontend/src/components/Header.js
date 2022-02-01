import React from "react";
import { Navbar } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { ReactComponent as Logo } from "../images/logo.svg";

const Header = ({ title }) => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Logo style={{ maxWidth: "24rem", maxHeight: "4rem" }} />
      </Container>
    </Navbar>
  );
};

export default Header;
