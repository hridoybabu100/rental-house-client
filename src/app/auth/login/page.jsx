"use client";

import { useState } from "react";
import { Mail, Lock } from "lucide-react";
import Image from "next/image";

export default function LoginPage() {
  const [role, setRole] = useState("user");

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 px-6">

      <div className="w-full max-w-md bg-slate-900/60 border border-slate-800 rounded-2xl p-8 shadow-2xl backdrop-blur-xl">

        {/* Title */}
        <h2 className="text-3xl font-bold text-white text-center">
          Welcome Back
        </h2>

        <p className="text-slate-400 text-center mt-2 text-sm">
          Login to your account
        </p>

        {/* Role Switch */}
        <div className="flex gap-3 mt-6">

          <button
            onClick={() => setRole("user")}
            className={`w-1/2 h-11 rounded-lg border transition flex items-center justify-center ${
              role === "user"
                ? "bg-blue-600 border-blue-500 text-white"
                : "bg-slate-950 border-slate-800 text-slate-400"
            }`}
          >
            User
          </button>

          <button
            onClick={() => setRole("owner")}
            className={`w-1/2 h-11 rounded-lg border transition flex items-center justify-center ${
              role === "owner"
                ? "bg-indigo-600 border-indigo-500 text-white"
                : "bg-slate-950 border-slate-800 text-slate-400"
            }`}
          >
            Owner
          </button>

        </div>

        {/* Form */}
        <form className="mt-6 space-y-4">

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

          {/* Forgot */}
          <div className="flex justify-end">
            <span className="text-sm text-blue-400 cursor-pointer hover:underline">
              Forgot password?
            </span>
          </div>

          {/* Login Button */}
          <button className="w-full h-12 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-lg hover:scale-105 transition">
            Login
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
            width={25}
            height={25}
            alt="google"
          />

          Continue with Google
        </button>

        {/* Signup link */}
        <p className="text-center text-slate-500 text-sm mt-6">
          Don’t have an account?{" "}
          <span className="text-blue-400 cursor-pointer hover:underline">
            Sign up
          </span>
        </p>

      </div>
    </div>
  );
}