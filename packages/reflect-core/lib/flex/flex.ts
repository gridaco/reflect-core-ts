import { Widget, WidgetKey } from "../widget";
import { Axis } from "../axis";
import { CrossAxisAlignment } from "../cross-axis-alignment";
import { IFlexManifest } from "./flex.manifest";
import { MainAxisAlignment } from "../main-axis-alignment";
import { MainAxisSize } from "../main-axis-size";
import { VerticalDirection } from "../vertical-direction";
import { BoxShadowManifest } from "../box-shadow";
import { Container } from "../container";
import { BackgroundPaintLike } from "../background";
import type { Color, EdgeInsets } from "..";

/**
 * references:
 *
 * [flutter#flex](https://api.flutter.dev/flutter/widgets/Flex-class.html)
 */
export class Flex extends Container implements IFlexManifest {
    readonly _type: "Flex" | "Column" | "Row" = "Flex";
    children: Widget[];
    crossAxisAlignment: CrossAxisAlignment;
    direction: Axis;
    mainAxisAlignment: MainAxisAlignment;
    mainAxisSize: MainAxisSize;
    verticalDirection: VerticalDirection;

    constructor({
        key,
        direction,
        mainAxisAlignment = MainAxisAlignment.start,
        crossAxisAlignment = CrossAxisAlignment.center,
        mainAxisSize = MainAxisSize.max,
        children = [],
        verticalDirection,
        //
        boxShadow,
        margin,
        padding,
        background,
        color,
    }: {
        key?: WidgetKey;
        children?: Widget[];
        crossAxisAlignment?: CrossAxisAlignment;
        direction?: Axis;
        verticalDirection: VerticalDirection;
        mainAxisAlignment?: MainAxisAlignment;
        mainAxisSize?: MainAxisSize;
        //
        boxShadow?: BoxShadowManifest;
        margin?: EdgeInsets;
        padding?: EdgeInsets;
        background?: BackgroundPaintLike[];
        color?: Color;
    }) {
        super({
            key: key,
            children: children,
            margin: margin,
            padding: padding,
            background: background,
            boxShadow: boxShadow,
            color: color,
        });

        this.children = children;
        this.crossAxisAlignment = crossAxisAlignment;
        this.direction = direction;
        this.mainAxisAlignment = mainAxisAlignment;
        this.mainAxisSize = mainAxisSize;
        this.verticalDirection = verticalDirection;
    }
}
