"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Home, Search, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-slate-950 px-6">

      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 h-[500px] w-[500px] rounded-full bg-cyan-500/20 blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-purple-500/20 blur-3xl animate-pulse delay-700" />
      </div>

      {/* Floating Houses */}
      <motion.div
        animate={{
          y: [-20, 20, -20],
          rotate: [-3, 3, -3],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
        }}
        className="absolute left-20 top-24 text-cyan-400/20"
      >
        <Home size={140} />
      </motion.div>

      <motion.div
        animate={{
          y: [20, -20, 20],
          rotate: [3, -3, 3],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
        }}
        className="absolute right-20 bottom-20 text-purple-400/20"
      >
        <Home size={180} />
      </motion.div>

      {/* Main Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: 80 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-2xl rounded-3xl border border-white/10 bg-white/5 p-10 backdrop-blur-xl shadow-[0_0_80px_rgba(0,255,255,0.15)]"
      >
        {/* 404 */}
        <motion.h1
          initial={{ scale: 0.5 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-center text-8xl font-extrabold text-transparent md:text-9xl"
        >
          404
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-6 text-center text-3xl font-bold text-white"
        >
          Property Not Found
        </motion.h2>

        <p className="mt-4 text-center text-gray-400">
          Looks like the property or page you're searching for has been rented,
          removed, or never existed.
        </p>

        {/* Illustration */}
        <motion.div
          animate={{
            y: [-10, 10, -10],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
          }}
          className="my-10 flex justify-center"
        >
          <div className="rounded-full border border-cyan-500/20 bg-cyan-500/10 p-8">
            <Home className="h-24 w-24 text-cyan-400" />
          </div>
        </motion.div>

        {/* Buttons */}
        <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
          <Link href="/">
            <button className="group flex items-center gap-2 rounded-xl bg-cyan-500 px-6 py-3 font-semibold text-white transition-all hover:scale-105 hover:bg-cyan-600">
              <ArrowLeft size={18} />
              Back Home
            </button>
          </Link>

          <Link href="/properties">
            <button className="group flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-6 py-3 font-semibold text-white backdrop-blur-md transition-all hover:scale-105 hover:bg-white/10">
              <Search size={18} />
              Browse Properties
            </button>
          </Link>
        </div>
      </motion.div>

      {/* Floating Particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute h-2 w-2 rounded-full bg-cyan-400/40"
          initial={{
            x: Math.random() * 2000,
            y: Math.random() * 1000,
          }}
          animate={{
            y: [null, -100],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 5 + Math.random() * 5,
            repeat: Infinity,
          }}
        />
      ))}
    </div>
  );
}