import { palette } from './palette';

export const plane = (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em" height="1em">
        <g transform="rotate(45 12 12)">
            <path d="M12 9l9 5v2l-9-3-9 3v-2z" fill={palette.sky} />
            <path d="M12 18l4 2.5v1.2l-4-1.1-4 1.1v-1.2z" fill={palette.sky} />
            <rect x="10.6" y="2" width="2.8" height="19" rx="1.4" fill={palette.white} stroke={palette.edge} strokeWidth=".8" />
            <rect x="11.2" y="3.8" width="1.6" height="1.6" rx=".6" fill={palette.skyDark} />
        </g>
    </svg>
);
