import { palette } from './palette';

export const map = (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em" height="1em">
        <path d="M2.5 5.5l6-2v15l-6 2z" fill={palette.greenLight} />
        <path d="M8.5 3.5l7 2v15l-7-2z" fill={palette.greenPale} />
        <path d="M15.5 5.5l6-2v15l-6 2z" fill={palette.greenLight} />
        <path d="M2.5 14c3-1 4.5 1 7 0s4-2.5 6.5-1.5 3.5 1 5.5-.5" fill="none" stroke={palette.sky} strokeWidth="1.4" strokeLinecap="round" />
        <path d="M15 6.5a2.8 2.8 0 0 0-2.8 2.8c0 2.1 2.8 4.7 2.8 4.7s2.8-2.6 2.8-4.7A2.8 2.8 0 0 0 15 6.5z" fill={palette.red} />
        <circle cx="15" cy="9.3" r="1" fill={palette.white} />
    </svg>
);
