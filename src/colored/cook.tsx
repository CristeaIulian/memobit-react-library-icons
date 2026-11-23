import { palette } from './palette';

export const cook = (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em" height="1em">
        <path
            d="M7 15.6v-3A3.6 3.6 0 0 1 8.2 5.9a4.5 4.5 0 0 1 7.6 0 3.6 3.6 0 0 1 1.2 6.7v3z"
            fill={palette.white}
            stroke={palette.edge}
            strokeWidth=".8"
            strokeLinejoin="round"
        />
        <path d="M10 11.2v3.6M14 11.2v3.6" fill="none" stroke={palette.silver} strokeWidth="1" strokeLinecap="round" />
        <rect x="6.6" y="15.6" width="10.8" height="4.4" rx="1.2" fill={palette.orange} />
        <path d="M6.6 17.4h10.8" fill="none" stroke={palette.orangeDark} strokeWidth=".8" />
    </svg>
);
