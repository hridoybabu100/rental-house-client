// components/Banner.jsx

import Image from "next/image";
import { MapPin, Search, DollarSign } from "lucide-react";

export default function Banner() {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center">
      {/* Background */}
      <Image
        src="/banner.jpg"
        alt="Property Banner"
        fill
        priority
        className="object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/55"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl w-full px-6">
        <div className="text-center text-white">
          <h1 className="text-5xl md:text-7xl font-bold">
            Find Your Dream Home
          </h1>

          <p className="mt-5 text-lg text-gray-200">
            Book apartments, villas and houses with trusted owners
            across Bangladesh.
          </p>
        </div>

        {/* Search Box */}
        <div className="mt-12 bg-white/10 backdrop-blur-md rounded-2xl p-4 shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            
            {/* Location */}
            <div className="relative">
              <MapPin
                size={18}
                className="absolute left-4 top-4 text-gray-500"
              />

              <input
                type="text"
                placeholder="Location"
                className="w-full h-12 rounded-lg pl-10 pr-3 outline-none bg-white"
              />
            </div>

            {/* Property Type */}
            <select className="h-12 rounded-lg px-3 bg-white outline-none">
              <option>Property Type</option>
              <option>Apartment</option>
              <option>Villa</option>
              <option>House</option>
              <option>Office</option>
            </select>

            {/* Min Price */}
            <div className="relative">
              <DollarSign
                size={18}
                className="absolute left-4 top-4 text-gray-500"
              />

              <input
                type="number"
                placeholder="Min Price"
                className="w-full h-12 rounded-lg pl-10 pr-3 outline-none bg-white"
              />
            </div>

            {/* Max Price */}
            <div className="relative">
              <DollarSign
                size={18}
                className="absolute left-4 top-4 text-gray-500"
              />

              <input
                type="number"
                placeholder="Max Price"
                className="w-full h-12 rounded-lg pl-10 pr-3 outline-none bg-white"
              />
            </div>

            {/* Search */}
            <button className="h-12 bg-black text-white rounded-lg flex items-center justify-center gap-2 hover:bg-gray-800 transition">
              <Search size={18} />
              Search
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}