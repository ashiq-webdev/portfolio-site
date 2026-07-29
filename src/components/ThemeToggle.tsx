import { Sun, Moon } from '@phosphor-icons/react';

type ThemeToggleProps = {
  theme: string;
  onToggle: () => void;
};

export function ThemeToggle({ theme, onToggle }: ThemeToggleProps) {
  return (
    <button
      onClick={onToggle}
      data-testid="theme-toggle"
      className="flex items-center gap-2 text-sm text-slate-400 hover:text-[#64ffda] transition-colors"
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
    >
      {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
    </button>
  );
}