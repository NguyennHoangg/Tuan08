import React, { useState, useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronRight, MessageCircle, ThumbsUp } from 'lucide-react';
import RecipeCard from '../components/RecipeCard';
import { mockRecipes } from '../data/mockRecipes';
import { RecipeBoxContext } from '../context/RecipeBoxContext';

const RecipeDetailPage = () => {
  const { id } = useParams();
  const { saveRecipe, removeRecipe, isSaved } = useContext(RecipeBoxContext);
  const [cookingNote, setCookingNote] = useState('');
  const [reviewTab, setReviewTab] = useState('all');

  const recipe = mockRecipes.find(r => r.id === parseInt(id));
  const recentlyViewed = mockRecipes.slice(0, 4);
  const saved = isSaved(recipe?.id);

  if (!recipe) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-2xl text-gray-800">Recipe not found</p>
      </div>
    );
  }

  const handleSaveRecipe = () => {
    if (saved) {
      removeRecipe(recipe.id);
    } else {
      saveRecipe(recipe.id);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex items-center gap-2 text-sm font-dm-sans">
          <Link to="/" className="text-gray-800 hover:text-primary transition">
            Home
          </Link>
          <ChevronRight size={16} className="text-gray-400" />
          <Link to="/" className="text-gray-800 hover:text-primary transition">
            Cooking guides
          </Link>
          <ChevronRight size={16} className="text-gray-400" />
          <span className="text-primary font-semibold">{recipe.title}</span>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-1"
          >
            {/* Title */}
            <h1 className="font-playfair font-bold text-4xl text-neutral-dark mb-6">
              {recipe.title}
            </h1>

            {/* Author Info */}
            <div className="flex items-center gap-4 mb-6 pb-6 border-b border-gray-200">
              <img
                src={recipe.authorAvatar}
                alt={recipe.author}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <p className="font-dm-sans font-semibold text-gray-800">{recipe.author}</p>
                <p className="font-dm-sans text-sm text-gray-500">Chef</p>
              </div>
            </div>

            {/* Meta Info */}
            <div className="grid grid-cols-3 gap-4 mb-8 pb-8 border-b border-gray-200">
              <div className="text-center">
                <p className="font-playfair font-bold text-primary text-xl">
                  {recipe.cookTime}
                </p>
                <p className="font-dm-sans text-sm text-gray-500">Cook Time</p>
              </div>
              <div className="text-center">
                <p className="font-playfair font-bold text-neutral-dark text-xl">
                  {recipe.ingredients.length}
                </p>
                <p className="font-dm-sans text-sm text-gray-500">Ingredients</p>
              </div>
              <div className="text-center">
                <div className="flex justify-center gap-1 mb-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span
                      key={i}
                      className={`text-lg ${
                        i < Math.round(recipe.rating) ? 'text-secondary' : 'text-gray-300'
                      }`}
                    >
                      ★
                    </span>
                  ))}
                </div>
                <p className="font-dm-sans text-sm text-gray-500">{recipe.rating}</p>
              </div>
            </div>

            {/* Ingredients */}
            <div className="mb-8 pb-8 border-b border-gray-200">
              <h3 className="font-playfair font-bold text-xl text-neutral-dark mb-4">
                Ingredients
              </h3>
              <ul className="space-y-3">
                {recipe.ingredients.map((ingredient, idx) => (
                  <li key={idx} className="flex items-start gap-3 font-dm-sans text-gray-800">
                    <input
                      type="checkbox"
                      className="w-4 h-4 mt-1 rounded accent-primary cursor-pointer flex-shrink-0"
                    />
                    <span>{ingredient}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Add to Grocery List Button */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleSaveRecipe}
              className={`w-full py-3 font-dm-sans font-semibold rounded-lg transition mb-4 ${
                saved
                  ? 'bg-primary text-white'
                  : 'border-2 border-primary text-primary hover:bg-primary hover:text-white'
              }`}
            >
              {saved ? '✓ Saved to Recipe Box' : 'Save Recipe'}
            </motion.button>
          </motion.div>

          {/* Right Column */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-2"
          >
            {/* Recipe Image */}
            <div className="rounded-xl overflow-hidden mb-8">
              <img
                src={recipe.image}
                alt={recipe.title}
                className="w-full h-96 object-cover"
              />
            </div>

            {/* Steps */}
            <div className="mb-8 pb-8 border-b border-gray-200">
              <h3 className="font-playfair font-bold text-2xl text-neutral-dark mb-6">
                Instructions
              </h3>
              <div className="space-y-6">
                {recipe.steps.map((step, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    viewport={{ once: true }}
                    className="flex gap-4"
                  >
                    <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-playfair font-bold flex-shrink-0">
                      {idx + 1}
                    </div>
                    <div className="flex-1 pt-1">
                      <p className="font-dm-sans text-gray-800 leading-relaxed">
                        {step}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Cooking Note */}
            <div className="mb-8 pb-8 border-b border-gray-200">
              <h3 className="font-playfair font-bold text-xl text-neutral-dark mb-4">
                Cooking Note
              </h3>
              <div className="flex gap-3">
                <textarea
                  value={cookingNote}
                  onChange={(e) => setCookingNote(e.target.value)}
                  placeholder="Share your cooking experience..."
                  className="flex-1 px-4 py-3 border-2 border-gray-200 rounded-lg font-dm-sans focus:outline-none focus:border-primary resize-none h-24"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 bg-primary text-white font-dm-sans font-semibold rounded-lg hover:opacity-90 transition flex-shrink-0 h-fit"
                >
                  Send
                </motion.button>
              </div>
            </div>

            {/* Reviews */}
            <div>
              <h3 className="font-playfair font-bold text-2xl text-neutral-dark mb-6">
                Reviews
              </h3>

              {/* Tab Buttons */}
              <div className="flex gap-4 mb-6 border-b border-gray-200">
                {['all', 'helpful', 'private'].map(tab => (
                  <button
                    key={tab}
                    onClick={() => setReviewTab(tab)}
                    className={`px-4 py-3 font-dm-sans font-semibold transition border-b-2 -mb-1 ${
                      reviewTab === tab
                        ? 'border-primary text-primary'
                        : 'border-transparent text-gray-500 hover:text-gray-800'
                    }`}
                  >
                    {tab === 'all' && 'All Reviews'}
                    {tab === 'helpful' && 'Most Helpful'}
                    {tab === 'private' && 'Private'}
                  </button>
                ))}
              </div>

              {/* Review Cards */}
              <div className="space-y-6">
                {recipe.reviews.map(review => (
                  <motion.div
                    key={review.id}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="border border-gray-200 rounded-lg p-4"
                  >
                    <div className="flex items-start gap-4 mb-3">
                      <img
                        src={review.avatar}
                        alt={review.author}
                        className="w-10 h-10 rounded-full object-cover"
                      />
                      <div className="flex-1">
                        <p className="font-dm-sans font-semibold text-gray-800">
                          {review.author}
                        </p>
                        <p className="font-dm-sans text-sm text-gray-500">{review.date}</p>
                      </div>
                    </div>
                    <div className="flex gap-1 mb-2">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <span
                          key={i}
                          className={`text-sm ${
                            i < review.rating ? 'text-secondary' : 'text-gray-300'
                          }`}
                        >
                          ★
                        </span>
                      ))}
                    </div>
                    <p className="font-dm-sans text-gray-800 mb-3">{review.text}</p>
                    <button className="flex items-center gap-2 text-primary font-dm-sans font-semibold hover:opacity-80 transition">
                      <MessageCircle size={16} />
                      Reply
                    </button>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Recently Viewed */}
      <section className="bg-gray-50 py-12 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-playfair font-bold text-3xl text-neutral-dark mb-8">
            Your Recently Viewed
          </h2>

          <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide">
            {recentlyViewed.map(r => (
              <div key={r.id} className="w-72 flex-shrink-0">
                <RecipeCard recipe={r} isHorizontal />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default RecipeDetailPage;
