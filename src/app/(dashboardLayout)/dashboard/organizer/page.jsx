import { Card } from "@heroui/react";
import {
  FaCalendarAlt,
  FaDollarSign,
  FaUsers,
  FaTicketAlt,
} from "react-icons/fa";

const OrganizerOverviewPage = () => {
  const stats = {
    totalEvents: 15,
    totalAttendees: 450,
    totalRevenue: 25000,
    totalSoldTickets: 780,
  };

  const isPremium = true;

  const statCards = [
    {
      title: "Hosted Events",
      value: stats.totalEvents,
      icon: FaCalendarAlt,
      gradient:
        "from-pink-500/20 via-pink-500/5 to-transparent",
      iconBg: "bg-pink-500/10",
      iconColor: "text-pink-400",
      border: "border-pink-500/20",
    },
    {
      title: "Ticket Sales",
      value: stats.totalAttendees,
      icon: FaUsers,
      gradient:
        "from-indigo-500/20 via-indigo-500/5 to-transparent",
      iconBg: "bg-indigo-500/10",
      iconColor: "text-indigo-400",
      border: "border-indigo-500/20",
    },
    {
      title: "Revenue",
      value: `$${stats.totalRevenue.toLocaleString()}`,
      icon: FaDollarSign,
      gradient:
        "from-emerald-500/20 via-emerald-500/5 to-transparent",
      iconBg: "bg-emerald-500/10",
      iconColor: "text-emerald-400",
      border: "border-emerald-500/20",
    },
    {
      title: "Sold Tickets",
      value: stats.totalSoldTickets,
      icon: FaTicketAlt,
      gradient:
        "from-amber-500/20 via-amber-500/5 to-transparent",
      iconBg: "bg-amber-500/10",
      iconColor: "text-amber-400",
      border: "border-amber-500/20",
    },
  ];

  return (
    <div className="space-y-8 mt-6">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
        {statCards.map((item, index) => {
          const Icon = item.icon;

          return (
            <Card
              key={index}
              className={`
                group
                relative
                overflow-hidden
                border
                bg-slate-900/60
                backdrop-blur-xl
                ${item.border}
                hover:scale-[1.03]
                hover:-translate-y-1
                transition-all
                duration-300
              `}
              radius="lg"
            >
              {/* Background Glow */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-70`}
              />

              <div className="relative p-6 flex items-center justify-between">
                <div>
                  <p className="text-xs uppercase tracking-widest text-slate-400 font-semibold">
                    {item.title}
                  </p>

                  <h2 className="text-3xl font-black text-white mt-2">
                    {item.value}
                  </h2>
                </div>

                <div
                  className={`
                    h-14 w-14
                    rounded-2xl
                    flex items-center justify-center
                    ${item.iconBg}
                    ${item.iconColor}
                    border
                    ${item.border}
                    group-hover:rotate-6
                    transition-all
                    duration-300
                  `}
                >
                  <Icon size={24} />
                </div>
              </div>
            </Card>
          );
        })}
      </div>

      {/* Premium Banner */}
      {!isPremium && (
        <Card
          radius="lg"
          className="
            relative
            overflow-hidden
            border
            border-yellow-500/20
            bg-gradient-to-r
            from-yellow-500/10
            via-amber-500/5
            to-transparent
          "
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_right,rgba(250,204,21,0.15),transparent_40%)]" />

          <div className="relative p-8 flex flex-col lg:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">
                🚀 Upgrade to Premium
              </h3>

              <p className="text-slate-400 max-w-2xl">
                Free organizers can create up to 3 events.
                Upgrade to Premium and enjoy unlimited event
                creation, featured listings, advanced analytics,
                and priority support.
              </p>
            </div>

            <button
              className="
                px-7
                h-12
                rounded-xl
                font-bold
                bg-yellow-500
                hover:bg-yellow-400
                text-slate-900
                transition-all
                duration-300
                shadow-lg
                shadow-yellow-500/20
              "
            >
              Upgrade Now
            </button>
          </div>
        </Card>
      )}
    </div>
  );
};

export default OrganizerOverviewPage;