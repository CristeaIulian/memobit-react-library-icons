import { palette } from './palette';

export const balloon = (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em" height="1em">
        <path d="M12 18.4c-1.6 1.2 1.4 2.2 0 4" fill="none" stroke={palette.edge} strokeWidth="1" strokeLinecap="round" />
        <path d="M10.9 16.6h2.2l-1.1 1.8z" fill={palette.purpleDark} />
        <ellipse cx="12" cy="9.5" rx="6.2" ry="7.3" fill={palette.purple} />
        <ellipse cx="9.4" cy="7" rx="1.5" ry="2.5" transform="rotate(-25 9.4 7)" fill={palette.purpleLight} />
    </svg>
);
