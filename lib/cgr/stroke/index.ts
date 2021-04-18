import { Paint } from "../paint";

export interface Stroke {
    paint: Paint;
    width: number;
    position: StrokePosition;
}

export enum StrokePosition {
    IN = "I",
    OUT = "O",
    CENTER = "C",
}
