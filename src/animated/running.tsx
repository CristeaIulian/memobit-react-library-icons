import type { ReactElement } from 'react';

// One stride; the far limbs run the same swing half a stride behind.
const STRIDE_SECONDS = 0.7;
const HALF_STRIDE = `-${STRIDE_SECONDS / 2}s`;
const EASE = '0.45 0 0.55 1';

/** Rotates its group around the joint at the group's origin, through the angles (0 hangs straight down, negative swings forward). */
const swing = (angles: number[], keyTimes: number[], begin = '0s'): ReactElement => (
    <animateTransform
        attributeName="transform"
        type="rotate"
        values={angles.join(';')}
        keyTimes={keyTimes.join(';')}
        keySplines={keyTimes
            .slice(1)
            .map(() => EASE)
            .join(';')}
        calcMode="spline"
        dur={`${STRIDE_SECONDS}s`}
        begin={begin}
        repeatCount="indefinite"
    />
);

/** The upper arm swings from the shoulder, the forearm held bent forward. */
const arm = (begin?: string): ReactElement => (
    <g transform="translate(13.6 8.9)">
        <g>
            {swing([40, -45, 40], [0, 0.5, 1], begin)}
            <line x1="0" y1="0" x2="0" y2="3.6" />
            <g transform="translate(0 3.6) rotate(-85)">
                <line x1="0" y1="0" x2="0" y2="3.2" />
            </g>
        </g>
    </g>
);

/** The thigh swings from the hip, the shin folds back on the recovery and reaches out to land. */
const leg = (begin?: string): ReactElement => (
    <g transform="translate(11.5 13.6)">
        <g>
            {swing([-45, 35, -45], [0, 0.5, 1], begin)}
            <line x1="0" y1="0" x2="0" y2="4.6" />
            <g transform="translate(0 4.6)">
                <g>
                    {swing([10, 20, 100, 10], [0, 0.5, 0.75, 1], begin)}
                    <line x1="0" y1="0" x2="0" y2="4.8" />
                </g>
            </g>
        </g>
    </g>
);

/**
 * A stick figure running in place, with a slight bob. The limbs are SMIL animations rather than CSS
 * ones, as each joint turns around its own point inside the limb above it. The far arm and leg are
 * fainter, so the two legs read apart even at text size.
 */
export const running = (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="1em"
        height="1em"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
    >
        <g>
            <animateTransform attributeName="transform" type="translate" values="0 0;0 -0.8;0 0" dur={`${STRIDE_SECONDS / 2}s`} repeatCount="indefinite" />
            <g opacity="0.55">
                {arm(HALF_STRIDE)}
                {leg(HALF_STRIDE)}
            </g>
            <circle cx="15" cy="4.2" r="2.3" fill="currentColor" stroke="none" />
            <line x1="14" y1="8" x2="11.5" y2="13.6" />
            {leg()}
            {arm()}
        </g>
    </svg>
);
