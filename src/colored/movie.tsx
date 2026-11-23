import { palette } from './palette';

export const movie = (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em" height="1em">
        <rect x="2.5" y="9" width="19" height="12" rx="2" fill={palette.violet} />
        <path d="M10.2 12.4v5.2l4.4-2.6z" fill={palette.white} />
        <g transform="rotate(-9 3 8)">
            <rect x="2.5" y="4" width="19" height="4" rx="1" fill={palette.white} stroke={palette.indigoDark} strokeWidth=".8" />
            <path d="M5.5 4h3l-2 4h-3zM11.5 4h3l-2 4h-3zM17.5 4h3l-2 4h-3z" fill={palette.indigoDark} />
        </g>
    </svg>
);
