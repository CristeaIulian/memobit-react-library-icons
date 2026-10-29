// @memobit/icons/animated — icons that move, for something happening right now (motion in a
// room, a job running).
//
// Kept apart from the static set: they are not in iconMap, the IconName union, the categories
// or the Vite trim plugin, and they may use strokes and SMIL animation where a static icon is a
// filled path. The set is small, so the one map here holds them all; `AnimatedIcon` in
// @memobit/libs renders them by name.

import type { ReactElement } from 'react';

import { running } from './animated/running';

export const animatedIconMap = {
    running,
} satisfies Record<string, ReactElement>;

export type AnimatedIconName = keyof typeof animatedIconMap;

/** What each animated icon is for, shown in the icon catalog. */
export const animatedIconDescriptions: Readonly<Record<AnimatedIconName, string>> = {
    running: 'Someone moving right now: motion or presence detected.',
};
