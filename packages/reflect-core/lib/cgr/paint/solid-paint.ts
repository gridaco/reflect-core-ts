import { types } from "@reflect-ui/uiutils";
import { cgrmixin } from "..";
import { BlendMode } from "../../cg/filters/blend-mode";

export interface SolidPaint extends cgrmixin.PaintMixin {
    readonly type: "SOLID";
    readonly color: types.RGBAF;
    readonly blendMode?: BlendMode;
}
