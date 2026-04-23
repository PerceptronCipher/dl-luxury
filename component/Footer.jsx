import { MapPin, Phone, Mail, Hourglass } from "lucide-react";
import Reveal from "./Reveal";

const Footer = () => {
  return (
    <footer className="bg-stone-50 text-stone-900 px-4 md:px-12 py-16">
      {/* This is the main responsive container.
        - `flex-col` and `text-center` for mobile (items stack).
        - `md:flex-row`, `md:text-left`, and `md:justify-between` for larger screens.
        - `gap-y-12` adds spacing between stacked sections on mobile.
      */}
      <Reveal>
        <div className="flex flex-col md:flex-row md:items-start text-center md:text-left md:justify-between gap-y-12 md:gap-x-8 max-w-[1440px] mx-auto">
          {/* --- Company Column --- */}
          <div className="md:w-1/4 space-y-6 flex flex-col items-center md:items-start">
            {/* Logo Placeholder */}
            <div className="h-10">
              {/* 🛑 PLACE YOUR LOGO HERE 🛑 */}
              <div className="border border-stone-300 rounded px-3 py-1 text-sm text-stone-500 font-mono">
                DL <span className="text-amber-500">LUXURY.CO </span>
              </div>
            </div>
            <p className="text-sm max-w-[280px]">
              Empowering businesses and individuals with innovative digital
              solutions.
            </p>
            {/* Social Icons Placeholder */}
            <div className="flex space-x-6 pt-2">
              <a href="#" className="hover:opacity-75">
                [F]
              </a>
              <a href="#" className="hover:opacity-75">
                [T]
              </a>
              <a href="#" className="hover:opacity-75">
                [I]
              </a>
              <a href="#" className="hover:opacity-75">
                [L]
              </a>
            </div>
          </div>

          {/* --- Quick Links Column --- */}
          <div className="md:w-1/5 space-y-6">
            <h4 className="font-semibold text-lg">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#" className="hover:text-amber-600 transition">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-amber-600 transition">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-amber-600 transition">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-amber-600 transition">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* --- Our Services Column --- */}
          <div className="md:w-1/5 space-y-6">
            <h4 className="font-semibold text-lg">Our Services</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#" className="hover:text-amber-600 transition">
                  Yoursub
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-amber-600 transition">
                  Tech Space
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-amber-600 transition">
                  Marketing & Optimization
                </a>
              </li>
            </ul>
          </div>

          {/* --- Contact Info Column --- */}
          <div className="md:w-1/4 space-y-6 flex flex-col items-center md:items-start relative">
            <h4 className="font-semibold text-lg">Contact Info</h4>
            <div className="space-y-4 text-sm max-w-[280px]">
              {/* Contact Row 1 */}
              <div className="flex items-center space-x-3 justify-center md:justify-start">
                {/* 🛑 PLACE YOUR LOCATION ICON HERE 🛑 */}
                <div className="text-amber-500 font-mono">
                  <MapPin size={28} className="text-amber-500" />
                </div>
                <span>Ilorin, Kwara State, Nigeria</span>
              </div>
              {/* Contact Row 2 */}
              <div className="flex items-center space-x-3 justify-center md:justify-start">
                {/* 🛑 PLACE YOUR PHONE ICON HERE 🛑 */}
                <div className="text-amber-500 font-mono">
                  <Phone size={28} className="text-amber-500" />
                </div>
                <a
                  href="tel:+2348061234567"
                  className="hover:text-amber-600 transition"
                >
                  +234 806 123 4567
                </a>
              </div>
              {/* Contact Row 3 */}
              <div className="flex items-center space-x-3 justify-center md:justify-start">
                {/* 🛑 PLACE YOUR EMAIL ICON HERE 🛑 */}
                <div className="text-amber-500 font-mono">
                  <Mail size={28} className="text-amber-500" />
                </div>
                <a
                  href="mailto:info@dluxury.co"
                  className="hover:text-amber-600 transition"
                >
                  info@dluxury.co
                </a>
              </div>
            </div>

            {/* Scroll-to-top button placeholder (hidden on mobile, visible on MD+) */}
            <div className="hidden md:block absolute bottom-0 -right-8">
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center border border-amber-300 rounded-full text-stone-400 hover:border-amber-500 hover:text-amber-500 transition-all font-mono"
              >
                [^]
              </a>
            </div>
          </div>
        </div>

        {/* --- Sub-footer / Copyright Row --- */}
        <div className="max-w-[1440px] mx-auto border-t border-stone-200 mt-16 pt-8 text-center text-xs text-stone-500">
          © 2026 D Luxury.co Limited. All Rights Reserved.
        </div>
      </Reveal>
    </footer>
  );
};

export default Footer;
