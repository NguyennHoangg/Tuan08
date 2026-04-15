import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import { AuthProvider } from './context/AuthContext';
import { RecipeBoxProvider } from './context/RecipeBoxContext';
import { useModal } from './hooks/useModal';
import './index.css';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import OnboardingModal from './components/Modal/OnboardingModal';
import LoginModal from './components/Modal/LoginModal';

// Pages
import HomePage from './pages/HomePage';
import SearchResultsPage from './pages/SearchResultsPage';
import RecipeDetailPage from './pages/RecipeDetailPage';
import RecipeBoxPage from './pages/RecipeBoxPage';
import SubscribePage from './pages/SubscribePage';

function AppContent() {
  const onboarding = useModal();
  const login = useModal();
  const [showOnboardingOnce, setShowOnboardingOnce] = useState(true);

  // Show onboarding modal on first visit
  React.useEffect(() => {
    const hasVisited = localStorage.getItem('chefify_visited');
    if (!hasVisited && showOnboardingOnce) {
      onboarding.open();
      localStorage.setItem('chefify_visited', 'true');
      setShowOnboardingOnce(false);
    }
  }, []);

  return (
    <>
      <Navbar showLoginModal={login.open} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/search" element={<SearchResultsPage />} />
        <Route path="/recipe/:id" element={<RecipeDetailPage />} />
        <Route path="/recipe-box" element={<RecipeBoxPage />} />
        <Route path="/subscribe" element={<SubscribePage />} />
      </Routes>
      <Footer />

      <OnboardingModal isOpen={onboarding.isOpen} onClose={onboarding.close} />
      <LoginModal isOpen={login.isOpen} onClose={login.close} />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <RecipeBoxProvider>
          <AppContent />
        </RecipeBoxProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
