// src/app/category/[slug]/page.js
import axios from "axios";

export default async function InterestPage({ params }) {
  const { slug } = params; // ✅ unwrap promise

  // Fetch from your backend API
  const res = await axios.get(
    `http://localhost:5000/api/interest/category/${slug}`
  );
  const data = res.data;

  return (
    <div className="p-10">
      {/* Category Name */}
      <h1 className="text-3xl font-bold mb-10">{data?.categoryName}</h1>

      {/* Loop through all destinations */}
      <div className="space-y-12">
        {data?.destinations?.map((destination) => (
          <div
            key={destination.id}
            className="border border-gray-200 p-6 rounded-xl shadow-sm hover:shadow-md transition"
          >
            {/* Destination Title */}
            <h2 className="text-2xl font-semibold">{destination.name}</h2>

            {/* Destination Info */}
            <p className="mt-2 text-gray-700">{destination.description}</p>
            <p className="mt-2 text-gray-600">
              <span className="font-bold">Location:</span>{" "}
              {destination.location}
            </p>
            <p className="mt-2 text-gray-600">
              <span className="font-bold">Famous For:</span>{" "}
              {destination.famousFor}
            </p>
            {destination.activities?.length > 0 && (
              <p className="mt-2 text-gray-600">
                <span className="font-bold">Activities:</span>{" "}
                {destination.activities.join(", ")}
              </p>
            )}
            {destination.famousFood?.length > 0 && (
              <p className="mt-2 text-gray-600">
                <span className="font-bold">Famous Food:</span>{" "}
                {destination.famousFood.join(", ")}
              </p>
            )}
            <p className="mt-2 text-yellow-600 font-bold">
              ⭐ {destination.rating}/5
            </p>

            {/* Gallery */}
            {destination.images?.length > 0 && (
              <div className="mt-6">
                <h3 className="text-xl font-semibold mb-4">Gallery</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                  {destination.images.map((img) => (
                    <div key={img._id} className="relative h-60">
                      <img
                        src={img.url}
                        alt={destination.name}
                        className="w-full h-full object-cover rounded-lg"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
