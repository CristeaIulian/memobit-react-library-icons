import { palette } from './palette';

export const creditCard = (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em" height="1em">
        <rect x="4.5" y="4" width="17" height="11.5" rx="1.8" fill={palette.amber} />
        <rect x="2.5" y="8" width="17" height="11.5" rx="1.8" fill={palette.cyan} />
        <rect x="2.5" y="10.5" width="17" height="2.4" fill={palette.cyanDark} />
        <rect x="5" y="14.5" width="3.4" height="2.6" rx=".6" fill={palette.yellow} />
        <rect x="11" y="15.2" width="6" height="1.2" rx=".6" fill={palette.cyanLight} />
    </svg>
);
