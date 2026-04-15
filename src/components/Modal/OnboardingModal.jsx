import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const OnboardingModal = ({ isOpen, onClose }) => {
  const [currentSlide, setCurrentSlide] = React.useState(0);

  const slides = [
    {
      title: 'Discover Amazing Recipes',
      description: 'Find thousands of delicious recipes from chefs around the world.',
      image: 'https://images.unsplash.com/photo-1495521821757-a1efb6729352?w=500&h=400&fit=crop'
    },
    {
      title: 'Cook with Confidence',
      description: 'Step-by-step instructions make cooking easy for everyone.',
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=500&h=400&fit=crop'
    },
    {
      title: 'Save Your Favorites',
      description: 'Build your personal recipe collection and share with friends.',
      image: 'https://images.unsplash.com/photo-1495521821757-a1efb6729352?w=500&h=400&fit=crop'
    }
  ];

  const handleNext = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    } else {
      onClose();
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
            className="bg-white rounded-2xl overflow-hidden max-w-md w-full"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 p-2 hover:bg-gray-100 rounded-full transition"
            >
              <X size={24} />
            </button>

            {/* Image */}
            <div className="relative h-64 overflow-hidden bg-gray-200">
              <motion.img
                key={currentSlide}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                src={slides[currentSlide].image}
                alt={slides[currentSlide].title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content */}
            <div className="p-8">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <h2 className="font-playfair font-bold text-2xl text-primary mb-2">
                  {slides[currentSlide].title}
                </h2>
                <p className="font-dm-sans text-gray-800 text-sm mb-6">
                  {slides[currentSlide].description}
                </p>
              </motion.div>

              {/* Dot Indicators */}
              <div className="flex justify-center gap-2 mb-6">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentSlide ? 'bg-primary w-6' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>

              {/* Button */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleNext}
                className="w-full py-3 bg-primary text-white font-dm-sans font-semibold rounded-lg hover:opacity-90 transition mb-3"
              >
                {currentSlide === slides.length - 1 ? 'Get Started' : 'Next'}
              </motion.button>

              <button
                onClick={onClose}
                className="w-full py-2 font-dm-sans text-primary font-semibold hover:bg-gray-100 rounded-lg transition"
              >
                Skip
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default OnboardingModal;
