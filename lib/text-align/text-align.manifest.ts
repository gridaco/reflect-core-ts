/**
 * css: https://developer.mozilla.org/en-US/docs/Web/CSS/text-align
 * flutter: https://api.flutter.dev/flutter/dart-ui/TextAlign-class.html
 */
export enum TextAlign {
    start,
    end,
    left,
    right,
    center,
    justify,
}

/**
 * [flutter TextAlignVertical](https://api.flutter.dev/flutter/painting/TextAlignVertical-class.html)
 */
export enum TextAlignVertical {
    start,
    center,
    bottom
}

export type TextAlignManifest = TextAlign
export type TextAlignVerticalManifest = TextAlignVertical