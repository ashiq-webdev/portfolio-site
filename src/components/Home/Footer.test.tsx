import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Footer } from './Footer';

describe('Footer', () => {
  it('renders the footer', () => {
    render(<Footer />);
    expect(screen.getByTestId('footer')).toBeInTheDocument();
  });

  it('renders tech credit text', () => {
    render(<Footer />);
    expect(screen.getByText('Built with React, TypeScript and Tailwind CSS.')).toBeInTheDocument();
  });

  it('renders "Built by Ashiq A." text with copyright', () => {
    render(<Footer />);
    expect(screen.getByText(/Built by Ashiq A\./)).toBeInTheDocument();
  });

  it('renders SocialIcons (2 links)', () => {
    render(<Footer />);
    const links = screen.getAllByRole('link');
    expect(links).toHaveLength(2);
  });
});