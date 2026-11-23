import { palette } from './palette';

export const home = (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em" height="1em">
        <rect x="15.5" y="4.5" width="2.4" height="5" rx=".4" fill={palette.redDark} />
        <rect x="5" y="10.5" width="14" height="10.5" rx="1" fill={palette.cream} stroke={palette.edge} strokeWidth=".8" />
        <path d="M2.5 11.5L12 3.5l9.5 8a1 1 0 0 1-1.3 1.5L12 6.2 3.8 13a1 1 0 0 1-1.3-1.5z" fill={palette.redDeep} />
        <rect x="10.3" y="14.5" width="3.4" height="6.5" rx=".6" fill={palette.amberDark} />
        <rect x="6.5" y="13" width="2.6" height="2.6" rx=".4" fill={palette.sky} />
        <rect x="14.9" y="13" width="2.6" height="2.6" rx=".4" fill={palette.sky} />
    </svg>
);
