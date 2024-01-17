import React from "react";
import NavbarSimple from "../Components/Navbar";
import About from "../Components/About";
import Hero from "../Components/Hero";
import Venue from "../Components/Venue";

function Page() {

    return (
      <>
        <NavbarSimple />
        <Hero />
        <About />
        <Venue />
      </>
    );
  }
  
  export default Page;