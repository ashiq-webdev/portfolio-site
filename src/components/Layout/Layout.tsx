import { Outlet } from 'react-router';
import { Sidebar } from './Sidebar';
import { useTheme } from '../../utils/useTheme';

export function Layout() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="flex min-h-screen" data-testid="layout">
      <Sidebar theme={theme} onToggleTheme={toggleTheme} />
      <main className="flex-1 px-6 py-8 md:px-16 md:py-16 max-w-4xl overflow-hidden">
        <Outlet />
      </main>
    </div>
  );
}