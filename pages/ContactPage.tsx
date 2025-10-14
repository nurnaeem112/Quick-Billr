import React, { useState, FormEvent } from 'react';

const ContactPage: React.FC = () => {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'submitted'>('idle');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    // Simulate a network request
    setTimeout(() => {
      setStatus('submitted');
    }, 1500);
  };

  return (
    <div className="bg-white py-16 sm:py-24 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative bg-white shadow-xl rounded-2xl dark:bg-gray-800">
          <div className="grid lg:grid-cols-2">
            {/* Contact Information */}
            <div className="relative px-6 py-10 sm:px-10 lg:py-24 bg-gradient-to-br from-primary-700 to-primary-900 rounded-l-2xl text-white">
                <h1 className="text-3xl font-extrabold tracking-tight">Get in touch</h1>
                <p className="mt-3 text-lg text-primary-100">
                    Have a question or feedback? We'd love to hear from you. Fill out the form or email us.
                </p>
                <dl className="mt-8 space-y-6 text-primary-100">
                    <dt><span className="sr-only">Email</span></dt>
                    <dd className="flex text-base">
                        <svg className="flex-shrink-0 w-6 h-6 text-primary-200" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        <span className="ml-3">support@quickbillr.app</span>
                    </dd>
                </dl>
            </div>

            {/* Contact Form */}
            <div className="px-6 py-10 sm:px-10 lg:py-24">
              {status === 'submitted' ? (
                <div className="text-center">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Thank You!</h3>
                    <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">Your message has been sent. We'll get back to you shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="sr-only">Full name</label>
                    <input type="text" name="name" id="name" required className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-primary-500 focus:border-primary-500 border border-gray-300 rounded-md bg-transparent dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white" placeholder="Full name" />
                  </div>
                  <div>
                    <label htmlFor="email" className="sr-only">Email</label>
                    <input id="email" name="email" type="email" required autoComplete="email" className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-primary-500 focus:border-primary-500 border border-gray-300 rounded-md bg-transparent dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white" placeholder="Email" />
                  </div>
                  <div>
                    <label htmlFor="message" className="sr-only">Message</label>
                    <textarea id="message" name="message" rows={4} required className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-primary-500 focus:border-primary-500 border border-gray-300 rounded-md bg-transparent dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white" placeholder="Message"></textarea>
                  </div>
                  <div>
                    <button type="submit" disabled={status === 'submitting'} className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-gradient-to-r from-primary-600 to-primary-700 hover:shadow-lg hover:brightness-110 transition-all disabled:opacity-50">
                        {status === 'submitting' ? 'Sending...' : 'Send Message'}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;