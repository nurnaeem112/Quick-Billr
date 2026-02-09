import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { blogPosts } from './BlogPage';
import { useSeo } from "../hooks/useSeo";
import SafeHTMLRenderer from "../components/SafeHTMLRenderer";
import { Helmet } from 'react-helmet-async';

const BlogPostPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const post = blogPosts.find((p) => p.id === id);

  useSeo({
  title: `${post.title} | QuickBillr Blog`,
  description: post.description,
  image: post.imageUrl,
  url: `https://quickbillr.online/blog/${post.id}`,
});


  if (!post) {
    return <Navigate to="/blog" />;
  }

  return (

     <>
        {/* ✅ HELMET MUST BE HERE */}
        <Helmet>
          <title>Invoicing Tips, Freelancer Guides & Small Business Advice | QuickBillr Blog</title>
          
          <meta
            name="description"
            content="Explore expert invoicing tips, freelancer guides, and small business advice on the QuickBillr Blog. Learn how to get paid faster, manage clients, and grow your business smarter."
            key="description"
          />

          <meta
            name="keywords"
            content="invoicing tips, freelancer advice, small business finance, how to get paid faster, billing tips, invoice guide, freelance business tips"
          />


          {/* Canonical (VERY IMPORTANT) */}
          <link rel="canonical" href="https://quickbillr.online/blog" />

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


    <div className="bg-white dark:bg-gray-900 min-h-screen">
      <div className="relative h-[400px] w-full">
        <img 
          src={post.imageUrl} 
          alt={post.title} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 pb-12">
            <Link to="/blog" className="inline-flex items-center text-primary-300 hover:text-white transition-colors mb-6 font-medium">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" /></svg>
              Back to Blog
            </Link>
            <h1 className="text-3xl md:text-5xl font-extrabold text-white max-w-4xl">
              {post.title}
            </h1>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center space-x-6 mb-10 pb-10 border-b border-gray-100 dark:border-gray-800">
            <div className="flex items-center">
              <div className="w-12 h-12 rounded-full bg-primary-600 flex items-center justify-center text-white font-bold text-lg">
                {post.author.charAt(0)}
              </div>
              <div className="ml-4">
                <p className="text-sm font-bold text-gray-900 dark:text-white">{post.author}</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">Author</p>
              </div>
            </div>
            <div className="h-8 w-px bg-gray-200 dark:bg-gray-700"></div>
            <div>
              <p className="text-sm font-bold text-gray-900 dark:text-white">{post.date}</p>
              <p className="text-xs text-gray-500 dark:text-gray-400">Published</p>
            </div>
            <div className="h-8 w-px bg-gray-200 dark:bg-gray-700"></div>
            <div>
              <p className="text-sm font-bold text-gray-900 dark:text-white">{post.readTime}</p>
              <p className="text-xs text-gray-500 dark:text-gray-400">Reading time</p>
            </div>
          </div>

          <div className="prose prose-lg dark:prose-invert max-w-none text-gray-700 dark:text-gray-300 leading-relaxed">
            <p className="text-xl font-medium text-gray-900 dark:text-white mb-8">
              {post.description}
            </p>

            <SafeHTMLRenderer html={post.content} />

            
            <div className="bg-primary-50 rounded-2xl p-8 my-12 dark:bg-gray-800 border border-primary-100 dark:border-gray-700">
              <h3 className="text-xl font-bold text-primary-900 dark:text-primary-400 mb-4">Start billing like a pro today</h3>
              <p className="text-primary-800 dark:text-gray-300 mb-6">
                Ready to create your own professional invoices and get paid faster? Try our free invoice builder.
              </p>
              <Link 
                to="/free-invoice-generator" 
                className="inline-block px-6 py-3 bg-primary-600 text-white font-bold rounded-lg hover:bg-primary-700 transition-all shadow-md"
              >
                Create My First Invoice
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
   </>
  );
};

export default BlogPostPage;
