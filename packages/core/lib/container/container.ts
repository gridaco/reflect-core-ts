import { Background } from "../background";
import { Border } from "../border";
import { BoxShadowManifest } from "../box-shadow";
import { BoxShape } from "../box-shape";
import type { BorderRadiusManifest, DimensionLength, EdgeInsets } from "../";
import {
    DefaultStyleSingleChildRenderObjectWidget,
    Widget,
    WidgetKey,
} from "../widget";

export interface IContainerInitializerProps<C extends Widget = Widget> {
    boxShadow?: BoxShadowManifest[];
    width?: number;
    height?: number;
    margin?: EdgeInsets;
    padding?: EdgeInsets;
    background?: Background;
    border?: Border;
    borderRadius?: BorderRadiusManifest;
    child?: C;
}

/**
 * Container, a node equivalant.
 */
export class Container<
    C extends Widget = Widget
> extends DefaultStyleSingleChildRenderObjectWidget<C> {
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
    boxShadow?: BoxShadowManifest[];
    background?: Background;

    constructor({
        key = undefined,
        margin,
        padding,
        background,
        boxShadow,
        borderRadius,
        border,
        width,
        height,
        child,
    }: {
        key: WidgetKey;
    } & IContainerInitializerProps<C>) {
        super({
            key: key,
            child: child,
        });

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
