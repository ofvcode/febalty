"use client";

import { useState } from "react";
import type { FormEvent } from "react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <>
      <section className="bg-secondary text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Contact</span>
          <h1 className="text-4xl md:text-5xl font-bold mt-3 mb-4">Get in touch</h1>
          <p className="text-slate-300 text-lg max-w-2xl leading-relaxed">
            Have a question? Want to learn more? We are here to help.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-5 gap-16">
            <div className="md:col-span-3">
              {submitted ? (
                <div className="bg-green-50 border border-green-200 rounded-2xl p-12 text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div className="text-green-700 text-xl font-bold mb-2">Message Sent!</div>
                  <p className="text-muted">We will get back to you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-secondary mb-2">Name</label>
                      <input
                        id="name"
                        type="text"
                        required
                        className="w-full px-4 py-3.5 rounded-xl border border-border focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition min-h-[44px]"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-secondary mb-2">Email</label>
                      <input
                        id="email"
                        type="email"
                        required
                        className="w-full px-4 py-3.5 rounded-xl border border-border focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition min-h-[44px]"
                        placeholder="you@example.com"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-semibold text-secondary mb-2">Subject</label>
                    <input
                      id="subject"
                      type="text"
                      required
                      className="w-full px-4 py-3.5 rounded-xl border border-border focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition min-h-[44px]"
                      placeholder="How can we help?"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-secondary mb-2">Message</label>
                    <textarea
                      id="message"
                      required
                      rows={6}
                      className="w-full px-4 py-3.5 rounded-xl border border-border focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition resize-none"
                      placeholder="Tell us more about what you need..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="bg-primary text-white px-8 py-4 rounded-full font-semibold hover:bg-primary-hover transition-all hover:shadow-lg hover:shadow-primary/25 active:scale-[0.98] min-h-[44px] w-full sm:w-auto"
                  >
                    Send Message
                  </button>
                </form>
              )}
            </div>
            <div className="md:col-span-2">
              <div className="bg-surface rounded-2xl p-8 border border-border space-y-8">
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <h3 className="font-semibold text-secondary">Location</h3>
                  </div>
                  <p className="text-muted ml-[52px]">Manhattan, New York</p>
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <h3 className="font-semibold text-secondary">Email</h3>
                  </div>
                  <a href="mailto:abdallahdahir@gmail.com" className="text-primary hover:text-primary-hover transition ml-[52px]">
                    abdallahdahir@gmail.com
                  </a>
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <h3 className="font-semibold text-secondary">Phone</h3>
                  </div>
                  <a href="tel:7032830567" className="text-primary hover:text-primary-hover transition ml-[52px]">
                    (703) 283-0567
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
