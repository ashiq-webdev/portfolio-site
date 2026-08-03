import { Sun, Moon } from '@phosphor-icons/react';

type ThemeToggleProps = {
  theme: string;
  onToggle: () => void;
};

const accentColor = (theme: string) => (theme === 'dark' ? '#64ffda' : '#0f766e');
const secondaryText = (theme: string) => (theme === 'dark' ? '#94a3b8' : '#495670');

export function ThemeToggle({ theme, onToggle }: ThemeToggleProps) {
  const accent = accentColor(theme);
  const secondary = secondaryText(theme);

  return (
    <button
      onClick={onToggle}
      data-testid="theme-toggle"
      className="flex items-center gap-2 text-sm transition-colors"
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
      style={{ color: secondary }}
      onMouseEnter={(e) => (e.currentTarget.style.color = accent)}
      onMouseLeave={(e) => (e.currentTarget.style.color = secondary)}
    >
      {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
    </button>
  );
}