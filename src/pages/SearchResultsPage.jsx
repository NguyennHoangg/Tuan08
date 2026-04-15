import React, { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import FilterSidebar from '../components/Filters/FilterSidebar';
import RecipeCard from '../components/RecipeCard';
import { mockRecipes } from '../data/mockRecipes';
import { Search, X } from 'lucide-react';

const SearchResultsPage = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || '';
  const [filters, setFilters] = useState({});
  const [sortBy, setSortBy] = useState('relevance');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  // Filter results
  const filteredResults = useMemo(() => {
    let results = mockRecipes.filter(recipe => {
      const matchesQuery = query === '' ||
        recipe.title.toLowerCase().includes(query.toLowerCase()) ||
        recipe.tags.some(tag => tag.toLowerCase().includes(query.toLowerCase()));

      const matchesType = !filters.types || filters.types.length === 0 ||
        filters.types.some(type => recipe.tags.includes(type.toLowerCase()));

      const matchesTime = !filters.timeRange ||
        (parseInt(recipe.cookTime) >= filters.timeRange[0] &&
          parseInt(recipe.cookTime) <= filters.timeRange[1]);

      const matchesRating = !filters.ratings || filters.ratings.length === 0 ||
        filters.ratings.some(r => recipe.rating >= r);

      return matchesQuery && matchesType && matchesTime && matchesRating;
    });

    // Sort
    if (sortBy === 'a-z') {
      results.sort((a, b) => a.title.localeCompare(b.title));
    } else if (sortBy === 'time') {
      results.sort((a, b) => parseInt(a.cookTime) - parseInt(b.cookTime));
    } else if (sortBy === 'rating') {
      results.sort((a, b) => b.rating - a.rating);
    }

    return results;
  }, [query, filters, sortBy]);

  // Pagination
  const totalPages = Math.ceil(filteredResults.length / itemsPerPage);
  const startIdx = (currentPage - 1) * itemsPerPage;
  const paginatedResults = filteredResults.slice(startIdx, startIdx + itemsPerPage);

  const suggestionChips = ['Sweet Cake', 'Black Cake', 'Lemon Pie', 'Chocolate Mousse'];
  const hasResults = filteredResults.length > 0;

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <FilterSidebar onApply={setFilters} />
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {hasResults ? (
              <>
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8">
                  <div>
                    <h1 className="font-playfair font-bold text-3xl text-neutral-dark">
                      {query || 'All Recipes'}
                      <span className="text-primary ml-2">({filteredResults.length})</span>
                    </h1>
                  </div>

                  {/* Sort Dropdown */}
                  <select
                    value={sortBy}
                    onChange={(e) => {
                      setSortBy(e.target.value);
                      setCurrentPage(1);
                    }}
                    className="mt-4 sm:mt-0 px-4 py-2 border-2 border-gray-200 rounded-lg font-dm-sans focus:outline-none focus:border-primary"
                  >
                    <option value="relevance">Sort by: Relevance</option>
                    <option value="a-z">Sort by: A-Z</option>
                    <option value="time">Sort by: Cooking Time</option>
                    <option value="rating">Sort by: Rating</option>
                  </select>
                </div>

                {/* Recipe Grid */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8"
                >
                  {paginatedResults.map((recipe, index) => (
                    <motion.div
                      key={recipe.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05 }}
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
              /* Empty State */
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center py-20"
              >
                <div className="flex justify-center mb-6">
                  <Search size={64} className="text-primary opacity-20" />
                </div>
                <h2 className="font-playfair font-bold text-2xl text-neutral-dark mb-2">
                  Sorry, no results found for "{query}"
                </h2>
                <p className="font-dm-sans text-gray-800 text-lg mb-8">
                  Try searching for something else or browse our suggestions below
                </p>

                {/* Suggestion Chips */}
                <div className="flex flex-wrap justify-center gap-3">
                  {suggestionChips.map(chip => (
                    <button
                      key={chip}
                      onClick={() => window.location.href = `/search?q=${encodeURIComponent(chip)}`}
                      className="px-4 py-2 border-2 border-primary text-primary rounded-full font-dm-sans font-semibold hover:bg-primary hover:text-white transition"
                    >
                      {chip}
                    </button>
                  ))}
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchResultsPage;
