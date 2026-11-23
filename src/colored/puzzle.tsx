import { palette } from './palette';

export const puzzle = (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em" height="1em">
        <path
            d="M4 7h4.5a2.5 2.5 0 1 1 5 0H17v3.5a2.5 2.5 0 1 1 0 5V20H4v-4.5a2.5 2.5 0 1 0 0-5z"
            fill={palette.lime}
            stroke={palette.limeDark}
            strokeWidth=".8"
            strokeLinejoin="round"
        />
        <circle cx="8" cy="11" r="1" fill={palette.greenPale} />
    </svg>
);
