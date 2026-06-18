export default function LiveStats() {
  const stats = [
    { label: "Active Listings", value: "2,500+" },
    { label: "Happy Users", value: "12,000+" },
    { label: "Cities Covered", value: "6+" },
    { label: "Bookings Done", value: "8,400+" },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <div className="max-w-6xl mx-auto px-6">

        {/* Title */}
        <h2 className="text-4xl font-bold text-center text-white">
          Trusted by Thousands
        </h2>

        <p className="text-center text-slate-400 mt-3">
          Real numbers that show our growing community
        </p>

        {/* Stats grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 mt-14">

          {stats.map((item, i) => (
            <div
              key={i}
              className="group bg-slate-900/60 border border-slate-800 rounded-2xl p-8 text-center hover:border-blue-500 transition shadow-lg"
            >

              {/* Big number */}
              <h3 className="text-3xl font-bold text-blue-400 group-hover:scale-110 transition">
                {item.value}
              </h3>

              {/* Label */}
              <p className="text-slate-400 mt-2 text-sm">
                {item.label}
              </p>

              {/* glow */}
              <div className="absolute -inset-1 bg-blue-500/10 blur-2xl opacity-0 group-hover:opacity-100 transition"></div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}