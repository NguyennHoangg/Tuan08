import React, { useContext } from 'react';
import { Bookmark } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { RecipeBoxContext } from '../context/RecipeBoxContext';

const RecipeCard = ({ recipe, isHorizontal = false }) => {
  const { saveRecipe, removeRecipe, isSaved } = useContext(RecipeBoxContext);
  const saved = isSaved(recipe.id);

  const handleBookmark = (e) => {
    e.preventDefault();
    if (saved) {
      removeRecipe(recipe.id);
    } else {
      saveRecipe(recipe.id);
    }
  };

  const containerClass = isHorizontal
    ? 'w-72 flex-shrink-0'
    : 'w-full';

  return (
    <Link to={`/recipe/${recipe.id}`}>
      <motion.div
        whileHover={{ y: -4 }}
        className={`${containerClass} bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300`}
      >
        {/* Image Container */}
        <div className="relative overflow-hidden bg-gray-100 aspect-video">
          <motion.img
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            src={recipe.image}
            alt={recipe.title}
            className="w-full h-full object-cover"
          />

          {/* Bookmark Button */}
          <motion.button
            onClick={handleBookmark}
            whileTap={{ scale: 0.85 }}
            className={`absolute top-3 right-3 p-2 rounded-full border-2 transition-all ${
              saved
                ? 'bg-primary border-primary'
                : 'bg-white border-gray-300 hover:border-primary'
            }`}
          >
            <Bookmark
              size={18}
              className={saved ? 'text-white fill-white' : 'text-gray-600'}
            />
          </motion.button>
        </div>

        {/* Content */}
        <div className="p-4">
          <h3 className="font-playfair font-bold text-lg text-neutral-dark line-clamp-2 mb-2">
            {recipe.title}
          </h3>
          <div className="flex items-center justify-between">
            <span className="text-primary font-dm-sans text-sm font-semibold">
              {recipe.cookTime}
            </span>
            <div className="flex items-center gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <span
                  key={i}
                  className={`text-xs ${
                    i < Math.round(recipe.rating)
                      ? 'text-secondary'
                      : 'text-gray-300'
                  }`}
                >
                  ★
                </span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </Link>
  );
};

export default RecipeCard;
