import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Testimonials",
  description: "See what our clients say about Febalty's services.",
};

const testimonials = [
  {
    name: "Amira S.",
    role: "New to NYC",
    text: "Febalty made my transition to Manhattan so much smoother. They connected me with resources I never would have found on my own. Within weeks, I felt like I belonged.",
    rating: 5,
  },
  {
    name: "Marcus J.",
    role: "Career Changer",
    text: "I was struggling to find my footing after switching careers. Febalty helped me build the skills and connections I needed to succeed. Best investment I ever made.",
    rating: 5,
  },
  {
    name: "Layla K.",
    role: "International Student",
    text: "Moving from overseas was overwhelming. Febalty was there every step of the way, from paperwork to finding my community. They truly care about their clients.",
    rating: 5,
  },
  {
    name: "David R.",
    role: "Small Business Owner",
    text: "The productivity coaching alone was worth it. My output doubled in the first month. Febalty does not just talk, they deliver real results.",
    rating: 5,
  },
  {
    name: "Nadia F.",
    role: "Recent Graduate",
    text: "I had no idea where to start after college. Febalty helped me create a roadmap and stuck with me until I landed my dream job. Forever grateful.",
    rating: 5,
  },
  {
    name: "Omar H.",
    role: "Relocating Professional",
    text: "Professional, responsive, and genuinely helpful. They went above and beyond to make sure I had everything I needed. Highly recommend to anyone new to the city.",
    rating: 4,
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className={`w-5 h-5 ${i < count ? "text-accent fill-accent" : "text-gray-200 fill-gray-200"}`}
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <>
      <section className="bg-secondary text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Testimonials</span>
          <h1 className="text-4xl md:text-5xl font-bold mt-3 mb-4">What our clients say</h1>
          <p className="text-slate-300 text-lg max-w-2xl leading-relaxed">
            Real stories from real people who trusted Febalty to help them thrive.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="bg-white p-8 rounded-2xl border border-border hover:border-primary/20 hover:shadow-lg transition-all duration-300 flex flex-col"
              >
                <Stars count={t.rating} />
                <p className="text-muted mt-5 mb-6 leading-relaxed flex-1">
                  &ldquo;{t.text}&rdquo;
                </p>
                <div className="border-t border-border pt-5">
                  <div className="font-bold text-secondary">{t.name}</div>
                  <div className="text-sm text-muted-light">{t.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-surface">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-secondary mb-4">Ready to write your own success story?</h2>
          <Link
            href="/booking"
            className="inline-flex items-center bg-primary text-white px-8 py-4 rounded-full font-semibold hover:bg-primary-hover transition-all hover:shadow-lg hover:shadow-primary/25 min-h-[44px]"
          >
            Get Started
          </Link>
        </div>
      </section>
    </>
  );
}
