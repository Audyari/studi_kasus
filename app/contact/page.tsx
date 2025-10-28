import { Metadata } from 'next';
import ContactForm from './ContactForm';

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    "Get in touch with our team. Reach out for general inquiries, support, or to learn more about our services. We'd love to hear from you!",
  openGraph: {
    title: 'Contact Us - NextJS App',
    description:
      'Get in touch with our team. Reach out for general inquiries, support, or to learn more about our services.',
    type: 'website',
  },
  twitter: {
    title: 'Contact Us - NextJS App',
    description:
      'Get in touch with our team. Reach out to learn more about our services.',
  },
};

const ContactPage = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
      <div className="space-y-6">
        <div>
          <h2 className="text-xl font-semibold mb-2">Get in Touch</h2>
          <p className="mb-4">
            Have questions or want to work with us? Feel free to reach out using
            any of the methods below.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-lg font-medium mb-3">General Inquiries</h3>
            <p className="mb-2">Email: info@example.com</p>
            <p>Phone: +1 (555) 123-4567</p>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-lg font-medium mb-3">Support</h3>
            <p className="mb-2">Email: support@example.com</p>
            <p>Hours: Mon-Fri, 9am-5pm EST</p>
          </div>
        </div>

        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-4">Send us a message</h2>
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
