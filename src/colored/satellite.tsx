import { palette } from './palette';

export const satellite = (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em" height="1em">
        <g transform="rotate(-30 12 12)">
            <path d="M12 8.5V5.5" fill="none" stroke={palette.edge} strokeWidth="1" />
            <circle cx="12" cy="5" r="1" fill={palette.edge} />
            <rect x="8.5" y="11.6" width="7" height=".8" fill={palette.edge} />
            <rect x="2" y="9.5" width="6.5" height="5" rx=".6" fill={palette.blue} />
            <rect x="15.5" y="9.5" width="6.5" height="5" rx=".6" fill={palette.blue} />
            <path d="M5.25 9.5v5M18.75 9.5v5M2 12h6.5M15.5 12H22" fill="none" stroke={palette.blueDark} strokeWidth=".8" />
            <path d="M10 15.5a2 2 0 0 0 4 0z" fill={palette.silver} />
            <rect x="9.5" y="8.5" width="5" height="7" rx="1" fill={palette.amber} />
        </g>
    </svg>
);
