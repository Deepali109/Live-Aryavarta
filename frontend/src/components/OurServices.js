"use client";
import { motion } from "framer-motion";

const services = [
  {
    title: "Best Travel Guide",
    description: "Explore destinations like a local with expert guidance.",
    image: "/images/services/img1.png",
  },

  {
    title: "Proper Roadmap",
    description: "Get optimized routes for a smooth travel experience.",
    image: "/images/services/img2.png",
  },
  {
    title: "Itinerary Planning",
    description:
      "Generate custom day-wise itineraries based on your time and budget.",
    image: "/images/services/img3.png",
  },
  {
    title: "Stay & Food Assistance",
    description:
      "Recommendations on the best places to stay and authentic food to try.",
    image: "/images/services/img4.png",
  },
  {
    title: "All Facts & Details",
    description:
      "Discover history, culture, traditions, and hidden gems of every state.",
    image: "/images/services/img5.png",
  },
  {
    title: "Complete Travel Support",
    description: "From planning to execution, we take care of everything.",
    image: "/images/services/img6.png",
  },
  {
    title: "Festival & Events Calendar",
    description:
      "Stay updated on upcoming festivals, fairs, and cultural events.",
    image: "/images/services/img7.png",
  },
  {
    title: "Weather & Best Time to Visit",
    description: "Check live weather and know the perfect months to travel.",
    image: "/images/services/img8.png",
  },
  {
    title: "Community Tips & Reviews",
    description: "Read and share real experiences from fellow travelers.",
    image: "/images/services/img9.png",
  },
  {
    title: "Hidden Gems Explorer",
    description: "Uncover offbeat places and experiences away from the crowds.",
    image: "/images/services/img10.png",
  },
  {
    title: "AI-Powered Recommendations",
    description:
      "Smart suggestions on where to go, stay, and eat based on your preferences.",
    image: "/images/services/img11.png",
  },
  {
    title: "Safety & Emergency Help",
    description:
      "Quick access to emergency contacts, hospitals, and essentials nearby.",
    image: "/images/services/img12.png",
  },
];

export default function OurServices() {
  return (
    <section className="py-12 bg-gray-50">
      <h2 className="text-5xl text-blue-700 font-serif font-bold text-center mb-8">
        Our Services
      </h2>

      <motion.div
        className="flex space-x-6 "
        animate={{ x: ["0%", "-100%"] }}
        transition={{ ease: "linear", duration: 20, repeat: Infinity }}
      >
        {[...services, ...services].map((service, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05, rotate: 2 }}
            className="min-w-[250px] bg-white shadow-md shadow-red-300 rounded-2xl p-6 flex flex-col items-center text-center"
          >
            <img
              src={service.image}
              alt={service.title}
              className="w-16 h-16 mb-4 object-contain"
            />
            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
            <p className="text-gray-600">{service.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
