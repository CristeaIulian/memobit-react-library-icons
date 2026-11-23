// @memobit/icons/colored — multi-colour variants of icons in the main set, for places where an
// icon should be told apart at a glance (an app launcher's tiles) rather than sit in a line of text.
//
// Each variant is keyed by the name of the single-colour icon it redraws, so any icon can gain one
// and a consumer can ask for the coloured variant of any name, falling back to the single-colour
// icon while there is none. Like the animated set they stay out of iconMap, the categories and the
// Vite trim plugin. They draw with fixed colours from ./colored/palette instead of currentColor;
// `hue` is each one's main colour, for a backdrop or an accent that matches it. `ColoredIcon` in
// @memobit/libs renders them by name.

import type { ReactElement } from 'react';

import { antenna } from './colored/antenna';
import { balloon } from './colored/balloon';
import { book } from './colored/book';
import { brain } from './colored/brain';
import { building } from './colored/building';
import { camera } from './colored/camera';
import { car } from './colored/car';
import { chart } from './colored/chart';
import { checkmark } from './colored/checkmark';
import { cook } from './colored/cook';
import { creditCard } from './colored/credit-card';
import { document } from './colored/document';
import { earth } from './colored/earth';
import { folder } from './colored/folder';
import { graduation } from './colored/graduation';
import { grid } from './colored/grid';
import { headphones } from './colored/headphones';
import { heart } from './colored/heart';
import { history } from './colored/history';
import { home } from './colored/home';
import { image } from './colored/image';
import { joystick } from './colored/joystick';
import { layers } from './colored/layers';
import { lightBulb } from './colored/light-bulb';
import { lightning } from './colored/lightning';
import { link } from './colored/link';
import { lock } from './colored/lock';
import { map } from './colored/map';
import { movie } from './colored/movie';
import { musicalNote } from './colored/musical-note';
import { palette } from './colored/palette';
import { plane } from './colored/plane';
import { plug } from './colored/plug';
import { power } from './colored/power';
import { puzzle } from './colored/puzzle';
import { robot } from './colored/robot';
import { salad } from './colored/salad';
import { satellite } from './colored/satellite';
import { search } from './colored/search';
import { shield } from './colored/shield';
import { shoppingCart } from './colored/shopping-cart';
import { stethoscope } from './colored/stethoscope';
import { synchronize } from './colored/synchronize';
import { text } from './colored/text';
import { trendUp } from './colored/trend-up';
import { wait } from './colored/wait';
import type { IconName } from './iconNames';

export interface ColoredIcon {
    icon: ReactElement;
    /** The icon's main colour. */
    hue: string;
}

export const coloredIconMap = {
    antenna: { icon: antenna, hue: palette.teal },
    balloon: { icon: balloon, hue: palette.purple },
    book: { icon: book, hue: palette.ochre },
    brain: { icon: brain, hue: palette.pink },
    building: { icon: building, hue: palette.sky },
    camera: { icon: camera, hue: palette.indigo },
    car: { icon: car, hue: palette.blue },
    chart: { icon: chart, hue: palette.green },
    checkmark: { icon: checkmark, hue: palette.emerald },
    cook: { icon: cook, hue: palette.orange },
    'credit-card': { icon: creditCard, hue: palette.cyan },
    document: { icon: document, hue: palette.blue },
    earth: { icon: earth, hue: palette.sky },
    folder: { icon: folder, hue: palette.amber },
    graduation: { icon: graduation, hue: palette.indigo },
    grid: { icon: grid, hue: palette.blue },
    headphones: { icon: headphones, hue: palette.violet },
    heart: { icon: heart, hue: palette.red },
    history: { icon: history, hue: palette.teal },
    home: { icon: home, hue: palette.redDeep },
    image: { icon: image, hue: palette.sky },
    joystick: { icon: joystick, hue: palette.red },
    layers: { icon: layers, hue: palette.indigo },
    'light-bulb': { icon: lightBulb, hue: palette.yellowDeep },
    lightning: { icon: lightning, hue: palette.amber },
    link: { icon: link, hue: palette.blue },
    lock: { icon: lock, hue: palette.amber },
    map: { icon: map, hue: palette.green },
    movie: { icon: movie, hue: palette.violet },
    'musical-note': { icon: musicalNote, hue: palette.fuchsia },
    plane: { icon: plane, hue: palette.sky },
    plug: { icon: plug, hue: palette.orange },
    power: { icon: power, hue: palette.red },
    puzzle: { icon: puzzle, hue: palette.lime },
    robot: { icon: robot, hue: palette.cyan },
    salad: { icon: salad, hue: palette.green },
    satellite: { icon: satellite, hue: palette.blue },
    search: { icon: search, hue: palette.sky },
    shield: { icon: shield, hue: palette.emerald },
    'shopping-cart': { icon: shoppingCart, hue: palette.orange },
    stethoscope: { icon: stethoscope, hue: palette.rose },
    synchronize: { icon: synchronize, hue: palette.sky },
    text: { icon: text, hue: palette.indigo },
    'trend-up': { icon: trendUp, hue: palette.green },
    wait: { icon: wait, hue: palette.amber },
} satisfies Partial<Record<IconName, ColoredIcon>>;

export type ColoredIconName = keyof typeof coloredIconMap;

const lookup: Partial<Record<IconName, ColoredIcon>> = coloredIconMap;

/** The coloured variant of an icon, or undefined while it has none. */
export const getColoredIcon = (name: IconName): ColoredIcon | undefined => lookup[name];
