import { palette } from './palette';

export const joystick = (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em" height="1em">
        <rect x="11" y="8.5" width="2" height="7.5" rx="1" fill={palette.steel} />
        <path d="M4 17.5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2V20a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 4 20z" fill={palette.slate} />
        <circle cx="16.5" cy="18.5" r="1.2" fill={palette.yellow} />
        <circle cx="12" cy="7" r="4" fill={palette.red} />
        <circle cx="10.7" cy="5.7" r="1.2" fill={palette.redLight} />
    </svg>
);
