import { GrLocation, GrPhone, GrMail, GrFacebook, GrTwitter, GrInstagram } from "react-icons/gr";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white pt-20 pb-10 border-t border-slate-800">

      <div className="max-w-6xl mx-auto px-6">

        {/* Top Section */}
        <div className="grid md:grid-cols-4 gap-10">

          {/* Logo */}
          <div>
            <h2 className="text-3xl font-bold text-blue-500">
              HomeNest
            </h2>

            <p className="text-slate-400 mt-4 text-sm leading-relaxed">
              Find your dream home easily with verified listings and trusted agents across Bangladesh.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3 text-slate-400">

              <li className="hover:text-blue-400 cursor-pointer transition">Home</li>
              <li className="hover:text-blue-400 cursor-pointer transition">Properties</li>
              <li className="hover:text-blue-400 cursor-pointer transition">Cities</li>
              <li className="hover:text-blue-400 cursor-pointer transition">About</li>

            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-3 text-slate-400">

              <li className="hover:text-blue-400 cursor-pointer transition">Help Center</li>
              <li className="hover:text-blue-400 cursor-pointer transition">Terms</li>
              <li className="hover:text-blue-400 cursor-pointer transition">Privacy</li>
              <li className="hover:text-blue-400 cursor-pointer transition">Contact</li>

            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>

            <div className="space-y-3 text-slate-400 text-sm">

              <div className="flex items-center gap-2">
                <GrLocation className="text-blue-400 text-lg" />
                Chattogram, Bangladesh
              </div>

              <div className="flex items-center gap-2">
                <GrPhone className="text-blue-400 text-lg" />
                +880 123 456 789
              </div>

              <div className="flex items-center gap-2">
                <GrMail className="text-blue-400 text-lg" />
                support@homenest.com
              </div>

            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-800 my-10"></div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">

          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} HomeNest. All rights reserved.
          </p>

          {/* Social */}
          <div className="flex gap-6 text-xl">

            <GrFacebook className="text-slate-400 hover:text-blue-500 cursor-pointer transition" />
            <GrTwitter className="text-slate-400 hover:text-blue-400 cursor-pointer transition" />
            <GrInstagram className="text-slate-400 hover:text-pink-500 cursor-pointer transition" />

          </div>

        </div>

      </div>
    </footer>
  );
}