import { palette } from './palette';

export const stethoscope = (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em" height="1em">
        <path
            d="M6 3.4V8a5 5 0 0 0 10 0V3.4M11 13v3a4 4 0 0 0 8 0v-1.8"
            fill="none"
            stroke={palette.rose}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <circle cx="6" cy="3" r="1.4" fill={palette.edge} />
        <circle cx="16" cy="3" r="1.4" fill={palette.edge} />
        <circle cx="19" cy="11.6" r="2.7" fill={palette.mist} stroke={palette.edge} strokeWidth=".8" />
        <circle cx="19" cy="11.6" r="1.2" fill={palette.steel} />
    </svg>
);
