import { palette } from './palette';

export const grid = (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em" height="1em">
        <rect x="3" y="3" width="8" height="8" rx="2" fill={palette.blue} />
        <rect x="13" y="3" width="8" height="8" rx="2" fill={palette.sky} />
        <rect x="3" y="13" width="8" height="8" rx="2" fill={palette.indigo} />
        <rect x="13" y="13" width="8" height="8" rx="2" fill={palette.violet} />
    </svg>
);
