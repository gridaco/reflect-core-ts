/**
 * css: https://developer.mozilla.org/en-US/docs/Web/CSS/text-overflow
 * flutter: https://api.flutter.dev/flutter/rendering/TextOverflow-class.html
 */
export enum TextOverflow {
    clip = "clip",
    ellipsis = "ellipsis",
    fade = "fade",
    visible = "visible",
}

export type TextOverflowManifest = TextOverflow;
