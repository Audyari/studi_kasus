import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">NextJS App</h3>
            <p className="text-gray-300">
              Building modern, accessible, and performant web applications using
              the latest technologies.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4">
              Navigation
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white rounded px-1"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white rounded px-1"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white rounded px-1"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4">
              Legal
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#"
                  className="text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white rounded px-1"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white rounded px-1"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white rounded px-1"
                >
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4">
              Connect
            </h4>
            <div
              className="flex space-x-4"
              role="group"
              aria-label="Social media links"
            >
              <a
                href="#"
                className="text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white rounded px-1"
                aria-label="Follow us on Twitter"
              >
                Twitter
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white rounded px-1"
                aria-label="View our GitHub repository"
              >
                GitHub
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white rounded px-1"
                aria-label="Connect with us on LinkedIn"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-300">
          <p>
            &copy; {new Date().getFullYear()} NextJS App. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
