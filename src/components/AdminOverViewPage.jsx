"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
  recharts,
} from "recharts";

const earningsData = [
  { month: "Jan", earnings: 12000 },
  { month: "Feb", earnings: 18000 },
  { month: "Mar", earnings: 15000 },
  { month: "Apr", earnings: 24000 },
  { month: "May", earnings: 30000 },
  { month: "Jun", earnings: 28000 },
  { month: "Jul", earnings: 26000 },
  { month: "Aug", earnings: 32000 },
  { month: "Sep", earnings: 29000 },
  { month: "Oct", earnings: 35000 },
  { month: "Nov", earnings: 38000 },
  { month: "Dec", earnings: 42000 },
];

const barColors = [
  "#3B82F6",
  "#60A5FA",
  "#2563EB",
  "#1D4ED8",
  "#0EA5E9",
  "#38BDF8",
  "#3B82F6",
  "#60A5FA",
  "#2563EB",
  "#1D4ED8",
  "#0EA5E9",
  "#38BDF8",
];

const formatCurrency = (value) => `৳${value.toLocaleString()}`;

export default function AdminOverviewChart() {
  return (
    <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 p-6 md:p-8 shadow-2xl">
      {/* Header */}
      <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-white">
            Monthly Earnings
          </h2>
          <p className="mt-2 text-sm text-slate-400">
            Track your platform revenue growth month by month
          </p>
        </div>

        <div className="inline-flex w-fit items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm text-blue-300">
          <span className="h-2 w-2 rounded-full bg-emerald-400"></span>
          Earnings Overview
        </div>
      </div>

      {/* Chart */}
      <div className="h-[350px] md:h-[420px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={earningsData}
            margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
            barCategoryGap={20}
          >
            <CartesianGrid
              strokeDasharray="3 3"
              vertical={false}
              stroke="rgba(148,163,184,0.12)"
            />

            <XAxis
              dataKey="month"
              tick={{ fill: "#94A3B8", fontSize: 13 }}
              axisLine={false}
              tickLine={false}
            />

            <YAxis
              tickFormatter={(value) => `৳${value / 1000}k`}
              tick={{ fill: "#94A3B8", fontSize: 13 }}
              axisLine={false}
              tickLine={false}
            />

            <Tooltip
              cursor={{ fill: "rgba(59,130,246,0.08)" }}
              contentStyle={{
                background: "#0f172a",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: "16px",
                color: "#fff",
                boxShadow: "0 10px 40px rgba(0,0,0,0.35)",
              }}
              formatter={(value) => [formatCurrency(value), "Earnings"]}
              labelStyle={{ color: "#cbd5e1" }}
            />

            <Bar
              dataKey="earnings"
              radius={[14, 14, 0, 0]}
              maxBarSize={48}
            >
              {earningsData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={barColors[index % barColors.length]} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}