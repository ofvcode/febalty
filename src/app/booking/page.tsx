"use client";

import { useState } from "react";
import type { FormEvent } from "react";

export default function Booking() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <>
      <section className="bg-secondary text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">Book Now</span>
          <h1 className="text-4xl md:text-5xl font-bold mt-3 mb-4">Schedule your appointment</h1>
          <p className="text-slate-300 text-lg max-w-2xl leading-relaxed">
            Take the first step. Fill out the form below and we will reach out to confirm your booking.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          {submitted ? (
            <div className="bg-green-50 border border-green-200 rounded-2xl p-12 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div className="text-green-700 text-2xl font-bold mb-3">Booking Received!</div>
              <p className="text-muted">We will reach out within 24 hours to confirm your appointment. Thank you for choosing Febalty.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-semibold text-secondary mb-2">First Name</label>
                  <input id="firstName" type="text" required className="w-full px-4 py-3.5 rounded-xl border border-border focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition min-h-[44px]" />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-semibold text-secondary mb-2">Last Name</label>
                  <input id="lastName" type="text" required className="w-full px-4 py-3.5 rounded-xl border border-border focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition min-h-[44px]" />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-secondary mb-2">Email</label>
                <input id="email" type="email" required className="w-full px-4 py-3.5 rounded-xl border border-border focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition min-h-[44px]" />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-secondary mb-2">Phone</label>
                <input id="phone" type="tel" className="w-full px-4 py-3.5 rounded-xl border border-border focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition min-h-[44px]" />
              </div>
              <div>
                <label htmlFor="service" className="block text-sm font-semibold text-secondary mb-2">Service</label>
                <select id="service" required className="w-full px-4 py-3.5 rounded-xl border border-border focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition bg-white min-h-[44px]">
                  <option value="">Select a service</option>
                  <option value="assimilation">Assimilation Support</option>
                  <option value="productivity">Productivity Coaching</option>
                  <option value="resources">Resource Connection</option>
                  <option value="consultation">Free Consultation</option>
                </select>
              </div>
              <div>
                <label htmlFor="date" className="block text-sm font-semibold text-secondary mb-2">Preferred Date</label>
                <input id="date" type="date" required className="w-full px-4 py-3.5 rounded-xl border border-border focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition min-h-[44px]" />
              </div>
              <div>
                <label htmlFor="notes" className="block text-sm font-semibold text-secondary mb-2">Tell us about your situation</label>
                <textarea id="notes" rows={4} className="w-full px-4 py-3.5 rounded-xl border border-border focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition resize-none" placeholder="What are you looking for help with?" />
              </div>
              <button
                type="submit"
                className="bg-primary text-white px-8 py-4 rounded-full font-semibold hover:bg-primary-hover transition-all hover:shadow-lg hover:shadow-primary/25 active:scale-[0.98] w-full min-h-[44px] text-lg"
              >
                Book Appointment
              </button>
              <p className="text-center text-sm text-muted-light">
                Free consultation. No commitment required.
              </p>
            </form>
          )}
        </div>
      </section>
    </>
  );
}
