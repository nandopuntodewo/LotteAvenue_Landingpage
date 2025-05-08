import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

export default function Recommendation() {
  const [recommendations, setRecommendations] = useState([]);
  const [showMore, setShowMore] = useState(false); // State untuk mengontrol tampilan lebih banyak data

  useEffect(() => {
    const fetchRecommendations = async () => {
      try {
        const response = await fetch(
          "https://6762966146efb3732375212d.mockapi.io/places"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setRecommendations(data); // Asumsikan data adalah array objek
      } catch (error) {
        console.error("Error fetching recommendations:", error);
      }
    };

    fetchRecommendations();
  }, []);

  const handleSeeMore = () => {
    setShowMore(true); // Mengubah state untuk menampilkan lebih banyak data
  };

  const handleShowLess = () => {
    setShowMore(false); // Mengubah state untuk menyembunyikan data tambahan
  };

  return (
    <div>
      <div className="bg-[#1A4568] pt-64 pb-48">
        <div
          className="flex justify-center font-bold text-white"
          id="recommendation"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <p className="text-6xl">GoodHair Recommendation</p>
          </motion.div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-14 mt-20 mb-10 ml-8 mr-8">
          {recommendations
            .slice(0, showMore ? recommendations.length : 8)
            .map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: false }}
              >
                <Card className="w-full h-full">
                  <CardHeader color="blue-gray" className="relative h-56">
                    <img
                      src={item.images} // Ganti dengan field yang sesuai dari API
                      alt="card-image"
                      className="w-full h-full object-cover rounded-t-lg"
                    />
                  </CardHeader>
                  <CardBody>
                    <Typography variant="h5" color="blue-gray" className="mb-2">
                      {item.placeName}
                    </Typography>
                    <ul className="list-disc pl-5">
                      <li>
                        <strong>Category:</strong> {item.category}
                      </li>
                      <li>
                        <strong>Distance:</strong> {item.distance}
                      </li>
                      <li>
                        <strong>Service:</strong> {item.service}
                      </li>
                      <li>
                        <strong>Price:</strong> {item.price}
                      </li>
                      <li>
                        <strong>Rating:</strong> {item.Rating}
                      </li>
                    </ul>
                  </CardBody>
                  <CardFooter className="pt-0">
                    <a
                      href={item.location} // Ganti dengan field yang sesuai dari API
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full"
                    >
                      <Button>Direction</Button>
                    </a>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
        </div>
        {!showMore ? (
          <div className="flex justify-center mt-4">
            <Button
              onClick={handleSeeMore}
              className="bg-white bg-opacity-40 text-white"
            >
              Show More
            </Button>
          </div>
        ) : (
          <div className="flex justify-center mt-4">
            <ScrollLink
              to="recommendation"
              spy={true}
              smooth={true}
              duration={500}
              offset={-100}
            >
              <Button
                onClick={handleShowLess}
                className="bg-white bg-opacity-40 text-white"
              >
                Show Less
              </Button>
            </ScrollLink>
          </div>
        )}
      </div>
    </div>
  );
}
