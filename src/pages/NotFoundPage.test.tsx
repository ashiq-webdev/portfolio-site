import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { NotFoundPage } from './NotFoundPage';

describe('NotFoundPage', () => {
  it('renders with testid', () => {
    render(<NotFoundPage />);
    expect(screen.getByTestId('not-found-page')).toBeInTheDocument();
  });

  it('renders "404" heading', () => {
    render(<NotFoundPage />);
    const heading = screen.getByRole('heading', { level: 1 });
    expect(heading).toHaveTextContent('404');
  });

  it('renders "This page does not exist." message', () => {
    render(<NotFoundPage />);
    expect(screen.getByText('This page does not exist.')).toBeInTheDocument();
  });

  it('renders "Back to home" link with href="/"', () => {
    render(<NotFoundPage />);
    const link = screen.getByText('Back to home');
    expect(link).toHaveAttribute('href', '/');
  });
});