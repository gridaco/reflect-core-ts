import { Widget } from "../../widget";
import { Axis } from "./axis";
import { CrossAxisAlignment } from "./cross-axis-alignment";
import { MainAxisAlignment } from "./main-axis-alignment";
import { MainAxisSize } from "./main-axis-size";
import { VerticalDirection } from "./vertical-direction";

export interface IFlexManifest {
    children: Widget[];
    crossAxisAlignment: CrossAxisAlignment;
    direction: Axis;
    verticalDirection: VerticalDirection;
    mainAxisAlignment: MainAxisAlignment;
    mainAxisSize: MainAxisSize;
}

export type FlexManifest = IFlexManifest;
