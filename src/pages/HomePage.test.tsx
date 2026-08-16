import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import { describe, it, expect } from 'vitest';
import { HomePage } from './HomePage';

function renderHomePage() {
  return render(
    <MemoryRouter>
      <HomePage />
    </MemoryRouter>
  );
}

describe('HomePage', () => {
  it('renders with testid', () => {
    renderHomePage();
    expect(screen.getByTestId('home-page')).toBeInTheDocument();
  });

  it('renders Hero section', () => {
    renderHomePage();
    expect(screen.getByText('Ashiq A')).toBeInTheDocument();
  });

  it('renders About section', () => {
    renderHomePage();
    expect(screen.getByText('About Me')).toBeInTheDocument();
  });

  it('renders Projects section', () => {
    renderHomePage();
    expect(screen.getByText("Things I've Built")).toBeInTheDocument();
  });

  it('renders Contact section', () => {
    renderHomePage();
    expect(screen.getByText('Get in Touch')).toBeInTheDocument();
  });
});