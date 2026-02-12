import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Layout from './components/Layout';

// Pages
import HomePage from './pages/Home';
import AboutPage from './pages/About';
import PricingPage from './pages/Pricing';
import ContactPage from './pages/Contact';
import GetAccessPage from './pages/GetAccess';
import ThankYouPage from './pages/ThankYou';

// Scroll to top on route change
const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App: React.FC = () => {
  useEffect(() => {
    // Disable browser scroll restoration
    if (window.history.scrollRestoration) {
      window.history.scrollRestoration = 'manual';
    }
  }, []);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/get-access" element={<GetAccessPage />} />
          <Route path="/thank-you" element={<ThankYouPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
