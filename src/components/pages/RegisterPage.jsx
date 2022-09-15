import React from "react";
import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../../config/firebase";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function RegisterPage() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const registerAccount = (e) => {
    e.preventDefault();

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        if (user) {
          updateProfile(auth.currentUser, { displayName: username }).then(
            () => {
              //profile updated
              const timer = setTimeout(() => {
                navigate("/");
              }, 500);
              timer();
            }
          );
        }
      })
      .catch((error) => {
        const errorCode = error.code;
        const notify = () =>
          toast.error(errorCode, {
            theme: "dark",
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
          });

        notify();
      });
  };

  return (
    <div className="my-5">
      <div className="text-center mb-3">
        <h2>Join now!</h2>
        <h5>Create your forum account</h5>
      </div>
      <Form onSubmit={registerAccount} className="w-25 p-5 mx-auto shadow-sm">
        <Form.Group className="mb-3">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        {/* 
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Confrim Password</Form.Label>
          <Form.Control type="password" placeholder="Confirm Password" />
        </Form.Group> */}

        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check
            type="checkbox"
            label="I agree with all the statements in terms of service"
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Register
        </Button>
      </Form>
      <ToastContainer />
    </div>
  );
}
