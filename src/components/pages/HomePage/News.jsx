import React from "react";
import { Container } from "react-bootstrap";

function News() {
  return (
    <section className="py-5 section-title">
      <Container>
        <div className="row">
          <div className="col-md-8 p-0">
            <div className=" d-flex ">
              <div className="section-title pe-2 flex-grow-0 d-flex align-items-center justify-content-center py-2">
                <h3 className="fw-bold">LATEST NEWS</h3>
              </div>
              <div className="right-bar flex-grow-1 d-flex align-items-center justify-content-center me-2">
                <div className="right-stick w-100"></div>
              </div>
            </div>
            <div className="row g-1">
              <div className="col-md-6">
                <div className="card rounded-0">
                  <img
                    className="card-img-top"
                    src="https://images.pexels.com/photos/735911/pexels-photo-735911.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt=""
                  />
                  <div className="card-body bg-dark">
                    <h5 class="card-title">NEWS 1</h5>
                    <p className="card-text text-white small">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <small className="text-muted">08/29/2022</small>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="card rounded-0">
                  <img
                    className="card-img-top"
                    src="https://images.pexels.com/photos/735911/pexels-photo-735911.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt=""
                  />
                  <div className="card-body bg-dark ">
                    <h5 class="card-title">NEWS 1</h5>
                    <p className="card-text text-white small">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <small className="text-muted">09/01/2022</small>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="card rounded-0">
                  <img
                    className="card-img-top"
                    src="https://images.pexels.com/photos/735911/pexels-photo-735911.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt=""
                  />
                  <div className="card-body bg-dark ">
                    <h5 class="card-title">NEWS 1</h5>
                    <p className="card-text text-white small">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <small className="text-muted">09/01/2022</small>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="card rounded-0">
                  <img
                    className="card-img-top"
                    src="https://images.pexels.com/photos/735911/pexels-photo-735911.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt=""
                  />
                  <div className="card-body bg-dark ">
                    <h5 class="card-title">NEWS 1</h5>
                    <p className="card-text text-white small">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <small className="text-muted">09/01/2022</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 p-0">
            <div className="d-flex">
              <div className="right-bar pe-2 flex-grow-1 d-flex align-items-center justify-content-center">
                <div className="right-stick w-100"></div>
              </div>
              <div className="section-title pe-0 flex-grow-0 d-flex align-items-center justify-content-center py-2">
                <h3 className="fw-bold">DISCUSSIONS</h3>
              </div>
              <div className="right-bar ps-2 flex-grow-1 d-flex align-items-center justify-content-center">
                <div className="right-stick w-100"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-8 p-0 "></div>
        </div>
      </Container>
    </section>
  );
}

export default News;
