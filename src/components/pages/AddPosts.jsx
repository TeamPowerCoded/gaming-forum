import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";

function AddPosts({ show, handleClose }) {
  return (
    <Modal size="lg" show={show} onHide={handleClose} animation={false}>
      <Modal.Header closeButton>
        <Modal.Title>New Discussion</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {/* Form */}

        {/* <Form.Group>
            <Form.Control type="text" placeholder="Enter title" />
          </Form.Group> */}
        <Form className="w-100 bg-white border-0 p-2">
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
            />
          </FloatingLabel>
          <div class="d-flex justify-content-end">
            <Button variant="primary" className="rounded-0 mt-2 ">
              SUBMIT
            </Button>
          </div>
        </Form>
      </Modal.Body>
      {/* <Modal.Footer>
          <Button variant="primary" className="rounded-0 mt-2">
            SUBMIT
          </Button>
        </Modal.Footer> */}
    </Modal>
  );
}

export default AddPosts;
