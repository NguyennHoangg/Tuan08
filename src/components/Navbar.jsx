import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';
import { AuthContext } from '../context/AuthContext';

const Navbar = ({ showLoginModal }) => {
  const navigate = useNavigate();
  const { isLoggedIn, logout, user } = useContext(AuthContext);
  const [searchQuery, setSearchQuery] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
      setSearchQuery('');
    }
  };

  return (
    <motion.nav
      className={`sticky top-0 z-50 bg-white transition-all duration-300 ${
        scrolled ? 'shadow-lg' : 'shadow-md'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="text-2xl">👨‍🍳</div>
            <span className="font-playfair font-bold text-2xl text-primary hidden sm:inline">
              Chefify
            </span>
          </Link>

          {/* Search - Desktop */}
          <form onSubmit={handleSearch} className="hidden md:flex flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search recipes..."
                className="w-full px-4 py-2 pr-10 bg-gray-100 rounded-full text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Search
                size={18}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
              />
            </div>
          </form>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-8">
            <Link to="/" className="font-dm-sans text-gray-800 hover:text-primary transition">
              What to cook
            </Link>
            <Link to="/search?q=" className="font-dm-sans text-gray-800 hover:text-primary transition">
              Recipes
            </Link>
            <Link to="/" className="font-dm-sans text-gray-800 hover:text-primary transition">
              Ingredients
            </Link>
            <Link to="/" className="font-dm-sans text-gray-800 hover:text-primary transition">
              Occasions
            </Link>
            <Link to="/" className="font-dm-sans text-gray-800 hover:text-primary transition">
              About Us
            </Link>
          </div>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center gap-4">
            {!isLoggedIn ? (
              <>
                <button
                  onClick={showLoginModal}
                  className="font-dm-sans text-primary font-semibold hover:opacity-80 transition"
                >
                  Login
                </button>
                <Link to="/subscribe">
                  <button className="px-4 py-2 bg-primary text-white rounded-full font-dm-sans font-semibold hover:opacity-90 transition">
                    Subscribe
                  </button>
                </Link>
              </>
            ) : (
              <>
                <Link to="/recipe-box">
                  <button className="px-4 py-2 border-2 border-primary text-primary rounded-full font-dm-sans font-semibold hover:bg-primary hover:text-white transition">
                    Recipe Box
                  </button>
                </Link>
                <div className="relative group">
                  <button className="w-10 h-10 rounded-full bg-primary text-white font-playfair font-bold flex items-center justify-center">
                    {user?.name?.charAt(0).toUpperCase() || 'U'}
                  </button>
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg hidden group-hover:block p-4 z-50">
                    <p className="font-dm-sans text-gray-800 mb-3">
                      Logged in as <span className="font-bold">{user?.name}</span>
                    </p>
                    <button
                      onClick={logout}
                      className="w-full text-left px-3 py-2 text-primary font-dm-sans font-semibold hover:bg-gray-100 rounded transition"
                    >
                      Logout
                    </button>
                  </div>
                </div>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden border-t border-gray-200 pb-4"
          >
            <form onSubmit={handleSearch} className="px-4 py-3">
              <div className="relative">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search recipes..."
                  className="w-full px-4 py-2 pr-10 bg-gray-100 rounded-full text-gray-800"
                />
                <Search
                  size={18}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                />
              </div>
            </form>

            <div className="px-4 py-2 space-y-2">
              <Link to="/" className="block py-2 font-dm-sans text-gray-800">
                What to cook
              </Link>
              <Link to="/search?q=" className="block py-2 font-dm-sans text-gray-800">
                Recipes
              </Link>
              <Link to="/" className="block py-2 font-dm-sans text-gray-800">
                Ingredients
              </Link>
            </div>

            <div className="px-4 py-3 border-t border-gray-200 space-y-2">
              {!isLoggedIn ? (
                <>
                  <button
                    onClick={() => {
                      showLoginModal();
                      setMobileMenuOpen(false);
                    }}
                    className="w-full px-4 py-2 text-primary font-dm-sans font-semibold hover:bg-gray-100 rounded transition"
                  >
                    Login
                  </button>
                  <Link to="/subscribe" onClick={() => setMobileMenuOpen(false)}>
                    <button className="w-full px-4 py-2 bg-primary text-white rounded-full font-dm-sans font-semibold hover:opacity-90 transition">
                      Subscribe
                    </button>
                  </Link>
                </>
              ) : (
                <>
                  <Link to="/recipe-box" onClick={() => setMobileMenuOpen(false)}>
                    <button className="w-full px-4 py-2 border-2 border-primary text-primary rounded-full font-dm-sans font-semibold">
                      Recipe Box
                    </button>
                  </Link>
                  <button
                    onClick={() => {
                      logout();
                      setMobileMenuOpen(false);
                    }}
                    className="w-full px-4 py-2 text-primary font-dm-sans font-semibold hover:bg-gray-100 rounded transition"
                  >
                    Logout
                  </button>
                </>
              )}
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;
