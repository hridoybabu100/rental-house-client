"use client";

import { useEffect, useMemo, useState } from "react";
import {
  Building2,
  Users,
  UserCog,
  Wallet,
  BadgeDollarSign,
  Clock3,
  ArrowUpRight,
  Home,
  ReceiptText,
  CalendarDays,
} from "lucide-react";

export default function AdminOverviewPage() {
  const [dashboardData, setDashboardData] = useState({
    totalProperties: 0,
    totalUsers: 0,
    totalOwners: 0,
    totalTransactions: 0,
    totalRevenue: 0,
    pendingProperties: 0,
    recentTransactions: [],
    recentUsers: [],
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOverviewData = async () => {
      try {
        setLoading(true);

        const res = await fetch("/api/admin/overview", {
          cache: "no-store",
        });

        const data = await res.json();

        setDashboardData({
          totalProperties: data?.totalProperties || 0,
          totalUsers: data?.totalUsers || 0,
          totalOwners: data?.totalOwners || 0,
          totalTransactions: data?.totalTransactions || 0,
          totalRevenue: data?.totalRevenue || 0,
          pendingProperties: data?.pendingProperties || 0,
          recentTransactions: data?.recentTransactions || [],
          recentUsers: data?.recentUsers || [],
        });
      } catch (error) {
        console.error("Failed to fetch admin overview:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchOverviewData();
  }, []);

  const stats = useMemo(
    () => [
      {
        title: "Total Properties",
        value: dashboardData.totalProperties,
        icon: <Building2 size={22} />,
        color:
          "from-cyan-500/20 to-blue-500/10 text-cyan-400 border-cyan-500/20",
      },
      {
        title: "Total Users",
        value: dashboardData.totalUsers,
        icon: <Users size={22} />,
        color:
          "from-violet-500/20 to-fuchsia-500/10 text-violet-400 border-violet-500/20",
      },
      {
        title: "Total Owners",
        value: dashboardData.totalOwners,
        icon: <UserCog size={22} />,
        color:
          "from-emerald-500/20 to-green-500/10 text-emerald-400 border-emerald-500/20",
      },
      {
        title: "Total Transactions",
        value: dashboardData.totalTransactions,
        icon: <ReceiptText size={22} />,
        color:
          "from-amber-500/20 to-orange-500/10 text-amber-400 border-amber-500/20",
      },
      {
        title: "Total Revenue",
        value: formatCurrency(dashboardData.totalRevenue),
        icon: <BadgeDollarSign size={22} />,
        color:
          "from-pink-500/20 to-rose-500/10 text-pink-400 border-pink-500/20",
      },
      {
        title: "Pending Properties",
        value: dashboardData.pendingProperties,
        icon: <Clock3 size={22} />,
        color:
          "from-red-500/20 to-rose-500/10 text-red-400 border-red-500/20",
      },
    ],
    [dashboardData]
  );

  return (
    <section className="min-h-screen bg-[#050816] text-white px-4 md:px-6 py-6">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* ================= HEADER ================= */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          <div>
            <p className="text-cyan-400 uppercase tracking-[0.25em] text-xs md:text-sm font-semibold">
              Admin Dashboard
            </p>
            <h1 className="text-2xl md:text-4xl font-bold mt-2">
              Smart Overview
            </h1>
            <p className="text-slate-400 mt-2 max-w-2xl">
              তোমার পুরো property platform এর overview, analytics আর recent
              activity এক জায়গায়।
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 backdrop-blur-xl">
            <p className="text-sm text-slate-400">Today</p>
            <p className="text-base font-semibold mt-1">
              {new Date().toLocaleDateString("en-BD", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
          </div>
        </div>

        {/* ================= HERO SUMMARY ================= */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-5">
          {/* Main Revenue Card */}
          <div className="xl:col-span-2 relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-cyan-500/10 via-blue-500/5 to-transparent p-6 md:p-8 backdrop-blur-xl shadow-[0_20px_80px_rgba(0,0,0,0.35)]">
            <div className="absolute -top-20 -right-20 w-56 h-56 bg-cyan-500/10 blur-3xl rounded-full" />
            <div className="absolute -bottom-24 left-10 w-56 h-56 bg-blue-500/10 blur-3xl rounded-full" />

            <div className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
              <div>
                <p className="text-cyan-300 uppercase tracking-[0.2em] text-xs font-semibold">
                  Platform Revenue
                </p>
                <h2 className="text-3xl md:text-5xl font-bold mt-3">
                  {formatCurrency(dashboardData.totalRevenue)}
                </h2>
                <p className="text-slate-300 mt-3 max-w-xl">
                  মোট transactions, revenue এবং platform performance এর quick
                  summary।
                </p>

                <div className="flex flex-wrap gap-3 mt-6">
                  <MiniBadge
                    label={`Properties: ${dashboardData.totalProperties}`}
                  />
                  <MiniBadge
                    label={`Transactions: ${dashboardData.totalTransactions}`}
                  />
                  <MiniBadge label={`Owners: ${dashboardData.totalOwners}`} />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 min-w-[260px]">
                <SmallInsightCard
                  label="Users"
                  value={dashboardData.totalUsers}
                  icon={<Users size={18} />}
                />
                <SmallInsightCard
                  label="Owners"
                  value={dashboardData.totalOwners}
                  icon={<UserCog size={18} />}
                />
                <SmallInsightCard
                  label="Pending"
                  value={dashboardData.pendingProperties}
                  icon={<Clock3 size={18} />}
                />
                <SmallInsightCard
                  label="Revenue"
                  value={shortCurrency(dashboardData.totalRevenue)}
                  icon={<Wallet size={18} />}
                />
              </div>
            </div>
          </div>

          {/* Quick Admin Actions / Status */}
          <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 shadow-[0_20px_80px_rgba(0,0,0,0.35)]">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-semibold">Quick Status</h3>
              <ArrowUpRight className="text-cyan-400" size={20} />
            </div>

            <div className="mt-6 space-y-4">
              <StatusRow
                label="Active Listings"
                value={dashboardData.totalProperties}
                color="bg-cyan-500"
              />
              <StatusRow
                label="Pending Approval"
                value={dashboardData.pendingProperties}
                color="bg-amber-500"
              />
              <StatusRow
                label="Registered Users"
                value={dashboardData.totalUsers}
                color="bg-violet-500"
              />
              <StatusRow
                label="Total Owners"
                value={dashboardData.totalOwners}
                color="bg-emerald-500"
              />
            </div>

            <div className="mt-6 rounded-2xl border border-cyan-500/20 bg-cyan-500/10 p-4">
              <p className="text-sm text-cyan-300">Admin Insight</p>
              <p className="text-sm text-slate-200 mt-2 leading-6">
                Pending property approval কমিয়ে দিলে platform trust এবং booking
                conversion দুটোই improve হবে।
              </p>
            </div>
          </div>
        </div>

        {/* ================= STATS GRID ================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
          {loading
            ? [...Array(6)].map((_, i) => (
                <div
                  key={i}
                  className="h-36 rounded-3xl border border-white/10 bg-white/5 animate-pulse"
                />
              ))
            : stats.map((stat, index) => (
                <StatCard key={index} {...stat} />
              ))}
        </div>

        {/* ================= RECENT DATA ================= */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
          {/* Recent Transactions */}
          <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl overflow-hidden shadow-[0_20px_80px_rgba(0,0,0,0.35)]">
            <div className="px-6 py-5 border-b border-white/10 flex items-center justify-between">
              <div>
                <h2 className="text-xl font-semibold">Recent Transactions</h2>
                <p className="text-sm text-slate-400 mt-1">
                  সর্বশেষ payment activity
                </p>
              </div>
              <div className="w-10 h-10 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                <Wallet size={18} />
              </div>
            </div>

            <div className="p-4 space-y-3">
              {loading ? (
                [...Array(4)].map((_, i) => (
                  <div
                    key={i}
                    className="h-20 rounded-2xl bg-white/5 animate-pulse"
                  />
                ))
              ) : dashboardData.recentTransactions?.length > 0 ? (
                dashboardData.recentTransactions.map((item) => (
                  <div
                    key={item._id || item.transactionId}
                    className="rounded-2xl border border-white/10 bg-[#0c1222] p-4 hover:border-cyan-500/20 transition"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="text-sm text-slate-400">Transaction ID</p>
                        <h3 className="font-semibold text-white mt-1">
                          {item?.transactionId || "N/A"}
                        </h3>
                        <p className="text-sm text-slate-400 mt-2">
                          {item?.propertyName || "Unknown Property"}
                        </p>
                      </div>

                      <div className="text-right">
                        <p className="text-emerald-400 font-bold">
                          {formatCurrency(item?.amount)}
                        </p>
                        <p className="text-xs text-slate-400 mt-2">
                          {formatDate(item?.date)}
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-3 mt-4 text-sm">
                      <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-slate-300">
                        Tenant: {item?.tenantName || "N/A"}
                      </span>
                      <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-slate-300">
                        Owner: {item?.ownerName || "N/A"}
                      </span>
                    </div>
                  </div>
                ))
              ) : (
                <EmptyState
                  title="No recent transactions"
                  subtitle="নতুন transaction এলে এখানে দেখা যাবে।"
                />
              )}
            </div>
          </div>

          {/* Recent Users */}
          <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl overflow-hidden shadow-[0_20px_80px_rgba(0,0,0,0.35)]">
            <div className="px-6 py-5 border-b border-white/10 flex items-center justify-between">
              <div>
                <h2 className="text-xl font-semibold">Recent Users</h2>
                <p className="text-sm text-slate-400 mt-1">
                  নতুন user / owner registrations
                </p>
              </div>
              <div className="w-10 h-10 rounded-2xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center text-violet-400">
                <Users size={18} />
              </div>
            </div>

            <div className="p-4 space-y-3">
              {loading ? (
                [...Array(4)].map((_, i) => (
                  <div
                    key={i}
                    className="h-20 rounded-2xl bg-white/5 animate-pulse"
                  />
                ))
              ) : dashboardData.recentUsers?.length > 0 ? (
                dashboardData.recentUsers.map((user) => (
                  <div
                    key={user._id || user.email}
                    className="rounded-2xl border border-white/10 bg-[#0c1222] p-4 hover:border-violet-500/20 transition"
                  >
                    <div className="flex items-center justify-between gap-4">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-violet-500/20 border border-white/10 flex items-center justify-center font-bold text-white">
                          {user?.name?.charAt(0)?.toUpperCase() || "U"}
                        </div>

                        <div>
                          <h3 className="font-semibold text-white">
                            {user?.name || "Unknown User"}
                          </h3>
                          <p className="text-sm text-slate-400 mt-1">
                            {user?.email || "No Email"}
                          </p>
                        </div>
                      </div>

                      <div className="text-right">
                        <span className="inline-flex px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm capitalize text-slate-300">
                          {user?.role || "user"}
                        </span>
                        <p className="text-xs text-slate-500 mt-2">
                          {formatDate(user?.createdAt)}
                        </p>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <EmptyState
                  title="No recent users"
                  subtitle="নতুন user registration এলে এখানে দেখা যাবে।"
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ================= HELPER COMPONENTS ================= */

function StatCard({ title, value, icon, color }) {
  return (
    <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-5 shadow-[0_20px_60px_rgba(0,0,0,0.35)]">
      <div className={`absolute inset-0 bg-gradient-to-br ${color.split(" ")[0]} ${color.split(" ")[1]} opacity-80`} />
      <div className="relative flex items-start justify-between gap-4">
        <div>
          <p className="text-sm text-slate-400">{title}</p>
          <h3 className="text-2xl md:text-3xl font-bold mt-3">{value}</h3>
        </div>

        <div className={`w-12 h-12 rounded-2xl border bg-white/5 flex items-center justify-center ${color.split(" ").slice(2).join(" ")}`}>
          {icon}
        </div>
      </div>
    </div>
  );
}

function SmallInsightCard({ label, value, icon }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
      <div className="flex items-center justify-between">
        <span className="text-slate-400 text-sm">{label}</span>
        <span className="text-cyan-400">{icon}</span>
      </div>
      <p className="text-xl font-bold mt-3">{value}</p>
    </div>
  );
}

function StatusRow({ label, value, color }) {
  return (
    <div className="flex items-center justify-between gap-3">
      <div className="flex items-center gap-3">
        <span className={`w-2.5 h-2.5 rounded-full ${color}`} />
        <p className="text-slate-300">{label}</p>
      </div>
      <p className="font-semibold text-white">{value}</p>
    </div>
  );
}

function MiniBadge({ label }) {
  return (
    <span className="px-3 py-1.5 rounded-full bg-white/10 border border-white/10 text-sm text-slate-200">
      {label}
    </span>
  );
}

function EmptyState({ title, subtitle }) {
  return (
    <div className="py-16 text-center">
      <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mx-auto">
        <Home className="text-slate-400" size={24} />
      </div>
      <h3 className="text-lg font-semibold mt-4">{title}</h3>
      <p className="text-slate-400 mt-2">{subtitle}</p>
    </div>
  );
}

/* ================= UTILS ================= */

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

function formatDate(date) {
  if (!date) return "N/A";

  return new Date(date).toLocaleDateString("en-BD", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}