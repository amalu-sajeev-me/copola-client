import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Container, Nav } from "react-bootstrap";

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
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
          <Navbar.Brand href="/">Home</Navbar.Brand>
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
      </Wrapper>
    </>
  );
}

export default App;
