import { SocialIcons } from '../SocialIcons';

export function Footer() {
  return (
    /* Footer */
    <footer
      className="pt-10 pb-4 flex flex-col items-center gap-4 text-center"
      data-testid="footer"
    >
      <p className="font-mono text-sm text-body">
        Built with React, TypeScript and Tailwind CSS.
      </p>
      <p className="font-mono text-sm text-body">
        Built by Ashiq A. <span className="text-base">©</span> 2026
      </p>
      <div className="flex items-center gap-5 mt-2 md:hidden">
        <SocialIcons size={22} />
      </div>
    </footer>
  );
}