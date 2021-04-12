import { Transform } from "../../uiutils/types";
/**
 * Part of layout mixin in figma
 */
export interface TransformMixin {
    readonly absoluteTransform: Transform;
    relativeTransform: Transform;
    x: number;
    y: number;
    rotation: number; // In degrees
    width: number;
    height: number;
}
