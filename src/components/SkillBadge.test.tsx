import { it, expect, describe } from 'vitest';
import { render, screen } from '@testing-library/react';
import { SkillBadge } from './SkillBadge';

describe('SkillBadge component', () => {
  it('renders the label text', () => {
    render(<SkillBadge label="React" />);
    expect(screen.getByTestId('skill-badge')).toHaveTextContent('React');
  });

  it('renders different labels correctly', () => {
    render(<SkillBadge label="Tailwind CSS" />);
    expect(screen.getByTestId('skill-badge')).toHaveTextContent('Tailwind CSS');
  });
});