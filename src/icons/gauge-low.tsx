export const gaugeLow = (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="1em" height="1em">
        {/* Segment 1 — filled */}
        <path d="M3 15 A9 9 0 0 1 4.37 10.23" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
        {/* Segments 2–5 — empty (dimmed) */}
        <path d="M4.72 9.71 A9 9 0 0 1 8.63 6.66" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" opacity="0.2" />
        <path d="M9.22 6.44 A9 9 0 0 1 14.18 6.27" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" opacity="0.2" />
        <path d="M14.78 6.44 A9 9 0 0 1 18.89 9.21" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" opacity="0.2" />
        <path d="M19.28 9.71 A9 9 0 0 1 20.98 14.37" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" opacity="0.2" />
        {/* Needle — pointing upper-left */}
        <path d="M12 15 L5.07 11" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" fill="none" />
        <circle cx="12" cy="15" r="1.8" />
    </svg>
);
