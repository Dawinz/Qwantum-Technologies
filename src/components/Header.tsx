"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-30 w-full bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="font-bold text-gray-900 text-lg tracking-tight">QwantumTech</div>
        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8 text-gray-900 text-base">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="hover:text-primary transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </nav>
        {/* Hamburger Icon */}
        <button
          className="md:hidden text-primary p-2"
          aria-label="Open menu"
          onClick={() => setMobileOpen(true)}
        >
          <Menu size={28} />
        </button>
      </div>
      {/* Mobile Menu Overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 bg-black/40" onClick={() => setMobileOpen(false)} />
      )}
      {/* Mobile Menu Drawer */}
      <div
        className={`fixed top-0 right-0 z-50 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out
        ${mobileOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex items-center justify-between px-4 py-4 border-b">
          <span className="font-bold text-primary text-lg">QwantumTech</span>
          <button
            className="text-primary p-2"
            aria-label="Close menu"
            onClick={() => setMobileOpen(false)}
          >
            <X size={28} />
          </button>
        </div>
        <nav className="flex flex-col gap-4 px-6 py-6 text-gray-900 text-lg">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="hover:text-primary transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
} 