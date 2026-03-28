"use client";

import Link from "next/link";
import { useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/gallery", label: "Gallery" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-white/80 backdrop-blur-lg border-b border-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">F</span>
            </div>
            <span className="text-xl font-bold text-secondary">febalty</span>
          </Link>

          <div className="hidden md:flex items-center gap-1">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-muted hover:text-secondary rounded-lg hover:bg-surface transition-all text-[15px] font-medium"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/booking"
              className="ml-3 bg-primary text-white px-6 py-2.5 rounded-full font-semibold text-[15px] hover:bg-primary-hover transition-all hover:shadow-lg hover:shadow-primary/25 active:scale-[0.98]"
            >
              Book Now
            </Link>
          </div>

          <button
            className="md:hidden p-2.5 rounded-lg hover:bg-surface transition"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-border bg-white animate-[fadeIn_0.15s_ease]">
          <div className="px-4 py-3 space-y-1">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="block py-3 px-4 rounded-xl text-muted hover:text-secondary hover:bg-surface font-medium transition-all min-h-[44px] flex items-center"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/booking"
              onClick={() => setOpen(false)}
              className="block py-3 px-4 bg-primary text-white text-center rounded-xl font-semibold min-h-[44px] flex items-center justify-center mt-2"
            >
              Book Now
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
