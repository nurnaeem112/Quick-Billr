import React from 'react';
import { Link } from 'react-router-dom';
import { blogPosts } from './BlogPage';
import { Helmet } from 'react-helmet-async';

import { TEMPLATES } from '../constants';


const FeatureCard: React.FC<{ icon: React.ReactElement; title: string; description: string }> = ({ icon, title, description }) => (
  <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow dark:bg-gray-800">
    <div className="flex items-center justify-center h-12 w-12 rounded-full bg-gradient-to-br from-primary-500 to-primary-700 text-white mb-4">
      {icon}
    </div>
    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{title}</h3>
    <p className="mt-2 text-base text-gray-600 dark:text-gray-300">{description}</p>
  </div>
);

const TestimonialCard: React.FC<{ quote: string; author: string; role: string; avatar: string }> = ({ quote, author, role, avatar }) => (
    <div className="bg-white p-6 rounded-lg shadow-md text-center dark:bg-gray-800">
        <img className="w-16 h-16 rounded-full mx-auto mb-4" src={avatar} alt={`Headshot of ${author}, ${role}`} />
        <p className="text-gray-600 italic dark:text-gray-300">"{quote}"</p>
        <p className="mt-4 font-semibold text-gray-900 dark:text-white">{author}</p>
        <p className="text-sm text-gray-500 dark:text-gray-400">{role}</p>
    </div>
);


const TemplateMarquee: React.FC = () => {
  // Use the actual templates defined in constants for consistency
  // If TEMPLATES is small, we cycle it to fill the marquee
  const displayTemplates = [...TEMPLATES, ...TEMPLATES, ...TEMPLATES];

  return (
    <div className="relative w-full overflow-hidden py-10">
      {/* Edge Fades */}
      <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white dark:from-gray-900 to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white dark:from-gray-900 to-transparent z-10 pointer-events-none" />

      {/* Marquee Track - Pauses on hover */}
      <div className="flex w-fit animate-marquee hover:[animation-play-state:paused]">
        {displayTemplates.map((template, idx) => (
          <div key={`${template.id}-${idx}`} className="flex-shrink-0 px-4">
            <Link
              to={`/free-invoice-generator?template=${template.id}`}
              className="group block relative w-48 md:w-64 aspect-[1/1.414] bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 hover:scale-105"
            >
              <img
                src={template.image}
                alt={template.name}
                className="w-full h-full object-cover"
                loading="lazy"
              />
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-primary-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[1px]">
                <span className="bg-white text-primary-700 font-bold py-2 px-4 rounded-lg shadow-lg text-sm">
                  Use {template.name}
                </span>
              </div>
            </Link>
          </div>
        ))}
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </div>
  );
};


