import React from "react";
import { Carousel } from "@material-tailwind/react";
import Slide1 from "../assets//images/slide1.jpg";
import Slide2 from "../assets//images/slide2.jpg";
import Slide3 from "../assets//images/slide3.jpg";
import Slide4 from "../assets//images/slide4.jpg";
function Hero() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-[#1A4568]">
      <div className="text-center p-5">
        <h1 className="text-5xl md:text-7xl text-white font-bold mb-4 md:mb-8">Lotte Avenue.</h1>
        <p className="text-xl md:text-2xl text-white font-light mb-8">Insert tagline here</p>
      </div>
      <div className="w-full max-w-6xl">
        <Carousel className="rounded-xl">
          <img
            src={Slide1}
            alt="slide 1"
            className="h-[500px] md:h-120 w-full object-cover rounded-xl"
          />
          <img
            src={Slide2}
            alt="slide 2"
            className="h-[500px] md:h-120 w-full object-cover rounded-xl"
          />
          <img
            src={Slide3}
            alt="slide 3"
            className="h-[500px] md:h-120 w-full object-cover rounded-xl"
          />
          <img
            src={Slide4}
            alt="slide 4"
            className="h-[500px] md:h-120 w-full object-cover rounded-xl"
          />
        </Carousel>
      </div>
    </div>
  );
}

export default Hero;
