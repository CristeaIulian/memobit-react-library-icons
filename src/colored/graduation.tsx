import { palette } from './palette';

export const graduation = (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em" height="1em">
        <path d="M6 11v4.2c0 1.8 2.7 3.3 6 3.3s6-1.5 6-3.3V11l-6 2.9z" fill={palette.indigoDeep} />
        <path d="M12 3.5l10.5 5-10.5 5-10.5-5z" fill={palette.indigo} />
        <path d="M12 8.5l7.5 1.9V16" fill="none" stroke={palette.yellow} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M18.6 15.6h1.8l.4 3.2h-2.6z" fill={palette.yellow} />
        <circle cx="12" cy="8.5" r="1" fill={palette.yellow} />
    </svg>
);
