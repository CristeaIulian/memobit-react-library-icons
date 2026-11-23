import { palette } from './palette';

export const folder = (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em" height="1em">
        <path d="M2.5 6A1.5 1.5 0 0 1 4 4.5h5l2 2h9A1.5 1.5 0 0 1 21.5 8v10.5A1.5 1.5 0 0 1 20 20H4a1.5 1.5 0 0 1-1.5-1.5z" fill={palette.amber} />
        <rect x="5" y="7.5" width="14" height="6" rx=".8" fill={palette.white} stroke={palette.edge} strokeWidth=".8" />
        <path d="M2.5 10.5A1.5 1.5 0 0 1 4 9h16a1.5 1.5 0 0 1 1.5 1.5v8A1.5 1.5 0 0 1 20 20H4a1.5 1.5 0 0 1-1.5-1.5z" fill={palette.amberBright} />
    </svg>
);
