import React from 'react';
import { TreePine, Phone, Mail, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-resort-forest text-resort-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <TreePine className="h-8 w-8 text-resort-gold" />
              <div>
                <div className="font-bold text-xl text-resort-white">Woodland Resort</div>
                <div className="text-sm text-resort-gray">Kragujevac</div>
              </div>
            </div>
            <p className="text-sm text-resort-gray leading-relaxed">
              Experience luxury and tranquility at our premier resort destination in Kragujevac. 
              Perfect for relaxation, dining, and memorable celebrations.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 text-resort-gray hover:text-resort-white cursor-pointer transition-colors" />
              <Instagram className="h-5 w-5 text-resort-gray hover:text-resort-white cursor-pointer transition-colors" />
              <Twitter className="h-5 w-5 text-resort-gray hover:text-resort-white cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-resort-white mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/accommodation" className="hover:text-resort-white transition-colors">Accommodation</a></li>
              <li><a href="/dining" className="hover:text-resort-white transition-colors">Dining</a></li>
              <li><a href="/events" className="hover:text-resort-white transition-colors">Events & Weddings</a></li>
              <li><a href="/contact" className="hover:text-resort-white transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-resort-white transition-colors">Gallery</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-resort-white mb-4">Contact</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-resort-gold" />
                <a 
                  href="https://www.google.com/maps/place/Woodland+Resort/@44.0325788,20.8742334,13z/data=!4m9!3m8!1s0x47572155400bb7b9:0x720f0e82bab8e50d!5m2!4m1!1i2!8m2!3d44.0325788!4d20.8742334!16s%2Fg%2F11b6j021pb?entry=ttu&g_ep=EgoyMDI1MDgxMS4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-resort-white transition-colors"
                >
                  Kragujevac, Serbia
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-resort-gold" />
                <span>+381 34 123-456</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-resort-gold" />
                <span>info@woodlandresort.rs</span>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-semibold text-resort-white mb-4">Newsletter</h3>
            <p className="text-sm text-resort-gray mb-4">
              Subscribe to receive updates on special offers and events.
            </p>
            <form className="space-y-3">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full px-3 py-2 bg-resort-forest/50 border border-resort-gray/30 rounded-lg text-resort-white placeholder-resort-gray focus:border-resort-gold focus:outline-none"
              />
              <button
                type="submit"
                className="w-full bg-resort-gold hover:bg-resort-gold/90 text-resort-white font-semibold py-2 rounded-lg transition-colors duration-200"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-resort-gray/30 mt-12 pt-8 text-center text-sm text-resort-gray">
          <p>&copy; 2024 Woodland Resort. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}