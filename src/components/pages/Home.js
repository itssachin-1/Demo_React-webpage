import React from "react";
import "../../App.css";
import Banner from "../Banner";
import Business from "../Business";
import Featured from "../Featured";
import FeaturedSalesAgent from "../FeaturedSalesAgent";
import Footer from "../Footer";
import Register from "../Register";

function Home() {
  return (
    <>
      <Banner />
      <Featured />
      <Business />
      <FeaturedSalesAgent />
      <Register />
      <Footer />
    </>
  );
}

export default Home;
