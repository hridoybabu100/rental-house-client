export default function PopularCities() {
  const cities = [
    "Dhaka",
    "Khulna",
    "Chattogram",
    "Rajshahi",
    "Sylhet",
    "Barishal",
  ];

  return (
    <section className="py-2 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <h2 className="text-4xl font-bold text-center text-white">
          Popular Cities
        </h2>

        <p className="text-center text-slate-500 mt-3">
          Discover rental properties in Bangladesh’s top cities
        </p>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 mt-14">

          {cities.map((city) => (
            <div
              key={city}
              className="group relative h-44 rounded-2xl overflow-hidden cursor-pointer shadow-md hover:shadow-xl transition-all duration-300"
            >

              {/* Background gradient (theme matched) */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-indigo-600 to-blue-700 group-hover:scale-110 transition-transform duration-500"></div>

              {/* Dark overlay for text clarity */}
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition"></div>

              {/* Soft glow */}
              <div className="absolute -inset-1 bg-blue-400/20 blur-2xl opacity-0 group-hover:opacity-100 transition"></div>

              {/* Content */}
              <div className="relative h-full flex flex-col items-center justify-center text-center">

                <h3 className="text-white text-2xl font-bold tracking-wide">
                  {city}
                </h3>

                <p className="text-blue-100 text-sm mt-1 opacity-90">
                  Explore listings
                </p>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}