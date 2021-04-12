import { Color } from "../../color";
import { Vector } from "../../uiutils/types";
import { BlendMode } from "../../cg/filters";

export interface ShadowEffect {
    readonly color: Color;
    readonly offset: Vector;
    readonly radius: number;
    readonly spread?: number;
    readonly enabled: boolean;
    readonly blendMode: BlendMode;
}
