import { Widget } from "../widget";
import { Axis } from "../axis";
import { CrossAxisAlignment } from "../cross-axis-alignment";
import { MainAxisAlignment } from "../main-axis-alignment";
import { MainAxisSize } from "../main-axis-size";
import { VerticalDirection } from "../vertical-direction";
import { DimensionLength } from "../length";

export interface IFlexManifest<T = Widget> {
    children: T[];
    direction: Axis;
    crossAxisAlignment?: CrossAxisAlignment;
    verticalDirection?: VerticalDirection;
    mainAxisAlignment?: MainAxisAlignment;
    mainAxisSize?: MainAxisSize;
    flex?: number;
    itemSpacing?: number;
    width?: DimensionLength;
    height?: DimensionLength;
}

export type FlexManifest = IFlexManifest;
