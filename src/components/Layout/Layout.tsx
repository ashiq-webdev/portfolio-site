import { useState } from 'react';
import { Outlet } from 'react-router';
import { Sidebar } from './Sidebar';
import { Footer } from '../Home/Footer';

export function Layout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="flex min-h-dvh" data-testid="layout">
      <Sidebar
        isMenuOpen={isMenuOpen}
        onMenuToggle={() => setIsMenuOpen((prev) => !prev)}
      />
      <main
        className={`flex-1 flex flex-col px-6 py-10 md:px-24 md:py-10 transition-all duration-300 ${
          isMenuOpen ? 'blur-sm pointer-events-none' : ''
        }`}
      >
        <div className="grow">
          <Outlet />
        </div>
        <Footer />
      </main>
    </div>
  );
}