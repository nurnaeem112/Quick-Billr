import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import HomePage from './pages/HomePage';
import InvoiceBuilderPage from './pages/InvoiceBuilderPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import Header from './components/Header';
import Footer from './components/Footer';
import { ThemeProvider } from './context/ThemeContext';


import './export.css';


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
  case '/free-invoice-generator':
    pageTitle = 'Free Invoice Generator | QuickBillr';
    pageDescription = 'Easily create professional invoices and estimates online for free. Customize, download as PDF, and share instantly.';
    pageKeywords = 'invoice generator, free invoice maker, create invoice online, PDF invoice, QuickBillr';
    canonicalUrl = `${baseUrl}#/free-invoice-generator`;
    break;
  case '/about-quickbillr':
    pageTitle = 'About QuickBillr | Our Mission to Simplify Invoicing';
    pageDescription = 'Discover QuickBillr’s story and our mission to empower freelancers and small businesses with smarter invoicing tools.';
    pageKeywords = 'about QuickBillr, online invoicing, business tools, invoice generator story';
    canonicalUrl = `${baseUrl}#/about-quickbillr`;
    break;
  case '/contact-support':
    pageTitle = 'Contact Support | QuickBillr Help Center';
    pageDescription = 'Need help or have a question? Contact QuickBillr support for fast assistance with invoices, billing, or feedback.';
    pageKeywords = 'contact QuickBillr, invoice help, customer support, billing issues';
    canonicalUrl = `${baseUrl}#/contact-support`;
    break;
  default:
    pageTitle = 'QuickBillr - Free Invoice & Estimate Generator';
    pageDescription = 'Generate professional invoices and estimates in seconds. Supports 20+ languages, multiple currencies, QR code payments, and customizable templates.';
    pageKeywords = 'invoice maker, estimate generator, free invoice template, freelancer billing tool';
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
      <BrowserRouter>
        <SEOUpdater />
        <div className="flex flex-col min-h-screen bg-gray-50 text-gray-800 font-sans dark:bg-gray-900 dark:text-gray-200">
          <Header />
          <main className="flex-grow">
            <Routes>
             <Route path="/" element={<HomePage />} />
             <Route path="/free-invoice-generator" element={<InvoiceBuilderPage />} />
             <Route path="/about-quickbillr" element={<AboutPage />} />
             <Route path="/contact-support" element={<ContactPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
