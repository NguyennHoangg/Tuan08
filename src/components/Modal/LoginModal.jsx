import React, { useState, useContext } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { AuthContext } from '../../context/AuthContext';

const LoginModal = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState('');
  const { login } = useContext(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();
    if (email.trim()) {
      login(email);
      onClose();
      setEmail('');
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-2xl overflow-hidden max-w-4xl w-full grid grid-cols-1 md:grid-cols-2"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 p-2 hover:bg-gray-100 rounded-full transition md:text-white md:hover:bg-black/20"
            >
              <X size={24} />
            </button>

            {/* Left Side - Image */}
            <div className="hidden md:block relative h-96 md:h-full bg-gray-200 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1495521821757-a1efb6729352?w=500&h=600&fit=crop"
                alt="Cooking"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                <p className="font-playfair text-white text-2xl text-center px-6">
                  "Cooking is love made visible"
                </p>
              </div>
            </div>

            {/* Right Side - Form */}
            <div className="p-8 flex flex-col justify-center">
              <h2 className="font-playfair font-bold text-3xl text-primary mb-2">
                Welcome Back
              </h2>
              <p className="font-dm-sans text-gray-800 text-sm mb-6">
                Enter your email to log in
              </p>

              <form onSubmit={handleLogin}>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  required
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg font-dm-sans focus:outline-none focus:border-primary mb-4"
                />

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full py-3 bg-primary text-white font-dm-sans font-semibold rounded-lg hover:opacity-90 transition mb-6"
                >
                  Continue
                </motion.button>
              </form>

              {/* Divider */}
              <div className="flex items-center gap-3 mb-6">
                <div className="flex-1 h-px bg-gray-200" />
                <span className="font-dm-sans text-gray-500 text-sm">OR</span>
                <div className="flex-1 h-px bg-gray-200" />
              </div>

              {/* Social Buttons */}
              <div className="space-y-3">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-3 border-2 border-gray-200 rounded-lg font-dm-sans font-semibold hover:bg-gray-50 transition flex items-center justify-center gap-2"
                >
                  <span>🔵</span> Continue with Google
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-3 border-2 border-gray-200 rounded-lg font-dm-sans font-semibold hover:bg-gray-50 transition flex items-center justify-center gap-2"
                >
                  <span>f</span> Continue with Facebook
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-3 border-2 border-gray-200 rounded-lg font-dm-sans font-semibold hover:bg-gray-50 transition flex items-center justify-center gap-2"
                >
                  <span>🍎</span> Continue with Apple
                </motion.button>
              </div>

              {/* Terms */}
              <p className="font-dm-sans text-gray-500 text-xs text-center mt-6">
                By continuing, you agree to our Terms of Service and Privacy Policy
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoginModal;
