/**
 * css: https://developer.mozilla.org/en-US/docs/Web/CSS/text-decoration
 * flutter: https://api.flutter.dev/flutter/dart-ui/TextDecoration-class.html
 */
export enum TextDecoration {
    none,
    underline,
    overline,
    linethrough,
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

export type TextDecorationManifest = TextDecoration
export type TextDecorationStyleManifest = TextDecorationStyle