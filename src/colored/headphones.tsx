import { palette } from './palette';

export const headphones = (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em" height="1em">
        <path d="M4 14v-2a8 8 0 0 1 16 0v2" fill="none" stroke={palette.steel} strokeWidth="2.2" strokeLinecap="round" />
        <rect x="2.5" y="13" width="5" height="8" rx="2" fill={palette.violet} />
        <rect x="16.5" y="13" width="5" height="8" rx="2" fill={palette.violet} />
        <rect x="5.5" y="14.5" width="2" height="5" rx="1" fill={palette.violetLight} />
        <rect x="16.5" y="14.5" width="2" height="5" rx="1" fill={palette.violetLight} />
    </svg>
);
