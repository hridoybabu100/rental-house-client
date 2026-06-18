import Image from "next/image";

export default function RecentlyAdded() {
  const items = [
    "Green Villa",
    "Lake View Apartment",
    "Royal Residence",
    "Modern Family Home",
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <h2 className="text-4xl font-bold text-center text-white">
          Recently Added
        </h2>

        <p className="text-center text-slate-400 mt-3">
          Latest properties added to the marketplace
        </p>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 mt-14">

          {items.map((item, i) => (
            <div
              key={i}
              className="group bg-slate-900/60 border border-slate-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-blue-500/10 transition-all duration-300"
            >

              {/* Image */}
              <div className="relative overflow-hidden">
                <Image
                  src={`https://picsum.photos/400/300?random=${i}`}
                  fill
                  alt={item}
                  className="h-52 w-full object-cover group-hover:scale-110 transition-transform duration-500"
                />

                {/* Image overlay */}
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition"></div>

                {/* Badge */}
                <div className="absolute top-3 left-3 bg-blue-600/90 text-white text-xs px-3 py-1 rounded-full">
                  New
                </div>
              </div>

              {/* Content */}
              <div className="p-5">

                <h3 className="font-bold text-white text-lg group-hover:text-blue-400 transition">
                  {item}
                </h3>

                <p className="text-slate-400 mt-2 text-sm">
                  📍 Bangladesh
                </p>

                <p className="text-blue-400 font-bold mt-3 text-lg">
                  $1500/month
                </p>

                {/* Button style feel */}
                <div className="mt-4">
                  <button className="w-full py-2 rounded-lg bg-slate-800 text-slate-200 hover:bg-blue-600 hover:text-white transition">
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