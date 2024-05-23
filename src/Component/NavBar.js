import React from 'react'
import { Container, Form, Nav, Navbar, Offcanvas } from 'react-bootstrap'
import { BsCart2, BsPersonCircle   } from "react-icons/bs";

export const NavBar = () => {
  return (
 <>
   {['lg'].map((expand) => (
      <Navbar  key={expand} expand={expand} className="bg-body PureCart_Nav">
        <Container>
          <Navbar.Brand href="#home" className='Brand_style'>PureCart</Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
          <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                PureCart
              </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
          <Nav className="justify-content-center flex-grow-1 pe-3">
                  <Nav.Link href="/">Home</Nav.Link>
                  <Nav.Link href="#action2">Contact</Nav.Link>
                  <Nav.Link href="#action2">About</Nav.Link>
                  <Nav.Link href="/register">Sign Up</Nav.Link>
                </Nav>
                <Nav>
                <Form className='serch_nav'>
                    <Form.Control
                      type="search"
                      placeholder="What are you looking for?"
                      className="me-2"
                      aria-label="Search"
                     />
                  </Form>
                </Nav>
                <Nav className="justify-content-end">
                  <Nav.Link href="#action2" className='cart_icon'><BsCart2 /></Nav.Link>
                  <Nav.Link href="#action2" className='user_icon'><BsPersonCircle /></Nav.Link>
                </Nav>
                </Offcanvas.Body>
                </Navbar.Offcanvas>
        </Container>
      </Navbar>
))}
</>
);

}
