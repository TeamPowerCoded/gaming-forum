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
import { auth } from "../../config/firebase";

function Forum({ currentUser }) {
  const user = auth.currentUser;
  const dbPosts = db.collection("posts").orderBy("timestamp", "desc");
  const [posts] = useCollection(dbPosts);
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
        {user && (
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
        )}
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
                <ForumPosts
                  key={doc.id}
                  id={doc.id}
                  title={doc.data().title}
                  description={doc.data().description}
                  username={doc.data().username}
                  timestamp={doc.data().timestamp}
                  userId={doc.data().uid}
                  uid={currentUser}
                />
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
