"use client";

import { motion } from "framer-motion";
import { Home } from "lucide-react";

export default function DataLoading() {
  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-slate-950">

      {/* Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute left-0 top-0 h-[500px] w-[500px] rounded-full bg-cyan-500/20 blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-purple-500/20 blur-3xl animate-pulse" />
      </div>

      {/* Floating Homes */}
      <motion.div
        animate={{
          y: [-20, 20, -20],
          rotate: [-5, 5, -5],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
        }}
        className="absolute left-16 top-20 text-cyan-500/20"
      >
        <Home size={150} />
      </motion.div>

      <motion.div
        animate={{
          y: [20, -20, 20],
          rotate: [5, -5, 5],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
        }}
        className="absolute right-20 bottom-20 text-purple-500/20"
      >
        <Home size={180} />
      </motion.div>

      {/* Main Glass Card */}
      <motion.div
        initial={{ opacity: 0, scale: .8 }}
        animate={{ opacity: 1, scale: 1 }}
        className="relative z-10 w-full max-w-4xl rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-2xl"
      >

        {/* Logo Animation */}
        <div className="flex justify-center">
          <motion.div
            animate={{
              y: [-10, 10, -10],
              rotate: [0, 3, -3, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
            }}
            className="rounded-full bg-cyan-500/10 p-8"
          >
            <Home className="h-16 w-16 text-cyan-400" />
          </motion.div>
        </div>

        <h2 className="mt-6 text-center text-3xl font-bold text-white">
          Finding Your Perfect Property
        </h2>

        <p className="mt-2 text-center text-gray-400">
          Searching listings, agents, locations and property details...
        </p>

        {/* Progress Bar */}
        <div className="mt-8 overflow-hidden rounded-full bg-white/10">
          <motion.div
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
            className="h-3 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500"
          />
        </div>

        {/* Property Skeleton */}
        <div className="mt-10 grid gap-6 md:grid-cols-3">

          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-white/10 bg-white/5 p-4"
            >
              <div className="h-40 animate-pulse rounded-xl bg-white/10" />

              <div className="mt-4 h-4 animate-pulse rounded bg-white/10" />

              <div className="mt-3 h-4 w-2/3 animate-pulse rounded bg-white/10" />

              <div className="mt-6 h-10 animate-pulse rounded-xl bg-cyan-500/20" />
            </div>
          ))}
        </div>

        {/* Status Text */}
        <motion.p
          animate={{
            opacity: [0.4, 1, 0.4],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
          className="mt-8 text-center text-cyan-400"
        >
          Loading premium properties...
        </motion.p>
      </motion.div>

      {/* Floating Particles */}
      {[...Array(40)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute h-2 w-2 rounded-full bg-cyan-400/30"
          initial={{
            x: Math.random() * 2000,
            y: Math.random() * 1200,
          }}
          animate={{
            y: [null, -200],
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