export default function HowItWorks() {
  const steps = [
    {
      title: "Search Property",
      desc: "Find your desired home using smart filters and location search.",
    },
    {
      title: "Compare Options",
      desc: "Check prices, amenities, and reviews before making a decision.",
    },
    {
      title: "Book & Move In",
      desc: "Confirm booking instantly and move into your new home easily.",
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <div className="max-w-6xl mx-auto px-6">

        {/* Title */}
        <h2 className="text-4xl font-bold text-center text-white">
          How It Works
        </h2>

        <p className="text-center text-slate-400 mt-3">
          Simple 3-step process to find your perfect home
        </p>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-10 mt-14 relative">

          {steps.map((step, i) => (
            <div
              key={i}
              className="relative bg-slate-900/60 border border-slate-800 rounded-2xl p-8 text-center hover:border-blue-500 transition group"
            >

              {/* Step number */}
              <div className="w-14 h-14 mx-auto mb-6 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-lg shadow-lg group-hover:scale-110 transition">
                {i + 1}
              </div>

              {/* Content */}
              <h3 className="text-white text-xl font-bold">
                {step.title}
              </h3>

              <p className="text-slate-400 mt-3 text-sm leading-relaxed">
                {step.desc}
              </p>

              {/* glow effect */}
              <div className="absolute -inset-1 bg-blue-500/10 blur-2xl opacity-0 group-hover:opacity-100 transition"></div>

            </div>
          ))}

        </div>

        {/* connector line (desktop only vibe) */}
        <div className="hidden md:block absolute top-1/2 left-0 w-full h-px bg-slate-800 -z-10"></div>

      </div>
    </section>
  );
}