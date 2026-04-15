import React from 'react';

const RangeSlider = ({ min, max, value, onChange, label }) => {
  return (
    <div className="space-y-3">
      <label className="font-dm-sans font-semibold text-gray-800 text-sm">
        {label}
      </label>
      <div className="space-y-2">
        <input
          type="range"
          min={min}
          max={max}
          value={value[0]}
          onChange={(e) => onChange([parseInt(e.target.value), value[1]])}
          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary"
        />
        <input
          type="range"
          min={min}
          max={max}
          value={value[1]}
          onChange={(e) => onChange([value[0], parseInt(e.target.value)])}
          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary"
        />
        <div className="flex justify-between font-dm-sans text-sm text-gray-800">
          <span>{value[0]} min</span>
          <span>{value[1]} min</span>
        </div>
      </div>
    </div>
  );
};

export default RangeSlider;
