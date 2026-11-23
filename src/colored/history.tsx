import { palette } from './palette';

export const history = (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em" height="1em">
        <circle cx="12.5" cy="12" r="6.3" fill={palette.white} stroke={palette.edge} strokeWidth=".8" />
        <path d="M6.7 6.2a8.2 8.2 0 1 1-2.4 5.8" fill="none" stroke={palette.teal} strokeWidth="2" strokeLinecap="round" />
        <path d="M1.8 10.4h5l-2.5 3.4z" fill={palette.teal} />
        <path d="M12.5 8.4V12l2.6 1.8" fill="none" stroke={palette.ink} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);
