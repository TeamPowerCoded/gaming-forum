import React from "react";
import { Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useCollection } from "react-firebase-hooks/firestore";
import { db } from "../../../config/firebase";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";

function News() {
  const dbPosts = db.collection("posts").orderBy("timestamp", "desc");
  const [posts] = useCollection(dbPosts);

  return (
    <section className="py-5 section-title">
      <Container>
        <div className="row">
          <div className="col-md-8 p-3">
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
                    <h5 className="card-title">NEWS 1</h5>
                    <p className="card-text text-white small">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Molestiae, enim?
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
                    <h5 className="card-title">NEWS 2</h5>
                    <p className="card-text text-white small">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Eius, porro?
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
                    <h5 className="card-title">NEWS 3</h5>
                    <p className="card-text text-white small">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Veniam, velit?
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
                    <h5 className="card-title">NEWS 4</h5>
                    <p className="card-text text-white small">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Eius, officia!
                    </p>
                    <small className="text-muted">09/01/2022</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 p-3">
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
            <div className="d-flex flex-column bg-light">
              {posts?.docs.map((doc) => (
                <div className="d-flex p-3 align-items-center " key={doc.id}>
                  <FontAwesomeIcon icon={faCircleUser} className="h2 px-3" />
                  <div>
                    <span className="d-block ">{doc.data().title}</span>
                    <span className="d-block text-muted small">
                      {doc.data().description}
                    </span>
                  </div>
                </div>
              ))}
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
