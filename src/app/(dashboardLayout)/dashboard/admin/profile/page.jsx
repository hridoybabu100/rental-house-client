"use client";

import { useEffect, useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  ShieldCheck,
  CalendarDays,
  Pencil,
  Building2,
  Users,
  Wallet,
  ReceiptText,
  UserCog,
  BadgeCheck,
  Sparkles,
  Activity,
} from "lucide-react";

export default function AdminProfilePage() {
  const [admin, setAdmin] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAdminProfile = async () => {
      try {
        setLoading(true);

        const res = await fetch("/api/admin/profile", {
          cache: "no-store",
        });

        const data = await res.json();

        setAdmin(data);
      } catch (error) {
        console.error("Failed to fetch admin profile:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchAdminProfile();
  }, []);

  if (loading) {
    return (
      <section className="min-h-screen bg-[#050816] text-white px-4 md:px-6 py-6">
        <div className="max-w-7xl mx-auto space-y-6">
          <div className="h-44 rounded-3xl bg-white/5 animate-pulse border border-white/10" />
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
            <div className="xl:col-span-1 h-[520px] rounded-3xl bg-white/5 animate-pulse border border-white/10" />
            <div className="xl:col-span-2 space-y-6">
              <div className="h-52 rounded-3xl bg-white/5 animate-pulse border border-white/10" />
              <div className="h-72 rounded-3xl bg-white/5 animate-pulse border border-white/10" />
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-screen bg-[#050816] text-white px-4 md:px-6 py-6">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* ================= HERO ================= */}
        <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-gradient-to-br from-cyan-500/10 via-blue-500/5 to-violet-500/10 p-6 md:p-8 shadow-[0_20px_80px_rgba(0,0,0,0.35)] backdrop-blur-xl">
          <div className="absolute -top-20 right-0 w-72 h-72 bg-cyan-500/10 blur-3xl rounded-full" />
          <div className="absolute -bottom-20 left-10 w-72 h-72 bg-violet-500/10 blur-3xl rounded-full" />

          <div className="relative z-10 flex flex-col xl:flex-row xl:items-center xl:justify-between gap-6">
            <div className="flex flex-col md:flex-row md:items-center gap-5">
              {/* Avatar */}
              <div className="relative w-28 h-28 md:w-32 md:h-32 rounded-3xl bg-gradient-to-br from-cyan-500/30 to-violet-500/30 border border-white/10 flex items-center justify-center text-4xl font-bold shadow-lg">
                {admin?.name?.charAt(0)?.toUpperCase() || "A"}

                <span className="absolute -bottom-2 -right-2 w-10 h-10 rounded-2xl bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                  <BadgeCheck size={18} />
                </span>
              </div>

              {/* Admin Info */}
              <div>
                <div className="flex flex-wrap items-center gap-3">
                  <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-sm">
                    <ShieldCheck size={15} />
                    Super Admin
                  </span>

                  <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-slate-300 text-sm capitalize">
                    {admin?.status || "Active"}
                  </span>
                </div>

                <h1 className="text-3xl md:text-4xl font-bold mt-4">
                  {admin?.name || "Admin Name"}
                </h1>

                <p className="text-slate-300 mt-2 max-w-2xl leading-7">
                  {admin?.bio ||
                    "Platform management, property approval, transaction monitoring, user control এবং পুরো rental ecosystem maintain করার দায়িত্বে আছেন।"}
                </p>

                <div className="flex flex-wrap gap-3 mt-5">
                  <MiniInfo icon={<Mail size={15} />} text={admin?.email || "No email"} />
                  <MiniInfo
                    icon={<Phone size={15} />}
                    text={admin?.phone || "No phone"}
                  />
                  <MiniInfo
                    icon={<MapPin size={15} />}
                    text={admin?.location || "Bangladesh"}
                  />
                </div>
              </div>
            </div>

            {/* Right side actions */}
            <div className="flex flex-col sm:flex-row xl:flex-col gap-3 xl:min-w-[220px]">
              <button className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium shadow-lg shadow-cyan-500/20 hover:scale-[1.02] transition">
                <Pencil size={17} />
                Edit Profile
              </button>

              <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                <p className="text-sm text-slate-400">Joined</p>
                <p className="font-semibold mt-1">
                  {formatDate(admin?.joinedAt)}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ================= BODY ================= */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
          {/* LEFT SIDEBAR */}
          <div className="space-y-6">
            {/* Basic Profile Card */}
            <div className="rounded-[28px] border border-white/10 bg-white/5 backdrop-blur-xl p-6 shadow-[0_20px_80px_rgba(0,0,0,0.35)]">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold">Profile Details</h2>
                <div className="w-10 h-10 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
                  <UserCog size={18} />
                </div>
              </div>

              <div className="mt-6 space-y-4">
                <ProfileRow label="Full Name" value={admin?.name} />
                <ProfileRow label="Email" value={admin?.email} />
                <ProfileRow label="Phone" value={admin?.phone} />
                <ProfileRow label="Role" value={admin?.role || "Admin"} />
                <ProfileRow label="Location" value={admin?.location} />
                <ProfileRow
                  label="Account Status"
                  value={admin?.status || "Active"}
                />
              </div>
            </div>

            {/* Contact & Security */}
            <div className="rounded-[28px] border border-white/10 bg-white/5 backdrop-blur-xl p-6 shadow-[0_20px_80px_rgba(0,0,0,0.35)]">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold">Security & Access</h2>
                <div className="w-10 h-10 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                  <ShieldCheck size={18} />
                </div>
              </div>

              <div className="mt-6 space-y-4">
                <SecurityRow
                  label="Admin Access"
                  value={admin?.permissions?.adminAccess ? "Enabled" : "Disabled"}
                />
                <SecurityRow
                  label="Property Control"
                  value={admin?.permissions?.propertyControl ? "Enabled" : "Disabled"}
                />
                <SecurityRow
                  label="Transaction Access"
                  value={admin?.permissions?.transactionAccess ? "Enabled" : "Disabled"}
                />
                <SecurityRow
                  label="User Management"
                  value={admin?.permissions?.userManagement ? "Enabled" : "Disabled"}
                />
              </div>
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="xl:col-span-2 space-y-6">
            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-2 2xl:grid-cols-4 gap-4">
              <StatCard
                title="Total Properties"
                value={admin?.stats?.totalProperties || 0}
                icon={<Building2 size={20} />}
                color="cyan"
              />
              <StatCard
                title="Total Users"
                value={admin?.stats?.totalUsers || 0}
                icon={<Users size={20} />}
                color="violet"
              />
              <StatCard
                title="Transactions"
                value={admin?.stats?.totalTransactions || 0}
                icon={<ReceiptText size={20} />}
                color="amber"
              />
              <StatCard
                title="Revenue"
                value={formatCurrency(admin?.stats?.totalRevenue || 0)}
                icon={<Wallet size={20} />}
                color="emerald"
              />
            </div>

            {/* About + Activity */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* About admin */}
              <div className="rounded-[28px] border border-white/10 bg-white/5 backdrop-blur-xl p-6 shadow-[0_20px_80px_rgba(0,0,0,0.35)]">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-semibold">About Admin</h2>
                  <div className="w-10 h-10 rounded-2xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center text-violet-400">
                    <Sparkles size={18} />
                  </div>
                </div>

                <p className="mt-5 text-slate-300 leading-7">
                  {admin?.about ||
                    "এই admin platform-এর full control maintain করেন — property approval, owner verification, tenant management, transactions monitoring, listing moderation এবং overall platform performance management handle করেন।"}
                </p>

                <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <InfoBox
                    label="Experience"
                    value={admin?.experience || "3+ Years"}
                  />
                  <InfoBox
                    label="Department"
                    value={admin?.department || "Platform Management"}
                  />
                  <InfoBox
                    label="Last Login"
                    value={formatDate(admin?.lastLogin)}
                  />
                  <InfoBox
                    label="Joined Date"
                    value={formatDate(admin?.joinedAt)}
                  />
                </div>
              </div>

              {/* Activity */}
              <div className="rounded-[28px] border border-white/10 bg-white/5 backdrop-blur-xl p-6 shadow-[0_20px_80px_rgba(0,0,0,0.35)]">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-semibold">Recent Activity</h2>
                  <div className="w-10 h-10 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
                    <Activity size={18} />
                  </div>
                </div>

                <div className="mt-6 space-y-4">
                  {admin?.activities?.length > 0 ? (
                    admin.activities.map((activity, index) => (
                      <div
                        key={index}
                        className="flex gap-4 rounded-2xl border border-white/10 bg-[#0c1222] p-4"
                      >
                        <div className="mt-1 w-10 h-10 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 shrink-0">
                          <CalendarDays size={17} />
                        </div>

                        <div className="flex-1">
                          <h4 className="font-medium text-white">
                            {activity?.title || "Admin activity"}
                          </h4>
                          <p className="text-sm text-slate-400 mt-1 leading-6">
                            {activity?.description || "No activity details"}
                          </p>
                          <p className="text-xs text-slate-500 mt-2">
                            {formatDate(activity?.date)}
                          </p>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="rounded-2xl border border-white/10 bg-[#0c1222] p-5 text-center text-slate-400">
                      No recent activity found.
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Performance / Extra summary */}
            <div className="rounded-[28px] border border-white/10 bg-gradient-to-br from-cyan-500/10 via-transparent to-violet-500/10 backdrop-blur-xl p-6 shadow-[0_20px_80px_rgba(0,0,0,0.35)]">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                <div>
                  <p className="text-cyan-300 uppercase tracking-[0.2em] text-xs font-semibold">
                    Admin Performance
                  </p>
                  <h2 className="text-2xl md:text-3xl font-bold mt-3">
                    Smart Control Center
                  </h2>
                  <p className="text-slate-300 mt-3 max-w-2xl leading-7">
                    Admin dashboard থেকে property approval, user monitoring,
                    transaction tracking এবং owner management খুব দ্রুত handle
                    করার জন্য এই profile section তৈরি করা হয়েছে।
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4 min-w-[280px]">
                  <SmallStat
                    label="Approved"
                    value={admin?.performance?.approvedProperties || 0}
                  />
                  <SmallStat
                    label="Pending"
                    value={admin?.performance?.pendingProperties || 0}
                  />
                  <SmallStat
                    label="Users"
                    value={admin?.performance?.managedUsers || 0}
                  />
                  <SmallStat
                    label="Revenue"
                    value={shortCurrency(admin?.performance?.revenueHandled || 0)}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ================= SMALL COMPONENTS ================= */

function MiniInfo({ icon, text }) {
  return (
    <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/10 text-sm text-slate-200">
      <span className="text-cyan-400">{icon}</span>
      {text}
    </span>
  );
}

function ProfileRow({ label, value }) {
  return (
    <div className="flex items-start justify-between gap-4 border-b border-white/10 pb-3">
      <span className="text-slate-400 text-sm">{label}</span>
      <span className="text-white font-medium text-right">
        {value || "N/A"}
      </span>
    </div>
  );
}

function SecurityRow({ label, value }) {
  const enabled = value === "Enabled";

  return (
    <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-[#0c1222] px-4 py-3">
      <span className="text-slate-300">{label}</span>
      <span
        className={`px-3 py-1 rounded-full text-sm font-medium ${
          enabled
            ? "bg-emerald-500/15 text-emerald-400 border border-emerald-500/20"
            : "bg-rose-500/15 text-rose-400 border border-rose-500/20"
        }`}
      >
        {value}
      </span>
    </div>
  );
}

function InfoBox({ label, value }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-[#0c1222] p-4">
      <p className="text-sm text-slate-400">{label}</p>
      <h4 className="font-semibold text-white mt-2">{value || "N/A"}</h4>
    </div>
  );
}

function StatCard({ title, value, icon, color = "cyan" }) {
  const styles = {
    cyan: {
      wrap: "from-cyan-500/20 to-blue-500/10",
      icon: "text-cyan-400 border-cyan-500/20 bg-cyan-500/10",
    },
    violet: {
      wrap: "from-violet-500/20 to-fuchsia-500/10",
      icon: "text-violet-400 border-violet-500/20 bg-violet-500/10",
    },
    amber: {
      wrap: "from-amber-500/20 to-orange-500/10",
      icon: "text-amber-400 border-amber-500/20 bg-amber-500/10",
    },
    emerald: {
      wrap: "from-emerald-500/20 to-green-500/10",
      icon: "text-emerald-400 border-emerald-500/20 bg-emerald-500/10",
    },
  };

  return (
    <div className="relative overflow-hidden rounded-[24px] border border-white/10 bg-white/5 p-5 backdrop-blur-xl shadow-[0_20px_60px_rgba(0,0,0,0.35)]">
      <div
        className={`absolute inset-0 bg-gradient-to-br ${styles[color].wrap} opacity-80`}
      />
      <div className="relative flex items-start justify-between gap-4">
        <div>
          <p className="text-sm text-slate-400">{title}</p>
          <h3 className="text-2xl font-bold mt-3">{value}</h3>
        </div>

        <div
          className={`w-12 h-12 rounded-2xl border flex items-center justify-center ${styles[color].icon}`}
        >
          {icon}
        </div>
      </div>
    </div>
  );
}

function SmallStat({ label, value }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
      <p className="text-sm text-slate-400">{label}</p>
      <h4 className="text-xl font-bold mt-2">{value}</h4>
    </div>
  );
}

/* ================= UTILS ================= */

function formatDate(date) {
  if (!date) return "N/A";
  return new Date(date).toLocaleDateString("en-BD", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

function formatCurrency(amount) {
  return new Intl.NumberFormat("en-BD", {
    style: "currency",
    currency: "BDT",
    maximumFractionDigits: 0,
  }).format(amount || 0);
}

function shortCurrency(amount) {
  const num = Number(amount || 0);

  if (num >= 10000000) return `${(num / 10000000).toFixed(1)}Cr`;
  if (num >= 100000) return `${(num / 100000).toFixed(1)}L`;
  if (num >= 1000) return `${(num / 1000).toFixed(1)}K`;

  return num.toString();
}