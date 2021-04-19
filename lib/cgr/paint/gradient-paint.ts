import { Transform } from "@reflect-ui/uiutils/lib/types";
import { cgrmixin } from "..";
import { RGBAF } from "../../color";
import { GradientType } from "../../gradient/gradient.manifest";

export interface GradientPaint extends cgrmixin.PaintMixin {
    type: "GRADIENT";
    gradientType: GradientType;
    readonly gradientTransform: Transform;
    stops: Array<number>;
    colors: Array<RGBAF>;
}
