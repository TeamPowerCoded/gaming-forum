import React from "react";
import { Button, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../config/firebase";
import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const loginAccount = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        if (user) {
          const timer = setTimeout(() => {
            navigate("/");
          }, 1000);

          timer();
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="my-5">
      <div className="text-center mb-3">
        <h2>Sign in to discuss </h2>
      </div>

      <Form onSubmit={loginAccount} className="w-25 p-5 mx-auto shadow-sm">
        <Form.Group className="mb-3">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group className="mb-4">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </Form.Group>
        <div className="d-flex align-items-center justify-content-between">
          <Button variant="primary" type="submit">
            Login
          </Button>
          <Link to="/forget-password" className="">
            <label className="right-label">Forget password?</label>
          </Link>
        </div>
        <span className="d-block mt-5">
          First time? <Link to="/register">Create an account</Link>
        </span>
      </Form>
    </div>
  );
}
