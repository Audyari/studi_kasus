import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Learn more about our Next.js application and the team behind it. Discover our mission, values, and the technologies we use to create modern web applications.',
  openGraph: {
    title: 'About Us - NextJS App',
    description:
      'Learn more about our Next.js application and the team behind it. Discover our mission, values, and the technologies we use to create modern web applications.',
    type: 'website',
  },
  twitter: {
    title: 'About Us - NextJS App',
    description:
      'Learn more about our Next.js application and the team behind it.',
  },
};

const AboutPage = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">About Us</h1>
      <div className="space-y-4">
        <p>
          Welcome to our Next.js application! This project was created to
          demonstrate best practices in modern web development using the latest
          technologies.
        </p>
        <p>
          Our team is passionate about creating high-quality, accessible, and
          performant web applications that provide excellent user experiences.
        </p>
        <h2 className="text-2xl font-semibold mt-6 mb-3">Our Mission</h2>
        <p>
          We strive to build applications that are not only functional but also
          accessible, secure, and optimized for performance. Our approach
          focuses on clean code, proper architecture, and following industry
          standards.
        </p>
        <h2 className="text-2xl font-semibold mt-6 mb-3">
          Technologies We Use
        </h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Next.js 14 with App Router</li>
          <li>React 18 with TypeScript</li>
          <li>Tailwind CSS for styling</li>
          <li>Server and Client Components</li>
          <li>Modern JavaScript/TypeScript practices</li>
        </ul>
      </div>
    </div>
  );
};

export default AboutPage;
