import { Color } from "../color";
import { Offset } from "../offset";

/**
 * Currently not supporting inner shadow
 *
 * Unlike BoxShadow, TextShadow does not support spreadRadius for technical reasons.
 * But they say they are willing to help.
 *
 * https://www.w3.org/TR/css-text-decor-4/#propdef-text-shadow
 */

export interface TextShadow {
    color: Color;
    offset: Offset;
    blurRadius: number;
    spreadRadius?: number;
}

export type TextShadowManifest = TextShadow;
