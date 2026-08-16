import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router';
import { describe, it, expect } from 'vitest';
import { Layout } from './Layout';

function renderLayout() {
  return render(
    <MemoryRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<div>Test page content</div>} />
        </Route>
      </Routes>
    </MemoryRouter>
  );
}

describe('Layout', () => {
  it('renders the layout with testid', () => {
    renderLayout();
    expect(screen.getByTestId('layout')).toBeInTheDocument();
  });

  it('renders the Sidebar with logo', () => {
    renderLayout();
    expect(screen.getByAltText('Home')).toBeInTheDocument();
  });

  it('renders main content via Outlet', () => {
    renderLayout();
    expect(screen.getByText('Test page content')).toBeInTheDocument();
  });

  it('renders Footer text', () => {
    renderLayout();
    expect(screen.getByText('Built with React, TypeScript and Tailwind CSS.')).toBeInTheDocument();
  });

  it('does not blur main content when menu is closed', () => {
    renderLayout();
    const main = screen.getByText('Test page content').closest('main');
    expect(main).not.toHaveClass('blur-sm');
  });
});