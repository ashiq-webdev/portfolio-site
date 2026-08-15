import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router';
import { ListIcon, XIcon } from '@phosphor-icons/react';
import { SocialIcons } from '../SocialIcons';
import { palette } from '../../utils/palette';

const { accent, body } = palette;

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

  function isActive(hash: string) {
    return activeSection === hash.replace('#', '');
  }

  const accentRgb = '56, 189, 248';

  return (
    <>
      {/* Desktop sidebar + mobile top bar */}
      <header
        data-testid="sidebar"
        className="fixed md:sticky top-0 left-0 right-0 md:h-dvh z-50
                   flex md:flex-col items-center md:items-start justify-between
                   bg-neutral-950/10 md:bg-transparent
                   backdrop-blur md:backdrop-blur-none
                   border-b md:border-b-0 border-neutral-800/50
                   px-6 py-4 md:py-24
                   md:w-64 md:min-w-64"
        style={{ color: palette.heading }}
      >
        <a
          href="/"
          className="no-underline transition-opacity duration-200"
          aria-label="Home"
          onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.8')}
          onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
        >
          <img
            src="/logo.png"
            alt="Home"
            width="28"
            height="28"
            className="w-7 h-7 md:w-8 md:h-8 rounded-lg"
          />
        </a>

        {/* Desktop nav links */}
        <nav className="hidden md:flex md:flex-col md:gap-2 md:mt-10 md:w-full">
          {navItems.map((item) => {
            const active = isActive(item.hash);
            return (
              <a
                key={item.hash}
                href={item.hash}
                onClick={(e) => handleClick(e, item.hash)}
                className="group font-mono text-sm transition-all duration-200
                           border-l-2 pl-3 -ml-3 py-2 pr-3 rounded-lg max-w-43"
                style={{
                  color: active ? accent : body,
                  fontWeight: active ? 600 : 400,
                  borderLeftColor: active ? accent : 'transparent',
                  backgroundColor: active ? `rgba(${accentRgb}, 0.2)` : 'transparent',
                }}
                onMouseEnter={(e) => {
                  if (!active) {
                    e.currentTarget.style.color = accent;
                    e.currentTarget.style.fontWeight = '500';
                    e.currentTarget.style.backgroundColor = `rgba(${accentRgb}, 0.06)`;
                  }
                }}
                onMouseLeave={(e) => {
                  if (!active) {
                    e.currentTarget.style.color = body;
                    e.currentTarget.style.fontWeight = '400';
                    e.currentTarget.style.backgroundColor = 'transparent';
                  }
                }}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Desktop social icons */}
        <div className="hidden md:flex md:items-center md:gap-5 md:mt-2">
          <SocialIcons size={22} />
        </div>

        {/* Mobile hamburger button */}
        <button
          type="button"
          onClick={onMenuToggle}
          className="md:hidden flex items-center justify-center transition-colors duration-200"
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
                  className="font-mono text-2xl transition-all duration-200"
                  style={{
                    color: active ? accent : body,
                    fontWeight: active ? 600 : 400,
                  }}
                >
                  {item.label}
                </a>
              );
            })}

            {/* Social icons at bottom of overlay */}
            <div className="flex items-center gap-8 mt-8">
              <SocialIcons size={28} />
            </div>
          </div>
        </div>
      )}
    </>
  );
}