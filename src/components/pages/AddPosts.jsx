import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
// import { addPost } from "../../redux/reduxSlice/postSlice";
// import { useDispatch } from "react-redux";
import { useState } from "react";
import { auth, db } from "../../config/firebase";

function AddPosts({ show, handleClose, notify }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const user = auth.currentUser;

  // const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    // dispatch(
    //   addPost({
    //     title,
    //     description,
    //   })
    // );

    db.collection("posts").add({
      username: user.displayName,
      uid: user.uid,
      title: title,
      description: description,
    });

    handleClose();
    setTitle("");
    setDescription("");
    notify();
  };

  return (
    <Modal size="lg" show={show} onHide={handleClose} animation={false}>
      <Modal.Header closeButton>
        <Modal.Title>New Discussion</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit} className="w-100 bg-white border-0 p-2">
          <FloatingLabel
            controlId="floatingTextarea2"
            label="Title"
            className="mb-2 text-muted"
          >
            <Form.Control
              type="text"
              placeholder="Enter title"
              className=" rounded-0"
              style={{ border: "1px solid #efefef" }}
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </FloatingLabel>

          <FloatingLabel
            controlId="floatingTextarea2"
            label="Description"
            className="text-muted"
          >
            <Form.Control
              as="textarea"
              placeholder="Leave a comment here"
              style={{ height: "200px", border: "1px solid #efefef" }}
              className=" rounded-0 "
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </FloatingLabel>
          <div className="d-flex justify-content-end">
            <Button variant="primary" className="rounded-0 mt-2 " type="submit">
              SUBMIT
            </Button>
          </div>
        </Form>
      </Modal.Body>
    </Modal>
  );
}

export default AddPosts;
