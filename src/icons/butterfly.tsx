export const butterfly = (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="1em" height="1em">
        {/* Left upper wing */}
        <path d="M12 12C10 10 6 8 3 9c-1 3 1 7 5 8l4-5z" />
        {/* Left lower wing */}
        <path d="M12 12l-3 5c2 2 6 2 7 0l-4-5z" />
        {/* Right upper wing */}
        <path d="M12 12c2-2 6-4 9-3 1 3-1 7-5 8l-4-5z" />
        {/* Right lower wing */}
        <path d="M12 12l3 5c-2 2-6 2-7 0l4-5z" />
        {/* Body */}
        <ellipse cx="12" cy="12" rx="1" ry="5" />
        {/* Antennae */}
        <path d="M11.5 7.5c-1-2-2-3-3-3M12.5 7.5c1-2 2-3 3-3" stroke="currentColor" strokeWidth="1" strokeLinecap="round" fill="none" />
        <circle cx="8.5" cy="4.5" r="0.7" />
        <circle cx="15.5" cy="4.5" r="0.7" />
        {/* Wing detail */}
        <circle cx="8" cy="11" r="1.2" fill="white" opacity="0.2" />
        <circle cx="16" cy="11" r="1.2" fill="white" opacity="0.2" />
    </svg>
);
