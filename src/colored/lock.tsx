import { palette } from './palette';

export const lock = (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em" height="1em">
        <path d="M7.5 10.5v-3a4.5 4.5 0 0 1 9 0v3" fill="none" stroke={palette.steel} strokeWidth="2.4" />
        <rect x="4.5" y="10" width="15" height="11.5" rx="2.2" fill={palette.amber} />
        <rect x="4.5" y="10" width="15" height="2.4" rx="1.2" fill={palette.amberBright} />
        <circle cx="12" cy="15" r="1.6" fill={palette.amberDark} />
        <rect x="11.3" y="15.5" width="1.4" height="3" rx=".6" fill={palette.amberDark} />
    </svg>
);
