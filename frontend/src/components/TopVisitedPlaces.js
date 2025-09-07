"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
const Card = ({ title, description, imageUrl }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      <motion.div
        className="relative w-full max-w-72 rounded-sm shadow-2xl transform transition-transform duration-500 ease-out cursor-pointer hover:scale-105 min-h-[320px] h-72" // 👈 keeps card height stable
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Background overlay */}
        <div
          className={`absolute inset-0 bg-white rounded-sm transition-opacity duration-500 ${isHovered ? "opacity-100" : "opacity-0"
            }`}
        ></div>

        {/* Content */}
        <motion.div
          className="relative z-10 flex flex-col items-center text-center h-full w-full">
          {/* Image */}
          <div
            className={`mb-4 transform transition-all duration-700${isHovered ? "-translate-y-20 h-48 w-48" : "-translate-y-0 scale-100 w-full"
              }`}
          >
            <img
              src={imageUrl}
              alt="main image"
              className={`object-cover shadow-xl transition duration-700 h-48 w-full ${isHovered ? "rounded-full scale-90 -translate-y-20 shadow-xl" : "rounded-sm"
                }`}
            />

          </div>
          {/* Title */}
          <h3 className={`transition-all duration-700 text-sm font-bold mb-2 mt-6 text-gray-900 ${isHovered ? '-translate-y-20 text-md' : '-translate-y-0'}`}>{title}</h3>

          {/* Description container (fixed height, no flicker) */}
          <div className="relative flex items-center justify-center">
            <p
              className={`text-gray-600 transition-all duration-700 ease-in-out ${isHovered
                ? "opacity-100 -translate-y-20"
                : "opacity-0"
                }`}
            >
              {description}
            </p>
          </div>
        </motion.div>
      </motion.div>
    </>
  );
};

function TopPlaces() {
  const topPlaces = [
    {
      title: "BADA BAGH",
      description: "Our farm-to-table concept emphasizes on getting the fresh produce directly from local farms to your tables within one day.",
      imageUrl: "/images/bada-bagh.jpg" // Placeholder image URL
    },

    {
      title: "GOLDEN TEMPLE",
      description: "We embrace sustainable farming practices to nurture the environment. Our methods include crop rotation and water conservation.",
      imageUrl: "/images/golden-temple.jpg" // Placeholder image URL
    },
    {
      title: "TAJ MAHAL",
      description: "Our locally grown produce is harvested at peak freshness and delivered within 24 hours.",
      imageUrl: "/images/taj-mahal.jpg", // Placeholder image URL
    },
    {
      title: "KASHIVISWANATH TEMPLE",
      description: "Our locally grown produce is harvested at peak freshness and delivered within 24 hours.",
      imageUrl: "/images/kashiviswanath.jpg", // Placeholder image URL
    },


  ]
  return (
    <div className="max-h-screen flex justify-center items-center flex-col bg-gray-100 pt-10 py-10">
      <h1 className="md:text-5xl text-3xl font-bold font-serif text-gray-900 mb-28">
        Top places to <span className="text-blue-600">Visit</span>
      </h1>
      <motion.div
        // animate={{ x: ["0%", "-100%"] }}
        transition={{ ease: "linear", duration: 50, repeat: Infinity }}
        className="flex  justify-center items-center space-x-4">
        
        {[...topPlaces].map((place, indx) => (
          <motion.div
            key={indx}
          >
            <Card
              title={place.title}
              description={place.description}
              imageUrl={place.imageUrl}
              
            />
          </motion.div>
        ))}
      </motion.div>
    </div>

  );
}

export default TopPlaces;