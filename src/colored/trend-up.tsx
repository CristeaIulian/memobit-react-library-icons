import { palette } from './palette';

export const trendUp = (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em" height="1em">
        <path d="M3 17l6-6 4 3.5L21 6v14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1z" fill={palette.greenPale} />
        <path d="M3 17l6-6 4 3.5L20 7" fill="none" stroke={palette.green} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M21.5 4.5V10L16 4.5z" fill={palette.green} />
    </svg>
);
