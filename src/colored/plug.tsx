import { palette } from './palette';

export const plug = (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em" height="1em">
        <path d="M12 17v3a2 2 0 0 1-2 2H8" fill="none" stroke={palette.slate} strokeWidth="2" strokeLinecap="round" />
        <rect x="8.5" y="2.5" width="2" height="5" rx=".8" fill={palette.edge} />
        <rect x="13.5" y="2.5" width="2" height="5" rx=".8" fill={palette.edge} />
        <path d="M6 7h12v4a6 6 0 0 1-12 0z" fill={palette.orange} />
        <rect x="8" y="8.5" width="8" height="1.5" rx=".75" fill={palette.orangeLight} />
    </svg>
);
