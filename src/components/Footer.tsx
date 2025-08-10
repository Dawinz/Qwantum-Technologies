"use client";
import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, Youtube } from "lucide-react";

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Contact", href: "/contact" },
];

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "hello@qwantumtech.com",
    href: "mailto:hello@qwantumtech.com"
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+255 750 285 659",
    href: "tel:+255750285659"
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Tanzania",
    href: "#"
  }
];

const socialLinks = [
  {
    name: "Facebook",
    icon: Facebook,
    href: "#",
    color: "hover:text-blue-600"
  },
  {
    name: "Instagram",
    icon: Instagram,
    href: "#",
    color: "hover:text-pink-600"
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    href: "#",
    color: "hover:text-blue-700"
  },
  {
    name: "Twitter",
    icon: Twitter,
    href: "#",
    color: "hover:text-blue-400"
  }
];

export default function Footer() {
  return (
    <footer className="bg-gray-100 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          
          {/* Column 1: Logo & Description */}
          <div className="space-y-3">
            <div className="flex items-center space-x-2">
              <Image
                src="/images/logo.svg"
                alt="QwantumTech"
                width={300}
                height={100}
                className="h-20 w-auto"
              />
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              We build fast, scalable websites, apps, and custom digital solutions that help businesses grow and succeed in the digital world.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-3">
            <h3 className="font-semibold text-gray-900 text-lg">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-600 hover:text-blue-600 transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div className="space-y-3">
            <h3 className="font-semibold text-gray-900 text-lg">Contact</h3>
            <div className="space-y-2">
              {contactInfo.map((info) => {
                const IconComponent = info.icon;
                return (
                  <a
                    key={info.label}
                    href={info.href}
                    className="flex items-center space-x-3 text-gray-600 hover:text-blue-600 transition-colors duration-200 group"
                  >
                    <IconComponent className="w-4 h-4 text-gray-400 group-hover:text-blue-600" />
                    <div>
                      <p className="text-xs text-gray-500">{info.label}</p>
                      <p className="text-sm font-medium">{info.value}</p>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>

          {/* Column 4: Social Media */}
          <div className="space-y-3">
            <h3 className="font-semibold text-gray-900 text-lg">Follow Us</h3>
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    className={`w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-sm hover:shadow-md transition-all duration-200 ${social.color}`}
                    aria-label={social.name}
                  >
                    <IconComponent className="w-5 h-5 text-gray-600" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Copyright Line */}
        <div className="border-t border-gray-200 mt-6 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-600 text-sm">
              © {new Date().getFullYear()} Qwantum Technologies. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link href="/privacy-policy" className="text-gray-600 hover:text-blue-600 transition-colors duration-200">
                Privacy Policy
              </Link>
              <Link href="/terms-of-service" className="text-gray-600 hover:text-blue-600 transition-colors duration-200">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 