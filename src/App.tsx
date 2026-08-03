import { Routes, Route } from 'react-router';
import { Layout } from './components/Layout/Layout';
import { HomePage } from './pages/HomePage';
import { ProjectsPage } from './pages/ProjectsPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { ProjectDetailPage } from './pages/ProjectDetailPage';
import { NotFoundPage } from './pages/NotFoundPage';
import { useTheme } from './utils/useTheme';

function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <Routes>
      <Route element={<Layout theme={theme} toggleTheme={toggleTheme} />}>
        <Route index element={<HomePage theme={theme} />} />
        <Route path="projects" element={<ProjectsPage theme={theme} />} />
        <Route path="projects/:slug" element={<ProjectDetailPage theme={theme} />} />
        <Route path="about" element={<AboutPage theme={theme} />} />
        <Route path="contact" element={<ContactPage theme={theme} />} />
        <Route path="*" element={<NotFoundPage theme={theme} />} />
      </Route>
    </Routes>
  );
}

export default App;