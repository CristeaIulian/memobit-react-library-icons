import { palette } from './palette';

export const lightBulb = (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em" height="1em">
        <path
            d="M12 2.5a7 7 0 0 0-4.2 12.6c.6.5 1 1.2 1 2v.9h6.4v-.9c0-.8.4-1.5 1-2A7 7 0 0 0 12 2.5z"
            fill={palette.yellow}
            stroke={palette.amber}
            strokeWidth=".6"
        />
        <path d="M8.6 8.6a3.6 3.6 0 0 1 3-3.1" fill="none" stroke={palette.white} strokeWidth="1.4" strokeLinecap="round" />
        <path d="M10.4 12l1.6 2 1.6-2" fill="none" stroke={palette.amberDark} strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="8.8" y="18" width="6.4" height="2.2" rx=".6" fill={palette.edge} />
        <rect x="9.6" y="20.2" width="4.8" height="1.6" rx=".8" fill={palette.steel} />
    </svg>
);
