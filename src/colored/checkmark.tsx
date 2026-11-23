import { palette } from './palette';

export const checkmark = (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em" height="1em">
        <circle cx="12" cy="12" r="10" fill={palette.emerald} />
        <path d="M7.2 12.4l3.2 3.2 6.4-6.8" fill="none" stroke={palette.white} strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);
