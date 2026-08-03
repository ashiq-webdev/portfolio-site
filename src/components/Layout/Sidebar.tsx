import { useEffect, useState } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router';
import { GithubLogoIcon, LinkedinLogoIcon } from '@phosphor-icons/react';
import { palette } from '../../utils/useTheme';

const { accent, secondary } = palette;

const navItems = [
  { hash: '#about', label: 'About' },
  { hash: '#projects', label: 'Projects' },
  { hash: '#contact', label: 'Contact' },
];

const sectionIds = ['home', 'about', 'projects', 'contact'];

export function Sidebar() {
  const location = useLocation();
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-40% 0px -55% 0px' },
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [location.pathname]);

  function handleClick(e: React.MouseEvent<HTMLAnchorElement>, hash: string) {
    e.preventDefault();
    const id = hash.replace('#', '');

    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const target = document.getElementById(id);
        if (target) {
          window.history.pushState(null, '', hash);
          target.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      window.history.pushState(null, '', hash);
      const target = document.getElementById(id);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }

  function handleLogoClick(e: React.MouseEvent<HTMLAnchorElement>) {
    e.preventDefault();
    if (location.pathname !== '/') {
      navigate('/');
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function isActive(hash: string) {
    return activeSection === hash.replace('#', '');
  }

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
        onClick={handleLogoClick}
        className="font-mono font-bold text-lg no-underline"
        style={{ color: accent }}
      >
        Aash
      </NavLink>

      <nav className="hidden md:flex md:flex-col md:gap-6 md:mt-16 md:w-full">
        {navItems.map((item) => {
          const active = isActive(item.hash);
          return (
            <a
              key={item.hash}
              href={item.hash}
              onClick={(e) => handleClick(e, item.hash)}
              className="group font-mono text-sm transition-all duration-200 border-l-2 pl-3 -ml-3"
              style={{
                color: active ? accent : secondary,
                fontWeight: active ? 600 : 400,
                borderLeftColor: active ? accent : 'transparent',
              }}
            >
              {item.label}
            </a>
          );
        })}
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