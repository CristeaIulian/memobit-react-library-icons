import { palette } from './palette';

export const antenna = (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em" height="1em">
        <path d="M8.5 4.8a5 5 0 0 0 0 6.4M15.5 4.8a5 5 0 0 1 0 6.4" fill="none" stroke={palette.teal} strokeWidth="1.8" strokeLinecap="round" />
        <path d="M5.4 2.4a8.6 8.6 0 0 0 0 11.2M18.6 2.4a8.6 8.6 0 0 1 0 11.2" fill="none" stroke={palette.cyan} strokeWidth="1.8" strokeLinecap="round" />
        <path d="M12 10.5L7.5 21.5h2.4L12 15.6l2.1 5.9h2.4z" fill={palette.slate} />
        <circle cx="12" cy="8" r="2.2" fill={palette.red} />
        <circle cx="11.3" cy="7.3" r=".7" fill={palette.redLight} />
    </svg>
);
