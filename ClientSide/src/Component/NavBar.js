import React from "react";
import { Container, Form, Nav, Navbar, Offcanvas } from "react-bootstrap";
import Box from "@mui/material/Box";
import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Menu } from "./Menu";
import { useLogout } from "../hooks/logout";
import { useAuthContext } from "../hooks/useAuthContext";
export const NavBar = () => {
  const { logout } = useLogout();
  const { user } = useAuthContext();
  return (
    <>
      {["lg"].map((expand) => (
        <Navbar key={expand} expand={expand} className="bg-body PureCart_Nav">
          <Container>
            <Navbar.Brand href="/" className="Brand_style">
              PureCart
            </Navbar.Brand>
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
                  <Nav.Link href="/Contact">Contact</Nav.Link>
                  <Nav.Link href="/About">About</Nav.Link>
                  {!user && <Nav.Link href="/register">Sign Up</Nav.Link>}
                  {user && (
                    <Nav.Link
                      onClick={() => {
                        logout();
                      }}
                      href="/login"
                    >
                      Logout
                    </Nav.Link>
                  )}
                </Nav>
                <Nav>
                  <Form className="serch_nav">
                    <Form.Control
                      type="search"
                      placeholder="What are you looking for?"
                      className="me-2"
                      aria-label="Search"
                    />
                  </Form>
                </Nav>
                {user && (
                  <Nav className="justify-content-end">
                    <Nav.Link href="/cart" className="cart_icon">
                      <Box sx={{ color: "action.active" }}>
                        <Badge color="secondary" badgeContent={2}>
                          <ShoppingCartIcon />
                        </Badge>
                      </Box>
                    </Nav.Link>
                    <Menu className="user_icon" />
                  </Nav>
                )}
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
};
