import React from "react";
import { Container, Navbar } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";

function NavigationBar() {
  return (
    <Navbar expand="lg" variant="dark" className="p-3">
      <Container>
        <Link
          to="/"
          className="navbar-brand d-flex align-items-center justify-content-between"
        >
          <span>
            PAWER<span style={{ color: "#58B19F" }}>CODED</span>{" "}
          </span>
        </Link>
        <div className="nav-btns order-lg-2">
          <Link to="/" className="btn login-btn me-2" type="button">
            <span className="">LOGIN</span>
          </Link>
          <Link to="/" className="btn register-btn " type="button">
            <span>REGISTER</span>
          </Link>
        </div>

        <Navbar.Toggle className="border-0">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse className="order-lg-1">
          <ul className="navbar-nav mx-auto text-center">
            <li className="nav-item p-2">
              <NavLink to="/" className="nav-link  text-uppercase">
                HOME
              </NavLink>
            </li>
            <li className="nav-item p-2">
              <NavLink to="/about-us" className="nav-link  text-uppercase">
                ABOUT US
              </NavLink>
            </li>
            <li className="nav-item p-2">
              <NavLink to="/forum" className="nav-link  text-uppercase">
                FORUM
              </NavLink>
            </li>
            <li className="nav-item p-2">
              <NavLink to="/contact-us" className="nav-link  text-uppercase">
                CONTACT US
              </NavLink>
            </li>
          </ul>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
