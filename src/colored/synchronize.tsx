import { palette } from './palette';

export const synchronize = (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em" height="1em">
        <path d="M4.5 12a7.5 7.5 0 0 1 12.8-5.3" fill="none" stroke={palette.blue} strokeWidth="2.4" strokeLinecap="round" />
        <path d="M18.7 8.1l-.2-3.4-3.2 3.2z" fill={palette.blue} stroke={palette.blue} strokeWidth="1" strokeLinejoin="round" />
        <path d="M19.5 12a7.5 7.5 0 0 1-12.8 5.3" fill="none" stroke={palette.sky} strokeWidth="2.4" strokeLinecap="round" />
        <path d="M5.3 15.9l.2 3.4 3.2-3.2z" fill={palette.sky} stroke={palette.sky} strokeWidth="1" strokeLinejoin="round" />
    </svg>
);
