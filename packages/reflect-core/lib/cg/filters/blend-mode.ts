/**
 * sketch: 
 * ```
export declare enum BlendMode {
    Normal = 0,
    Darken = 1,
    Multiply = 2,
    ColorBurn = 3,
    Lighten = 4,
    Screen = 5,
    ColorDodge = 6,
    Overlay = 7,
    SoftLight = 8,
    HardLight = 9,
    Difference = 10,
    Exclusion = 11,
    Hue = 12,
    Saturation = 13,
    Color = 14,
    Luminosity = 15,
    PlusDarker = 16,
    PlusLighter = 17,
}
 * ```
 * 
 * figma:
 * ```
type BlendMode =
    | "NORMAL"
    | "DARKEN"
    | "MULTIPLY"
    | "LINEAR_BURN"
    | "COLOR_BURN"
    | "LIGHTEN"
    | "SCREEN"
    | "LINEAR_DODGE"
    | "COLOR_DODGE"
    | "OVERLAY"
    | "SOFT_LIGHT"
    | "HARD_LIGHT"
    | "DIFFERENCE"
    | "EXCLUSION"
    | "HUE"
    | "SATURATION"
    | "COLOR"
    | "LUMINOSITY";
 * ```
 */
export declare enum BlendMode {
    Normal = "Normal",
    Darken = "Darken",
    Multiply = "Multiply",
    /**
     * not available in sketch
     */
    LinearBurn = "LinearBurn",
    ColorBurn = "ColorBurn",
    Lighten = "Lighten",
    Screen = "Screen",
    /**
     * not available in sketch
     */
    LinearDodge = "LinearDodge",
    ColorDodge = "ColorDodge",
    Overlay = "Overlay",
    SoftLight = "SoftLight",
    HardLight = "HardLight",
    Difference = "Difference",
    Exclusion = "Exclusion",
    Hue = "Hue",
    Saturation = "Saturation",
    Color = "Color",
    Luminosity = "Luminosity",
    /**
     * not available in figma
     */
    PlusDarker = "PlusDarker",
    /**
     * not available in figma
     */
    PlusLighter = "PlusLighter",
}
