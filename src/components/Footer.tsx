import React from 'react';
import { Zap, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-black text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <a href="/" className="flex items-center space-x-2 mb-6">
              <Zap className="w-8 h-8 text-highlight" />
              <span className="text-xl font-bold">Meet'eka</span>
            </a>
            <p className="text-gray-400">
              Your trusted partner in digital marketing excellence.
            </p>
          </div>

          <div>
            <h3 className="font-bold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#services" className="text-gray-400 hover:text-highlight">Services</a></li>
              <li><a href="#projects" className="text-gray-400 hover:text-highlight">Projects</a></li>
              <li><a href="#process" className="text-gray-400 hover:text-highlight">Process</a></li>
              <li><a href="#reviews" className="text-gray-400 hover:text-highlight">Reviews</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">Contact</h3>
            <ul className="space-y-3 text-gray-400">
              <li>hello@meeteka.com</li>
              <li>+1 (234) 567-890</li>
              <li>123 Business Avenue,<br />Digital City, DC 45678</li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-highlight hover:text-black transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-highlight hover:text-black transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-highlight hover:text-black transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-highlight hover:text-black transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Meet'eka. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}