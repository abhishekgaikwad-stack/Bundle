"use client";

import { useState, useEffect } from "react";

const navLinks = ["Home", "About Us", "Services", "Testimonials", "Contact"];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const threshold = document.documentElement.scrollHeight * 0.1;
      setScrolled(window.scrollY > threshold);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-dark/95 backdrop-blur-md shadow-lg shadow-black/20" : "bg-transparent"
      }`}
    >
      <div className="max-w-[1728px] mx-auto flex items-center justify-between px-[180px] h-[80px] max-xl:px-20 max-lg:px-10 max-md:px-6">
        {/* Logo */}
        <div className="shrink-0">
          <img src="/Logo/Bundle Logo.svg" alt="Bundle" className="h-[40px]" />
        </div>

        {/* Hamburger */}
        <button
          className="hidden max-md:flex flex-col gap-[5px] p-1"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-[2px] bg-white rounded transition-all ${
              menuOpen ? "rotate-45 translate-y-[7px]" : ""
            }`}
          />
          <span
            className={`block w-6 h-[2px] bg-white rounded transition-all ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-6 h-[2px] bg-white rounded transition-all ${
              menuOpen ? "-rotate-45 -translate-y-[7px]" : ""
            }`}
          />
        </button>

        {/* Nav Links */}
        <ul
          className={`flex items-center gap-[32px] max-md:absolute max-md:top-full max-md:left-0 max-md:right-0 max-md:bg-dark max-md:flex-col max-md:p-6 max-md:gap-5 max-md:border-b max-md:border-gray-dark ${
            menuOpen ? "max-md:flex" : "max-md:hidden"
          }`}
        >
          {navLinks.map((link) => (
            <li key={link}>
              {link === "Contact" ? (
                <a
                  href="mailto:business@bundlehk.com"
                  className="text-white text-[16px] font-medium leading-[22px] hover:text-purple-light transition-colors"
                >
                  Contact Us
                </a>
              ) : (
                <a
                  href={`#${link.toLowerCase().replace(" ", "-")}`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollTo(link.toLowerCase().replace(" ", "-"));
                  }}
                  className="text-white text-[16px] font-medium leading-[22px] hover:text-purple-light transition-colors"
                >
                  {link}
                </a>
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
