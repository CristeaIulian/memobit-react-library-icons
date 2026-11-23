import { palette } from './palette';

export const brain = (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em" height="1em">
        <path d="M11 18h2v3.2a1 1 0 0 1-2 0z" fill={palette.pinkDark} />
        <circle cx="8.6" cy="8.4" r="3.9" fill={palette.pink} />
        <circle cx="15.4" cy="8.4" r="3.9" fill={palette.pink} />
        <circle cx="7.2" cy="13.2" r="3.8" fill={palette.pink} />
        <circle cx="16.8" cy="13.2" r="3.8" fill={palette.pink} />
        <circle cx="12" cy="14.6" r="4.2" fill={palette.pink} />
        <circle cx="12" cy="7.2" r="3.6" fill={palette.pink} />
        <path
            d="M12 4v14.5M7.6 9.6c1.6 0 2.4 1 2.4 2.4M16.4 9.6c-1.6 0-2.4 1-2.4 2.4M6.6 15c1.4 0 2.4.8 2.6 2M17.4 15c-1.4 0-2.4.8-2.6 2"
            fill="none"
            stroke={palette.pinkDark}
            strokeWidth="1.3"
            strokeLinecap="round"
        />
        <circle cx="8" cy="6.8" r="1" fill={palette.pinkLight} />
    </svg>
);
