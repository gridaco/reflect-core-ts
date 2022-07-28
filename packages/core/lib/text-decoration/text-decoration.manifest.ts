/**
 * css: https://developer.mozilla.org/en-US/docs/Web/CSS/text-decoration
 *
 * flutter: https://api.flutter.dev/flutter/dart-ui/TextDecoration-class.html
 *
 * figma: `type TextDecoration = "NONE" | "UNDERLINE" | "STRIKETHROUGH"`
 */
export enum TextDecoration {
    none = "none",
    underline = "underline",
    overline = "overline",
    linethrough = "linethrough",
}

/**
 * css: https://developer.mozilla.org/en-US/docs/Web/CSS/text-decoration-style
 * flutter: https://api.flutter.dev/flutter/dart-ui/TextDecorationStyle-class.html
 */
export enum TextDecorationStyle {
    dashed,
    dotted,
    double,
    solid,
    wavy,
}

export type TextDecorationManifest = TextDecoration;
export type TextDecorationStyleManifest = TextDecorationStyle;
