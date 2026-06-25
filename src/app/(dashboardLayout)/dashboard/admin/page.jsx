"use client";

import { useEffect, useState } from "react";
import AdminOverviewChart from "@/components/AdminOverViewPage";

export default function AdminOverviewPage() {
  const [overview, setOverview] = useState({
    totalRevenue: 0,
    totalUsers: 0,
    totalOwners: 0,
    totalBookings: 0,
    monthlyEarnings: [],
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOverview = async () => {
      try {
        setLoading(true);
        const res = await fetch("/api/admin/overview", {
          cache: "no-store",
        });
        const data = await res.json();

        if (data?.success) {
          setOverview(data.overview);
        }
      } catch (error) {
        console.error("Failed to fetch admin overview:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchOverview();
  }, []);

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat("en-BD", {
      style: "currency",
      currency: "BDT",
      maximumFractionDigits: 0,
    }).format(amount || 0);
  };

  if (loading) {
    return <div className="text-white p-10">Loading overview...</div>;
  }

  return (
    <div className="space-y-8">
      {/* title */}
      <div className="rounded-3xl border border-white/10 bg-gradient-to-r from-slate-900 via-slate-950 to-slate-900 p-6 md:p-8 shadow-xl">
        <div>
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-blue-400">
            Admin Dashboard
          </p>
          <h1 className="mt-2 text-3xl md:text-4xl font-bold text-white">
            Smart Admin Overview
          </h1>
          <p className="mt-3 max-w-2xl text-sm md:text-base text-slate-400 leading-7">
            Monitor revenue, users, owners, and bookings from one place.
          </p>
        </div>
      </div>

      {/* stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        <div className="rounded-3xl border border-white/10 bg-slate-900 p-6">
          <p className="text-slate-400 text-sm">Total Revenue</p>
          <h3 className="mt-3 text-3xl font-bold text-white">
            {formatCurrency(overview.totalRevenue)}
          </h3>
        </div>

        <div className="rounded-3xl border border-white/10 bg-slate-900 p-6">
          <p className="text-slate-400 text-sm">Total Users</p>
          <h3 className="mt-3 text-3xl font-bold text-white">
            {overview.totalUsers}
          </h3>
        </div>

        <div className="rounded-3xl border border-white/10 bg-slate-900 p-6">
          <p className="text-slate-400 text-sm">Total Owners</p>
          <h3 className="mt-3 text-3xl font-bold text-white">
            {overview.totalOwners}
          </h3>
        </div>

        <div className="rounded-3xl border border-white/10 bg-slate-900 p-6">
          <p className="text-slate-400 text-sm">Total Bookings</p>
          <h3 className="mt-3 text-3xl font-bold text-white">
            {overview.totalBookings}
          </h3>
        </div>
      </div>

      {/* chart */}
      <AdminOverviewChart data={overview.monthlyEarnings} />
    </div>
  );
}