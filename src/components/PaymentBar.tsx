"use client";

export default function PaymentBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-[#f59e0b]/70 backdrop-blur-xl border-t border-[#f59e0b]/30 shadow-[0_-4px_30px_rgba(245,158,11,0.25)]">
      <a
        href="https://buy.stripe.com/eVqbJ3crP19Z0GG9Jg6wE06"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-3 py-4 px-6 text-[#1e293b] hover:bg-[#f59e0b]/90 transition-all min-h-[56px]"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
        </svg>
        <span className="font-bold text-[16px] drop-shadow-sm">Pay for this site</span>
        <span className="font-bold text-[16px] drop-shadow-sm">$1,344</span>
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </a>
    </div>
  );
}
