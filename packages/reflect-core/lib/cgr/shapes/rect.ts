import { cgrmixin } from "..";
import { BorderRadiusManifest } from "../../ui/border-radius";

export interface Rect
    extends cgrmixin.DefaultShapeMixin,
        cgrmixin.TransformMixin {
    borderRadius?: BorderRadiusManifest;
}
