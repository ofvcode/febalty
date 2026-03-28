import Link from "next/link";

const stats = [
  { value: "500+", label: "Clients Served" },
  { value: "98%", label: "Satisfaction Rate" },
  { value: "NYC", label: "Based in Manhattan" },
  { value: "24/7", label: "Support Available" },
];

const services = [
  {
    title: "Assimilation Support",
    desc: "Navigate new environments with confidence. We provide personalized guidance to help you feel at home and connected.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    title: "Productivity Coaching",
    desc: "Unlock your full potential with strategies and tools designed to maximize your output and achieve your goals faster.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: "Resource Connection",
    desc: "Get matched with the right resources, communities, and opportunities to accelerate your growth and success.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
      </svg>
    ),
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-secondary via-secondary to-[#0f172a]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,#f73b3b15,transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,#f59e0b10,transparent_50%)]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 md:py-40">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/10 text-white/80 px-4 py-2 rounded-full text-sm font-medium mb-8">
              <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
              Now serving Manhattan, NY
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white leading-[1.1] tracking-tight mb-6">
              Services that help you{" "}
              <span className="text-primary">thrive</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-300 leading-relaxed mb-10 max-w-xl">
              We provide people with services that help them assimilate and be productive. Your success is our mission.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/booking"
                className="bg-primary text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-primary-hover transition-all hover:shadow-xl hover:shadow-primary/30 active:scale-[0.98] min-h-[44px] flex items-center"
              >
                Get Started Today
              </Link>
              <Link
                href="/about"
                className="bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/20 transition-all min-h-[44px] flex items-center"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-white border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-border">
            {stats.map((stat) => (
              <div key={stat.label} className="py-8 px-6 text-center">
                <div className="text-3xl font-bold text-primary mb-1">{stat.value}</div>
                <div className="text-muted text-sm font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">What We Do</span>
            <h2 className="text-4xl font-bold text-secondary mt-3 mb-4">Our Services</h2>
            <p className="text-muted text-lg max-w-2xl mx-auto">
              Comprehensive support designed to help you settle in, level up, and succeed in your new environment.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.title}
                className="bg-white p-8 rounded-2xl border border-border hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 group"
              >
                <div className="w-14 h-14 bg-primary/10 text-primary rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-secondary mb-3">{service.title}</h3>
                <p className="text-muted leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-primary to-primary-hover rounded-3xl p-12 md:p-16 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,#ffffff15,transparent_50%)]" />
            <div className="relative">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to take the next step?
              </h2>
              <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">
                Book a free consultation and discover how Febalty can help you reach your goals.
              </p>
              <Link
                href="/booking"
                className="inline-flex items-center bg-white text-primary px-8 py-4 rounded-full font-semibold text-lg hover:bg-slate-50 transition-all hover:shadow-xl active:scale-[0.98] min-h-[44px]"
              >
                Book Your Consultation
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
