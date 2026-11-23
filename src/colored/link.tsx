import { palette } from './palette';

export const link = (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em" height="1em">
        <g transform="rotate(-45 12 12)">
            <rect x="2.5" y="8.5" width="11" height="7" rx="3.5" fill="none" stroke={palette.blue} strokeWidth="2.4" />
            <rect x="10.5" y="8.5" width="11" height="7" rx="3.5" fill="none" stroke={palette.sky} strokeWidth="2.4" />
        </g>
    </svg>
);
