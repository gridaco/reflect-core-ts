import { types } from "@reflect-ui/uiutils";
import { cgrmixin } from "..";
import { RGBAF } from "../../color";
import { GradientType } from "../../gradient/gradient.manifest";

export interface GradientPaint extends cgrmixin.PaintMixin {
    type: "GRADIENT";
    gradientType: GradientType;
    readonly gradientTransform: types.Transform;
    stops: Array<number>;
    colors: Array<RGBAF>;
}
