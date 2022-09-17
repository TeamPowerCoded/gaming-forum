import React from "react";
import Footer from "../Footer";
import { Container } from "react-bootstrap";

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
<<<<<<< HEAD
        <div className="d-flex bg-white flex-column bd-highlight mb-3">
          <div className="p-3 bd-highlight"></div>
          <div className="d-flex flex-nowrap justify-content-center">
            <div className="order-1 p-2 bd-highlight justify-content-left">
              <div className="p-2 bd-highlight">
                <FontAwesomeIcon icon={faFacebook} className="AppIcon" />
              </div>
              <div className="p-2 bd-highlight">
                <FontAwesomeIcon icon={faTwitter} className="AppIcon" />
              </div>
              <div className="p-2 bd-highlight">
                <FontAwesomeIcon icon={faInstagram} className="AppIcon" />
              </div>
              <div className="p-2 bd-highlight">
                <FontAwesomeIcon icon={faPinterest} className="AppIcon" />
              </div>
            </div>

            <div className="order-2 p-2 text-center">
              <p className="p-2">
=======
        <div class="d-flex bg-white flex-column bd-highlight mb-3">
          <div class="p-3 bd-highlight"></div>
          <div class="d-flex flex-nowrap justify-content-center">
            <div class="p-2 text-center">
              <p class="p-2">
>>>>>>> b7abcb95df7e10d78b4ee163ad0957163077ce86
                PawerCoded is a multi-platform technology and lifestyle media
                company.
              </p>
              <p className="p-2">
                Built for audiences around the globe, our goal is to make
                technology easier to understand.
              </p>
              <p className="p-2">
                PowerCoded is the everyday consumer’s source for technology
                news, reviews, videos, and buying advice…
              </p>
              <p className="p-2">
                A guide to finding the right devices to match their needs.
              </p>
              <p className="p-2">
                We have teams in New York, Singapore, Area 54, Germany,
                Biringan, and Manila.
              </p>
            </div>
          </div>
<<<<<<< HEAD

          <section className="banner bg-dark p-5 d-flex flex-row align-items-center justify-content-center"></section>

          {/* FOOTER */}
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
              {/* <ul className="list-unstyled d-flex">
              <li className="text-decoration-none text-muted fs-4 me-4">
                <a href="about-us" classname="text-decoration-none text-muted">
                  About Us</a>

                </li>
              <li className="text-decoration-none text-muted fs-4 me-4">
                Reviews Policy
              </li>
              <li className="text-decoration-none text-muted fs-4 me-4">
                Terms of Service
              </li>
              <li className="text-decoration-none text-muted fs-4 me-4">
               Privacy Policy
              </li>
              <li className="text-decoration-none text-muted fs-4 me-4">
               Disclaimer
              </li>
              <li className="text-decoration-none text-muted fs-4 me-4">
               Contact Us
              </li>
            </ul> */}

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

            {/* <div className="container">
              <div className="row text-white g-4">
                <div className="col-md-6 col-lg-3">
                  <a
                    href="index.html"
                    className="brand text-decoration-none text-white"
                  >
                    ULTRA
                  </a>
                  <p className="text-white mt-3 text-muted">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque
                    ipsa dolores laudantium harum repellat eligendi quos facilis qui
                    aliquam pariatur.
                  </p>
                </div>
                <div className="col-md-6 col-lg-3">
                  <h5 className="fw-light">Links</h5>
                  <ul className="list-unstyled">
                    <li className="my-3">
                      <Link
                        to="/"
                        className="text-white text-decoration-none text-muted"
                      >
                        <FontAwesomeIcon icon={faChevronRight} /> Home
                      </Link>
                    </li>
                    <li className="my-3">
                      <Link
                        to="/products"
                        className="text-white text-decoration-none text-muted"
                      >
                        <FontAwesomeIcon icon={faChevronRight} /> Products
                      </Link>
                    </li>
                    <li className="my-3">
                      <Link
                        to="/about-us"
                        className="text-white text-decoration-none text-muted"
                      >
                        <FontAwesomeIcon icon={faChevronRight} /> About Us
                      </Link>
                    </li>
                    <li className="my-3">
                      <Link
                        to="/contact-us"
                        className="text-white text-decoration-none text-muted"
                      >
                        <FontAwesomeIcon icon={faChevronRight} /> Contact Us
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="col-md-6 col-lg-3">
                  <h5 className="fw-light mb-3">Contact Us</h5>
                  <div className="d-flex justify-content-start align-items-start my-2 text-muted">
                    <span className="me-3">
                      <FontAwesomeIcon icon={faEnvelope} />
                    </span>
                    <span className="fw-light">ultra.support@gmail.com</span>
                  </div>
                  <div className="d-flex justify-content-start align-items-start my-2 text-muted">
                    <span className="me-3">
                      <FontAwesomeIcon icon={faMapMarked} />
                    </span>
                    <span className="fw-light">
                      Ultra Street, Angeles City, Pampanga Philippines
                    </span>
                  </div>
                  <div className="d-flex justify-content-start align-items-start my-2 text-muted">
                    <span className="me-3">
                      <FontAwesomeIcon icon={faPhone} />
                    </span>
                    <span className="fw-light">0987 6543 210</span>
                  </div>
                </div>
                <div className="col-md-6 col-lg-3">
                  <h5 className="fw-light mb-3">Follow Us</h5>
                  <ul className="list-unstyled d-flex">
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
                      <FontAwesomeIcon icon={faPinterest} />
                    </li>
                  </ul>
                </div>
              </div>
            </div> */}
          </footer>
          {/*    */}
=======
          <Container>
            <section className="banner d-flex flex-row align-items-center justify-content-center">
            </section>
          </Container>
>>>>>>> b7abcb95df7e10d78b4ee163ad0957163077ce86
        </div>
      </section>
      <Footer />
    </>
  );
}

export default AboutUs;
