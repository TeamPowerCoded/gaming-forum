import React from "react";
import { Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXbox, faPlaystation } from "@fortawesome/free-brands-svg-icons";
import { faLaptopCode } from "@fortawesome/free-solid-svg-icons";

function Services() {
  return (
    <div>
      <Container className="position-relative">
        <div className="row services">
          <div className="col-md-4 p-2">
            <div className=" p-2 text-center d-flex align-items-center justify-content-center">
              <h1 className="p-2">
                <FontAwesomeIcon icon={faLaptopCode} className="gameIcons" />
              </h1>
              <h1 className="p-2">PC</h1>
            </div>
          </div>
          <div className="col-md-4 p-2">
            <div className=" p-2 text-center d-flex align-items-center justify-content-center">
              <h1 className="p-2">
                <FontAwesomeIcon icon={faPlaystation} className="gameIcons" />
              </h1>
              <h1 className="p-2">PS5</h1>
            </div>
          </div>
          <div className="col-md-4 p-2">
            <div className=" p-2 text-center d-flex align-items-center justify-content-center">
              <h1 className="p-2">
                <FontAwesomeIcon icon={faXbox} className="gameIcons" />
              </h1>
              <h1 className="p-2">XBOX</h1>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Services;
