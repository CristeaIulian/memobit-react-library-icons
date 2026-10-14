import type { ReactElement } from 'react';

export type IconLoader = () => Promise<ReactElement>;

export interface IconRegistry {
    /** False when every icon the app can have is already in memory, so nothing will ever load. */
    canLoadMore: boolean;
    getIcon: (name: string) => ReactElement | undefined;
    /** Resolves to undefined for a name that is neither in memory nor loadable. */
    loadIcon: (name: string) => Promise<ReactElement | undefined>;
    loadAllIcons: () => Promise<Readonly<Record<string, ReactElement>>>;
}

/**
 * Lookup behind `@memobit/icons/map`. Without loaders it is a plain view over the static map,
 * which is what the full map and a trimmed build give. With loaders (the Vite plugin's `lazy`
 * mode) a name missing from the static map is fetched on demand and kept, so `getIcon` finds
 * it synchronously from then on.
 */
export const createIconRegistry = (staticIcons: Readonly<Record<string, ReactElement>>, loaders?: Readonly<Record<string, IconLoader>>): IconRegistry => {
    const icons: Record<string, ReactElement> = { ...staticIcons };
    const pending = new Map<string, Promise<ReactElement | undefined>>();
    let allIcons: Promise<Readonly<Record<string, ReactElement>>> | null = null;

    const canLoadMore = loaders !== undefined && Object.keys(loaders).length > 0;

    const loadIcon = (name: string): Promise<ReactElement | undefined> => {
        const known = icons[name];

        if (known !== undefined) {
            return Promise.resolve(known);
        }

        const loader = loaders?.[name];

        if (loader === undefined) {
            return Promise.resolve(undefined);
        }

        const inFlight = pending.get(name);

        if (inFlight) {
            return inFlight;
        }

        const request = loader().then(
            icon => {
                icons[name] = icon;
                pending.delete(name);
                return icon;
            },
            (error: unknown) => {
                // Forget the failure so a later render can retry, e.g. after a dropped connection.
                pending.delete(name);
                throw error;
            }
        );

        pending.set(name, request);
        return request;
    };

    const loadAllIcons = (): Promise<Readonly<Record<string, ReactElement>>> => {
        if (!canLoadMore) {
            return Promise.resolve(icons);
        }

        if (!allIcons) {
            const names = Object.keys(loaders ?? {});

            allIcons = Promise.all(names.map(loadIcon)).then(
                // Static names come first in the map, so sort to give pickers a stable alphabetical order.
                () =>
                    Object.fromEntries(
                        Object.keys(icons)
                            .sort()
                            .map(name => [name, icons[name]])
                    ),
                (error: unknown) => {
                    allIcons = null;
                    throw error;
                }
            );
        }

        return allIcons;
    };

    return {
        canLoadMore,
        getIcon: name => icons[name],
        loadIcon,
        loadAllIcons,
    };
};
