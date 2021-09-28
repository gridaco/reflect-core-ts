import { Background } from "../background";
import { BoxShadowManifest } from "../box-shadow";
import { Container } from "../container";
import type { Border, BorderRadiusManifest, Clip, Color, EdgeInsets } from "..";
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
        border?: Border;
        margin?: EdgeInsets;
        padding?: EdgeInsets;
        clipBehavior?: Clip;
        background?: Background;
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
    }
}
