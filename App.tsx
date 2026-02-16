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
import FeaturesPage from './pages/Features';
import DemoPage from './pages/Demo';
import DocsPage from './pages/Docs';
import PrivacyPage from './pages/Privacy';
import TermsPage from './pages/Terms';

// Scroll to top on route change
const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
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
          <Route path="/features" element={<FeaturesPage />} />
          <Route path="/demo" element={<DemoPage />} />
          <Route path="/docs" element={<DocsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/get-access" element={<GetAccessPage />} />
          <Route path="/thank-you" element={<ThankYouPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/terms" element={<TermsPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
