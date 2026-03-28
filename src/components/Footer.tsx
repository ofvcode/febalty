import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-secondary text-white mt-auto pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">F</span>
              </div>
              <span className="text-xl font-bold">febalty</span>
            </div>
            <p className="text-slate-400 text-[15px] leading-relaxed max-w-sm">
              Helping people assimilate and be productive with professional services tailored to your needs. Based in Manhattan, New York.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-3 text-[15px]">
              <li><Link href="/about" className="text-slate-400 hover:text-white transition">About Us</Link></li>
              <li><Link href="/gallery" className="text-slate-400 hover:text-white transition">Gallery</Link></li>
              <li><Link href="/testimonials" className="text-slate-400 hover:text-white transition">Testimonials</Link></li>
              <li><Link href="/blog" className="text-slate-400 hover:text-white transition">Blog</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-white">Get In Touch</h4>
            <ul className="space-y-3 text-[15px] text-slate-400">
              <li>Manhattan, New York</li>
              <li>
                <a href="mailto:abdallahdahir@gmail.com" className="hover:text-white transition">
                  abdallahdahir@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:7032830567" className="hover:text-white transition">
                  (703) 283-0567
                </a>
              </li>
              <li>
                <Link href="/booking" className="text-accent hover:text-accent-hover transition font-medium">
                  Book an Appointment
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-slate-700 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">
            &copy; {new Date().getFullYear()} Febalty. All rights reserved.
          </p>
          <p className="text-slate-500 text-sm">
            Built by{" "}
            <a href="https://buy.stripe.com/eVqbJ3crP19Z0GG9Jg6wE06" className="text-accent hover:text-accent-hover transition font-medium" target="_blank" rel="noopener noreferrer">
              absolutbuild.
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
