/**
 * css: https://developer.mozilla.org/en-US/docs/Web/CSS/text-align
 * flutter: https://api.flutter.dev/flutter/dart-ui/TextAlign-class.html
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
 */
export enum TextAlignVertical {
    start = "start",
    center = "center",
    bottom = "bottom",
}

export type TextAlignManifest = TextAlign;
export type TextAlignVerticalManifest = TextAlignVertical;
