"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import {
  MapPin,
  Search,
  DollarSign,
  Building2,
} from "lucide-react";

export default function Banner() {
  const images = [
    "/banner1.jpg",
    "/banner2.jpg",
    "/banner3.jpg",
    "/banner4.jpg",
    "/banner5.jpg",
    "/banner6.jpg",
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4000); // 4s slide

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">

      {/* Background Slider */}
      {images.map((img, i) => (
        <Image
          key={i}
          src={img}
          alt="banner"
          fill
          priority
          className={`object-cover transition-opacity duration-1000 ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-900/70 to-slate-950/80" />

      {/* Content (CENTERED) */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">

        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/20 border border-blue-500/30 backdrop-blur-md text-blue-300 text-sm mb-6">
          <Building2 size={16} />
          Premium Property Marketplace
        </div>

        {/* Heading */}
        <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
          Find Your
          <span className="block bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Dream Property
          </span>
        </h1>

        <p className="mt-6 text-base md:text-lg text-slate-300 max-w-2xl mx-auto">
          Discover apartments, villas, houses and commercial spaces from trusted owners.
          Secure bookings and verified listings.
        </p>

        {/* Stats */}
        <div className="flex justify-center flex-wrap gap-8 mt-10 text-center">
          <div>
            <h3 className="text-2xl font-bold text-white">5K+</h3>
            <p className="text-slate-400 text-sm">Properties</p>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-white">20K+</h3>
            <p className="text-slate-400 text-sm">Happy Clients</p>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-white">50+</h3>
            <p className="text-slate-400 text-sm">Cities</p>
          </div>
        </div>

        {/* Search Box */}
        <div className="mt-14 bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl p-5 shadow-2xl">

          <div className="grid md:grid-cols-5 gap-4">

            {/* Location */}
            <div className="relative">
              <MapPin size={18} className="absolute left-4 top-4 text-slate-400" />
              <input
                type="text"
                placeholder="Location"
                className="w-full h-14 bg-slate-900/70 border border-slate-700 text-white rounded-xl pl-11 pr-4 outline-none focus:border-blue-500"
              />
            </div>

            {/* Type */}
            <select className="h-14 bg-slate-900/70 border border-slate-700 text-white rounded-xl px-4 outline-none focus:border-blue-500">
              <option>Property Type</option>
              <option>Apartment</option>
              <option>Villa</option>
              <option>House</option>
              <option>Office</option>
            </select>

            {/* Min */}
            <div className="relative">
              <DollarSign size={18} className="absolute left-4 top-4 text-slate-400" />
              <input
                type="number"
                placeholder="Min Price"
                className="w-full h-14 bg-slate-900/70 border border-slate-700 text-white rounded-xl pl-11 pr-4 outline-none focus:border-blue-500"
              />
            </div>

            {/* Max */}
            <div className="relative">
              <DollarSign size={18} className="absolute left-4 top-4 text-slate-400" />
              <input
                type="number"
                placeholder="Max Price"
                className="w-full h-14 bg-slate-900/70 border border-slate-700 text-white rounded-xl pl-11 pr-4 outline-none focus:border-blue-500"
              />
            </div>

            {/* Button */}
            <button className="h-14 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold flex items-center justify-center gap-2 hover:scale-105 transition">
              <Search size={18} />
              Search
            </button>

          </div>
        </div>

      </div>
    </section>
  );
}