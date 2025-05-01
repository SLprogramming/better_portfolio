import React from "react";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-6">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        {/* Social Icons */}
        <div className="flex space-x-6 mb-4">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Facebook className="w-6 h-6 hover:text-yellow-500 transition" />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Twitter className="w-6 h-6 hover:text-yellow-500 transition" />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Instagram className="w-6 h-6 hover:text-yellow-500 transition" />
          </a>
          <a
            href="https://www.linkedin.com/in/thaeoo-supyaesone-75185a93?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin className="w-6 h-6 hover:text-yellow-500 transition" />
          </a>
        </div>

        {/* Copyright Text */}
        <p className="text-gray-400 text-sm">
          © {new Date().getFullYear()} Su Pyae. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
