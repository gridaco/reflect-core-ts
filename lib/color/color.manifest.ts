import { Colors } from "./colors"

/**
 * the generic built-form color format, used for color converters
 */
export enum ColorFormat {
    hex = 'hex',
    hex6 = 'hex6',
    hex8 = 'hex8',
    rgba = 'rbba',
    /**
     * rgba represended by float values. r: 255 is 1.0F
     */
    rgbaF = 'rgbaf'
}

export interface RGB {
    r: number
    g: number
    b: number
}

export interface RGBA extends RGB {
    a: number
}

/**
 * hex value color such as "#FFFFFF"
 */
export type HexColor = string

/**
 * number based color such as 0xffffffff
 */
export type ValueColor = number

/**
 * named color such as 'red', 'black', 'white' and so on.
 * follows reflect default colors
 */
export type NamedColor = Colors

/**
 * Color type alias. 
 */
export type Color = RGB | RGBA | HexColor | ValueColor | NamedColor

export type ColorManifest = Color