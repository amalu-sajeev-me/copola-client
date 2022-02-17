import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import Image from "react-bootstrap/Image";
import logo from "./assets/logo-black.png";
import { Navbar, Container, Nav } from "react-bootstrap";

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;
const Para = styled.p`
  color: darkgrey;
  text-align: center;
`;
const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;

function App() {
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="/">
            <Image src={logo} height="178" />
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#contact">contact</Nav.Link>
            <Nav.Link
              href="https://copola.herokuapp.com/api-docs"
              target={"_blank"}
            >
              Documentation
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Wrapper>
        <Title>COPOLA!</Title>
        <Para>
          A project to create a platform where skilled or unskilled laborers can
          find jobs.
        </Para>
      </Wrapper>
    </>
  );
}

export default App;
