import { Color } from "../color";
import { Offset } from "../offset";
import { BlendMode } from "../cg/filters";
import { RGBA } from "../color";
import { Vector } from "../uiutils/types";

/**
 * Currently not supporting inner shadow
 */
export interface TextShadow {
    color: Color;
    offset: Offset;
    blurRadius: number;
    spreadRadius: number;
}

export type TextShadowManifest = TextShadow;
