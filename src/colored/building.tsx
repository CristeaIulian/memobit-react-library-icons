import { palette } from './palette';

export const building = (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em" height="1em">
        <rect x="15" y="9" width="4.5" height="12.5" rx=".8" fill={palette.skyDark} />
        <rect x="5" y="3" width="10" height="18.5" rx="1" fill={palette.sky} />
        <path
            d="M7.2 5.5h2v2h-2zM10.8 5.5h2v2h-2zM7.2 9h2v2h-2zM10.8 9h2v2h-2zM7.2 12.5h2v2h-2zM10.8 12.5h2v2h-2zM16.4 11.5h1.8v1.8h-1.8zM16.4 15h1.8v1.8h-1.8z"
            fill={palette.skyLight}
        />
        <rect x="8.5" y="17" width="3" height="4.5" rx=".5" fill={palette.navy} />
        <rect x="3" y="21" width="18" height="1.5" rx=".75" fill={palette.edge} />
    </svg>
);
