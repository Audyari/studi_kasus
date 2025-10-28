import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: {
    default: 'NextJS App - Modern Web Application',
    template: '%s | NextJS App',
  },
  description:
    'A modern web application built with Next.js, featuring best practices for performance, accessibility, and SEO.',
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || 'https://example.com'
  ),
  keywords: [
    'Next.js',
    'React',
    'TypeScript',
    'Tailwind CSS',
    'Web Development',
  ],
  authors: [{ name: 'NextJS App Team' }],
  creator: 'NextJS App Team',
  publisher: 'NextJS App Team',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: process.env.NEXT_PUBLIC_SITE_URL || 'https://example.com',
    title: 'NextJS App - Modern Web Application',
    description:
      'A modern web application built with Next.js, featuring best practices for performance, accessibility, and SEO.',
    siteName: 'NextJS App',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'NextJS App',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NextJS App - Modern Web Application',
    description:
      'A modern web application built with Next.js, featuring best practices for performance, accessibility, and SEO.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: process.env.NEXT_PUBLIC_SITE_URL || 'https://example.com',
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION || '',
    yahoo: process.env.NEXT_PUBLIC_YAHOO_VERIFICATION || '',
    yandex: process.env.NEXT_PUBLIC_YANDEX_VERIFICATION || '',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}
        suppressHydrationWarning={true}
      >
        <div className="skip-nav">
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-blue-600 focus:text-white focus:rounded focus:shadow-lg"
          >
            Skip to main content
          </a>
        </div>
        <Header />
        <main id="main-content" className="flex-grow pt-16" tabIndex={-1}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
