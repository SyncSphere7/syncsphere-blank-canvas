/**
 * The SyncSphere mark: a condensed S on a murram tile whose rounded top matches
 * the cream "sheets" used across the site. Drawn as shapes, so it never depends
 * on a font. Keep these paths in sync with public/icon.svg and the brand kit.
 */
export const TILE_PATH = 'M6 22A16 16 0 0 1 22 6H42A16 16 0 0 1 58 22V58H6Z';
export const S_PATH =
  'M38.88 21.6C38.88 17.4 36 15.2 32 15.2C28 15.2 25.12 17.8 25.12 22.6C25.12 27.6 28.16 29.6 32 31.6C35.84 33.6 38.88 35.8 38.88 41.2C38.88 46.2 36 48.8 32 48.8C28 48.8 25.12 46.4 25.12 42.2';

export function LogoMark({ className = 'h-7 w-7' }: { className?: string }) {
  return (
    <svg viewBox="6 6 52 52" className={className} aria-hidden="true">
      <path d={TILE_PATH} fill="#D4582B" />
      <path d={S_PATH} fill="none" stroke="#1D130D" strokeWidth="7.4" strokeLinejoin="round" />
    </svg>
  );
}
