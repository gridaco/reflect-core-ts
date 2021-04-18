import { Fill } from "../fill";
import { Stroke } from "../stroke";

/**
 * this is GeometryMixin on figma plugin typings
 */
export interface PaintableMixin {
    fills: Array<Fill>;
    strokes: Array<Stroke>;
}
