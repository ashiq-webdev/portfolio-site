export type Project = {
  slug: string;
  title: string;
  description: string;
  overview: string[];
  tech: string[];
  features: string[];
  lessons: string[];
  githubUrl: string;
  liveUrl: string | null;
};

export const projects: Project[] = [
  {
    slug: 'portfolio-site',
    title: 'Personal Portfolio Site',
    description: 'The single-page scroll site you are looking at right now.',
    overview: [
      'This is the site you are looking at right now.',
      'The page uses a single-page scroll layout with a left sidebar on desktop and a hamburger menu on mobile. Navigation updates the URL hash so sections are shareable.',
      'I chose a dark-only theme with a sky-blue accent. The color palette uses Tailwind slate scale for text and sky-400 for the accent.',
    ],
    tech: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'React Router'],
    features: [
      'Single-page scroll with hash anchor navigation',
      'Sidebar with scroll-spy that highlights the active section as you scroll',
      'Mobile hamburger menu with 75% width overlay and click-outside-to-close',
      'Project detail pages with dynamic routes',
      'Responsive layout tested across mobile and desktop breakpoints',
    ],
    lessons: [
      'React Router v8 does not handle hash fragments for scrolling by default. I used pushState plus scrollIntoView to update the URL and smooth-scroll to the target section. The IntersectionObserver watches section visibility and highlights the active nav link.',
      'The biggest surprise was Tailwind v4 CSS layer system. A manual reset written outside Tailwind layers silently overrode all padding and margin utilities. Removing it and trusting Tailwind built-in Preflight fixed every layout bug at once.',
    ],
    githubUrl: 'https://github.com/ashiq-webdev/portfolio-site',
    liveUrl: 'https://netlify.com',
  },
  {
    slug: 'prayer-times-ae',
    title: 'UAE Prayer Times App',
    description: 'Prayer times with Hijri dates and Qibla direction for UAE cities.',
    overview: [],
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'Aladhan API'],
    features: [],
    lessons: [],
    githubUrl: 'https://github.com/ashiq-webdev/prayer-times-uae',
    liveUrl: null,
  },
  {
    slug: 'dewa-bill-estimator',
    title: 'DEWA Bill Estimator',
    description: 'Estimate monthly electricity and water bills with UAE VAT applied.',
    overview: [],
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'React Hook Form', 'Zod', 'Recharts'],
    features: [],
    lessons: [],
    githubUrl: 'https://github.com/ashiq-webdev/dewa-bill-estimator',
    liveUrl: null,
  },
];