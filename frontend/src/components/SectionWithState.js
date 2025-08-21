"use client";
import { useRouter } from "next/navigation";
import IndiaMap from "./IndiaMap";

export default function ExploreStates() {
  const router = useRouter();

  // Function to handle state click
  const handleStateClick = (state) => {
    router.push(`/states/${state.toLowerCase()}`); // Example: /states/rajasthan
  };

  return (
    <section
      className=" h-auto w-full py-12 px-6 bg-gray-50"
      style={{
        background: `linear-gradient(
      to right,
      rgb(197, 244, 242) 0%,
      rgb(197, 244, 242) 20%,
      rgba(197, 244, 242, 0.375) 40%,
      rgba(197, 244, 242, 0.375) 60%,
      rgb(197, 244, 242) 80%,
      rgb(197, 244, 242) 100%
    )`,
      }}
    >
      {/* Title */}
      <div className="text-center mb-10">
        <h1 className="text-3xl md:text-5xl font-bold text-gray-900 font-serif">
          Explore <span className="text-blue-600">States of India</span>
        </h1>
        <p className="text-gray-600 mt-3 text-lg">
          Click on any state in the map below to discover top destinations,
          food, culture, and more.
        </p>
      </div>

      <IndiaMap />
    </section>
  );
}
