import AdminOverviewChart from "@/components/AdminOverViewPage";

export default function AdminOverviewPage() {
  return (
    <div className="space-y-8">
      {/* page title */}
      <div className="rounded-3xl border border-white/10 bg-gradient-to-r from-slate-900 via-slate-950 to-slate-900 p-6 md:p-8 shadow-xl">
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-blue-400">
              Admin Dashboard
            </p>
            <h1 className="mt-2 text-3xl md:text-4xl font-bold text-white">
              Smart Admin Overview
            </h1>
            <p className="mt-3 max-w-2xl text-sm md:text-base text-slate-400 leading-7">
              Monitor platform revenue, users, property owners, bookings, and
              overall system activity from one powerful dashboard.
            </p>
          </div>

          <div className="flex items-center gap-3 rounded-2xl border border-blue-500/20 bg-blue-500/10 px-4 py-3">
            <div className="h-3 w-3 rounded-full bg-emerald-400 animate-pulse"></div>
            <div>
              <p className="text-sm font-semibold text-white">System Status</p>
              <p className="text-xs text-slate-300">All services running smoothly</p>
            </div>
          </div>
        </div>
      </div>

      {/* top stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        <div className="rounded-3xl border border-white/10 bg-slate-900 p-6">
          <p className="text-slate-400 text-sm">Total Revenue</p>
          <h3 className="mt-3 text-3xl font-bold text-white">৳12,45,000</h3>
        </div>

        <div className="rounded-3xl border border-white/10 bg-slate-900 p-6">
          <p className="text-slate-400 text-sm">Total Users</p>
          <h3 className="mt-3 text-3xl font-bold text-white">1,245</h3>
        </div>

        <div className="rounded-3xl border border-white/10 bg-slate-900 p-6">
          <p className="text-slate-400 text-sm">Total Owners</p>
          <h3 className="mt-3 text-3xl font-bold text-white">182</h3>
        </div>

        <div className="rounded-3xl border border-white/10 bg-slate-900 p-6">
          <p className="text-slate-400 text-sm">Total Bookings</p>
          <h3 className="mt-3 text-3xl font-bold text-white">684</h3>
        </div>
      </div>

      {/* chart */}
      <AdminOverviewChart />
    </div>
  );
}