import React, { useState } from 'react';
import { Send } from 'lucide-react';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim()) {
      alert(`Subscribed with ${email}`);
      setEmail('');
    }
  };

  return (
    <footer className="bg-neutral-dark text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About Us */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="text-2xl">👨‍🍳</div>
              <h3 className="font-playfair font-bold text-lg text-primary">Chefify</h3>
            </div>
            <p className="font-dm-sans text-gray-400 text-sm mb-4">
              Discover amazing recipes and cooking tips from chefs around the world.
            </p>
            <form onSubmit={handleSubscribe} className="flex">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email"
                className="flex-1 px-4 py-2 bg-gray-800 text-white font-dm-sans text-sm focus:outline-none rounded-l"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-primary hover:opacity-90 transition"
              >
                <Send size={16} />
              </button>
            </form>
          </div>

          {/* Learn More */}
          <div>
            <h3 className="font-playfair font-bold text-lg mb-4">Learn More</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="font-dm-sans text-gray-400 hover:text-primary transition text-sm">
                  Cooking Tips
                </a>
              </li>
              <li>
                <a href="#" className="font-dm-sans text-gray-400 hover:text-primary transition text-sm">
                  Kitchen Equipment
                </a>
              </li>
              <li>
                <a href="#" className="font-dm-sans text-gray-400 hover:text-primary transition text-sm">
                  Recipe Collections
                </a>
              </li>
              <li>
                <a href="#" className="font-dm-sans text-gray-400 hover:text-primary transition text-sm">
                  Chef Interviews
                </a>
              </li>
            </ul>
          </div>

          {/* Recipes */}
          <div>
            <h3 className="font-playfair font-bold text-lg mb-4">Recipes</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="font-dm-sans text-gray-400 hover:text-primary transition text-sm">
                  Breakfast
                </a>
              </li>
              <li>
                <a href="#" className="font-dm-sans text-gray-400 hover:text-primary transition text-sm">
                  Lunch
                </a>
              </li>
              <li>
                <a href="#" className="font-dm-sans text-gray-400 hover:text-primary transition text-sm">
                  Dinner
                </a>
              </li>
              <li>
                <a href="#" className="font-dm-sans text-gray-400 hover:text-primary transition text-sm">
                  Desserts
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-8 flex flex-col sm:flex-row items-center justify-between">
          <div className="flex items-center gap-2 mb-4 sm:mb-0">
            <div className="text-xl">👨‍🍳</div>
            <p className="font-dm-sans text-gray-400 text-sm">
              © 2026 Chefify Company. All rights reserved.
            </p>
          </div>
          <div className="flex gap-4">
            <a href="#" className="font-dm-sans text-gray-400 hover:text-primary transition text-sm">
              Terms
            </a>
            <a href="#" className="font-dm-sans text-gray-400 hover:text-primary transition text-sm">
              Privacy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
