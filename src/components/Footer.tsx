import React from "react";
import { Facebook, Twitter, Instagram, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-blue-800 text-white py-8 px-4 mt-10">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8">
        {/* Brand and Description */}
        <div className="flex flex-col gap-4">
          <h1 className="text-2xl font-bold">PlusCare</h1>
          <p className="text-sm text-gray-200">
            Revolutionizing healthcare with telemedicine solutions that bring convenience and quality to your doorstep.
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col gap-4">
          <h2 className="font-semibold text-lg">Quick Links</h2>
          <ul className="text-sm space-y-2">
            <li>
              <a href="#home" className="hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="hover:underline">
                About Us
              </a>
            </li>
            <li>
              <a href="#services" className="hover:underline">
                Services
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Social Media & Contact */}
        <div className="flex flex-col gap-4">
          <h2 className="font-semibold text-lg">Connect With Us</h2>
          <div className="flex gap-4">
            <a
              href="#"
              className="p-2 bg-white text-blue-600 rounded-full hover:bg-blue-500 hover:text-white transition"
              aria-label="Facebook"
            >
              <Facebook size={20} />
            </a>
            <a
              href="#"
              className="p-2 bg-white text-blue-600 rounded-full hover:bg-blue-500 hover:text-white transition"
              aria-label="Twitter"
            >
              <Twitter size={20} />
            </a>
            <a
              href="#"
              className="p-2 bg-white text-blue-600 rounded-full hover:bg-blue-500 hover:text-white transition"
              aria-label="Instagram"
            >
              <Instagram size={20} />
            </a>
            <a
              href="adujoy05@gmail.com"
              className="p-2 bg-white text-blue-600 rounded-full hover:bg-blue-500 hover:text-white transition"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>
          <p className="text-sm text-gray-200">Email: info@pluscare.com</p>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-8 border-t border-gray-500 pt-4 text-center text-sm text-gray-300">
        © {new Date().getFullYear()} PlusCare. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
