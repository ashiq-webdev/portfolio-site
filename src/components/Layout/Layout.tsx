import { Outlet } from 'react-router';
import { Sidebar } from './Sidebar';

export function Layout() {
  return (
    <div className="flex min-h-dvh" data-testid="layout">
      <Sidebar />
      <main className="flex-1 px-6 py-10 md:px-24 md:py-20">
        <Outlet />
      </main>
    </div>
  );
}