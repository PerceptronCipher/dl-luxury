"use client";
import { Menu, X, Sun } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed border-b-1 border-b-stone-200 top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white/80 backdrop-blur-md shadow-md" : "bg-transparent"
      }`}
    >
      <div className="flex justify-between items-center p-8">
        <div
          className={`md:text-2xl text-lg md:max-w-32  font-bold ${
            scrolled ? "text-stone-700" : "text-black"
          }`}
        >
          DI <span className="text-amber-500">LUXURY.CO </span>
        </div>

        <div
          className={`space-x-4 hidden md:block pr-4 text-xl transition-colors duration-300 ${
            scrolled ? "text-stone-700" : "text-black"
          }`}
        >
          <a
            className="hover:underline font-bold hover:underline-offset-8 text-blue-500 hover:text-amber-600"
            href="#home"
          >
            Home
          </a>
          <a
            className="hover:underline font-bold hover:underline-offset-8 hover:text-amber-600"
            href="#about"
          >
            About
          </a>
          <a
            className="hover:underline font-bold hover:underline-offset-8 hover:text-amber-600"
            href="#services"
          >
            Services
          </a>

          <a
            className="hover:underline font-bold hover:underline-offset-8 hover:text-amber-600"
            href="#contact"
          >
            Contact
          </a>
        </div>

        <button className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? (
            <X
              className={`rotate-180 transition-transform duration-300 ${
                scrolled ? "text-stone-700" : "text-black"
              }`}
              size={28}
            />
          ) : (
            <Menu
              className={`transition-transform duration-300 ${
                scrolled ? "text-stone-700" : "text-black"
              }`}
              size={28}
            />
          )}
        </button>

        <div className="hidden md:block">
          <button className="relative cursor-pointer shadow-2xl overflow-hidden px-8 py-3 font-bold text-white bg-amber-500 rounded-xl group">
            <span className="relative z-10">
              <a
                href="https://wa.me/2348083165652"
                target="_blank"
                rel="noopener noreferrer"
              >
                Get Started
              </a>
            </span>

            <span className="absolute inset-0 bg-gradient-to-r from-transparent to-orange-400 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></span>
          </button>
        </div>
      </div>

      <div
        className={`absolute inset-x-0 rounded-b-4xl bg-white/95 backdrop-blur-sm text-left shadow-xl sm:text-center md:hidden transition-all duration-500 ease-in-out ${
          open
            ? "translate-y-0 opacity-100 pointer-events-auto"
            : "-translate-y-4 opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col space-y-12 px-8 py-8 font-bold text-stone-900">
          <a
            onClick={() => setOpen(false)}
            className="hover:text-amber-600"
            href="#home"
          >
            Home
          </a>
          <a
            onClick={() => setOpen(false)}
            className="hover:text-amber-600"
            href="#about"
          >
            About
          </a>
          <a
            onClick={() => setOpen(false)}
            className="hover:text-amber-600"
            href="#services"
          >
            Services
          </a>

          <a
            onClick={() => setOpen(false)}
            className="hover:text-amber-600"
            href="#contact"
          >
            Contact
          </a>
          <button
            className="rounded-2xl cursor-pointer bg-amber-500 text-2xl text-sky-100 py-3 font-bold transition-all duration-300
      hover:bg-sky-400 hover:shadow-[0_0_20px_rgba(14,165,233,0.5)]
      active:scale-95"
          >
            <a
              href="https://wa.me/2348083165652"
              target="_blank"
              rel="noopener noreferrer"
            >
              Get Started
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
