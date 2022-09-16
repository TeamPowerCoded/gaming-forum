import React from "react";
import { Link } from "react-router-dom";
import Services from "./Services";

function Hero() {
  return (
    <>
      <section className="hero bg-dark p-5 d-flex flex-column align-items-center justify-content-center">
        <div className="container p-5 bg-dark text-white">
          <div className="p-2 p-md-5 text-center">
            <h1>
              PAWER UP YOUR <span style={{ color: "#58B19F" }}>GAME!</span>
            </h1>
            <p className="lead">Be updated, Be part of our Community</p>
            <Link to="/register" className="btn btn-join mt-4">
              JOIN NOW
            </Link>
          </div>
        </div>
      </section>
      <Services />
    </>
  );
}

export default Hero;
