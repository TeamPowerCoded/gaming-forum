import React from "react";
import { Container } from "react-bootstrap";

function Blog() {
  return (
    <section className="bg-dark py-5">
      <Container>
        <div className="row ">
          <div className="col-md-8 p-0">
            <div className="d-flex">
              <div className="section-title pe-2 flex-grow-0 d-flex align-items-center justify-content-center py-2">
                <h3 className="fw-bold text-white">RECENT BLOG</h3>
              </div>
              <div className="right-bar flex-grow-1 d-flex align-items-center justify-content-center">
                <div className="right-stick w-100"></div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Blog;
