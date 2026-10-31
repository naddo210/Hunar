import React from 'react';
import { Routes, Route, Navigate, Outlet } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import CookieConsent from './components/CookieConsent';

// Public Core Pages
import Home from './pages/Home';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Services from './pages/Services';
import ArtClasses from './pages/ArtClasses';
import Contact from './pages/Contact';
import FAQ from './pages/FAQ';
import PrivacyPolicy from './pages/PrivacyPolicy';
import CookiePolicy from './pages/CookiePolicy';
import TermsOfService from './pages/TermsOfService';
import NotFound from './pages/NotFound';

// Service Division Pages
import CustomArtService from './pages/services/CustomArtService';
import ArtProductsService from './pages/services/ArtProductsService';
import BrandingService from './pages/services/BrandingService';
import WebsiteService from './pages/services/WebsiteService';
import DigitalContentService from './pages/services/DigitalContentService';
import MuralsService from './pages/services/MuralsService';
import CreativeProductsService from './pages/services/CreativeProductsService';

// Dynamic Sub-Service Template (Powers all 48 sub-services from the catalogue)
import SubServiceTemplate from './pages/services/SubServiceTemplate';

// Protected Admin CRM
import AdminLogin from './pages/admin/Login';
import AdminDashboard from './pages/admin/Dashboard';

function PublicLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-cream text-charcoal antialiased selection:bg-emerald selection:text-cream">
      <Navigation />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
      <CookieConsent />
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      {/* Public Pages Layout */}
      <Route element={<PublicLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/services" element={<Services />} />

        {/* 7 Core Divisions (matching catalogue) */}
        <Route path="/services/custom-art" element={<CustomArtService />} />
        <Route path="/services/art-products" element={<ArtProductsService />} />
        
        {/* Branding & Visual Identity (primary + legacy alias) */}
        <Route path="/services/branding-design" element={<BrandingService />} />
        <Route path="/services/branding" element={<Navigate to="/services/branding-design" replace />} />
        
        <Route path="/services/website-development" element={<WebsiteService />} />
        <Route path="/services/digital-content" element={<DigitalContentService />} />
        
        {/* Murals, Interior Art & Commercial Projects (primary + legacy alias) */}
        <Route path="/services/murals-commercial-art" element={<MuralsService />} />
        <Route path="/services/murals" element={<Navigate to="/services/murals-commercial-art" replace />} />
        
        <Route path="/services/creative-products" element={<CreativeProductsService />} />

        {/* Dynamic Sub-Service Route (All 48 individual offerings from the catalogue) */}
        <Route path="/services/:division/:subService" element={<SubServiceTemplate />} />

        {/* Studio Education, Inquiries, FAQ & Legal */}
        <Route path="/art-classes" element={<ArtClasses />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/cookies" element={<CookiePolicy />} />
        <Route path="/terms" element={<TermsOfService />} />

        {/* 404 Fallback */}
        <Route path="*" element={<NotFound />} />
      </Route>

      {/* Protected Admin CRM */}
      <Route path="/admin/login" element={<AdminLogin />} />
      <Route path="/admin/dashboard" element={<AdminDashboard />} />
    </Routes>
  );
}
