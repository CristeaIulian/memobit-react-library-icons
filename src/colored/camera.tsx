import { palette } from './palette';

export const camera = (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em" height="1em">
        <path d="M8 7l1.4-2.6a1 1 0 0 1 .9-.5h3.4a1 1 0 0 1 .9.5L16 7z" fill={palette.indigoDeep} />
        <rect x="2.5" y="7" width="19" height="13.5" rx="2.5" fill={palette.indigo} />
        <circle cx="12" cy="13.6" r="4.6" fill={palette.white} stroke={palette.edge} strokeWidth=".8" />
        <circle cx="12" cy="13.6" r="3.3" fill={palette.ink} />
        <circle cx="12" cy="13.6" r="2.1" fill={palette.sky} />
        <circle cx="11" cy="12.6" r=".7" fill={palette.white} />
        <rect x="17" y="9" width="2.6" height="1.6" rx=".5" fill={palette.yellow} />
    </svg>
);
