import React, { useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import HomePage from './pages/HomePage';
import InvoiceBuilderPage from './pages/InvoiceBuilderPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import Header from './components/Header';
import Footer from './components/Footer';
import { ThemeProvider } from './context/ThemeContext';

// SEO component that uses hooks to update meta tags based on the current route
const SEOUpdater: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    // Helper function to set or create a meta tag
    const setMetaTag = (attr: 'name' | 'property', value: string, content: string) => {
      let element = document.querySelector(`meta[${attr}='${value}']`) as HTMLMetaElement;
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attr, value);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // Helper to set the canonical link
    const setCanonical = (url: string) => {
        let element = document.querySelector<HTMLLinkElement>("link[rel='canonical']");
        if (!element) {
            element = document.createElement('link');
            element.setAttribute('rel', 'canonical');
            document.head.appendChild(element);
        }
        element.setAttribute('href', url);
    }
    
    let pageTitle, pageDescription, pageKeywords, canonicalUrl;
    // Dynamically determine the base URL for production builds
    const baseUrl = window.location.href.split('#')[0];

    switch (location.pathname) {
      case '/builder':
        pageTitle = 'Invoice Builder | QuickBillr';
        pageDescription = 'Create and customize your invoice or estimate in real-time. Add logos, items, taxes, and download as a professional PDF.';
        pageKeywords = 'invoice generator, estimate maker, pdf invoice, billing software, create invoice online';
        canonicalUrl = `${baseUrl}#/builder`;
        break;
      case '/about':
        pageTitle = 'About Us | QuickBillr';
        pageDescription = 'Learn about QuickBillr\'s mission to empower freelancers and small businesses with a simple, powerful, and free billing tool.';
        pageKeywords = 'about us, invoice software company, billing tool mission, freelancer tools';
        canonicalUrl = `${baseUrl}#/about`;
        break;
      case '/contact':
        pageTitle = 'Contact Us | QuickBillr';
        pageDescription = 'Get in touch with the QuickBillr team. We\'d love to hear your questions, feedback, or suggestions.';
        pageKeywords = 'contact support, quickbillr help, feedback, customer service';
        canonicalUrl = `${baseUrl}#/contact`;
        break;
      default: // Home page '/'
        pageTitle = 'QuickBillr - Free Invoice & Estimate Generator';
        pageDescription = 'Generate professional invoices and estimates in seconds. Supports 20+ languages, multiple currencies, QR code payments, and customizable templates.';
        pageKeywords = 'invoice maker, estimate generator, free invoice template, freelancer billing tool, multi-language invoice, multi-currency invoice, bill creator';
        canonicalUrl = baseUrl;
        break;
    }

    // Update standard SEO tags
    document.title = pageTitle;
    setMetaTag('name', 'description', pageDescription);
    setMetaTag('name', 'keywords', pageKeywords);
    setCanonical(canonicalUrl);

    // Update Open Graph tags
    setMetaTag('property', 'og:title', pageTitle);
    setMetaTag('property', 'og:description', pageDescription);
    setMetaTag('property', 'og:url', canonicalUrl);
    
    // Update Twitter tags
    setMetaTag('property', 'twitter:title', pageTitle);
    setMetaTag('property', 'twitter:description', pageDescription);
    setMetaTag('property', 'twitter:url', canonicalUrl);

  }, [location]);

  return null; // This component does not render anything
}

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <HashRouter>
        <SEOUpdater />
        <div className="flex flex-col min-h-screen bg-gray-50 text-gray-800 font-sans dark:bg-gray-900 dark:text-gray-200">
          <Header />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/builder" element={<InvoiceBuilderPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </HashRouter>
    </ThemeProvider>
  );
};

export default App;