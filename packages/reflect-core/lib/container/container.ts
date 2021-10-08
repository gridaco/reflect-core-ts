import { Background } from "../background";
import { Border } from "../border";
import { BoxShadowManifest } from "../box-shadow";
import { BoxShape } from "../box-shape";
import { BorderRadiusManifest, EdgeInsets } from "../";
import { Widget, WidgetKey } from "../widget";

export type DimensionLength =
    | number
    | Calculation
    | `${number}%`
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

export interface IContainerInitializerProps {
    children: Widget[] | Widget;
    boxShadow?: BoxShadowManifest;
    width?: number;
    height?: number;
    margin?: EdgeInsets;
    padding?: EdgeInsets;
    background?: Background;
    border?: Border;
    borderRadius?: BorderRadiusManifest;
}

/**
 * Container, a node equivalant.
 */
export class Container extends Widget {
    _type = "Container";

    /**
     * @deprecated
     */
    x: number;
    /**
     * @deprecated
     */
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
    border?: Border;
    borderRadius?: BorderRadiusManifest;
    visible: boolean = true;

    // effects
    boxShadow?: BoxShadowManifest;
    background?: Background;

    constructor({
        key = undefined,
        children,
        margin,
        padding,
        background,
        boxShadow,
        borderRadius,
        border,
        width,
        height,
    }: {
        key: WidgetKey;
    } & IContainerInitializerProps) {
        super({
            key: key,
        });

        this.children = children;
        this.boxShadow = boxShadow;
        this.margin = margin;
        this.padding = padding;
        this.background = background;
        this.borderRadius = borderRadius;
        this.border = border;
        this.width = width;
        this.height = height;
    }
}
