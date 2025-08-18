import { useState } from "react";

export default function TiltCard({ children }) {
  const [style, setStyle] = useState({});

  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();

    // calculate rotation based on mouse position
    const x = e.clientX - rect.left; // X position inside card
    const y = e.clientY - rect.top; // Y position inside card

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * 10; // tilt max 10deg
    const rotateY = ((x - centerX) / centerX) * 10;

    setStyle({
      transform: `perspective(1000px) rotateX(${-rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`,
    });
  };

  const handleMouseLeave = () => {
    setStyle({
      transform: "perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)",
      transition: "transform 0.3s ease",
    });
  };

  return (
    <div
      className="w-60 h-40 bg-white shadow-xl rounded-2xl flex items-center justify-center cursor-pointer"
      style={style}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </div>
  );
}
