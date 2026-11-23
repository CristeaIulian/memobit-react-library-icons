import { palette } from './palette';

export const wait = (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em" height="1em">
        <path
            d="M7 4.7h10v1.8c0 2.6-2 4.2-3.6 5.5 1.6 1.3 3.6 2.9 3.6 5.5v1.8H7v-1.8c0-2.6 2-4.2 3.6-5.5C9 10.7 7 9.1 7 6.5z"
            fill={palette.white}
            stroke={palette.edge}
            strokeWidth=".8"
            strokeLinejoin="round"
        />
        <path d="M8.8 7.2h6.4c-.5 1.5-1.8 2.6-3.2 3.6-1.4-1-2.7-2.1-3.2-3.6z" fill={palette.amber} />
        <rect x="11.6" y="11" width=".8" height="4.5" fill={palette.amber} />
        <path d="M8.6 18.9c.4-2 1.8-3.2 3.4-3.6 1.6.4 3 1.6 3.4 3.6z" fill={palette.amber} />
        <rect x="5" y="2.5" width="14" height="2.2" rx="1" fill={palette.amberDark} />
        <rect x="5" y="19.3" width="14" height="2.2" rx="1" fill={palette.amberDark} />
    </svg>
);
