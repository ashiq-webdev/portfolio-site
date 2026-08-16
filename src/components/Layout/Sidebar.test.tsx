import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router';
import { describe, it, expect, vi } from 'vitest';
import { Sidebar } from './Sidebar';

type SidebarProps = {
  isMenuOpen: boolean;
  onMenuToggle: () => void;
};

function renderSidebar(props: Partial<SidebarProps> = {}) {
  const defaultProps: SidebarProps = {
    isMenuOpen: false,
    onMenuToggle: vi.fn(),
  };
  return render(
    <MemoryRouter>
      <Sidebar {...defaultProps} {...props} />
    </MemoryRouter>
  );
}

describe('Sidebar', () => {
  it('renders the sidebar', () => {
    renderSidebar();
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
  });

  it('renders logo image with src="/logo.png" and alt="Home"', () => {
    renderSidebar();
    const logo = screen.getByAltText('Home');
    expect(logo).toHaveAttribute('src', '/logo.png');
  });

  it('renders 3 desktop nav links with correct hrefs', () => {
    renderSidebar();
    const aboutLink = screen.getByText('About');
    const projectsLink = screen.getByText('Projects');
    const contactLink = screen.getByText('Contact');
    expect(aboutLink).toHaveAttribute('href', '#about');
    expect(projectsLink).toHaveAttribute('href', '#projects');
    expect(contactLink).toHaveAttribute('href', '#contact');
  });

  it('renders hamburger button with "Open menu" aria-label when closed', () => {
    renderSidebar({ isMenuOpen: false });
    expect(screen.getByLabelText('Open menu')).toBeInTheDocument();
  });

  it('renders hamburger button with "Close menu" aria-label when open', () => {
    renderSidebar({ isMenuOpen: true });
    expect(screen.getByLabelText('Close menu')).toBeInTheDocument();
  });

  it('calls onMenuToggle when hamburger button is clicked', async () => {
    const onMenuToggle = vi.fn();
    renderSidebar({ onMenuToggle });
    const button = screen.getByLabelText('Open menu');
    await userEvent.click(button);
    expect(onMenuToggle).toHaveBeenCalledTimes(1);
  });

  it('does not render mobile menu when isMenuOpen is false', () => {
    renderSidebar({ isMenuOpen: false });
    expect(screen.queryByTestId('mobile-menu')).not.toBeInTheDocument();
  });

  it('renders mobile menu with nav links when isMenuOpen is true', () => {
    renderSidebar({ isMenuOpen: true });
    expect(screen.getByTestId('mobile-menu')).toBeInTheDocument();
    const aboutLinks = screen.getAllByText('About');
    expect(aboutLinks.length).toBeGreaterThanOrEqual(2);
  });

  it('renders social icons in mobile menu', () => {
    renderSidebar({ isMenuOpen: true });
    const githubLinks = screen.getAllByLabelText('GitHub profile');
    // Desktop social icons + mobile social icons = 2
    expect(githubLinks).toHaveLength(2);
  });
});