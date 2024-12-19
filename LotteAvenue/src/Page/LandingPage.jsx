import React from "react";
import NavbarSimple from "../Components/Navbar";
import About from "../Components/About";
import Hero from "../Components/Hero";
import Recommendation from "../Components/Recommendation";
import Footer from "../Components/Footer";
import MapComponent from "../Components/MapComponent";

function Page() {

    return (
      <>
        <NavbarSimple />
        <Hero />
        <About />
        <Recommendation />
        <MapComponent />
        <Footer />
      </>
    );
  }
  
  export default Page;