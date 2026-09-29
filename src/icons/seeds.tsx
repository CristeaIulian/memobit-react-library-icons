export const seeds = (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="1em" height="1em">
        {/* Left seed — tilted teardrop */}
        <ellipse cx="8" cy="15" rx="3" ry="4.5" transform="rotate(-30 8 15)" />
        {/* Right seed — tilted teardrop other way */}
        <ellipse cx="16" cy="15" rx="3" ry="4.5" transform="rotate(30 16 15)" />
        {/* Sprout stem */}
        <path d="M12 14v-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill="none" />
        {/* Sprout leaves */}
        <path d="M12 11c0 0-1-3-4-3 0 3 2 4 4 3z" />
        <path d="M12 9c0 0 1-3 4-3 0 3-2 4-4 3z" />
        {/* Seed shine */}
        <ellipse cx="6.8" cy="13.5" rx="0.8" ry="1.2" transform="rotate(-30 6.8 13.5)" fill="white" opacity="0.3" />
        <ellipse cx="17.2" cy="13.5" rx="0.8" ry="1.2" transform="rotate(30 17.2 13.5)" fill="white" opacity="0.3" />
    </svg>
);
