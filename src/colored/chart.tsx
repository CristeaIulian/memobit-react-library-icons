import { palette } from './palette';

export const chart = (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em" height="1em">
        <rect x="4" y="13" width="3.6" height="7.5" rx="1" fill={palette.teal} />
        <rect x="10.2" y="9" width="3.6" height="11.5" rx="1" fill={palette.emerald} />
        <rect x="16.4" y="4.5" width="3.6" height="16" rx="1" fill={palette.green} />
        <rect x="2.5" y="20" width="19" height="1.6" rx=".8" fill={palette.edge} />
    </svg>
);
