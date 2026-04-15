import React, { createContext, useState, useCallback } from 'react';

export const RecipeBoxContext = createContext();

export const RecipeBoxProvider = ({ children }) => {
  const [savedRecipes, setSavedRecipes] = useState([]);

  const saveRecipe = useCallback((recipeId) => {
    setSavedRecipes(prev => 
      prev.includes(recipeId) ? prev : [...prev, recipeId]
    );
  }, []);

  const removeRecipe = useCallback((recipeId) => {
    setSavedRecipes(prev => prev.filter(id => id !== recipeId));
  }, []);

  const isSaved = useCallback((recipeId) => {
    return savedRecipes.includes(recipeId);
  }, [savedRecipes]);

  return (
    <RecipeBoxContext.Provider value={{ savedRecipes, saveRecipe, removeRecipe, isSaved }}>
      {children}
    </RecipeBoxContext.Provider>
  );
};
