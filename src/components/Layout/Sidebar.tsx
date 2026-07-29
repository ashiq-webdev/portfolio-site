import { NavLink } from 'react-router';
import { GithubLogoIcon, LinkedinLogoIcon } from '@phosphor-icons/react';
import { ThemeToggle } from '../ThemeToggle';

type SidebarProps = {
  theme: string;
  onToggleTheme: () => void;
};

const navItems = [
  { path: '/', label: 'Home', end: true },
  { path: '/projects', label: 'Projects' },
  { path: '/about', label: 'About' },
  { path: '/contact', label: 'Contact' }
];

export function Sidebar({ theme, onToggleTheme }: SidebarProps) {
  return (
    <aside
      data-testid="sidebar"
      className="fixed md:sticky top-0 left-0 right-0 md:h-screen z-50
                 flex md:flex-col items-center md:items-start justify-between
                 bg-neutral-950/80 md:bg-transparent
                 backdrop-blur md:backdrop-blur-none
                 border-b md:border-b-0 md:border-r border-neutral-800
                 px-6 py-4 md:p-10
                 md:w-64 md:min-w-64"
    >
      <NavLink to="/" className="text-[#64ffda] font-mono font-bold text-lg no-underline">
        Ashiq A
      </NavLink>

      <nav className="hidden md:flex md:flex-col md:gap-5 md:mt-12">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            end={item.end}
            className={({ isActive }) =>
              `font-mono text-sm transition-colors ${
                isActive
                  ? 'text-[#64ffda]'
                  : 'text-slate-400 hover:text-[#64ffda]'
              }`
            }
          >
            {item.label}
          </NavLink>
        ))}
      </nav>

      <div className="flex items-center gap-4 md:gap-5">
        <a
          href="https://github.com/aash"
          target="_blank"
          rel="noopener noreferrer"
          className="text-slate-400 hover:text-[#64ffda] transition-colors"
          aria-label="GitHub profile"
        >
          <GithubLogoIcon size={20} />
        </a>
        <a
          href="https://linkedin.com/in/aash"
          target="_blank"
          rel="noopener noreferrer"
          className="text-slate-400 hover:text-[#64ffda] transition-colors"
          aria-label="LinkedIn profile"
        >
          <LinkedinLogoIcon size={20} />
        </a>
        <ThemeToggle theme={theme} onToggle={onToggleTheme} />
      </div>
    </aside>
  );
}