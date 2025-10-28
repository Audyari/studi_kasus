import { Metadata } from 'next';

interface PageMetadataProps {
  title: string;
  description: string;
  keywords?: string;
  canonicalUrl?: string;
  ogImage?: string;
  noIndex?: boolean;
}

export const generateMetadata = ({
  title,
  description,
  keywords,
  canonicalUrl,
  ogImage,
  noIndex = false,
}: PageMetadataProps): Metadata => {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://example.com';
  const fullTitle = `${title} | NextJS App`;
  const fullDescription = description;
  const fullOgImage = ogImage
    ? `${baseUrl}${ogImage}`
    : `${baseUrl}/og-image.jpg`;

  return {
    title: fullTitle,
    description: fullDescription,
    keywords: keywords || undefined,
    openGraph: {
      title: fullTitle,
      description: fullDescription,
      url: canonicalUrl || baseUrl,
      siteName: 'NextJS App',
      images: [
        {
          url: fullOgImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description: fullDescription,
      images: [fullOgImage],
    },
    alternates: {
      canonical: canonicalUrl || baseUrl,
    },
    robots: {
      index: !noIndex,
      follow: true,
      googleBot: {
        index: !noIndex,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
};
