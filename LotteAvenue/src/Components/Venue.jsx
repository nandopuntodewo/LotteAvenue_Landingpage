import React from "react";
import Img from "../assets/image.jpg";
import check from "../assets/checklist.svg";

export default function Venue() {
  return (
    <div>
      <div className="bg-[#1A4568] pt-64 pb-48" id="venue">
        <div className="flex justify-center font-bold text-white">
          <p className="text-6xl">Our Venue</p>
        </div>
        <div className="flex justify-center mt-12">
          <img src={Img} alt="" className="aspect-video w-1/2 rounded-xl" />
        </div>
        <div className="flex justify-center mt-20">
          <div className="grid grid-cols-2 gap-x-96 gap-y-7 font-medium text-lg">
            <div className="flex items-center gap-3">
              <img src={check} alt="" style={{ width: "24px" }} />
              <p className="text-white">Apotek</p>
            </div>
            <div className="flex items-center gap-3">
              <img src={check} alt="" style={{ width: "24px" }} />
              <p className="text-white">Toilet</p>
            </div>
            <div className="flex items-center gap-3">
              <img src={check} alt="" style={{ width: "24px" }} />
              <p className="text-white">ATM</p>
            </div>
            <div className="flex items-center gap-3">
              <img src={check} alt="" style={{ width: "24px" }} />
              <p className="text-white">Nursery Room</p>
            </div>
            <div className="flex items-center gap-3">
              <img src={check} alt="" style={{ width: "24px" }} />
              <p className="text-white">Area Parkir</p>
            </div>
            <div className="flex items-center gap-3">
              <img src={check} alt="" style={{ width: "24px" }} />
              <p className="text-white">Kursi Roda</p>
            </div>
            <div className="flex items-center gap-3">
              <img src={check} alt="" style={{ width: "24px" }} />
              <p className="text-white">Baby Stroller</p>
            </div>
            <div className="flex items-center gap-3">
              <img src={check} alt="" style={{ width: "24px" }} />
              <p className="text-white">High Chair</p>
            </div>
            <div className="flex items-center gap-3">
              <img src={check} alt="" style={{ width: "24px" }} />
              <p className="text-white">Musholla</p>
            </div>
            <div className="flex items-center gap-3">
              <img src={check} alt="" style={{ width: "24px" }} />
              <p className="text-white">Money Changer</p>
            </div>
          </div>
        </div>
      </div>
      <div className="h-3 separator"></div>
    </div>
  );
}
