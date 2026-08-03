import { Outlet } from 'react-router';
import { Sidebar } from './Sidebar';

type LayoutProps = {
  theme: string;
  toggleTheme: () => void;
};

export function Layout({ theme, toggleTheme }: LayoutProps) {
  return (
    <div className="flex min-h-dvh" data-testid="layout">
      <Sidebar theme={theme} onToggleTheme={toggleTheme} />
      <main className="flex-1 px-6 py-10 md:px-24 md:py-20 max-w-5xl">
        <Outlet />
      </main>
    </div>
  );
}