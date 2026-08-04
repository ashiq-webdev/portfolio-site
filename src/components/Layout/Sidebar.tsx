import { useEffect, useState } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router';
import { GithubLogoIcon, LinkedinLogoIcon, ListIcon, XIcon } from '@phosphor-icons/react';
import { palette } from '../../utils/useTheme';

const { accent, secondary } = palette;

const navItems = [
  { hash: '#about', label: 'About' },
  { hash: '#projects', label: 'Projects' },
  { hash: '#contact', label: 'Contact' },
];

const sectionIds = ['home', 'about', 'projects', 'contact'];

type SidebarProps = {
  isMenuOpen: boolean;
  onMenuToggle: () => void;
};

export function Sidebar({ isMenuOpen, onMenuToggle }: SidebarProps) {
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
    if (isMenuOpen) onMenuToggle();

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
    if (isMenuOpen) onMenuToggle();
    if (location.pathname !== '/') {
      navigate('/');
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function isActive(hash: string) {
    return activeSection === hash.replace('#', '');
  }

  return (
    <>
      {/* Desktop sidebar + mobile top bar */}
      <header
        data-testid="sidebar"
        className="fixed md:sticky top-0 left-0 right-0 md:h-dvh z-50
                   flex md:flex-col items-center md:items-start justify-between
                   bg-neutral-950/10 md:bg-transparent backdrop-blur md:backdrop-blur-none
                   border-b md:border-b-0 md:border-r border-neutral-800/50
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

        {/* Desktop nav links */}
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

        {/* Desktop social icons */}
        <div className="hidden md:flex md:items-center md:gap-5">
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
            <GithubLogoIcon size={22} weight="regular" />
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
            <LinkedinLogoIcon size={22} weight="regular" />
          </a>
        </div>

        {/* Mobile hamburger button */}
        <button
          type="button"
          onClick={onMenuToggle}
          className="md:hidden flex items-center justify-center"
          style={{ color: accent }}
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <XIcon size={24} weight="regular" /> : <ListIcon size={24} weight="regular" />}
        </button>
      </header>

      {/* Mobile menu: click-outside layer + 75%-width overlay */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 z-40" data-testid="mobile-menu-wrapper">
          {/* Left 25% — click to close */}
          <div
            className="absolute inset-y-0 left-0 w-1/4"
            onClick={onMenuToggle}
            aria-hidden="true"
          />

          {/* Right 75% — menu panel */}
          <div
            className="absolute inset-y-0 right-0 w-3/4
                       backdrop-blur-xl
                       flex flex-col items-center justify-center gap-8
                       border-l border-neutral-800"
            data-testid="mobile-menu"
            style={{ background: 'linear-gradient(180deg, rgba(15, 23, 42, 0.98) 0%, rgba(10, 10, 10, 0.98) 100%)' }}
          >
            {navItems.map((item) => {
              const active = isActive(item.hash);
              return (
                <a
                  key={item.hash}
                  href={item.hash}
                  onClick={(e) => handleClick(e, item.hash)}
                  className="font-mono text-2xl transition-all"
                  style={{
                    color: active ? accent : secondary,
                    fontWeight: active ? 600 : 400,
                  }}
                >
                  {item.label}
                </a>
              );
            })}

            {/* Social icons at bottom of overlay */}
            <div className="flex items-center gap-8 mt-8">
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
                <GithubLogoIcon size={28} weight="regular" />
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
                <LinkedinLogoIcon size={28} weight="regular" />
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}