import { RGBAF } from "@reflect-ui/uiutils/lib/types";
import { cgrmixin } from "..";
import { BlendMode } from "../../cg/filters/blend-mode";

export interface SolidPaint extends cgrmixin.PaintMixin {
    readonly type: "SOLID";
    readonly color: RGBAF;
    readonly blendMode?: BlendMode;
}
