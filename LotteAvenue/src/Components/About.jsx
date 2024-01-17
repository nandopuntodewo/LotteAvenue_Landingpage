import React from "react";
import Img from "../assets//images/About.jpg";

export default function About() {
  return (
    <div>
      <div className="bg-[#DBECF4] py-14 px-28" id="about">
        <div className="grid grid-cols-2 gap-20">
          <div className="flex justify-center">
            <img src={Img} alt="" className="w-auto aspect-video" />
          </div>
          <div className="text-[#1A4568] col-span-1">
            <p className="font-bold text-7xl">About LotteAvenue.</p>
            <p className="text-2xl text-justify mt-5 font-medium">
              Lotte Shopping Avenue pertama kali diresmikan pada 22 Juni 2013.
              Dengan mengusung konsep “One Stop Shopping Mall”, mall ini
              menyediakan sarana belanja yang super-lengkap. Mulai dari fashion,
              gaya hidup, budaya, dan hiburan. Selain sebagai pusat
              perbelanjaan, mall ini juga biasa menjadi tujuan rekreasi warga
              Jakarta dan sekitarnya. Tidak hanya berkunjung ke tempat wisata
              Jakarta terbaru, warga Jakarta juga bisa memanfaatkan mall ini
              sebagai tempat rekreasi.
            </p>
            <p className="text-2xl text-justify mt-3 font-medium">
              Mall ini memiliki luas bangunan 77.000 meter persegi dan terbagi
              dalam tujuh lantai. Pada salah satu lantainya terdapat Lotte
              Department Store yang memiliki konsep lebih terbuka dan menjadi
              keunikan tersendiri bagi mal ini. Ada juga Lotte Duty Free, di
              sini Anda dapat berbelanja berbagai produk dengan merek ternama
              dengan penataan interior yang eksklusif.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
