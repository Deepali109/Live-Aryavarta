"use client";
import TiltCard from "./TiltCardAnimation";

export default function HeroSection() {
  return (
    <section className="w-full min-h-screen flex items-center justify-center bg-gray-50 px-8 py-16">
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* LEFT SIDE - TEXT */}
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Explore the <span className="text-blue-600">India </span> with Us
          </h1>
          <p className="text-gray-600 text-lg">
            Discover amazing destinations, plan unforgettable trips, and enjoy
            seamless travel experiences. Let’s make your next journey
            hassle-free and full of memories.
          </p>
          <button className="px-6 py-3 bg-blue-600 text-white rounded-xl shadow-lg hover:bg-blue-700 transition">
            Get Started
          </button>
        </div>

        {/* RIGHT SIDE - CARDS */}
        <div className="grid grid-cols-2 gap-5">
          {/* Card */}

          <div className="relative aspect-[5/6] rounded-xl shadow-md overflow-hidden group">
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
              style={{ backgroundImage: "url('/images/taj-mahal.jpg')" }}
            ></div>
            <div className="absolute bottom-0 left-0 py-3 px-4 w-full bg-black/50 text-white">
              <h3 className="text-lg font-semibold">Taj Mahal</h3>
              <p className="text-xs mt-1">
                Book cheap flights instantly with exclusive offers.
              </p>
            </div>
          </div>

          {/* Card */}
          <div className="mt-12 relative aspect-[5/6] rounded-xl shadow-md overflow-hidden group">
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
              style={{ backgroundImage: "url('/images/golden-temple.jpg')" }}
            ></div>
            <div className="absolute bottom-0 left-0 py-3 px-4 w-full bg-black/50 text-white">
              <h3 className="text-lg font-semibold">Golden Temple</h3>
              <p className="text-xs mt-1">
                Experience the divine beauty and peace.
              </p>
            </div>
          </div>

          {/* Card */}
          <div className="relative aspect-[5/6] rounded-xl shadow-md overflow-hidden group">
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
              style={{ backgroundImage: "url('/images/bada-bagh.jpg')" }}
            ></div>
            <div className="absolute bottom-0 left-0 py-3 px-4 w-full bg-black/50 text-white">
              <h3 className="text-lg font-semibold">Mandir</h3>
              <p className="text-xs mt-1">
                Discover heritage temples with rich history.
              </p>
            </div>
          </div>

          {/* Card */}
          <div className="mt-12 relative aspect-[5/6] rounded-xl shadow-md overflow-hidden group">
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
              style={{ backgroundImage: "url('/images/kashiviswanath.jpg')" }}
            ></div>
            <div className="absolute bottom-0 left-0 py-3 px-4 w-full bg-black/50 text-white">
              <h3 className="text-lg font-semibold">Kashi Vishwanath</h3>
              <p className="text-xs mt-1">
                One of the most sacred temples of India.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
