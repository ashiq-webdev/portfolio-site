import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Contact } from './Contact';

describe('Contact', () => {
  it('renders the contact section', () => {
    render(<Contact />);
    expect(screen.getByTestId('contact-section')).toBeInTheDocument();
  });

  it('renders "03. Contact" eyebrow', () => {
    render(<Contact />);
    expect(screen.getByText('03. Contact')).toBeInTheDocument();
  });

  it('renders "Get in Touch" heading', () => {
    render(<Contact />);
    const heading = screen.getByRole('heading', { level: 3 });
    expect(heading).toHaveTextContent('Get in Touch');
  });

  it('renders the description paragraph', () => {
    render(<Contact />);
    expect(screen.getByText(/Looking for a frontend developer for a role or project/)).toBeInTheDocument();
  });

  it('renders "Email Me" link with mailto href', () => {
    render(<Contact />);
    const link = screen.getByText('Email Me');
    expect(link).toHaveAttribute('href', 'mailto:ashiqtech20@gmail.com');
  });
});