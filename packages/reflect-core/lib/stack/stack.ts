import { BackgroundPaintLike } from "../background";
import { BoxShadowManifest } from "../box-shadow";
import { Container } from "../container";
import type { BorderRadiusManifest, Clip, Color, EdgeInsets } from "..";
import { Widget, WidgetKey } from "../widget";

export class Stack extends Container {
    readonly _type: "Stack" = "Stack";

    width: number;
    height: number;
    boxShadow?: BoxShadowManifest;
    clipBehavior?: Clip;

    constructor(p: {
        key: WidgetKey;
        children: Widget[];
        width: number;
        height: number;
        boxShadow?: BoxShadowManifest;
        borderRadius?: BorderRadiusManifest;
        margin?: EdgeInsets;
        padding?: EdgeInsets;
        clipBehavior?: Clip;
        color?: Color;
        background?: BackgroundPaintLike[];
    }) {
        super(p);

        this.children = p.children;
        this.clipBehavior = p.clipBehavior;
        this.borderRadius = p.borderRadius;
        this.width = p.width;
        this.height = p.height;
        this.boxShadow = p.boxShadow;
        this.margin = p.margin;
        this.padding = p.padding;
        this.color = p.color;
    }
}
