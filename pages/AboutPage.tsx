import React from 'react';
import { Helmet } from 'react-helmet-async';

const AboutPage: React.FC = () => {
  return (

   <>
      {/* ✅ HELMET MUST BE HERE */}
      <Helmet>
        <title>About QuickBillr – Our Mission to Simplify Invoicing for Freelancers</title>
        
        <meta
          name="description"
          content="Learn about QuickBillr and our mission to simplify invoicing for freelancers and small businesses worldwide with fast, modern, and completely free billing tools."
          key="description"
        />
        
        <meta
        name="keywords"
        content="about quickbillr, invoicing software company, freelancer tools platform, billing solutions, invoice startup"
        />


        {/* Canonical (VERY IMPORTANT) */}
        <link rel="canonical" href="https://quickbillr.online/about-quickbillr" />

        <meta name="robots" content="index, follow" />

        {/* Open Graph */}
        <meta property="og:title" content="Free Invoice Generator for Freelancers | QuickBillr" />
        <meta property="og:description" content="Create professional invoices in seconds with QuickBillr." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://quickbillr.com/" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Free Invoice Generator for Freelancers | QuickBillr" />
        <meta name="twitter:description" content="Create invoices easily with QuickBillr." />
      </Helmet>


    <div className="bg-white py-16 sm:py-24 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-base font-semibold text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-primary-700 tracking-wide uppercase">About Us</p>
          <h1 className="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl dark:text-white">
            Empowering Your Business
          </h1>
          <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500 dark:text-gray-400">
            At QuickBillr, we believe billing should be the easiest part of your job, not the hardest.
          </p>
        </div>

        <div className="mt-12 prose prose-lg text-gray-600 mx-auto dark:text-gray-300">
          <h2 className="dark:text-white">Our Story</h2>
          <p>
            QuickBillr was born from a simple frustration: creating professional invoices and estimates was a tedious, time-consuming process. As freelancers and small business owners ourselves, we spent too much time fiddling with templates and spreadsheets. We knew there had to be a better way.
          </p>
          <p>
            We envisioned a tool that was fast, intuitive, and flexible. A platform where you could generate a beautiful, accurate invoice in seconds, not minutes. We focused on what matters: clean templates, multi-language and currency support, and modern features like QR code payments to help you get paid faster.
          </p>
          
          <h2 className="dark:text-white">How It Works</h2>
          <ol>
            <li><strong>Fill in the Details:</strong> Enter your and your client's information into our simple, straightforward form.</li>
            <li><strong>Add Your Items:</strong> List your services or products. Our clean interface makes it easy to add items, quantities, and rates.</li>
            <li><strong>Customize & Preview:</strong> Choose a template that fits your brand. Watch your invoice update in real-time with our live preview panel.</li>
            <li><strong>Download & Send:</strong> Once you're happy, download a pixel-perfect PDF and get paid faster.</li>
          </ol>
          
          <h2 className="dark:text-white">Our Mission</h2>
          <p>
            Our mission is to provide freelancers, consultants, and small businesses with the tools they need to succeed. We're committed to building a product that is not only powerful but also accessible and easy to use. We handle the paperwork, so you can focus on what you do best: growing your business.
          </p>
        </div>
      </div>
    </div>
   </>
  );
};

export default AboutPage;