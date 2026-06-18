import Image from "next/image";
import { MapPin, BedDouble, Bath, Square } from "lucide-react";

export default function FeaturedProperties() {
  const properties = [
    {
      id: 1,
      title: "Luxury Apartment",
      location: "Dhaka",
      price: "$1500/month",
      image:
        "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
    },
    {
      id: 2,
      title: "Lake View Apartment",
      location: "Dhaka",
      price: "$1800/month",
      image:
        "https://images.unsplash.com/photo-1494526585095-c41746248156",
    },
    {
      id: 3,
      title: "Elite Villa",
      location: "Cox's Bazar",
      price: "$3500/month",
      image:
        "https://images.unsplash.com/photo-1512917774080-9991f1c4c750",
    },
  ];

  return (
    <section className="py-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center">
          <span className="text-blue-400 font-semibold uppercase tracking-widest">
            Featured Listings
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-white mt-3">
            Featured Properties
          </h2>

          <p className="text-slate-400 mt-4">
            Discover the most popular rental properties.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {properties.map((item) => (
            <div
              key={item.id}
              className="group overflow-hidden rounded-3xl bg-slate-900 border border-slate-800 hover:border-blue-500 transition-all duration-300"
            >
              {/* Image */}
              <div className="relative h-72 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-110 transition duration-700"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

                <span className="absolute top-4 left-4 bg-blue-600 text-white text-xs px-3 py-1 rounded-full">
                  Featured
                </span>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-white text-2xl font-bold">
                  {item.title}
                </h3>

                <div className="flex items-center gap-2 mt-3 text-slate-400">
                  <MapPin size={16} />
                  <span>{item.location}</span>
                </div>

                {/* Features */}
                <div className="flex justify-between mt-6 text-slate-300 text-sm">
                  <div className="flex items-center gap-2">
                    <BedDouble size={18} />
                    <span>3 Beds</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <Bath size={18} />
                    <span>2 Baths</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <Square size={18} />
                    <span>1200 sqft</span>
                  </div>
                </div>

                {/* Bottom */}
                <div className="flex justify-between items-center mt-8">
                  <h4 className="text-2xl font-bold text-blue-400">
                    {item.price}
                  </h4>

                  <button className="px-5 py-2 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-medium hover:scale-105 transition">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}