
import Link from "next/link";
import { FaChevronRight } from "react-icons/fa";
import EventCard from "./EventCard";
import { fetchFeaturedEvents } from "@/lib/api/events/data";


export default async function FeaturedEvents() {
  const totalEvents = await fetchFeaturedEvents();
  const events = totalEvents.slice(0,6);
  console.log(events);

  return (
    <section className="py-24 max-w-7xl mx-auto px-6 w-full">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">Featured Property.</h2>
          <p className="text-slate-400 text-sm mt-2">Explore the hottest and most popular property happening this week.</p>
        </div>
        <Link href="/properties" className="text-pink-500 hover:text-pink-400 font-semibold p-0 flex items-center gap-2 transition-colors">
          View All Properties <FaChevronRight size={12} />
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {events.map((event) => (
          <div key={event._id}>
            <EventCard event={event} buttonText="Book Ticket" />
          </div>
        ))}
      </div>
    </section>
  );
}