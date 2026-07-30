type SkillBadgeProps = {
  label: string;
};

export function SkillBadge({ label }: SkillBadgeProps) {
  return (
    <span
      data-testid="skill-badge"
      className="inline-block font-mono text-xs px-2 py-1 rounded border border-slate-700 text-slate-400"
    >
      {label}
    </span>
  );
}