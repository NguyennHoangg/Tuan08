import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import RecipeCard from '../components/RecipeCard';
import { mockRecipes } from '../data/mockRecipes';

const HomePage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const scrollContainerRef = React.useRef(null);

  const recipeOfDay = mockRecipes[0];
  const summerRecipes = mockRecipes.slice(0, 4);
  const videoRecipes = mockRecipes.slice(2, 6);
  const editorsPicks = mockRecipes.slice(4, 6);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-96 md:h-screen bg-gradient-to-r from-primary/10 to-secondary/10 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1495521821757-a1efb6729352?w=1200&h=600&fit=crop"
            alt="Hero"
            className="w-full h-full object-cover opacity-30"
          />
        </div>

        {/* Content */}
        <div className="relative h-full flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center px-4 max-w-2xl"
          >
            <h1 className="font-playfair font-bold text-4xl md:text-6xl text-neutral-dark mb-4">
              Cook Amazing Recipes Today
            </h1>
            <p className="font-dm-sans text-gray-800 text-lg md:text-xl mb-8">
              Discover thousands of delicious recipes from chefs around the world.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block"
            >
              <Link to="/search?q=" className="px-8 py-4 bg-primary text-white font-dm-sans font-semibold rounded-full hover:opacity-90 transition inline-block">
                Explore Recipes
              </Link>
            </motion.div>
          </motion.div>

          {/* Recipe of the Day Card - Floating */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="absolute bottom-8 right-8 hidden lg:block"
          >
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden max-w-xs">
              <img
                src={recipeOfDay.image}
                alt={recipeOfDay.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <p className="font-dm-sans text-xs text-gray-500 mb-2 uppercase tracking-wide">
                  Recipe of the Day
                </p>
                <h3 className="font-playfair font-bold text-lg text-primary mb-4">
                  {recipeOfDay.title}
                </h3>
                <Link to={`/recipe/${recipeOfDay.id}`}>
                  <motion.button
                    whileHover={{ x: 4 }}
                    className="font-dm-sans text-primary font-semibold flex items-center gap-2 hover:gap-3 transition-all"
                  >
                    View now <ChevronRight size={18} />
                  </motion.button>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* This Summer Recipes */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="font-playfair font-bold text-3xl md:text-4xl text-neutral-dark mb-8">
            This Summer Recipes
          </h2>
        </motion.div>

        {/* Horizontal Scroll */}
        <motion.div
          ref={scrollContainerRef}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide"
        >
          {summerRecipes.map((recipe) => (
            <motion.div key={recipe.id} variants={itemVariants}>
              <RecipeCard recipe={recipe} isHorizontal />
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Recipes With Videos */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="font-playfair font-bold text-3xl md:text-4xl text-neutral-dark mb-8">
              Recipes With Videos
            </h2>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {videoRecipes.map((recipe) => (
              <motion.div key={recipe.id} variants={itemVariants}>
                <RecipeCard recipe={recipe} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Editor's Pick */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="font-playfair font-bold text-3xl md:text-4xl text-neutral-dark mb-8">
            Editor's Pick
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-8"
        >
          {editorsPicks.map((recipe) => (
            <motion.div
              key={recipe.id}
              variants={itemVariants}
              className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
            >
              {/* Alternating layout */}
              {recipe.id % 2 === 0 ? (
                <>
                  <div className="rounded-lg overflow-hidden">
                    <img
                      src={recipe.image}
                      alt={recipe.title}
                      className="w-full h-96 object-cover rounded-lg"
                    />
                  </div>
                  <div>
                    <h3 className="font-playfair font-bold text-2xl text-neutral-dark mb-3">
                      {recipe.title}
                    </h3>
                    <div className="flex items-center gap-4 mb-4 text-sm font-dm-sans">
                      <span className="text-primary font-semibold">{recipe.cookTime}</span>
                      <span className="text-gray-500">By {recipe.author}</span>
                    </div>
                    <p className="font-dm-sans text-gray-800 mb-6 line-clamp-3">
                      Discover the perfect blend of flavors in this delicious recipe. Follow our step-by-step instructions to create a dish that will impress your family and friends.
                    </p>
                    <Link to={`/recipe/${recipe.id}`}>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-6 py-2 bg-primary text-white font-dm-sans font-semibold rounded-full hover:opacity-90 transition"
                      >
                        View Recipe
                      </motion.button>
                    </Link>
                  </div>
                </>
              ) : (
                <>
                  <div>
                    <h3 className="font-playfair font-bold text-2xl text-neutral-dark mb-3">
                      {recipe.title}
                    </h3>
                    <div className="flex items-center gap-4 mb-4 text-sm font-dm-sans">
                      <span className="text-primary font-semibold">{recipe.cookTime}</span>
                      <span className="text-gray-500">By {recipe.author}</span>
                    </div>
                    <p className="font-dm-sans text-gray-800 mb-6 line-clamp-3">
                      Discover the perfect blend of flavors in this delicious recipe. Follow our step-by-step instructions to create a dish that will impress your family and friends.
                    </p>
                    <Link to={`/recipe/${recipe.id}`}>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-6 py-2 bg-primary text-white font-dm-sans font-semibold rounded-full hover:opacity-90 transition"
                      >
                        View Recipe
                      </motion.button>
                    </Link>
                  </div>
                  <div className="rounded-lg overflow-hidden">
                    <img
                      src={recipe.image}
                      alt={recipe.title}
                      className="w-full h-96 object-cover rounded-lg"
                    />
                  </div>
                </>
              )}
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="font-playfair font-bold text-3xl md:text-4xl mb-4">
              Unlock Premium Recipes
            </h2>
            <p className="font-dm-sans text-lg mb-8 opacity-90">
              Join our community and get access to exclusive recipes, cooking tips, and more.
            </p>
            <Link to="/subscribe">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white text-primary font-dm-sans font-semibold rounded-full hover:opacity-90 transition"
              >
                Subscribe Now
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
