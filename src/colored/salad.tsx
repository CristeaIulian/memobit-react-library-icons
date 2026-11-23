import { palette } from './palette';

export const salad = (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em" height="1em">
        <circle cx="7" cy="9.5" r="3.6" fill={palette.greenDark} />
        <circle cx="12.2" cy="7.6" r="4.2" fill={palette.greenLight} />
        <circle cx="17.2" cy="9.6" r="3.4" fill={palette.green} />
        <circle cx="9.6" cy="10.4" r="2.2" fill={palette.red} />
        <circle cx="9.6" cy="10.4" r="1" fill={palette.redLight} />
        <circle cx="15" cy="10.8" r="1.8" fill={palette.amber} />
        <path d="M2.2 11.5h19.6c0 4.7-4.1 8.3-9.8 8.3s-9.8-3.6-9.8-8.3z" fill={palette.white} stroke={palette.edge} strokeWidth=".8" />
        <path d="M4.1 15.2h15.8" fill="none" stroke={palette.sky} strokeWidth="1.2" strokeLinecap="round" />
        <rect x="9" y="19.6" width="6" height="1.6" rx=".8" fill={palette.edge} />
    </svg>
);
