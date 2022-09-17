import { useEffect, useState } from "react";
import { auth, db } from "../../config/firebase";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Dropdown, DropdownButton } from "react-bootstrap";
import { currentPost } from "../../redux/reduxSlice/postSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

function ForumPosts({
  title,
  description,
  userId,
  uid,
  id,
  username,
  timestamp,
}) {
  const [showRemove, setShowRemove] = useState(false);
  const user = auth.currentUser;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const notify = () =>
    toast.error("Post has been removed!", {
      theme: "dark",
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
    });

  useEffect(() => {
    const check = () => {
      if (user) {
        if (user.uid === userId) {
          setShowRemove(true);
        }
      } else {
        setShowRemove(false);
      }
    };
    check();
  });

  const handleRemove = () => {
    console.log(uid);
    console.log(id);

    db.collection("posts").doc(id).delete();
    notify();
  };

  const handleView = () => {
    console.log("view");
    dispatch(
      currentPost({
        id,
      })
    );

    navigate("/discussion");
  };

  return (
    <div className="col-md-12">
      <div className="card">
        <div className="card-header">
          <div className="d-flex flex-row justify-content-between align-items-center">
            <span className="small text-muted text-capitalize">{`${username} - created at: ${new Date(
              timestamp?.toDate()
            ).toUTCString()}`}</span>
            <DropdownButton
              size="sm"
              id="dropdown-basic-button"
              title="Actions"
              variant="secondary"
            >
              <Dropdown.Item
                // to="/discussion"
                className="text-decoration-none text-dark"
                onClick={handleView}
              >
                Open
              </Dropdown.Item>

              {showRemove && (
                <Dropdown.Item onClick={() => handleRemove()}>
                  Remove
                </Dropdown.Item>
              )}
            </DropdownButton>
          </div>
        </div>
        <div className="card-body">
          <h6 className="card-title mt-2">{title}</h6>
          <small className="card-text d-block mt-3">{description}</small>
        </div>
      </div>
    </div>
  );
}

export default ForumPosts;
