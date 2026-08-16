import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Hero } from './Hero';

describe('Hero', () => {
  it('renders the hero section', () => {
    render(<Hero />);
    expect(screen.getByTestId('hero-section')).toBeInTheDocument();
  });

  it('renders "Hi, my name is" eyebrow text', () => {
    render(<Hero />);
    expect(screen.getByText('Hi, my name is')).toBeInTheDocument();
  });

  it('renders "Ashiq A" as h1', () => {
    render(<Hero />);
    const heading = screen.getByRole('heading', { level: 1 });
    expect(heading).toHaveTextContent('Ashiq A');
  });

  it('renders "Frontend Developer." as h2', () => {
    render(<Hero />);
    const heading = screen.getByRole('heading', { level: 2 });
    expect(heading).toHaveTextContent('Frontend Developer.');
  });

  it('renders both description paragraphs', () => {
    render(<Hero />);
    expect(screen.getByText('I build web apps with React and clean component architecture.')).toBeInTheDocument();
    expect(screen.getByText("Learning backend skills to build full stack applications.")).toBeInTheDocument();
  });

  it('renders "View my work" link with href="#projects"', () => {
    render(<Hero />);
    const link = screen.getByText('View my work');
    expect(link).toHaveAttribute('href', '#projects');
  });
});