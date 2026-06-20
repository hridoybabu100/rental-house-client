import { Card } from "@heroui/react";
import {
  FaCalendarAlt,
  FaDollarSign,
  FaUsers,
  FaTicketAlt,
  FaCrown,
} from "react-icons/fa";

const OrganizerOverviewPage = () => {
  const user = {
    name: "Hridoy Akanda",
  };

  const stats = {
    totalEvents: 15,
    totalAttendees: 450,
    totalRevenue: 25000,
    totalSoldTickets: 780,
  };

  const isPremium = false;

  const statCards = [
    {
      title: "Hosted Events",
      value: stats.totalEvents,
      icon: FaCalendarAlt,
      gradient: "from-pink-500/20 via-pink-500/5 to-transparent",
      iconBg: "bg-pink-500/10",
      iconColor: "text-pink-400",
      border: "border-pink-500/20",
    },
    {
      title: "Ticket Sales",
      value: stats.totalAttendees,
      icon: FaUsers,
      gradient: "from-indigo-500/20 via-indigo-500/5 to-transparent",
      iconBg: "bg-indigo-500/10",
      iconColor: "text-indigo-400",
      border: "border-indigo-500/20",
    },
    {
      title: "Revenue",
      value: `$${stats.totalRevenue.toLocaleString()}`,
      icon: FaDollarSign,
      gradient: "from-emerald-500/20 via-emerald-500/5 to-transparent",
      iconBg: "bg-emerald-500/10",
      iconColor: "text-emerald-400",
      border: "border-emerald-500/20",
    },
    {
      title: "Sold Tickets",
      value: stats.totalSoldTickets,
      icon: FaTicketAlt,
      gradient: "from-amber-500/20 via-amber-500/5 to-transparent",
      iconBg: "bg-amber-500/10",
      iconColor: "text-amber-400",
      border: "border-amber-500/20",
    },
  ];

  return (
    <div className="space-y-8">
      {/* Hero Welcome Section */}
      <Card
        radius="lg"
        className="relative overflow-hidden border border-white/10 bg-gradient-to-br from-violet-600/15 via-fuchsia-600/10 to-cyan-600/15 backdrop-blur-xl"
      >
        <div className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-violet-500/20 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-cyan-500/20 blur-3xl" />

        <div className="relative p-6 md:p-8">
          <div className="flex flex-col xl:flex-row justify-between gap-8">
            <div>
              <span className="inline-flex items-center rounded-full border border-violet-500/20 bg-violet-500/10 px-3 py-1 text-xs font-semibold text-violet-300">
                Organizer Dashboard
              </span>

              <h1 className="mt-4 text-3xl md:text-5xl font-black text-white">
                Welcome Back,
                <span className="block bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">
                  {user.name}
                </span>
              </h1>

              <p className="mt-4 text-slate-400 max-w-2xl">
                Manage your events, monitor ticket sales, track revenue,
                and grow your audience from one powerful dashboard.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-md">
                <p className="text-xs uppercase tracking-wider text-slate-400">
                  Events
                </p>
                <h3 className="mt-2 text-2xl font-bold text-white">
                  {stats.totalEvents}
                </h3>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-md">
                <p className="text-xs uppercase tracking-wider text-slate-400">
                  Revenue
                </p>
                <h3 className="mt-2 text-2xl font-bold text-white">
                  ${stats.totalRevenue.toLocaleString()}
                </h3>
              </div>
            </div>
          </div>
        </div>
      </Card>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
        {statCards.map((item, index) => {
          const Icon = item.icon;

          return (
            <Card
              key={index}
              radius="lg"
              className={`group relative overflow-hidden border bg-slate-900/60 backdrop-blur-xl ${item.border} hover:-translate-y-1 hover:scale-[1.02] transition-all duration-300`}
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${item.gradient}`}
              />

              <div className="relative p-6 flex items-center justify-between">
                <div>
                  <p className="text-xs uppercase tracking-widest text-slate-400 font-semibold">
                    {item.title}
                  </p>

                  <h2 className="mt-2 text-3xl font-black text-white">
                    {item.value}
                  </h2>
                </div>

                <div
                  className={`h-14 w-14 rounded-2xl flex items-center justify-center border ${item.border} ${item.iconBg} ${item.iconColor} group-hover:rotate-6 group-hover:scale-110 transition-all duration-300`}
                >
                  <Icon size={24} />
                </div>
              </div>
            </Card>
          );
        })}
      </div>

      {/* Premium Upgrade Banner */}
      {!isPremium && (
        <Card
          radius="lg"
          className="relative overflow-hidden border border-yellow-500/20 bg-gradient-to-r from-yellow-500/10 via-amber-500/5 to-transparent"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_right,rgba(250,204,21,0.15),transparent_40%)]" />

          <div className="relative p-8 flex flex-col lg:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="flex items-center gap-3 text-2xl font-bold text-white">
                <FaCrown className="text-yellow-400" />
                Upgrade To Premium
              </h3>

              <p className="mt-3 max-w-2xl text-slate-400">
                Unlock unlimited event creation, featured listings,
                advanced analytics, premium support, and more powerful
                organizer tools.
              </p>
            </div>

            <button className="h-12 px-7 rounded-xl bg-yellow-500 hover:bg-yellow-400 text-slate-900 font-bold transition-all duration-300 hover:scale-105 shadow-lg shadow-yellow-500/20">
              Upgrade Now
            </button>
          </div>
        </Card>
      )}
    </div>
  );
};

export default OrganizerOverviewPage;