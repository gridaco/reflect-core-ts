import type { BlendMode } from "@reflect-ui/cg";
import { Color } from "../../color";
import { Vector } from "../../uiutils/types";

export interface ShadowEffect {
    readonly color: Color;
    readonly offset: Vector;
    readonly radius: number;
    readonly spread?: number;
    readonly enabled: boolean;
    readonly blendMode: BlendMode;
}
