import React from 'react';

const StarRating = ({ rating, checked, onChange }) => {
  return (
    <label className="flex items-center gap-3 cursor-pointer hover:bg-gray-50 p-2 rounded transition">
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="w-4 h-4 accent-primary rounded cursor-pointer"
      />
      <span className="font-dm-sans text-sm text-gray-800">
        {Array.from({ length: rating }).map((_, i) => (
          <span key={i} className="text-secondary">★</span>
        ))}
      </span>
      <span className="font-dm-sans text-sm text-gray-500">({rating}★)</span>
    </label>
  );
};

export default StarRating;
