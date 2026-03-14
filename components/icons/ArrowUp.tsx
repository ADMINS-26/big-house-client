export default function ArrowUp({ size = 60 }: { size?: number }) {
  return (
    <svg width={size} height={size} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <line x1="12" y1="20" x2="12" y2="4" strokeWidth={1.2} strokeLinecap="round" />
      <polyline points="6,10 12,4 18,10" strokeWidth={1.2} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
