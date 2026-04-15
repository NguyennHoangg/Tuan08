import React, { useContext, useState } from 'react';
import { motion } from 'framer-motion';
import { Share2 } from 'lucide-react';
import RecipeCard from '../components/RecipeCard';
import { mockRecipes } from '../data/mockRecipes';
import { RecipeBoxContext } from '../context/RecipeBoxContext';
import { AuthContext } from '../context/AuthContext';
import { Link } from 'react-router-dom';

const RecipeBoxPage = () => {
  const { savedRecipes } = useContext(RecipeBoxContext);
  const { user } = useContext(AuthContext);
  const [activeTab, setActiveTab] = useState('saved');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  const savedRecipeObjects = mockRecipes.filter(r => savedRecipes.includes(r.id));
  const totalPages = Math.ceil(savedRecipeObjects.length / itemsPerPage);
  const startIdx = (currentPage - 1) * itemsPerPage;
  const paginatedRecipes = savedRecipeObjects.slice(startIdx, startIdx + itemsPerPage);

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Profile Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-lg p-8 shadow-md mb-8"
        >
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
            <div className="flex items-center gap-6">
              <div className="w-24 h-24 rounded-full bg-primary text-white flex items-center justify-center font-playfair font-bold text-4xl">
                {user?.name?.charAt(0).toUpperCase() || 'U'}
              </div>
              <div>
                <h1 className="font-playfair font-bold text-3xl text-neutral-dark mb-2">
                  {user?.name || 'Guest User'}
                </h1>
                <p className="font-dm-sans text-gray-800 mb-3">
                  <span className="font-semibold text-primary">{savedRecipes.length}</span> saved recipes
                </p>
                <div className="flex gap-2">
                  <span className="inline-block px-3 py-1 bg-primary text-white rounded-full font-dm-sans text-sm font-semibold">
                    Premium Member
                  </span>
                </div>
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-6 py-3 border-2 border-primary text-primary rounded-lg font-dm-sans font-semibold hover:bg-primary hover:text-white transition"
            >
              <Share2 size={18} />
              Share
            </motion.button>
          </div>
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="bg-white rounded-lg shadow-md mb-8"
        >
          <div className="flex border-b border-gray-200">
            {[
              { id: 'saved', label: 'Saved Recipes' },
              { id: 'folders', label: 'Folders' },
              { id: 'by-name', label: `Recipes by ${user?.name || 'Name'}` }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => {
                  setActiveTab(tab.id);
                  setCurrentPage(1);
                }}
                className={`flex-1 px-6 py-4 font-dm-sans font-semibold transition border-b-2 -mb-1 ${
                  activeTab === tab.id
                    ? 'border-primary text-primary'
                    : 'border-transparent text-gray-500 hover:text-gray-800'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="p-8">
            {activeTab === 'saved' ? (
              <>
                {savedRecipeObjects.length > 0 ? (
                  <>
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5 }}
                      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
                    >
                      {paginatedRecipes.map((recipe, idx) => (
                        <motion.div
                          key={recipe.id}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: idx * 0.05 }}
                        >
                          <RecipeCard recipe={recipe} />
                        </motion.div>
                      ))}
                    </motion.div>

                    {/* Pagination */}
                    {totalPages > 1 && (
                      <div className="flex items-center justify-center gap-2">
                        <button
                          onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                          disabled={currentPage === 1}
                          className="px-3 py-2 border-2 border-gray-200 rounded-lg font-dm-sans disabled:opacity-50"
                        >
                          ← Previous
                        </button>

                        {Array.from({ length: Math.min(5, totalPages) }).map((_, i) => {
                          const pageNum = i + 1;
                          return (
                            <button
                              key={pageNum}
                              onClick={() => setCurrentPage(pageNum)}
                              className={`px-3 py-2 rounded-lg font-dm-sans font-semibold transition ${
                                currentPage === pageNum
                                  ? 'bg-primary text-white'
                                  : 'border-2 border-gray-200 hover:border-primary'
                              }`}
                            >
                              {pageNum}
                            </button>
                          );
                        })}

                        {totalPages > 5 && (
                          <>
                            <span className="px-2 font-dm-sans text-gray-500">...</span>
                            <button
                              onClick={() => setCurrentPage(totalPages)}
                              className="px-3 py-2 border-2 border-gray-200 rounded-lg font-dm-sans hover:border-primary"
                            >
                              {totalPages}
                            </button>
                          </>
                        )}

                        <button
                          onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                          disabled={currentPage === totalPages}
                          className="px-3 py-2 border-2 border-gray-200 rounded-lg font-dm-sans disabled:opacity-50"
                        >
                          Next →
                        </button>
                      </div>
                    )}
                  </>
                ) : (
                  <div className="text-center py-16">
                    <p className="font-playfair font-bold text-2xl text-neutral-dark mb-4">
                      No saved recipes yet
                    </p>
                    <p className="font-dm-sans text-gray-800 mb-8">
                      Start exploring and save your favorite recipes!
                    </p>
                    <Link to="/search?q=">
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-6 py-3 bg-primary text-white font-dm-sans font-semibold rounded-lg hover:opacity-90 transition"
                      >
                        Explore Recipes
                      </motion.button>
                    </Link>
                  </div>
                )}
              </>
            ) : activeTab === 'folders' ? (
              <div className="text-center py-16">
                <p className="font-dm-sans text-gray-800 text-lg">
                  Create folders to organize your recipes
                </p>
              </div>
            ) : (
              <div className="text-center py-16">
                <p className="font-dm-sans text-gray-800 text-lg">
                  Your personal recipe collection
                </p>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default RecipeBoxPage;
