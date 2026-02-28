import './App.css';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Categories from './components/Categories';
import FeaturedWebsites from './components/FeaturedWebsites';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Newsletter from './components/Newsletter';
import DeveloperSection from './components/DeveloperSection';
import Footer from './components/Footer';
import Browse from './components/Browse';
import CategoriesPage from './pages/CategoriesPage';
import BookmarksPage from './pages/BookmarksPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import SubmitPage from './pages/SubmitPage';
import WebsiteDetailPage from './pages/WebsiteDetailPage';

// Helper component to handle scrolling to hash fragments
function ScrollToHash() {
  const location = useLocation();

  useEffect(() => {
    const hash = location.hash;
    if (hash) {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        // Small timeout to ensure the DOM is ready
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else {
      // Scroll to top if no hash provided (navigating to fresh page)
      window.scrollTo({ top: 0, behavior: 'instant' });
    }
  }, [location]);

  return null;
}

function Home() {
  return (
    <>
      <Hero />

      <FeaturedWebsites />
      <Features />
      <HowItWorks />
      <Newsletter />
      <DeveloperSection />
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="app">
        <ScrollToHash />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/browse" element={<Browse />} />
          <Route path="/categories" element={<CategoriesPage />} />
          <Route path="/bookmarks" element={<BookmarksPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/submit" element={<SubmitPage />} />
          <Route path="/website/:id" element={<WebsiteDetailPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
