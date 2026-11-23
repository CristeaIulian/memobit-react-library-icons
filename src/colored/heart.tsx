import { palette } from './palette';

export const heart = (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em" height="1em">
        <path
            d="M12 21C5.5 16.4 2.5 12.8 2.5 8.9c0-3 2.3-5.3 5.1-5.3 1.8 0 3.4.9 4.4 2.4 1-1.5 2.6-2.4 4.4-2.4 2.8 0 5.1 2.3 5.1 5.3 0 3.9-3 7.5-9.5 12.1z"
            fill={palette.red}
        />
        <path
            d="M4.5 11.5H8l1.5-2.6 2.2 5.2 1.6-3.4 1.2.8h5"
            fill="none"
            stroke={palette.white}
            strokeWidth="1.4"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);
