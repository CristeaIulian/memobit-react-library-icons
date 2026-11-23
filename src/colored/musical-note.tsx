import { palette } from './palette';

export const musicalNote = (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em" height="1em">
        <path d="M9 6.5L20 4v3L9 9.5z" fill={palette.fuchsiaDark} />
        <rect x="8.2" y="7" width="1.8" height="10.5" fill={palette.fuchsiaDark} />
        <rect x="18.2" y="4.5" width="1.8" height="10.5" fill={palette.fuchsiaDark} />
        <ellipse cx="6.8" cy="17.6" rx="3" ry="2.4" transform="rotate(-20 6.8 17.6)" fill={palette.fuchsia} />
        <ellipse cx="16.8" cy="15.1" rx="3" ry="2.4" transform="rotate(-20 16.8 15.1)" fill={palette.fuchsia} />
    </svg>
);
