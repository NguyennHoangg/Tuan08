import React, { useState } from 'react';
import { recipeCategories } from '../../data/mockRecipes';
import RangeSlider from './RangeSlider';
import StarRating from './StarRating';
import { motion } from 'framer-motion';

const FilterSidebar = ({ onApply }) => {
  const [types, setTypes] = useState([]);
  const [timeRange, setTimeRange] = useState([30, 50]);
  const [ratings, setRatings] = useState([]);

  const handleTypeChange = (category) => {
    setTypes(prev =>
      prev.includes(category)
        ? prev.filter(t => t !== category)
        : [...prev, category]
    );
  };

  const handleRatingChange = (rating) => {
    setRatings(prev =>
      prev.includes(rating)
        ? prev.filter(r => r !== rating)
        : [...prev, rating]
    );
  };

  const handleApply = () => {
    onApply({ types, timeRange, ratings });
  };

  return (
    <div className="bg-white rounded-lg p-6 shadow-md">
      <h3 className="font-playfair font-bold text-lg text-neutral-dark mb-6">
        Filters
      </h3>

      {/* Type Filter */}
      <div className="mb-6">
        <h4 className="font-dm-sans font-semibold text-gray-800 mb-3 text-sm">
          Cooking Type
        </h4>
        <div className="space-y-2">
          {recipeCategories.map(category => (
            <label key={category} className="flex items-center gap-3 cursor-pointer hover:bg-gray-50 p-2 rounded transition">
              <input
                type="checkbox"
                checked={types.includes(category)}
                onChange={() => handleTypeChange(category)}
                className="w-4 h-4 accent-primary rounded cursor-pointer"
              />
              <span className="font-dm-sans text-sm text-gray-800">{category}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-200 my-6" />

      {/* Time Range Filter */}
      <div className="mb-6">
        <RangeSlider
          min={15}
          max={120}
          value={timeRange}
          onChange={setTimeRange}
          label="Cook Time (minutes)"
        />
      </div>

      {/* Divider */}
      <div className="border-t border-gray-200 my-6" />

      {/* Rating Filter */}
      <div className="mb-6">
        <h4 className="font-dm-sans font-semibold text-gray-800 mb-3 text-sm">
          Rating
        </h4>
        <div className="space-y-2">
          {[5, 4, 3, 2, 1].map(rating => (
            <StarRating
              key={rating}
              rating={rating}
              checked={ratings.includes(rating)}
              onChange={() => handleRatingChange(rating)}
            />
          ))}
        </div>
      </div>

      {/* Apply Button */}
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={handleApply}
        className="w-full py-3 bg-primary text-white font-dm-sans font-semibold rounded-lg hover:opacity-90 transition"
      >
        Apply Filters
      </motion.button>
    </div>
  );
};

export default FilterSidebar;
