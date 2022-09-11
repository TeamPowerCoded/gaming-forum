import React, { useState } from "react";
import { Container } from "react-bootstrap";
import AddPosts from "./AddPosts";

import ForumPosts from "./ForumPosts";

function Forum() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Container className="pt-5">
        <div className="row ">
          <div className="col">
            <div className="alert alert-success rounded-1" role="alert">
              <small className="text-muted">
                You've entered PawerCode's Community Forum!
              </small>
            </div>
          </div>
        </div>
      </Container>
      <Container className="forum-container">
        <div className="row">
          <div className="col-md-3 ">
            <button
              className="btn discussion-btn rounded-1 w-100"
              onClick={handleShow}
            >
              Start a New Discussion
            </button>
          </div>
        </div>
      </Container>
      <Container>
        <div className="row mt-2">
          <div className="col-md-3 ">
            <div className="d-flex flex-column p-5 bg-white shadow-sm rounded-1">
              <small className="p-3">All Discussions</small>
              <small className="p-3">Private Discussions</small>
              <small className="p-3">Tags</small>
              <small className="p-3">Following </small>
              <small className="p-3">General</small>
            </div>
          </div>
          <div className="col-md-9">
            <ForumPosts />
          </div>
        </div>
      </Container>
      <br />
      <Container className="p-4">
        <hr />
      </Container>

      {/* Below is the modal */}

      <AddPosts show={show} handleClose={handleClose} />
    </>
  );
}

export default Forum;
