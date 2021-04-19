import { cgrmixin } from "..";
import { Paint } from "../paint";

export interface Stroke extends cgrmixin.BaseConceptMixin {
    paint: Paint;
    width: number;
    position: StrokePosition;
}

export enum StrokePosition {
    IN = "I",
    OUT = "O",
    CENTER = "C",
}
