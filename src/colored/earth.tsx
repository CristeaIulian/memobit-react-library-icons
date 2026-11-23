import { palette } from './palette';

export const earth = (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em" height="1em">
        <circle cx="12" cy="12" r="9.5" fill={palette.sky} />
        <path
            d="M6.5 7c1.5-1.5 4-1.6 4.6 0 .4 1-.6 1.6-1.6 2-.9.4-.7 1.6.2 2.2.9.6.6 2-.6 2.4-1.3.4-1.6 1.8-1.2 3C6 15.6 4.8 13.6 4.6 11.5c-.1-1.7.7-3.3 1.9-4.5z"
            fill={palette.green}
        />
        <path
            d="M14 4.2c1.6-.2 3.5.4 4.6 1.6-.6.9-1.8 1-2.8.8-1-.2-1.9.4-1.8 1.4.1 1 1.2 1.5 2.2 1.4 1.4-.1 2.6.7 2.6 2 0 1.4-1 2.2-1.6 3.2-.6 1-.4 2.4-1 3.4-.8 1.2-2.4 1-2.8-.4-.4-1.4.2-2.8-.4-4-.5-1-1.8-1.4-2-2.6-.2-1.4 1-2.6 1.4-3.8.3-.9.6-1.8 1.6-2z"
            fill={palette.green}
        />
        <path d="M5.6 8.4a8 8 0 0 1 3-3" fill="none" stroke={palette.skyLight} strokeWidth="1" strokeLinecap="round" />
    </svg>
);
