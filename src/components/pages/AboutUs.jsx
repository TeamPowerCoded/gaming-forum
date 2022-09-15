import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faGooglePlay,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faPinterest } from "@fortawesome/free-brands-svg-icons";
import { faShieldHalved } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function AboutUs() {
  return (
    <>
      <section className="aboutus bg-dark p-5 d-flex flex-row align-items-center justify-content-center">
        <div className="container p-1 bg-dark text-white align-self-end">
          <div className="p-1 p-md-1 text-center">
            <h1>
              - About Pawer<span style={{ color: "#58B19F" }}>Coded</span> -
            </h1>
          </div>
        </div>
      </section>
      <section>
        <div class="d-flex bg-white flex-column bd-highlight mb-3">
          <div class="p-3 bd-highlight"></div>
          <div class="d-flex flex-nowrap justify-content-center">
            <div class="order-1 p-2 bd-highlight justify-content-left">
              <div class="p-2 bd-highlight">
                <FontAwesomeIcon icon={faFacebook} className="AppIcon" />
              </div>
              <div class="p-2 bd-highlight">
                <FontAwesomeIcon icon={faTwitter} className="AppIcon" />
              </div>
              <div class="p-2 bd-highlight">
                <FontAwesomeIcon icon={faInstagram} className="AppIcon" />
              </div>
              <div class="p-2 bd-highlight">
                <FontAwesomeIcon icon={faPinterest} className="AppIcon" />
              </div>
            </div>

            <div class="order-2 p-2 text-center">
              <p class="p-2">
                PawerCoded is a multi-platform technology and lifestyle media
                company.
              </p>
              <p class="p-2">
                Built for audiences around the globe, our goal is to make
                technology easier to understand.
              </p>
              <p class="p-2">
                PowerCoded is the everyday consumer’s source for technology
                news, reviews, videos, and buying advice…
              </p>
              <p class="p-2">
                A guide to finding the right devices to match their needs.
              </p>
              <p class="p-2">
                We have teams in New York, Singapore, Area 54, Germany,
                Biringan, and Manila.
              </p>
            </div>
          </div>

          <section className="banner bg-dark p-5 d-flex flex-row align-items-center justify-content-center"></section>
          <footer className="bg-dark py-5">
            <Link
              to="/"
              className="navbar-brand d-flex  justify-content-center"
            >
              <span>
                <FontAwesomeIcon
                  icon={faShieldHalved}
                  className="gameIcons me-2"
                  style={{ color: "#58B19F" }}
                />
                <span style={{ color: "white" }}>PAWER</span>
                <span style={{ color: "#58B19F" }}>CODED</span>{" "}
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
          </footer>
        </div>
      </section>
    </>
  );
}

export default AboutUs;
