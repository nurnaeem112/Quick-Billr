import React from 'react';
import { Link } from 'react-router-dom';

// FIX: Replaced JSX.Element with React.ReactElement to resolve "Cannot find namespace 'JSX'" error.
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

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 tracking-tight dark:text-white">
            Create Professional Invoices & Estimates in <span className="bg-gradient-to-r from-primary-500 to-primary-700 text-transparent bg-clip-text">Seconds</span>
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-lg md:text-xl text-gray-600 dark:text-gray-300">
            Free, simple, and globally compatible with multi-language support, currency options, and QR code payments — perfect for freelancers and small businesses.
          </p>
          <div className="mt-8">
            <Link
              to="/builder"
              className="inline-block px-8 py-4 bg-gradient-to-r from-primary-600 to-primary-700 text-white font-semibold rounded-lg shadow-md hover:shadow-lg hover:brightness-110 transition-all transform hover:scale-105"
            >
              Try Free Now
            </Link>
          </div>
        </div>
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
      
      {/* Testimonials Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
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
  );
};

export default HomePage;