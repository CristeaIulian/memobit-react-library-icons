import { palette } from './palette';

export const book = (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em" height="1em">
        <path d="M7 5h11.5a1 1 0 0 1 1 1v14.5a1 1 0 0 1-1 1H7z" fill={palette.white} stroke={palette.edge} strokeWidth=".8" />
        <rect x="4.5" y="2.5" width="13.5" height="17.5" rx="1.5" fill={palette.ochre} />
        <rect x="4.5" y="2.5" width="3" height="17.5" rx="1.2" fill={palette.amberDark} />
        <rect x="9.5" y="6.5" width="6" height="3" rx=".6" fill={palette.cream} />
        <path d="M14.2 20v3l1.1-1 1.1 1v-3z" fill={palette.red} />
    </svg>
);
