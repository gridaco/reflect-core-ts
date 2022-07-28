import { Background } from "../background";
import { BoxShadowManifest } from "../box-shadow";
import type { Border, BorderRadiusManifest, Clip, EdgeInsets } from "..";
import {
    DefaultStyleMultiChildRenderObjectWidget,
    Widget,
    WidgetKey,
} from "../widget";

export class Stack extends DefaultStyleMultiChildRenderObjectWidget {
    readonly _type: "Stack" = "Stack";

    width: number;
    height: number;
    boxShadow?: BoxShadowManifest[];
    clipBehavior?: Clip;
    children: Widget[];

    constructor(p: {
        key: WidgetKey;
        children: Widget[];
        width: number;
        height: number;
        boxShadow?: BoxShadowManifest[];
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
