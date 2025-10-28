import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Home',
  description:
    'Welcome to our Next.js application - a modern, accessible, and performant web application built with the latest technologies and best practices.',
  openGraph: {
    title: 'NextJS App - Home',
    description:
      'A modern, accessible, and performant web application built with the latest technologies and best practices.',
    type: 'website',
  },
  twitter: {
    title: 'NextJS App - Home',
    description:
      'Welcome to our Next.js application - modern, accessible, and performant.',
  },
};

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
          Welcome to Our Next.js Application
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-10">
          A modern, accessible, and performant web application built with the
          latest technologies and best practices.
        </p>
        <div className="flex justify-center gap-4">
          <Link
            href="/about"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Learn More
          </Link>
          <Link
            href="/contact"
            className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
          <h2 className="text-xl font-semibold mb-3">Modern Tech Stack</h2>
          <p className="text-gray-600">
            Built with Next.js 14, React 18, and TypeScript for a robust and
            scalable application.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
          <h2 className="text-xl font-semibold mb-3">Performance Focused</h2>
          <p className="text-gray-600">
            Optimized for speed and performance with features like image
            optimization and code splitting.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
          <h2 className="text-xl font-semibold mb-3">Fully Responsive</h2>
          <p className="text-gray-600">
            Beautifully designed for all devices, from mobile phones to desktop
            computers.
          </p>
        </div>
      </div>

      <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-8 text-white text-center">
        <h2 className="text-2xl font-bold mb-4">Ready to Get Started?</h2>
        <p className="mb-6 max-w-2xl mx-auto">
          Explore our features and see how we can help you build amazing web
          applications.
        </p>
        <Link
          href="/about"
          className="inline-block bg-white text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
        >
          Explore Features
        </Link>
      </div>
    </div>
  );
}
