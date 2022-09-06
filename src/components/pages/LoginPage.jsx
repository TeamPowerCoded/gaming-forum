import React from "react";
import { Link } from "react-router-dom";

export default function LoginPage() {
  return (
    <div className="text-center m-5">
      <h2>Sign in to discuss </h2>
      <form action="/home">
        <p>
          <label>Username or email address</label>
          <br />
          <input type="text" name="first_name" required />
        </p>
        <p>
          <label>Password</label>

          <br />
          <input type="password" name="password" required />
        </p>
        <p>
          <button className="mb-2" id="sub_btn" type="submit">
            Login
          </button>
          <Link to="/forget-password">
            <label className="right-label">Forget password?</label>
          </Link>
        </p>
      </form>
      <footer>
        <p>
          First time? <Link to="/register">Create an account</Link>.
        </p>
        <p>
          <Link to="/">Back to Homepage</Link>.
        </p>
      </footer>
    </div>
  );
}
