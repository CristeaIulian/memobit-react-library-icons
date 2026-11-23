import { palette } from './palette';

export const robot = (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em" height="1em">
        <path d="M12 2.8V6" fill="none" stroke={palette.edge} strokeWidth="1.4" />
        <circle cx="12" cy="2.5" r="1.3" fill={palette.red} />
        <path d="M8 18h8v2.5a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1z" fill={palette.cyan} />
        <rect x="2.5" y="10" width="2" height="4.5" rx="1" fill={palette.edge} />
        <rect x="19.5" y="10" width="2" height="4.5" rx="1" fill={palette.edge} />
        <rect x="4.5" y="6" width="15" height="12" rx="3" fill={palette.silver} stroke={palette.edge} strokeWidth=".8" />
        <rect x="6.8" y="8.5" width="10.4" height="6" rx="2" fill={palette.ink} />
        <circle cx="9.6" cy="11.5" r="1.4" fill={palette.cyanLight} />
        <circle cx="14.4" cy="11.5" r="1.4" fill={palette.cyanLight} />
        <rect x="9.5" y="15.6" width="5" height="1.2" rx=".6" fill={palette.steel} />
    </svg>
);
