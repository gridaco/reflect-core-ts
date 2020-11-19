import { Colors } from "./colors"

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
export type Color = RGB | RGBA | HexColor | ValueColor

export interface ColorManifest {

}