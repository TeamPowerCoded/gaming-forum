import React from "react";
import {faFacebook, faGooglePlay, faInstagram, faTwitter, faYoutube} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShieldHalved } from "@fortawesome/free-solid-svg-icons";
import { Container } from "react-bootstrap";


function Footer() {
    return (
      
        <footer className="bg-dark py-5">
        <Container>
        <Link to="/" className="navbar-brand d-flex  justify-content-center">
        <span>
          <FontAwesomeIcon
            icon={faShieldHalved}
            className="gameIcons me-2"
            style={{ color: "#58B19F" }}
          />
          <span style={{ color:"white"}}>PAWER</span><span style={{ color: "#58B19F" }}>CODED</span>{" "}
        </span>
        </Link>
        
        <div className="d-flex justify-content-center">
        <ul className="p-2 list-unstyled d-flex">
          <li className="text-decoration-none text-muted fs-4 me-4">
            <FontAwesomeIcon icon={faFacebook} />
          </li>
          <li className="text-decoration-none text-muted fs-4 me-4">
            <FontAwesomeIcon icon={faTwitter} />
          </li>
          <li className="text-decoration-none text-muted fs-4 me-4">
            <FontAwesomeIcon icon={faInstagram} />
          </li>
          <li className="text-decoration-none text-muted fs-4 me-4">
            <FontAwesomeIcon icon={faGooglePlay} />
          </li>
          <li className="text-decoration-none text-muted fs-4 me-4">
            <FontAwesomeIcon icon={faYoutube} />
          </li>
        </ul>
        </div>
        
        <div className="d-flex justify-content-center">
          <ul className="list-unstyled d-flex">
            <li className="nav-item px-2 py-2">
              <Link to="/about-us" className="nav-link text-white">
                ABOUT US
              </Link>
            </li>
            <li className="nav-item px-2 py-2">
              <Link to="/reviews-policy" className="nav-link text-white">
                REVIEWS POLICY
              </Link>
            </li>
            <li className="nav-item px-2 py-2">
              <Link to="/terms-of-service" className="nav-link text-white">
                TERMS OF SERVICE
              </Link>
            </li>
            <li className="nav-item px-2 py-2">
              <Link to="/privacy-policy" className="nav-link text-white">
                PRIVACY POLICY
              </Link>
            </li>
            <li className="nav-item px-2 py-2">
              <Link to="/disclaimer" className="nav-link text-white">
                DISCLAIMER
              </Link>
            </li>
            <li className="nav-item px-2 py-2">
              <Link to="/contact-us" className="nav-link text-white">
                CONTACT US
              </Link>
            </li>
          </ul>
        </div>
        </Container>
      </footer>
      

    );
}

export default Footer;