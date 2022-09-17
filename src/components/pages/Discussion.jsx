import React from "react";
import { Button, Container, Form } from "react-bootstrap";
import { useDocument, useCollection } from "react-firebase-hooks/firestore";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import { db, auth } from "../../config/firebase";
import firebase from "firebase/compat/app";
import { useSelector } from "react-redux";
import { useState } from "react";

function Discussion() {
  const user = auth.currentUser;
  const [comment, setComment] = useState();
  const postId = useSelector((state) => state.post.postId);
  const dbComments = db.collection("posts").doc(postId).collection("comments");
  const [allComments] = useCollection(dbComments);

  const [currentPost] = useDocument(
    postId && db.collection("posts").doc(postId)
  );

  const handleComment = (e) => {
    e.preventDefault();
    console.log(comment);

    db.collection("posts").doc(postId).collection("comments").add({
      message: comment,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      username: user.displayName,
    });
  };

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
      <div className="col-md-12">
        <h4 className="mt-5">Comment Section</h4>
        {allComments?.docs.map((doc) => (
          <div className="card" key={doc.id}>
            <div className="card-header">
              <div className="d-flex flex-column bg-light">
                <div className="d-flex p-1 align-items-center ">
                  <FontAwesomeIcon icon={faCircleUser} className="h2 px-3" />
                  <span className="d-block text-capitalize">
                    {doc.data().username}
                  </span>
                  <div>
                    <span className="d-block text-capitalize"></span>
                    <span className="small text-muted text-capitalize"></span>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-body">
              <small className="card-text d-block mt-3">
                {doc.data().message}
              </small>
            </div>
          </div>
        ))}
      </div>
      <Form className="mt-5" onSubmit={handleComment}>
        <Form.Control
          as="textarea"
          placeholder="Post your comment"
          style={{ height: "200px", border: "1px solid #efefef" }}
          className=" rounded-0 "
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
        {user && (
          <Button type="submit" className="float-end mt-3 rounded-0">
            POST
          </Button>
        )}
      </Form>
    </Container>

    // <div className="my-5">
    //   <Container>{currentPost?.data().title}</Container>
    // </div>
  );
}

export default Discussion;
