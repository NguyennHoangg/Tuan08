import { useState, useCallback } from 'react';

export const useSearch = () => {
  const [query, setQuery] = useState('');
  const [filters, setFilters] = useState({
    types: [],
    timeRange: [30, 50],
    ratings: []
  });

  const updateFilter = useCallback((filterName, value) => {
    setFilters(prev => ({
      ...prev,
      [filterName]: value
    }));
  }, []);

  const updateQuery = useCallback((newQuery) => {
    setQuery(newQuery);
  }, []);

  return { query, filters, updateQuery, updateFilter };
};
