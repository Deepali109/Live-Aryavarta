"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function DestinationPage({ params }) {
  // ✅ unwrap params correctly
  const [slug, setSlug] = useState(null);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  // unwrap params on mount
  useEffect(() => {
    const unwrapParams = async () => {
      const unwrapped = await params;
      setSlug(unwrapped.slug);
    };
    unwrapParams();
  }, [params]);

  // fetch data when slug is ready
  useEffect(() => {
    if (!slug) return;

    const fetchData = async () => {
      try {
        const res = await axios.get(
          `http://localhost:5000/api/interest/destination/${slug}`
        );
        setData(res.data);
      } catch (err) {
        console.error("Error fetching destination:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [slug]);
  console.log(data);
  if (loading) {
    return <p className="text-center py-20">Loading...</p>;
  }

  if (!data) {
    return <p className="text-center py-20">No data found.</p>;
  }

  return (
    <div className="w-full min-h-screen bg-white text-gray-900">
      {/* Hero Section */}
      <section
        className="relative h-[90vh] flex items-center justify-center text-center bg-cover bg-center"
        style={{ backgroundImage: `url(${data.images.main_image})` }}
      >
        <div className="absolute inset-0"></div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-white px-4"
        >
          <h1 className="text-5xl font-bold mb-4">
            {data?.name}
          </h1>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            {data?.description?.overview}
          </p>
          <Button className="px-6 py-3 text-lg rounded-2xl shadow-lg">
            Plan Your Trip
          </Button>
        </motion.div>
      </section>

      {/* About Section */}
      <section className="py-16 px-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
        <div>
          <h2 className="text-3xl font-bold mb-4">About {data.name}</h2>
          <p className="text-lg leading-relaxed text-gray-700">
            {data.description.overview}
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {data.images.gallery.map((img, i) => (
            <img key={i} src={img} alt={data.name} className="rounded-2xl shadow-md" />
          ))}
        </div>
      </section>

      {/* Popular Destinations */}
      {data?.famous_spots &&
      <section className="bg-gray-50">
        <h2 className="text-3xl font-bold text-center mb-12">Popular Destinations</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {data?.famous_spots?.map((spot, index) => (
            <Card key={index} className="rounded-2xl shadow-lg">
              <CardContent className="p-4">
                <img className="h-52 w-full mb-2" src={'/images/golden-temple.jpg'}/>
                <h3 className="text-xl font-semibold mb-2">{spot?.name}</h3>
                <p className="text-gray-600">{spot?.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
}

      {/* Activities Section */}
      {data?.activities &&
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Activities</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {data?.activities?.map((act, i) => (
            <Card key={i} className="rounded-2xl shadow-lg overflow-hidden">
              <CardContent className="p-4">
                <img className="h-52 w-full mb-2" src={'/images/taj-mahal.jpg'}/>
                <h3 className="text-xl font-semibold mb-2">{act.name}</h3>
                <p className="text-gray-600">{act.description}</p>
                <p className="text-sm text-gray-500 mt-2">
                  Duration: {act.duration} | Cost: {act.cost_range}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
}
      {/* Best Time to Visit */}
      <section className="py-16 px-6 bg-gray-50">
        <h2 className="text-3xl font-bold text-center mb-8">Best Time to Visit</h2>
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-lg">{data?.description?.best_time_to_visit?.season}</p>
          <p className="text-gray-600">
            Peak: {data?.description?.best_time_to_visit?.peak_season} | Weather:{" "}
            {data?.description?.best_time_to_visit?.weather}
          </p>
        </div>
      </section>

      {/* Travel Tips */}
      {data?.tip &&
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Travel Tips</h2>
        <ul className="list-disc list-inside text-lg space-y-2 text-gray-700">
          {data?.tips?.map((tip, i) => (
            <li key={i}>{tip}</li>
          ))}
        </ul>
      </section>
}

      {/* Footer */}
      <footer className="py-8 text-center bg-gray-900 text-white mt-16">
        <p>© 2025 Explore {data.name}. All rights reserved.</p>
      </footer>
    </div>
  );
}
