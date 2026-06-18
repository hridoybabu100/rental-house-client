"use client";

import { useState } from "react";
import { Mail, Lock, User, Image as ImageIcon, UserCheck } from "lucide-react";
import Image from "next/image";

export default function SignupPage() {
  const [role, setRole] = useState("user");

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 px-6">

      <div className="w-full max-w-md bg-slate-900/60 border border-slate-800 rounded-2xl p-8 shadow-2xl backdrop-blur-xl">

        {/* Title */}
        <h2 className="text-3xl font-bold text-white text-center">
          Create Account
        </h2>

        <p className="text-slate-400 text-center mt-2 text-sm">
          Join our real estate platform
        </p>

        {/* Form */}
        <form className="mt-8 space-y-4">

          {/* Name */}
          <div className="relative">
            <User className="absolute left-3 top-3 text-slate-400" size={18} />
            <input
              type="text"
              placeholder="Full Name"
              className="w-full h-12 bg-slate-950 border border-slate-800 rounded-lg pl-10 text-white focus:border-blue-500 outline-none"
            />
          </div>

          {/* Email */}
          <div className="relative">
            <Mail className="absolute left-3 top-3 text-slate-400" size={18} />
            <input
              type="email"
              placeholder="Email Address"
              className="w-full h-12 bg-slate-950 border border-slate-800 rounded-lg pl-10 text-white focus:border-blue-500 outline-none"
            />
          </div>

          {/* Password */}
          <div className="relative">
            <Lock className="absolute left-3 top-3 text-slate-400" size={18} />
            <input
              type="password"
              placeholder="Password"
              className="w-full h-12 bg-slate-950 border border-slate-800 rounded-lg pl-10 text-white focus:border-blue-500 outline-none"
            />
          </div>

          {/* Image URL */}
          <div className="relative">
            <ImageIcon className="absolute left-3 top-3 text-slate-400" size={18} />
            <input
              type="text"
              placeholder="Profile Image URL"
              className="w-full h-12 bg-slate-950 border border-slate-800 rounded-lg pl-10 text-white focus:border-blue-500 outline-none"
            />
          </div>

          {/* Role Select */}
          <div className="flex gap-3">

            <button
              type="button"
              onClick={() => setRole("user")}
              className={`w-1/2 h-12 rounded-lg border flex items-center justify-center gap-2 transition ${
                role === "user"
                  ? "bg-blue-600 border-blue-500 text-white"
                  : "bg-slate-950 border-slate-800 text-slate-400"
              }`}
            >
              <UserCheck size={18} />
              User
            </button>

            <button
              type="button"
              onClick={() => setRole("owner")}
              className={`w-1/2 h-12 rounded-lg border flex items-center justify-center gap-2 transition ${
                role === "owner"
                  ? "bg-indigo-600 border-indigo-500 text-white"
                  : "bg-slate-950 border-slate-800 text-slate-400"
              }`}
            >
              <UserCheck size={18} />
              Owner
            </button>

          </div>

          {/* Submit */}
          <button className="w-full h-12 mt-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-lg hover:scale-105 transition">
            Create Account
          </button>

        </form>

        {/* Divider */}
        <div className="my-6 flex items-center gap-3">
          <div className="h-px bg-slate-800 flex-1"></div>
          <span className="text-slate-500 text-sm">OR</span>
          <div className="h-px bg-slate-800 flex-1"></div>
        </div>

        {/* Google Login */}
        <button className="w-full h-12 border border-slate-700 rounded-lg text-white flex items-center justify-center gap-2 hover:bg-slate-800 transition">
          <Image
            src="https://www.svgrepo.com/show/475656/google-color.svg"
            className="w-5 h-5"
            width={30}
            height={30}
            alt="google"
          />
          Continue with Google
        </button>

        {/* Login link */}
        <p className="text-center text-slate-500 text-sm mt-6">
          Already have an account?{" "}
          <span className="text-blue-400 cursor-pointer">Login</span>
        </p>

      </div>
    </div>
  );
}