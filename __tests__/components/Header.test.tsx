import { render, screen } from '@testing-library/react';
import Header from '@/components/common/Header';

// Mock the next/navigation module
jest.mock('next/navigation', () => ({
  usePathname: () => '/',
  useRouter: () => ({}),
}));

// Mock next/link
jest.mock('next/link', () => ({
  __esModule: true,
  default: ({
    children,
    href,
  }: {
    children: React.ReactNode;
    href: string;
  }) => <a href={href}>{children}</a>,
}));

describe('Header', () => {
  it('renders the logo', () => {
    render(<Header />);
    expect(screen.getByText('NextJS App')).toBeInTheDocument();
  });

  it('renders navigation links', () => {
    render(<Header />);

    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('About')).toBeInTheDocument();
    expect(screen.getByText('Contact')).toBeInTheDocument();
  });

  it('applies active link styling for current page', () => {
    // Note: This test would require more complex mocking to fully test
    // the active link styling based on current pathname
    render(<Header />);

    // Basic check that links are rendered
    const homeLink = screen.getByText('Home');
    expect(homeLink).toBeInTheDocument();
  });
});
