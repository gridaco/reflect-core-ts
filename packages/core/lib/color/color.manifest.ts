import { Colors } from "./colors";

/**
 * the generic built-form color format, used for color converters
 */
export enum ColorFormat {
    unknown = "unknown",
    hex = "hex",
    hex6 = "hex6",
    hex8 = "hex8",
    rgba = "rbba",
    /**
     * rgba represended by float values. r: 255 is 1.0F
     */
    rgbaF = "rgbaf",
}

export interface RGB {
    r: number;
    g: number;
    b: number;
}

export interface RGBA extends RGB {
    a: number;
}

/**
 * RGBAF is a color data in RGBA format, but with float numbered value. e.g. R: 255 is R:1 in RGBAF
 */
export interface RGBAF extends RGBA {}

/**
 * hex value color such as "#FFFFFF"
 */
export type HexColor = `#${string}`;

/**
 * number based color such as 0xffffffff
 */
export type ValueColor = number;

/**
 * named color such as 'red', 'black', 'white' and so on.
 * follows reflect default colors
 */
export type NamedColor = Colors;

/**
 * color that is type of object. a utility type
 */
export type ObjectColor = RGB | RGBA | RGBAF;

/**
 * Color type alias.
 */
export type Color = RGB | RGBA | HexColor | ValueColor | NamedColor;

export type ColorManifest = Color;
