/**
 * css: https://developer.mozilla.org/en-US/docs/Web/CSS/text-align
 * 
 * flutter: https://api.flutter.dev/flutter/dart-ui/TextAlign-class.html
 * 
 * figma typings:
 * ```ts
 textAlignHorizontal: "LEFT" | "CENTER" | "RIGHT" | "JUSTIFIED";
 * ```
 * 
 * sketch typings: 
 * ```ts
export declare enum TextHorizontalAlignment {
    Left = 0,
    Right = 1,
    Centered = 2,
    Justified = 3,
    Natural = 4,
}
 * ```
 */
export enum TextAlign {
    start = "start",
    end = "end",
    left = "left",
    right = "right",
    center = "center",
    justify = "justify",
}

export type TextAlign__Api = TextAlign | "inherit";

/**
 * [flutter TextAlignVertical](https://api.flutter.dev/flutter/painting/TextAlignVertical-class.html)
 * 
 * figma:
 * ```ts
textAlignVertical: "TOP" | "CENTER" | "BOTTOM";
 * ```
 * 
 * sketch:
 * ```ts
 export declare enum TextVerticalAlignment {
     Top = 0,
     Middle = 1,
     Bottom = 2
 }
 * ```
 */
export enum TextAlignVertical {
    start = "start",
    center = "center",
    bottom = "bottom",
}

export type TextAlignManifest = TextAlign;
export type TextAlignVerticalManifest = TextAlignVertical;
