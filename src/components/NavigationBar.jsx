// import React, { useState } from "react";
import { Container, Dropdown, DropdownButton, Navbar } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShieldHalved } from "@fortawesome/free-solid-svg-icons";
import { auth } from "../config/firebase";
import { signOut } from "firebase/auth";
// import { useEffect } from "react";

function NavigationBar({ currentUser, isLoggedIn, setIsLoggedIn }) {
  // const user = auth.currentUser;

  const logoutUser = () => {
    signOut(auth)
      .then(() => {
        setIsLoggedIn(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Navbar expand="lg" variant="dark" className="p-3">
      <Container>
        <Link to="/" className="navbar-brand d-flex  justify-content-between">
          <span>
            <FontAwesomeIcon
              icon={faShieldHalved}
              className="gameIcons me-2"
              style={{ color: "#58B19F" }}
            />
            PAWER<span style={{ color: "#58B19F" }}>CODED</span>{" "}
          </span>
        </Link>
        <div className="nav-btns order-lg-2 d-none d-lg-block">
          {/* <Link to="/login" className="btn login-btn me-2" type="button">
            <span className="">LOGIN</span>
          </Link> */}
          {isLoggedIn ? (
            <DropdownButton
              id="dropdown-basic-button"
              title={`${currentUser.displayName}`}
            >
              <Dropdown.Item>{currentUser.email}</Dropdown.Item>
              <Dropdown.Item onClick={logoutUser}>Logout</Dropdown.Item>
            </DropdownButton>
          ) : (
            <Link to="/login" className="btn login-btn me-2" type="button">
              <span className="">LOGIN</span>
            </Link>
          )}
        </div>

        <Navbar.Toggle className="border-0">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse className="order-lg-1">
          <ul className="navbar-nav  text-center">
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
            <li className="nav-item p-2 d-block d-lg-none">
              <Link to="/login" className="btn login-btn me-2" type="button">
                <span className="">LOGIN</span>
              </Link>
            </li>
          </ul>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
