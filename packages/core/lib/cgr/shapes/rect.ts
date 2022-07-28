import { cgrmixin } from "..";
import type { BorderRadiusManifest } from "../../";

export interface Rect
    extends cgrmixin.DefaultShapeMixin,
        cgrmixin.TransformMixin {
    borderRadius?: BorderRadiusManifest;
}
