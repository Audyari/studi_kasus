import { render, screen, fireEvent } from '@testing-library/react';
import { usePathname } from 'next/navigation';
import Header from '@/components/shared/common/Header';
import '@testing-library/jest-dom';

// Mock next/navigation
jest.mock('next/navigation', () => ({
  usePathname: jest.fn(),
}));

describe('Header Component', () => {
  const mockUsePathname = usePathname as jest.MockedFunction<typeof usePathname>;

  beforeEach(() => {
    mockUsePathname.mockReturnValue('/');
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders the header with logo and navigation links', () => {
    mockUsePathname.mockReturnValue('/');

    render(<Header />);

    // Check if the logo is present
    expect(screen.getByLabelText('Go to homepage')).toBeInTheDocument();
    expect(screen.getByText('NextJS App')).toBeInTheDocument();

    // Check if navigation links are present
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('About')).toBeInTheDocument();
    expect(screen.getByText('Contact')).toBeInTheDocument();
  });

  it('highlights the active page in navigation', () => {
    mockUsePathname.mockReturnValue('/about');

    render(<Header />);

    // Check if the active page is highlighted
    expect(screen.getByText('About')).toHaveClass('text-blue-600');
    expect(screen.getByText('Home')).not.toHaveClass('text-blue-600');
  });

  it('toggles the mobile menu when menu button is clicked', () => {
    render(<Header />);

    // Initially, mobile menu should not be visible (since we're on desktop view)
    const mobileMenu = screen.queryByRole('dialog');
    expect(mobileMenu).not.toBeInTheDocument();

    // Click the mobile menu button
    const menuButton = screen.getByLabelText('Open main menu');
    fireEvent.click(menuButton);

    // Mobile menu should now be visible
    const visibleMobileMenu = screen.getByRole('dialog');
    expect(visibleMobileMenu).toBeInTheDocument();

    // Click the menu button again
    fireEvent.click(menuButton);

    // Mobile menu should be hidden again
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });

  it('closes the mobile menu when a navigation link is clicked', () => {
    render(<Header />);

    // Open the mobile menu
    const menuButton = screen.getByLabelText('Open main menu');
    fireEvent.click(menuButton);

    // Mobile menu should be visible
    expect(screen.getByRole('dialog')).toBeInTheDocument();

    // Click a navigation link in the mobile menu
    // Get the dialog first and then find the link within it
    const dialog = screen.getByRole('dialog');
    const aboutLink = dialog.querySelector('a[href="/about"]');

    if (aboutLink) {
      fireEvent.click(aboutLink);
    }

    // Mobile menu should be hidden
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });

  it('applies different classes based on scroll state', () => {
    render(<Header />);

    // Check initial state (no scroll)
    const header = screen.getByRole('banner');
    expect(header).toHaveClass('shadow-sm');
    
    // Note: Testing scroll behavior would require more complex setup
    // This is a basic check for the initial state
  });
});