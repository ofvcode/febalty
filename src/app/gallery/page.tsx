import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Gallery",
  description: "See our work and the impact Febalty has made.",
};

const items = [
  { title: "Community Events", desc: "Bringing people together", color: "from-primary to-rose-600", size: "md:col-span-2 md:row-span-2" },
  { title: "Workshops", desc: "Skills that matter", color: "from-amber-500 to-orange-600", size: "" },
  { title: "Networking", desc: "Building connections", color: "from-blue-500 to-indigo-600", size: "" },
  { title: "Mentorship", desc: "Guidance for growth", color: "from-emerald-500 to-teal-600", size: "md:col-span-2" },
  { title: "Career Prep", desc: "Ready for success", color: "from-purple-500 to-violet-600", size: "" },
  { title: "Cultural Events", desc: "Celebrating diversity", color: "from-pink-500 to-rose-600", size: "" },
  { title: "Team Building", desc: "Stronger together", color: "from-cyan-500 to-blue-600", size: "md:col-span-2" },
];

export default function Gallery() {
  return (
    <>
      <section className="bg-secondary text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Gallery</span>
          <h1 className="text-4xl md:text-5xl font-bold mt-3 mb-4">Our work in action</h1>
          <p className="text-slate-300 text-lg max-w-2xl leading-relaxed">
            A showcase of our events, workshops, and the community we are building.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px]">
            {items.map((item) => (
              <div
                key={item.title}
                className={`bg-gradient-to-br ${item.color} rounded-2xl p-8 flex flex-col justify-end text-white cursor-pointer hover:scale-[1.02] transition-transform duration-300 hover:shadow-xl ${item.size}`}
              >
                <div className="mt-auto">
                  <h3 className="text-xl font-bold mb-1">{item.title}</h3>
                  <p className="text-white/70 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-16">
            <p className="text-muted text-lg mb-6">Want to be part of what we are building?</p>
            <Link
              href="/booking"
              className="inline-flex items-center bg-primary text-white px-8 py-4 rounded-full font-semibold hover:bg-primary-hover transition-all hover:shadow-lg hover:shadow-primary/25 min-h-[44px]"
            >
              Join the Community
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
