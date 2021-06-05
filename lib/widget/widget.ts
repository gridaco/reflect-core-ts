import { BoxShadowManifest } from "../box-shadow";
import { EdgeInsets } from "../ui/edge-insets";
import {
    EdgeInsetsGeomatryManifest,
    EdgeInsetsGeometry,
} from "../ui/edge-insets-geomatry";

/**
 * the default widget key interface. infered from design source.
 */
export interface WidgetKey {
    id: string;
    originName: string;
}

export class WidgetKey {
    id: string;
    originName: string;
    constructor({
        id = `${Math.random()}`.replace(".", ""),
        originName = "unknown",
    }: {
        id: string;
        originName: string;
    }) {
        this.id = id;
        this.originName = originName;
    }
}

type WidgetKeyLike = WidgetKey;

export interface IWHStyleWidget {
    width?: number;
    height?: number;
}

export interface IPositionedWidget {
    x?: number;
    y?: number;
}

export interface IBoxShadowWidget {
    boxShadow?: BoxShadowManifest;
}

export interface IEdgeInsetsWidget {
    padding?: EdgeInsetsGeometry;
    margin?: EdgeInsetsGeometry;
}

/**
 * Reflect core widget
 */
export class Widget
    implements
        IWHStyleWidget,
        IPositionedWidget,
        IBoxShadowWidget,
        IEdgeInsetsWidget {
    readonly _type: string;
    readonly key?: WidgetKeyLike;
    children: Widget[] | Widget;

    // IWHStyleWidget
    width: number;
    height?: number;

    // IPositionWidget
    x?: number;
    y?: number;

    /// IBoxShadowWidget
    boxShadow?: BoxShadowManifest;

    // IEdgeInsetsWidget
    padding?: EdgeInsetsGeometry;
    margin?: EdgeInsetsGeometry;

    constructor(p?: { key: WidgetKeyLike }) {
        this.key = p?.key;
    }
}
