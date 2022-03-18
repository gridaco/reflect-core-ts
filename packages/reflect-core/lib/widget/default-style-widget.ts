import { Widget } from ".";
import { Background } from "../background";
import { Border } from "../border";
import { BorderRadiusManifest } from "../border-radius";
import { BoxShadowManifest } from "../box-shadow";
import { BoxShape } from "../box-shape";
import { EdgeInsets } from "../edge-insets";
import { DimensionLength } from "../length";
import {
    MultiChildRenderObjectWidget,
    RenderObjectWidget,
    SingleChildRenderObjectWidget,
    WidgetKey,
} from "./widget";

export interface IWHStyleWidget {
    width?: DimensionLength;
    height?: DimensionLength;
    minWidth?: DimensionLength;
    minHeight?: DimensionLength;
    maxWidth?: DimensionLength;
    maxHeight?: DimensionLength;
}

export interface IPositionedWidget {
    x?: number;
    y?: number;
}

export interface IBoxShadowWidget {
    boxShadow?: BoxShadowManifest[];
}

export interface IEdgeInsetsWidget {
    padding?: EdgeInsets;
    margin?: EdgeInsets;
}

export interface IDefaultStyleWidget
    extends IWHStyleWidget,
        IPositionedWidget,
        IBoxShadowWidget,
        IEdgeInsetsWidget {}

export interface IDefaultStyleInitializerProps {
    boxShadow?: BoxShadowManifest[];
    width?: DimensionLength;
    height?: DimensionLength;
    margin?: EdgeInsets;
    padding?: EdgeInsets;
    background?: Background;
    border?: Border;
    borderRadius?: BorderRadiusManifest;
}

export class DefaultStyleMultiChildRenderObjectWidget
    extends MultiChildRenderObjectWidget
    implements IDefaultStyleWidget
{
    // IWHStyleWidget
    width?: DimensionLength;
    height?: DimensionLength;
    // IPositionWidget
    x?: number;
    y?: number;
    /// IBoxShadowWidget
    boxShadow?: BoxShadowManifest[];
    // IEdgeInsetsWidget
    padding?: EdgeInsets;
    margin?: EdgeInsets;

    background?: Background;
    minWidth?: DimensionLength;
    minHeight?: DimensionLength;
    maxWidth?: DimensionLength;
    maxHeight?: DimensionLength;

    shape?: BoxShape;
    border?: Border;
    borderRadius?: BorderRadiusManifest;
    visible: boolean = true;

    constructor({
        key = undefined,
        children = [],
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
        children: Array<Widget>;
    } & IDefaultStyleInitializerProps) {
        super({
            key: key,
            children: children,
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

export class DefaultStyleSingleChildRenderObjectWidget
    extends SingleChildRenderObjectWidget
    implements IDefaultStyleWidget
{
    // IWHStyleWidget
    width?: DimensionLength;
    height?: DimensionLength;
    // IPositionWidget
    x?: number;
    y?: number;
    /// IBoxShadowWidget
    boxShadow?: BoxShadowManifest[];
    // IEdgeInsetsWidget
    padding?: EdgeInsets;
    margin?: EdgeInsets;

    background?: Background;
    minWidth?: DimensionLength;
    minHeight?: DimensionLength;
    maxWidth?: DimensionLength;
    maxHeight?: DimensionLength;

    shape?: BoxShape;
    border?: Border;
    borderRadius?: BorderRadiusManifest;
    visible: boolean = true;

    constructor({
        key = undefined,
        child,
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
        child?: Widget;
    } & IDefaultStyleInitializerProps) {
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

/**
 * A handy base widget that contains general styling properties.
 */
export class DefaultStyleWidget
    extends RenderObjectWidget
    implements IDefaultStyleWidget
{
    // IWHStyleWidget
    width?: number;
    height?: number;
    // IPositionWidget
    x?: number;
    y?: number;
    /// IBoxShadowWidget
    boxShadow?: BoxShadowManifest[];
    // IEdgeInsetsWidget
    padding?: EdgeInsets;
    margin?: EdgeInsets;

    constructor(p?: { key: WidgetKey }) {
        super(p);
    }
}
