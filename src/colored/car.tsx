import { palette } from './palette';

export const car = (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em" height="1em">
        <rect x="4.6" y="16" width="3.2" height="4.4" rx="1.1" fill={palette.ink} />
        <rect x="16.2" y="16" width="3.2" height="4.4" rx="1.1" fill={palette.ink} />
        <path d="M5.2 10.8l1.7-4.6a2 2 0 0 1 1.9-1.3h6.4a2 2 0 0 1 1.9 1.3l1.7 4.6z" fill={palette.blueDark} />
        <rect x="3" y="10.4" width="18" height="7" rx="2.2" fill={palette.blue} />
        <path d="M7 10.4l1.2-3.4a1 1 0 0 1 .95-.7h5.7a1 1 0 0 1 .95.7l1.2 3.4z" fill={palette.skyLight} />
        <circle cx="6.6" cy="13.9" r="1.5" fill={palette.yellow} />
        <circle cx="17.4" cy="13.9" r="1.5" fill={palette.yellow} />
        <rect x="9.6" y="13.1" width="4.8" height="1.6" rx=".8" fill={palette.navy} />
    </svg>
);
