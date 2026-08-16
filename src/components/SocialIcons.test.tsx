import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { SocialIcons } from './SocialIcons';

describe('SocialIcons', () => {
  it('renders 2 social links', () => {
    render(<SocialIcons size={22} />);
    const links = screen.getAllByRole('link');
    expect(links).toHaveLength(2);
  });

  it('renders GitHub link with correct href and aria-label', () => {
    render(<SocialIcons size={22} />);
    const githubLink = screen.getByLabelText('GitHub profile');
    expect(githubLink).toHaveAttribute('href', 'https://github.com/ashiq-webdev');
    expect(githubLink).toHaveAttribute('target', '_blank');
    expect(githubLink).toHaveAttribute('rel', 'noopener noreferrer');
  });

  it('renders LinkedIn link with correct href and aria-label', () => {
    render(<SocialIcons size={22} />);
    const linkedinLink = screen.getByLabelText('LinkedIn profile');
    expect(linkedinLink).toHaveAttribute('href', 'https://linkedin.com/in/ashiq-webdev');
    expect(linkedinLink).toHaveAttribute('target', '_blank');
    expect(linkedinLink).toHaveAttribute('rel', 'noopener noreferrer');
  });
});