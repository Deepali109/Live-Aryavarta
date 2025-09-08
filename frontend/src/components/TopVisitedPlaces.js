"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
const Card = ({ title, description, imageUrl }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      <div
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
        <div
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
          <h3 className={`transition-all duration-700 text-sm font-bold mb-2 mt-6 text-gray-900 ${isHovered ? '-translate-y-28 text-md' : '-translate-y-0'}`}>{title}</h3>

          {/* Description container (fixed height, no flicker) */}
          <div className="relative flex items-center justify-center px-2">
            <p
              className={`text-gray-600 transition-all duration-700 ease-in-out ${isHovered
                ? "opacity-100 -translate-y-28"
                : "opacity-0"
                }`}
            >
              {description}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

function TopPlaces() {
  const topPlaces = [
    {
      title: "BADA BAGH",
      description: "Amidst the golden sands of Jaisalmer, Bada Bagh stands as a silent guardian of royal legacies. The cenotaphs echo stories of kings and warriors, where history sleeps under the desert sun and awakens in the whispers of the wind.",
      imageUrl: "/images/bada-bagh.jpg" // Placeholder image URL
    },

    {
      title: "GOLDEN TEMPLE",
      description: "Bathed in the golden glow of dawn, the Harmandir Sahib is not just a temple—it is the soul of Sikh devotion. Its shimmering reflection on the sacred waters embraces all with peace, humility, and unity, beyond boundaries of religion.",
      imageUrl: "/images/golden-temple.jpg" // Placeholder image URL
    },
    {
      title: "TAJ MAHAL",
      description: "More than just marble and minarets, the Taj Mahal is a timeless symphony of love. Built by Shah Jahan in memory of Mumtaz, it stands as the world’s most beautiful testament to devotion—where love outlives even time itself.",
      imageUrl: "/images/taj-mahal.jpg", // Placeholder image URL
    },
    {
      title: "KASHIVISWANATH TEMPLE",
      description: "In the timeless city of Varanasi, the Kashi Vishwanath Temple radiates the eternal light of Lord Shiva. Every bell that rings carries the voice of countless generations, reminding the world that this is where divinity and eternity meet.",
      imageUrl: "/images/kashiviswanath.jpg", // Placeholder image URL
    },
    // {
    //   title: "SHRI RAM TEMPLE",
    //   description: "In the sacred city of Ayodhya rises the long-awaited Ram Mandir, a symbol of faith fulfilled. It is not just a temple of stone, but the divine homecoming of Shri Ram, filling hearts with devotion, hope, and dharma.",
    //   imageUrl: "/images/kashiviswanath.jpg", // Placeholder image URL
    // },


  ]
  return (
    <div className="max-h-screen flex justify-center items-center flex-col bg-gray-100 pt-10 py-10">
      <h1 className="md:text-5xl text-3xl font-bold font-serif text-gray-900 mb-28">
        Top places to <span className="text-blue-600">Visit</span>
      </h1>
      <motion.div
        // animate={{ x: ["0%", "-100%"] }}
        transition={{ ease: "linear", duration: 50, repeat: Infinity }}
        className="flex justify-center items-center space-x-4">
        
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