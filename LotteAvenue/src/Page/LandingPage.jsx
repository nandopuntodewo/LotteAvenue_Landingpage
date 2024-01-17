import React from "react";
import NavbarSimple from "../Components/Navbar";
import About from "../Components/About";
import Hero from "../Components/Hero";
import Venue from "../Components/Venue";
import Footer from "../Components/Footer";

function Page() {

    return (
      <>
        <NavbarSimple />
        <Hero />
        <About />
        <Venue />
        <Footer />
      </>
    );
  }
  
  export default Page;