const HomePage: React.FC = () => {
    const features = [
        {
            icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9V3" /></svg>,
            title: 'Global Ready',
            description: 'Bill clients worldwide with support for 20+ languages and all major currencies.'
        },
        {
            icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" /></svg>,
            title: 'Customizable Templates',
            description: 'Choose from a variety of free and premium templates to match your brand\'s style perfectly.'
        },
        {
            icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v1m0 8v1m0 8v1m-4-8h1m8 0h1M4 12h1m8 0h1m-5-4v1m0 8v1m-4-4h1m8 0h1m-4-4h1m-1 8h1" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4h4v4H4zM16 4h4v4h-4zM4 16h4v4H4zM16 16h4v4h-4z" /></svg>,
            title: 'Easy Payments with QR Codes',
            description: 'Add a scannable QR code to your invoices linked to your payment page for faster payments.'
        },
        {
            icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>,
            title: 'Instant Downloads',
            description: 'Download your document as a professional PDF with a single click, ready to send to your client.'
        },
    ];

    const testimonials = [
        {
            quote: 'QuickBillr has been a game-changer for my freelance business. I can create and send invoices in under a minute!',
            author: 'Sarah L.',
            role: 'Freelance Designer',
            avatar: 'https://picsum.photos/id/1011/100/100'
        },
        {
            quote: 'The live preview feature is amazing. It helps me catch any mistakes before I send the invoice. Highly recommended.',
            author: 'Michael B.',
            role: 'Consultant',
            avatar: 'https://picsum.photos/id/1005/100/100'
        },
        {
            quote: 'I love the professional templates. They make my small business look so much more established and professional.',
            author: 'Jessica P.',
            role: 'Small Business Owner',
            avatar: 'https://picsum.photos/id/1027/100/100'
        }
    ];

    const featuredPosts = blogPosts.slice(0, 3);

  return (



   <>
      {/* ✅ HELMET MUST BE HERE */}
      <Helmet>
        <title>Free Invoice Generator for Freelancers & Small Businesses | QuickBillr</title>
        
        <meta
          name="description"
          content="Create professional invoices in seconds with QuickBillr — a free invoice generator built for freelancers and small businesses. Customize templates, support multiple currencies, add QR code payments, and get paid faster."
          key="description"
        />

        <meta
        name="keywords"
        content="free invoice generator, invoice maker, create invoice online, freelancer invoice, small business invoicing, professional invoice template, billing software, estimate generator"
        />


        {/* Canonical (VERY IMPORTANT) */}
        <link rel="canonical" href="https://quickbillr.online/" />

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




    <div>
      {/* Hero Section */}
      <section className="bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 tracking-tight dark:text-white">
            Create Professional Invoices & Estimates in <span className="bg-gradient-to-r from-primary-500 to-primary-700 text-transparent bg-clip-text">Seconds</span>
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-lg md:text-xl text-gray-600 dark:text-gray-300">
            Free, simple, and globally compatible with multi-language support, currency options, and QR code payments — perfect for freelancers and small businesses.
          </p>
          <div className="mt-8">
            <Link
              to="/free-invoice-generator"
              className="inline-block px-8 py-4 bg-gradient-to-r from-primary-600 to-primary-700 text-white font-semibold rounded-lg shadow-md hover:shadow-lg hover:brightness-110 transition-all transform hover:scale-105"
            >
              Try Free Now
            </Link>
            
          </div>
        </div>
        {/* Marquee Showcase */}
        <TemplateMarquee />
      
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Everything You Need to Get Paid Faster</h2>
                <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">Powerful features to streamline your billing process.</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {features.map(feature => (
                    <FeatureCard key={feature.title} {...feature} />
                ))}
            </div>
        </div>
      </section>

      {/* Featured Blog Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
                  <div className="max-w-2xl">
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Latest from Our Blog</h2>
                    <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">Expert advice and insights to help your business grow and thrive.</p>
                  </div>
                  <div className="mt-6 md:mt-0">
                    <Link to="/blog" className="inline-flex items-center text-primary-600 font-semibold hover:text-primary-700 transition-colors">
                        View all posts
                        <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                    </Link>
                  </div>
              </div>
              <div className="grid md:grid-cols-3 gap-8">
                  {featuredPosts.map(post => (
                      <Link 
                        key={post.id} 
                        to={`/blog/${post.id}`}
                        className="group flex flex-col bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-all dark:bg-gray-800 dark:border-gray-700"
                      >
                          <div className="relative h-48 overflow-hidden">
                              <img 
                                src={post.imageUrl} 
                                alt={post.title} 
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                              />
                          </div>
                          <div className="p-6">
                              <div className="flex items-center text-xs font-medium text-primary-600 mb-2 dark:text-primary-400">
                                  <span>{post.date}</span>
                                  <span className="mx-2 text-gray-300 dark:text-gray-600">•</span>
                                  <span>{post.readTime}</span>
                              </div>
                              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors dark:text-white line-clamp-2">
                                  {post.title}
                              </h3>
                              <p className="text-gray-600 text-sm line-clamp-3 dark:text-gray-400">
                                  {post.description}
                              </p>
                          </div>
                      </Link>
                  ))}
              </div>
          </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Loved by Professionals Worldwide</h2>
                  <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">Don't just take our word for it. Here's what our users say.</p>
              </div>
              <div className="grid md:grid-cols-3 gap-8">
                  {testimonials.map(testimonial => (
                      <TestimonialCard key={testimonial.author} {...testimonial} />
                  ))}
              </div>
          </div>
      </section>

    </div>
    </>
  );
};

export default HomePage;