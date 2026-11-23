import { palette } from './palette';

export const shield = (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em" height="1em">
        <path d="M12 2.5l8 3v6c0 5-3.4 8.6-8 10.3-4.6-1.7-8-5.3-8-10.3v-6z" fill={palette.emerald} />
        <path d="M12 2.5l8 3v6c0 5-3.4 8.6-8 10.3z" fill={palette.emeraldDark} />
        <path d="M8.4 12l2.5 2.5 4.8-5" fill="none" stroke={palette.white} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);
