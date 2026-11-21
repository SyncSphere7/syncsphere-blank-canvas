/** The SyncSphere mark: a sphere, its horizon line and a murram core. */
export function LogoMark({ className = 'h-6 w-6' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="10.75" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <path d="M1.25 12h21.5" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="12" cy="12" r="4.25" fill="#D4582B" />
    </svg>
  );
}
