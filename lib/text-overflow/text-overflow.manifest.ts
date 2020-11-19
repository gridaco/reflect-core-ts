/**
 * css: https://developer.mozilla.org/en-US/docs/Web/CSS/text-overflow
 * flutter: https://api.flutter.dev/flutter/rendering/TextOverflow-class.html
 */
export enum TextOverflow {
    clip,
    ellipsis,
    fade,
    visible
}

export type TextOverflowManifest = TextOverflow