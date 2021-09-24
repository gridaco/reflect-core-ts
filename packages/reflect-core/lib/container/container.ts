import { BackgroundPaintLike } from "../background";
import { Border } from "../border";
import { BoxShadowManifest } from "../box-shadow";
import { BoxShape } from "../box-shape";
import { GradientPaint } from "../cgr";
import { Color } from "../color";
import { BorderRadiusManifest, EdgeInsets } from "../";
import { Widget, WidgetKey } from "../widget";

export type DimensionLength =
    | number
    | Calculation
    | `${number}vh`
    | `${number}vw`
    /**
     * css - 100vh / 100vw
     * dart - X / double.infinity
     */
    | "match-screen-size";

export type Calculation = {
    type: "calc";
    operations: Operations | Operation;
};

export type Operations = Array<Operation>;
export type Operation = {
    type: "op";
    op: "+" | "-" | "*" | "/";
    left: DimensionLength;
    right: DimensionLength;
};

/**
 * Container, a node equivalant.
 */
export class Container extends Widget {
    _type = "Container";

    x: number;
    y: number;
    width: number;
    height: number;
    minWidth?: DimensionLength;
    minHeight?: DimensionLength;
    maxWidth?: DimensionLength;
    maxHeight?: DimensionLength;

    padding: EdgeInsets;
    margin: EdgeInsets;
    shape?: BoxShape;
    color: Color;
    border: Border;
    borderRadius?: BorderRadiusManifest;
    visible: boolean = true;
    opacity: number = 1;

    // effects
    boxShadow?: BoxShadowManifest;
    background?: BackgroundPaintLike[]; // TODO: allow other types

    constructor({
        key = undefined,
        children,
        margin,
        padding,
        background,
        color,
        boxShadow,
        borderRadius,
        width,
        height,
    }: {
        key: WidgetKey;
        children: Widget[] | Widget;
        boxShadow?: BoxShadowManifest;
        width?: number;
        height?: number;
        margin?: EdgeInsets;
        padding?: EdgeInsets;
        background?: BackgroundPaintLike[];
        color?: Color;
        borderRadius?: BorderRadiusManifest;
    }) {
        super({
            key: key,
        });

        this.children = children;
        this.boxShadow = boxShadow;
        this.margin = margin;
        this.padding = padding;
        this.background = background;
        this.borderRadius = borderRadius;
        this.color = color;
        this.width = width;
        this.height = height;
    }
}
