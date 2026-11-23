import { palette } from './palette';

export const image = (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em" height="1em">
        <rect x="2.5" y="4" width="19" height="16" rx="2" fill={palette.skyLight} />
        <circle cx="16.5" cy="8.8" r="2" fill={palette.yellow} />
        <path d="M9.5 20l6-7.5 6 5.5a2 2 0 0 1-2 2z" fill={palette.greenDark} />
        <path d="M2.5 16.5l6-6.5 6.5 10H4.5a2 2 0 0 1-2-2z" fill={palette.green} />
    </svg>
);
