import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router';
import { describe, it, expect } from 'vitest';
import { ProjectDetailPage } from './ProjectDetailPage';

function renderProjectDetailPage(slug: string) {
  return render(
    <MemoryRouter initialEntries={[`/projects/${slug}`]}>
      <Routes>
        <Route path="/projects/:slug" element={<ProjectDetailPage />} />
      </Routes>
    </MemoryRouter>
  );
}

describe('ProjectDetailPage', () => {
  it('renders project detail page with testid', () => {
    renderProjectDetailPage('portfolio-site');
    expect(screen.getByTestId('project-detail-page')).toBeInTheDocument();
  });

  it('renders project title for a valid built project', () => {
    renderProjectDetailPage('portfolio-site');
    expect(screen.getByText('Personal Portfolio Site')).toBeInTheDocument();
  });

  it('renders project description for a valid built project', () => {
    renderProjectDetailPage('portfolio-site');
    expect(screen.getByText('The single-page scroll site you are looking at right now.')).toBeInTheDocument();
  });

  it('renders "Code" button linking to GitHub', () => {
    renderProjectDetailPage('portfolio-site');
    const codeButton = screen.getByText('Code');
    expect(codeButton.closest('a')).toHaveAttribute('href', 'https://github.com/ashiq-webdev/portfolio-site');
  });

  it('renders "Visit Site" button when liveUrl exists', () => {
    renderProjectDetailPage('portfolio-site');
    expect(screen.getByText('Visit Site')).toBeInTheDocument();
  });

  it('does not render "Visit Site" button when liveUrl is null', () => {
    renderProjectDetailPage('prayer-times-uae');
    expect(screen.queryByText('Visit Site')).not.toBeInTheDocument();
  });

  it('renders "Project not found" for an invalid slug', () => {
    renderProjectDetailPage('nonexistent-project');
    expect(screen.getByText('Project not found')).toBeInTheDocument();
    expect(screen.getByText('The project you are looking for does not exist.')).toBeInTheDocument();
  });

  it('renders "in progress" message for an unbuilt project', () => {
    renderProjectDetailPage('prayer-times-uae');
    expect(screen.getByText('This project is in progress. Check back soon.')).toBeInTheDocument();
  });

  it('renders BackButton', () => {
    renderProjectDetailPage('portfolio-site');
    expect(screen.getByText('Back to projects')).toBeInTheDocument();
  });

  it('renders Overview section for a built project', () => {
    renderProjectDetailPage('portfolio-site');
    expect(screen.getByText('Overview')).toBeInTheDocument();
  });

  it('renders Tech Stack section for a built project', () => {
    renderProjectDetailPage('portfolio-site');
    expect(screen.getByText('Tech Stack')).toBeInTheDocument();
  });

  it('renders Features section for a built project', () => {
    renderProjectDetailPage('portfolio-site');
    expect(screen.getByText('Features')).toBeInTheDocument();
  });

  it('renders "What I\'ve Learned" section for a built project', () => {
    renderProjectDetailPage('portfolio-site');
    expect(screen.getByText("What I've Learned")).toBeInTheDocument();
  });
});
