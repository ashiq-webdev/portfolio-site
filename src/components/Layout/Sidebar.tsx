import { NavLink } from 'react-router';
import { GithubLogoIcon, LinkedinLogoIcon } from '@phosphor-icons/react';
import { palette } from '../../utils/useTheme';

const { accent, secondary } = palette;

const navItems = [
  { path: '/', label: 'Home', end: true },
  { path: '/#about', label: 'About' },
  { path: '/#projects', label: 'Projects' },
  { path: '/#contact', label: 'Contact' },
];

export function Sidebar() {
  return (
    <aside
      data-testid="sidebar"
      className="fixed md:sticky top-0 left-0 right-0 md:h-dvh z-50
                 flex md:flex-col items-center md:items-start justify-between
                 bg-neutral-950/80 md:bg-transparent
                 backdrop-blur md:backdrop-blur-none
                 border-b md:border-b-0 md:border-r border-neutral-800
                 px-6 py-4 md:p-12
                 md:w-64 md:min-w-64"
      style={{ color: palette.heading }}
    >
      <NavLink
        to="/"
        className="font-mono font-bold text-lg no-underline"
        style={{ color: accent }}
      >
        Aash
      </NavLink>

      <nav className="hidden md:flex md:flex-col md:gap-6 md:mt-16 md:w-full">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            end={item.end}
            className="group font-mono text-sm transition-all duration-200 border-l-2 pl-3 -ml-3"
            style={({ isActive }) => ({
              color: isActive ? accent : secondary,
              fontWeight: isActive ? 600 : 400,
              borderLeftColor: isActive ? accent : 'transparent',
            })}
          >
            {item.label}
          </NavLink>
        ))}
      </nav>

      <div className="flex items-center gap-5">
        <a
          href="https://github.com/aash"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-colors"
          style={{ color: secondary }}
          aria-label="GitHub profile"
          onMouseEnter={(e) => (e.currentTarget.style.color = accent)}
          onMouseLeave={(e) => (e.currentTarget.style.color = secondary)}
        >
          <GithubLogoIcon size={20} weight="regular" />
        </a>
        <a
          href="https://linkedin.com/in/aash"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-colors"
          style={{ color: secondary }}
          aria-label="LinkedIn profile"
          onMouseEnter={(e) => (e.currentTarget.style.color = accent)}
          onMouseLeave={(e) => (e.currentTarget.style.color = secondary)}
        >
          <LinkedinLogoIcon size={20} weight="regular" />
        </a>
      </div>
    </aside>
  );
}