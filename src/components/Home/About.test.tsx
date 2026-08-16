import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { About } from './About';

describe('About', () => {
  it('renders the about section', () => {
    render(<About />);
    expect(screen.getByTestId('about-section')).toBeInTheDocument();
  });

  it('renders "01. About" eyebrow', () => {
    render(<About />);
    expect(screen.getByText('01. About')).toBeInTheDocument();
  });

  it('renders "About Me" heading', () => {
    render(<About />);
    const heading = screen.getByRole('heading', { level: 3 });
    expect(heading).toHaveTextContent('About Me');
  });

  it('renders paragraph 1 starting with "I\'m Ashiq A"', () => {
    render(<About />);
    expect(screen.getByText(/I'm Ashiq A, a frontend developer/)).toBeInTheDocument();
  });

  it('renders paragraph 2 starting with "I\'m targeting"', () => {
    render(<About />);
    expect(screen.getByText(/I'm targeting frontend developer roles/)).toBeInTheDocument();
  });

  it('renders exactly 7 skill cards', () => {
    render(<About />);
    const skills = ['React', 'JavaScript', 'HTML', 'CSS', 'Git & GitHub', 'TypeScript', 'Tailwind CSS'];
    skills.forEach((skill) => {
      expect(screen.getByText(skill)).toBeInTheDocument();
    });
  });

  it('shows "Completed" status for React', () => {
    render(<About />);
    const reactCard = screen.getByText('React').closest('div');
    expect(reactCard).toHaveTextContent('Completed');
  });

  it('shows "Learning" status for TypeScript', () => {
    render(<About />);
    const tsCard = screen.getByText('TypeScript').closest('div');
    expect(tsCard).toHaveTextContent('Learning');
  });
});