import React from "react";
import Img from "../assets//images/About.jpg";
import { motion } from "framer-motion";

export default function About() {
  return (
    <div>
      <div className="bg-white py-14 px-28" id="about">
        <div className="grid grid-cols-2 gap-20">
          <div className="flex justify-center">
            <img src={Img} alt="" className="w-auto aspect-video" />
          </div>
          <div className="text-[#1A4568] col-span-1">
          <motion.div
            initial={{ opacity: 0, y: 20 }} // Awal: transparan dan sedikit ke bawah
            whileInView={{ opacity: 1, y: 0 }} // Saat terlihat: transparan menjadi tidak transparan dan kembali ke posisi normal
            transition={{ duration: 1 }} // Durasi transisi
            viewport={{ once: false }} // Motion terus muncul
          >
            <p className="font-bold text-7xl">About GoodHair</p>
            </motion.div>
            <motion.div
            initial={{ opacity: 0, y: 20 }} // Awal: transparan dan sedikit ke bawah
            whileInView={{ opacity: 1, y: 0 }} // Saat terlihat: transparan menjadi tidak transparan dan kembali ke posisi normal
            transition={{ duration: 2 }} // Durasi transisi
            viewport={{ once: false }} // Motion terus muncul
          >
            <p className="text-2xl text-justify mt-5 font-medium">
              Universitas Negeri Semarang (UNNES) sebagai salah satu universitas
              besar di Indonesia dengan ribuan mahasiswa, telah mendorong
              pertumbuhan sektor jasa di sekitarnya, termasuk barbershop dan
              salon. Meningkatnya permintaan layanan perawatan diri ini seiring
              dengan pertumbuhan populasi mahasiswa dan masyarakat sekitar.
              Namun, informasi mengenai lokasi dan layanan barbershop dan salon
              di sekitar UNNES masih belum terdokumentasi dengan baik. Hal ini
              menyebabkan kesulitan bagi mahasiswa dan masyarakat dalam mencari
              layanan yang sesuai dengan kebutuhan mereka.
            </p>
            </motion.div>
            <motion.div
            initial={{ opacity: 0, y: 20 }} // Awal: transparan dan sedikit ke bawah
            whileInView={{ opacity: 1, y: 0 }} // Saat terlihat: transparan menjadi tidak transparan dan kembali ke posisi normal
            transition={{ duration: 2 }} // Durasi transisi
            viewport={{ once: false }} // Motion terus muncul
          >
            <p className="text-2xl text-justify mt-3 font-medium">
              Website ini bertujuan untuk mengatasi permasalahan tersebut dengan
              memetakan lokasi dan layanan barbershop dan salon di sekitar
              UNNES. Melalui penelitian ini, diharapkan dapat dihasilkan sebuah
              platform berbasis website yang menyediakan informasi lengkap
              mengenai lokasi, jenis layanan, dan kontak dari berbagai
              barbershop dan salon. Platform ini diharapkan dapat menjadi solusi
              praktis bagi mahasiswa dan masyarakat dalam menemukan layanan yang
              sesuai, serta membantu pemilik usaha dalam mempromosikan bisnis
              mereka.
            </p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
