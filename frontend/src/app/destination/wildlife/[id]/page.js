"use client";
import React, { useState, useEffect, use } from "react";
import axios from "axios";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/Card"; // Adjust path
import {
  Clock,
  MapPin,
  Camera,
  Eye,
  TreePine,
  Mountain,
  Calendar,
  AlertCircle,
  CheckCircle,
  Users,
} from "lucide-react";

export default function DestinationPage({ params }) {
  // ✅ unwrap params correctly
  const { id } = use(params);
  const category = "wildlife";

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState(0);
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [activeTab, setActiveTab] = useState("zones");
  const [activeTabwildife, setActiveTabwildlife] = useState("major");
  const [selectedActivity, setSelectedActivity] = useState(null);
  const [activeTabAccomodation, setActiveTabAccomodation] =
    useState("luxury_resorts");

  const getDensityColor = (density) => {
    return density === "High"
      ? "bg-gradient-to-r from-emerald-500 to-green-600"
      : "bg-gradient-to-r from-amber-500 to-orange-600";
  };

  const getDensityIcon = (density) => {
    return density === "High" ? "🐅🐅🐅" : "🐅🐅";
  };

  const Accomodationtabs = [
    { key: "luxury_resorts", label: "Luxury Resorts" },
    { key: "wildlife_lodges", label: "Wildlife Lodges" },
    { key: "forest_rest_houses", label: "Forest Rest Houses" },
  ];
  const accommodations = data?.destination?.accommodation || {};

  // fetch data when slug is ready
  useEffect(() => {
    if (!id) return;

    const fetchData = async () => {
      try {
        const res = await axios.get(
          `http://localhost:5000/api/interest/destination/${category}/${id}`
        );
        setData(res.data);
        console.log("resss", res.data);
      } catch (err) {
        console.error("Error fetching destination:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  console.log("dataaa", data);

  if (loading) {
    return <p className="text-center py-20">Loading...</p>;
  }

  if (!data) {
    return <p className="text-center py-20">No data found.</p>;
  }

  const getConservationStatusColor = (status) => {
    switch (status) {
      case "Endangered":
        return "bg-red-100 text-red-700 border-red-200";
      case "Vulnerable":
        return "bg-orange-100 text-orange-700 border-orange-200";
      case "Near Threatened":
        return "bg-yellow-100 text-yellow-700 border-yellow-200";
      default:
        return "bg-green-100 text-green-700 border-green-200";
    }
  };

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case "Easy":
        return "bg-emerald-50 text-emerald-700 border-emerald-200";
      case "Moderate":
        return "bg-amber-50 text-amber-700 border-amber-200";
      case "Hard":
        return "bg-red-50 text-red-700 border-red-200";
      default:
        return "bg-blue-50 text-blue-700 border-blue-200";
    }
  };

  return (
    <div className="w-full min-h-screen bg-white text-gray-900">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Hero Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src={data.destination.images.main_image}
            alt={data.destination.name}
            className="w-full h-full object-cover"
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/20" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto">
          {/* Location Badge */}
          <Badge
            variant="secondary"
            className="mb-6 bg-white/20 text-white border-white/30 backdrop-blur-md px-4 py-2 rounded-full inline-flex items-center"
          >
            <MapPin className="w-4 h-4 mr-2" />
            {data.destination.state}, India
          </Badge>

          {/* Title & Overview */}
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight drop-shadow-lg">
            {data.destination.name}
          </h1>
          <p className="text-lg md:text-xl mb-10 text-white/90 max-w-3xl mx-auto leading-relaxed">
            {data.destination.description.overview}
          </p>

          {/* Quick Stats */}
          <div className="flex flex-wrap justify-center gap-6 mb-10">
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-5 py-3 rounded-full shadow-md hover:bg-white/20 transition">
              <TreePine className="w-5 h-5" />
              <span className="font-medium">
                {data.destination.location.area}
              </span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-5 py-3 rounded-full shadow-md hover:bg-white/20 transition">
              <Calendar className="w-5 h-5" />
              <span className="font-medium">
                {data.destination.description.best_time_to_visit.peak_season}
              </span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-5 py-3 rounded-full shadow-md hover:bg-white/20 transition">
              <Camera className="w-5 h-5" />
              <span className="font-medium">
                ★ {data.destination.rating.overall}/5
              </span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              variant="tiger"
              className="text-lg px-8 py-3 rounded-xl shadow-lg  bg-white/10 backdrop-blur-md hover:scale-105 transition"
            >
              Book Safari Now
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 py-3 rounded-xl border-white text-black hover:bg-white hover:text-black shadow-lg transition"
            >
              Explore Wildlife
            </Button>
          </div>
        </div>

        {/* Decorative Blobs for Depth */}
        <div className="absolute -top-10 -left-10 w-60 h-60 bg-yellow-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-green-500/20 rounded-full blur-3xl animate-pulse"></div>
      </section>

      {/* About Section */}
      <section className="relative py-32 px-16 max-w-8xl mx-auto min-h-screen flex items-center">
        {/* Ultra-subtle background texture */}
        <div className="absolute inset-0 bg-gradient-to-br from-stone-50 via-white to-amber-50/30"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.03),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,223,186,0.04),transparent_50%)]"></div>

        {/* Refined grid layout */}
        <div className="relative z-10 grid lg:grid-cols-12 gap-20 items-center w-full">
          {/* Premium Content Side */}
          <div className="lg:col-span-6 space-y-12">
            {/* Sophisticated Header */}
            <div className="relative">
              {/* Elegant accent line */}
              <div className="absolute -left-8 top-8 bottom-0 w-px bg-gradient-to-b from-amber-400/60 via-amber-600/40 to-transparent"></div>

              <div className="mb-6">
                <h2 className="text-6xl lg:text-7xl font-light text-slate-800 leading-[0.9] tracking-tight">
                  Welcome to
                </h2>
                <h1 className="text-4xl lg:text-5xl font-light text-amber-800 mt-2 tracking-wide italic">
                  {data.destination.name}
                </h1>
              </div>

              {/* Golden accent */}
              <div className="w-24 h-px bg-gradient-to-r from-amber-400 to-amber-600 mb-8"></div>
            </div>

            {/* Refined Description */}
            <div className="relative">
              <p className="text-lg text-slate-700 font-light leading-relaxed tracking-wide">
                {data.destination.description.detailed_description}
              </p>
            </div>

            {/* Sophisticated Actions */}
            <div className="flex flex-col sm:flex-row gap-6 pt-8">
              <button className="group relative px-10 py-4 bg-gradient-to-r from-slate-800 to-slate-700 text-white font-light text-sm tracking-[0.1em] uppercase transition-all duration-500 hover:from-amber-800 hover:to-amber-700 overflow-hidden">
                <span className="relative z-10">Know More</span>
                <div className="absolute inset-0 bg-gradient-to-r from-amber-700 to-amber-600 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
                <div className="absolute bottom-0 left-0 right-0 h-px bg-amber-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700"></div>
              </button>

              <button className="group px-10 py-4 border border-slate-300 text-slate-700 font-light text-sm tracking-[0.1em] uppercase transition-all duration-300 hover:border-amber-500 hover:text-amber-700 relative overflow-hidden">
                <span className="relative z-10">Image Gallery</span>
                <div className="absolute inset-0 bg-gradient-to-r from-amber-50 to-amber-100 transform translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
              </button>
            </div>
          </div>

          {/* Premium Gallery */}
          <div className="lg:col-span-6">
            <div className="relative">
              {/* Main Gallery Frame */}
              <div className="relative group">
                {/* Luxury frame effect */}
                <div className="absolute -inset-6 bg-gradient-to-br from-amber-200/20 via-transparent to-slate-200/20 rounded-sm"></div>
                <div className="absolute -inset-3 bg-gradient-to-br from-white/60 to-stone-100/40 backdrop-blur-sm border border-white/20 rounded-sm"></div>

                {/* Main image container */}
                <div className="relative bg-white p-4 rounded-sm shadow-2xl shadow-slate-900/10">
                  <div className="relative overflow-hidden">
                    <img
                      src={data.destination.images.gallery[selectedImage]}
                      alt={`${data.destination.name} collection ${
                        selectedImage + 1
                      }`}
                      onLoad={() => setIsImageLoaded(true)}
                      className={`w-full h-96 object-cover transition-all duration-700 ${
                        isImageLoaded ? "opacity-100" : "opacity-0"
                      }`}
                    />

                    {/* Elegant overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent"></div>

                    {/* Premium image counter */}
                    <div className="absolute top-4 right-4">
                      <div className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
                        <span className="text-xs font-light text-slate-600 tracking-wide">
                          {String(selectedImage + 1).padStart(2, "0")} /{" "}
                          {String(
                            data.destination.images.gallery.length
                          ).padStart(2, "0")}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Refined Thumbnail Navigation */}
              <div className="flex justify-center mt-8 gap-5">
                {data.destination.images.gallery.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setSelectedImage(i)}
                    className={`relative group transition-all duration-300 ${
                      selectedImage === i ? "scale-110" : "hover:scale-105"
                    }`}
                  >
                    {/* Thumbnail frame */}
                    <div
                      className={`p-2 bg-white border-2 rounded-sm transition-all duration-300 ${
                        selectedImage === i
                          ? "border-amber-400 shadow-lg shadow-amber-400/20"
                          : "border-slate-200 hover:border-amber-300"
                      }`}
                    >
                      <img
                        src={img}
                        alt={`${data.destination.name} thumbnail ${i + 1}`}
                        className="w-16 h-12 object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
                      />
                    </div>

                    {/* Selection indicator */}
                    {selectedImage === i && (
                      <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2">
                        <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                      </div>
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Subtle decorative elements */}
        <div className="absolute top-20 right-20 w-1 h-32 bg-gradient-to-b from-amber-300/30 to-transparent transform rotate-12"></div>
        <div className="absolute bottom-32 left-16 w-32 h-1 bg-gradient-to-r from-transparent via-slate-300/40 to-transparent"></div>

        {/* Premium bottom accent */}
        <div className="absolute bottom-0 left-0 right-0">
          <div className="h-px bg-gradient-to-r from-transparent via-amber-400/40 via-slate-300/30 to-transparent"></div>
        </div>
      </section>

      {/* famous For Section */}
      <section className="py-12 ">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Famous For
            </h2>

            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {data.destination.description.overview}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.destination.description.famous_for.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-6 shadow-md hover:scale-105 transition-all duration-300 border-l-4 border-blue-600 group"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    {index % 4 === 0 && (
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M10 2L13.09 8.26L20 9.27L15 14.14L16.18 21.02L10 17.77L3.82 21.02L5 14.14L0 9.27L6.91 8.26L10 2Z" />
                      </svg>
                    )}
                    {index % 4 === 1 && (
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                          clipRule="evenodd"
                        />
                      </svg>
                    )}
                    {index % 4 === 2 && (
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z"
                          clipRule="evenodd"
                        />
                      </svg>
                    )}
                    {index % 4 === 3 && (
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                    )}
                  </div>

                  <div className="flex-1">
                    <p className="text-gray-700 group-hover:text-gray-900 transition-colors leading-relaxed">
                      {feature}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* wildlife */}
      <section className="py-16 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-400 to-indigo-100 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-cyan-100 to-blue-400 rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          {/* Header */}
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent mb-8 leading-tight">
              Wildlife Species
            </h2>

            <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed font-medium">
              Discover the incredible diversity of wildlife that calls this
              sanctuary home, from majestic predators to vibrant bird species in
              their natural habitat
            </p>
          </div>

          {/* Navigation Tabs */}
          <div className="flex justify-center mb-16">
            <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-3 border border-blue-100 shadow-2xl shadow-blue-500/10">
              <button
                onClick={() => setActiveTabwildlife("major")}
                className={`px-8 py-4 rounded-2xl font-semibold transition-all duration-500 transform hover:scale-105 ${
                  activeTabwildife === "major"
                    ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-xl shadow-blue-500/30"
                    : "text-slate-600 hover:text-slate-800 hover:bg-blue-50"
                }`}
              >
                Major Species
              </button>
              <button
                onClick={() => setActiveTabwildlife("mammals")}
                className={`px-8 py-4 rounded-2xl font-semibold transition-all duration-500 transform hover:scale-105 ${
                  activeTabwildife === "mammals"
                    ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-xl shadow-blue-500/30"
                    : "text-slate-600 hover:text-slate-800 hover:bg-blue-50"
                }`}
              >
                Other Mammals
              </button>
              <button
                onClick={() => setActiveTabwildlife("birds")}
                className={`px-8 py-4 rounded-2xl font-semibold transition-all duration-500 transform hover:scale-105 ${
                  activeTabwildife === "birds"
                    ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-xl shadow-blue-500/30"
                    : "text-slate-600 hover:text-slate-800 hover:bg-blue-50"
                }`}
              >
                Bird Species
              </button>
            </div>
          </div>

          {/* Major Species Section */}
          {activeTabwildife === "major" && (
            <div className="max-w-7xl mx-auto">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {data.destination.wildlife.major_species.map(
                  (species, index) => (
                    <div
                      key={index}
                      className="bg-white/90 backdrop-blur-sm border border-blue-100 rounded-3xl overflow-hidden hover:shadow-2xl hover:shadow-blue-500/20 hover:border-blue-300 transition-all duration-500 group shadow-xl"
                    >
                      {/* Image */}
                      <div className="aspect-video bg-gradient-to-br from-blue-100 to-indigo-200 overflow-hidden relative">
                        <img
                          src={species.image}
                          alt={species.animal}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                      </div>

                      {/* Content */}
                      <div className="p-4">
                        {/* Header */}
                        <div className="flex items-start justify-between">
                          <div>
                            <h4 className="text-2xl font-bold text-slate-800 mb-3">
                              {species.animal}
                            </h4>
                            <p className="text-sm italic text-slate-500 font-medium">
                              {species.scientific_name}
                            </p>
                          </div>
                          <span
                            className={`px-4 py-2 rounded-full text-xs font-semibold border ${getConservationStatusColor(
                              species.conservation_status
                            )}`}
                          >
                            {species.conservation_status}
                          </span>
                        </div>

                        {/* Description */}
                        <p className="text-slate-600 leading-relaxed mb-2 text-sm line-clamp-3">
                          {species.description}
                        </p>

                        {/* Stats Grid */}
                        <div className="grid grid-cols-2 gap-4 mb-2">
                          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 p-4 rounded-xl">
                            <p className="text-xs text-blue-600 font-semibold mb-2">
                              Population
                            </p>
                            <p className="text-sm font-bold text-slate-800">
                              {species.population}
                            </p>
                          </div>
                          <div className="bg-gradient-to-br from-cyan-50 to-blue-50 border border-cyan-200 p-2 rounded-xl">
                            <p className="text-xs text-cyan-600 font-semibold mb-2">
                              Best Time
                            </p>
                            <p className="text-sm font-bold text-slate-800">
                              {species.best_spotting_time}
                            </p>
                          </div>
                        </div>

                        {/* Zones */}
                        <div className="mb-2">
                          <p className="text-xs text-blue-600 font-semibold mb-2">
                            Safari Zones
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {species.zones.map((zone, zoneIndex) => (
                              <span
                                key={zoneIndex}
                                className="bg-gradient-to-r from-slate-100 to-blue-100 text-slate-700 px-4 py-2 rounded-xl text-xs border border-blue-200 font-medium"
                              >
                                {zone}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Interesting Facts */}
                        <div className="border-t border-blue-100 pt-2">
                          <p className="text-xs text-blue-600 font-semibold mb-3">
                            Interesting Facts
                          </p>
                          <ul className="space-y-2">
                            {species.interesting_facts
                              .slice(0, 2)
                              .map((fact, factIndex) => (
                                <li
                                  key={factIndex}
                                  className="flex items-start gap-3 text-xs text-slate-600"
                                >
                                  <span className="w-2 h-2 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full mt-2 flex-shrink-0"></span>
                                  <span className="leading-relaxed">
                                    {fact}
                                  </span>
                                </li>
                              ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  )
                )}
              </div>
            </div>
          )}

          {/* Other Mammals Section */}
          {activeTabwildife === "mammals" && (
            <div className="max-w-7xl mx-auto">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {data.destination.wildlife.other_mammals.map(
                  (mammal, index) => (
                    <div
                      key={index}
                      className="bg-white/90 backdrop-blur-sm border border-blue-100 rounded-3xl overflow-hidden  hover:shadow-2xl hover:shadow-blue-500/20 hover:border-blue-300 transition-all duration-500 group shadow-xl"
                    >
                      <div className="aspect-video bg-gradient-to-br from-blue-100 to-indigo-200 overflow-hidden relative">
                        <img
                          src={mammal.image}
                          alt={mammal.animal}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                      </div>

                      <div className="p-4">
                        <h4 className="font-bold text-slate-800 mb-3 text-2xl">
                          {mammal.animal}
                        </h4>
                        <p className="text-sm italic text-slate-500 mb-4 font-medium">
                          {mammal.scientific_name}
                        </p>
                        <p className="text-sm text-slate-600 mb-4 line-clamp-3 leading-relaxed">
                          {mammal.description}
                        </p>

                        <div className="space-y-4 pb-4">
                          <div className="flex items-center gap-4 text-sm">
                            <span className="w-3 h-3 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex-shrink-0"></span>
                            <span className="text-slate-600">
                              Population:{" "}
                              <span className="font-semibold text-slate-800">
                                {mammal.population}
                              </span>
                            </span>
                          </div>
                          <div className="flex items-center gap-4 text-sm">
                            <span className="w-3 h-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex-shrink-0"></span>
                            <span className="text-slate-600 font-medium">
                              {mammal.habitat}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                )}
              </div>
            </div>
          )}

          {/* Bird Species Section */}
          {activeTabwildife === "birds" && (
            <div className="max-w-7xl mx-auto">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {data.destination.wildlife.bird_species.map((bird, index) => (
                  <div
                    key={index}
                    className="bg-white/90 backdrop-blur-sm border border-blue-100 rounded-3xl overflow-hidden hover:shadow-2xl hover:shadow-blue-500/20 hover:border-blue-300 transition-all duration-500 group shadow-xl"
                  >
                    <div className="aspect-video overflow-hidden relative">
                      <img
                        src={bird.image}
                        alt={bird.bird}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                    </div>
                    <div className="p-4">
                      <h4 className="font-bold text-slate-800 mb-2 text-2xl">
                        {bird.bird}
                      </h4>
                      <p className="text-sm italic text-slate-500 mb-2 font-medium">
                        {bird.scientific_name}
                      </p>
                      <p className="text-sm text-slate-600 mb-4 line-clamp-3 leading-relaxed">
                        {bird.description}
                      </p>

                      <div className="space-y-4 pb-4">
                        <h5 className="text-sm font-semibold text-blue-600">
                          Habitat
                        </h5>
                        <div className="flex items-center gap-4 text-sm">
                          <span className="w-3 h-3 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex-shrink-0"></span>
                          <span className="text-slate-600 font-medium">
                            {bird.habitat}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/*  Safari Zones */}
      <section className="min-h-screen  bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 p-6">
        {/* Header */}
        <div className="max-w-7xl mx-auto mb-12">
          <div className="text-center mb-8">
            <h1 className="text-5xl font-bold bg-gradient-to-r from-amber-300 via-orange-400 to-red-500 bg-clip-text text-transparent mb-4">
              Safari Experience
            </h1>
            <p className="text-slate-300 text-lg max-w-2xl mx-auto">
              Discover the majestic wilderness across distinct zones, each
              offering unique wildlife encounters and breathtaking landscapes
            </p>
          </div>

          {/* Navigation Tabs */}
          <div className="flex justify-center mb-8">
            <div className="bg-slate-800 backdrop-blur-md rounded-2xl p-2 border border-slate-700">
              <button
                onClick={() => setActiveTab("zones")}
                className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                  activeTab === "zones"
                    ? "bg-gradient-to-r from-amber-500 to-orange-600 text-white shadow-lg"
                    : "text-slate-400 hover:text-white hover:bg-slate-700/50"
                }`}
              >
                Safari Zones
              </button>
              <button
                onClick={() => setActiveTab("timings")}
                className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                  activeTab === "timings"
                    ? "bg-gradient-to-r from-amber-500 to-orange-600 text-white shadow-lg"
                    : "text-slate-400 hover:text-white hover:bg-slate-700/50"
                }`}
              >
                Timings & Info
              </button>
            </div>
          </div>
        </div>

        {/* Zones Section */}
        {activeTab === "zones" && (
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 mb-8">
              {data.destination.safari_information.zones.map((zone, index) => (
                <div
                  key={zone.zone_number}
                  className="bg-slate-800/60 backdrop-blur-md border border-slate-700 rounded-2xl p-6 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl hover:border-amber-500/50"
                >
                  {/* Zone Header */}
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-bold text-white">
                      {zone.zone_number}
                    </h3>
                    <div
                      className={`px-3 py-1 rounded-full text-white text-sm font-medium ${getDensityColor(
                        zone.tiger_density
                      )}`}
                    >
                      {getDensityIcon(zone.tiger_density)} {zone.tiger_density}
                    </div>
                  </div>

                  {/* Zone Details */}
                  <div className="space-y-3 mb-4">
                    <div className="flex items-center text-slate-300">
                      <MapPin className="w-4 h-4 mr-2 text-amber-400" />
                      <span className="text-sm">{zone.area}</span>
                    </div>
                    <div className="flex items-center text-slate-300">
                      <Mountain className="w-4 h-4 mr-2 text-amber-400" />
                      <span className="text-sm">{zone.terrain}</span>
                    </div>
                  </div>

                  <p className="text-slate-300 text-sm mb-4 line-clamp-2">
                    {zone.description}
                  </p>

                  {/* Highlights */}
                  <div className="mb-4">
                    <h4 className="text-amber-400 font-medium mb-2 text-sm">
                      Key Highlights
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {zone.highlights.map((highlight, i) => (
                        <span
                          key={i}
                          className="bg-slate-700/50 text-slate-300 px-2 py-1 rounded-lg text-xs"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Always Visible Content */}
                  <div className="mt-6 pt-6 border-t border-slate-700 space-y-4">
                    <div>
                      <h4 className="text-amber-400 font-medium mb-2 text-sm flex items-center">
                        <Eye className="w-4 h-4 mr-1" />
                        Special Features
                      </h4>
                      <ul className="space-y-1">
                        {zone.special_features.map((feature, i) => (
                          <li
                            key={i}
                            className="text-slate-300 text-sm flex items-center"
                          >
                            <span className="w-1.5 h-1.5 bg-amber-400 rounded-full mr-2"></span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-amber-400 font-medium mb-2 text-sm flex items-center">
                        <Users className="w-4 h-4 mr-1" />
                        Best Suited For
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {zone.best_for.map((item, i) => (
                          <span
                            key={i}
                            className="bg-gradient-to-r from-amber-500/20 to-orange-600/20 text-amber-300 px-3 py-1 rounded-full text-xs border border-amber-500/30"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Timings & Information Section */}
        {activeTab === "timings" && (
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Safari Timings */}
              <div className="bg-slate-800/60 backdrop-blur-md border border-slate-700 rounded-2xl p-6">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                  <Clock className="w-6 h-6 mr-3 text-amber-400" />
                  Safari Timings
                </h3>

                <div className="space-y-4">
                  <div className="bg-slate-700/50 rounded-xl p-4">
                    <h4 className="text-amber-400 font-medium mb-2">
                      Morning Safari
                    </h4>
                    <p className="text-slate-300 text-sm">
                      {
                        data.destination.safari_information.timings
                          .morning_safari
                      }
                    </p>
                  </div>

                  <div className="bg-slate-700/50 rounded-xl p-4">
                    <h4 className="text-amber-400 font-medium mb-2">
                      Evening Safari
                    </h4>
                    <p className="text-slate-300 text-sm">
                      {
                        data.destination.safari_information.timings
                          .evening_safari
                      }
                    </p>
                  </div>

                  <div className="bg-slate-700/50 rounded-xl p-4">
                    <h4 className="text-amber-400 font-medium mb-2">
                      Gate Opening
                    </h4>
                    <p className="text-slate-300 text-sm">
                      {data.destination.safari_information.timings.gate_opening}
                    </p>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-red-500/10 border border-red-500/30 rounded-xl">
                  <div className="flex items-center mb-2">
                    <AlertCircle className="w-4 h-4 text-red-400 mr-2" />
                    <span className="text-red-400 font-medium text-sm">
                      Closed Period
                    </span>
                  </div>
                  <p className="text-red-300 text-sm">
                    {data.destination.safari_information.closed_period}
                  </p>
                </div>
              </div>

              {/* Booking Information */}
              <div className="bg-slate-800/60 backdrop-blur-md border border-slate-700 rounded-2xl p-6">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                  <Calendar className="w-6 h-6 mr-3 text-amber-400" />
                  Booking Information
                </h3>

                <div className="space-y-4">
                  <div className="bg-slate-700/50 rounded-xl p-4">
                    <h4 className="text-amber-400 font-medium mb-2">
                      Advance Booking
                    </h4>
                    <p className="text-slate-300 text-sm">
                      {
                        data.destination.safari_information.booking_information
                          .advance_booking
                      }
                    </p>
                  </div>

                  <div className="bg-slate-700/50 rounded-xl p-4">
                    <h4 className="text-amber-400 font-medium mb-2">
                      Booking Platforms
                    </h4>
                    <ul className="space-y-1">
                      {data.destination.safari_information.booking_information.booking_platforms.map(
                        (platform, i) => (
                          <li
                            key={i}
                            className="text-slate-300 text-sm flex items-center"
                          >
                            <span className="w-1.5 h-1.5 bg-amber-400 rounded-full mr-2"></span>
                            {platform}
                          </li>
                        )
                      )}
                    </ul>
                  </div>

                  <div className="bg-slate-700/50 rounded-xl p-4">
                    <h4 className="text-amber-400 font-medium mb-2">
                      Cancellation Policy
                    </h4>
                    <p className="text-slate-300 text-sm">
                      {
                        data.destination.safari_information.booking_information
                          .cancellation_policy
                      }
                    </p>
                  </div>

                  <div className="bg-amber-500/10 border border-amber-500/30 rounded-xl p-4">
                    <h4 className="text-amber-400 font-medium mb-2">
                      Peak Season Tip
                    </h4>
                    <p className="text-amber-300 text-sm">
                      {
                        data.destination.safari_information.booking_information
                          .peak_season_booking
                      }
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>

      {/* Popular Destinations */}
      {data?.destination?.famous_spots && (
        <section className="bg-gray-50">
          <h2 className="text-3xl font-bold text-center mb-12">
            Popular Destinations
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {data?.destination?.famous_spots?.map((spot, index) => (
              <Card key={index} className="rounded-2xl shadow-lg">
                <CardContent className="p-4">
                  <img
                    className="h-52 w-full mb-2"
                    src={"/images/golden-temple.jpg"}
                  />
                  <h3 className="text-xl font-semibold mb-2">{spot?.name}</h3>
                  <p className="text-gray-600">{spot?.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      )}

      {/* Activities Section */}
      <section className="py-16 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          {/* Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500 text-white px-8 py-4 rounded-2xl text-sm font-semibold mb-8 shadow-2xl shadow-blue-500/10">
              <MapPin className="w-5 h-5" />
              Exclusive Safari Experiences
            </div>

            <h2 className="text-5xl md:text-6xl font-semibold mb-8 leading-tight">
              Wildlife{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
                Activities
              </span>
            </h2>

            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-medium">
              Embark on extraordinary adventures through pristine wilderness,
              guided by expert naturalists who reveal the secrets of one of
              India's most celebrated wildlife reserves.
            </p>
          </div>

          {/* Activities Grid */}
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
              {data.destination.activities.map((activity, index) => (
                <div
                  key={index}
                  className="group relative bg-white border border-gray-200 rounded-3xl overflow-hidden transition-all duration-300 shadow-lg hover:shadow-xl hover:border-gray-300"
                >
                  {/* Activity Icon Header */}
                  <div className="p-6 flex items-center justify-between">
                    <div className="text-4xl">{activity.icon}</div>
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold border ${getDifficultyColor(
                        activity.difficulty
                      )} bg-gray-50`}
                    >
                      {activity.difficulty}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="px-8 pb-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                      {activity.name}
                    </h3>

                    <p className="text-gray-600 leading-relaxed mb-6 text-sm">
                      {activity.description}
                    </p>

                    {/* Quick Info */}
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="flex items-center gap-2 text-sm text-gray-700">
                        <Clock className="w-4 h-4 text-blue-500" />
                        <span>{activity.duration}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-700">
                        <Users className="w-4 h-4 text-blue-500" />
                        <span>{activity.group_size}</span>
                      </div>
                    </div>

                    {/* Cost */}
                    <div className="bg-gray-50 border border-gray-200 rounded-2xl p-4 mb-6">
                      <div className="flex items-center justify-between">
                        <span className="text-gray-600 text-sm">
                          Price Range
                        </span>
                        <span className="text-gray-900 font-bold text-lg">
                          {activity.cost_range}
                        </span>
                      </div>
                    </div>

                    {/* Best Time */}
                    <div className="mb-6">
                      <h4 className="text-blue-600 font-semibold text-sm mb-2">
                        Best Time
                      </h4>
                      <p className="text-gray-600 text-sm">
                        {activity.best_time}
                      </p>
                    </div>

                    {/* Includes */}
                    <div className="mb-6">
                      <h4 className="text-blue-600 font-semibold text-sm mb-3">
                        Includes
                      </h4>
                      <div className="space-y-2">
                        {activity.includes?.map((item, itemIndex) => (
                          <div
                            key={itemIndex}
                            className="flex items-center gap-2 text-xs text-gray-700"
                          >
                            <CheckCircle className="w-3 h-3 text-green-500 flex-shrink-0" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="space-y-3">
                      <button
                        onClick={() => setSelectedActivity(activity)}
                        className="w-full bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/25"
                      >
                        View Details
                      </button>

                      {activity.booking_required && (
                        <button className="w-full bg-gray-100 hover:bg-gray-200 border border-gray-300 text-gray-700 font-semibold py-3 px-6 rounded-xl transition-all duration-300">
                          Book Now
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Accomodation */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <h2 className="text-4xl font-extrabold text-center mb-14 text">
          Accommodation Options
        </h2>
        {/* Tabs */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-white border border-gray-200 rounded-full shadow-md overflow-hidden">
            {Accomodationtabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`px-6 py-2 text-sm font-semibold transition-colors ${
                  activeTab === tab.key
                    ? "bg-blue-600 text-white"
                    : "text-gray-600 hover:bg-blue-50"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
        {/* Active Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {accommodations[activeTab]?.map((place, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden"
            >
              {/* Header */}
              <div className="p-6 bg-gradient-to-r from-blue-50 to-blue-100 border-b border-gray-100">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-gray-900">
                    {place.name}
                  </h3>
                  <span className="px-3 py-1 bg-blue-600 text-white text-xs font-semibold rounded-full shadow-sm">
                    {place.category}
                  </span>
                </div>

                <div className="flex items-center gap-4 mb-3">
                  {/* Rating */}
                  {place.rating && (
                    <div className="flex items-center">
                      {[...Array(5)].map((_, index) => (
                        <svg
                          key={index}
                          className={`w-4 h-4 ${
                            index < Math.floor(place.rating)
                              ? "text-yellow-400"
                              : "text-gray-300"
                          }`}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                      <span className="ml-2 text-sm font-medium text-gray-700">
                        {place.rating}
                      </span>
                    </div>
                  )}

                  {place.price_range && (
                    <div className="text-lg font-bold text-blue-600">
                      {place.price_range}
                    </div>
                  )}
                </div>

                <p className="text-gray-600 text-sm leading-relaxed">
                  {place.description}
                </p>
              </div>

              {/* Details */}
              <div className="p-6">
                {place.location && (
                  <div className="flex items-center gap-2 text-gray-600 mb-4">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    <span className="text-sm">{place.location}</span>
                  </div>
                )}

                {/* Amenities */}
                {place.amenities && (
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">
                      Amenities
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {place.amenities.map((amenity, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-blue-50 text-blue-700 text-xs rounded-full"
                        >
                          {amenity}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Special Features */}
                {place.special_features && (
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">
                      Special Features
                    </h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {place.special_features.map((feature, index) => (
                        <li key={index} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Booking */}
                {place.booking_process ? (
                  <div className="mb-4 p-3 bg-blue-50 border border-blue-200 rounded-lg">
                    <h4 className="font-semibold text-blue-900 mb-1">
                      Booking Process
                    </h4>
                    <p className="text-sm text-blue-700">
                      {place.booking_process}
                    </p>
                  </div>
                ) : place.booking_contact ? (
                  <div className="mb-4 p-3 bg-blue-50 border border-blue-200 rounded-lg">
                    <h4 className="font-semibold text-blue-900 mb-1">
                      Contact
                    </h4>
                    <p className="text-sm text-blue-700">
                      {place.booking_contact}
                    </p>
                  </div>
                ) : null}

                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg">
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Practical Information */}

      {/* Best Time to Visit */}
      <section className="py-16 px-6 bg-gray-50">
        <h2 className="text-3xl font-bold text-center mb-8">
          Best Time to Visit
        </h2>
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-lg">
            {data?.destination?.description?.best_time_to_visit?.season}
          </p>
          <p className="text-gray-600">
            Peak:{" "}
            {data?.destination?.description?.best_time_to_visit?.peak_season} |
            Weather:{" "}
            {data?.destination?.description?.best_time_to_visit?.weather}
          </p>
        </div>
      </section>

      {/* Travel Tips */}
      {data?.destination?.tip && (
        <section className="py-16 px-6 max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Travel Tips</h2>
          <ul className="list-disc list-inside text-lg space-y-2 text-gray-700">
            {data?.destination?.tips?.map((tip, i) => (
              <li key={i}>{tip}</li>
            ))}
          </ul>
        </section>
      )}

      {/* Footer */}
      <footer className="py-8 text-center bg-gray-900 text-white mt-16">
        <p>© 2025 Explore {data.destination.name}. All rights reserved.</p>
      </footer>
    </div>
  );
}
