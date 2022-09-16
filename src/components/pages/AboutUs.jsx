import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook} from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import {faInstagram} from "@fortawesome/free-brands-svg-icons";
import {faPinterest} from "@fortawesome/free-brands-svg-icons";
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
                PawerCoded is a multi-platform technology and lifestyle media company.
                </p>
                <p class="p-2">
                Built for audiences around the globe, our goal is to make technology easier to understand.
                </p>
                <p class="p-2">
                PowerCoded is the everyday consumer’s source for technology news, reviews, videos, and buying advice…
                </p>
                <p class="p-2">
                A guide to finding the right devices to match their needs.
                </p>
                <p class="p-2">
                We have teams in New York, Singapore, Area 54, Germany, Biringan, and Manila.
                </p>
              </div>
            </div>
          <Container>
          <section className="banner p-5 d-flex flex-row align-items-center justify-content-center">
          </section>
          </Container>
        </div>
      </section>
      <Footer />
    </>
    );
}

export default AboutUs;