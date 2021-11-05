import { Color } from "../color";
import { Offset } from "../offset";

/**
 *
 * [css](https://developer.mozilla.org/en-US/docs/Web/CSS/text-shadow)
 *
 * [flutter](https://api.flutter.dev/flutter/dart-ui/Shadow-class.html)
 *
 * [w3](https://www.w3.org/TR/css-text-decor-4/#propdef-text-shadow)
 *
 * figma: https://www.figma.com/plugin-docs/api/Effect/#dropshadoweffect
 *
 * Currently not supporting inner shadow
 *
 */

export interface TextShadow {
    color: Color;
    offset: Offset;
    blurRadius: number;
    /**
     * According to W3C, `geometry of a glyph is not so simple as a box`.It is likely to be added later.
     */
    spreadRadius?: number;
}

export type TextShadowManifest = TextShadow;
