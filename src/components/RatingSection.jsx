export default function RatingSection() {
  const ratings = [
    { label: "Overall Rating", value: 4.8 },
    { label: "Property Quality", value: 4.7 },
    { label: "Customer Support", value: 4.9 },
    { label: "Value for Money", value: 4.6 },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <div className="max-w-6xl mx-auto px-6">

        {/* Title */}
        <h2 className="text-4xl font-bold text-center text-white">
          User Ratings
        </h2>

        <p className="text-center text-slate-400 mt-3">
          Real feedback from verified users
        </p>

        {/* Rating cards */}
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 mt-14">

          {ratings.map((item, i) => (
            <div
              key={i}
              className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 text-center shadow-lg hover:shadow-blue-500/10 transition"
            >

              {/* Stars */}
              <div className="flex justify-center mb-3 text-yellow-400 text-lg">
                {"★★★★★".split("").map((star, idx) => (
                  <span key={idx}>
                    {idx < Math.round(item.value) ? "★" : "☆"}
                  </span>
                ))}
              </div>

              {/* Rating number */}
              <h3 className="text-3xl font-bold text-white">
                {item.value}
              </h3>

              {/* Label */}
              <p className="text-slate-400 mt-2 text-sm">
                {item.label}
              </p>

            </div>
          ))}
        </div>

        {/* Bottom highlight card */}
        <div className="mt-14 bg-gradient-to-r from-blue-600/20 via-indigo-600/20 to-blue-600/20 border border-slate-800 rounded-2xl p-8 text-center">
          <h3 className="text-white text-2xl font-bold">
            10,000+ Happy Customers
          </h3>
          <p className="text-slate-400 mt-2">
            Trusted by users across Bangladesh for renting properties
          </p>
        </div>

      </div>
    </section>
  );
}