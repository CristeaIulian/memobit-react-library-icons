import { palette } from './palette';

export const shoppingCart = (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em" height="1em">
        <path d="M2 3.5h2.6L7 15h11" fill="none" stroke={palette.slate} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M5.6 6.5h14.9l-1.6 6.6a1 1 0 0 1-1 .8H7.4z" fill={palette.orange} />
        <path d="M10.5 7.5V13M15 7.5V13" fill="none" stroke={palette.orangeDark} strokeWidth="1" strokeLinecap="round" />
        <circle cx="8.5" cy="18.8" r="1.8" fill={palette.slate} />
        <circle cx="17" cy="18.8" r="1.8" fill={palette.slate} />
        <circle cx="8.5" cy="18.8" r=".7" fill={palette.silver} />
        <circle cx="17" cy="18.8" r=".7" fill={palette.silver} />
    </svg>
);
