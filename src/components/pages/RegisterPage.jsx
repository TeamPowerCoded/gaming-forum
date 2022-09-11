import React from "react";
import { Link } from "react-router-dom";

export default function RegisterPage() {
  return (
    <div className="text-center m-5">
      <h2>Join now!</h2>
      <h5>Create your forum account</h5>
      <form>
        <p>
          <label>Username</label>
          <br />
          <input
            className="form-control"
            type="text"
            name="first_name"
            required
          />
        </p>
        <p>
          <label>Email address</label>
          <br />
          <input className="form-control" type="email" name="email" required />
        </p>
        <p>
          <label>Password</label>
          <br />
          <input
            className="form-control"
            type="password"
            name="password"
            requiredc
          />
        </p>
        <p>
          <input type="checkbox" name="checkbox" id="checkbox" required />
          <span>
            I agree all statements in{" "}
            <a
              href="https://google.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              terms of service
            </a>
          </span>
          .
        </p>
        <p>
          <button id="sub_btn" type="submit">
            Register
          </button>
        </p>
      </form>
      <footer>
        <p>
          <Link to="/">Back to Homepage</Link>.
        </p>
      </footer>
    </div>
  );
}
