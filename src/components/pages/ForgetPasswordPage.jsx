import React from "react";
import { Button, Form } from "react-bootstrap";

import "../../App.css";

export default function ForgetPasswordPage() {
  return (
    <div className="my-5">
      <div className="text-center mb-3">
        <h2>Reset your password</h2>
        <h5>Enter your email address and we will send you a new password</h5>
      </div>
      <Form className="w-25 p-5 mx-auto shadow-sm">
        <Form.Group className="mb-3">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" required></Form.Control>
        </Form.Group>

        <Button id="sub_btn" type="submit">
          Send password reset email
        </Button>
      </Form>
    </div>
  );
}
