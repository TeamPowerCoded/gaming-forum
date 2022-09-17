import React from "react";
import { Container } from "react-bootstrap";
import { useCollection, useDocument } from "react-firebase-hooks/firestore";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import { db } from "../../config/firebase";
import { useSelector } from "react-redux";

function Discussion() {
  const postId = useSelector((state) => state.post.postId);
  //   const postView = db.collection("posts").doc(currentPost);
  //   const [posts] = useCollection(postView);

  const [currentPost] = useDocument(
    postId && db.collection("posts").doc(postId)
  );

  return (
    <Container className="my-5">
      <h3 className="mb-3 ">{currentPost?.data().title}</h3>
      <div className="col-md-12">
        <div className="card">
          <div className="card-header">
            <div className="d-flex flex-column bg-light">
              <div className="d-flex p-1 align-items-center ">
                <FontAwesomeIcon icon={faCircleUser} className="h2 px-3" />
                <div>
                  <span className="d-block text-capitalize">
                    {currentPost?.data().username}
                  </span>
                  <span className="small text-muted text-capitalize">{`Asked on: ${new Date(
                    currentPost?.data().timestamp.toDate()
                  ).toUTCString()}`}</span>
                </div>
              </div>
            </div>
          </div>
          <div className="card-body">
            <small className="card-text d-block mt-3">
              {currentPost?.data().description}
            </small>
          </div>
        </div>
      </div>
    </Container>

    // <div className="my-5">
    //   <Container>{currentPost?.data().title}</Container>
    // </div>
  );
}

export default Discussion;
