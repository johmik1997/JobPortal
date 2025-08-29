import React from "react";
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-12">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* About */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Job Portal</h3>
          <p className="text-sm leading-6">
            Connecting talented people with the right opportunities.
            Find your dream job or hire the perfect candidate.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/" className="hover:text-green-400">Home</a></li>
            <li><a href="/jobs" className="hover:text-green-400">Jobs</a></li>
            <li><a href="/companies" className="hover:text-green-400">Companies</a></li>
            <li><a href="/contact" className="hover:text-green-400">Contact</a></li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Resources</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/about" className="hover:text-green-400">About Us</a></li>
            <li><a href="/blog" className="hover:text-green-400">Blog</a></li>
            <li><a href="/faq" className="hover:text-green-400">FAQ</a></li>
            <li><a href="/support" className="hover:text-green-400">Support</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2">
              <Mail size={16} /> support@jobportal.com
            </li>
            <li className="flex items-center gap-2">
              <Phone size={16} /> +1 (555) 123-4567
            </li>
          </ul>

          {/* Social Icons */}
          <div className="flex gap-4 mt-4">
            <a href="#" className="hover:text-green-400"><Facebook size={20} /></a>
            <a href="#" className="hover:text-green-400"><Twitter size={20} /></a>
            <a href="#" className="hover:text-green-400"><Linkedin size={20} /></a>
            <a href="#" className="hover:text-green-400"><Instagram size={20} /></a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-10 py-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Job Portal. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
