import { render, screen } from '@testing-library/react';
import Footer from '@/components/shared/common/Footer';
import '@testing-library/jest-dom';

describe('Footer Component', () => {
  it('renders the footer with all sections', () => {
    render(<Footer />);

    // Check if the main footer element exists
    const footer = screen.getByRole('contentinfo');
    expect(footer).toBeInTheDocument();

    // Check if all section headers are present
    expect(screen.getByText('NextJS App')).toBeInTheDocument();
    expect(screen.getByText('Navigation')).toBeInTheDocument();
    expect(screen.getByText('Legal')).toBeInTheDocument();
    expect(screen.getByText('Connect')).toBeInTheDocument();

    // Check if copyright text is present and includes current year
    const copyright = screen.getByText(new RegExp(`© ${new Date().getFullYear()} NextJS App`));
    expect(copyright).toBeInTheDocument();
  });

  it('renders all navigation links in the footer', () => {
    render(<Footer />);

    // Check if all navigation links are present
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('About')).toBeInTheDocument();
    expect(screen.getByText('Contact')).toBeInTheDocument();
  });

  it('renders all legal links', () => {
    render(<Footer />);

    // Check if all legal links are present
    expect(screen.getByText('Privacy Policy')).toBeInTheDocument();
    expect(screen.getByText('Terms of Service')).toBeInTheDocument();
    expect(screen.getByText('Cookie Policy')).toBeInTheDocument();
  });

  it('renders all social media links', () => {
    render(<Footer />);

    // Check if all social media links are present
    expect(screen.getByLabelText('Follow us on Twitter')).toBeInTheDocument();
    expect(screen.getByLabelText('View our GitHub repository')).toBeInTheDocument();
    expect(screen.getByLabelText('Connect with us on LinkedIn')).toBeInTheDocument();
  });

  it('renders the description text', () => {
    render(<Footer />);

    const description = screen.getByText(
      'Building modern, accessible, and performant web applications using the latest technologies.'
    );
    expect(description).toBeInTheDocument();
  });
});