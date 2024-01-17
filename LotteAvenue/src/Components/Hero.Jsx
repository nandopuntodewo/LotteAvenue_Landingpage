import React from "react";
import { Carousel } from "@material-tailwind/react";

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
            src="https://daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.jpg"
            alt="slide 1"
            className="h-[500px] md:h-120 w-full object-cover rounded-xl"
          />
          <img
            src="https://daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.jpg"
            alt="slide 2"
            className="h-[500px] md:h-120 w-full object-cover rounded-xl"
          />
          <img
            src="https://daisyui.com/images/stock/photo-1414694762283-acccc27bca85.jpg"
            alt="slide 3"
            className="h-[500px] md:h-120 w-full object-cover rounded-xl"
          />
          <img
            src="https://daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.jpg"
            alt="slide 4"
            className="h-[500px] md:h-120 w-full object-cover rounded-xl"
          />
        </Carousel>
      </div>
    </div>
  );
}

export default Hero;
