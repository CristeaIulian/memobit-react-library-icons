import { palette } from './palette';

export const search = (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em" height="1em">
        <path d="M15.2 15.2l5.3 5.3" fill="none" stroke={palette.slate} strokeWidth="3.2" strokeLinecap="round" />
        <circle cx="10" cy="10" r="6.4" fill={palette.skyLight} stroke={palette.sky} strokeWidth="2.4" />
        <path d="M7 8.6a3.4 3.4 0 0 1 2.4-2.4" fill="none" stroke={palette.white} strokeWidth="1.4" strokeLinecap="round" />
    </svg>
);
