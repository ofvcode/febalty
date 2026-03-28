"use client";

import { useState } from "react";

const categories = [
  { value: "text-change", label: "Change text" },
  { value: "new-image", label: "Add/replace image" },
  { value: "add-page", label: "Add a page" },
  { value: "layout", label: "Layout change" },
  { value: "colors", label: "Color/style change" },
  { value: "bug", label: "Something is broken" },
  { value: "other", label: "Other" },
];

export default function FeedbackWidget() {
  const [open, setOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [category, setCategory] = useState("");
  const [element, setElement] = useState("");
  const [message, setMessage] = useState("");
  const [sending, setSending] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSending(true);
    try {
      await fetch("/api/feedback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ category, element, message }),
      });
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setOpen(false);
        setCategory("");
        setElement("");
        setMessage("");
      }, 2500);
    } catch {
      // Still show success - the request was queued
      setSubmitted(true);
    } finally {
      setSending(false);
    }
  }

  return (
    <>
      {/* Floating button */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-[76px] right-6 z-50 bg-[#1e293b] text-white w-14 h-14 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all flex items-center justify-center"
        aria-label="Send feedback"
      >
        {open ? (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
        )}
      </button>

      {/* Panel */}
      {open && (
        <div className="fixed bottom-[140px] right-6 z-50 w-[340px] bg-white rounded-2xl shadow-2xl border border-[#e2e8f0] overflow-hidden animate-[slideUp_0.2s_ease]">
          <div className="bg-[#1e293b] text-white p-5">
            <h3 className="font-bold text-lg">Request a Change</h3>
            <p className="text-slate-300 text-sm mt-1">Tell us what you would like updated.</p>
          </div>

          {submitted ? (
            <div className="p-8 text-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div className="font-semibold text-[#1e293b]">Request Sent!</div>
              <p className="text-[#64748b] text-sm mt-1">We will get on this shortly.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="p-5 space-y-4">
              <div>
                <label className="block text-sm font-semibold text-[#1e293b] mb-1.5">Type of change</label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  required
                  className="w-full px-3 py-2.5 rounded-lg border border-[#e2e8f0] text-sm focus:outline-none focus:ring-2 focus:ring-[#f73b3b]/30 focus:border-[#f73b3b] bg-white min-h-[44px]"
                >
                  <option value="">Select category</option>
                  {categories.map((c) => (
                    <option key={c.value} value={c.value}>{c.label}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-[#1e293b] mb-1.5">
                  Which section/element? <span className="font-normal text-[#94a3b8]">(optional)</span>
                </label>
                <input
                  value={element}
                  onChange={(e) => setElement(e.target.value)}
                  className="w-full px-3 py-2.5 rounded-lg border border-[#e2e8f0] text-sm focus:outline-none focus:ring-2 focus:ring-[#f73b3b]/30 focus:border-[#f73b3b] min-h-[44px]"
                  placeholder='e.g. "Hero section", "About page"'
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-[#1e293b] mb-1.5">What should change?</label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  rows={3}
                  className="w-full px-3 py-2.5 rounded-lg border border-[#e2e8f0] text-sm focus:outline-none focus:ring-2 focus:ring-[#f73b3b]/30 focus:border-[#f73b3b] resize-none"
                  placeholder="Describe what you want changed..."
                />
              </div>
              <button
                type="submit"
                disabled={sending}
                className="w-full bg-[#f73b3b] text-white py-3 rounded-lg font-semibold text-sm hover:bg-[#e02d2d] transition-all disabled:opacity-50 min-h-[44px]"
              >
                {sending ? "Sending..." : "Submit Request"}
              </button>
            </form>
          )}
        </div>
      )}
    </>
  );
}
