import { BackgroundPaintLike } from "../background";
import { BoxShadowManifest } from "../box-shadow";
import { GradientPaint } from "../cgr";
import { Color } from "../color";
import { EdgeInsets } from "../ui";
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
    fills: any[]; // todo
    borders: any[]; // todo

    visible: boolean;
    opacity: number;
    // filter?
    // transform
    // effects
    boxShadow?: BoxShadowManifest;
    background?: BackgroundPaintLike[];

    constructor({
        key = undefined,
        children,
        margin,
        padding,
        background,
    }: {
        key: WidgetKey;
        children: Widget[] | Widget;
        boxShadow?: BoxShadowManifest;
        margin?: EdgeInsets;
        padding?: EdgeInsets;
        background?: BackgroundPaintLike[];
    }) {
        super({
            key: key,
        });

        this.children = children;

        this.boxShadow = this.boxShadow;
        this.margin = margin;
        this.padding = padding;
        this.background = background;
    }
}
