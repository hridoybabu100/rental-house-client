"use client";

import { useSession } from "@/lib/auth-client";
import { Card, Button } from "@heroui/react";
import Image from "next/image";
import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaCheckCircle,
  FaHome,
  FaHeart,
  FaBookmark,
  FaEdit,
} from "react-icons/fa";

export default function ProfilePage() {
//   const user = {
//     name: "Hridoy Akanda",
//     email: "hridoyakanda100@gmail.com",
//     phone: "+880 1234-567890",
//     role: "Tenant",
//     location: "Dhaka, Bangladesh",
//     joined: "17 Jun 2026",
//     verified: true,
//   };

   const { data: session } = useSession();
    const user = session?.user
    // console.log('The user is a', user);

  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <Card className="overflow-hidden border border-white/10 bg-[#0f172a]">
        <div className="relative h-56 bg-gradient-to-r from-blue-600 via-violet-600 to-fuchsia-600">
          <div className="absolute inset-0 bg-black/20" />
        </div>

        <div className="relative px-8 pb-8">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between">
            <div className="-mt-20">
                <div className="h-40 w-40 rounded-full border-4 border-[#0f172a] overflow-hidden bg-gradient-to-br from-violet-500 to-cyan-500 flex items-center justify-center shadow-2xl">
                             {user?.image ? (
                               <Image
                                 src={user.image}
                                 alt={user.name || "Profile"}
                                 width={160}
                                 height={160}
                                 className="h-full w-full object-cover"
                                 priority
                               />
                             ) : (
                               <span className="text-5xl font-bold text-white">
                                 {user?.name?.charAt(0).toUpperCase()}
                               </span>
                             )}
                           </div>

              <div className="mt-4">
                <div className="flex items-center gap-3 flex-wrap">
                  <h1 className="text-4xl font-black text-white">
                    {user?.name}
                  </h1>

                  {user?.verified && (
                    <FaCheckCircle
                      size={22}
                      className="text-cyan-400"
                    />
                  )}
                </div>

                <div className="flex gap-3 mt-3">
                  <span className="px-4 py-1 rounded-full text-sm bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                    {user?.role}
                  </span>

                  <span className="px-4 py-1 rounded-full text-sm bg-green-500/10 text-green-400 border border-green-500/20">
                    Verified User
                  </span>
                </div>
              </div>
            </div>

            <Button
              startContent={<FaEdit />}
              className="mt-6 lg:mt-0 bg-gradient-to-r from-violet-600 to-cyan-500 text-white font-semibold"
            >
              Edit Profile
            </Button>
          </div>
        </div>
      </Card>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
        <Card className="p-6 bg-[#0f172a] border border-white/10">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-slate-400 text-sm">
                Bookings
              </p>
              <h3 className="text-3xl font-bold text-white mt-2">
                24
              </h3>
            </div>
            <FaHome size={28} className="text-cyan-400" />
          </div>
        </Card>

        <Card className="p-6 bg-[#0f172a] border border-white/10">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-slate-400 text-sm">
                Saved Properties
              </p>
              <h3 className="text-3xl font-bold text-white mt-2">
                15
              </h3>
            </div>
            <FaHeart size={28} className="text-pink-400" />
          </div>
        </Card>

        <Card className="p-6 bg-[#0f172a] border border-white/10">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-slate-400 text-sm">
                Wishlist
              </p>
              <h3 className="text-3xl font-bold text-white mt-2">
                8
              </h3>
            </div>
            <FaBookmark size={28} className="text-amber-400" />
          </div>
        </Card>

        <Card className="p-6 bg-[#0f172a] border border-white/10">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-slate-400 text-sm">
                Reviews
              </p>
              <h3 className="text-3xl font-bold text-white mt-2">
                12
              </h3>
            </div>
            <FaCheckCircle
              size={28}
              className="text-green-400"
            />
          </div>
        </Card>
      </div>

      {/* User Information */}
      <div className="grid lg:grid-cols-2 gap-5">
        <Card className="p-6 bg-[#0f172a] border border-white/10">
          <h2 className="text-xl font-bold text-white mb-6">
            Personal Information
          </h2>

          <div className="space-y-6">
            <InfoItem
              icon={<FaUser />}
              label="Full Name"
              value={user?.name}
            />

            <InfoItem
              icon={<FaEnvelope />}
              label="Email Address"
              value={user?.email}
            />

            <InfoItem
              icon={<FaPhone />}
              label="Phone Number"
              value={user?.phone}
            />
          </div>
        </Card>

        <Card className="p-6 bg-[#0f172a] border border-white/10">
          <h2 className="text-xl font-bold text-white mb-6">
            Account Details
          </h2>

          <div className="space-y-6">
            <InfoItem
              icon={<FaMapMarkerAlt />}
              label="Location"
              value={user?.location}
            />

            <InfoItem
              icon={<FaUser />}
              label="Role"
              value={user?.role}
            />

            <InfoItem
              icon={<FaCalendarAlt />}
              label="Member Since"
              value={user?.joined}
            />
          </div>
        </Card>
      </div>
    </div>
  );
}

function InfoItem({ icon, label, value }) {
  return (
    <div className="flex gap-4 items-start">
      <div className="h-12 w-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-cyan-400">
        {icon}
      </div>

      <div>
        <p className="text-slate-400 text-sm">
          {label}
        </p>
        <h4 className="text-white font-semibold mt-1">
          {value}
        </h4>
      </div>
    </div>
  );
}