import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import { describe, it, expect } from 'vitest';
import { ProjectsGrid } from './ProjectsGrid';

function renderProjectsGrid() {
  return render(
    <MemoryRouter>
      <ProjectsGrid />
    </MemoryRouter>
  );
}

describe('ProjectsGrid', () => {
  it('renders the projects section', () => {
    renderProjectsGrid();
    expect(screen.getByTestId('projects-section')).toBeInTheDocument();
  });

  it('renders "02. Projects" eyebrow', () => {
    renderProjectsGrid();
    expect(screen.getByText('02. Projects')).toBeInTheDocument();
  });

  it('renders "Things I\'ve Built" heading', () => {
    renderProjectsGrid();
    const heading = screen.getByRole('heading', { level: 3 });
    expect(heading).toHaveTextContent("Things I've Built");
  });

  it('renders a card for each project (2 cards)', () => {
    renderProjectsGrid();
    const links = screen.getAllByRole('link');
    expect(links).toHaveLength(2);
  });

  it('links to correct project URLs', () => {
    renderProjectsGrid();
    const links = screen.getAllByRole('link');
    expect(links[0]).toHaveAttribute('href', '/projects/portfolio-site');
    expect(links[1]).toHaveAttribute('href', '/projects/prayer-times-uae');
  });

  it('renders each project title', () => {
    renderProjectsGrid();
    expect(screen.getByText('Personal Portfolio Site')).toBeInTheDocument();
    expect(screen.getByText('UAE Prayer Times App')).toBeInTheDocument();
  });

  it('renders tech pills for each project', () => {
    renderProjectsGrid();
    // React appears in all 2 cards
    expect(screen.getAllByText('React')).toHaveLength(2);
    // TypeScript appears in all 2 cards
    expect(screen.getAllByText('TypeScript')).toHaveLength(2);
    // Vite only in portfolio project
    expect(screen.getByText('Vite')).toBeInTheDocument();
    // Aladhan API only in prayer times project
    expect(screen.getByText('Aladhan API')).toBeInTheDocument();
  });
});