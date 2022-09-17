import React from "react";
import Footer from "../Footer";
import Blog from "./HomePage/Blog";
import Hero from "./HomePage/Hero";
import News from "./HomePage/News";

function Home() {
  return (
    <>
      <Hero />
      <News />
      <Blog />
      <Footer />
    </>
  );
}

export default Home;
