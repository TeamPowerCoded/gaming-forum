import React, { useState } from "react";
import { Container } from "react-bootstrap";
import AddPosts from "./AddPosts";
// import ForumPosts from "./ForumPosts";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "../Footer";

// CALL IT ONCE IN YOUR APP
import { useCollection } from "react-firebase-hooks/firestore";
import { db } from "../../config/firebase";

function Forum() {
  const [posts] = useCollection(db.collection("posts"));
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const notify = () =>
    toast.success("New discussion Added", {
      theme: "dark",
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
    });

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
            <div className="row g-2">
              {posts?.docs.map((doc) => (
                <div className="col-md-12">
                  <div className="card">
                    <div className="card-body">
                      <h6 className="card-title">{doc.data().title}</h6>
                      <small class="card-text text-muted">
                        {doc.data().description}
                      </small>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
      <br />
      <Container className="p-4">
        <hr />
      </Container>

      {/* Below is the modal */}

      <AddPosts show={show} handleClose={handleClose} notify={notify} />
      <ToastContainer />
      <Footer />
    </>
  );
}

export default Forum;
