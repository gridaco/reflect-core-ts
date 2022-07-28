import type { BlendMode } from "@reflect-ui/cg";
import { types } from "@reflect-ui/uiutils";
import { cgrmixin } from "..";

export interface SolidPaint extends cgrmixin.PaintMixin {
    readonly type: "SOLID";
    readonly color: types.RGBAF;
    readonly blendMode?: BlendMode;
}
