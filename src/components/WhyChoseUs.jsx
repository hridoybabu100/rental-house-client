import {
  ShieldCheck,
  House,
  Headphones,
  BadgeCheck,
} from "lucide-react";

export default function WhyChooseUs() {
  const data = [
    {
      icon: <House size={45} />,
      title: "Verified Properties",
      desc: "Every property is carefully verified before listing.",
    },
    {
      icon: <ShieldCheck size={45} />,
      title: "Secure Booking",
      desc: "Safe payments and protected booking process.",
    },
    {
      icon: <BadgeCheck size={45} />,
      title: "Trusted Owners",
      desc: "Connect with genuine and trusted property owners.",
    },
    {
      icon: <Headphones size={45} />,
      title: "24/7 Support",
      desc: "Our team is available anytime you need help.",
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center">
          <span className="text-blue-400 font-semibold uppercase tracking-wider">
            Why Choose Us
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-white mt-3">
            The Smarter Way To Rent
          </h2>

          <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
            Discover trusted properties, secure bookings and exceptional
            customer service all in one place.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          {data.map((item, i) => (
            <div
              key={i}
              className="group bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 hover:-translate-y-2 hover:border-blue-500 transition-all duration-300"
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center text-white">
                {item.icon}
              </div>

              <h3 className="text-white text-xl font-semibold mt-6">
                {item.title}
              </h3>

              <p className="text-slate-400 mt-3 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}