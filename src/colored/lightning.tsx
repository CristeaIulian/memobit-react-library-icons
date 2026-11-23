import { palette } from './palette';

export const lightning = (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em" height="1em">
        <path d="M13.5 2L5 13.5h6L9.5 22l9-12.5h-6.2z" fill={palette.yellow} stroke={palette.amberDark} strokeWidth=".6" strokeLinejoin="round" />
        <path d="M12.3 9.5h6.2L9.5 22z" fill={palette.amber} />
    </svg>
);
