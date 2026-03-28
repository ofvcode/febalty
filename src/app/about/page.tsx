import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description: "Learn about Febalty and our mission to help people assimilate and thrive.",
};

const values = [
  {
    title: "People First",
    desc: "Everything we do starts with understanding your unique situation and goals.",
    icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z",
  },
  {
    title: "Results Driven",
    desc: "We measure our success by your progress. If you grow, we grow.",
    icon: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6",
  },
  {
    title: "Community",
    desc: "We build bridges between people, cultures, and opportunities.",
    icon: "M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9",
  },
  {
    title: "Integrity",
    desc: "Transparent, honest, and reliable. We do what we say we will do.",
    icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
  },
];

export default function About() {
  return (
    <>
      {/* Header */}
      <section className="bg-secondary text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">About Us</span>
          <h1 className="text-4xl md:text-5xl font-bold mt-3 mb-4">
            We help people <span className="text-primary">belong</span> and <span className="text-accent">succeed</span>
          </h1>
          <p className="text-slate-300 text-lg max-w-2xl leading-relaxed">
            Febalty was built on a simple belief: everyone deserves the support to thrive in their environment, no matter where they come from.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">Our Story</span>
              <h2 className="text-3xl font-bold text-secondary mt-3 mb-6">From experience to expertise</h2>
              <div className="space-y-4 text-muted leading-relaxed">
                <p>
                  Febalty was founded in Manhattan, New York with a clear mission: to provide professional services that help people assimilate with their surroundings and become more productive.
                </p>
                <p>
                  We understand the challenges that come with new environments, whether it&apos;s a new city, a new career, or a new chapter in life. Our team has been there, and we built Febalty to be the support system we wished we had.
                </p>
                <p>
                  Today, we work with hundreds of clients across New York, providing personalized services that bridge the gap between where you are and where you want to be.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl p-12 text-center">
                <div className="text-7xl font-bold text-primary mb-2">500+</div>
                <div className="text-secondary font-semibold text-lg mb-1">People Helped</div>
                <div className="text-muted">and counting</div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-accent/10 rounded-2xl -z-10" />
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-primary/10 rounded-xl -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Our Values</span>
            <h2 className="text-3xl font-bold text-secondary mt-3">What drives everything we do</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v) => (
              <div key={v.title} className="bg-white p-8 rounded-2xl border border-border text-center hover:border-primary/30 hover:shadow-lg transition-all duration-300">
                <div className="w-14 h-14 bg-primary/10 text-primary rounded-xl flex items-center justify-center mx-auto mb-5">
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={v.icon} />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-secondary mb-2">{v.title}</h3>
                <p className="text-muted text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-secondary mb-4">Want to learn more?</h2>
          <p className="text-muted text-lg mb-8">
            We would love to hear from you. Reach out and let us know how we can help.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/booking" className="bg-primary text-white px-8 py-4 rounded-full font-semibold hover:bg-primary-hover transition-all hover:shadow-lg hover:shadow-primary/25 min-h-[44px] flex items-center">
              Book a Consultation
            </Link>
            <Link href="/contact" className="border-2 border-border text-secondary px-8 py-4 rounded-full font-semibold hover:border-primary/30 hover:bg-primary-light transition-all min-h-[44px] flex items-center">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
