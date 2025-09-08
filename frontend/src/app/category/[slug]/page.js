// src/app/category/[slug]/page.js
import axios from "axios";
import Navbar from "@/components/Navbar";

export default async function InterestPage({ params }) {
  const { slug } = params;

  const heroSections = [
    { src: 'v2.mp4', heading: 'Plan Your Perfect Trip', slug: 'hill_station', para: 'Discover breathtaking hill stations for your next adventure.', section: 'Popular Hill Stations' },
    { src: 'v3.mp4', heading: 'Explore the Wild Like Never Before', slug: 'wildlife', para: 'Discover lush forests, rare species, and breathtaking natural reserves that bring you closer to the wonders of wildlife.', section: 'Top Wildlife Destinations' },
    { src: 'v4.mp4', heading: 'Step Into the Pages of History”', slug: 'heritage', para: 'Experience timeless monuments, ancient architecture, and cultural legacies that showcase the rich heritage of our land.', section: 'Famous Heritage Sites' },
    { src: 'v5.mp4', heading: 'Conquer Heights, Embrace the Journey', slug: 'trekking', para: 'Unleash your adventurous spirit with thrilling trails, stunning landscapes, and unforgettable trekking experiences.', section: 'Top Trekking Trails' },
    { src: 'v9.mp4', heading: 'Thrills Beyond the Ordinary”', slug: 'adventure', para: 'From adrenaline-pumping sports to daring outdoor activities, discover adventures that push your limits.', section: 'Adventure Hotspots' },
    { src: 'v8.mp4', heading: 'Feel the Waves, Embrace the Breeze', slug: 'beach', para: 'Relax on golden sands, soak in the sun, and enjoy the calming rhythm of waves at the most beautiful beaches.', section: 'Best Beach Getaways' },
    { src: 'v7.mp4', heading: 'A Journey of Faith and Serenity', slug: 'pilgrimage', para: 'Visit sacred sites, holy temples, and peaceful destinations that inspire spirituality and inner peace.', section: 'Popular Pilgrimage Places' },
  ]

  const res = await axios.get(
    `http://localhost:5000/api/interest/category/${slug}`
  );
  const data = res.data;

  const banner = heroSections.filter((banner) => banner.slug === slug)
  console.log(banner[0].src);
  return (
    <>
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <div>
        {
          <header className="relative w-screen min-h-96 flex items-center justify-center text-center text-white bg-black bg-opacity-50 px-0">
            <div className="absolute inset-0 z-0">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute top-0 left-0 w-full h-full object-cover"
              >
                <source src={`/videos/${banner[0]?.src}/`} type="video/mp4" />
              </video>
            </div>

            <div className="z-10 max-w-2xl px-4">
              <h1 className="text-4xl md:text-5xl font-extrabold uppercase tracking-widest mb-6">
                {banner[0]?.heading}
              </h1>
              <p className="text-sm md:text-base leading-7 mb-6  text-blue-600 font-semibold ">
                {banner[0].para}
              </p>
              <a
                href="https://indianculture.gov.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-green-700 px-6 py-3 font-semibold text-sm transition-all duration-500 relative overflow-hidden group"
              >
                <span className="absolute inset-0 bg-green-700 w-0 group-hover:w-full transition-all duration-500 z-0"></span>
                <span className="relative z-10 group-hover:text-white">
                  Get Started
                </span>
              </a>
            </div>
          </header>
        }

      </div>

      {/* Destinations Section */}
      <section id="destinations" className="max-w-7xl mx-auto px-6 py-16 lg:px-12">
        <h2 className="text-3xl font-bold text-center mb-12">
          {banner[0].section}
        </h2>

        {data?.destinations?.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {data.destinations.map((destination) => (
              <div
                key={destination.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition"
              >
                {/* Destination Image */}
                {destination.images?.[0] && (
                  <img
                    src={destination.images[0].url}
                    alt={destination.name}
                    className="w-full h-56 object-cover"
                  />
                )}

                {/* Destination Content */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {destination.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {destination.description}
                  </p>
                  <a
                    href="#"
                    className="text-blue-600 font-medium hover:underline"
                  >
                    Learn more →
                  </a>
                </div>
              </div>
            ))}
          </div>
        ) : (
          // Empty State
          <div className="text-center py-20">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              No destinations found
            </h3>
            <p className="text-gray-600 max-w-md mx-auto">
              We couldn’t find any destinations in this category. Check back later!
            </p>
          </div>
        )}
      </section>
    </>
  );
}
