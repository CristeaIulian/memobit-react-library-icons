import { palette } from './palette';

export const document = (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em" height="1em">
        <path
            d="M6 2.5h8.5L19 7v13.5a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-17a1 1 0 0 1 1-1z"
            fill={palette.white}
            stroke={palette.edge}
            strokeWidth=".8"
            strokeLinejoin="round"
        />
        <path d="M14.5 2.5V6a1 1 0 0 0 1 1H19" fill={palette.mist} stroke={palette.edge} strokeWidth=".8" strokeLinejoin="round" />
        <circle cx="9.2" cy="9" r="1.9" fill={palette.blue} />
        <path d="M6.6 13.2a2.6 2.6 0 0 1 5.2 0z" fill={palette.blue} />
        <rect x="13" y="8" width="3.8" height="1.3" rx=".65" fill={palette.blueLight} />
        <rect x="13" y="10.6" width="3.8" height="1.3" rx=".65" fill={palette.blueLight} />
        <rect x="7" y="15.5" width="10" height="1.3" rx=".65" fill={palette.silver} />
        <rect x="7" y="18" width="7.5" height="1.3" rx=".65" fill={palette.silver} />
    </svg>
);
