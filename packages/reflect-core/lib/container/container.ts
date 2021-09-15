import { BackgroundPaintLike } from "../background";
import { Border } from "../border";
import { BoxShadowManifest } from "../box-shadow";
import { BoxShape } from "../box-shape";
import { GradientPaint } from "../cgr";
import { Color } from "../color";
import { BorderRadiusManifest, EdgeInsets } from "../";
import { Widget, WidgetKey } from "../widget";

/**
 * Container, a node equivalant.
 */
export class Container extends Widget {
    _type = "Container";

    x: number;
    y: number;
    width: number;
    height: number;

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
    }: {
        key: WidgetKey;
        children: Widget[] | Widget;
        boxShadow?: BoxShadowManifest;
        margin?: EdgeInsets;
        padding?: EdgeInsets;
        background?: BackgroundPaintLike[];
        color?: Color;
    }) {
        super({
            key: key,
        });

        this.children = children;
        this.boxShadow = boxShadow;
        this.margin = margin;
        this.padding = padding;
        this.background = background;
        this.color = color;
    }
}
