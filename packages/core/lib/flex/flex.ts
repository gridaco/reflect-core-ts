import {
    DefaultStyleMultiChildRenderObjectWidget,
    Widget,
    WidgetKey,
} from "../widget";
import { Axis } from "../axis";
import { CrossAxisAlignment } from "../cross-axis-alignment";
import { IFlexManifest } from "./flex.manifest";
import { MainAxisAlignment } from "../main-axis-alignment";
import { MainAxisSize } from "../main-axis-size";
import { VerticalDirection } from "../vertical-direction";
import { BoxShadowManifest } from "../box-shadow";
import { Background } from "../background";
import type {
    Border,
    BorderRadiusManifest,
    DimensionLength,
    EdgeInsets,
} from "..";

/**
 * references:
 *
 * [flutter#flex](https://api.flutter.dev/flutter/widgets/Flex-class.html)
 */
export class Flex
    extends DefaultStyleMultiChildRenderObjectWidget
    implements IFlexManifest
{
    readonly _type: "Flex" | "Column" | "Row" | "Wrap" = "Flex";
    children: Widget[];
    crossAxisAlignment: CrossAxisAlignment;
    direction: Axis;
    mainAxisAlignment: MainAxisAlignment;

    /**
     * rather desides wrap content or fill its parent
     * - if min, wrap content
     * - if max, fill its parent
     */
    mainAxisSize: MainAxisSize;

    verticalDirection: VerticalDirection;
    flex: number;
    itemSpacing: number;

    constructor({
        key,
        direction,
        mainAxisAlignment = MainAxisAlignment.start,
        crossAxisAlignment = CrossAxisAlignment.center,
        mainAxisSize,
        children = [],
        verticalDirection,
        //
        flex,
        itemSpacing = 0,
        boxShadow,
        margin,
        padding,
        background,
        width,
        height,
        borderRadius,
        border,
    }: {
        key?: WidgetKey;
        width?: DimensionLength; //| "auto";
        height?: DimensionLength; // | "auto";
        children?: Widget[];
        crossAxisAlignment?: CrossAxisAlignment;
        direction?: Axis;
        itemSpacing?: number;
        flex?: number;
        verticalDirection?: VerticalDirection;
        mainAxisAlignment?: MainAxisAlignment;
        mainAxisSize?: MainAxisSize;
        //
        boxShadow?: BoxShadowManifest[];
        margin?: EdgeInsets;
        padding?: EdgeInsets;
        background?: Background;
        borderRadius?: BorderRadiusManifest;
        border?: Border;
    }) {
        super({
            key: key,
            children: children,
            width: width,
            height: height,
            margin: margin,
            padding: padding,
            background: background,
            boxShadow: boxShadow,
            borderRadius: borderRadius,
            border: border,
        });

        this.children = children;
        this.crossAxisAlignment = crossAxisAlignment;
        this.direction = direction;
        this.mainAxisAlignment = mainAxisAlignment;
        this.mainAxisSize = mainAxisSize;
        this.verticalDirection = verticalDirection;
        this.flex = flex;
        this.itemSpacing = itemSpacing;
    }
}
